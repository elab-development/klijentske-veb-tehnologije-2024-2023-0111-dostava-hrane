import { useFavorites } from "../context/FavoritesContext";
import { restaurants } from "../data/seed";
import RestaurantCard from "../components/RestaurantCard";
import Pagination from "../components/Pagination";
import { useMemo, useState, useEffect } from "react";

export default function Favorites() {
    const { ids } = useFavorites();
    const favRestaurants = restaurants.filter(r => ids.includes(r.id));

    const [page, setPage] = useState(1);
    const pageSize = 6;

    const { total, paged } = useMemo(() => {
        const total = favRestaurants.length;
        const start = (page - 1) * pageSize;
        return { total, paged: favRestaurants.slice(start, start + pageSize) };
    }, [favRestaurants, page]);
    useEffect(() => {
        setPage(1);
    }, [ids]);

    if (favRestaurants.length === 0) return <p>No favorites yet.</p>;

    return (
        <div>
            <h2>Favorites</h2>
            <div className="grid grid-3" style={{ marginTop: 12 }}>
                {paged.map(r => <RestaurantCard key={r.id} r={r} />)}
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
