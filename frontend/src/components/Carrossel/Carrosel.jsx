import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import './Carrosel.scss'
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carrosel() {

    return (
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwiper"
          
        >
          <SwiperSlide><img src="/brigadeiro.png" alt="Banner 1" /></SwiperSlide>
          <SwiperSlide><img src="/brigadeiro.png" alt="Banner 2" /></SwiperSlide>
          <SwiperSlide><img src="/brigadeiro.png" alt="Banner 3" /></SwiperSlide>
        </Swiper>
      );
}
