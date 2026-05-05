"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Product, MARKETPLACE_CONFIG, trackMarketplaceExit } from "@casa-yolotl/shared/src/client";
import { useLanguage } from "@/context/LanguageContext";
import ProductTraceabilityPanel from "./ProductTraceabilityPanel";
import ProductAvailabilityStatus from "./ProductAvailabilityStatus";
import { getProductAvailability } from "@/lib/product-availability";

interface LuxuryCompactCatalogProps {
    products: Product[];
}

const categoriesKeys = [
    "todos",
    "mezcales",
    "artesanias",
    "decoracion",
    "ceramica-montoya"
];

const LuxuryCompactCatalog = ({ products }: LuxuryCompactCatalogProps) => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("todos");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(products[0] ?? null);

    const filteredProducts = useMemo(() => {
        if (activeCategory === "todos") return products;
        return products.filter((p) => p.category === activeCategory);
    }, [activeCategory, products]);

    const handleCategoryChange = (catKey: string) => {
        setActiveCategory(catKey);
        const nextProducts = catKey === "todos" ? products : products.filter(p => p.category === catKey);
        setSelectedProduct(nextProducts[0] ?? null);
    };

    const handleTrackClick = (product: Product) => {
        trackMarketplaceExit({
            id: product.id,
            title: t(`Marketplace.items.${product.id}.title`),
            category: t(`Marketplace.categories.${product.category}`),
            price_eur: Number(product.price)
        });
    };

    return (
        <div className="flex flex-col space-y-12 lg:space-y-16">
            {/* Luxury Category Prefilter Menu */}
            <nav 
                aria-label={t("Marketplace.editorial.categoryNavAria")}
                className="border-y border-brand-cream/10 py-6 mb-8"
            >
                <div className="flex flex-wrap gap-x-8 gap-y-6 md:gap-x-12">
                    {categoriesKeys.map((catKey) => {
                        const isActive = activeCategory === catKey;
                        const label = catKey === "todos"
                            ? (t('Marketplace.categories.todos') === 'Marketplace.categories.todos' ? "Todos" : t('Marketplace.categories.todos'))
                            : t(`Marketplace.categories.${catKey}`);

                        return (
                            <button
                                key={catKey}
                                onClick={() => handleCategoryChange(catKey)}
                                aria-pressed={isActive}
                                className={`relative text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 pb-2 ${
                                    isActive
                                        ? "text-brand-gold font-bold"
                                        : "text-brand-cream/45 hover:text-brand-cream"
                                }`}
                            >
                                {label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 h-px w-full bg-brand-gold" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </nav>

            {/* Compact Horizontal Strip - Boutique Nav Pattern */}
            <div className="relative group/strip">
                <div className="overflow-x-auto pb-6 no-scrollbar scroll-smooth">
                    <div className="flex space-x-6 lg:space-x-10 min-w-max">
                        {filteredProducts.map((product) => {
                            const isSelected = selectedProduct?.id === product.id;
                            const title = t(`Marketplace.items.${product.id}.title`);
                            const availability = getProductAvailability(product);
                            const isSoldOut = availability === "sold_out";
                            const showIndicator = availability !== "available" && !isSoldOut;
                            
                            return (
                                <button
                                    key={product.id}
                                    onClick={() => setSelectedProduct(product)}
                                    aria-pressed={isSelected}
                                    aria-label={`Select ${title}`}
                                    className={`group/item flex flex-col items-start transition-all duration-500 w-32 md:w-40 lg:w-48 ${
                                        isSelected ? "opacity-100" : "opacity-40 hover:opacity-100"
                                    } ${isSoldOut ? "grayscale opacity-25" : ""}`}
                                >
                                    {/* Thumbnail with selection indicator */}
                                    <div className={`relative aspect-square w-full mb-4 overflow-hidden border transition-all duration-700 ${
                                        isSelected ? "border-brand-gold/60" : "border-transparent"
                                    }`}>
                                        <Image
                                            src={product.imageUrl}
                                            alt={title}
                                            fill
                                            className="object-cover grayscale-[0.5] group-hover/item:grayscale-0 transition-all duration-500"
                                            sizes="200px"
                                        />
                                        {isSelected && (
                                            <div className="absolute inset-0 border-2 border-brand-gold/20 pointer-events-none"></div>
                                        )}
                                        {showIndicator && (
                                            <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-brand-gold/70 shadow-[0_0_8px_rgba(212,175,55,0.4)] animate-pulse"></div>
                                        )}
                                    </div>
                                    
                                    {/* Minimal Info */}
                                    <span className={`text-[9px] uppercase tracking-[0.2em] mb-1 transition-colors duration-500 text-left line-clamp-1 ${
                                        isSelected ? "text-brand-gold font-bold" : "text-brand-cream/60"
                                    }`}>
                                        {title}
                                    </span>
                                    <span className="text-[8px] tracking-widest text-brand-cream/30 uppercase">
                                        {MARKETPLACE_CONFIG.currency.symbol}{product.price}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
                
                {/* Elegant scroll hint for mobile */}
                {filteredProducts.length > 0 && (
                    <div className="lg:hidden h-[2px] w-full bg-brand-cream/5 mt-2 overflow-hidden">
                        <div className="h-full bg-brand-gold/40 w-1/3 transition-all duration-500"></div>
                    </div>
                )}
            </div>

            {/* Selected Product Narrative Detail or Empty State */}
            {!selectedProduct ? (
                <div className="py-24 text-center border-t border-brand-cream/10 animate-in fade-in duration-700">
                    <p className="luxury-body text-brand-cream/40 uppercase tracking-[0.25em] text-xs">
                        {t("Marketplace.editorial.empty")}
                    </p>
                </div>
            ) : (
                <article 
                    key={selectedProduct.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pt-8 border-t border-brand-cream/5 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                >
                    {/* Large Boutique Photography */}
                    <div className="relative aspect-[4/5] lg:col-span-7 overflow-hidden bg-white/5">
                        <Image
                            src={selectedProduct.imageUrl}
                            alt={t(`Marketplace.items.${selectedProduct.id}.title`)}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent"></div>
                    </div>

                    {/* Editorial Information Block */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:space-y-12 py-8 lg:py-0">
                        <div className="flex flex-col space-y-6">
                            <span className="luxury-kicker text-brand-gold">
                                {t("Marketplace.editorial.badge")} — {t(`Marketplace.categories.${selectedProduct.category}`).toUpperCase()}
                            </span>
                            <ProductAvailabilityStatus product={selectedProduct} />
                            <div className="h-px w-16 bg-brand-gold/30"></div>
                        </div>

                        <h3 className="text-4xl md:text-5xl lg:text-6xl luxury-heading text-brand-cream leading-[1.1]">
                            {t(`Marketplace.items.${selectedProduct.id}.title`)}
                        </h3>

                        <p className="luxury-body text-brand-cream/60 text-sm md:text-base max-w-md italic leading-relaxed">
                            {t(`Marketplace.items.${selectedProduct.id}.desc`)}
                        </p>

                        <ProductTraceabilityPanel product={selectedProduct} />

                        <div className="pt-8 lg:pt-12 border-t border-brand-cream/10 flex items-center justify-between">
                            <span className="luxury-kicker text-brand-gold text-[12px] font-bold">
                                {MARKETPLACE_CONFIG.currency.symbol}{selectedProduct.price}
                            </span>

                            <a
                                href={selectedProduct.marketplaceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => handleTrackClick(selectedProduct)}
                                className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold border-b border-brand-gold/40 pb-2 text-brand-cream/80 hover:text-brand-gold hover:border-brand-gold transition-all duration-500 group/cta"
                            >
                                {getProductAvailability(selectedProduct) === "sold_out" 
                                    ? t("Marketplace.availability.requestInfo")
                                    : t("Marketplace.editorial.cta")}
                            </a>
                        </div>
                    </div>
                </article>
            )}
        </div>
    );
};

export default LuxuryCompactCatalog;
