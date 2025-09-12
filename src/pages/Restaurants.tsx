import { useEffect, useMemo, useState } from "react";
import { restaurants as initial } from "../data/seed";
import RestaurantCard from "../components/RestaurantCard";
import Pagination from "../components/Pagination";

export default function Restaurants() {
    const [q, setQ] = useState("");
    const [filter, setFilter] = useState("all");

    const [page, setPage] = useState(1);
    const pageSize = 6;

    const cuisines = useMemo(
        () => Array.from(new Set(initial.map((r) => r.cuisine.toLowerCase()))),
        []
    );

    const filtered = useMemo(() => {
        return initial.filter((r) => {
            const okQ =
                r.name.toLowerCase().includes(q.toLowerCase()) ||
                r.cuisine.toLowerCase().includes(q.toLowerCase());
            const okF = filter === "all" ? true : r.cuisine.toLowerCase() === filter;
            return okQ && okF;
        });
    }, [q, filter]);

    useEffect(() => {
        setPage(1);
    }, [q, filter]);

    const { total, paged } = useMemo(() => {
        const total = filtered.length;
        const start = (page - 1) * pageSize;
        return { total, paged: filtered.slice(start, start + pageSize) };
    }, [filtered, page]);

    return (
        <div>
            <h2>Restaurants</h2>

            <div style={{ display: "flex", gap: 12, margin: "12px 0", alignItems: "center" }}>
                <input
                    className="input"
                    placeholder="Search restaurants or cuisines..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    style={{ maxWidth: 360 }}
                />
                <select
                    className="input"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={{ maxWidth: 220 }}
                >
                    <option value="all">All cuisines</option>
                    {cuisines.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-3">
                {paged.map((r) => (
                    <RestaurantCard key={r.id} r={r} />
                ))}
            </div>

            <Pagination
                total={total}
                pageSize={pageSize}
                currentPage={page}
                onPageChange={setPage}
                style={{ marginTop: 16 }}
            />
        </div>
    );
}
