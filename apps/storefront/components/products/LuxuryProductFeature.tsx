"use client";

import Image from "next/image";
import { Product, MARKETPLACE_CONFIG, trackMarketplaceExit } from "@casa-yolotl/shared";
import { useLanguage } from "@/context/LanguageContext";
import ProductTraceabilityPanel from "./ProductTraceabilityPanel";

interface LuxuryProductFeatureProps {
    product: Product;
    index: number;
}

const LuxuryProductFeature = ({ product, index }: LuxuryProductFeatureProps) => {
    const isEven = index % 2 === 0;
    const { t } = useLanguage();

    const title = t(`Marketplace.items.${product.id}.title`);
    const description = t(`Marketplace.items.${product.id}.desc`);
    const categoryName = t(`Marketplace.categories.${product.category}`);

    const handleClick = () => {
        trackMarketplaceExit({
            id: product.id,
            title: title,
            category: categoryName,
            price_eur: Number(product.price)
        });
    };

    return (
        <article className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-32 lg:mb-48 last:mb-0">
            {/* Image Container - Photographic prominence */}
            <div
                className={`relative w-full aspect-square lg:aspect-[4/5] overflow-hidden bg-white/5 ${
                    isEven ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-6"
                }`}
            >
                <Image
                    src={product.imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                />
            </div>

            {/* Content Container - Editorial layout */}
            <div
                className={`flex flex-col space-y-8 lg:space-y-12 ${
                    isEven ? "lg:col-span-5" : "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                }`}
            >
                {/* Metadata Editorial */}
                <div className="flex flex-col space-y-6">
                    <span className="luxury-kicker text-brand-gold">
                        {t("Marketplace.editorial.badge")} — {categoryName.toUpperCase()}
                    </span>
                    <div className="h-px w-16 bg-brand-gold/30"></div>
                </div>

                {/* Piece Name */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl luxury-heading text-brand-cream transition-colors duration-700">
                    {title}
                </h3>

                {/* Narrative Description */}
                <p className="luxury-body text-brand-cream/60 text-sm md:text-base max-w-md italic leading-relaxed">
                    {description}
                </p>

                <ProductTraceabilityPanel product={product} />

                {/* Price & CTA - Discreet Luxury Treatment */}
                <div className="pt-8 lg:pt-12 border-t border-brand-cream/10 flex items-center justify-between">
                    <span className="luxury-kicker text-brand-gold text-[11px]">
                        {MARKETPLACE_CONFIG.currency.symbol}{product.price}
                    </span>

                    <a
                        href={product.marketplaceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClick}
                        className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold border-b border-brand-gold/40 pb-2 text-brand-cream/80 hover:text-brand-gold hover:border-brand-gold transition-all duration-500"
                    >
                        {t("Marketplace.editorial.cta")}
                    </a>
                </div>
            </div>
        </article>
    );
};

export default LuxuryProductFeature;
