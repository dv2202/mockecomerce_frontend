import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotalAmount((prevAmount) => prevAmount + product.price);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalAmount(0);
  };

  const removeFromCart = (productId) => {
    debugger
    const product = cartItems.find((item) => item._id === productId);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    setTotalAmount((prevAmount) => prevAmount - product.price);
  }

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addToCart, clearCart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
