import React from "react";
import { IoBanOutline } from "react-icons/io5";

const NoItemFound = ({ item }) => {
  return (
    <div className="h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-[#FF3D54]">
        <div className="bg-linear-to-r from-[#FF7B00] to-[#FF3D54] p-5 rounded-full shadow-md">
          <IoBanOutline size={50} className="text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#FF7B00]">
          No {item} Found
        </h2>
        <p className="text-gray-500 text-center text-sm max-w-sm">
          Looks like there are no {item?.toLowerCase()} available right now.
        </p>
      </div>
    </div>
  );
};

export default NoItemFound;
