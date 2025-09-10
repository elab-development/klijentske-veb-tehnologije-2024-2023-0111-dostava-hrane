import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="nav">
            <div className="nav-inner">
                <Link to="/" className="brand">🍕 Foodify</Link>
                <nav className="links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/restaurants">Restaurants</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                </nav>
            </div>
        </header>
    );
}
