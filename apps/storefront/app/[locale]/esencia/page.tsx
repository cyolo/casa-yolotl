import Navbar from "@/components/Navbar";
import HeritageSection from "@/components/HeritageSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function EsenciaPage() {
    return (
        <main className="min-h-screen bg-[#F5F5F1]">
            <Navbar />

            {/* Header Spacer for Fixed Navbar */}
            <div className="h-24 md:h-32"></div>

            <HeritageSection theme="bone" />

            <Footer />
            <BackToTop />
        </main>
    );
}
