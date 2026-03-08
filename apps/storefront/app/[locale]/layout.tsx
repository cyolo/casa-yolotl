import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Casa Yolotl & Co | El Arte de la Excelencia",
    description: "Curaduría premium de artesanía mexicana para el mundo. Diseño, herencia y lujo artesanal.",
};

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <html lang={locale || 'es'} className="scroll-smooth">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-brand-black bg-brand-cream`}>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
            <GoogleTagManager gtmId="GTM-XYZ123" />
        </html>
    );
}
