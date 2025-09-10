import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Dish } from "../models/Dish";

export interface CartItem { dish: Dish; qty: number; }

interface CartState {
    items: CartItem[];
    add: (dish: Dish) => void;
    remove: (dishId: string) => void;
    updateQty: (dishId: string, qty: number) => void;
    clear: () => void;
    total: number;
}

const CartContext = createContext<CartState | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    // učitaj iz LS
    useEffect(() => {
        const raw = localStorage.getItem("cart_v1");
        if (raw) setItems(JSON.parse(raw));
    }, []);

    // snimi u LS kad se menja
    useEffect(() => {
        localStorage.setItem("cart_v1", JSON.stringify(items));
    }, [items]);

    const add = (dish: Dish) => {
        setItems(prev => {
            const ex = prev.find(i => i.dish.id === dish.id);
            if (ex) return prev.map(i => i.dish.id === dish.id ? { ...i, qty: i.qty + 1 } : i);
            return [...prev, { dish, qty: 1 }];
        });
    };

    const remove = (dishId: string) => setItems(prev => prev.filter(i => i.dish.id !== dishId));
    const updateQty = (dishId: string, qty: number) =>
        setItems(prev => prev.map(i => i.dish.id === dishId ? { ...i, qty: Math.max(1, qty) } : i));
    const clear = () => setItems([]);

    const total = useMemo(() => items.reduce((s, i) => s + i.qty * i.dish.price, 0), [items]);

    return (
        <CartContext.Provider value={{ items, add, remove, updateQty, clear, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
};
