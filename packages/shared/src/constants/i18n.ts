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
    RM = "rm"
}

export const SUPPORTED_LOCALES: Locale[] = [
    Locale.ES, Locale.EN, Locale.FR, Locale.IT, Locale.PT,
    Locale.RO, Locale.CA, Locale.GL, Locale.OC, Locale.CO,
    Locale.SC, Locale.RM
];

export const I18N_CONFIG = {
    defaultLocale: Locale.EN,
    locales: SUPPORTED_LOCALES,
    cookieName: "NEXT_LOCALE",
    maxAge: 31536000 // 1 year
};
