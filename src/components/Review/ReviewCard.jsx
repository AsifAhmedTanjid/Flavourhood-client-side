import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ReviewCard = ({ review }) => {
  // console.log(review);

  return (
    <div
      key={review._id}
      className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src={review.foodImage}
        alt={review.foodName}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1">{review.foodName}</h3>
          <p className="text-gray-600 text-sm">
            {review.restaurantName} — {review.location}
          </p>
          <p className="text-gray-800 mt-2 text-sm">
            Reviewed by <span className="font-medium">{review.email}</span>
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-[#FF3D54] flex items-center gap-2">
            {review.rating} <FaStar color="#FFD700" size={16} />
          </span>
          <Link
            to={`/reviews/${review.id}`}
            className="bg-linear-to-r from-[#FF7B00] to-[#FF3D54] text-white px-4 py-2 rounded-xl text-sm hover:opacity-90 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
