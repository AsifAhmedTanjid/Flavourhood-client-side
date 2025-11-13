import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import Button from "../components/common/Button";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "../components/common/Loader";

const EditReview = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [reviewData, setReviewData] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    fetch(`https://flavorhood-server-side.vercel.app/reviews/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data);
        setRating(data.rating || 0);
      })
      .catch((err) => console.error(err));
  }, [id, user.accessToken]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedReview = {
      foodName: e.target.foodName.value,
      foodImage: e.target.foodImage.value,
      restaurantName: e.target.restaurantName.value,
      location: e.target.location.value,
      rating,
      reviewText: e.target.reviewText.value,
      date: new Date(),
    };

    fetch(`https://flavorhood-server-side.vercel.app/reviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review updated successfully!");
          navigate("/myreviews");
        }
      })
      .catch((err) => console.error(err));
  };

  if (!reviewData) {
     return (
      <div className="h-[97vh] flex items-center justify-center">
        <Loader square={26} offset={30} />
      </div>
    );
  }

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-[#FFFDF5] rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#FF7B00] mb-6">
          Edit Your Review
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Food Name</label>
              <input
                type="text"
                name="foodName"
                defaultValue={reviewData.foodName}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Restaurant Name</label>
              <input
                type="text"
                name="restaurantName"
                defaultValue={reviewData.restaurantName}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Restaurant Location</label>
              <input
                type="text"
                name="location"
                defaultValue={reviewData.location}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Food Image URL</label>
              <input
                type="url"
                name="foodImage"
                defaultValue={reviewData.foodImage}
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
          </div>

          <div>
            <label className="block font-medium mb-1">Your Review</label>
            <textarea
              name="reviewText"
              defaultValue={reviewData.reviewText}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="text-center">
            <Button>Update Review</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditReview;
