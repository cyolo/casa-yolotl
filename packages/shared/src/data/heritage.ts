export interface HeritageNarrative {
    title: string;
    philosophy: string;
    culturalValue: string;
}

export interface GlossaryTerm {
    term: string;
    meaning: string;
    context: string;
}

export const heritageNarrative: HeritageNarrative = {
    title: "Heritage.Yollotl.title",
    philosophy: "Heritage.Yollotl.philosophy",
    culturalValue: "Heritage.Yollotl.culturalValue",
};

export const nahuatlGlossary: GlossaryTerm[] = [
    {
        term: "Yollotl",
        meaning: "Heritage.Glossary.Yollotl.meaning",
        context: "Heritage.Glossary.Yollotl.context",
    },
    {
        term: "Yolteotl",
        meaning: "Heritage.Glossary.Yolteotl.meaning",
        context: "Heritage.Glossary.Yolteotl.context",
    },
    {
        term: "Anáhuac",
        meaning: "Heritage.Glossary.Anahuac.meaning",
        context: "Heritage.Glossary.Anahuac.context",
    },
];
