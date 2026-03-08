export interface Language {
    code: string;
    name: string;
    nativeName: string;
    category: string;
}

export const languageCategories = [
    "Lenguas Romances",
    "Lenguas Germánicas",
    "Lenguas Eslavas",
    "Lenguas Celtas",
    "Lenguas Bálticas",
    "Lenguas Helénicas",
    "Lenguas Albánicas",
    "Lenguas Urálicas",
    "Lenguas Túrquicas",
    "Lenguas Caucásicas",
    "Lenguas Semíticas",
    "Lenguas Iranias",
    "Lenguas Indoarias",
    "Lenguas Aisladas"
];

const romance: Language[] = [
    { code: "es", name: "Español", nativeName: "Español", category: "Lenguas Romances" },
    { code: "fr", name: "Francés", nativeName: "Français", category: "Lenguas Romances" },
    { code: "it", name: "Italiano", nativeName: "Italiano", category: "Lenguas Romances" },
    { code: "pt", name: "Portugués", nativeName: "Português", category: "Lenguas Romances" },
    { code: "ro", name: "Rumano", nativeName: "Română", category: "Lenguas Romances" },
    { code: "ca", name: "Catalán", nativeName: "Català", category: "Lenguas Romances" },
    { code: "gl", name: "Gallego", nativeName: "Galego", category: "Lenguas Romances" },
    { code: "oc", name: "Occitano", nativeName: "Occitan", category: "Lenguas Romances" },
    { code: "co", name: "Corso", nativeName: "Corsu", category: "Lenguas Romances" },
    { code: "sc", name: "Sardo", nativeName: "Sardu", category: "Lenguas Romances" },
    { code: "rm", name: "Romanche", nativeName: "Rumantsch", category: "Lenguas Romances" },
    { code: "fur", name: "Friulano", nativeName: "Furlan", category: "Lenguas Romances" },
    { code: "lld", name: "Ladino", nativeName: "Ladin", category: "Lenguas Romances" },
    { code: "an", name: "Aragonés", nativeName: "Aragonés", category: "Lenguas Romances" },
    { code: "ast", name: "Asturiano", nativeName: "Asturianu", category: "Lenguas Romances" },
    { code: "ext", name: "Extremeño", nativeName: "Estremeñu", category: "Lenguas Romances" },
    { code: "lij", name: "Ligur", nativeName: "Ligure", category: "Lenguas Romances" },
    { code: "lmo", name: "Lombardo", nativeName: "Lumbard", category: "Lenguas Romances" },
    { code: "nap", name: "Napolitano", nativeName: "Napulitano", category: "Lenguas Romances" },
    { code: "pms", name: "Piamontés", nativeName: "Piemontèis", category: "Lenguas Romances" },
    { code: "scn", name: "Siciliano", nativeName: "Sicilianu", category: "Lenguas Romances" },
    { code: "vec", name: "Veneciano", nativeName: "Vèneto", category: "Lenguas Romances" },
    { code: "frp", name: "Arpitano", nativeName: "Arpetan", category: "Lenguas Romances" },
    { code: "mwl", name: "Mirandés", nativeName: "Mirandés", category: "Lenguas Romances" },
    { code: "roa-ter", name: "Teramano", nativeName: "Teraman'e", category: "Lenguas Romances" }
];

const germanic: Language[] = [
    { code: "en", name: "Inglés", nativeName: "English", category: "Lenguas Germánicas" },
    { code: "de", name: "Alemán", nativeName: "Deutsch", category: "Lenguas Germánicas" },
    { code: "nl", name: "Neerlandés", nativeName: "Nederlands", category: "Lenguas Germánicas" },
    { code: "sv", name: "Sueco", nativeName: "Svenska", category: "Lenguas Germánicas" },
    { code: "da", name: "Danés", nativeName: "Dansk", category: "Lenguas Germánicas" },
    { code: "no", name: "Noruego", nativeName: "Norsk", category: "Lenguas Germánicas" },
    { code: "is", name: "Islandés", nativeName: "Íslenska", category: "Lenguas Germánicas" },
    { code: "af", name: "Afrikáans", nativeName: "Afrikaans", category: "Lenguas Germánicas" },
    { code: "fo", name: "Faroés", nativeName: "Føroyskt", category: "Lenguas Germánicas" },
    { code: "fy", name: "Frisón", nativeName: "Frysk", category: "Lenguas Germánicas" },
    { code: "lb", name: "Luxemburgués", nativeName: "Lëtzebuergesch", category: "Lenguas Germánicas" },
    { code: "yi", name: "Yidis", nativeName: "ייִדיש", category: "Lenguas Germánicas" },
    { code: "sco", name: "Escocés (Scots)", nativeName: "Scots", category: "Lenguas Germánicas" },
    { code: "nds", name: "Bajo Alemán", nativeName: "Plattdüütsch", category: "Lenguas Germánicas" },
    { code: "bar", name: "Bávaro", nativeName: "Boarisch", category: "Lenguas Germánicas" },
    { code: "wae", name: "Walser", nativeName: "Walsertiitsch", category: "Lenguas Germánicas" },
    { code: "vls", name: "Flamenco Occidental", nativeName: "West-Vlaams", category: "Lenguas Germánicas" },
    { code: "zea", name: "Zelandés", nativeName: "Zeêuws", category: "Lenguas Germánicas" },
    { code: "gmw-jdt", name: "Jersey Dutch", nativeName: "Jersey Dutch", category: "Lenguas Germánicas" },
    { code: "gos", name: "Groningués", nativeName: "Grunnegs", category: "Lenguas Germánicas" },
    { code: "lim", name: "Limburgués", nativeName: "Limburgs", category: "Lenguas Germánicas" }
];

const slavic: Language[] = [
    { code: "ru", name: "Ruso", nativeName: "Русский", category: "Lenguas Eslavas" },
    { code: "pl", name: "Polaco", nativeName: "Polski", category: "Lenguas Eslavas" },
    { code: "uk", name: "Ucraniano", nativeName: "Українська", category: "Lenguas Eslavas" },
    { code: "cs", name: "Checo", nativeName: "Čeština", category: "Lenguas Eslavas" },
    { code: "sk", name: "Eslovaco", nativeName: "Slovenčina", category: "Lenguas Eslavas" },
    { code: "bg", name: "Búlgaro", nativeName: "Български", category: "Lenguas Eslavas" },
    { code: "sr", name: "Serbio", nativeName: "Српски", category: "Lenguas Eslavas" },
    { code: "hr", name: "Croata", nativeName: "Hrvatski", category: "Lenguas Eslavas" },
    { code: "sl", name: "Esloveno", nativeName: "Slovenščina", category: "Lenguas Eslavas" },
    { code: "be", name: "Bielorruso", nativeName: "Беларуская", category: "Lenguas Eslavas" },
    { code: "mk", name: "Macedonio", nativeName: "Македонски", category: "Lenguas Eslavas" },
    { code: "cu", name: "Eslavo Eclesiástico", nativeName: "Славенобългарски", category: "Lenguas Eslavas" },
    { code: "hsb", name: "Alto Sorabo", nativeName: "Hornjoserbšćina", category: "Lenguas Eslavas" },
    { code: "dsb", name: "Bajo Sorabo", nativeName: "Dolnoserbšćina", category: "Lenguas Eslavas" },
    { code: "szl", name: "Silesiano", nativeName: "Ślōnskŏ gŏdka", category: "Lenguas Eslavas" },
    { code: "csb", name: "Kasubio", nativeName: "Kaszëbsczi jãzëk", category: "Lenguas Eslavas" },
    { code: "rue", name: "Rusino", nativeName: "Русиньскый", category: "Lenguas Eslavas" },
    { code: "sh", name: "Serbocroata", nativeName: "Srpskohrvatski", category: "Lenguas Eslavas" },
    { code: "zle-ort", name: "Antiguo Ruso", nativeName: "Old East Slavic", category: "Lenguas Eslavas" },
    { code: "zlw-slv", name: "Eslovincio", nativeName: "Slovincian", category: "Lenguas Eslavas" }
];

const celtic: Language[] = [
    { code: "ga", name: "Irlandés", nativeName: "Gaeilge", category: "Lenguas Celtas" },
    { code: "cy", name: "Galés", nativeName: "Cymraeg", category: "Lenguas Celtas" },
    { code: "gd", name: "Gaélico Escocés", nativeName: "Gàidhlig", category: "Lenguas Celtas" },
    { code: "br", name: "Bretón", nativeName: "Brezhoneg", category: "Lenguas Celtas" },
    { code: "kw", name: "Córnico", nativeName: "Kernowek", category: "Lenguas Celtas" },
    { code: "gv", name: "Manés", nativeName: "Gaelg", category: "Lenguas Celtas" },
    { code: "obt", name: "Antiguo Bretón", nativeName: "Old Breton", category: "Lenguas Celtas" },
    { code: "sga", name: "Antiguo Irlandés", nativeName: "Old Irish", category: "Lenguas Celtas" }
];

const baltic: Language[] = [
    { code: "lt", name: "Lituano", nativeName: "Lietuvių", category: "Lenguas Bálticas" },
    { code: "lv", name: "Letón", nativeName: "Latviešu", category: "Lenguas Bálticas" },
    { code: "prg", name: "Prusiano Antiguo", nativeName: "Prūsiskan", category: "Lenguas Bálticas" },
    { code: "bat-smg", name: "Samogitiano", nativeName: "Žemaitėška", category: "Lenguas Bálticas" },
    { code: "ltg", name: "Latgalio", nativeName: "Latgaļu", category: "Lenguas Bálticas" }
];

const hellenic: Language[] = [
    { code: "el", name: "Griego", nativeName: "Ελληνικά", category: "Lenguas Helénicas" },
    { code: "pnt", name: "Póntico", nativeName: "Ποντιακά", category: "Lenguas Helénicas" },
    { code: "grc", name: "Griego Antiguo", nativeName: "Ancient Greek", category: "Lenguas Helénicas" },
    { code: "tsd", name: "Tsakonio", nativeName: "Tsaκōnιka", category: "Lenguas Helénicas" },
    { code: "yej", name: "Yevánico", nativeName: "Ladin", category: "Lenguas Helénicas" }
];

const albanic: Language[] = [
    { code: "sq", name: "Albanés", nativeName: "Shqip", category: "Lenguas Albánicas" },
    { code: "aln", name: "Gueguí", nativeName: "Gegnisht", category: "Lenguas Albánicas" },
    { code: "als", name: "Tosco", nativeName: "Toskë", category: "Lenguas Albánicas" },
    { code: "aae", name: "Arbëreshë", nativeName: "Arbërisht", category: "Lenguas Albánicas" }
];

const uralic: Language[] = [
    { code: "hu", name: "Húngaro", nativeName: "Magyar", category: "Lenguas Urálicas" },
    { code: "fi", name: "Finés", nativeName: "Suomi", category: "Lenguas Urálicas" },
    { code: "et", name: "Estonio", nativeName: "Eesti", category: "Lenguas Urálicas" },
    { code: "se", name: "Sami Septentrional", nativeName: "Sámegiella", category: "Lenguas Urálicas" },
    { code: "smj", name: "Sami Lule", nativeName: "Julevsámegiella", category: "Lenguas Urálicas" },
    { code: "sma", name: "Sami Meridional", nativeName: "Åarjelsaemien", category: "Lenguas Urálicas" },
    { code: "kpv", name: "Komi", nativeName: "Коми кыв", category: "Lenguas Urálicas" },
    { code: "mdf", name: "Moksha", nativeName: "Мокшень кяль", category: "Lenguas Urálicas" },
    { code: "myv", name: "Erzya", nativeName: "Эрзянь кель", category: "Lenguas Urálicas" },
    { code: "udm", name: "Udmurto", nativeName: "Удмурт кыл", category: "Lenguas Urálicas" },
    { code: "krl", name: "Carelio", nativeName: "Karjala", category: "Lenguas Urálicas" },
    { code: "vep", name: "Vepsio", nativeName: "Vepsän kel’", category: "Lenguas Urálicas" },
    { code: "mhr", name: "Mari Oriental", nativeName: "Марий йылме", category: "Lenguas Urálicas" },
    { code: "mrj", name: "Mari Occidental", nativeName: "Мары йӹлмӹ", category: "Lenguas Urálicas" }
];

const turkic: Language[] = [
    { code: "tr", name: "Turco", nativeName: "Türkçe", category: "Lenguas Túrquicas" },
    { code: "az", name: "Azerbaiyano", nativeName: "Azərbaycanca", category: "Lenguas Túrquicas" },
    { code: "tt", name: "Tártaro", nativeName: "Татарча", category: "Lenguas Túrquicas" },
    { code: "ba", name: "Baskir", nativeName: "Башҡортса", category: "Lenguas Túrquicas" },
    { code: "cv", name: "Chuvasio", nativeName: "Чӑвашла", category: "Lenguas Túrquicas" },
    { code: "crh", name: "Tártaro de Crimea", nativeName: "Qırımtatarca", category: "Lenguas Túrquicas" },
    { code: "gag", name: "Gagauzo", nativeName: "Gagauzça", category: "Lenguas Túrquicas" },
    { code: "kum", name: "Cumuco", nativeName: "Къумукъ тил", category: "Lenguas Túrquicas" },
    { code: "kaa", name: "Caracalpaco", nativeName: "Qaraqalpaq tili", category: "Lenguas Túrquicas" }
];

const caucasian: Language[] = [
    { code: "ka", name: "Georgiano", nativeName: "ქართული", category: "Lenguas Caucásicas" },
    { code: "av", name: "Ávaro", nativeName: "Авар мацӀ", category: "Lenguas Caucásicas" },
    { code: "ce", name: "Checheno", nativeName: "Нохчийн мотт", category: "Lenguas Caucásicas" },
    { code: "ab", name: "Abjasio", nativeName: "Аԥсшәа", category: "Lenguas Caucásicas" },
    { code: "ady", name: "Adigué", nativeName: "Адыgaбзэ", category: "Lenguas Caucásicas" },
    { code: "inh", name: "Ingusetio", nativeName: "Гӏалгӏай мотт", category: "Lenguas Caucásicas" },
    { code: "lbe", name: "Lak", nativeName: "Лакку маз", category: "Lenguas Caucásicas" },
    { code: "lez", name: "Lezgiano", nativeName: "Лезги чӏал", category: "Lenguas Caucásicas" }
];

const semitic: Language[] = [
    { code: "mt", name: "Maltés", nativeName: "Malti", category: "Lenguas Semíticas" },
    { code: "ar-MT", name: "Árabe Siculo-Maltés", nativeName: "Siculo-Arabic", category: "Lenguas Semíticas" }
];

const iranian: Language[] = [
    { code: "ku", name: "Kurdo", nativeName: "Kurdî", category: "Lenguas Iranias" },
    { code: "os", name: "Osetio", nativeName: "Ирон", category: "Lenguas Iranias" },
    { code: "tg", name: "Tayiko", nativeName: "Тоҷикӣ", category: "Lenguas Iranias" },
    { code: "fa-europe", name: "Persa (Diáspora)", nativeName: "Farsi", category: "Lenguas Iranias" },
    { code: "tal", name: "Talish", nativeName: "Tolışi", category: "Lenguas Iranias" }
];

const indoaryan: Language[] = [
    { code: "rom", name: "Romaní", nativeName: "Romani", category: "Lenguas Indoarias" },
    { code: "rmy", name: "Vlax Romani", nativeName: "Vlax Romani", category: "Lenguas Indoarias" },
    { code: "rml", name: "Baltic Romani", nativeName: "Baltic Romani", category: "Lenguas Indoarias" },
    { code: "rmo", name: "Sin Romani", nativeName: "Sinte Romani", category: "Lenguas Indoarias" }
];

const isolated: Language[] = [
    { code: "eu", name: "Euskera", nativeName: "Euskara", category: "Lenguas Aisladas" },
    { code: "aqt", name: "Aquitano", nativeName: "Aquitanian", category: "Lenguas Aisladas" }
];

// Combine all for exporting
export const allLanguages: Language[] = [
    ...romance,
    ...germanic,
    ...slavic,
    ...celtic,
    ...baltic,
    ...hellenic,
    ...albanic,
    ...uralic,
    ...turkic,
    ...caucasian,
    ...semitic,
    ...iranian,
    ...indoaryan,
    ...isolated
];
