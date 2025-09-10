import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Food Delivery Platform</h1>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default App;
