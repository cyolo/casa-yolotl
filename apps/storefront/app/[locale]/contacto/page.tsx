"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactoPage() {
    const { t } = useLanguage();
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        setTimeout(() => setFormStatus("success"), 1500);
    };

    return (
        <main className="min-h-screen bg-[#F5F5F1]">
            <Navbar />

            <div className="h-24 md:h-32"></div>

            <section className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    {/* Column 1: Global Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-16"
                    >
                        <div>
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] block mb-6 font-bold">{t("Contact.presence")}</span>
                            <h1 className="text-4xl md:text-6xl font-serif text-brand-black leading-tight mb-8">
                                {t("Contact.title")}
                            </h1>
                            <p className="text-brand-black/60 font-sans text-sm md:text-base leading-relaxed max-w-md">
                                Conectamos el talento artesanal de México con los estándares más exigentes de Europa y el mundo.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="text-xs uppercase tracking-widest font-sans font-bold text-brand-black">México (Showroom)</h3>
                                <p className="text-[10px] text-brand-black/40 uppercase tracking-widest leading-relaxed">
                                    Oaxaca de Juárez, <br /> México
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xs uppercase tracking-widest font-sans font-bold text-brand-black">Europa (Distribución)</h3>
                                <p className="text-[10px] text-brand-black/40 uppercase tracking-widest leading-relaxed">
                                    Madrid, España & <br /> Berlín, Alemania
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-brand-black/5 space-y-4">
                            <p className="text-xs uppercase tracking-widest font-sans text-brand-black/40">Consultas Directas</p>
                            <a href="mailto:concierge@casayolotl.com" className="text-lg md:text-xl font-serif text-brand-black hover:text-brand-gold transition-colors block">
                                concierge@casayolotl.com
                            </a>
                        </div>
                    </motion.div>

                    {/* Column 2: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-10 md:p-16 shadow-2xl shadow-brand-black/5 relative overflow-hidden"
                    >
                        {formStatus === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] block mb-6 font-bold">{t("Contact.form.success_title")}</span>
                                <h2 className="text-3xl font-serif text-brand-black mb-6">{t("Contact.form.heading")}</h2>
                                <p className="text-brand-black/60 text-xs uppercase tracking-widest leading-loose max-w-xs mx-auto">
                                    {t("Contact.form.success_msg")}
                                </p>
                                <button
                                    onClick={() => setFormStatus("idle")}
                                    className="mt-12 text-[9px] uppercase tracking-[0.4em] text-brand-black border-b border-brand-black/20 hover:border-brand-black transition-all"
                                >
                                    {t("Contact.form.send_another")}
                                </button>
                            </motion.div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-serif text-brand-black mb-12">{t("Contact.form.heading")}</h2>
                                <form onSubmit={handleSubmit} className="space-y-10">
                                    <div className="relative">
                                        <input
                                            required
                                            type="text"
                                            placeholder={t("Contact.form.name")}
                                            className="w-full bg-transparent border-b border-brand-black/10 py-4 text-[10px] tracking-[0.2em] focus:outline-none focus:border-brand-gold transition-colors uppercase"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <input
                                            required
                                            type="email"
                                            placeholder={t("Contact.form.email")}
                                            className="w-full bg-transparent border-b border-brand-black/10 py-4 text-[10px] tracking-[0.2em] focus:outline-none focus:border-brand-gold transition-colors uppercase"
                                        />
                                        <input
                                            required
                                            type="text"
                                            placeholder={t("Contact.form.country")}
                                            className="w-full bg-transparent border-b border-brand-black/10 py-4 text-[10px] tracking-[0.2em] focus:outline-none focus:border-brand-gold transition-colors uppercase"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder={t("Contact.form.message")}
                                            className="w-full bg-transparent border-b border-brand-black/10 py-4 text-[10px] tracking-[0.2em] focus:outline-none focus:border-brand-gold transition-colors uppercase resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        disabled={formStatus === "submitting"}
                                        className="w-full bg-brand-black text-brand-cream py-6 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-brand-gold transition-all duration-500 disabled:opacity-50"
                                    >
                                        {formStatus === "submitting" ? t("Contact.form.submitting") : t("Contact.form.submit")}
                                    </button>
                                </form>
                            </>
                        )}

                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-[0.03]">
                            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H96V96" stroke="black" strokeWidth="1" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    );
}
