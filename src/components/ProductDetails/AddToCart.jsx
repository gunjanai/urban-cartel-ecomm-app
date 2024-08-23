import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slice/cartSlice";

function AddToCart({
  title,
  price,
  image,
  delivery,
  availabilityStatus,
  returnPolicy,
}) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    console.log({ title: title, price: price, image: image });
    dispatch(addItem({ title: title, price: price, image: image }));
  };

  const handleBuyNow = () => {};

  return (
    <div className="border border-gray-200  p-4 flex flex-col mt-12 w-[100%] md:ml-8 md:mt-2 lg:mx-8 lg:w-[40%]">
      <span className="font-bold">${`${price}`}</span>
      <span>
        FREE DELIVERY <span className="font-bold">{delivery}</span>
      </span>
      <h1
        className={`font-medium text-2xl mt-4 ${
          availabilityStatus === "In Stock" ? "text-green-600" : "text-red-600"
        }`}
      >
        {availabilityStatus}
      </h1>
      <span className="text-gray-400">{returnPolicy}</span>
      <button
        className="px-4 py-2 bg-yellow-400 rounded-full mt-8 cursor-pointer hover:bg-yellow-600"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
      <button
        className="px-4 py-2 bg-orange-400 rounded-full mt-4 cursor-pointer hover:bg-orange-600"
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </div>
  );
}

export default AddToCart;
