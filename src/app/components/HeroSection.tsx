import Image from "next/image"
import { FC } from "react"

import Dashboard from "../assets/images/Dashboard.png"
import bgImage from "../assets/images/Frame.png"
import arrow from "../assets/svgs/landingpage/arrow.svg"

import cutArrow from "../assets/svgs/landingpage/cutarrow.svg"
import leftVector1 from "../assets/svgs/landingpage/left-vector1.svg"
import leftVector2 from "../assets/svgs/landingpage/left-vector2.svg"
import lines from "../assets/svgs/landingpage/lines.svg"
import rightVector from "../assets/svgs/landingpage/right-vector.svg"
import Navbar from "./Navbar"

const HeroSection: FC = () => {
  return (
    <div
      className=" relative h-[40rem] sm:h-[33rem] md:h-[43.75rem] lg:h-[45rem] xl:h-[60rem]  bg-no-repeat bg-cover  "
      id="HeroSection"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <Navbar />
      {/* Hero Section Content */}
      <div className="flex h-full">
        {/* Left Vectors */}
        <div className="flex-col h-[37.5rem] justify-between hidden lg:flex">
          <Image src={leftVector1} alt="Vector 1" />
          <Image src={leftVector2} width={100} height={100} alt="Vector 2" />
        </div>

        <div className=" translate-y-20 relative container flex flex-col justify-center max-w-[95%]text-center text-white  w-full py-0 sm:p-12 lg:p-5 xl:p-32 gap-4 sm:gap-0 xl:gap-6">
          <div className=" relative sm:max-w-4xl md:max-w-[100%] lg:w-[100%] mx-auto text-center">
            <div className="absolute lg:top-[1%] xl:left-[7%] 2xl:left-[3%] 2xl:top-[3%] transform -translate-y-1/2 hidden lg:flex">
              <Image
                src={cutArrow}
                width={35}
                height={35}
                alt="Cut Arrow pointing towards heading"
              />
            </div>

            <div className="  w-full xl:max-w-[90%] mx-auto text-center">
              <h1 className="font-bold text-2xl sm:text-3.5xl leading-tight sm:leading-tight md:leading-normal lg:leading-normal xl:leading-tight">
                Revolutionise Your Restaurant Management With Clear Eats!
              </h1>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[12.5rem] sm:w-[12.5rem] md:w-[20rem] lg:w-[20rem] relative ">
              <Image src={lines} width={450} height={100} alt="Lines" />
            </div>
          </div>
          <div className="relative w-full">
            <p className=" text-center text-ssm mt-[0.25rem]  mb-[0.75rem] px-0 sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] tracking-wide">
              Simplify Online Orders and Keep Track of All Your Business
              Operations in One Place.
            </p>
            {/* Vector Arrow pointing to Dashboard */}
            <div className=" hidden lg:flex absolute right-[2rem] top-[0] ">
              <Image
                src={arrow}
                width={100}
                height={80}
                alt="Arrow pointing to Dashboard"
              />
            </div>
          </div>

          <button className=" text-white font-bold text-xs sm:text-base bg-purple w-[11rem] p-3 sm:w-[11rem] lg:w-[12.5rem] rounded-full mt-[0.5rem] mb-[0.5rem] sm:mt-[1.5rem] sm:mb-[1.5rem] mx-auto hover:bg-[#7452BA] hover:text-white  duration-150 ease-in">
            Try Now
          </button>
          <div className="flex justify-center mt-[3.5rem] sm:mt-[0.5] container">
            <div className="flex justify-center sm:max-w-[80%] h-auto mx-auto lg:h-auto">
              <Image src={Dashboard} alt="Dashboard" />
            </div>
          </div>
        </div>
        <div className=" flex-col h-[40rem] justify-between hidden lg:flex">
          <Image src={rightVector} width={100} height={100} alt="Vector 3" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
