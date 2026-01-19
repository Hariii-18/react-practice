import React, { useState } from "react";
import './update-array'

function Cart() {
    const [items, setItems] = useState([
        { id: 1001, name: "laptop", price: 51000, qty: 1 },
        { id: 2001, name: "Mobile", price: 20000, qty: 1 },
        { id: 3001, name: "Mouse", price: 500, qty: 1 },
        { id: 4001, name: "Printer", price: 20000, qty: 1 },
    ]);

    const increaseqty = (id) => {
        const increaseItems = items.map((items) =>
            items.id === id
                ? { ...items, qty: items.qty + 1 }
                : items
        );
        setItems(increaseItems);
    };

    const decreaseqty = (id) => {
        const decreaseItems = items.map((items) =>
            items.id === id
                ? { ...items, qty: items.qty - 1 }
                : items
        );
        setItems(decreaseItems);
    };

    return (
        <div className="container">
            <p>Example 2:</p>
            <p>Incresing quantity Using Update Array: </p>
            {items.map((items) => (
                <div key={items.id}>
                    <p>Name: {items.name}</p>
                    <p>price: {items.price}</p>
                    <p>quantity: {items.qty}</p>
                    <button className="btn" onClick={() => increaseqty(items.id)}>Increse Quantity +</button>
                    <button className="btn" onClick={() => decreaseqty(items.id)}>decrese Quantity +</button>
                    <br />

                </div>
            ))}
            <hr />
        </div>
    );
}

export default Cart;