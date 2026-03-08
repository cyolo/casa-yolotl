import { ProductRepositoryFactory } from "../repositories/ProductRepositoryFactory";
import { IProductRepository, ProductFilters, PaginatedResult } from "../repositories/IProductRepository";
import { Product } from "../data/products";

export class ProductService {
    private repository: IProductRepository;

    constructor() {
        this.repository = ProductRepositoryFactory.getRepository();
    }

    async getProducts(page: number = 1, limit: number = 10): Promise<PaginatedResult<Product>> {
        return this.repository.getAll(page, limit);
    }

    async getProductBySlug(id: string): Promise<Product | undefined> {
        return this.repository.getById(id);
    }

    async searchProducts(filters: ProductFilters, page: number = 1, limit: number = 12): Promise<PaginatedResult<Product>> {
        return this.repository.find(filters, page, limit);
    }

    async getProductsByCategory(category: string, page: number = 1, limit: number = 12): Promise<PaginatedResult<Product>> {
        return this.repository.find({ category }, page, limit);
    }
}

// Export a singleton instance for common use
export const productService = new ProductService();
