"use client";

import { useLanguage } from "@/context/LanguageContext";
import HeroBackground from "./hero/HeroBackground";
import HeroActions from "./hero/HeroActions";
import { SITE_ROUTES } from "@casa-yolotl/shared";

const HeroSection = () => {
    const { t } = useLanguage();

    const heroActions = [
        {
            label: t("Hero.btn_catalog"),
            href: SITE_ROUTES.CATALOG_SECTION,
            ariaLabel: t("Hero.aria_catalog"),
            variant: "primary" as const
        },
        {
            label: t("Hero.btn_history"),
            href: SITE_ROUTES.STORIES,
            variant: "secondary" as const
        },
    ];

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20 bg-[#0D0D0D]">
            <HeroBackground src="/hero-bg.png" alt="Casa Yolotl Interior" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <HeroBadge label={t("Hero.badge")} />

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-cream leading-[1.05] mb-10 animate-fade-in-up tracking-tight">
                    {t("Hero.title1")}<span className="italic font-light">{t("Hero.title_italic")}</span><br />{t("Hero.title2")}
                </h1>

                <p className="text-xs md:text-sm text-brand-cream/60 font-sans max-w-xl mx-auto leading-relaxed mb-16 tracking-[0.25em] uppercase">
                    {t("Hero.description")}
                </p>

                <HeroActions actions={heroActions} />
            </div>

            <ScrollIndicator label={t("Hero.scroll")} />
        </section>
    );
};

const HeroBadge = ({ label }: { label: string }) => (
    <div className="mb-8 flex justify-center items-center">
        <div className="h-px w-8 bg-brand-gold/40"></div>
        <span className="text-xs uppercase tracking-[0.4em] text-brand-gold font-sans mx-4">{label}</span>
        <div className="h-px w-8 bg-brand-gold/40"></div>
    </div>
);

const ScrollIndicator = ({ label }: { label: string }) => (
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <span className="text-[9px] uppercase tracking-[0.6em] text-brand-gold/40 animate-pulse">{label}</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold/40 to-transparent"></div>
    </div>
);

export default HeroSection;
