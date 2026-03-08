import { IProductRepository, ProductFilters, PaginatedResult } from "./IProductRepository";
import { Product } from "../data/products";

/**
 * Supabase implementation of the product repository.
 * Currently a placeholder for future cloud integration.
 */
export class SupabaseProductRepository implements IProductRepository {
    async getAll(page: number = 1, limit: number = 10): Promise<PaginatedResult<Product>> {
        console.warn("[DATA SOURCE]: Supabase fetch not yet implemented. Falling back to empty.");
        return this.emptyResult(page, limit);
    }

    async getById(id: string): Promise<Product | undefined> {
        console.warn(`[DATA SOURCE]: Supabase fetch for ID ${id} not yet implemented.`);
        return undefined;
    }

    async find(filters: ProductFilters, page: number = 1, limit: number = 10): Promise<PaginatedResult<Product>> {
        console.warn("[DATA SOURCE]: Supabase search not yet implemented.");
        return this.emptyResult(page, limit);
    }

    private emptyResult(page: number, limit: number): PaginatedResult<Product> {
        return {
            items: [],
            total: 0,
            page,
            limit,
            totalPages: 0
        };
    }
}
