import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ALL_PRODUCTS_URL } from "../../utils/URLconstants";
import ShimmerUI from "../shimmerUI/ShimmerUI";
import RatingStars from "./RatingStars";
import AddToCart from "./AddToCart";
import CustomerReviews from "./CustomerReviews";

function ProductDetails() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const res = await fetch(`${ALL_PRODUCTS_URL}/${id}`);
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(productData);

  return !productData || productData?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-col">
      <div className="flex flex-col p-8 md:flex-row lg:flex-row lg:p-2">
        {productData?.images && productData?.images?.length > 0 ? (
          <img
            src={productData?.images[0]}
            alt={productData?.title}
            className="w-[80%] md:w-[50%] lg:w-[40%]"
            loading="lazy"
          />
        ) : (
          <div className="w-[50%] bg-gray-200">Image not available</div>
        )}

        <div className="flex flex-col mt-2 lg:mt-12">
          <div>
            <span className="font-medium text-xl">{productData?.title}</span>
            <br />
            {productData?.description}
          </div>
          <span className="text-sm mt-4">Brand: {productData?.brand}</span>
          <span className="text-sm flex text-lg">
            {productData?.rating}
            <RatingStars rating={productData?.rating} />
          </span>
          <div>
            <span className="text-red-500">
              -{productData?.discountPercentage} %
            </span>
            <span className="ml-4 font-bold">${`${productData?.price}`}</span>
          </div>
          <hr className="my-8" />

          <span className="font-semibold text-lg">About this item</span>
          <div className="flex w-[70%] justify-between text-left">
            <span className="font-semibold">Category</span>
            <span className="">
              {productData?.category?.charAt(0)?.toUpperCase() +
                productData?.category?.slice(1)}
            </span>
          </div>
          <div className="flex w-[70%] justify-between text-left">
            <span className="font-semibold">Dimensions</span>
            <span className="">
              {productData?.dimensions?.width} x{" "}
              {productData?.dimensions?.height} x{" "}
              {productData?.dimensions?.depth}
            </span>
          </div>
          <div className="flex w-[70%] justify-between text-left">
            <span className="font-semibold">Warranty</span>
            <span className="">{productData?.warrantyInformation}</span>
          </div>
        </div>
        {productData?.images && productData?.images?.length > 0 && (
          <AddToCart
            title={productData?.title}
            image={productData?.images[0]}
            price={productData?.price}
            delivery={productData?.shippingInformation}
            availabilityStatus={productData?.availabilityStatus}
            returnPolicy={productData?.returnPolicy}
          />
        )}
      </div>
      <CustomerReviews productData={productData} />
    </div>
  );
}

export default ProductDetails;
