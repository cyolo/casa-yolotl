export interface Story {
    id: string;
    mainImage: string;
    relatedProductIds: string[];
}

export const stories: Story[] = [
    {
        id: "story-barro-negro",
        mainImage: "/stories/barro-negro-process.png",
        relatedProductIds: ["decor-01"],
    },
    {
        id: "story-mezcal-tradition",
        mainImage: "/stories/mezcal-process.png",
        relatedProductIds: ["mezcal-01", "mezcal-02"],
    },
    {
        id: "story-telar-cintura",
        mainImage: "/stories/telar-process.png",
        relatedProductIds: ["textil-01"],
    },
    {
        id: "story-metepec",
        mainImage: "/stories/metepec-ceramic.png",
        relatedProductIds: ["montoya-01"],
    },
];
