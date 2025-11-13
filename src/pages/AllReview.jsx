import React, { useState } from "react";
import ReviewCard from "../components/Review/ReviewCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/common/Loader";
import NoItemFound from "../components/common/NoItemFound";

const AllReview = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["allreviews", search],
    queryFn: async () => {
      const url = search
        ? `https://flavorhood-server-side.vercel.app/search?search=${(search)}`
        : "https://flavorhood-server-side.vercel.app/reviews";
      const res = await fetch(url);
      return res.json();
    },
  });

  return (
    <section className="py-10 bg-[#FFFDF5]">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF7B00] mb-8">
      Flavorful Reviews
    </h2>

   
    <div className="flex justify-end mb-10">
      <input
        type="text"
        placeholder="Search reviews..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    {isLoading ? (
      <div className="h-[97vh] flex items-center justify-center">
        <Loader square={26} offset={30} />
      </div>
    ) : data?.length ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((review) => (
          <ReviewCard review={review} key={review._id} />
        ))}
      </div>
    ) : (
      <NoItemFound item="Reviews" />
    )}
  </div>
</section>

    // <section className="py-10 bg-[#FFFDF5]">
    //   <div className="container mx-auto">
    //     <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF7B00] mb-8">
    //       Flavorful Reviews
    //     </h2>

    //     <input
    //       type="text"
    //       placeholder="Search reviews..."
    //       value={search}
    //       onChange={(e) => setSearch(e.target.value)}
    //       className="w-full max-w-md mx-auto mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
    //     />

    //     {isLoading ? (
    //       <div className="h-[97vh] flex items-center justify-center">
    //         <Loader square={26} offset={30} />
    //       </div>
    //     ) : data?.length ? (
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {data.map((review) => (
    //           <ReviewCard review={review} key={review._id} />
    //         ))}
    //       </div>
    //     ) : (
    //       <NoItemFound item="Reviews" />
    //     )}
    //   </div>
    // </section>
  );
};

export default AllReview;
