"use client";

import { useState } from "react";
import StoryCard from "./StoryCard";
import StoryModal from "./StoryModal";
import { stories, Story, trackStoryView } from "@casa-yolotl/shared";
import { useLanguage } from "@/context/LanguageContext";

const StorySection = () => {
    const { t } = useLanguage();
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenStory = (story: Story) => {
        const title = t(`Stories.items.${story.id}.title`);
        const location = t(`Stories.items.${story.id}.location`);

        setSelectedStory(story);
        setIsModalOpen(true);
        trackStoryView({
            id: story.id,
            title: title,
            location: location
        });
    };

    const handleCloseStory = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedStory(null), 500);
    };

    return (
        <section className="py-32 px-8 bg-[#F9F9F7]" id="historias">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center md:text-left">
                    <span className="text-[10px] uppercase tracking-[0.6em] text-brand-black/40 block mb-4">{t("Stories.badge")}</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-brand-black mb-8">{t("Stories.title")}</h2>
                    <div className="w-24 h-px bg-brand-gold mb-8 hidden md:block"></div>
                    <p className="max-w-xl text-brand-black/60 font-sans uppercase text-[10px] tracking-[0.2em] leading-relaxed">
                        {t("Stories.description")}
                    </p>
                </div>

                <div className="flex flex-col">
                    {stories.map((story, index) => (
                        <StoryCard
                            key={story.id}
                            story={story}
                            index={index}
                            onClick={handleOpenStory}
                        />
                    ))}
                </div>

                <StoryModal
                    story={selectedStory}
                    isOpen={isModalOpen}
                    onClose={handleCloseStory}
                />
            </div>
        </section>
    );
};

export default StorySection;
