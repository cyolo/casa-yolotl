import { useLanguage } from "@/context/LanguageContext";

const FooterBrand = () => {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-serif tracking-[0.2em]">CASA YOLOTL & CO.</h2>
            <p className="text-xs font-sans text-brand-cream/60 leading-relaxed uppercase tracking-widest">
                {t("Footer.brand_desc")}
            </p>
            <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold block font-bold">{t("Footer.trust")}</span>

                <div className="flex items-center space-x-6">
                    <TrustIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </TrustIcon>
                    <TrustIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </TrustIcon>
                    <TrustIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
                    </TrustIcon>
                </div>
            </div>
        </div>
    );
};

const TrustIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-10 h-10 border border-brand-cream/10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
        {children}
    </div>
);

export default FooterBrand;
