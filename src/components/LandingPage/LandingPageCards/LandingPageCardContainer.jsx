import { ALL_PRODUCTS_URL } from "../../../utils/URLconstants";
import React, { useEffect, useState } from "react";
import LandingPageCard from "./LandingPageCard";
import ShimmerUI from "../../shimmerUI/ShimmerUI";

function LandingPageCardContainer() {
  const [productData, setProductData] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [showShimmer, setShowShimmer] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchProductData(nextPage);
    setNextPage((prev) => prev + 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >= document.body.scrollHeight - 100 &&
      !showShimmer
    ) {
      // Update nextPage first before fetching data
      setNextPage((prev) => {
        const updatedPage = prev + 10;
        fetchProductData(updatedPage); // Pass updatedPage to fetchProductData
        return updatedPage;
      });
    }
  };

  const fetchProductData = async (page) => {
    setShowShimmer(true);
    try {
      const res = await fetch(`${ALL_PRODUCTS_URL}?limit=10&skip=${page}`);
      const data = await res.json();
      setProductData((prevData) => [...prevData, ...data?.products]);
    } catch (error) {
      console.log(error);
    } finally {
      setShowShimmer(false);
    }
  };

  return !productData || productData?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="w-screen flex flex-wrap justify-center">
        {productData?.map((product) => (
          <LandingPageCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
            images={product.images[0]}
          />
        ))}
      </div>
      {showShimmer && <ShimmerUI />}
    </>
  );
}

export default LandingPageCardContainer;
