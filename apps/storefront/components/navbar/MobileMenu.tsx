import { motion } from "framer-motion";
import LocaleLink from "../LocaleLink";
import LanguageSelector from "../LanguageSelector";
import { NavLink } from "@casa-yolotl/shared";

interface MobileMenuProps {
    isOpen: boolean;
    navLinks: NavLink[];
    onClose: () => void;
}

const MobileMenu = ({ isOpen, navLinks, onClose }: MobileMenuProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-brand-cream py-10 px-8 flex flex-col space-y-8 z-50 md:hidden shadow-2xl"
        >
            {navLinks.map((link) => (
                <LocaleLink
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="text-lg font-serif text-brand-black tracking-[0.15em] uppercase pb-4"
                >
                    {link.name}
                </LocaleLink>
            ))}
            <div className="pt-4 border-t border-brand-black/5 flex justify-center">
                <LanguageSelector />
            </div>
            <button
                onClick={onClose}
                className="border border-brand-gold text-brand-black py-4 text-xs uppercase tracking-[0.15em] font-sans hover:opacity-70 transition-opacity duration-300"
            >
                Cerrar Menú
            </button>
        </motion.div>
    );
};

export default MobileMenu;
