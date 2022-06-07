import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import f from "../PrimaryProductCard/PrimaryProductCard";
import { Pagination, Navigation } from "swiper";
import ProductCard from "./../PrimaryProductCard/PrimaryProductCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Collection = () => {
  const [isMobile, setIsMobile] = useState(3);
  // console.log(isMobile)
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(1);
    }
    else if(window.innerWidth < 980){
      setIsMobile(2)
    }
    else {
      setIsMobile(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <section className="py-12">
      <h2 className="text-3xl mb-4">Mobile</h2>
      {/* Collection Banner */}
      <div className=" overflow-hidden">
        <div className="hover:scale-105 duration-500">
          <Link to="/">
            <img
              src="https://i.ibb.co/M7bg8zr/banner37.jpg"
              className="w-full"
              alt=""
            />
          </Link>
        </div>
      </div>

      {/* Collection body */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-7">
        <div className="col-span-2">
          <img src="https://i.ibb.co/0Vb483Q/cate2.jpg" className="hidden lg:block" alt="" />
        </div>

        <div className="col-span-5">
          <Swiper
            slidesPerView={isMobile}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div className="flex items-center justify-center">
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <ProductCard />
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Collection;
