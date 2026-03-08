import Navbar from "@/components/Navbar";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
    title: "Cultura & Origen | Casa Yolotl & Co.",
    description: "Explora las narrativas y el origen detrás de cada pieza artesanal. La esencia de México contada a través de sus creadores.",
};

export default function CulturaPage() {
    return (
        <main className="min-h-screen bg-[#F5F5F1]">
            <Navbar />

            {/* Header Spacer for Fixed Navbar */}
            <div className="h-24 md:h-32"></div>

            <section className="bg-[#F5F5F1]">
                <StorySection />
            </section>

            <Footer />
            <BackToTop />
        </main>
    );
}
