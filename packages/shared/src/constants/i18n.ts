export enum Locale {
    ES = "es",
    EN = "en"
}

export const SUPPORTED_LOCALES: Locale[] = [Locale.ES, Locale.EN];

export const I18N_CONFIG = {
    defaultLocale: Locale.ES,
    locales: SUPPORTED_LOCALES,
    cookieName: "NEXT_LOCALE",
    maxAge: 31536000 // 1 year
};
