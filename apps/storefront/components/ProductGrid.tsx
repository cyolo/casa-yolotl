"use client";

import { useEffect, useState } from "react";
import { Product, productService } from "@casa-yolotl/shared";
import ProductCard from "./ProductCard";
import { useLanguage } from "@/context/LanguageContext";

const categoriesKeys = ["todos", "mezcales", "artesanias", "decoracion"];

const ProductGrid = ({ initialProducts = [] }: { initialProducts?: Product[] }) => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("todos");
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                let result;
                // Mapping "todos" to "all" for the service internal logic if needed, 
                // or just using the filters.
                if (activeCategory === "todos") {
                    result = await productService.getProducts(1, 50);
                } else {
                    result = await productService.getProductsByCategory(activeCategory, 1, 50);
                }
                setProducts(result.items);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [activeCategory]);

    const handleTrackClick = (productId: string) => {
        console.log(`[TRACKING]: User clicked on product ${productId} to view in marketplace.`);
    };

    return (
        <section className="py-32 px-8 bg-[#F5F5F1] scroll-mt-24 md:scroll-mt-32" id="curaduria">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <span className="text-[10px] uppercase tracking-[0.6em] text-[#1A1A1A]/40 block mb-4">Marketplace</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-6">{t('Marketplace.title') || "Nuestra Curaduría"}</h2>
                    <p className="text-sm font-sans text-[#1A1A1A]/60 uppercase tracking-[0.2em]">{t('Marketplace.subtitle') || "Piezas con Identidad"}</p>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-8 mb-16 border-b border-[#1A1A1A]/5 pb-8">
                    <span className="text-[9px] uppercase tracking-widest text-[#1A1A1A] font-bold mr-4">Categorías:</span>
                    {categoriesKeys.map((catKey) => {
                        const catLabel = catKey === "todos"
                            ? (t('Marketplace.categories.todos') === 'Marketplace.categories.todos' ? "Todos" : t('Marketplace.categories.todos'))
                            : t(`Marketplace.categories.${catKey}`);

                        return (
                            <button
                                key={catKey}
                                onClick={() => setActiveCategory(catKey)}
                                className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-300 relative pb-1 ${activeCategory === catKey
                                    ? "text-[#C5A059] font-bold"
                                    : "text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                                    }`}
                            >
                                {catLabel}
                                {activeCategory === catKey && (
                                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#C5A059]"></span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onMarketplaceClick={handleTrackClick}
                            />
                        ))}
                    </div>
                )}

                {!isLoading && products.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-sm font-sans text-[#1A1A1A]/40 uppercase tracking-widest italic">
                            Próximamente nuevas piezas en esta categoría.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
