import { IProductRepository } from "./IProductRepository";
import { StaticProductRepository } from "./StaticProductRepository";
import { SupabaseProductRepository } from "./SupabaseProductRepository";
import { CloudSQLProductRepository } from "./CloudSQLProductRepository";

export type DataSource = "static" | "supabase" | "cloud-sql";

export class ProductRepositoryFactory {
    static getRepository(): IProductRepository {
        const env = (process.env.APP_ENV || 'local').toLowerCase();
        let source = (process.env.DATA_SOURCE || "static") as DataSource;

        // STRATEGIC LOCKDOWN: "the factory MUST return StaticProductRepository when APP_ENV=local"
        if (env === 'local') {
            if (source !== 'static') {
                console.warn("[EMBEDDED MODE]: Detected DATA_SOURCE override in local. Overriding to 'static' for 12-Factor compliance.");
            }
            return new StaticProductRepository();
        }

        // Production Lockdown: Production always uses Supabase (unless CloudSQL is ready)
        if (env === 'production') {
            source = 'supabase';
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
