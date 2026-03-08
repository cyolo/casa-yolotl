"use client";

import { useLanguage } from "@/context/LanguageContext";

const FooterNewsletter = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-brand-cream/5 p-8 border border-brand-cream/10 border-dashed">
            <h3 className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold mb-6">{t("Footer.concierge")}</h3>
            <p className="text-[10px] text-brand-cream/40 uppercase tracking-widest leading-relaxed mb-8">
                {t("Footer.newsletter_desc")}
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    placeholder={t("Footer.newsletter_placeholder")}
                    className="w-full bg-brand-black border-b border-brand-cream/20 py-3 text-[10px] tracking-widest focus:outline-none focus:border-brand-gold uppercase"
                />
                <button
                    aria-label="Suscribirse al boletín de noticias"
                    className="w-full bg-brand-gold text-brand-black py-4 text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-brand-cream transition-colors duration-500"
                >
                    {t("Footer.newsletter_btn")}
                </button>
            </form>
        </div>
    );
};

export default FooterNewsletter;
