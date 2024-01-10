// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { Theme, Button } from "react-daisyui";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    // ... (tambahkan produk lainnya)
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(
      (cartItem) => cartItem.id !== product.id
    );
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} />
      <main>
        <div className="hero-section">
          {/* ... (hero section content) */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
          {/* ... (more content) */}
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
    </div>
  );
}

export default App;
