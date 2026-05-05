import { NextRequest, NextResponse } from "next/server";
import { ProductService } from "@casa-yolotl/shared";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // 1. Pagination validation
  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const rawLimit = Number(searchParams.get("limit") ?? 50);
  const limit = Math.min(Math.max(1, rawLimit), 50);

  // 2. Locale validation
  const rawLocale = searchParams.get("locale") ?? "es";
  const locale = ["es", "en"].includes(rawLocale) ? rawLocale : "es";

  // 3. Category validation
  const allowedCategories = [
    "mezcales",
    "artesanias",
    "decoracion",
    "ceramica-montoya"
  ];

  const category = searchParams.get("category");
  const safeCategory = category && allowedCategories.includes(category)
    ? category
    : undefined;

  // 4. Search validation
  const rawSearch = searchParams.get("search") ?? "";
  const search = rawSearch.replace(/[%,()]/g, "").trim().slice(0, 80);

  // 5. Price validation
  const minPriceRaw = searchParams.get("minPrice");
  const maxPriceRaw = searchParams.get("maxPrice");

  const minPriceValue = minPriceRaw ? Number(minPriceRaw) : undefined;
  const maxPriceValue = maxPriceRaw ? Number(maxPriceRaw) : undefined;

  let minPrice = Number.isFinite(minPriceValue)
    ? Math.max(0, minPriceValue as number)
    : undefined;

  let maxPrice = Number.isFinite(maxPriceValue)
    ? Math.max(0, maxPriceValue as number)
    : undefined;

  // 6. Logical price check: if min > max, respond with 400 as requested
  if (minPrice !== undefined && maxPrice !== undefined && minPrice > maxPrice) {
    return NextResponse.json(
      {
        items: [],
        total: 0,
        page,
        limit,
        totalPages: 0,
        error: "minPrice cannot be greater than maxPrice",
      },
      { status: 400 }
    );
  }

  try {
    const productService = ProductService.getInstance();

    const result = safeCategory || search || minPrice !== undefined || maxPrice !== undefined
      ? await productService.searchProducts(
          {
            category: safeCategory,
            search: search || undefined,
            minPrice,
            maxPrice,
          },
          page,
          limit,
          locale
        )
      : await productService.getProducts(page, limit, locale);

    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("[PRODUCTS_API_ERROR]", error);

    return NextResponse.json(
      {
        items: [],
        total: 0,
        page,
        limit,
        totalPages: 0,
        error: "Unable to fetch products",
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
