import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove item completely from cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  // Increase quantity
  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  // Decrease quantity (removes item if quantity reaches 0)
    const decreaseQuantity = (itemId) => {
      setCart((prevCart) =>
        prevCart
          .map((cartItem) =>
            cartItem.id === itemId && cartItem.quantity >1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          )
          // .filter((cartItem) => cartItem.quantity > 1) // Remove item if quantity is 0
      );
    };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
