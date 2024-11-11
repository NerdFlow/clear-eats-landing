"use client"

import "aos/dist/aos.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

import { useEffect } from "react"
import AOS from "aos"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import actions1 from "../assets/images/action1.png"
import actions2 from "../assets/images/action2.png"
import actions3 from "../assets/images/action3.png"
import actionBg from "../assets/svgs/landingpage/Action-bg.svg"
import leftArrow from "../assets/svgs/landingpage/subscriptionleftarrow.svg"
import rightArrow from "../assets/svgs/landingpage/subscriptionrightarrow.svg"

const Action = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  const images = [actions1, actions2, actions3, actions1, actions2, actions3]

  return (
    <div
      className="relative max-w-full"
      style={{
        backgroundImage: `url(${actionBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center mb-8 p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-2xl sm:text-3.5xl font-bold mt-4">
          See Clear Eats in Action
        </h1>
        <p className="mt-4 text-[14px] text-ssm sm:text-base">
          From managing orders to customizing menus, our platform is built to
          make your life easier and your customers' experiences better.
        </p>
      </div>

      {/* Swiper centered slider */}
      <div
        className="relative flex items-center justify-center"
        data-aos="fade-up"
      >
        <button className="absolute left-0 sm:left-6 md:left-8 lg:left-10 top-1/2 transform -translate-y-1/2 z-10">
          <Image
            src={leftArrow}
            alt="Previous"
            className="swiper_prev w-16 sm:w-24 md:w-28 lg:w-40"
            width={100}
            height={100}
          />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 2500 }}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper_next",
            prevEl: ".swiper_prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            520: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          className="CenterZoomSlider w-full  max-w-[80%]"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center swiper-slide-custom"
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-[150px] sm:w-[250px] lg:w-[370px]"
                width={370}
                height={250}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="absolute right-0 sm:right-6 md:right-8 lg:right-10 top-1/2 transform -translate-y-1/2 z-10">
          <Image
            src={rightArrow}
            alt="Next"
            className="swiper_next w-16 sm:w-24 md:w-28 lg:w-40"
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>
  )
}

export default Action
