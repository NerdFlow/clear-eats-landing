"use client";
import Image from "next/image";
import { FC, useState } from "react";
import actionBg from "../assets/svgs/landingpage/Action-bg.svg";
import actions1 from "../assets/svgs/landingpage/actions1.svg";
import actions2 from "../assets/svgs/landingpage/actions2.svg";
import actions3 from "../assets/svgs/landingpage/actions3.svg";
import leftArrow from "../assets/svgs/landingpage/subscriptionleftarrow.svg";
import rightArrow from "../assets/svgs/landingpage/subscriptionrightarrow.svg";

const Action: FC = () => {
  const images = [actions1, actions2, actions3, actions2, actions1, actions3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 3
    );
  };

  const currentImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${actionBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center mb-8 p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
          See Clear Eats in Action
        </h1>
        <p className="mt-4 text-[14px]">
          From managing orders to customizing menus, our platform is built to
          make your life easier and your customers' experiences better.
        </p>
      </div>

      {/* Image carousel section */}
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-1/2 transform -translate-y-1/2 z-10"
          onClick={prevSlide}
        >
          <Image
            src={leftArrow}
            alt="Previous"
            className="w-16 sm:w-24 md:w-28 lg:w-40"
            width={100}
            height={100}
          />
        </button>
        <div className="flex flex-row -space-x-10 sm:-space-x-20 lg:-space-x-24">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className={`flex-none ${
                index === 1 ? "transform scale-110 translate-y-[-30px]" : ""
              }`}
            >
              <Image
                src={image}
                className="inline-block w-[150px] sm:w-[250px] lg:w-[370px]"
                alt={`Slide ${currentIndex + index + 1}`}
                width={370} // Adjust width as needed
                height={250} // Adjust height as needed
              />
            </div>
          ))}
        </div>
        <button
          className="absolute right-4 sm:right-6 md:right-8 lg:right-10 top-1/2 transform -translate-y-1/2 z-10"
          onClick={nextSlide}
        >
          <Image
            src={rightArrow}
            alt="Next"
            className="w-16 sm:w-24 md:w-28 lg:w-40"
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>
  );
};

export default Action;
