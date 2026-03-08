"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function StorefrontForbiddenPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-12 flex justify-center">
                        <div className="w-20 h-20 border border-[#1A1A1A]/10 rounded-full flex items-center justify-center">
                            <span className="text-[#1A1A1A] text-3xl font-serif italic">Y</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-6 tracking-tight">
                        Acceso no Autorizado
                    </h1>

                    <p className="text-[#1A1A1A]/60 font-sans text-xs uppercase tracking-[0.2em] mb-12 leading-relaxed">
                        Esta sección está reservada para administración interna de Casa Yolotl.
                    </p>

                    <div className="pt-8 border-t border-[#1A1A1A]/5">
                        <Link
                            href="/"
                            className="inline-block px-12 py-5 bg-[#1A1A1A] text-[#FDFCFB] text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-[#C5A059] transition-all duration-500"
                        >
                            Regresar a la Galería
                        </Link>
                    </div>

                    <p className="mt-20 text-[8px] uppercase tracking-[0.4em] text-[#1A1A1A]/30 font-sans">
                        Secured by Yolotl Intelligence Node
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
