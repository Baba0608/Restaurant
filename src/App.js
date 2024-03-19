import ReactDOM from "react-dom/client";

import { Header } from "./components/layout/Header";
import { CardContainer } from "./components/menu-card/CardContainer";
import { Cart } from "./components/cart/Cart";
import { useState } from "react";

// className="bg-[url('./assets/1.jpg')] bg-gray-400/80"
const App = () => {
  const [openCart, setOpenCart] = useState(false);

  function cartHandler() {
    setOpenCart(!openCart);
  }

  return (
    <div className="bg-[url('./assets/1.jpg')]">
      <Header cartHandler={cartHandler} />
      <CardContainer />
      <Cart openCart={openCart} cartHandler={cartHandler} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
