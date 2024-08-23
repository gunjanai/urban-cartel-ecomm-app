import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { GET_N_NUMBER_OF_PRODUCTS } from "../../utils/URLconstants";
import ShimmerUI from "../shimmerUI/ShimmerUI";

function ImageSlider() {
  const [active, setActive] = useState(0);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     loadNextImage();
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(GET_N_NUMBER_OF_PRODUCTS + "5&select=images");
      const data = await res.json();
      setImageData(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPrevImage = () => {
    setActive((prev) => (active === 0 ? 4 : prev - 1));
  };

  const loadNextImage = () => {
    setActive((prev) => (active === 4 ? 0 : prev + 1));
  };

  return !imageData || imageData?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="h-[40vh] w-[100vw] flex justify-between">
      <button
        className="p-4 font-bold px-4 py-8 bg-gray-50"
        onClick={loadPrevImage}
      >
        &lt;
      </button>
      <img
        src={imageData[active]?.images[0]}
        className="object-contain h-full w-auto"
      />
      <button
        className="p-4 font-bold px-4 py-8 bg-gray-50"
        onClick={loadNextImage}
      >
        &gt;
      </button>
    </div>
  );
}

export default ImageSlider;
