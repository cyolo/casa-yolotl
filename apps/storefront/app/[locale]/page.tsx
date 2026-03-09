import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import { ProductService } from "@casa-yolotl/shared";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const productData = await ProductService.getInstance().getProducts(1, 12, locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Curated Collection Section */}
      <ProductGrid initialProducts={productData.items} />

      <Footer />
      <BackToTop />
    </main>
  );
}
