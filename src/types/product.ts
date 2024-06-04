export interface ProductReview {
    custom: string;
    review: string;
    score: number;
};

export interface ProductSale {
    weekEnding: Date;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
};

export interface Product {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: ProductReview[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: ProductSale[];
};