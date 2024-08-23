import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPageCard({
  title,
  id,
  description,
  price,
  discountPercentage,
  rating,
  images,
}) {
  const navigate = useNavigate();
  const handleProductDetailsNav = () => {
    navigate(`/productDetails/${id}`);
  };
  return (
    <>
      <div
        className="flex flex-col w-[90%] p-4 shadow-lg m-4 items-center md:w-[40%] lg:w-[22%] lg:h-64 cursor-pointer"
        onClick={handleProductDetailsNav}
      >
        <img
          src={images}
          className="object-contain w-64 h-40 flex-grow-3 flex-shrink-1 mb-4 "
          alt={title}
        />
        <h1 className="font-bold">{title}</h1>
        <h1 className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full">
          {description}
        </h1>
      </div>
    </>
  );
}

export default LandingPageCard;
