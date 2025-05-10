import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import fruitsData from "../assets/FruitsData.json";
import Swal from "sweetalert2"; 

const Fruits = () => {
  const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cart } = useCart();
  const [clickedItem, setClickedItem] = useState(null); 

  const handleAddToCart = (fruit) => {
    addToCart(fruit);
    setClickedItem(fruit.id); // Change button color
    Swal.fire({
      title: "Added to Cart! 🛒",
      text: `${fruit.name} has been added to your cart.`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-green-700">Fresh Fruits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {fruitsData.map((fruit) => {
          const cartItem = cart.find((item) => item.id === fruit.id);
          return (
            <div key={fruit.id} className="bg-white p-4 rounded-lg shadow-lg text-center border border-gray-200">
              <img src={fruit.image} alt={fruit.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-2">{fruit.name}</h3>
              <p className="text-green-600 font-bold">${fruit.price}</p>
              
              {/* Buttons for Add/Remove/Increase/Decrease */}
              {cartItem ? (
                <div className="mt-3 flex items-center justify-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(fruit.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{cartItem.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(fruit.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(fruit.id)}
                    className="ml-2 px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all"
                  >
                    ❌
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(fruit)}
                  className={`mt-3 px-4 py-2 rounded-md shadow transition-all ${
                    clickedItem === fruit.id ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
                  } text-white`}
                >
                  Add to Cart 🛒
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fruits;
