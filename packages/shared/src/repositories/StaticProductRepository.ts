import { IProductRepository, ProductFilters, PaginatedResult } from "./IProductRepository";
import { products, Product } from "../data/products";

export class StaticProductRepository implements IProductRepository {
    async getAll(page: number = 1, limit: number = 10, locale?: string): Promise<PaginatedResult<Product>> {
        return this.paginate(products, page, limit);
    }

    async getById(id: string, locale?: string): Promise<Product | undefined> {
        return products.find(p => p.id === id);
    }

    async find(filters: ProductFilters, page: number = 1, limit: number = 10, locale?: string): Promise<PaginatedResult<Product>> {
        let filtered = [...products];

        if (filters.category) {
            filtered = filtered.filter(p => p.category === filters.category);
        }

        if (filters.minPrice !== undefined) {
            filtered = filtered.filter(p => parseFloat(p.price) >= filters.minPrice!);
        }

        if (filters.maxPrice !== undefined) {
            filtered = filtered.filter(p => parseFloat(p.price) <= filters.maxPrice!);
        }

        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchLower) ||
                p.description.toLowerCase().includes(searchLower) ||
                p.seo.keywords.some(k => k.toLowerCase().includes(searchLower))
            );
        }

        return this.paginate(filtered, page, limit);
    }

    async updateStock(id: string, newStock: number): Promise<void> {
        console.log(`[AUTH-AUDIT]: Stock change requested for product ${id}. New stock: ${newStock}`);
    }

    async updatePrice(id: string, newPrice: number): Promise<void> {
        console.log(`[AUTH-AUDIT]: Price change requested for product ${id}. New price: ${newPrice}`);
    }

    private paginate(items: Product[], page: number, limit: number): PaginatedResult<Product> {
        const total = items.length;
        const totalPages = Math.ceil(total / limit);
        const offset = (page - 1) * limit;
        const paginatedItems = items.slice(offset, offset + limit);

        return {
            items: paginatedItems,
            total,
            page,
            limit,
            totalPages
        };
    }
}
