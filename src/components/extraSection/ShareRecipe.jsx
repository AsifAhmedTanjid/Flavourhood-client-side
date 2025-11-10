import React from "react";
import Button from "../common/Button";

const ShareRecipe = () => {
  return (
    <section className="bg-[#FFF8E7] py-16 w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF7B00] mb-4 text-center">
          Share Your Homemade Recipe
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12">
          Got a delicious dish that deserves the spotlight?   
          Submit your recipe and we might feature it next week on 
          <span className="font-semibold text-[#FF3D54]"> FlavorHood</span>!
        </p>

        <div className="bg-[#FFFDF5] shadow-xl rounded-3xl p-8 w-full flex flex-col lg:flex-row gap-6">
         
          <div className="flex-1 flex flex-col gap-4 ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
            />
            <input
              type="text"
              placeholder="Recipe Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
            />
            <input
              type="text"
              placeholder="Short Description"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
            />
          </div>

          <div className="flex-1">
            <textarea
              rows="8"
              placeholder="Write your recipe here..."
              className="w-full h-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7B00] resize-none"
            ></textarea>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          {/* <button
            type="button"
            className="bg-gradient-to-r from-[#FF7B00] to-[#FF3D54] text-white font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition-all duration-300"
          >
            Submit Recipe
          </button> */}

          <Button>Submit Recipe</Button>

        </div>

        <p className="text-sm text-gray-600 mt-6 max-w-3xl mx-auto text-center">
           We feature the best community recipes weekly. Your dish could be the next FlavorHood favorite!
        </p>
      </div>
    </section>
  );
};

export default ShareRecipe;
