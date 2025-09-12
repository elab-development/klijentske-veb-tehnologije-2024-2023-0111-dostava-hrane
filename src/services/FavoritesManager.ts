import type { IFavoritesManager } from "../models/IFavoritesManager";

export class FavoritesManager implements IFavoritesManager {
    private key = "fav_restaurants_v1";

    private read(): string[] {
        const raw = localStorage.getItem(this.key);
        return raw ? JSON.parse(raw) : [];
    }
    private write(list: string[]) {
        localStorage.setItem(this.key, JSON.stringify(list));
    }

    getAll(): string[] { return this.read(); }

    add(id: string): void {
        const set = new Set(this.read());
        set.add(id);
        this.write([...set]);
    }

    remove(id: string): void {
        const set = new Set(this.read());
        set.delete(id);
        this.write([...set]);
    }

    toggle(id: string): void {
        const set = new Set(this.read());
        set.has(id) ? set.delete(id) : set.add(id);
        this.write([...set]);
    }

    has(id: string): boolean {
        return new Set(this.read()).has(id);
    }
}
