import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ProductService } from "@casa-yolotl/shared/src/services/ProductService";
import { SecurityValidator } from "@casa-yolotl/shared/src/auth";

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = session.user.email;
    const role = SecurityValidator.getUserRole(email);

    // CEO and ADMIN can list products for inventory
    if (role !== "CEO" && role !== "ADMIN") {
        SecurityValidator.logSecurityEvent("ADMIN_UPDATE_DENIED", {
            email,
            path: "/api/admin/products",
            reason: "Insufficient permissions for product listing"
        });
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    SecurityValidator.logSecurityEvent("ADMIN_PRODUCTS_LIST_REQUEST", { email });

    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "50");
        const locale = searchParams.get("locale") || "es";

        const products = await ProductService.getInstance().getProducts(page, limit, locale);
        return NextResponse.json(products);
    } catch (error) {
        console.error("Error in GET /api/admin/products:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
