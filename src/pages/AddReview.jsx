import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import Button from "../components/common/Button";
import { AuthContext } from "../contexts/AuthContext";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      foodName: e.target.foodName.value,
      foodImage: e.target.foodImage.value,
      restaurantName: e.target.restaurantName.value,
      location: e.target.location.value,
      rating,
      reviewText: e.target.reviewText.value,
      date: new Date(),
      reviewerName:user.displayName
    };

    fetch("https://flavorhood-server-side.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.insertedId) {
          toast.success("Review added successfully!");
        //   console.log(data.result.insertedId);
          e.target.reset();
          setRating(0);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Could not add your review.Try again some time later")
      });
  };

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-[#FFFDF5] rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#FF7B00] mb-6">
          Share Your Delicious Experience
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Food Name</label>
              <input
                type="text"
                name="foodName"
                placeholder="e.g. Spicy Chicken Pasta"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Restaurant Name</label>
              <input
                type="text"
                name="restaurantName"
                placeholder="e.g. Food Haven"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Restaurant Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Dhanmondi, Dhaka"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Food Image URL</label>
              <input
                type="url"
                name="foodImage"
                placeholder="Paste image link"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div className="text-center">
            <label className="block font-medium mb-2">Your Rating</label>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setRating(currentRating)}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                    className="focus:outline-none"
                  >
                    <FaStar
                      size={35}
                      className={
                        currentRating <= (hover || rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  </button>
                );
              })}
            </div>
            {rating > 0 && (
              <p className="mt-2 text-sm text-orange-600 font-medium">
                You rated {rating} {rating === 1 ? "star" : "stars"}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Your Review</label>
            <textarea
              name="reviewText"
              placeholder="Write your thoughts about the dish..."
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="text-center">
            <Button>Submit Review</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
