export enum Locale {
    ES = "es",
    EN = "en",
    FR = "fr",
    IT = "it",
    PT = "pt",
    RO = "ro",
    CA = "ca",
    GL = "gl",
    OC = "oc",
    CO = "co",
    SC = "sc",
    RM = "rm",
    AN = "an",
    AST = "ast",
    EXT = "ext",
    FRP = "frp",
    FUR = "fur",
    LIJ = "lij",
    LLD = "lld",
    LMO = "lmo",
    MWL = "mwl",
    NAP = "nap",
    PMS = "pms",
    ROA_TER = "roa-ter",
    SCN = "scn",
    VEC = "vec"
}

export const SUPPORTED_LOCALES: Locale[] = [
    Locale.ES, Locale.EN, Locale.FR, Locale.IT, Locale.PT,
    Locale.RO, Locale.CA, Locale.GL, Locale.OC, Locale.CO,
    Locale.SC, Locale.RM, Locale.AN, Locale.AST, Locale.EXT,
    Locale.FRP, Locale.FUR, Locale.LIJ, Locale.LLD, Locale.LMO,
    Locale.MWL, Locale.NAP, Locale.PMS, Locale.ROA_TER, Locale.SCN,
    Locale.VEC
];

export const I18N_CONFIG = {
    defaultLocale: Locale.EN,
    locales: SUPPORTED_LOCALES,
    cookieName: "NEXT_LOCALE",
    maxAge: 31536000 // 1 year
};
