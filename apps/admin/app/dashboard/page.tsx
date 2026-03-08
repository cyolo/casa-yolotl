"use client";

import { useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import ROIChart from "@/components/ROIChart";
import GeographyChart from "@/components/GeographyChart";
import { BRAND_COLORS } from "@casa-yolotl/shared";
import { Activity, ShieldCheck, Globe, Zap, AlertTriangle, CheckCircle2, BarChart3, PenLine, Save } from "lucide-react";
import { heritageNarrative, nahuatlGlossary } from "@casa-yolotl/shared";

// ... [rest of imports continue] ...

function StorytellingModule() {
    const [narrative, setNarrative] = useState(heritageNarrative);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-stone-900 border border-stone-800 p-10 shadow-xl">
                <h3 className="text-sm font-serif text-white mb-8 border-b border-stone-800 pb-4 flex items-center gap-3">
                    <PenLine className="w-4 h-4 text-brand-gold" /> Editor de Narrativa: Nuestra Esencia
                </h3>

                <div className="grid grid-cols-1 gap-8 max-w-3xl">
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Título de la Sección</label>
                        <input
                            type="text"
                            value={narrative.title}
                            onChange={(e) => setNarrative({ ...narrative, title: e.target.value })}
                            className="w-full bg-stone-950 border border-stone-800 p-4 text-sm text-white focus:border-brand-gold outline-none transition-colors"
                        />
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Filosofía Yollotl</label>
                        <textarea
                            rows={4}
                            value={narrative.philosophy}
                            onChange={(e) => setNarrative({ ...narrative, philosophy: e.target.value })}
                            className="w-full bg-stone-950 border border-stone-800 p-4 text-sm text-white focus:border-brand-gold outline-none transition-colors leading-relaxed"
                        />
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Valor Cultural (Bridge)</label>
                        <textarea
                            rows={4}
                            value={narrative.culturalValue}
                            onChange={(e) => setNarrative({ ...narrative, culturalValue: e.target.value })}
                            className="w-full bg-stone-950 border border-stone-800 p-4 text-sm text-white focus:border-brand-gold outline-none transition-colors leading-relaxed"
                        />
                    </div>

                    <div className="pt-8">
                        <button className="bg-brand-gold text-stone-900 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-300 flex items-center gap-3">
                            <Save className="w-3 h-3" /> Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-stone-900 border border-stone-800 p-10 shadow-xl">
                <h3 className="text-sm font-serif text-white mb-8 border-b border-stone-800 pb-4 flex items-center gap-3">
                    <Globe className="w-4 h-4 text-brand-gold" /> Glosario de Términos (SEO Keywords)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nahuatlGlossary.map((term, i) => (
                        <div key={i} className="bg-stone-950 p-6 border border-stone-800 hover:border-brand-gold/30 transition-colors group">
                            <span className="text-brand-gold font-bold italic block mb-2">{term.term}</span>
                            <span className="text-[10px] text-stone-300 uppercase tracking-widest block mb-4">{term.meaning}</span>
                            <p className="text-[11px] text-stone-500 italic leading-relaxed">{term.context}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("performance");

    return (
        <div className="min-h-screen bg-stone-950">
            <AdminNavbar />

            <main className="max-w-7xl mx-auto p-8 md:p-12">
                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-800 pb-10 gap-6">
                    <div>
                        <h1 className="text-4xl font-serif text-white mb-4">Command Center</h1>
                        <p className="text-[10px] text-stone-500 uppercase tracking-[0.4em] font-sans">
                            Casa Yolotl & Co. | <span className="text-brand-gold">Nivel de Seguridad CIARO</span>
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-stone-900 border border-stone-800 p-4 flex items-center gap-4">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                            <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold italic">Sistemas Online</span>
                        </div>
                    </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex gap-8 mb-12 border-b border-stone-900">
                    {[
                        { id: "performance", label: "Rendimiento & SEO", icon: Zap },
                        { id: "analytics", label: "ROI & Atribución", icon: Globe },
                        { id: "storytelling", label: "Storytelling Cultural", icon: Globe },
                        { id: "devops", label: "DevOps & CI/CD", icon: ShieldCheck }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-4 text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 transition-all duration-300 relative ${activeTab === tab.id ? "text-brand-gold font-bold" : "text-stone-500 hover:text-stone-300"
                                }`}
                        >
                            <tab.icon className="w-3 h-3" />
                            {tab.label}
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 w-full h-px bg-brand-gold"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Modules */}
                <div className="animate-fade-in">
                    {activeTab === "performance" && <PerformanceModule />}
                    {activeTab === "analytics" && <AnalyticsModule />}
                    {activeTab === "storytelling" && <StorytellingModule />}
                    {activeTab === "devops" && <DevOpsModule />}
                </div>
            </main>
        </div>
    );
}

function PerformanceModule() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard title="LCP (Largest Contentful Paint)" value="1.2s" status="OPTIMAL" />
            <MetricCard title="CLS (Cumulative Layout Shift)" value="0.01" status="OPTIMAL" />
            <MetricCard title="SEO Health Score" value="98/100" status="OPTIMAL" />

            <div className="md:col-span-3 bg-stone-900 border border-stone-800 p-10 mt-4 shadow-xl">
                <h3 className="text-sm font-serif text-white mb-8 border-b border-stone-800 pb-4 flex items-center gap-3">
                    <Activity className="w-4 h-4 text-brand-gold" /> Auditoría Lighthouse CI
                </h3>
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin-slow"></div>
                        <span className="text-3xl font-serif text-emerald-500 font-bold">95</span>
                    </div>
                    <div className="flex-1 space-y-6">
                        <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-wider">
                            "Guardrail de rendimiento activo. El umbral de aprobación (90) se ha superado con éxito en el último build de producción."
                        </p>
                        <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 inline-flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest leading-none">Despliegue Autorizado</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AnalyticsModule() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-stone-900 border border-stone-800 p-10 shadow-xl">
                    <h3 className="text-sm font-serif text-white mb-8 border-b border-stone-800 pb-4">Business Intelligence (ROI Global)</h3>
                    <ROIChart />
                </div>
                <div className="bg-stone-900 border border-stone-800 p-10 shadow-xl">
                    <h3 className="text-sm font-serif text-white mb-8 border-b border-stone-800 pb-4">Breakdown por Región (Market Share)</h3>
                    <GeographyChart />
                </div>
            </div>

            {/* ROI Gate Visual Indicator */}
            <div className="bg-stone-900 border border-emerald-500/20 p-8 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                        <BarChart3 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 block mb-1">Estado del ROI Gate</span>
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Veto Técnico: <span className="text-emerald-500 italic">INACTIVO</span></span>
                    </div>
                </div>
                <div>
                    <span className="text-2xl font-serif text-emerald-500">22.4%</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-600 ml-4 italic">(Umbral: 20%)</span>
                </div>
            </div>
        </div>
    );
}

function DevOpsModule() {
    return (
        <div className="bg-stone-900 border border-stone-800 p-10 shadow-xl">
            <h3 className="text-sm font-serif text-white mb-8 border-b border-stone-800 pb-4">Historial de Despliegue (Production)</h3>
            <div className="space-y-8">
                <DeploymentItem version="v1.4.2" status="SUCCESS" date="7 MAR, 2026 14:05" author="Cesar Vargas" />
                <DeploymentItem version="v1.4.1" status="SUCCESS" date="6 MAR, 2026 10:12" author="CI/CD Auto" />
                <DeploymentItem version="v1.4.0" status="FAILED" date="5 MAR, 2026 22:50" author="PR #156" error="Lighthouse Performance Veto (<90)" />
            </div>
        </div>
    );
}

function MetricCard({ title, value, status }: { title: string, value: string, status: string }) {
    return (
        <div className="bg-stone-900 border border-stone-800 p-8 shadow-md">
            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 block mb-4">{title}</span>
            <div className="flex justify-between items-end">
                <span className="text-3xl font-serif text-white">{value}</span>
                <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest border border-emerald-500/50 px-2 py-1 leading-none">{status}</span>
            </div>
        </div>
    );
}

function DeploymentItem({ version, status, date, author, error }: any) {
    return (
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 text-xs">
            <div className="flex items-center gap-6">
                <span className="text-brand-gold font-bold tracking-widest uppercase">{version}</span>
                <div className="flex flex-col">
                    <span className="text-stone-300 font-bold uppercase tracking-wider">{author}</span>
                    <span className="text-[10px] text-stone-600 italic uppercase tracking-widest">{date}</span>
                </div>
            </div>
            <div className="flex items-center gap-8">
                {error && <span className="text-[9px] text-red-400 italic uppercase tracking-widest flex items-center gap-2"><AlertTriangle className="w-3 h-3" /> {error}</span>}
                <span className={`text-[10px] font-bold uppercase tracking-widest ${status === "SUCCESS" ? "text-emerald-500" : "text-red-500"}`}>
                    {status}
                </span>
            </div>
        </div>
    );
}
