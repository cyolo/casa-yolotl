export interface Product {
    id: string;
    category: string;
    price: string;
    marketplaceUrl: string;
    imageUrl: string;
}

export const products: Product[] = [
    {
        id: "mezcal-01",
        category: "mezcales",
        price: "120.00",
        marketplaceUrl: "https://marketplace.example/mezcal-ancestral",
        imageUrl: "/products/mezcal-ancestral.png",
    },
    {
        id: "textil-01",
        category: "artesanias",
        price: "450.00",
        marketplaceUrl: "https://marketplace.example/huipil-gala",
        imageUrl: "/products/huipil-gala.png",
    },
    {
        id: "decor-01",
        category: "decoracion",
        price: "85.00",
        marketplaceUrl: "https://marketplace.example/barro-negro",
        imageUrl: "/products/barro-negro.png",
    },
    {
        id: "mezcal-02",
        category: "mezcales",
        price: "180.00",
        marketplaceUrl: "https://marketplace.example/mezcal-tobala",
        imageUrl: "/products/mezcal-tobala.png",
    },
    {
        id: "textil-02",
        category: "decoracion",
        price: "320.00",
        marketplaceUrl: "https://marketplace.example/tapete-teotitlan",
        imageUrl: "/products/tapete-teotitlan.png",
    },
    {
        id: "artesania-02",
        category: "artesanias",
        price: "550.00",
        marketplaceUrl: "https://marketplace.example/alebrije-jaguar",
        imageUrl: "/products/alebrije-jaguar.png",
    },
];
