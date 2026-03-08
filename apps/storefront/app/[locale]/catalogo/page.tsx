"use client";

import ProductGrid from "@/components/ProductGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function CatalogoPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-brand-cream">
            <Navbar />
            <div className="pt-24">
                <ProductGrid />
            </div>
            <Footer />
        </main>
    );
}
