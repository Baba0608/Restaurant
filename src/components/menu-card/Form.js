import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContextProvider";

export const Form = () => {
  const [quantity, setQuantity] = useState(0);

  const { count, setCount } = useContext(cartContext);
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
          }}
        >
          +Add
        </button>
      </div>
    </div>
  );
};
