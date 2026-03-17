import { Product } from "../data/products";

/**
 * Filters applied when searching for products.
 */
export interface ProductFilters {
    /** Target category slug (e.g., 'artesanias'). Optional. */
    category?: string;
    /** Minimum price bound (inclusive). Optional. */
    minPrice?: number;
    /** Maximum price bound (inclusive). Optional. */
    maxPrice?: number;
    /** Free-text search matching name or description. Optional. */
    search?: string;
}

/**
 * Standardized pagination wrapper for domain entities.
 */
export interface PaginatedResult<T> {
    /** Array containing the requested entity page. */
    items: T[];
    /** Absolute total count of items matching the query. */
    total: number;
    /** Current page index (1-based). */
    page: number;
    /** Maximum number of items per page. */
    limit: number;
    /** Total number of available pages based on the limit. */
    totalPages: number;
}

/**
 * Core Data Contract for the Casa Yolotl Product Domain.
 * Abstracts the underlying data access mechanism (Supabase, CloudSQL, etc.)
 */
export interface IProductRepository {
    /**
     * Retrieves a paginated list of all active products.
     * @param {number} [page=1] - The page number to fetch.
     * @param {number} [limit=10] - Number of items per page.
     * @param {string} [locale='es'] - Language context for localized fields.
     * @returns {Promise<PaginatedResult<Product>>} A promise resolving to the paginated product collection.
     * @throws {Error} When the underlying database connection fails.
     */
    getAll(page?: number, limit?: number, locale?: string): Promise<PaginatedResult<Product>>;

    /**
     * Finds a single product by its unique identifier.
     * @param {string} id - The UUID or string ID of the product.
     * @param {string} [locale='es'] - Language context for localized fields.
     * @returns {Promise<Product | undefined>} The requested product, or undefined if not found.
     * @throws {Error} If the query execution fails critically.
     */
    getById(id: string, locale?: string): Promise<Product | undefined>;

    /**
     * Searches the product catalog using complex filters.
     * @param {ProductFilters} filters - Filter criteria (category, price range, text).
     * @param {number} [page=1] - The page number to fetch.
     * @param {number} [limit=10] - Number of items per page.
     * @param {string} [locale='es'] - Language context for text matching.
     * @returns {Promise<PaginatedResult<Product>>} A promise resolving to the filtered result set.
     * @throws {Error} When bad parameters are sent or DB fails.
     */
    find(filters: ProductFilters, page?: number, limit?: number, locale?: string): Promise<PaginatedResult<Product>>;

    /**
     * Administrative Operation: Updates the available physical stock.
     * @param {string} id - The product identifier.
     * @param {number} newStock - The exact new stock quantity. Must be >= 0.
     * @returns {Promise<void>} Resolves when the update is committed.
     * @throws {Error} If the user lacks permissions or the product is invalid.
     */
    updateStock(id: string, newStock: number): Promise<void>;

    /**
     * Administrative Operation: Modifies the base price of a product.
     * @param {string} id - The product identifier.
     * @param {number} newPrice - The exact new price. Must be > 0.
     * @returns {Promise<void>} Resolves when the update is committed.
     * @throws {Error} If the user lacks permissions or the ID is missing.
     */
    updatePrice(id: string, newPrice: number): Promise<void>;
}
