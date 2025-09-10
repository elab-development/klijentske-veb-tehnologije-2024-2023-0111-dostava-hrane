import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const { items } = useCart();
    const count = items.reduce((s, i) => s + i.qty, 0);
    const { user, logout } = useAuth();
    const loc = useLocation();
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
                <div className="links">
                    {user ? (
                        <>
                            <span className="badge">Hi, {user.fullName.split(" ")[0]}</span>
                            <button className="btn" onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink to="/login" state={{ from: loc.pathname }}>Login</NavLink>
                    )}
                </div>
            </div>
        </header>
    );
}
