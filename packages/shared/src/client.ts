// Client-safe exports from @casa-yolotl/shared
export type { Product } from "./data/products";
export type { Story } from "./data/stories";
export type { HeritageNarrative, GlossaryTerm } from "./data/heritage";
export * from "./types/ui";
export * from "./constants";
export * from "./constants/i18n";
export * from "./config/navigation";
export * from "./config/marketplace.config";
export { products } from "./data/products";
export { stories } from "./data/stories";
export { heritageNarrative, nahuatlGlossary } from "./data/heritage";
export { trackMarketplaceExit, trackStoryView } from "./lib/analytics";
