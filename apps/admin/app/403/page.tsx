"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ForbiddenPage() {
    return (
        <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-8 flex justify-center">
                        <div className="w-16 h-16 border border-[#C5A059]/30 rounded-full flex items-center justify-center">
                            <span className="text-[#C5A059] text-2xl font-serif">!</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif text-[#FDFCFB] mb-6 tracking-tight">
                        Acceso Restringido
                    </h1>

                    <p className="text-[#FDFCFB]/60 font-sans text-sm uppercase tracking-[0.2em] mb-12 leading-relaxed">
                        No tienes los permisos necesarios para acceder a esta sección de Casa Yolotl & Co.
                    </p>

                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="block w-full py-4 bg-[#C5A059] text-[#0D0D0D] text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-[#D4AF37] transition-colors duration-300"
                        >
                            Volver al Inicio
                        </Link>

                        <Link
                            href="/auth/signin"
                            className="block w-full py-4 border border-[#FDFCFB]/10 text-[#FDFCFB] text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-[#FDFCFB]/5 transition-colors duration-300"
                        >
                            Intentar con otra cuenta
                        </Link>
                    </div>

                    <p className="mt-16 text-[9px] uppercase tracking-widest text-[#FDFCFB]/20 font-sans">
                        Security ID: 403 Forbidden | Casa Yolotl & Co.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
