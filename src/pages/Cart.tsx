import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { items, remove, updateQty, total, clear } = useCart();

    return (
        <div>
            <h2>Your Cart</h2>
            <div className="card">
                {items.length === 0 ? (
                    <p>Cart is empty. <Link to="/restaurants">Find meals →</Link></p>
                ) : (
                    <>
                        {items.map(i => (
                            <div key={i.dish.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", alignItems: "center" }}>
                                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                    <img src={i.dish.image} style={{ width: 64, height: 48, objectFit: "cover", borderRadius: 8 }} />
                                    <div>
                                        <strong>{i.dish.name}</strong>
                                        <div className="badge">€ {i.dish.price.toFixed(2)}</div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                    <input
                                        type="number"
                                        min={1}
                                        className="input"
                                        value={i.qty}
                                        onChange={(e) => updateQty(i.dish.id, Number(e.target.value))}
                                        style={{ width: 80 }}
                                    />
                                    <button className="btn" onClick={() => remove(i.dish.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                        <hr className="hr" />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <strong>Total: € {total.toFixed(2)}</strong>
                            <div style={{ display: "flex", gap: 8 }}>
                                <button className="btn" onClick={clear}>Clear</button>
                                <Link to="/checkout" className="btn">Checkout</Link>

                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

