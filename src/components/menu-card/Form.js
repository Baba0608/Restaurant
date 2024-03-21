import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContextProvider";

export const Form = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const {
    count,
    setCount,
    setCartItems,
    cartItems,
    totalAmount,
    setTotalAmount,
  } = useContext(cartContext);

  function addToCart(cartItems, item) {
    let index = inCartItems(cartItems, item);

    if (index !== false) {
      cartItems[index].count = cartItems[index].count + +quantity;

      setCartItems(cartItems);
    } else {
      setCartItems([
        ...cartItems,
        { name: item.name, cost: item.cost, count: +quantity },
      ]);
    }
  }

  function inCartItems(cartItems, item) {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].name === item.name) {
        return i;
      }
    }

    return false;
  }

  return (
    <div>
      <label htmlFor="quantity">Quantity</label>
      <input
        className="border-gray-400 border w-14 mx-2 rounded-md p-1"
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />

      <div className="flex justify-end m-2">
        <button
          className="bg-red-800 px-10 py-1 text-white font-bold rounded-2xl"
          onClick={() => {
            setCount(count + +quantity);
            setQuantity(0);
            addToCart(cartItems, item);
            setTotalAmount(totalAmount + item.cost * +quantity);
          }}
        >
          +Add
        </button>
      </div>
    </div>
  );
};
