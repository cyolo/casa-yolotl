/**
 * Casa Yolotl & Co. - Navigation Configuration
 * Single source of truth for all internal routes and anchors.
 */
export const SITE_ROUTES = {
    HOME: "/",
    CONTACT: "/contacto",
    STORIES: "/cultura",
    ESSENCE: "/esencia",
    CATALOG_SECTION: "/#curaduria", // Combined route + anchor for home catalog section
} as const;
