"use client";

import { Product } from "@casa-yolotl/shared/src/client";
import { useLanguage } from "@/context/LanguageContext";
import { DESIGN_FLAGS } from "@/lib/design-flags";

type ProductTraceabilityPanelProps = {
    product: Product;
};

const ProductTraceabilityPanel = ({ product }: ProductTraceabilityPanelProps) => {
    const { t } = useLanguage();

    if (!DESIGN_FLAGS.enableArtisanTraceability) return null;

    const fields = [
        { key: "origin", label: t("Marketplace.traceability.origin"), value: product.origin },
        { key: "material", label: t("Marketplace.traceability.material"), value: product.material },
        { key: "technique", label: t("Marketplace.traceability.technique"), value: product.technique },
        { key: "artisan", label: t("Marketplace.traceability.artisan"), value: product.artisan },
        { key: "workshop", label: t("Marketplace.traceability.workshop"), value: product.artisanWorkshop },
        { key: "collection", label: t("Marketplace.traceability.collection"), value: product.collection },
        { key: "code", label: t("Marketplace.traceability.code"), value: product.traceabilityCode },
    ].filter(field => !!field.value);

    if (fields.length === 0) return null;

    return (
        <section 
            aria-label={t("Marketplace.traceability.title")}
            className="py-6 border-y border-brand-cream/10 space-y-4"
        >
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {fields.map((field) => (
                    <div key={field.key} className="flex flex-col space-y-1">
                        <span className="text-[8px] uppercase tracking-[0.25em] text-brand-gold/60 font-bold">
                            {field.label}
                        </span>
                        <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-brand-cream/80 font-serif">
                            {field.value}
                        </span>
                    </div>
                ))}
            </div>
            {product.culturalNote && (
                <div className="pt-4 border-t border-brand-cream/5">
                    <p className="text-[10px] leading-relaxed text-brand-cream/40 italic">
                        {product.culturalNote}
                    </p>
                </div>
            )}
        </section>
    );
};

export default ProductTraceabilityPanel;
