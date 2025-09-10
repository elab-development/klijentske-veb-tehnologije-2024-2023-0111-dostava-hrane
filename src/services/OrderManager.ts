import type { Order, OrderItem } from "../models/Order";
import type { IOrderManager } from "../models/IOrderManager";

export class OrderManager implements IOrderManager {
    private storageKey = "orders_v1";
    private read(): Order[] {
        const raw = localStorage.getItem(this.storageKey);
        return raw ? (JSON.parse(raw) as Order[]) : [];
    }
    private write(orders: Order[]) {
        localStorage.setItem(this.storageKey, JSON.stringify(orders));
    }
    getOrders(userId: string): Order[] {
        return this.read().filter((o) => o.userId === userId);
    }
    placeOrder(userId: string, items: OrderItem[]): Order {
        const total = items.reduce((s, i) => s + i.qty * i.dish.price, 0);
        const order: Order = {
            id: crypto.randomUUID(),
            userId,
            items,
            total: Math.round(total * 100) / 100,
            createdAt: new Date().toISOString(),
            status: "PLACED",
        };
        const all = this.read();
        all.unshift(order);
        this.write(all);
        return order;
    }
    cancelOrder(orderId: string): void {
        const all = this.read();
        const idx = all.findIndex((o) => o.id === orderId);
        if (idx !== -1) {
            all[idx].status = "CANCELLED";
            this.write(all);
        }
    }
}
