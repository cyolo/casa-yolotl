"use client";

import { useState } from "react";

export default function SeoManager() {
    const [meta, setMeta] = useState({
        title: "CASA YOLOTL & CO | Cultura, Diseño y Esencia Mexicana",
        description: "Conectamos al mundo con la esencia cultural de México.",
        slugEs: "/es-mx/historia",
        slugEn: "/en-us/story",
    });

    return (
        <div className="min-h-screen p-8 md:p-12">
            <header className="mb-12 border-b border-stone-200 pb-8">
                <h1 className="text-3xl font-serif text-stone-900 mb-2">SEO Manager</h1>
                <p className="text-sm text-stone-500 uppercase tracking-widest italic">Optimización de Identidad Internacional</p>
            </header>

            <div className="max-w-3xl bg-white p-10 border border-stone-100 shadow-xl">
                <form className="space-y-8">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">Título Global (Meta)</label>
                            <input
                                type="text"
                                value={meta.title}
                                onChange={(e) => setMeta({ ...meta, title: e.target.value })}
                                className="w-full border-b border-stone-200 py-2 text-sm focus:border-brand-gold outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">Descripción Corta</label>
                            <textarea
                                rows={3}
                                value={meta.description}
                                onChange={(e) => setMeta({ ...meta, description: e.target.value })}
                                className="w-full border border-stone-100 p-4 text-sm focus:border-brand-gold outline-none transition-colors italic"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12 pt-8 border-t border-stone-50">
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">International Slug (MX)</label>
                            <input
                                type="text"
                                value={meta.slugEs}
                                className="w-full border-b border-stone-200 py-2 text-sm focus:border-brand-gold outline-none transition-colors"
                                placeholder="/es-mx/..."
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">International Slug (EU/US)</label>
                            <input
                                type="text"
                                value={meta.slugEn}
                                className="w-full border-b border-stone-200 py-2 text-sm focus:border-brand-gold outline-none transition-colors"
                                placeholder="/en-us/..."
                            />
                        </div>
                    </div>

                    <div className="pt-12 flex justify-end">
                        <button
                            type="button"
                            className="bg-brand-gold text-brand-cream px-12 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-black transition-all duration-500 shadow-lg"
                            onClick={() => alert("Cambios guardados en base de datos persistente (Mock)")}
                        >
                            Publicar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
