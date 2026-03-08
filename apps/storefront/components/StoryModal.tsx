"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Story, products, Product } from "@casa-yolotl/shared";
import ProductCard from "./ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import ReactMarkdown from "react-markdown";

interface StoryModalProps {
    story: Story | null;
    isOpen: boolean;
    onClose: () => void;
}

const StoryModal = ({ story, isOpen, onClose }: StoryModalProps) => {
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const { t } = useLanguage();

    useEffect(() => {
        if (story) {
            const related = products.filter(p => story.relatedProductIds.includes(p.id));
            setRelatedProducts(related);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [story]);

    if (!isOpen || !story) return null;

    const title = t(`Stories.items.${story.id}.title`);
    const location = t(`Stories.items.${story.id}.location`);
    const content = t(`Stories.items.${story.id}.content`);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm transition-opacity duration-500"
                onClick={onClose}
            ></div>

            {/* Panel */}
            <div className="relative w-full md:w-2/3 lg:w-1/2 h-full bg-brand-cream overflow-y-auto animate-slide-in-right p-8 md:p-16">
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-brand-black hover:text-brand-gold transition-colors z-20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className="max-w-2xl mx-auto pt-12">
                    <div className="mb-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-sans font-bold block mb-4">{t("Stories.subtitle")}</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-6 leading-tight">{title}</h2>
                        <span className="text-xs uppercase tracking-[0.2em] text-brand-black/40 font-sans italic">{location}</span>
                    </div>

                    <div className="relative aspect-[16/9] mb-12 overflow-hidden shadow-2xl">
                        <Image
                            src={story.mainImage}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                        />
                    </div>

                    <div className="prose prose-brand max-w-none mb-24">
                        <div className="text-brand-black/80 font-sans leading-loose tracking-wide space-y-6">
                            <ReactMarkdown
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="text-3xl font-serif text-brand-black mt-12 mb-6" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-2xl font-serif text-brand-black mt-12 mb-6" {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-6 font-sans leading-loose tracking-wide" {...props} />,
                                    strong: ({ node, ...props }) => <strong className="font-bold text-brand-black" {...props} />,
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    </div>

                    {/* Related Products Section (Cross-selling) */}
                    {relatedProducts.length > 0 && (
                        <div className="border-t border-brand-black/10 pt-16">
                            <h3 className="text-xs uppercase tracking-[0.4em] text-brand-black/40 mb-12 text-center">{t("Stories.related_pieces")}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {relatedProducts.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onMarketplaceClick={(id) => console.log(`[TRACKING]: Modal cross-sell click: ${id}`)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="pt-24 pb-12 text-center">
                        <button
                            onClick={onClose}
                            className="border border-brand-black px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-sans hover:bg-brand-black hover:text-brand-cream transition-all duration-300"
                        >
                            {t("Stories.back_to_gallery")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryModal;
