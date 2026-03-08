"use client";

import { useState } from "react";

const ContactSection = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        country: "",
        inquiryType: "Sales",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormState({ name: "", email: "", country: "", inquiryType: "Sales", message: "" });
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section className="py-32 px-8 bg-brand-cream border-t border-brand-black/5" id="contacto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">

                {/* Left: Global Presence */}
                <div className="space-y-12">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-sans font-bold block mb-6">Presencia Global</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-8 leading-tight">Conectando Origen con el Mundo</h2>
                        <p className="text-brand-black/60 font-sans text-sm leading-relaxed max-w-md">
                            Nuestra infraestructura está diseñada para garantizar la excelencia en cada entrega internacional, desde el corazón de México hasta las principales capitales europeas.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <div className="flex items-start space-x-6">
                            <div className="w-px h-12 bg-brand-gold/30"></div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest font-sans font-bold mb-2">Showroom Ciudad de México</h3>
                                <p className="text-sm text-brand-black/60 font-sans">Colonia Roma Norte, CDMX</p>
                                <p className="text-[10px] text-brand-gold mt-1 font-sans">Cita previa requerida</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="w-px h-12 bg-brand-gold/30"></div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest font-sans font-bold mb-2">Distribución Europa</h3>
                                <p className="text-sm text-brand-black/60 font-sans">Sede de Logística: Madrid, España</p>
                                <p className="text-[10px] text-brand-gold mt-1 font-sans">Servicio de importación 3PL</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="w-px h-12 bg-brand-gold/30"></div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest font-sans font-bold mb-2">Canal Digital</h3>
                                <p className="text-sm text-brand-black/60 font-sans">hola@casayolotl.com</p>
                                <p className="text-[10px] text-brand-gold mt-1 font-sans">Respuesta en menos de 24h</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="bg-white p-8 md:p-12 border border-brand-black/5 shadow-2xl relative">
                    {isSuccess && (
                        <div className="absolute inset-0 bg-brand-cream z-10 flex flex-col items-center justify-center animate-fade-in text-center p-8">
                            <div className="w-16 h-16 rounded-full border border-brand-gold flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <h3 className="text-2xl font-serif text-brand-black mb-4">Mensaje Recibido</h3>
                            <p className="text-sm text-brand-black/60 font-sans">Un asesor cultural se pondrá en contacto con usted a la brevedad.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    required
                                    placeholder="Nombre Completo"
                                    className="w-full bg-transparent border-b border-brand-black/10 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors peer placeholder:text-brand-black/20"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    placeholder="Correo Electrónico"
                                    className="w-full bg-transparent border-b border-brand-black/10 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors peer placeholder:text-brand-black/20"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    required
                                    placeholder="País"
                                    className="w-full bg-transparent border-b border-brand-black/10 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors peer placeholder:text-brand-black/20"
                                    value={formState.country}
                                    onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                                />
                            </div>
                            <div className="relative">
                                <select
                                    className="w-full bg-transparent border-b border-brand-black/10 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors cursor-pointer text-brand-black/60"
                                    value={formState.inquiryType}
                                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                                >
                                    <option value="Sales">Ventas Internacionales</option>
                                    <option value="Press">Prensa & Media</option>
                                    <option value="Artisan">Alianza de Artesanos</option>
                                </select>
                            </div>
                        </div>

                        <div className="relative">
                            <textarea
                                rows={4}
                                placeholder="Escriba su inquietud..."
                                className="w-full bg-transparent border-b border-brand-black/10 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors resize-none placeholder:text-brand-black/20"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-brand-black text-brand-cream py-5 text-xs uppercase tracking-[0.4em] font-sans font-bold hover:bg-brand-gold transition-all duration-500 disabled:opacity-50"
                        >
                            {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
