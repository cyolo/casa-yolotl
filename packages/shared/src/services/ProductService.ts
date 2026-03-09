import { ProductRepositoryFactory } from "../repositories/ProductRepositoryFactory";
import { IProductRepository, ProductFilters, PaginatedResult } from "../repositories/IProductRepository";
import { Product } from "../data/products";

export class ProductService {
    private static instance: ProductService;
    private repository: IProductRepository;

    private constructor() {
        this.repository = ProductRepositoryFactory.getRepository();
    }

    public static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }

    async getProducts(page: number = 1, limit: number = 10, locale: string = 'es'): Promise<PaginatedResult<Product>> {
        return this.repository.getAll(page, limit, locale);
    }

    async getProductBySlug(id: string, locale: string = 'es'): Promise<Product | undefined> {
        return this.repository.getById(id, locale);
    }

    async searchProducts(filters: ProductFilters, page: number = 1, limit: number = 12, locale: string = 'es'): Promise<PaginatedResult<Product>> {
        return this.repository.find(filters, page, limit, locale);
    }

    async getProductsByCategory(category: string, page: number = 1, limit: number = 12, locale: string = 'es'): Promise<PaginatedResult<Product>> {
        return this.repository.find({ category }, page, limit, locale);
    }

    async updateStock(id: string, newStock: number): Promise<void> {
        return this.repository.updateStock(id, newStock);
    }

    async updatePrice(id: string, newPrice: number): Promise<void> {
        return this.repository.updatePrice(id, newPrice);
    }
}

// Support for both patterns during transition
export const productService = ProductService.getInstance();
