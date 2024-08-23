import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/slice/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  let subtotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subtotal += cartItems[i].price;
  }

  return (
    <div className="flex flex-col w-full p-8">
      <div className="flex justify-between">
        <span className="font-medium text-3xl">Shopping Cart</span>
        <div>
          <span className="text-2xl mr-4">
            Subtotal ({cartItems.length} items) :{" "}
          </span>
          <span className="font-bold text-3xl">
            {parseFloat(subtotal.toFixed(2))}
          </span>
        </div>
      </div>
      <hr className="border border-gray-200 my-4" />
      {cartItems?.map((item, index) => (
        <div className="flex flex-col w-full items-center lg:items-start md:items-start lg:flex-row md:flex-row">
          <img
            src={item.image}
            alt={item.title}
            className="w-44 mx-8"
            loading="lazy"
          />
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full my-4">
              <span className="font-medium text-xl">{item.title}</span>
              <span className="font-semibold text-xl">{item.price}</span>
            </div>
            <button
              className="mt-8 border border-blue-300 bg-blue-100 rounded-lg px-4 "
              onClick={() => dispatch(removeItem(item.title))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
