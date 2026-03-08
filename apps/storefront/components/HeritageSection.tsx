"use client";

import { motion } from "framer-motion";
import { heritageNarrative, nahuatlGlossary } from "@casa-yolotl/shared";
import { useLanguage } from "@/context/LanguageContext";

export default function HeritageSection({ theme = "bone" }: { theme?: "dark" | "bone" }) {
    const { t, locale } = useLanguage();
    const isBone = theme === "bone";
    const bgColor = isBone ? "bg-[#F5F5F1]" : "bg-[#1A1A1A]";
    const textColor = isBone ? "text-brand-black" : "text-white";
    const subTextColor = isBone ? "text-stone-600" : "text-stone-400";

    const IsotypeYollotl = () => (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-8">
            <path
                d="M30 48C30 48 12 34 12 20C12 10 22 8 30 18"
                stroke="#C5A059"
                strokeWidth="1.2"
                strokeLinecap="round"
            />
            <path
                d="M30 48C30 48 48 34 48 20C48 10 38 8 30 18"
                stroke="#C5A059"
                strokeWidth="1.2"
                strokeLinecap="round"
            />
        </svg>
    );

    return (
        <article className={`relative ${bgColor} min-h-screen py-32 px-8 overflow-hidden`} id="esencia">
            <div className="max-w-4xl mx-auto text-center">
                {/* Minimalist Isotype */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <IsotypeYollotl />
                </motion.div>

                {/* Subtitle / Category */}
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-[#C5A059] text-[10px] uppercase tracking-[0.6em] block mb-6 font-bold"
                >
                    {t("Esencia.subtitle")}
                </motion.span>

                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className={`text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-8 leading-tight max-w-3xl mx-auto`}
                >
                    {t("Heritage.title")}
                </motion.h2>

                {/* Gold Divider Line */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="h-px bg-[#C5A059]/40 mx-auto mb-12"
                />

                {/* Narrative Body */}
                <div className={`space-y-10 text-[#1A1A1A] font-serif leading-loose tracking-wide text-lg md:text-xl max-w-2xl mx-auto`}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        {(t("Heritage.philosophy") || "philosophy").split("'").map((part, i) => (
                            i % 2 !== 0 ? (
                                <span key={i} className="group relative text-[#C5A059] font-bold italic cursor-help mx-1">
                                    '{part}'
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-3 bg-stone-900 border border-stone-800 text-[9px] uppercase tracking-widest text-[#C5A059] w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-2xl z-50 normal-case font-normal not-italic">
                                        {nahuatlGlossary.find(g => g.term === part)?.meaning || part}: {nahuatlGlossary.find(g => g.term === part)?.context || ""}
                                    </span>
                                </span>
                            ) : part
                        ))}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        className="text-[#C5A059]/80 italic font-serif text-xl md:text-2xl border-t border-b border-[#C5A059]/10 py-8 leading-loose"
                    >
                        {t("Heritage.culturalValue")}
                    </motion.p>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="mt-20"
                >
                    <button
                        onClick={() => {
                            console.log("[ANALYTICS]: Event 'navigation_to_marketplace' triggered.");
                            window.location.href = `/${locale}#curaduria`;
                        }}
                        className="inline-block bg-transparent border border-brand-gold text-brand-gold px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-brand-gold hover:text-brand-black transition-all duration-500 group relative overflow-hidden"
                    >
                        <span className="relative z-10">{t("Esencia.button")}</span>
                        <span className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                    </button>
                </motion.div>
            </div>

            {/* Subtle Vertical Side Text */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-[0.05] hidden xl:block select-none pointer-events-none">
                <span className={`${textColor} text-[120px] font-serif uppercase tracking-[0.2em] vertical-rl`}>Yollotl</span>
            </div>
        </article>
    );
}
