"use client";

import { useState, useEffect } from "react";

const ConsentBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if consent has already been given or denied
        const consent = localStorage.getItem("cy-tracking-consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cy-tracking-consent", "accepted");
        setShowBanner(false);
        // Here we would typically update GTM Consent Mode
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("consent", "update", {
                analytics_storage: "granted",
                ad_storage: "granted",
            });
        }
    };

    const handleDecline = () => {
        localStorage.setItem("cy-tracking-consent", "declined");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] animate-fade-in-up">
            <div className="bg-brand-cream border-t border-brand-gold/20 p-6 md:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-xs uppercase tracking-[0.4em] text-brand-black font-sans font-bold">Privacidad & Identidad</h4>
                        <p className="text-[10px] md:text-xs text-brand-black/60 font-sans leading-relaxed max-w-2xl uppercase tracking-widest">
                            Utilizamos herramientas de análisis para medir el impacto de nuestra cultura y optimizar su experiencia.
                            Respetamos su privacidad como valor fundamental de nuestra esencia.
                        </p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={handleDecline}
                            className="text-[10px] uppercase tracking-[0.3em] font-sans text-brand-black/40 hover:text-brand-black transition-colors"
                        >
                            Declinar
                        </button>
                        <button
                            onClick={handleAccept}
                            className="bg-brand-black text-brand-cream px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-sans font-bold hover:bg-brand-gold transition-all duration-500 shadow-xl"
                        >
                            Aceptar Todo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsentBanner;
