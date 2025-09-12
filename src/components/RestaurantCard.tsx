import { Link } from "react-router-dom";
import type { Restaurant } from "../models/Restaurant";
import { useFavorites } from "../context/FavoritesContext";

export default function RestaurantCard({ r }: { r: Restaurant }) {
    const { has, toggle } = useFavorites();
    const liked = has(r.id);

    return (
        <Link to={`/restaurants/${r.id}`} className="card" style={{ display: "block", position: "relative" }}>
            <button
                aria-label="toggle favorite"
                onClick={(e) => { e.preventDefault(); toggle(r.id); }}
                style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    border: "none",
                    background: liked ? "#ef4444" : "#1f2937",
                    color: "white",
                    borderRadius: 999,
                    padding: "6px 10px",
                    cursor: "pointer"
                }}
            >
                {liked ? "♥" : "♡"}
            </button>

            <img
                src={r.image}
                alt={r.name}
                style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12 }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <div>
                    <h3 style={{ margin: "6px 0" }}>{r.name}</h3>
                    <div className="badge">{r.cuisine} · {r.etaMins} min</div>
                </div>
                <div className="badge">★ {r.rating}</div>
            </div>
        </Link>
    );
}
