import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <section>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/02NrSzb/banner7-33.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/WHCz2QK/0c7f19e3-e4b6-46b9-9a9f-2aab0cb446c1.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/wS09BrG/3f17c0cb-ff88-4d22-a09e-3134bca4a0e1.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/T2jd73d/banner7-32.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/m6Sv5Wx/c967ef74-10ac-4727-b033-dd50b802aea2.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/PCnQMBr/6357428d-1336-4e1b-84b4-c25eedb9f821-jpg-1200x1200.jpg" alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
