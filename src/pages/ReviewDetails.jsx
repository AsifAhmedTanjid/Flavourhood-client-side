import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { format } from "date-fns";
import Loader from "../components/common/Loader";
import Stars from "../components/Review/Stars";

const ReviewDetails = () => {
  const { id } = useParams(); // get review ID from URL
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await fetch(`http://localhost:3000/reviews/${id}`);
        const data = await res.json();
        setReview(data);
      } catch (err) {
        console.error("Error fetching review:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  if (loading)
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <Loader square={26} offset={30} />
      </div>
    );

  if (!review)
    return (
      <div className="h-[70vh] flex items-center justify-center text-red-500 font-semibold text-2xl">
        Review Not Found
      </div>
    );

  return (
    <section className="bg-[#FFFDF5] py-12">
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-xl rounded-3xl p-8">
        <img
          src={review.foodImage}
          alt={review.foodName}
          className="w-full h-64 object-cover rounded-2xl mb-6"
        />

        <h2 className="text-3xl font-bold text-[#FF7B00] mb-3">
          {review.foodName}
        </h2>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">{review.restaurantName}</span> —{" "}
          {review.location}
        </p>

        <div className="flex items-center mb-4">
          <Stars rating={review.rating} />
          <span className="ml-2 text-gray-700 font-medium">
            {review.rating.toFixed(1)} / 5
          </span>
        </div>

        <p className="text-gray-800 mb-4 leading-relaxed">
          {review.reviewText || "No detailed review text provided."}
        </p>

        <div className="text-gray-500 text-sm">
          Reviewed by <span className="font-semibold">{review.reviewerName || review.email}</span> <br />
          on {format(new Date(review.date), "yyyy-MM-dd")}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/allreviews"
            className="bg-linear-to-r from-[#FF7B00] to-[#FF3D54] text-white px-6 py-2 rounded-md hover:opacity-90 transition"
          >
            Back to Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewDetails;
