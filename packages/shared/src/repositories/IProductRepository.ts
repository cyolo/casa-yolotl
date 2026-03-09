import { Product } from "../data/products";

export interface ProductFilters {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
}

export interface PaginatedResult<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface IProductRepository {
    /**
     * Get all products with pagination
     */
    getAll(page?: number, limit?: number, locale?: string): Promise<PaginatedResult<Product>>;

    /**
     * Find single product by ID
     */
    getById(id: string, locale?: string): Promise<Product | undefined>;

    /**
     * Search products with filters and pagination
     */
    find(filters: ProductFilters, page?: number, limit?: number, locale?: string): Promise<PaginatedResult<Product>>;

    /**
     * Administrative: Update product stock
     */
    updateStock(id: string, newStock: number): Promise<void>;

    /**
     * Administrative: Update product price
     */
    updatePrice(id: string, newPrice: number): Promise<void>;
}
