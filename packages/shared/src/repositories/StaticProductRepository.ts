import { IProductRepository } from "./IProductRepository";
import { products, Product } from "../data/products";

export class StaticProductRepository implements IProductRepository {
    async getAll(): Promise<Product[]> {
        return products;
    }

    async getById(id: string): Promise<Product | undefined> {
        return products.find(p => p.id === id);
    }

    async getByCategory(category: string): Promise<Product[]> {
        return products.filter(p => p.category === category);
    }
}
