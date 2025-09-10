import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { OrderManager } from "../services/OrderManager";

export default function Checkout() {
    const { user } = useAuth();
    const { items, total, clear } = useCart();
    const nav = useNavigate();
    const manager = new OrderManager();

    if (!user) {
        return <Navigate to="/login" state={{ from: "/checkout" }} replace />;
    }

    const placeOrder = () => {
        const order = manager.placeOrder(user.id, items);
        clear();
        nav(`/orders?success=${order.id}`);
    };

    return (
        <div>
            <h2>Checkout</h2>
            <p>Items: {items.length} · Total: <strong>€ {total.toFixed(2)}</strong></p>
            <Button label="Place order" onClick={placeOrder} />
        </div>
    );
}