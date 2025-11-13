import React from "react";
import ReviewCard from "../components/Review/ReviewCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/common/Loader";
import { IoBanOutline } from "react-icons/io5";
import NoItemFound from "../components/common/NoItemFound";



const AllReview = () => {
    const {data,isPending} =useQuery({
        queryKey:['allreviews'],
        queryFn: getAllReviews
    })

    console.log(data);
    
// if(!data.length){
//   return  <div className="h-[97vh] flex items-center justify-center">
//         Hellor
//       </div>
// }
  return (
    <section className="py-10 bg-[#FFFDF5]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF7B00] mb-8">
          Flavorful Reviews
        </h2>

       {
        isPending?  <div className="h-[97vh] flex items-center justify-center">
        <Loader square={26} offset={30}></Loader>
      </div>:  data.lentgh?<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((review) => (
            <ReviewCard review={review} key={review._id}></ReviewCard>
          ))}
        </div>:  <NoItemFound item="Reviews" />
       }
      </div>
    </section>
  );
};

const getAllReviews=async()=>{
    const response= await fetch("http://localhost:3000/reviews")
    return await response.json()
}

export default AllReview;

