import { restaurants } from "../data/seed";

export default function Restaurants() {
    return (
        <div>
            <h2>Restaurants page</h2>
            <ul>
                {restaurants.map(r => (
                    <li key={r.id}>
                        <strong>{r.name}</strong> — {r.cuisine} · {r.etaMins} min · ★ {r.rating}
                    </li>
                ))}
            </ul>
        </div>
    );
}
