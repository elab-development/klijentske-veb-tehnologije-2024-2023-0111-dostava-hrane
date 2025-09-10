import type { Dish } from "./Dish";

export interface OrderItem { dish: Dish; qty: number; }

export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    total: number;
    createdAt: string; // ISO
    status: "PLACED" | "CANCELLED" | "DELIVERED";
}
