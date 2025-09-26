import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Carousel.css";

function Carousel({ items, renderItem, leftNav, rightNav, loop = false }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={16} // spacing between slides
      slidesPerView={Math.min(6, items.length)} // default 6 cards per view
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      loop={items.length > 6} 
      breakpoints={{
        320: { slidesPerView: Math.min(1, items.length) },
        640: { slidesPerView: Math.min(2, items.length) },
        768: { slidesPerView: Math.min(4, items.length) },
        1024: { slidesPerView: Math.min(6, items.length) },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
      ))}

      {leftNav}
      {rightNav}
    </Swiper>
  );
}

export default Carousel;
