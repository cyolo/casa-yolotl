import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { IProductRepository, ProductFilters, PaginatedResult } from "./IProductRepository";
import { Product } from "../data/products";

/**
 * Supabase implementation of the product repository.
 * Connects to PostgreSQL via Supabase client.
 */
export class SupabaseProductRepository implements IProductRepository {
    private supabase: SupabaseClient;

    constructor() {
        // These should be set in the environment where this is used
        const supabaseUrl = process.env.SUPABASE_URL || '';
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
        this.supabase = createClient(supabaseUrl, supabaseKey);
    }

    async getAll(page: number = 1, limit: number = 10, locale: string = 'es'): Promise<PaginatedResult<Product>> {
        const offset = (page - 1) * limit;

        const { data, count, error } = await this.supabase
            .from('products')
            .select(`
                *,
                categories (slug, name_${locale}),
                product_images (url, is_main, alt_text)
            `, { count: 'exact' })
            .range(offset, offset + limit - 1);

        if (error) {
            console.error("[SUPABASE]: Error fetching all products", error);
            return this.emptyResult(page, limit);
        }

        return {
            items: (data || []).map(row => this.mapRowToProduct(row, locale)),
            total: count || 0,
            page,
            limit,
            totalPages: Math.ceil((count || 0) / limit)
        };
    }

    async getById(id: string, locale: string = 'es'): Promise<Product | undefined> {
        const { data, error } = await this.supabase
            .from('products')
            .select(`
                *,
                categories (slug, name_${locale}),
                product_images (url, is_main, alt_text)
            `)
            .eq('id', id)
            .single();

        if (error || !data) {
            console.error(`[SUPABASE]: Error fetching product by ID ${id}`, error);
            return undefined;
        }

        return this.mapRowToProduct(data, locale);
    }

    async find(filters: ProductFilters, page: number = 1, limit: number = 10, locale: string = 'es'): Promise<PaginatedResult<Product>> {
        const offset = (page - 1) * limit;

        let query = this.supabase
            .from('products')
            .select(`
                *,
                categories (slug, name_${locale}),
                product_images (url, is_main, alt_text)
            `, { count: 'exact' });

        if (filters.category) {
            // Join filtered by category slug
            query = query.filter('categories.slug', 'eq', filters.category);
        }

        if (filters.minPrice !== undefined) {
            query = query.gte('price', filters.minPrice);
        }

        if (filters.maxPrice !== undefined) {
            query = query.lte('price', filters.maxPrice);
        }

        if (filters.search) {
            const searchPattern = `%${filters.search}%`;
            query = query.or(`name_${locale}.ilike.${searchPattern},description_${locale}.ilike.${searchPattern}`);
        }

        const { data, count, error } = await query.range(offset, offset + limit - 1);

        if (error) {
            console.error("[SUPABASE]: Error searching products", error);
            return this.emptyResult(page, limit);
        }

        return {
            items: (data || []).map(row => this.mapRowToProduct(row, locale)),
            total: count || 0,
            page,
            limit,
            totalPages: Math.ceil((count || 0) / limit)
        };
    }

    private mapRowToProduct(row: any, locale: string): Product {
        const mainImage = row.product_images?.find((img: any) => img.is_main) || row.product_images?.[0];

        return {
            id: row.id,
            name: row[`name_${locale}`] || row.name_es,
            description: row[`description_${locale}`] || row.description_es,
            category: row.categories?.slug || 'general',
            price: row.price.toString(),
            marketplaceUrl: '', // This will be dynamic in the future or extracted from a specific field
            imageUrl: mainImage?.url || '/placeholder.png',
            seo: {
                title: row[`name_${locale}`] || row.name_es,
                description: (row[`description_${locale}`] || row.description_es)?.substring(0, 160),
                keywords: row.keywords || []
            },
            dimensions: { weight: 0, width: 0, height: 0, depth: 0 } // Placeholder until schema update
        };
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
