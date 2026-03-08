import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Link from "next/link";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
    title: "CASA YOLOTL | Admin Portal",
    description: "Internal management for Casa Yolotl & Co.",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();

    return (
        <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
            <body className="bg-[#F5F5F1] text-[#1A1A1A] font-sans min-h-screen selection:bg-[#C5A059] selection:text-white">
                <AuthProvider>
                    {session?.user?.email === 'cesar.vargas.alanis@gmail.com' && (
                        <nav className="sticky top-0 z-50 bg-[#F5F5F1]/90 backdrop-blur-md border-b justify-between items-center border-[#C5A059]/30 px-8 py-4 flex">
                            <span className="font-serif font-bold text-[#1A1A1A] tracking-widest uppercase">Admin Portal</span>
                            <div className="flex gap-6 text-xs uppercase tracking-widest font-bold">
                                <Link href="/dashboard" className="hover:text-[#C5A059] transition-colors">Performance</Link>
                                <Link href="/seo" className="hover:text-[#C5A059] transition-colors">SEO</Link>
                            </div>
                        </nav>
                    )}
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
