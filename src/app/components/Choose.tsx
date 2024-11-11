"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import chooseBg from "../assets/svgs/landingpage/Choose-bg.svg" // Import the background image
import chooseImage from "../assets/svgs/landingpage/choose.svg"
import leftArrow from "../assets/svgs/landingpage/leftarrow.svg"
import rightArrow from "../assets/svgs/landingpage/rightarrow.svg"

const Choose: FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])
  const carouselContent = [
    {
      title: "Fast Performance:",
      description:
        "Our platform ensures that your restaurant operations are quick and efficient, from order placement to completion. No more bottlenecks or delays.",
    },
    {
      title: "Customizable Solutions:",
      description:
        "Adapt our tools to fit your unique business needs and preferences, making it easier to deliver personalized services to your customers.",
    },
    {
      title: "Efficient Management:",
      description:
        "Streamline your restaurant management with tools designed to enhance productivity and reduce operational hassles.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    )
  }

  return (
    <section>
      <div
        className=""
        id="Features"
        style={{
          backgroundImage: `url(${chooseBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Make sure the background covers the container
          overflow: "hidden", // Prevent overflow issues
        }}
      >
        <div className="container relative flex flex-col gap-4 lg:gap-0 lg:flex-row-reverse items-center justify-between lg:justify-around pt-6 p-12">
          {/* Image Section */}
          <div className="flex-none  " data-aos="fade-left">
            <Image
              src={chooseImage}
              alt="Choose"
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[450px] ml-0 md:ml-4"
            />
          </div>

          {/* Text & Carousel Section */}
          <div
            className="flex-none max-w-full lg:max-w-[500px]"
            data-aos="fade-right"
          >
            <h1
              className="font-bold text-center lg:text-left text-xl sm:text-2xl xl:text-2xl  text-black-lightblack"
              style={{ lineHeight: "1.3" }}
            >
              Why Clear Eats is the Right Choice for Your Restaurant
            </h1>
            <p className="mb-6 mt-4 text-center lg:text-left text-xs lg:text-sm  ">
              Delivering Performance, Customization, and Speed
            </p>

            {/* Carousel */}
            <div className="relative rounded-xl border border-purple bg-lightgrey w-full  p-4 lg:p-6 lg:pb-12 mx-auto pb-12">
              <h4 className="font-bold text-md mb-2">
                {carouselContent[currentIndex].title}
              </h4>
              <p className="leading-6 w-full text-sm">
                {carouselContent[currentIndex].description}
              </p>

              {/* Carousel Navigation */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button onClick={prevSlide}>
                  <Image
                    src={leftArrow}
                    alt="Previous"
                    className="w-6 sm:w-8"
                  />
                </button>
                <button onClick={nextSlide}>
                  <Image src={rightArrow} alt="Next" className="w-6 sm:w-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose
