import { FaShoppingCart } from "react-icons/fa";

export const Header = ({ cartHandler }) => {
  return (
    <>
      <div className="bg-red-900 sm:px-24 px-10 flex justify-between h-20 items-center text-lg ">
        <div className="text-3xl text-white">ReactMeals</div>
        <div className="bg-red-950 px-4 py-2 rounded-2xl text-white flex items-center">
          <div className="pl-5">
            <FaShoppingCart />
          </div>
          <div
            className="px-3 hover:underline hover:cursor-pointer"
            onClick={() => {
              cartHandler();
            }}
          >
            Your Cart
          </div>
          <div className="bg-red-900 mr-5 px-4 rounded-2xl">0</div>
        </div>
      </div>

      <div className="w-[100%] mt-10">
        <div className="flex justify-center">
          <div className="bg-gray-600 w-[600px] p-4 rounded-lg shadow-gray-800 shadow-lg">
            <h2 className="text-3xl text-center mb-4 text-white font-bold">
              Delicious Food, Delivered To You
            </h2>
            <p className="text-center mb-4 text-lg text-white">
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious lunch or dinner at home.
            </p>

            <p className="text-center text-lg text-white">
              All our meals are cooked with high-quality ingredients,
              just-in-time and of course by experienced chefs!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
