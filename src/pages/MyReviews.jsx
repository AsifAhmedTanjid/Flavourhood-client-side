import React, { useContext } from "react";
import { format } from "date-fns";
import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "../components/common/Loader";
import Swal from "sweetalert2";
import { Link } from "react-router";
import NoItemFound from "../components/common/NoItemFound";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  
  const { data = [], isPending } = useQuery({
    queryKey: ["myreviews"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/my-reviews", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`,
        },
      });
      return await response.json();
    },
  });


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/reviews/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");

              queryClient.setQueryData(["myreviews"], (oldData = []) =>
                oldData.filter((review) => review._id !== id)
              );

             
              queryClient.invalidateQueries(["myreviews"]);
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  if (isPending)
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <Loader square={26} offset={30} />
      </div>
    );

   if(!data.length){
        return <NoItemFound item="Review of yours"></NoItemFound>
    }


  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF7B00] mb-8">
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
                    <Link to={`/editreview/${review._id}`}> <button
                      
                      className="bg-[#FF7B00] hover:bg-[#e36f00] text-white px-4 py-2 rounded-lg font-medium transition"
                    >
                      Edit
                    </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(review._id)}
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
    </div>
  );
};

export default MyReviews;
