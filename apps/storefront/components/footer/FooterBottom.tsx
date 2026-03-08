import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { MARKETPLACE_CONFIG } from "@casa-yolotl/shared";

const FooterBottom = () => {
    const { t } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-cream/30">
                    {t("Footer.copyright")}
                </span>
                <div className="h-4 w-px bg-brand-cream/10 hidden md:block"></div>
                <div className="flex space-x-4">
                    <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse"></div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-brand-cream/30">{t("Footer.systems_active")}</span>
                </div>
            </div>

            <div className="flex items-center space-x-12">
                <div className="flex items-center space-x-6">
                    <span className="text-[8px] uppercase tracking-[0.4em] text-brand-cream/20">{MARKETPLACE_CONFIG.i18n.locales.join(' / ').toUpperCase()}</span>
                    <span className="text-[8px] uppercase tracking-[0.4em] text-brand-cream/20">{MARKETPLACE_CONFIG.currency.code} / MXN</span>
                </div>
                <div className="flex space-x-6">
                    {["Instagram", "LinkedIn"].map((social) => (
                        <Link
                            key={social}
                            href="#"
                            aria-label={`Seguir en ${social}`}
                            className="group"
                        >
                            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-cream/40 group-hover:text-brand-gold transition-colors">{social}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;
