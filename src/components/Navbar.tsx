import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { items } = useCart();
    const count = items.reduce((s, i) => s + i.qty, 0);
    return (
        <header className="nav">
            <div className="nav-inner">
                <Link to="/" className="brand">🍕 Foodify</Link>
                <nav className="links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/restaurants">Restaurants</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/cart">Cart ({count})</NavLink>
                </nav>
            </div>
        </header>
    );
}
