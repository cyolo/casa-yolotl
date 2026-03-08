import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Curated Collection Section */}
      <ProductGrid />

      <Footer />
      <BackToTop />
    </main>
  );
}
