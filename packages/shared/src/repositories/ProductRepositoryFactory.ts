import { IProductRepository } from "./IProductRepository";
import { StaticProductRepository } from "./StaticProductRepository";
import { SupabaseProductRepository } from "./SupabaseProductRepository";
import { CloudSQLProductRepository } from "./CloudSQLProductRepository";

export type DataSource = "static" | "supabase" | "cloud-sql";

export class ProductRepositoryFactory {
    static getRepository(): IProductRepository {
        const env = process.env.APP_ENV || 'local';
        let source = (process.env.DATA_SOURCE || "static") as DataSource;

        // Requirement: "strictly enforces the use of StaticProductRepository when APP_ENV=local"
        if (env === 'local') {
            console.log("[ARCHITECTURE]: Enforcing StaticProductRepository (Embedded Mode)");
            source = "static";
        }

        switch (source) {
            case "supabase":
                console.log("[ARCHITECTURE]: Instantiating SupabaseProductRepository");
                return new SupabaseProductRepository();
            case "cloud-sql":
                console.log("[ARCHITECTURE]: Instantiating CloudSQLProductRepository (Placeholder)");
                return new CloudSQLProductRepository();
            case "static":
            default:
                console.log("[ARCHITECTURE]: Instantiating StaticProductRepository");
                return new StaticProductRepository();
        }
    }
}
