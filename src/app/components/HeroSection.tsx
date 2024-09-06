import Image from "next/image";
import { FC } from "react";

import bgImage from "../assets/images/Frame.svg";
import arrow from "../assets/svgs/landingpage/arrow.svg";
import header from "../assets/svgs/landingpage/clear-eats header.svg";
import cutArrow from "../assets/svgs/landingpage/cutarrow.svg";
import Dashboard from "../assets/svgs/landingpage/Dashboard.svg";
import leftVector1 from "../assets/svgs/landingpage/left-vector1.svg";
import leftVector2 from "../assets/svgs/landingpage/left-vector2.svg";
import lines from "../assets/svgs/landingpage/lines.svg";
import rightVector from "../assets/svgs/landingpage/right-vector.svg";

const HeroSection: FC = () => {
  const bgImageUrl = `url(${bgImage.src})`;

  return (
    <div
      className="relative w-full h-[400px] sm:h-[600px] md:h-[700px] lg:h-[850px] bg-cover bg-no-repeat"
      style={{ backgroundImage: bgImageUrl }}
    >
      <div className="h-[20px] sm:h-[30px] md:h-[40px] lg:h-[60px] flex items-center justify-between sm:justify-between md:justify-between lg:justify-end p-8 sm:p-10 md:p-14 lg:p-16 pt-10">
        {/* Left Section */}
        <div className="flex items-center">
          <Image
            src={header}
            width={140} // Adjust the width as needed
            height={40} // Adjust the height as needed
            className="w-20 sm:w-28 md:w-32 lg:w-36" 
            alt="Clear Eats Logo"
          />
        </div>

        {/* Center Section */}
        <div className="flex justify-end flex-1 font-poppins py-4">
          <nav className="flex space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-10 ml-1 sm:ml-7 md:ml-8 lg:ml-0">
            <a
              href="#HeroSection"
              className="text-white font-medium lg:text-[16px] sm:text-sm md:text-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-medium lg:text-[16px] sm:text-sm md:text-lg"
            >
              About Us
            </a>
            <a
              href="#Subscription"
              className="text-white font-medium lg:text-[16px] sm:text-sm md:text-lg"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white font-medium lg:text-[16px] sm:text-sm md:text-lg"
            >
              Features
            </a>
          </nav>
        </div>
      </div>

      <div className="flex">
        {/* Left Vectors */}
        <div className="flex-col h-[500px] justify-between hidden lg:flex">
          <Image
            src={leftVector1}
            width={64} // Adjust the width as needed
            height={64} // Adjust the height as needed
            alt="Vector 1"
          />
          <Image
            src={leftVector2}
            width={64} // Adjust the width as needed
            height={64} // Adjust the height as needed
            alt="Vector 2"
          />
        </div>

        <div className="relative flex flex-col justify-center w-full h-full text-center text-white p-6 sm:p-12 lg:p-14">
          <div className="relative">
            {/* Arrow positioned relative to heading */}
            <Image
              src={cutArrow}
              width={38} // Adjust the width as needed
              height={38} // Adjust the height as needed
              alt="Arrow pointing towards heading"
              className="absolute hidden lg:flex"
              style={{
                left: "45%",
                transform: "translateX(-1140%) translateY(-40%)",
              }}
            />
            <h1 className="relative font-bold text-2xl sm:text-4xl md:text-4xl lg:text-6xl leading-tight sm:leading-tight md:leading-normal lg:leading-tight">
              Revolutionise Your Restaurant Management With Clear Eats!
            </h1>
          </div>

          <div className="flex justify-center">
            <Image
              src={lines}
              width={350} // Adjust the width as needed
              height={50} // Adjust the height as needed
              alt="Lines"
              className="w-40 sm:w-50 md:w-80 lg:w-80 relative lg:left-[70px]"
            />
          </div>

          <p className="mt-1 text-xs sm:text-[14px] md:text-[14px] lg:text-[18px] font-inter mb-3 px-0 sm:px-6 md:px-8 lg:px-10 tracking-wide">
            Simplify Online Orders and Keep Track of All Your Business
            Operations in One Place.
          </p>

          {/* Arrow pointing to Dashboard */}
          <Image
            src={arrow}
            width={100} // Adjust the width as needed
            height={80} // Adjust the height as needed
            alt="Arrow pointing to Dashboard"
            className="absolute right-[120px] top-[220px] hidden lg:flex"
          />
          <button className="text-white font-bold text-base bg-purple w-44 h-12 sm:w-44 lg:w-[200px] rounded-full mt-2 mb-2 sm:mt-6 sm:mb-6 mx-auto">
            Try Now
          </button>

          {/* Center the dashboard image */}
          <div className="flex justify-center mt-2">
            <Image
              src={Dashboard}
              width={1033} // Adjust the width as needed
              height={500} // Adjust the height as needed
              alt="Dashboard"
              className="w-full h-auto max-w-[550px] sm:max-w-[550px] md:max-w-[800px] lg:max-w-[1033px] lg:h-auto"
            />
          </div>
        </div>

        {/* Right Vector */}
        <div className="hidden lg:flex h-[900px]">
          <Image
            src={rightVector}
            width={64} // Adjust the width as needed
            height={64} // Adjust the height as needed
            alt="Vector 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
