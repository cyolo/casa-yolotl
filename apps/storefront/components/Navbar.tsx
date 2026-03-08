"use client";

import { useState } from "react";
import LocaleLink from "./LocaleLink";
import { AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./navbar/MobileMenu";
import { SITE_ROUTES } from "@casa-yolotl/shared";

const Navbar = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: t("Navbar.esencia"), href: SITE_ROUTES.ESSENCE },
        { name: t("Navbar.catalog"), href: SITE_ROUTES.CATALOG_SECTION },
        { name: t("Navbar.contacto"), href: SITE_ROUTES.CONTACT },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md py-6 px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Links (Desktop) */}
                <div className="hidden md:flex items-center space-x-12 flex-1">
                    {navLinks.slice(0, 2).map((link) => (
                        <LocaleLink
                            key={link.name}
                            href={link.href}
                            className="text-xs uppercase tracking-[0.15em] font-sans hover:text-brand-gold transition-colors"
                        >
                            {link.name}
                        </LocaleLink>
                    ))}
                </div>

                {/* Center Logo */}
                <div className="flex-shrink-0 text-center">
                    <LocaleLink
                        href={SITE_ROUTES.HOME}
                        aria-label="Volver al inicio de Casa Yolotl & Co"
                        className="text-xl md:text-2xl font-serif tracking-[0.15em] uppercase font-semibold text-brand-black group"
                    >
                        CASA YOLOTL <span className="text-brand-gold group-hover:text-brand-black transition-colors">&</span> CO
                    </LocaleLink>
                </div>

                {/* Right Links (Desktop) */}
                <div className="hidden md:flex items-center justify-end space-x-12 flex-1">
                    <LocaleLink
                        href={SITE_ROUTES.CONTACT}
                        className="text-xs uppercase tracking-[0.15em] font-sans hover:text-brand-gold transition-colors"
                    >
                        {t("Navbar.contacto")}
                    </LocaleLink>
                    <LanguageSelector />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <MenuToggleButton isOpen={isOpen} onClick={toggleMenu} />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && <MobileMenu isOpen={isOpen} navLinks={navLinks} onClose={closeMenu} />}
            </AnimatePresence>
        </nav>
    );
};

const MenuToggleButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <button
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú de navegación móvil"}
        onClick={onClick}
        className="text-brand-black p-2 relative z-[60]"
    >
        {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        )}
    </button>
);

export default Navbar;
