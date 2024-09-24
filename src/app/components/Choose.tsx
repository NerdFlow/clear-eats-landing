"use client";
import Image from 'next/image';
import { FC, useState } from "react";
import chooseBg from '../assets/svgs/landingpage/Choose-bg.svg'; // Import the background image
import chooseImage from '../assets/svgs/landingpage/choose.svg';
import leftArrow from '../assets/svgs/landingpage/leftarrow.svg';
import rightArrow from '../assets/svgs/landingpage/rightarrow.svg';

const Choose: FC = () => {
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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative flex flex-col md:flex-col sm:flex-col-reverse lg:flex-row-reverse items-center justify-around md:justify-center lg:justify-around p-10" id="Features"
      style={{
        backgroundImage: `url(${chooseBg.src})`,
        backgroundRepeat: "no-repeat",
       
      }}
    >
      <div className="flex-none mt-2 md:mt-0">
        <Image
          src={chooseImage}
          alt="Choose"
          className="w-[400px] sm:w-[400px] md:w-[500px] lg:w-[650px] ml-0 md:ml-4"
        />
      </div>
      <div className="flex-none" style={{ maxWidth: "500px"}}>
        <h1
          className="font-bold text-center text-2xl sm:text-5xl md:text-4xl lg:text-4xl lg:text-left text-black-lightblack"
          style={{ lineHeight: "1.5" }}
        >
          Why Clear Eats is the Right Choice for Your Restaurant
        </h1>
        <p className="mb-6 mt-4 text-center lg:text-left text-xs lg:text-sm">
          Delivering Performance, Customization, and Speed
        </p>

        {/* Carousel for the div */}
        <div className="relative rounded-xl border border-purple bg-lightgrey sm:w-[350px] md:w-[500px] h-[200px] p-6 lg:p-10 lg:w-full">
          <h4 className="font-bold text-md mb-2">
            {carouselContent[currentIndex].title}
          </h4>
          <p className="leading-6 w-full sm:w-[340px] text-sm">
            {carouselContent[currentIndex].description}
          </p>

          {/* Carousel Navigation */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button onClick={prevSlide}>
              <Image
                src={leftArrow}
                alt="Previous"
                className="w-8 sm:w-10"
              />
            </button>
            <button onClick={nextSlide}>
              <Image
                src={rightArrow}
                alt="Next"
                className="w-8 sm:w-10"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
