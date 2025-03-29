import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-orange-700">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-5">Your cart is empty 🛒</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg text-center border border-gray-200">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-green-600 font-bold">${item.price} x {item.quantity}</p>

              {/* Quantity Controls */}
              <div className="mt-3 flex items-center justify-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all"
              >
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
