import type { Restaurant } from "../models/Restaurant";
import type { Dish } from "../models/Dish";

const mkDish = (
    rId: string,
    name: string,
    price: number,
    tags: string[],
    description: string,
    rating = 4.5
): Dish => ({
    id: crypto.randomUUID(),
    restaurantId: rId,
    name,
    price,
    tags,
    description,
    image: `https://picsum.photos/seed/${encodeURIComponent(name)}/400/260`,
    rating
});

const r1 = crypto.randomUUID();
const r2 = crypto.randomUUID();
const r3 = crypto.randomUUID();

export const restaurants: Restaurant[] = [
    {
        id: r1,
        name: "Pasta Bella",
        cuisine: "Italian",
        etaMins: 30,
        rating: 4.6,
        image: "https://picsum.photos/seed/pasta/800/360",
        dishes: [
            mkDish(r1, "Spaghetti Carbonara", 7.9, ["pasta", "popular"], "Creamy egg sauce, pancetta, pecorino."),
            mkDish(r1, "Margherita Pizza", 8.5, ["pizza", "veg"], "Tomato, mozzarella, basil.", 4.2),
            mkDish(r1, "Lasagna", 9.9, ["pasta"], "Rich beef ragu, béchamel.")
        ]
    },
    {
        id: r2,
        name: "Sushi Koi",
        cuisine: "Japanese",
        etaMins: 45,
        rating: 4.8,
        image: "https://picsum.photos/seed/sushi/800/360",
        dishes: [
            mkDish(r2, "Salmon Nigiri (6pc)", 10.9, ["sushi", "fish"], "Fresh salmon over seasoned rice."),
            mkDish(r2, "California Roll", 6.9, ["roll", "popular"], "Crab, avocado, cucumber."),
            mkDish(r2, "Miso Soup", 3.2, ["soup", "veg"], "Classic miso with tofu and seaweed.")
        ]
    },
    {
        id: r3,
        name: "Balkan Grill",
        cuisine: "Serbian",
        etaMins: 25,
        rating: 4.4,
        image: "https://picsum.photos/seed/grill/800/360",
        dishes: [
            mkDish(r3, "Ćevapi (10kom)", 7.5, ["grill", "popular"], "Served with lepinja and luk."),
            mkDish(r3, "Pljeskavica", 6.9, ["grill"], "Juicy patty, kaymak optional."),
            mkDish(r3, "Šopska salata", 3.5, ["salad", "veg"], "Tomato, cucumber, pepper, sir.")
        ]
    }
];
