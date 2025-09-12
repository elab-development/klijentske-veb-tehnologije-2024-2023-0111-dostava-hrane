import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { FavoritesManager } from "../services/FavoritesManager";

interface FavoritesState {
    ids: string[];
    toggle: (id: string) => void;
    has: (id: string) => boolean;
    clear: () => void;
}

const FavoritesContext = createContext<FavoritesState | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const manager = useMemo(() => new FavoritesManager(), []);
    const [ids, setIds] = useState<string[]>([]);

    useEffect(() => { setIds(manager.getAll()); }, [manager]);

    const toggle = (id: string) => {
        manager.toggle(id);
        setIds(manager.getAll());
    };
    const has = (id: string) => manager.has(id);
    const clear = () => { localStorage.removeItem("fav_restaurants_v1"); setIds([]); };

    return (
        <FavoritesContext.Provider value={{ ids, toggle, has, clear }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const ctx = useContext(FavoritesContext);
    if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
    return ctx;
};
