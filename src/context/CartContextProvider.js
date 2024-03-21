import React, { useState } from "react";

export const cartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  return (
    <cartContext.Provider
      value={{
        count,
        setCount,
        cartItems,
        setCartItems,
        totalAmount,
        setTotalAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
