import React from "react";
import RatingStars from "./RatingStars";

function CustomerReviews({ productData }) {
  return (
    <div className="flex flex-col m-8">
      <span className="font-bold text-2xl">Customer Reviews</span>
      {productData?.reviews?.map((review) => {
        const reviewDate = new Date(review.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        });
        return (
          <div className="flex flex-col m-4 border border-gray-200 p-4 w-auto">
            <span className="font-semibold">{review?.reviewerName}</span>
            <span className="text-gray-500 text-sm">{reviewDate}</span>
            <div className="flex flex-col md:flex-row lg:flex-row">
              <RatingStars rating={review?.rating} />
              <span className="text-md md:ml-4 lg:ml-4">{review?.comment}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CustomerReviews;
