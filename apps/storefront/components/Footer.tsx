"use client";

import { useLanguage } from "@/context/LanguageContext";
import FooterBrand from "./footer/FooterBrand";
import FooterColumn from "./footer/FooterColumn";
import FooterNewsletter from "./footer/FooterNewsletter";
import FooterBottom from "./footer/FooterBottom";
import HeroActions from "./hero/HeroActions";
import { SITE_ROUTES } from "@casa-yolotl/shared";

const Footer = () => {
    const { t } = useLanguage();

    const explorationLinks = [
        { label: t("Footer.catalog"), href: SITE_ROUTES.CATALOG_SECTION },
        { label: t("Footer.essence"), href: SITE_ROUTES.ESSENCE },
        { label: t("Footer.stories"), href: SITE_ROUTES.STORIES },
        { label: t("Footer.special_projects"), href: "#" },
        { label: t("Footer.sustainability"), href: "#" },
    ];

    const supportLinks = [
        { label: t("Footer.shipping"), href: "#" },
        { label: t("Footer.returns"), href: "#" },
        { label: t("Footer.terms"), href: "#" },
        { label: t("Footer.authenticity"), href: "#" },
        { label: t("Footer.contact"), href: SITE_ROUTES.CONTACT },
    ];

    return (
        <footer className="bg-brand-black text-brand-cream border-t border-brand-gold/20 pt-32 pb-16 px-8 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')]"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
                <FooterBrand />
                <div className="lg:pl-10">
                    <FooterColumn title={t("Footer.exploration")} links={explorationLinks} />
                </div>
                <FooterColumn title={t("Footer.support")} links={supportLinks} />
                <FooterNewsletter />
            </div>

            <FooterBottom />
        </footer>
    );
};

export default Footer;
