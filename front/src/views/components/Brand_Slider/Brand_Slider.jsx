import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";
import newsMarkBbc from "../../../assests/image/news-mark-bbc.png";
import newsMarkTwsj from "../../../assests/image/news-mark-twsj.png";
import newsMarkTc from "../../../assests/image/news-mark-tc.png";
import newsMarkNewyork from "../../../assests/image/news-mark-newyork.png";
import newsMarkForbes from "../../../assests/image/news-mark-forbes.png";
import inten from "../../../assests/image/66-669567_nintendo-64-logo-png.png";
import business from "../../../assests/image/business-insider-logo.png";
import CoinDesk from "../../../assests/image/CoinDesk.png";
import business1 from "../../../assests/image/kisspng-thomson-reuters-corporation-reuters-tv-news-the-bl-reuters-the-knife-media-5bef85071f2c33.1190001415424238151277.png";
import PikPng from "../../../assests/image/PikPng.com_tmz-logo-png_4898960.png";
import pngegg from "../../../assests/image/pngegg (1).png";
import pngwing from "../../../assests/image/pngwing.com (1).png";
import pngwing2 from "../../../assests/image/pngwing.com (2).png";
import pngwing3 from "../../../assests/image/pngwing.com (3).png";
import pngwing4 from "../../../assests/image/pngwing.com.png";
import Economis from "../../../assests/image/The Economist.png";
import wired from "../../../assests/image/wired-logo-png-transparent-vector-475207.png";
import Yahoo1 from "../../../assests/image/Yahoo_Finance_logo_2021.png";









export default function Brand_Slider() {
  return (
    <div className='container'>
         <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              
              src={newsMarkBbc}
              alt="carousel_avater4-min"
         
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="mark-bbc1"
              src={newsMarkTwsj}
              alt="carousel_avater4-min"
         
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mark-bbc"
              s
              src={newsMarkTc}
              alt="carousel_avater4-min"
         
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={newsMarkNewyork}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={PikPng}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={pngegg}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide><SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={pngwing}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide><SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={pngwing2}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide><SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={pngwing4}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide><SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={pngwing3}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide><SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={Economis}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide><SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={wired}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide><SwiperSlide>
            {" "}
            <img
              className="mark-bbc"
              s
              src={Yahoo1}
              alt="carousel_avater4-min"
         
              height="100%"
            />
          </SwiperSlide>
         
        </Swiper>

    </div>
  )
}
