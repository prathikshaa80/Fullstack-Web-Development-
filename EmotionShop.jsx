import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Midnight Hoodie",
    price: 1999,
    mood: "Cozy",
    color: "#6366f1"
  },
  {
    id: 2,
    name: "Minimal Watch",
    price: 3499,
    mood: "Elegant",
    color: "#14b8a6"
  },
  {
    id: 3,
    name: "Street Sneakers",
    price: 4299,
    mood: "Bold",
    color: "#f97316"
  }
];

export default function EmotionShop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .shop-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #020617, #0f172a);
          color: white;
          padding: 40px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cart-indicator {
          padding: 10px 18px;
          border-radius: 30px;
          background: rgba(255,255,255,0.15);
          font-size: 14px;
        }

        .shelf {
          display: flex;
          gap: 25px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .product {
          flex: 1;
          min-width: 260px;
          padding: 25px;
          border-radius: 24px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          transition: transform 0.3s;
        }

        .product:hover {
          transform: translateY(-10px);
        }

        .tag {
          font-size: 12px;
          padding: 6px 14px;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 15px;
        }

        .price {
          margin-top: 10px;
          font-size: 18px;
        }

        button {
          margin-top: 20px;
          padding: 12px;
          width: 100%;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          color: white;
          cursor: pointer;
        }

        .cart {
          margin-top: 50px;
          padding: 25px;
          border-radius: 24px;
          background: rgba(0,0,0,0.4);
        }

        .cart-item {
          font-size: 14px;
          margin-bottom: 8px;
        }
      `}</style>

      <div className="shop-bg">
        <div className="header">
          <h2>🛍️ Emotion Shop</h2>
          <div className="cart-indicator">
            🧺 Cart Items: {cart.length}
          </div>
        </div>

        <div className="shelf">
          {products.map(p => (
            <div key={p.id} className="product">
              <div
                className="tag"
                style={{ background: p.color }}
              >
                {p.mood}
              </div>
              <h3>{p.name}</h3>
              <div className="price">₹{p.price}</div>
              <button onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="cart">
            <h3>🧺 Your Cart</h3>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                {item.name} — ₹{item.price}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
