import React from "react";
import { Link } from "react-router";
import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFBF2] px-4">
      <div className="text-center max-w-xl">
       
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-[#FF7B00] mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF3D54] mb-4 md:mb-6">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#7CB518] mb-6 md:mb-8">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
        
        >
         <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
