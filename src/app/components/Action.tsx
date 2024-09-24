"use client";
import Image from "next/image";
import { FC, useState } from "react";
import actions1 from "../assets/images/action1.png";
import actions2 from "../assets/images/action2.png";
import actions3 from "../assets/images/action3.png";
import actionBg from "../assets/svgs/landingpage/Action-bg.svg";
import leftArrow from "../assets/svgs/landingpage/subscriptionleftarrow.svg";
import rightArrow from "../assets/svgs/landingpage/subscriptionrightarrow.svg";


const Action: FC = () => {
  const images = [actions1, actions2, actions3, actions2, actions1, actions2];

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
      className="relative"
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
          className={`absolute left-0 sm:left-6 md:left-8 lg:left-10 top-1/2 transform -translate-y-1/2 z-10`} // Apply hover effect class
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
        <div className="flex flex-row -space-x-12 sm:-space-x-20 lg:-space-x-24">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className={`flex-none transition-transform duration-500 ease-in-out ${
                index === 1 ? "transform scale-110 translate-y-[-30px]" : "transform scale-95"
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
          className={`absolute right-0 sm:right-6 md:right-8 lg:right-10 top-1/2 transform -translate-y-1/2 z-10`} // Apply hover effect class
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
