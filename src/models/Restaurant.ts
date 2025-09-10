import type { Dish } from "./Dish";

export interface Restaurant {
    id: string;
    name: string;
    cuisine: string;
    etaMins: number;
    rating: number;
    image: string;
    dishes: Dish[];
}
