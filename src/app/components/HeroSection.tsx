"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Dashboard from "../assets/images/Dashboard.png";
import bgImage from "../assets/images/Frame.svg";
import arrow from "../assets/svgs/landingpage/arrow.svg";
import header from "../assets/svgs/landingpage/clear-eats header.svg";
import cutArrow from "../assets/svgs/landingpage/cutarrow.svg";
import leftVector1 from "../assets/svgs/landingpage/left-vector1.svg";
import leftVector2 from "../assets/svgs/landingpage/left-vector2.svg";
import lines from "../assets/svgs/landingpage/lines.svg";
import rightVector from "../assets/svgs/landingpage/right-vector.svg";

const HeroSection: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bgImageUrl = `url(${bgImage.src})`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Disable scroll when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up by enabling scrolling when component is unmounted or menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div
      className="relative max-w-full h-[25rem] sm:h-[37.5rem] md:h-[43.75rem] lg:h-[55rem] xl:h-[55rem] 2xl:h-[55rem] bg-cover bg-no-repeat "
      id="HeroSection"
      style={{ backgroundImage: bgImageUrl }}
    >
      <div className="h-[1.25rem] sm:h-[1.875rem] md:h-[2.5rem] lg:h-[3.75rem] flex items-center justify-between p-8 sm:p-10 md:p-14 lg:p-16 pt-10 scroll-smooth">
        {/* Left Section */}
        <div className="flex items-center">
          <Image
            src={header}
            width={140} // Adjust the width as needed
            height={40} // Adjust the height as needed
            className="w-[5rem] sm:w-[7rem] md:w-[8rem] lg:w-[9rem]"
            alt="Clear Eats Logo"
          />
        </div>

        {/* Burger Menu Icon for Small Screens */}
        <div className="lg:hidden md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes size={24} /> // Close icon when menu is open
            ) : (
              <FaBars size={24} /> // Burger icon when menu is closed
            )}
          </button>
        </div>

        {/* Center Section for Medium and Large Screens */}
        <div className="hidden lg:flex md:flex justify-end flex-1 font-poppins py-4">
          <nav className="flex space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-4 ml-[0.25rem] sm:ml-[1.75rem] md:ml-[2rem] lg:ml-0">
            <a
              href="#HeroSection"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg"
            >
              About Us
            </a>
            <a
              href="#Subscription"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg"
            >
              Pricing
            </a>
            <a
              href="#Features"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg"
            >
              Features
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden md:hidden fixed inset-0  top-[4rem] left-0 w-full bg-purple bg-opacity-95  text-white z-10 scroll-smooth">
          <nav
            className="flex flex-col items-center space-y-4 py-4"
            onClick={closeMenu}
          >
            <a href="#HeroSection" className="text-white text-lg font-medium">
              Home
            </a>
            <a
              href="#about"
              className="text-white text-lg font-medium"
              onClick={closeMenu}
            >
              About Us
            </a>
            <a
              href="#Subscription"
              className="text-white text-lg font-medium"
              onClick={closeMenu}
            >
              Pricing
            </a>
            <a
              href="#Features"
              className="text-white text-lg font-medium"
              onClick={closeMenu}
            >
              Features
            </a>
          </nav>
        </div>
      )}

      {/* Rest of the Hero Section */}
      <div className="flex">
        {/* Left Vectors */}
        <div className="flex-col h-[37.5rem] justify-between hidden lg:flex">
          <Image
            src={leftVector1}
            width={70} // Adjust the width as needed
            height={70} // Adjust the height as needed
            alt="Vector 1"
          />
          <Image
            src={leftVector2}
            width={70} // Adjust the width as needed
            height={70} // Adjust the height as needed
            alt="Vector 2"
          />
        </div>

        <div className="relative flex flex-col justify-center w-full h-full text-center text-white p-2 sm:p-12 lg:p-14">
          {/* Arrow and Heading Wrapper */}
          <div className="relative max-w-[80%] sm:max-w-4xl md:max-w-[60%] lg:max-w-[80%] xl:max-w-[90%] mx-auto text-center">
            {/* Arrow positioned relative to heading */}
            <div className="absolute lg:top-[2%] xl:left-16 2xl:left-24 2xl:top-[3%] transform -translate-y-1/2 hidden lg:flex">
              <Image
                src={cutArrow}
                width={45}
                height={45}
                alt="Cut Arrow pointing towards heading"
              />
            </div>

            <div className="max-w-full md:max-w-full lg:max-w-[90%] xl:max-w-[90%] mx-auto text-center">
              <h1 className="font-bold text-[1.25rem] sm:text-[2.5rem] md:text-[1.75rem] lg:text-[3rem] 2xl:text-[5rem] leading-tight sm:leading-tight md:leading-normal lg:leading-normal xl:leading-tight">
                Revolutionise Your Restaurant Management With Clear Eats!
              </h1>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[12.5rem] sm:w-[12.5rem] md:w-[20rem] lg:w-[20rem] relative ">
              <Image
                src={lines}
                width={450} // Adjust the width as needed
                height={100} // Adjust the height as needed
                alt="Lines"
              />
            </div>
          </div>

          <p className="mt-[0.25rem] text-[0.4rem] sm:text-[0.4rem] md:text-[0.875rem] lg:text-[0.8rem] 2xl:text-[1.5rem] mb-[0.75rem] px-0 sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] tracking-wide">
            Simplify Online Orders and Keep Track of All Your Business
            Operations in One Place.
          </p>

          {/* Arrow pointing to Dashboard */}
          <div className="absolute right-[10rem] lg:right-[12rem] xl:right-[14rem] 2xl:right-[20rem] top-[18.75rem] lg:top-[15rem] xl:top-[15rem] 2xl:top-[20rem] hidden lg:flex">
            <Image
              src={arrow}
              width={100} // Adjust the width as needed
              height={80} // Adjust the height as needed
              alt="Arrow pointing to Dashboard"
            />
          </div>

          <button className="text-white font-bold text-base bg-purple w-[11rem] h-[3rem] sm:w-[11rem] lg:w-[12.5rem] rounded-full mt-[0.5rem] mb-[0.5rem] sm:mt-[1.5rem] sm:mb-[1.5rem] mx-auto hover:bg-[#7452BA] hover:text-white  duration-150 ease-in">
            Try Now
          </button>

          {/* Center the dashboard image */}
          <div className="flex justify-center mt-[0.5rem]">
            <div className=" flex justify-center w-full h-auto max-w-[34.375rem] sm:max-w-[34.375rem] md:max-w-[50rem] lg:max-w-[90rem] lg:h-auto">
              <Image src={Dashboard} alt="Dashboard" />
            </div>
          </div>
        </div>

        {/* Right Vectors */}
        <div className="flex-col h-[37.5rem] justify-between hidden lg:flex">
          <Image
            src={rightVector}
            width={70} // Adjust the width as needed
            height={70} // Adjust the height as needed
            alt="Vector 3"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
