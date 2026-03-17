import { describe, it, expect, vi, beforeEach } from 'vitest';
import { SupabaseProductRepository } from './SupabaseProductRepository';

// Mock the Supabase Client module
vi.mock('@supabase/supabase-js', () => {
    return {
        createClient: vi.fn(() => ({
            from: vi.fn(),
        })),
    };
});

describe('SupabaseProductRepository', () => {
    let repository: SupabaseProductRepository;
    let mockSupabase: any;

    beforeEach(() => {
        vi.clearAllMocks();
        repository = new SupabaseProductRepository();
        // Extract the mocked client instance for assertion chaining
        // In actual implementation, we'd assign this in constructor, but here we can spy on the injected property
        mockSupabase = (repository as any).supabase;
    });

    describe('getById', () => {
        it('should return a properly mapped Product on successful fetch (Happy Path)', async () => {
            // Setup the mock chain: .from().select().eq().single()
            const mockSingle = vi.fn().mockResolvedValue({
                data: {
                    id: 'pro_123',
                    name_es: 'Alebrije Tradicional',
                    description_es: 'Un hermoso alebrije',
                    price: 450.50,
                    stock: 5,
                    categories: { slug: 'artesanias' },
                    product_images: [{ url: 'http://image.url', is_main: true }]
                },
                error: null
            });
            const mockEq = vi.fn().mockReturnValue({ single: mockSingle });
            const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
            
            mockSupabase.from.mockReturnValue({ select: mockSelect });

            const result = await repository.getById('pro_123', 'es');

            expect(mockSupabase.from).toHaveBeenCalledWith('products');
            expect(mockEq).toHaveBeenCalledWith('id', 'pro_123');
            
            expect(result).toBeDefined();
            expect(result?.id).toBe('pro_123');
            expect(result?.name).toBe('Alebrije Tradicional');
            expect(result?.price).toBe('450.5'); // Mapped to string in actual implementation
            expect(result?.category).toBe('artesanias');
            expect(result?.imageUrl).toBe('http://image.url');
        });

        it('should return undefined and log an error if the database connection fails', async () => {
             // Setup the mock chain returning an error
             const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
             const mockSingle = vi.fn().mockResolvedValue({
                 data: null,
                 error: new Error('Connection timeout')
             });
             const mockEq = vi.fn().mockReturnValue({ single: mockSingle });
             const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
             
             mockSupabase.from.mockReturnValue({ select: mockSelect });
 
             const result = await repository.getById('pro_123', 'es');
 
             expect(result).toBeUndefined();
             expect(consoleSpy).toHaveBeenCalledWith(
                 expect.stringContaining('[SUPABASE]: Error fetching product by ID pro_123'),
                 expect.any(Error)
             );
             
             consoleSpy.mockRestore();
        });
    });
});
