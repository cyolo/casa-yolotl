"use client";

import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Casa Yolotl & Co. Analytics Utility
 * ROI & Cultural Engagement Tracking Layer
 */

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    // Ensure we are in the browser
    if (typeof window === "undefined") return;

    // Add default parameters for international context and observability
    const defaultParams = {
        timestamp: new Date().toISOString(),
        url: window.location.href,
        language_context: document.documentElement.lang || "es",
    };

    const finalParams = { ...defaultParams, ...params };

    // Log to console in development mode for easier debugging
    if (process.env.NODE_ENV === "development") {
        console.group(`[CY Analytics] ${eventName}`);
        console.table(finalParams);
        console.groupEnd();
    }

    // Push to DataLayer using @next/third-parties
    sendGTMEvent({
        event: eventName,
        ...finalParams,
    });
};

/**
 * Special Business ROI: Marketplace Exit
 */
export const trackMarketplaceExit = (product: {
    id: string;
    title: string;
    category: string;
    price_eur: number;
}) => {
    trackEvent("marketplace_exit", {
        item_id: product.id,
        item_name: product.title,
        item_category: product.category,
        value: product.price_eur,
        currency: "EUR",
        method: "button_click_external"
    });
};

/**
 * Cultural Engagement: Story Read
 * KPI: Engagement on Biblioteca Cognitiva
 */
export const trackStoryView = (story: { id: string; title: string; location: string }) => {
    trackEvent("story_view", {
        story_id: story.id,
        story_title: story.title,
        origin_region: story.location,
        engagement_type: "immersive_modal_open"
    });
};

