import { Link } from "react-router-dom";
import type { Restaurant } from "../models/Restaurant";

export default function RestaurantCard({ r }: { r: Restaurant }) {
    return (
        <Link to={`/restaurants/${r.id}`} className="card" style={{ display: "block" }}>
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
