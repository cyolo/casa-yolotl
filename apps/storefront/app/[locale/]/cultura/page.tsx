import Navbar from "@/components/Navbar";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import fs from 'fs/promises';
import path from 'path';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    try {
        const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const messages = JSON.parse(fileContent);
        const t = messages.Stories;

        return {
            title: `${t.title} | Casa Yolotl & Co.`,
            description: t.description,
        };
    } catch (error) {
        return {
            title: "Cultura & Origen | Casa Yolotl & Co.",
            description: "Explora las narrativas y el origen detrás de cada pieza artesanal.",
        };
    }
}

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
