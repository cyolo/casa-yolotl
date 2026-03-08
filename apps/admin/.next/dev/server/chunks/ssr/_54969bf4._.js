module.exports = [
"[project]/packages/shared/src/data/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        id: "mezcal-01",
        title: "Mezcal Ancestral Espadín",
        category: "Mezcales",
        description: "Destilado en olla de barro, honrando la tradición milenaria de los maestros mezcaleros de Oaxaca.",
        price: "120.00",
        marketplaceUrl: "https://marketplace.example/mezcal-ancestral",
        imageUrl: "/products/mezcal-ancestral.png"
    },
    {
        id: "textil-01",
        title: "Huipil de Gala San Juan K",
        category: "Artesanías",
        description: "Tejido en telar de cintura con hilos de seda, una obra maestra que narra la cosmogonía local.",
        price: "450.00",
        marketplaceUrl: "https://marketplace.example/huipil-gala",
        imageUrl: "/products/huipil-gala.png"
    },
    {
        id: "decor-01",
        title: "Vaso de Barro Negro Bruñido",
        category: "Decoración",
        description: "Elegancia orgánica moldeada a mano en San Bartolo Coyotepec, con un acabado metálico natural.",
        price: "85.00",
        marketplaceUrl: "https://marketplace.example/barro-negro",
        imageUrl: "/products/barro-negro.png"
    },
    {
        id: "mezcal-02",
        title: "Mezcal Tobalá Silvestre",
        category: "Mezcales",
        description: "La joya de la corona, destilado de agaves silvestres encontrados en las altas montañas.",
        price: "180.00",
        marketplaceUrl: "https://marketplace.example/mezcal-tobala",
        imageUrl: "/products/mezcal-tobala.png"
    },
    {
        id: "textil-02",
        title: "Tapete de Teotitlán de Valle",
        category: "Decoración",
        description: "Lana virgen teñida con tintes naturales de grana cochinilla y añil, diseño geométrico ancestral.",
        price: "320.00",
        marketplaceUrl: "https://marketplace.example/tapete-teotitlan",
        imageUrl: "/products/tapete-teotitlan.png"
    },
    {
        id: "artesania-02",
        title: "Alebrije 'Jaguar del Alma'",
        category: "Artesanías",
        description: "Talla en madera de copal, pintada con minuciosidad onírica por artesanos de Arrazola.",
        price: "550.00",
        marketplaceUrl: "https://marketplace.example/alebrije-jaguar",
        imageUrl: "/products/alebrije-jaguar.png"
    }
];
}),
"[project]/packages/shared/src/data/stories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stories",
    ()=>stories
]);
const stories = [
    {
        id: "story-barro-negro",
        title: "El Alma del Barro Negro",
        excerpt: "Descubre el proceso ancestral de San Bartolo Coyotepec, donde la tierra se convierte en obsidiana manos de artesanos.",
        fullStory: `
# El Alma del Barro Negro

El barro negro es más que una técnica; es una herencia que palpita en el corazón de Oaxaca. En San Bartolo Coyotepec, los maestros artesanos transforman la arcilla local en piezas de una elegancia profunda y metálica.

## El Proceso
El secreto reside en el **bruñido** y el **horneado**. Usando una piedra de cuarzo, el artesano pule la pieza antes de entrar al horno de dos bocas. El humo atrapado durante la cocción es lo que otorga ese negro intenso y místico, sin necesidad de esmaltes.

## Herencia Vivo
Cada curva y cada calado cuenta una historia de paciencia. No hay prisa en el taller; la tierra dicta el tiempo, y el artesano simplemente escucha.
    `,
        location: "San Bartolo Coyotepec, Oaxaca",
        mainImage: "/stories/barro-negro-process.png",
        relatedProductIds: [
            "decor-01"
        ]
    },
    {
        id: "story-mezcal-tradition",
        title: "El Patrimonio Líquido",
        excerpt: "Más que un destilado, el mezcal es la sangre de la tierra. Un viaje por los palenques donde el tiempo se mide en ciclos de agave.",
        fullStory: `
# El Patrimonio Líquido

El mezcal es el espíritu de México embotellado. En los palenques tradicionales, el proceso comienza con la búsqueda del agave maduro, que ha absorbido el sol y los minerales de la tierra durante años.

## El Horno de Piedra
Las piñas se cocinan bajo tierra, en hornos de piedra volcánica calentados con leña de encino. Este paso es el que otorga el característico perfil ahumado que distingue a los mejores mezcales del mundo.

## La Destilación Ancestral
Usando ollas de barro, la destilación se realiza gota a gota. Es una alquimia sagrada que requiere el ojo experto del maestro mezcalero para separar las 'puntas' de las 'colas' y capturar la esencia perfecta.
    `,
        location: "Valles Centrales, Oaxaca",
        mainImage: "/stories/mezcal-process.png",
        relatedProductIds: [
            "mezcal-01",
            "mezcal-02"
        ]
    },
    {
        id: "story-telar-cintura",
        title: "Hilos que Narran el Cosmos",
        excerpt: "El telar de cintura es una extensión del cuerpo de la mujer artesana, tejiendo símbolos que resisten al olvido.",
        fullStory: `
# Hilos que Narran el Cosmos

El telar de cintura es una de las tecnologías textiles más antiguas y sofisticación de Mesoamérica. Atada a un árbol o poste por un extremo y a la cintura de la artesana por el otro, esta herramienta permite una conexión íntima con la obra.

## La Geometría Sagrada
Los brocados y bordados no son simples adornos. Son glifos contemporáneos que representan la flora, la fauna y la cosmogonía de la comunidad. Cada huipil es un mapa de identidad regional.

## Tintes Naturales
La búsqueda de la excelencia nos lleva a recuperar el uso de la grana cochinilla, el añil y el caracol púrpura, colorantes orgánicos que ofrecen una paleta de colores vibrantes y duraderos.
    `,
        location: "San Andrés Larráinzar, Chiapas",
        mainImage: "/stories/telar-process.png",
        relatedProductIds: [
            "textil-01"
        ]
    }
];
}),
"[project]/packages/shared/src/data/heritage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "heritageNarrative",
    ()=>heritageNarrative,
    "nahuatlGlossary",
    ()=>nahuatlGlossary
]);
const heritageNarrative = {
    title: "Yollotl: El Latido que Nos Define",
    philosophy: "En el mundo antiguo de Anáhuac, el corazón no era solo un órgano; era el 'Yollotl', el centro del conocimiento, la valentía y la creatividad. Para los mexicas, el corazón es donde reside la esencia de la persona y la fuerza que da vida a las manos del artesano.",
    culturalValue: "Casa Yolotl & Co. nace de este latido. No solo representamos artesanía; preservamos el valor cultural mexicano al conectar la sabiduría ancestral con la disciplina empresarial contemporánea, asegurando que cada pieza sea un puente entre el pasado glorioso y un futuro con propósito."
};
const nahuatlGlossary = [
    {
        term: "Yollotl",
        meaning: "Corazón",
        context: "El centro vital de la existencia y la creatividad."
    },
    {
        term: "Yolteotl",
        meaning: "Corazón endiosado",
        context: "La cualidad del artista que ha logrado que su corazón dialogue con lo divino."
    },
    {
        term: "Anáhuac",
        meaning: "Lugar rodeado de agua",
        context: "Término que designaba al mundo conocido por las culturas nahuas."
    }
];
}),
"[project]/packages/shared/src/lib/analytics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackError",
    ()=>trackError,
    "trackEvent",
    ()=>trackEvent,
    "trackMarketplaceExit",
    ()=>trackMarketplaceExit,
    "trackStoryView",
    ()=>trackStoryView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$next$2f$third$2d$parties$2f$dist$2f$google$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@next/third-parties/dist/google/index.js [app-ssr] (ecmascript)");
"use client";
;
const trackEvent = (eventName, params = {})=>{
    // Ensure we are in the browser
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    // Add default parameters for international context and observability
    const defaultParams = undefined;
    const finalParams = undefined;
};
const trackMarketplaceExit = (product)=>{
    trackEvent("marketplace_exit", {
        item_id: product.id,
        item_name: product.title,
        item_category: product.category,
        value: product.price_eur,
        currency: "EUR",
        method: "button_click_external"
    });
};
const trackStoryView = (story)=>{
    trackEvent("story_view", {
        story_id: story.id,
        story_title: story.title,
        origin_region: story.location,
        engagement_type: "immersive_modal_open"
    });
};
const trackError = (errorType, details)=>{
    trackEvent("technical_error", {
        error_type: errorType,
        error_details: details,
        severity: "significant"
    });
};
}),
"[project]/packages/shared/src/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND_COLORS",
    ()=>BRAND_COLORS,
    "BREAKPOINTS",
    ()=>BREAKPOINTS
]);
const BRAND_COLORS = {
    GOLD: "#C5A059",
    CREAM: "#F5F5F1",
    BLACK: "#1A1A1A",
    BONE: "#F9F9F7",
    WHITE: "#FFFFFF"
};
const BREAKPOINTS = {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1280
};
}),
"[project]/packages/shared/src/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/data/products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$data$2f$stories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/data/stories.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$data$2f$heritage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/data/heritage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/constants.ts [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/apps/admin/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/shared/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/src/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Dashboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-8 md:p-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-12 flex justify-between items-end border-b border-stone-200 pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-serif text-stone-900 mb-2",
                                children: "Panel de Control"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 10,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-stone-500 uppercase tracking-widest",
                                children: "Casa Yolotl & Co. | Eficiencia Empresarial"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 11,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/app/page.tsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-xs font-bold text-stone-400 uppercase tracking-tighter",
                                children: "Estado del Sistema"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-600 text-xs uppercase font-bold tracking-widest flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/admin/app/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 25
                                    }, this),
                                    "Operativo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 15,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/app/page.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/app/page.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-8 border border-stone-100 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-widest text-stone-400 block mb-4",
                                children: "Interés Proyectado"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl font-serif text-stone-900",
                                children: "€24,500"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-emerald-600 mt-4 uppercase tracking-widest font-bold",
                                children: "+12.5% vs Mes Anterior"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-8 border border-stone-100 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-widest text-stone-400 block mb-4",
                                children: "Leads Marketplace"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl font-serif text-stone-900",
                                children: "142"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-stone-400 mt-4 uppercase tracking-widest font-bold",
                                children: "Conversión: 8.4%"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-8 border border-stone-100 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-widest text-stone-400 block mb-4",
                                children: "Core Web Vitals"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl font-serif text-emerald-600",
                                children: "A+"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-stone-400 mt-4 uppercase tracking-widest font-bold",
                                children: "LCP: 1.2s | CLS: 0.01"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/app/page.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-8 border border-stone-100 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold uppercase tracking-[0.3em] text-stone-900 mb-8 border-b border-stone-50 pb-4",
                                children: "Gestión de Catálogo"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-stone-600",
                                                children: "Mezcal Ancestral"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/app/page.tsx",
                                                lineNumber: 47,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-stone-400 uppercase tracking-widest",
                                                children: "En Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/app/page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-brand-gold font-bold hover:underline",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND_COLORS"].GOLD
                                                },
                                                children: "Editar"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/app/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/admin/app/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-stone-600",
                                                children: "Barro Negro Vase"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/app/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-stone-400 uppercase tracking-widest",
                                                children: "Agotado"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/app/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-brand-gold font-bold hover:underline",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$src$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND_COLORS"].GOLD
                                                },
                                                children: "Editar"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/app/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/admin/app/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-stone-900 p-8 shadow-2xl text-stone-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold uppercase tracking-[0.3em] text-stone-400 mb-8 border-b border-stone-800 pb-4",
                                children: "Consola de Seguridad"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs leading-relaxed text-stone-500 uppercase tracking-widest mb-8",
                                children: "Acceso restringido a personal de nivel CIARO y Analistas autorizados."
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full bg-stone-100 text-stone-900 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-stone-300 transition-colors",
                                children: "Auditar Accesos"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/app/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/admin/app/page.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${args.id}')","strategy":"worker","location":"head","action":"append"}]});}),
"[project]/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatData = exports.createHtml = exports.formatUrl = void 0;
function filterArgs(args, selectedArgs, inverse = false) {
    if (!selectedArgs) return {};
    return Object.keys(args).filter((key)=>inverse ? !selectedArgs.includes(key) : selectedArgs.includes(key)).reduce((obj, key)=>{
        obj[key] = args[key];
        return obj;
    }, {});
}
// Add all required search params with user inputs as values
function formatUrl(url, params, args, slug) {
    const newUrl = slug && Object.keys(slug).length > 0 ? new URL(Object.values(slug)[0], url) // If there's a user inputted param for the URL slug, replace the default existing slug or include it
     : new URL(url);
    if (params && args) {
        params.forEach((param)=>{
            if (args[param]) newUrl.searchParams.set(param, args[param]);
        });
    }
    return newUrl.toString();
}
exports.formatUrl = formatUrl;
// Construct HTML element and include all default attributes and user-inputted attributes
function createHtml(element, attributes, htmlAttrArgs, urlQueryParamArgs, slugParamArg) {
    var _a;
    if (!attributes) return `<${element}></${element}>`;
    const formattedAttributes = ((_a = attributes.src) === null || _a === void 0 ? void 0 : _a.url) ? Object.assign(Object.assign({}, attributes), {
        src: formatUrl(attributes.src.url, attributes.src.params, urlQueryParamArgs, slugParamArg)
    }) : attributes;
    const htmlAttributes = Object.keys(Object.assign(Object.assign({}, formattedAttributes), htmlAttrArgs)).reduce((acc, name)=>{
        const userVal = htmlAttrArgs === null || htmlAttrArgs === void 0 ? void 0 : htmlAttrArgs[name];
        const defaultVal = formattedAttributes[name];
        const finalVal = userVal !== null && userVal !== void 0 ? userVal : defaultVal; // overwrite
        const attrString = finalVal === true ? name : `${name}="${finalVal}"`;
        return finalVal ? acc + ` ${attrString}` : acc;
    }, '');
    return `<${element}${htmlAttributes}></${element}>`;
}
exports.createHtml = createHtml;
// Format JSON by including all default and user-required parameters
function formatData(data, args) {
    var _a, _b, _c, _d, _e;
    const allScriptParams = (_a = data.scripts) === null || _a === void 0 ? void 0 : _a.reduce((acc, script)=>[
            ...acc,
            ...Array.isArray(script.params) ? script.params : []
        ], []);
    // First, find all input arguments that map to parameters passed to script URLs
    const scriptUrlParamInputs = filterArgs(args, allScriptParams);
    // Second, find all input arguments that map to parameters passed to the HTML src attribute
    const htmlUrlParamInputs = filterArgs(args, (_c = (_b = data.html) === null || _b === void 0 ? void 0 : _b.attributes.src) === null || _c === void 0 ? void 0 : _c.params);
    // Third, find the input argument that maps to the slug parameter passed to the HTML src attribute if present
    const htmlSlugParamInput = filterArgs(args, [
        (_e = (_d = data.html) === null || _d === void 0 ? void 0 : _d.attributes.src) === null || _e === void 0 ? void 0 : _e.slugParam
    ]);
    // Lastly, all remaining arguments are forwarded as separate HTML attributes
    const htmlAttrInputs = filterArgs(args, [
        ...Object.keys(scriptUrlParamInputs),
        ...Object.keys(htmlUrlParamInputs),
        ...Object.keys(htmlSlugParamInput)
    ], true);
    return Object.assign(Object.assign({}, data), {
        // Pass any custom attributes to HTML content
        html: data.html ? createHtml(data.html.element, data.html.attributes, htmlAttrInputs, htmlUrlParamInputs, htmlSlugParamInput) : null,
        // Pass any required query params with user values for relevant scripts
        scripts: data.scripts ? data.scripts.map((script)=>Object.assign(Object.assign({}, script), {
                url: formatUrl(script.url, script.params, scriptUrlParamInputs)
            })) : null
    });
}
exports.formatData = formatData;
}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleAnalytics = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/data.json (json)"));
const utils_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)");
const GoogleAnalytics = (_a)=>{
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.GoogleAnalytics = GoogleAnalytics;
}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}});}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleMapsEmbed = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/data.json (json)"));
const utils_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)");
const GoogleMapsEmbed = (_a)=>{
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.GoogleMapsEmbed = GoogleMapsEmbed;
}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]});}),
"[project]/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YouTubeEmbed = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/data.json (json)"));
const utils_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)");
const YouTubeEmbed = (_a)=>{
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.YouTubeEmbed = YouTubeEmbed;
}),
"[project]/node_modules/third-party-capital/lib/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YouTubeEmbed = exports.GoogleMapsEmbed = exports.GoogleAnalytics = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var google_analytics_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleAnalytics", {
    enumerable: true,
    get: function() {
        return google_analytics_1.GoogleAnalytics;
    }
});
var google_maps_embed_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleMapsEmbed", {
    enumerable: true,
    get: function() {
        return google_maps_embed_1.GoogleMapsEmbed;
    }
});
var youtube_embed_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "YouTubeEmbed", {
    enumerable: true,
    get: function() {
        return youtube_embed_1.YouTubeEmbed;
    }
});
}),
"[project]/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ThirdPartyScriptEmbed;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function ThirdPartyScriptEmbed({ html, height = null, width = null, children, dataNtpc = '' }) {
    (0, react_1.useEffect)(()=>{
        if (dataNtpc) {
            // performance.mark is being used as a feature use signal. While it is traditionally used for performance
            // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
            // existing API.
            performance.mark('mark_feature_usage', {
                detail: {
                    feature: `next-third-parties-${dataNtpc}`
                }
            });
        }
    }, [
        dataNtpc
    ]);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            children,
            html ? (0, jsx_runtime_1.jsx)("div", {
                style: {
                    height: height != null ? `${height}px` : 'auto',
                    width: width != null ? `${width}px` : 'auto'
                },
                "data-ntpc": dataNtpc,
                dangerouslySetInnerHTML: {
                    __html: html
                }
            }) : null
        ]
    });
}
}),
"[project]/node_modules/@next/third-parties/dist/google/google-maps-embed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GoogleMapsEmbed;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const third_party_capital_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/index.js [app-ssr] (ecmascript)");
const ThirdPartyScriptEmbed_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-ssr] (ecmascript)"));
function GoogleMapsEmbed(props) {
    const { apiKey, ...restProps } = props;
    const formattedProps = {
        ...restProps,
        key: apiKey
    };
    const { html } = (0, third_party_capital_1.GoogleMapsEmbed)(formattedProps);
    return (0, jsx_runtime_1.jsx)(ThirdPartyScriptEmbed_1.default, {
        height: formattedProps.height || null,
        width: formattedProps.width || null,
        html: html,
        dataNtpc: "GoogleMapsEmbed"
    });
}
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HeadManagerContext; //# sourceMappingURL=head-manager-context.js.map
}),
"[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-attributes-from-props.js.map
}),
"[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}),
"[project]/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    let { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
    nonce = restProps.nonce || nonce;
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps,
                    nonce
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript({
                ...props,
                nonce
            });
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}),
"[project]/node_modules/next/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@next/third-parties/dist/google/youtube-embed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = YouTubeEmbed;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const script_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/next/script.js [app-ssr] (ecmascript)"));
const third_party_capital_1 = __turbopack_context__.r("[project]/node_modules/third-party-capital/lib/cjs/index.js [app-ssr] (ecmascript)");
const ThirdPartyScriptEmbed_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-ssr] (ecmascript)"));
const scriptStrategy = {
    server: 'beforeInteractive',
    client: 'afterInteractive',
    idle: 'lazyOnload',
    worker: 'worker'
};
function YouTubeEmbed(props) {
    const { html, scripts, stylesheets } = (0, third_party_capital_1.YouTubeEmbed)(props);
    return (0, jsx_runtime_1.jsx)(ThirdPartyScriptEmbed_1.default, {
        height: props.height || null,
        width: props.width || null,
        html: html,
        dataNtpc: "YouTubeEmbed",
        children: scripts === null || scripts === void 0 ? void 0 : scripts.map((script)=>(0, jsx_runtime_1.jsx)(script_1.default, {
                src: script.url,
                strategy: scriptStrategy[script.strategy],
                stylesheets: stylesheets
            }, script.url))
    });
}
}),
"[project]/node_modules/@next/third-parties/dist/google/gtm.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendGTMEvent = void 0;
exports.GoogleTagManager = GoogleTagManager;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
// TODO: Evaluate import 'client only'
const react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const script_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/next/script.js [app-ssr] (ecmascript)"));
let currDataLayerName = 'dataLayer';
function GoogleTagManager(props) {
    const { gtmId, gtmScriptUrl, dataLayerName = 'dataLayer', auth, preview, dataLayer, nonce } = props;
    currDataLayerName = dataLayerName;
    const scriptUrl = new URL(gtmScriptUrl || 'https://www.googletagmanager.com/gtm.js');
    if (gtmId) {
        scriptUrl.searchParams.set('id', gtmId);
    }
    if (dataLayerName !== 'dataLayer') {
        scriptUrl.searchParams.set('l', dataLayerName);
    }
    if (auth) {
        scriptUrl.searchParams.set('gtm_auth', auth);
    }
    if (preview) {
        scriptUrl.searchParams.set('gtm_preview', preview);
        scriptUrl.searchParams.set('gtm_cookies_win', 'x');
    }
    (0, react_1.useEffect)(()=>{
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
            detail: {
                feature: 'next-third-parties-gtm'
            }
        });
    }, []);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${dataLayer ? `w[l].push(${JSON.stringify(dataLayer)})` : ''}
      })(window,'${dataLayerName}');`
                },
                nonce: nonce
            }),
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: scriptUrl.href,
                nonce: nonce
            })
        ]
    });
}
const sendGTMEvent = (data, dataLayerName)=>{
    // special case if we are sending events before GTM init and we have custom dataLayerName
    const dataLayer = dataLayerName || currDataLayerName;
    // define dataLayer so we can still queue up events before GTM init
    window[dataLayer] = window[dataLayer] || [];
    window[dataLayer].push(data);
};
exports.sendGTMEvent = sendGTMEvent;
}),
"[project]/node_modules/@next/third-parties/dist/google/ga.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleAnalytics = GoogleAnalytics;
exports.sendGAEvent = sendGAEvent;
const jsx_runtime_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
// TODO: Evaluate import 'client only'
const react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const script_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/next/script.js [app-ssr] (ecmascript)"));
let currDataLayerName = undefined;
function GoogleAnalytics(props) {
    const { gaId, debugMode, dataLayerName = 'dataLayer', nonce } = props;
    if (currDataLayerName === undefined) {
        currDataLayerName = dataLayerName;
    }
    (0, react_1.useEffect)(()=>{
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
            detail: {
                feature: 'next-third-parties-ga'
            }
        });
    }, []);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                    __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}' ${debugMode ? ",{ 'debug_mode': true }" : ''});`
                },
                nonce: nonce
            }),
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
                nonce: nonce
            })
        ]
    });
}
function sendGAEvent(..._args) {
    if (currDataLayerName === undefined) {
        console.warn(`@next/third-parties: GA has not been initialized`);
        return;
    }
    if (window[currDataLayerName]) {
        window[currDataLayerName].push(arguments);
    } else {
        console.warn(`@next/third-parties: GA dataLayer ${currDataLayerName} does not exist`);
    }
}
}),
"[project]/node_modules/@next/third-parties/dist/google/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendGAEvent = exports.GoogleAnalytics = exports.sendGTMEvent = exports.GoogleTagManager = exports.YouTubeEmbed = exports.GoogleMapsEmbed = void 0;
var google_maps_embed_1 = __turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/google/google-maps-embed.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleMapsEmbed", {
    enumerable: true,
    get: function() {
        return __importDefault(google_maps_embed_1).default;
    }
});
var youtube_embed_1 = __turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/google/youtube-embed.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "YouTubeEmbed", {
    enumerable: true,
    get: function() {
        return __importDefault(youtube_embed_1).default;
    }
});
var gtm_1 = __turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/google/gtm.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleTagManager", {
    enumerable: true,
    get: function() {
        return gtm_1.GoogleTagManager;
    }
});
Object.defineProperty(exports, "sendGTMEvent", {
    enumerable: true,
    get: function() {
        return gtm_1.sendGTMEvent;
    }
});
var ga_1 = __turbopack_context__.r("[project]/node_modules/@next/third-parties/dist/google/ga.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleAnalytics", {
    enumerable: true,
    get: function() {
        return ga_1.GoogleAnalytics;
    }
});
Object.defineProperty(exports, "sendGAEvent", {
    enumerable: true,
    get: function() {
        return ga_1.sendGAEvent;
    }
});
}),
];

//# sourceMappingURL=_54969bf4._.js.map