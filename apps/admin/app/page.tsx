"use client";

import { BRAND_COLORS } from "@casa-yolotl/shared";
import ROIChart from "@/components/ROIChart";
import GeographyChart from "@/components/GeographyChart";
import messages from "../../storefront/messages/admin/es.json";

export default function Dashboard() {
    // Simulated Translation Hook
    const t = (key: keyof typeof messages.Admin) => messages.Admin[key] || key;

    return (
        <div className="min-h-screen p-8 md:p-12">
            <header className="mb-12 flex justify-between items-end border-b border-brand-gold/30 pb-8">
                <div>
                    <h1 className="text-3xl font-serif text-brand-black mb-2 text-brand-gold">{t('title')}</h1>
                    <p className="text-sm text-[#1A1A1A] uppercase tracking-widest font-sans font-bold">{t('subtitle')}</p>
                </div>
                <div className="text-right">
                    <span className="block text-xs font-bold text-brand-black uppercase tracking-tighter">{t('system_status')}</span>
                    <span className="text-emerald-600 text-xs uppercase font-bold tracking-widest flex items-center gap-2 font-sans">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        {t('operational')}
                    </span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* KPI Cards */}
                <div className="bg-white p-8 border border-stone-200 shadow-sm col-span-1 md:col-span-2">
                    <span className="text-xs uppercase tracking-widest text-brand-black block mb-4 font-bold">{t('total_revenue')}</span>
                    <span className="text-4xl font-sans text-brand-gold font-bold">€24,500</span>
                    <p className="text-[10px] text-emerald-600 mt-4 uppercase tracking-widest font-bold font-sans">+12.5% vs Mes Anterior</p>
                </div>
                <div className="bg-white p-8 border border-stone-200 shadow-sm col-span-1">
                    <span className="text-xs uppercase tracking-widest text-[#1A1A1A] block mb-4 font-bold">{t('active_users')}</span>
                    <span className="text-4xl font-sans text-brand-black font-bold">142</span>
                    <p className="text-[10px] text-[#1A1A1A] mt-4 uppercase tracking-widest font-bold font-sans">Conversión: 8.4%</p>
                </div>
                <div className="bg-brand-black p-8 shadow-sm col-span-1 border border-brand-gold">
                    <span className="text-xs uppercase tracking-widest text-[#F5F5F1] block mb-4 font-bold">{t('system_health')}</span>
                    <span className="text-4xl font-sans text-emerald-500 font-bold">98/100</span>
                    <p className="text-[10px] text-brand-gold mt-4 uppercase tracking-widest font-bold font-sans">Lighthouse Prebuild Veto</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* ROI Analysis */}
                <div className="bg-white p-8 border border-stone-200 shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-black mb-8 border-b border-stone-100 pb-4 font-serif text-center">{t('roi_performance')}</h3>
                    <ROIChart />
                </div>

                {/* Geography Map */}
                <div className="bg-white p-8 border border-stone-200 shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-black mb-8 border-b border-stone-100 pb-4 font-serif text-center">{t('geo_attribution')}</h3>
                    <GeographyChart />
                </div>
            </div>

            <div className="mt-8 text-center text-[10px] font-sans text-[#1A1A1A] uppercase tracking-widest opacity-50">
                Data refreshed securely via Server Components.
            </div>
        </div>
    );
}
