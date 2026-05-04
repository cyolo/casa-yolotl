"use client";

import { Product } from "@casa-yolotl/shared";
import { useLanguage } from "@/context/LanguageContext";
import { DESIGN_FLAGS } from "@/lib/design-flags";
import { getProductAvailability } from "@/lib/product-availability";

type ProductAvailabilityStatusProps = {
    product: Product;
};

const ProductAvailabilityStatus = ({ product }: ProductAvailabilityStatusProps) => {
    const { t } = useLanguage();
    
    if (!DESIGN_FLAGS.enableLuxuryInventoryStatus) return null;
    
    const status = getProductAvailability(product);
    if (status === "available") return null;

    const label = t(`Marketplace.availability.${status}`);
    const isSoldOut = status === "sold_out";

    return (
        <div className="flex items-center gap-3 animate-in fade-in duration-700">
            <span className={`h-px w-6 ${isSoldOut ? "bg-brand-cream/20" : "bg-brand-gold/40"}`} />
            <span className={`text-[9px] uppercase tracking-[0.28em] font-bold ${
                isSoldOut ? "text-brand-cream/40" : "text-brand-gold/80"
            }`}>
                {label}
            </span>
        </div>
    );
};

export default ProductAvailabilityStatus;
