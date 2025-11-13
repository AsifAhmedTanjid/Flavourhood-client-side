import React from "react";
import { Link } from "react-router";
import Button from "../common/Button";
import ReviewCard from "./ReviewCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../common/Loader";



const FeaturedReviews = () => {
    const {data,isPending} =useQuery({
        queryKey:['featuredreviews'],
        queryFn: getFeaturedReviews
    })
  return (
     <section className="py-16 bg-[#FFFDF5]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF7B00] mb-8">
          Featured Reviews
        </h2>

       {
        isPending?  <div className="h-[97vh] flex items-center justify-center">
        <Loader square={26} offset={30}></Loader>
      </div>: <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((review) => (
            <ReviewCard review={review} key={review._id}></ReviewCard>
          ))}
        </div>
       }

        <div className="mt-12 flex justify-center">
          <Link to='/allreviews'
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Button>Show All Reviews</Button>
            
          </Link>
        </div>
      </div>
    </section>
  );
};

const getFeaturedReviews=async()=>{
    const response= await fetch("https://flavorhood-server-side.vercel.app/featured")
    return await response.json()
}

export default FeaturedReviews;
