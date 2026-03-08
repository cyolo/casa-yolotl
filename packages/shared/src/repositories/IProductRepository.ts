import { Product } from "../data/products";

export interface IProductRepository {
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product | undefined>;
    getByCategory(category: string): Promise<Product[]>;
}
