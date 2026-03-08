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
            <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen`}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
