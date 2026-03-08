"use client";

import Image from "next/image";
import { Story } from "@casa-yolotl/shared";
import { useLanguage } from "@/context/LanguageContext";

interface StoryCardProps {
    story: Story;
    index: number;
    onClick: (story: Story) => void;
}

const StoryCard = ({ story, index, onClick }: StoryCardProps) => {
    const isEven = index % 2 === 0;
    const { t } = useLanguage();

    const title = t(`Stories.items.${story.id}.title`);
    const excerpt = t(`Stories.items.${story.id}.excerpt`);
    const location = t(`Stories.items.${story.id}.location`);

    return (
        <article
            onClick={() => onClick(story)}
            className={`group cursor-pointer flex flex-col md:flex-row gap-12 items-center mb-32 last:mb-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Image Container with Parallax Effect & Authenticity Seal */}
            <div className="relative w-full md:w-3/5 aspect-[16/10] overflow-hidden bg-brand-black/5">
                <Image
                    src={story.mainImage}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 60vw"
                />

                {/* Sello de Autenticidad */}
                <div className="absolute top-6 right-6 w-20 h-20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                        <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0 " />
                        <text className="text-[7px] uppercase tracking-[0.2em] fill-brand-cream font-sans font-bold">
                            <textPath xlinkHref="#circlePath">
                                {t("Stories.seal")}
                            </textPath>
                        </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] text-brand-cream font-serif italic">CY</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center space-x-4">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-sans font-bold">
                        {t("Stories.title")}
                    </span>
                    <div className="h-px w-8 bg-brand-gold/30"></div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-brand-black/40 font-sans">
                        {location}
                    </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-serif text-brand-black leading-tight group-hover:text-brand-gold transition-colors duration-500">
                    {title}
                </h3>

                <p className="text-sm text-brand-black/60 font-sans leading-relaxed tracking-wide">
                    {excerpt}
                </p>

                <button
                    aria-label={t("Stories.read_more_aria", { title: title })}
                    className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors"
                >
                    {t("Stories.read_more")}
                </button>
            </div>
        </article>
    );
};

export default StoryCard;
