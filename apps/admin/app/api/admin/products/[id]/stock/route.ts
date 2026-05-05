import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ProductService } from "@casa-yolotl/shared/src/services/ProductService";
import { SecurityValidator } from "@casa-yolotl/shared/src/auth";

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);
    const { id } = await params;

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = session.user.email ?? "unknown";
    const role = session.user.role;

    // Only CEO can update inventory
    if (!SecurityValidator.canModifyInventory(role)) {
        SecurityValidator.logSecurityEvent("ADMIN_UPDATE_DENIED", {
            email,
            path: `/api/admin/products/${id}/stock`,
            reason: "Only CEO can update inventory"
        });
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { stock } = body;

        // Validation
        if (typeof stock !== "number" || !Number.isInteger(stock) || stock < 0 || stock > 9999) {
            SecurityValidator.logSecurityEvent("ADMIN_UPDATE_INVALID_PAYLOAD", { email, id, stock });
            return NextResponse.json({ error: "Invalid stock value" }, { status: 400 });
        }

        SecurityValidator.logSecurityEvent("ADMIN_STOCK_UPDATE_REQUEST", { email, id, stock });

        await ProductService.getInstance().updateStock(id, stock);

        SecurityValidator.logSecurityEvent("ADMIN_STOCK_UPDATE_SUCCESS", { email, id, stock });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Error in PATCH /api/admin/products/[id]/stock:", error);
        return NextResponse.json({ error: "Unable to update product stock" }, { status: 500 });
    }
}
