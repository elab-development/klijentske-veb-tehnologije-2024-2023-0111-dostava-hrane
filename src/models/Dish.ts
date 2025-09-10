export interface Dish {
    id: string;
    restaurantId: string;
    name: string;
    price: number;       // EUR
    image: string;
    description: string;
    tags: string[];
    rating: number;      // 0–5
}
