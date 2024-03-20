import React, { useState } from "react";

export const cartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <cartContext.Provider value={{ count, setCount }}>
      {children}
    </cartContext.Provider>
  );
};
