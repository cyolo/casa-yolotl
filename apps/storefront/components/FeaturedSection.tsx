import Image from "next/image";
import Link from "next/link";
import LocaleLink from "./LocaleLink";
import { SITE_ROUTES } from "@casa-yolotl/shared";

const categories = [
    {
        title: "Artesanías",
        description: "Piezas únicas creadas con maestría ancestral.",
        image: "/cat-artesanias.png",
        href: SITE_ROUTES.CATALOG_SECTION,
    },
    {
        title: "Decoración",
        description: "Espacios con alma, identidad y elegancia contemporánea.",
        image: "/cat-decoracion.png",
        href: SITE_ROUTES.CATALOG_SECTION,
    },
    {
        title: "Mezcales",
        description: "El patrimonio líquido de las regiones más ricas de México.",
        image: "/cat-mezcales.png",
        href: SITE_ROUTES.CATALOG_SECTION,
    },
];

const FeaturedSection = () => {
    return (
        <section className="py-32 px-8 bg-brand-cream">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-6">
                        Curaduría de Excelencia
                    </h2>
                    <p className="text-sm font-sans text-brand-black/60 uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
                        Internacionalización responsable: Conectando el talento local con los estándares más exigentes del mundo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {categories.map((category, index) => (
                        <LocaleLink
                            key={index}
                            href={category.href}
                            className="group relative overflow-hidden aspect-[4/5] bg-brand-black/5"
                        >
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500"></div>

                            <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-serif text-brand-cream mb-2 drop-shadow-lg">
                                    {category.title}
                                </h3>
                                <p className="text-xs text-brand-cream/80 font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Ver Colección
                                </p>
                            </div>
                        </LocaleLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
