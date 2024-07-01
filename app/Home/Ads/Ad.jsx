"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ad from "@/app/assets/ad.svg";
import "@/app/Home/Categories/style.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Ad() {
  return (
    <main className="w-screen my-[70px] overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={false}
        centerMode
        itemClass="carousel-item-padding-40-px"
      >
        <div className="flex-shrink-0 mx-10 w-[600px] h-[274px] relative overflow-hidden rounded-[24px]">
          <Image
            className=""
            src={ad}
            alt="Ad 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-shrink-0 mx-10 w-[600px] h-[274px] relative overflow-hidden rounded-[24px]">
          <Image
            className=""
            src={ad}
            alt="Ad 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-shrink-0 mx-10 w-[600px] h-[274px] relative overflow-hidden rounded-[24px]">
          <Image
            className=""
            src={ad}
            alt="Ad 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Carousel>
    </main>
  );
}

export default Ad;
