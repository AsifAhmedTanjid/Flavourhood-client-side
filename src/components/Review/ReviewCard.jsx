import React, { useState, useEffect, useContext } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import Stars from "./Stars";

const ReviewCard = ({ review }) => {
  const { user } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(review);
  

useEffect(() => {
  if (!user) {
    setIsFavorite(false); // Reset heart when logged out
    return;
  }

  const checkFavorite = async () => {
    try {
      const res = await fetch(`http://localhost:3000/my-favorites`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      const favorites = await res.json();

      const exists = favorites.some(
        (fav) => fav.reviewId === review._id
      );
      setIsFavorite(exists);
    } catch (err) {
      console.error(err);
    }
  };

  checkFavorite();
}, [user, review._id]);


  const handleFavorite = async () => {
    if (!user) {
      toast.error("You must be logged in to add favorites");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({
          reviewId: review._id,
          foodName: review.foodName,
          foodImage: review.foodImage,
          restaurantName: review.restaurantName,
          location: review.location,
          reviewText: review.reviewText,
          rating: review.rating,
          date: new Date(),
          reviewerName:review.reviewerName,
          reviewedBy:review.email
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsFavorite(true);
        toast.success("Added to favorites!");
      } else {
        toast.error(data.message || "Already in favorites");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
      <img
        src={review.foodImage}
        alt={review.foodName}
        className="w-full h-48 object-cover"
      />

      <button
        onClick={handleFavorite}
        className={`absolute top-3 right-3 p-2 rounded-full transition ${
          isFavorite
            ? "bg-[#FF3D54] text-white"
            : "bg-white/80 text-[#FF3D54] hover:bg-[#FF3D54] hover:text-white"
        }`}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1 flex items-center justify-between">
            {review.foodName}
          </h3>
          <p className="text-gray-600 text-sm">
            {review.restaurantName} — {review.location}
          </p>
          <p className="text-gray-800 mt-2 text-sm">
            Reviewed by <span className="font-medium">{review.email}</span>
          </p>
          {/* <p className="text-gray-800 mt-2 text-sm">{review.reviewText}</p> */}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-[#FF3D54] flex items-center gap-2">
            {/* {review.rating} <FaStar color="#FFD700" size={16} /> */}
            <Stars rating={review.rating}></Stars>
          </span>

          <Link
            to={`/reviews/${review._id}`}
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
