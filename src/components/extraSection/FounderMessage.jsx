import React from 'react';
import FounderMsgImg from "../../assets/founder-bg.jpg";
import "./FounderMessage.css"

const FounderMessage = () => {
  return (
    <div
      className="relative w-full h-80 md:h-96 lg:h-120 bg-cover bg-center flex items-center justify-center founder-section "
      
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFD580]">
          Message from the Founder
        </h2>
        <p className="italic mb-3">
          "Food has always been more than just taste — it's the story of people, culture, and the moments we share around the table."
        </p>
        <p className="text-sm md:text-base ">
          When we created <span className="font-semibold text-[#FFB347]">FlavorHood</span>, we wanted to bring together a community of food lovers who don't just eat, but experience flavor. Whether you're discovering a hidden street gem or reviewing your favorite restaurant — every flavor has a story, and every story deserves to be heard.
        </p>
        <div className="mt-6">
          <p className="font-semibold text-[#FFD580]">— Asif Ahmed Tanjid</p>
          <p className="text-sm text-gray-200">Founder of FlavorHood</p>
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;
