import type { Dish } from "../models/Dish";
import Button from "./Button";

export default function DishCard({ dish, onAdd }: { dish: Dish; onAdd: (d: Dish) => void }) {
    return (
        <div className="card">
            <img
                src={dish.image}
                alt={dish.name}
                style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 12 }}
            />
            <h3 style={{ margin: "8px 0" }}>{dish.name}</h3>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span className="badge">€ {dish.price.toFixed(2)}</span>
                <span className="badge">★ {dish.rating}</span>
            </div>
            <p style={{ color: "var(--muted)" }}>{dish.description}</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button label="Add" onClick={() => onAdd(dish)} />
            </div>
        </div>
    );
}
