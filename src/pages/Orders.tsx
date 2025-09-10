import { useAuth } from "../context/AuthContext";
import { OrderManager } from "../services/OrderManager";

export default function Orders() {
    const { user } = useAuth();
    const manager = new OrderManager();

    if (!user) return <p>Please login to see your orders.</p>;

    const orders = manager.getOrders(user.id);

    return (
        <div>
            <h2>Your Orders</h2>
            {orders.length === 0 ? (
                <p>No orders yet.</p>
            ) : (
                <div style={{ display: "grid", gap: 12 }}>
                    {orders.map((o) => (
                        <div key={o.id} className="card">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <strong>Order #{o.id.slice(0, 8)}</strong>
                                <span className="badge">{o.status}</span>
                            </div>
                            <small className="badge">
                                {new Date(o.createdAt).toLocaleString()}
                            </small>
                            <ul>
                                {o.items.map((it) => (
                                    <li key={it.dish.id}>
                                        {it.qty}× {it.dish.name} — €{" "}
                                        {(it.dish.price * it.qty).toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                            <strong>Total: € {o.total.toFixed(2)}</strong>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
