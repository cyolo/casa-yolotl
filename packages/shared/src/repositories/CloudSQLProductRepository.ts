import { IProductRepository, ProductFilters, PaginatedResult } from "./IProductRepository";
import { Product } from "../data/products";

/**
 * CloudSQLProductRepository - Placeholder for GCP Native Postgres implementation.
 * Currently serves as a blueprint for migration from Supabase to GCP native.
 */
export class CloudSQLProductRepository implements IProductRepository {
    /**
     * @inheritdoc
     */
    async getAll(page: number = 1, limit: number = 10, locale?: string): Promise<PaginatedResult<Product>> {
        console.warn("[GCP-MIGRATION]: CloudSQL Repository is currently a placeholder.");
        return this.emptyResult(page, limit);
    }

    /**
     * @inheritdoc
     */
    async getById(id: string, locale?: string): Promise<Product | undefined> {
        return undefined;
    }

    /**
     * @inheritdoc
     */
    async find(filters: ProductFilters, page: number = 1, limit: number = 10, locale?: string): Promise<PaginatedResult<Product>> {
        return this.emptyResult(page, limit);
    }

    /**
     * @inheritdoc
     */
    async updateStock(id: string, newStock: number): Promise<void> {
        console.log(`[AUTH-AUDIT]: CloudSQL Update requested (Placeholder) for product ${id}`);
    }

    /**
     * @inheritdoc
     */
    async updatePrice(id: string, newPrice: number): Promise<void> {
        console.log(`[AUTH-AUDIT]: CloudSQL Update requested (Placeholder) for product ${id}`);
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
