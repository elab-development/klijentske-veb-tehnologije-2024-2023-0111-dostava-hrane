import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Navigate } from "react-router-dom";
import Button from "../components/Button";

export default function Checkout() {
    const { user } = useAuth();
    const { items, total, clear } = useCart();


    if (!user) {
        return <Navigate to="/login" state={{ from: "/checkout" }} replace />;
    }

    const placeOrder = () => {
        alert(`(Demo) Order placed! Items: ${items.length}, Total: € ${total.toFixed(2)}`);
        clear();

    };

    return (
        <div>
            <h2>Checkout</h2>
            <p>Items: {items.length} · Total: <strong>€ {total.toFixed(2)}</strong></p>
            <Button label="Place order" onClick={placeOrder} />
        </div>
    );
}
