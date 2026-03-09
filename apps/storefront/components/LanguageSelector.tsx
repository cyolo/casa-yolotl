"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { allLanguages, languageCategories } from "@/data/languages";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const LanguageSelector = () => {
    const { currentLanguage, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredLanguages = useMemo(() => {
        return allLanguages.filter(lang =>
            lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lang.code.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const groupedLanguages = useMemo(() => {
        return languageCategories.map(cat => ({
            category: cat,
            langs: filteredLanguages.filter(l => l.category === cat)
        })).filter(group => group.langs.length > 0);
    }, [filteredLanguages]);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger Button: Minimalist with Gold accents */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-3 border border-brand-gold/30 px-6 py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-brand-black hover:text-brand-cream hover:border-brand-black transition-all duration-500 min-w-[120px] justify-between group"
            >
                <span className="text-brand-black group-hover:text-brand-cream">{currentLanguage.name}</span>
                <svg
                    className={`w-3 h-3 text-brand-gold transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu: Elegancia Sobria (Bone White, Serif Headers) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute right-0 mt-4 w-80 md:w-96 max-h-[600px] bg-[#F5F5F1] backdrop-blur-2xl border border-brand-gold/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-[100] flex flex-col overflow-hidden"
                    >
                        {/* Search Area */}
                        <div className="p-6 border-b border-brand-gold/5 bg-white/30">
                            <input
                                autoFocus
                                type="text"
                                placeholder={t("LanguageSelector.placeholder")}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-b border-brand-gold/20 py-3 text-[10px] tracking-widest focus:outline-none focus:border-brand-gold uppercase text-brand-black placeholder:text-brand-black/30 transition-colors"
                            />
                        </div>

                        {/* List Area */}
                        <div className="flex-1 overflow-y-auto py-6 scrollbar-thin scrollbar-thumb-brand-gold/20 custom-scrollbar">
                            {groupedLanguages.length > 0 ? (
                                groupedLanguages.map((group) => (
                                    <div key={group.category} className="mb-8 last:mb-0">
                                        <h3 className="px-8 py-3 text-[11px] uppercase tracking-[0.4em] font-serif font-semibold text-brand-gold bg-brand-gold/[0.03] border-l-2 border-brand-gold/30">
                                            {group.category}
                                        </h3>
                                        <div className="grid grid-cols-1 mt-2">
                                            {group.langs.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => {
                                                        setLanguage(lang.code);
                                                        setIsOpen(false);
                                                        setSearchQuery("");
                                                    }}
                                                    className={`px-8 py-4 text-left hover:bg-white/60 transition-all flex items-center justify-between group/item border-l-2 border-transparent hover:border-brand-gold/20 ${currentLanguage.code === lang.code ? 'bg-white/80 border-l-brand-gold' : ''}`}
                                                >
                                                    <div className="flex flex-col">
                                                        <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-brand-black group-hover/item:text-brand-gold transition-colors">
                                                            {lang.name}
                                                        </span>
                                                        <span className="text-[8px] text-brand-black/40 uppercase tracking-widest mt-1">
                                                            {lang.nativeName}
                                                        </span>
                                                    </div>
                                                    {currentLanguage.code === lang.code && (
                                                        <div className="w-1 h-1 rounded-full bg-brand-gold"></div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="px-8 py-20 text-center">
                                    <p className="text-[10px] uppercase tracking-[0.5em] text-brand-black/40 italic">
                                        {t("LanguageSelector.empty")}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(197, 160, 89, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(197, 160, 89, 0.3);
                }
            `}</style>
        </div>
    );
};

export default LanguageSelector;
