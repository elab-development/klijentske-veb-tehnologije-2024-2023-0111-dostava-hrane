Food Delivery Platform (React + TypeScript)

Aplikacija za onlajn dostavu hrane. Korisnici mogu da pretražuju restorane, pregledaju meni, dodaju jela u korpu, prijave se (login), naprave porudžbinu (checkout) i vide istoriju porudžbina.

⚙️ Pokretanje projekta (lokalno)
# 1) Instalacija dependencija
npm install

# 2) Pokretanje dev servera
npm run dev
# Otvoriti prikazanu adresu (npr. http://localhost:5173)


Zahtevan je Node.js 18+.

📦 Tehnologije

React 18 + TypeScript

React Router DOM za rute

Context API (Auth, Cart, Favorites)

CSS (ručno stilizovanje u src/styles.css)

localStorage (persist stanja: auth, cart, favorites, orders)

🧭 Stranice (rute)

/ – Home

/restaurants – lista restorana (pretraga + filter + paginacija)

/restaurants/:id – Restaurant Details (meni jela + dodavanje u korpu)

/cart – Cart (ažuriranje količine, uklanjanje, brisanje, total)

/checkout – Checkout (guard: zahteva login)

/orders – Orders (istorija porudžbina)

/login – Login (email + ime)

/favorites – Favorites (omiljeni restorani + paginacija)

🔁 Funkcionalnosti

Pretraga i filter na listi restorana

Paginacija (Restaurants, Favorites)

Detalji restorana sa jelima

Korpa: dodavanje/uklanjanje, menjanje količine, total, persist u localStorage

Login/Logout (persist u localStorage)

Guardovani Checkout (preusmerenje na login ako nije ulogovan)

Kreiranje porudžbine i istorija porudžbina (localStorage)

Favorites (toggle ❤️ na karticama restorana, broj u navbaru, posebna stranica)

Funkcionalnosti su implementirane u TS/TSX – nisu preuzete iz skripte.

🧱 Reusable komponente

Navbar – navigacioni meni (prikazuje broj artikala u korpi i broj favorita; login/logout)

Button – generičko dugme

FormField – input polje sa labelom

RestaurantCard – kartica restorana (koristi se u listama)

DishCard – kartica jela

Pagination – reusable paginacija

🧠 Hook-ovi

Korišćeni su: useState, useEffect, useMemo, useContext, useLocation, useNavigate, useParams.
Konteksti: AuthContext, CartContext, FavoritesContext.

🧩 Klase i interfejsi
Klase (aktivno korišćene)

OrderManager – čuvanje i dohvat porudžbina (localStorage)

FavoritesManager – čuvanje omiljenih restorana (localStorage)

Interfejsi sa metodama (aktivno korišćeni)

IOrderManager – getOrders, placeOrder, cancelOrder

IFavoritesManager – getAll, add, remove, toggle, has

Modeli podataka

Dish, Restaurant, User, Order (+ OrderItem)

🗂️ Struktura projekta
src/
  components/        # Reusable komponente (Navbar, Button, FormField, RestaurantCard, DishCard, Pagination)
  context/           # AuthContext, CartContext, FavoritesContext
  data/              # seed podaci (restorani i jela)
  models/            # TS interfejsi (Dish, Restaurant, User, Order, IOrderManager, IFavoritesManager)
  pages/             # Stranice (Home, Restaurants, RestaurantDetails, Cart, Checkout, Orders, Login, Contact, Favorites)
  services/          # Klase (OrderManager, FavoritesManager)
  App.tsx            # Layout i provider-i
  main.tsx           # Ulazna tačka aplikacije (RouterProvider)
  router.tsx         # Definicija ruta
  styles.css         # Globalni stilovi

💾 Persistencija podataka

Auth: u localStorage pod ključem auth_user_v1

Cart: u localStorage pod ključem cart_v1

Orders: u localStorage pod ključem orders_v1

Favorites: u localStorage pod ključem fav_restaurants_v1

Podaci su lokalni za browser; obrišite localStorage da biste resetovali stanje.

✅ Usklađenost sa zahtevima (II & III)

5+ stranica – ima ih 8+

3+ reusable komponente – Navbar, Button, FormField, RestaurantCard, DishCard, Pagination

7+ funkcionalnosti – pretraga/filter, paginacija, korpa (CRUD + total + persist), auth (persist), guardovan checkout, orders istorija, favorites

2 klase + 2 interfejsa sa metodama – OrderManager + IOrderManager; FavoritesManager + IFavoritesManager

Rute (react-router-dom) – implementirane

Struktura (models/components) – ispoštovana

Paginacija – implementirana (Restaurants, Favorites)

Filteri – implementirani (Restaurants)

Git/GitHub Classroom – repo i commitovi

README.md – ovaj dokument

🧪 Skripte
npm run dev       # razvojni server
npm run build     # produkcioni build (Vite)
npm run preview   # pregled produkcionog builda

👨‍💻 Autori

Student: Vukašin Sandić 2023/0111

Predmet: Klijentske veb tehnologije
