"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { FC, useEffect } from "react"
import bgImageLiveDemo from "../assets/svgs/landingpage/LiveDemo-bg.svg" // Adjust the path as needed

const LiveDemo: FC = () => {
  const bgImageLiveDemoUrl = `url(${bgImageLiveDemo.src})`
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])
  return (
    <div
      className="p-8 sm:p-12 md:p-16 lg:p-20 bg-cover max-w-full"
      style={{
        backgroundImage: bgImageLiveDemoUrl,
      }}
    >
      <div className="text-center text-white" data-aos="fade-up">
        <h1
          className="font-bold text-2xl sm:text-4xl "
          style={{ lineHeight: "1.2" }}
        >
          Love our Solution? <br /> Try it now
        </h1>
        <p className="pt-2 sm:pt-3 md:pt-4 text-sm sm:text-base md:text-xl lg:text-sm">
          Clear Eats: Your All-in-One Restaurant Management Solution
        </p>

        <button className="text-purple bg-white rounded-full w-[140px] sm:w-[130px] md:w-[140px] lg:w-[170px] h-[40px] sm:h-[50px] md:h-[55px] lg:h-[60px] mt-6 sm:mt-8 md:mt-10 lg:mt-12 font-bold hover:bg-purple-500 hover:text-white hover:bg-[#7452BA] duration-150 ease-in">
          Try Now
        </button>
      </div>
    </div>
  )
}

export default LiveDemo
