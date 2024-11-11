"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import { FC, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import clientImage from "../assets/images/clientImage.png"
import bgImageAction from "../assets/svgs/landingpage/Action-bg.svg"
import comma from "../assets/svgs/landingpage/comma.svg"
import leftArrow from "../assets/svgs/landingpage/leftarrow.svg"
import rightArrow from "../assets/svgs/landingpage/rightarrow.svg"
import star from "../assets/svgs/landingpage/star.svg"

const Client: FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  const feedbacks = [
    {
      name: "John De marli",
      feedback:
        "We saw a 20% increase in customer satisfaction thanks to the easy-to-use loyalty program.",
    },
    {
      name: "Jane Smith",
      feedback:
        "The loyalty program helped us retain more customers and grow our business exponentially.",
    },
    {
      name: "Mike Johnson",
      feedback:
        "Our customer engagement increased significantly after implementing the loyalty program.",
    },
    {
      name: "Emily Davis",
      feedback:
        "The best investment we made this year was in the loyalty program. It paid off big time!",
    },
    {
      name: "David Lee",
      feedback:
        "Our customers love the rewards, and we love the repeat business. Win-win!",
    },
  ]

  return (
    <div
      className="bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${bgImageAction.src})`,
      }}
    >
      <div className="text-center">
        <h1 className="font-bold text-2xl sm:text-3.5xl mt-10">
          What Our Happy Clients Say
        </h1>
        <p className="pt-1 sm:pt-2 md:pt-4 lg:pt-6 mb-8 font-medium text-sm">
          Trusted by Restaurants Around the World
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper_next",
          prevEl: ".swiper_prev",
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={100}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative w-[calc(100%-2rem)] container px-12 flex justify-center"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white rounded-xl mt-8 shadow-2"
              data-aos="fade-zoom-in"
            >
              <div className="flex flex-col items-center">
                <div className="relative -mt-12">
                  <Image
                    src={clientImage}
                    alt="Client Image"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-row">
                  <div className="absolute top-14 left-0">
                    <Image
                      src={comma}
                      alt="Comma Icon"
                      width={100}
                      className="pl-8"
                    />
                  </div>
                  <div className="flex flex-col pl-8 lg:pl-24">
                    <Image src={star} alt="Star Rating" className="mb-2" />
                    <h1 className="font-bold text-center">{feedback.name}</h1>
                  </div>
                </div>
              </div>
              <p className="text-black-greyish text-center p-6 leading-6">
                {feedback.feedback}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex space-x-2 items-center justify-center mt-6 mb-8">
        <button className="swiper_prev">
          <Image src={leftArrow} alt="Previous" width={40} height={40} />
        </button>
        <button className="swiper_next">
          <Image src={rightArrow} alt="Next" width={40} height={40} />
        </button>
      </div>
    </div>
  )
}

export default Client
