"use client";

import Image from "next/image";
import { Story } from "@casa-yolotl/shared";
import { useLanguage } from "@/context/LanguageContext";

interface EditorialStoryFeatureProps {
    story: Story;
    index: number;
    onClick: (story: Story) => void;
}

const EditorialStoryFeature = ({ story, index, onClick }: EditorialStoryFeatureProps) => {
    const isEven = index % 2 === 0;
    const { t } = useLanguage();

    const title = t(`Stories.items.${story.id}.title`);
    const excerpt = t(`Stories.items.${story.id}.excerpt`);
    const location = t(`Stories.items.${story.id}.location`);

    return (
        <article
            onClick={() => onClick(story)}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-32 lg:mb-48 last:mb-0"
        >
            {/* Image Container - Full width on mobile, 7 cols on desktop */}
            <div
                className={`relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-brand-black/5 ${
                    isEven ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-6"
                }`}
            >
                <Image
                    src={story.mainImage}
                    alt={title}
                    fill
                    className="object-cover grayscale-0 transition-transform duration-1000 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                />
            </div>

            {/* Content Container - 5 cols on desktop with high negative space */}
            <div
                className={`flex flex-col space-y-8 lg:space-y-12 ${
                    isEven ? "lg:col-span-5" : "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                }`}
            >
                {/* Editorial Metadata */}
                <div className="flex flex-col space-y-6">
                    <span className="luxury-kicker text-brand-gold leading-relaxed">
                        {t("Stories.title")} — {location}
                    </span>
                    <div className="h-px w-16 bg-brand-gold/40"></div>
                </div>

                {/* Main Heading */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl luxury-heading text-brand-black group-hover:text-brand-gold transition-colors duration-700">
                    {title}
                </h3>

                {/* Poetic Description */}
                <p className="luxury-body text-brand-black/70 text-sm md:text-base max-w-md">
                    {excerpt}
                </p>

                {/* Subtle CTA */}
                <div className="pt-4 lg:pt-8">
                    <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-brand-black/50 border-b border-brand-black/20 pb-2 group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-500">
                        {t("Stories.read_more")}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default EditorialStoryFeature;
