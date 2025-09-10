import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider> {/* WRAP CELE APLIKACIJE */}
      <Navbar />
      <main className="container">
        <h1>Food Delivery Platform</h1>
        <div className="card" style={{ marginTop: 12 }}>
          <Outlet />
        </div>
      </main>
    </CartProvider>
  );
}
