import React, { useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import Product2 from "@/assets/images/avatars/VRC image S(F).png";
import Product3 from "@/assets/images/avatars/VRC image T(F).png";
import Product4 from "@/assets/images/avatars/VRC image U(F).png";
import Product5 from "@/assets/images/avatars/VRC image V(F).png";
import Product6 from "@/assets/images/avatars/VRC image W(F).png";
import Product7 from "@/assets/images/avatars/VRC image X(F).png";

export const ProductSlider = ({ productImage }: any) => {
  const [thumbsSwiper, setThumbsSwiper]: any = useState(null);

  return (
    <>
      <div className="product-slider">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <Image alt="Slider image" src={productImage} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product5} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product6} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product7} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          //@ts-ignore
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image alt="Slider image" src={productImage} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product5} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product6} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="Slider image" src={Product7} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
