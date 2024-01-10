// src/components/Cart.js
import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Keranjang</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang Anda kosong.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item)}>Hapus</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
