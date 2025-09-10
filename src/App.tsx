import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Food Delivery Platform</h1>
        <div className="card" style={{ marginTop: 12 }}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
