import React, { useContext, useState } from "react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "../components/common/Loader";

const MyReviews = () => {
  const {user}=useContext(AuthContext)
   const {data,isPending} =useQuery({
        queryKey:['myreviews'],
        queryFn: async()=>{
      const response = await fetch("https://flavorhood-server-side.vercel.app/my-reviews", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.accessToken}`,
    },
  });
    return await response.json()
}
    })
  const [showModal, setShowModal] = useState(false);

  console.log(data,user);
  
if(isPending) return (
      <div className="h-[97vh] flex items-center justify-center">
        <Loader square={26} offset={30}></Loader>
      </div>
    );

 

  return (
    <div className="container mx-auto py-10 ">
      <h2 className="text-3xl font-bold text-center text-[#FF7B00] mb-6">
        My Reviews
      </h2>

      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <table className="min-w-full text-left border-collaps">
          <thead className="bg-[#FFF2E1] text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Food Name</th>
              <th className="px-4 py-3 hidden md:table-cell">Restaurant</th>
              <th className="px-4 py-3 hidden md:table-cell">Date</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((review) => (
              <tr
                key={review._id}
                className="bg-white shadow-md rounded-xl my-3 hover:shadow-xl transition duration-300 ease-in-out"
              >
                <td className="px-4 py-3">
                  <img
                    src={review.foodImage}
                    alt={review.foodName}
                    className="w-20 h-20 object-cover rounded-xl shadow-sm"
                  />
                </td>
                <td className="px-4 py-3 font-medium text-gray-800">
                  {review.foodName}
                </td>
                <td className="px-4 py-3 text-gray-700 hidden md:table-cell">
                  {review.restaurantName}
                </td>
                <td className="px-4 py-3 text-gray-600 hidden md:table-cell">
                 {format(new Date(review.date), "yyyy-MM-dd")}
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-2 flex-col md:flex-row">
                    <button
                      onClick={() => alert("Edit clicked")}
                      className="bg-[#FF7B00] hover:bg-[#e36f00] text-white px-4 py-2 rounded-lg font-medium transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center  opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-xl max-w-sm w-full text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Are you sure you want to delete this review?
              </h3>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg font-medium"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};



export default MyReviews;
