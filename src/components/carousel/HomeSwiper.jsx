import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HomeSwiper.css";

import CarouselImg1 from "../../assets/SliderImage/c1.jpg";
import CarouselImg2 from "../../assets/SliderImage/c2.jpg";
import CarouselImg3 from "../../assets/SliderImage/c3.jpg";
import CarouselImg4 from "../../assets/SliderImage/c4.jpg";
import CarouselImg5 from "../../assets/SliderImage/c5.jpg";
// import CarouselImg6 from "../../assets/SliderImage/c6.jpg";
import CarouselImg7 from "../../assets/SliderImage/c7.jpg";
import CarouselImg8 from "../../assets/SliderImage/c8.jpg";
import CarouselImg9 from "../../assets/SliderImage/c9.jpg";


import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeSwiper = () => {
  return (
    <div className="bg-[#f0f8ff]">
      <Swiper
           spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination,Navigation]}
        className="mySwiper container rounded-2xl mt-3"
      >
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150 ">
            <img
              src={CarouselImg1}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150 ">
            <img
              src={CarouselImg2}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150 ">
            <img
              src={CarouselImg3}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg4}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg5}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg6}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg7}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg8}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg9}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
