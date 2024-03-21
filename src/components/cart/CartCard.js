import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContextProvider";

export const CartCard = ({ item }) => {
  const { name, cost, count } = item;

  const [itemCount, setItemCount] = useState(count);
  const {
    cartItems,
    setCartItems,
    count: totalCount,
    setCount: setTotalCount,
    totalAmount,
    setTotalAmount,
  } = useContext(cartContext);
  return (
    <div className="flex justify-between items-center border-b border-red-400">
      <div className="mb-2">
        <div>{name}</div>

        <div className="flex w-28 justify-between">
          <p className="text-orange-400">{cost} /-</p>
          <p className="border border-gray-400 rounded-md px-1">
            X {itemCount}
          </p>
        </div>
      </div>

      <div>
        <button
          className="mx-4 px-4 border border-red-800 text-red-800 rounded-lg text-lg"
          disabled={itemCount >= 1 ? false : true}
          onClick={() => {
            setItemCount(itemCount - 1);
            setTotalCount(totalCount - 1);
            setTotalAmount(totalAmount - cost);
            cartItems.forEach((cartItem) => {
              if (cartItem.name === item.name)
                cartItem.count = cartItem.count - 1;
            });
            setCartItems(cartItems);
          }}
        >
          -
        </button>
        <button
          className="mx-4 px-4 bg-red-800 border border-red-800 text-white rounded-lg text-lg"
          onClick={() => {
            setItemCount(itemCount + 1);
            setTotalCount(totalCount + 1);
            setTotalAmount(totalAmount + cost);
            cartItems.forEach((cartItem) => {
              if (cartItem.name === item.name)
                cartItem.count = cartItem.count + 1;
            });
            setCartItems(cartItems);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
