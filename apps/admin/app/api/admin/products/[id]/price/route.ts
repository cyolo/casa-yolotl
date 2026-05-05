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

    // Only CEO can update pricing
    if (!SecurityValidator.canModifyInventory(role)) {
        SecurityValidator.logSecurityEvent("ADMIN_UPDATE_DENIED", {
            email,
            path: `/api/admin/products/${id}/price`,
            reason: "Only CEO can update pricing"
        });
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { price } = body;

        // Validation
        if (typeof price !== "number" || price < 0 || price > 10000000) {
            SecurityValidator.logSecurityEvent("ADMIN_UPDATE_INVALID_PAYLOAD", { email, id, price });
            return NextResponse.json({ error: "Invalid price value" }, { status: 400 });
        }

        SecurityValidator.logSecurityEvent("ADMIN_PRICE_UPDATE_REQUEST", { email, id, price });

        await ProductService.getInstance().updatePrice(id, price);

        SecurityValidator.logSecurityEvent("ADMIN_PRICE_UPDATE_SUCCESS", { email, id, price });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Error in PATCH /api/admin/products/[id]/price:", error);
        return NextResponse.json({ error: "Unable to update product price" }, { status: 500 });
    }
}
