import React from "react";
import ReactDOM from "react-dom";

const CartOverlay = ({ openCart, cartHandler }) => {
  return (
    <div
      id="overlay-outer"
      className={
        openCart
          ? "fixed w-[100%] h-[100%] bg-gray-700/80 top-0 left-0"
          : "hidden"
      }
    >
      <div className="flex justify-center mt-24 cursor-pointer" id="overlay">
        <div className="bg-white rounded-lg overflow-hidden w-[500px] p-4 text-lg">
          <div>Sushi</div>
          <div className="flex justify-between font-bold text-2xl">
            <div>Total Amount</div>
            <div>250 /-</div>
          </div>
          <div className="flex justify-end">
            <div className="flex">
              <button
                className="mx-4 border-red-800 border-2 text-red-800 px-6 py-1 my-1 rounded-3xl hover:bg-red-300"
                onClick={() => {
                  cartHandler();
                }}
              >
                Close
              </button>
              <button className="bg-red-800 px-6 py-1 my-1 rounded-3xl text-white">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Cart = ({ openCart, cartHandler }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <CartOverlay openCart={openCart} cartHandler={cartHandler} />,
        document.getElementById("model-overlay")
      )}
    </React.Fragment>
  );
};
