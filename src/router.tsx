import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import RestaurantDetails from "./pages/RestaurantDetails";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="restaurants/:id" element={<RestaurantDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
        </Route>
    )
);