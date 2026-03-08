"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, trackMarketplaceExit } from "@casa-yolotl/shared";
import { useLanguage } from "@/context/LanguageContext";

interface ProductCardProps {
    product: Product;
    onMarketplaceClick: (id: string) => void;
}

const ProductCard = ({ product, onMarketplaceClick }: ProductCardProps) => {
    const { t } = useLanguage();

    const title = t(`Marketplace.items.${product.id}.title`);
    const description = t(`Marketplace.items.${product.id}.desc`);
    const categoryName = t(`Marketplace.categories.${product.category}`);

    const ctaText = "Ver en Marketplace";
    const href = product.marketplaceUrl;
    const target = "_blank";

    const handleClick = () => {
        onMarketplaceClick(product.id);
        trackMarketplaceExit({
            id: product.id,
            title: title,
            category: categoryName,
            price_eur: Number(product.price)
        });
    };

    return (
        <div className="group bg-white border border-[#E5E5E5] overflow-hidden hover:shadow-2xl hover:shadow-brand-black/5 transition-all duration-500 flex flex-col h-full">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-[#F9F9F9]">
                <Image
                    src={product.imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-brand-cream/90 backdrop-blur-sm text-[9px] uppercase tracking-widest text-[#1A1A1A] px-3 py-1 border border-[#1A1A1A]/5">
                        {categoryName}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-3">
                    {title}
                </h3>

                <p className="text-xs text-[#1A1A1A]/60 font-sans leading-relaxed mb-6 flex-1 italic">
                    {description}
                </p>

                <div className="mt-auto pt-6 border-t border-[#1A1A1A]/5 flex items-center justify-between">
                    <span className="text-sm font-sans font-medium text-[#1A1A1A] tracking-tighter">
                        €{product.price}
                    </span>

                    <a
                        href={href}
                        target={target}
                        rel="noopener noreferrer"
                        onClick={handleClick}
                        aria-label={`Ver ${title} en el marketplace externo`}
                        className="bg-[#C5A059] text-[#F5F5F1] text-[10px] uppercase tracking-[0.2em] px-5 py-2 hover:bg-[#1A1A1A] transition-all duration-300"
                    >
                        {ctaText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
