import React from "react";
import ReviewCard from "../components/Review/ReviewCard";


const reviews = [
  {
    id: 1,
    foodName: "Margherita Pizza",
    restaurantName: "Pizza Palace",
    location: "New York, NY",
    reviewer: "John Doe",
    rating: 4.8,
    photo: "https://source.unsplash.com/400x300/?pizza",
  },
  {
    id: 2,
    foodName: "Sushi Platter",
    restaurantName: "Sushi House",
    location: "Tokyo, Japan",
    reviewer: "Sakura Tanaka",
    rating: 4.9,
    photo: "https://source.unsplash.com/400x300/?sushi",
  },
  {
    id: 3,
    foodName: "Cheeseburger",
    restaurantName: "Burger Town",
    location: "Los Angeles, CA",
    reviewer: "Mike Smith",
    rating: 4.7,
    photo: "https://source.unsplash.com/400x300/?burger",
  },
  {
    id: 4,
    foodName: "Pasta Carbonara",
    restaurantName: "Trattoria Roma",
    location: "Rome, Italy",
    reviewer: "Luca Bianchi",
    rating: 4.8,
    photo: "https://source.unsplash.com/400x300/?pasta",
  },
  {
    id: 5,
    foodName: "Chocolate Cake",
    restaurantName: "Sweet Tooth",
    location: "Paris, France",
    reviewer: "Marie Dubois",
    rating: 4.9,
    photo: "https://source.unsplash.com/400x300/?cake",
  },
  {
    id: 6,
    foodName: "Tacos",
    restaurantName: "El Mexicano",
    location: "Mexico City, Mexico",
    reviewer: "Carlos Ramirez",
    rating: 4.7,
    photo: "https://source.unsplash.com/400x300/?tacos",
  },
];

const AllReview = () => {
  return (
    <section className="py-16 bg-[#FFFDF5]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF7B00] mb-8">
          Flavorful Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard review={review} key={review.id}></ReviewCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllReview;

