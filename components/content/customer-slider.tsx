"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import { customers } from "@/constants/customers";

import "swiper/css";
import "swiper/css/scrollbar";

export function CustomerSlider() {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 1000 }}
      modules={[Scrollbar, A11y]}
      scrollbar={{ draggable: true }}
      //   breakpoints={{
      //     768: {
      //       slidesPerView: 5.5,
      //     },
      //   }}
    >
      {customers.map((customer) => {
        return (
          <SwiperSlide key={customer.name} className="my-3 mb-6 w-fit">
            <div className="tile w-[200px] h-[200px] flex justify-center items-center w-fit">
              <Image
                className="object-contain"
                src={customer.image.url}
                alt={customer.name}
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
