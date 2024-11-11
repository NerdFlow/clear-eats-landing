import Image from "next/image"
import { FC } from "react"
import clearEatsLogo from "../assets/svgs/landingpage/clear-eats footer.svg" // Adjust the path as needed
import gmailIcon from "../assets/svgs/landingpage/gmailIcon.svg" // Adjust the path as needed
import phoneIcon from "../assets/svgs/landingpage/phoneIcon.svg" // Adjust the path as needed

const Footer: FC = () => {
  return (
    <div className="container p-4 sm:p-6 lg:p-12 font-poppins flex gap-4 flex-col">
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-8 lg:space-y-0 lg:p-8">
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <div className="mb-4 mt-4">
            <Image
              src={clearEatsLogo}
              className="w-[10rem] sm:w-[15rem]"
              alt="Logo"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2 leading-10">
              <Image
                src={gmailIcon}
                alt="Gmail Icon"
                className="w-[1.25rem] h-[1.1rem] sm:w-[1.5rem] sm:h-[1.5rem]"
              />
              <span className="text-black text-ssm sm:text-base font-medium">
                Nerdflow@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src={phoneIcon}
                alt="Phone Icon"
                className="w-[1.25rem] h-[1.1rem] sm:w-[1.5rem] sm:h-[1.5rem]"
              />
              <span className="text-black text-ssm sm:text-base font-medium w-full">
                +1 234 456 678 89
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:col-span-2 lg:grid-cols-4 gap-4 lg:pt-16 sm:px-24">
          <div className="space-y-2 sm:space-y-4 ">
            <h1 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">
              Links
            </h1>
            <a
              href="#"
              className="block text-black text-xs sm:text-sm lg:text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-black text-xs sm:text-sm lg:text-base font-medium"
            >
              About Us
            </a>
          </div>
          <div className="space-y-2 sm:space-y-4">
            <h1 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">
              Legal
            </h1>
            <a
              href="#"
              className="block text-black text-xs sm:text-sm lg:text-base font-medium"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="block text-black text-xs sm:text-sm lg:text-base font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block text-black text-xs sm:text-sm lg:text-base font-medium"
            >
              Cookie Policy
            </a>
          </div>
          <div className="space-y-2 sm:space-y-4">
            <h1 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">
              Product
            </h1>
            <a
              href="#"
              className="block text-black text-xs sm:text-sm lg:text-base font-medium"
            >
              Take Tour
            </a>
            <a
              href="#"
              className="block text-black text-xs sm:text-sm lg:text-base font-medium"
            >
              Live Chats
            </a>
            <a
              href="#"
              className="block text-black text-xs sm:text-sm lg:text-base font-medium"
            >
              Reviews
            </a>
          </div>
          <div className="space-y-2 w-full sm:space-y-4 ">
            <h1 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">
              Newsletter
            </h1>
            <a
              href="#"
              className="block text-black text-xs sm:text-sm lg:text-base font-medium"
            >
              Stay Up to Date
            </a>
            <div className="hidden lg:block">
              <NewsLetterInput />
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <NewsLetterInput />
      </div>
      <div className=" text-center text-black font-semibold border-t border-gray-300 p-4">
        <p className="text-xs sm:text-sm lg:text-base mb-2">
          Empowering Restaurants with Cutting-Edge Solutions
        </p>
        <p className="text-xs sm:text-sm lg:text-base mt-2">
          Copyright {new Date().getFullYear()} ClearEats Inc. All rights
          reserved
        </p>
      </div>
    </div>
  )
}

export default Footer

const NewsLetterInput = () => {
  return (
    <div className="relative flex flex-col items-end lg:translate-x-16 xl:translate-x-0">
      <input
        type="email"
        placeholder="Your email"
        className="outline-none foxus:outline-none
        focus:ring-2 focus:ring-purple focus:ring-offset-2 focus:ring-offset-white
        rounded-full w-full h-10 sm:h-[3.4375rem] px-4 text-xs sm:text-sm shadow-sm lg:text-xs lg:w-[14rem] sm:block md:block"
      />
      <button className="absolute right-2  md:right-1 lg:right-2 sm:right-0 top-1/2 transform -translate-y-1/2 bg-secondary text-white rounded-full h-8 sm:h-[2.8125rem] lg:h-[2.5rem] lg:w-[6rem] lg:text-xs lg:px-5 px-4 sm:px-8  text-[10px] sm:text-sm  sm:block md:block ">
        Subscribe
      </button>
    </div>
  )
}
