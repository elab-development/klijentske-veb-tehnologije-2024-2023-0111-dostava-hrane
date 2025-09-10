import type { Order } from "./Order";
import type { OrderItem } from "./Order";

export interface IOrderManager {
    getOrders(userId: string): Order[];
    placeOrder(userId: string, items: OrderItem[]): Order;
    cancelOrder(orderId: string): void;
}
