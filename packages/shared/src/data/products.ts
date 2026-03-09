export interface ProductSEO {
    title: string;
    description: string;
    keywords: string[];
}

export interface ProductDimensions {
    weight: number; // in kg
    width: number;  // in cm
    height: number; // in cm
    depth: number;  // in cm
}

export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    price: string;
    marketplaceUrl: string;
    imageUrl: string;
    stock: number;
    seo: ProductSEO;
    dimensions: ProductDimensions;
}

export const products: Product[] = [
    {
        id: "mezcal-01",
        name: "Mezcal Ancestral Espadín",
        description: "Mezcal destilado en olla de barro siguiendo tradiciones milenarias.",
        category: "mezcales",
        price: "120.00",
        marketplaceUrl: "https://marketplace.example/mezcal-ancestral",
        imageUrl: "/products/mezcal-ancestral.png",
        stock: 24,
        seo: {
            title: "Mezcal Ancestral Espadín | Casa Yolotl",
            description: "Descubre la esencia de Oaxaca con nuestro Mezcal Ancestral destilado en barro.",
            keywords: ["mezcal", "ancestral", "espadin", "oaxaca"]
        },
        dimensions: { weight: 1.2, width: 8, height: 30, depth: 8 }
    },
    {
        id: "textil-01",
        name: "Huipil de Gala Istmeño",
        description: "Textil bordado a mano con motivos florales por maestras artesanas.",
        category: "artesanias",
        price: "450.00",
        marketplaceUrl: "https://marketplace.example/huipil-gala",
        imageUrl: "/products/huipil-gala.png",
        stock: 8,
        seo: {
            title: "Huipil de Gala Istmeño Bordado a Mano",
            description: "Elegancia y tradición en cada hilo. Huipil istmeño auténtico.",
            keywords: ["textil", "huipil", "artesania", "oaxaca"]
        },
        dimensions: { weight: 0.5, width: 60, height: 50, depth: 2 }
    },
    {
        id: "decor-01",
        name: "Jarrón de Barro Negro",
        description: "Pieza icónica de San Bartolo Coyotepec con pulido brillante.",
        category: "decoracion",
        price: "85.00",
        marketplaceUrl: "https://marketplace.example/barro-negro",
        imageUrl: "/products/barro-negro.png",
        stock: 15,
        seo: {
            title: "Jarrón de Barro Negro Calado | Decoración Oaxaqueña",
            description: "Arte en barro negro para espacios contemporáneos con alma mexicana.",
            keywords: ["barro negro", "decoracion", "oaxaca", "artesania"]
        },
        dimensions: { weight: 0.8, width: 20, height: 25, depth: 20 }
    },
    {
        id: "mezcal-02",
        name: "Mezcal Tobalá Silvestre",
        description: "Mezcal de sabor complejo elaborado con agaves silvestres de altura.",
        category: "mezcales",
        price: "180.00",
        marketplaceUrl: "https://marketplace.example/mezcal-tobala",
        imageUrl: "/products/mezcal-tobala.png",
        stock: 12,
        seo: {
            title: "Mezcal Tobalá Silvestre | Edición Limitada",
            description: "Sabor terroso y dulce. Una joya para conocedores del mezcal.",
            keywords: ["mezcal", "tobala", "silvestre", "oaxaca"]
        },
        dimensions: { weight: 1.2, width: 8, height: 28, depth: 8 }
    },
    {
        id: "textil-02",
        name: "Tapete de Teotitlán del Valle",
        description: "Lana teñida con tintes naturales como grana cochinilla y añil.",
        category: "decoracion",
        price: "320.00",
        marketplaceUrl: "https://marketplace.example/tapete-teotitlan",
        imageUrl: "/products/tapete-teotitlan.png",
        stock: 5,
        seo: {
            title: "Tapete de Lana Mixteco | Tintes Naturales",
            description: "Arte textil bajo tus pies. Tradición de Teotitlán en cada diseño.",
            keywords: ["tapete", "lana", "teotitlan", "textil"]
        },
        dimensions: { weight: 2.5, width: 120, height: 180, depth: 1 }
    },
    {
        id: "artesania-02",
        name: "Alebrije Jaguar Multicolor",
        description: "Talla en madera de copal con patrones zapotecas detallados.",
        category: "artesanias",
        price: "550.00",
        marketplaceUrl: "https://marketplace.example/alebrije-jaguar",
        imageUrl: "/products/alebrije-jaguar.png",
        stock: 3,
        seo: {
            title: "Alebrije Jaguar Tallado en Copal | Arte Zapoteca",
            description: "Guardián espiritual tallado por manos expertas en Arrazola.",
            keywords: ["alebrije", "jaguar", "artesania", "oaxaca"]
        },
        dimensions: { weight: 1.5, width: 30, height: 20, depth: 40 }
    },
];
