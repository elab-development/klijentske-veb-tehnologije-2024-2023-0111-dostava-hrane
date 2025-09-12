export interface IFavoritesManager {
    getAll(): string[];
    add(id: string): void;
    remove(id: string): void;
    toggle(id: string): void;
    has(id: string): boolean;
}
