import React from "react";

const Star = ({ filled, half }) => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {filled ? (
      <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.36-.54L12 2 8.36 8.7 2 9.24l5.46 4.73L5.82 21z" />
    ) : half ? (
      <>
        <path
          className="fill-current text-yellow-400"
          d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.36-.54L12 2 8.36 8.7 2 9.24l5.46 4.73L5.82 21z"
        />
        <path
          className="fill-current text-gray-300"
          d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.36-.54L12 2 8.36 8.7 2 9.24l5.46 4.73L5.82 21z"
        />
      </>
    ) : (
      <path
        className="fill-current text-gray-300"
        d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.36-.54L12 2 8.36 8.7 2 9.24l5.46 4.73L5.82 21z"
      />
    )}
  </svg>
);

const RatingStars = ({ rating = 0 }) => {
  // Ensure rating is within the 0 to 5 range
  rating = Math.max(0, Math.min(5, rating));

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className="flex">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Star key={index} filled />
        ))}
      {hasHalfStar && <Star half />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Star key={index + fullStars + (hasHalfStar ? 1 : 0)} />
        ))}
    </div>
  );
};

export default RatingStars;
