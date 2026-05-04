"use client";

import { useEffect, useState } from "react";
import { Product, productService } from "@casa-yolotl/shared";
import ProductCard from "./ProductCard";
import { useLanguage } from "@/context/LanguageContext";

const categoriesKeys = ["todos", "mezcales", "artesanias", "decoracion", "ceramica-montoya"];

import { DESIGN_FLAGS } from "@/lib/design-flags";
import LegacyProductGrid from "./products/LegacyProductGrid";
import LuxuryProductFeature from "./products/LuxuryProductFeature";

const ProductGrid = ({ initialProducts = [] }: { initialProducts?: Product[] }) => {
    const { t } = useLanguage();
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                // For the editorial layout, we fetch all products or a curated set
                // In this phase, we fetch all to show the narrative composition
                const result = await productService.getProducts(1, 50);
                setProducts(result.items);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (DESIGN_FLAGS.enableLuxuryProductNarrative) {
            fetchProducts();
        }
    }, []);

    if (!DESIGN_FLAGS.enableLuxuryProductNarrative) {
        return <LegacyProductGrid initialProducts={initialProducts} />;
    }

    return (
        <section className="py-32 lg:py-48 bg-brand-black text-brand-cream scroll-mt-24" id="curaduria">
            <div className="max-w-7xl mx-auto px-8">
                {/* Editorial Header */}
                <header className="mb-32 lg:mb-48 text-center md:text-left">
                    <span className="luxury-kicker block mb-6">{t("Marketplace.editorial.badge")}</span>
                    <h2 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-10 leading-tight">
                        {t("Marketplace.editorial.title")}
                    </h2>
                    <div className="w-24 h-px bg-brand-gold/40 mb-12 hidden md:block"></div>
                    <p className="max-w-xl text-brand-cream/60 luxury-body text-base md:text-lg leading-relaxed">
                        {t("Marketplace.editorial.subtitle")}
                    </p>
                </header>

                {/* Editorial Narrative Flow */}
                {isLoading ? (
                    <div className="flex justify-center py-40">
                        <div className="w-10 h-10 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-24 lg:gap-40">
                        {products.map((product, index) => (
                            <LuxuryProductFeature
                                key={product.id}
                                product={product}
                                index={index}
                            />
                        ))}
                    </div>
                )}

                {!isLoading && products.length === 0 && (
                    <div className="py-32 text-center">
                        <p className="luxury-body text-brand-cream/40 italic uppercase tracking-widest">
                            {t("LanguageSelector.empty")}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
