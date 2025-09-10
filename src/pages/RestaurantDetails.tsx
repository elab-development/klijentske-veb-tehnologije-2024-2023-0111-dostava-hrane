import { useParams, useNavigate } from "react-router-dom";
import { restaurants } from "../data/seed";
import DishCard from "../components/DishCard";
import type { Dish } from "../models/Dish";

export default function RestaurantDetails() {
    const { id } = useParams();
    const nav = useNavigate();
    const r = restaurants.find((x) => x.id === id);

    const handleAdd = (dish: Dish) => {
        alert(`Dodato u korpu: ${dish.name}`);
        // Ovde će kasnije ići prava logika sa CartContext
    };

    if (!r) {
        return (
            <div className="container">
                <p>Restaurant not found.</p>
            </div>
        );
    }

    return (
        <div>
            <button className="btn" onClick={() => nav(-1)}>← Back</button>
            <div className="card" style={{ marginTop: 16 }}>
                <img
                    src={r.image}
                    alt={r.name}
                    style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12 }}
                />
                <h2 style={{ margin: "8px 0" }}>{r.name}</h2>
                <div className="badge">{r.cuisine} · {r.etaMins} min · {r.rating}★</div>
            </div>

            <h3 style={{ margin: "16px 0" }}>Menu</h3>
            <div className="grid grid-3">
                {r.dishes.map((d) => (
                    <DishCard key={d.id} dish={d} onAdd={handleAdd} />
                ))}
            </div>
        </div>
    );
}
