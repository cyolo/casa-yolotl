"use client";

import { useState } from "react";
import StoryCard from "./StoryCard";
import StoryModal from "./StoryModal";
import { stories, Story, trackStoryView } from "@casa-yolotl/shared";
import { useLanguage } from "@/context/LanguageContext";
import { DESIGN_FLAGS } from "@/lib/design-flags";

const LuxuryTitleWithAmpersand = ({ text }: { text: string }) => {
  if (!DESIGN_FLAGS.preserveGoldAmpersand) {
    return <>{text}</>;
  }
  const parts = text.split("&");
  if (parts.length !== 2) {
    return <>{text}</>;
  }
  return (
    <>
      {parts[0].trim()}{" "}
      <span className="luxury-ampersand" aria-hidden="true">
        &amp;
      </span>
      <span className="sr-only">&amp;</span>{" "}
      {parts[1].trim()}
    </>
  );
};

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
                    <span className="luxury-kicker block mb-4">{t("Stories.badge")}</span>
                    <h2 className="luxury-heading text-4xl md:text-6xl text-brand-black mb-8">
                        <LuxuryTitleWithAmpersand text={t("Stories.title")} />
                    </h2>
                    <div className="w-24 h-px bg-brand-gold mb-8 hidden md:block"></div>
                    <p className="max-w-xl text-brand-black/60 luxury-body leading-relaxed">
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
