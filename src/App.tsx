import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider> {/* WRAP CELE APLIKACIJE */}
        <Navbar />
        <main className="container">
          <h1>Food Delivery Platform</h1>
          <div className="card" style={{ marginTop: 12 }}>
            <Outlet />
          </div>
        </main>
      </CartProvider>
    </AuthProvider>
  );
}
