import { IProductRepository } from "./IProductRepository";
import { StaticProductRepository } from "./StaticProductRepository";
import { SupabaseProductRepository } from "./SupabaseProductRepository";

export type DataSource = "static" | "supabase";

export class ProductRepositoryFactory {
    static getRepository(): IProductRepository {
        // Default to 'static' if not specified
        const source = (process.env.DATA_SOURCE || "static") as DataSource;

        switch (source) {
            case "supabase":
                console.log("[ARCHITECTURE]: Instantiating SupabaseProductRepository");
                return new SupabaseProductRepository();
            case "static":
            default:
                console.log("[ARCHITECTURE]: Instantiating StaticProductRepository");
                return new StaticProductRepository();
        }
    }
}
