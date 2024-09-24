import Image from "next/image";
import { FC } from "react";
import clearEatsLogo from "../assets/svgs/landingpage/clear-eats footer.svg"; // Adjust the path as needed
import gmailIcon from "../assets/svgs/landingpage/gmailIcon.svg"; // Adjust the path as needed
import phoneIcon from "../assets/svgs/landingpage/phoneIcon.svg"; // Adjust the path as needed

const Footer: FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-12 font-poppins">
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-8 lg:space-y-0 lg:p-8">
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <div className="mb-4 mt-4">
            <Image src={clearEatsLogo} className="w-[12rem] sm:w-[15rem]" alt="Logo" />
          </div>

          <div className="flex items-center space-x-2 leading-10">
            <Image
              src={gmailIcon}
              alt="Gmail Icon"
              className="w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem]"
            />
            <span className="text-black text-sm sm:text-base font-medium">Nerdflow@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src={phoneIcon}
              alt="Phone Icon"
              className="w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem]"
            />
            <span className="text-black text-sm sm:text-base font-medium">+1 234 456 678 89</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:pl-10 lg:gap-y-6 pt-8 pl-4 2xl:space-x-32 ">
          <div className="space-y-2 sm:space-y-4 2xl:pl-10">
            <h1 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">
              Links
            </h1>
            <a href="#" className="block text-black text-xs sm:text-sm lg:text-base font-medium">
              Home
            </a>
            <a href="#" className="block text-black text-xs sm:text-sm lg:text-base font-medium">
              About Us
            </a>
          </div>
          <div className="space-y-2 sm:space-y-4">
            <h1 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">
              Legal
            </h1>
            <a href="#" className="block text-black text-xs sm:text-sm lg:text-base font-medium">
              Terms of Use
            </a>
            <a href="#" className="block text-black text-xs sm:text-sm lg:text-base font-medium">
              Privacy Policy
            </a>
            <a href="#" className="block text-black text-xs sm:text-sm lg:text-base font-medium">
              Cookie Policy
            </a>
          </div>
          <div className="space-y-2 sm:space-y-4">
            <h1 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">
              Product
            </h1>
            <a href="#" className="block text-black text-xs sm:text-sm lg:text-base font-medium">
              Take Tour
            </a>
            <a href="#" className="block text-black text-xs sm:text-sm lg:text-base font-medium">
              Live Chats
            </a>
            <a href="#" className="block text-black text-xs sm:text-sm lg:text-base font-medium">
              Reviews
            </a>
          </div>
          <div className="space-y-2 sm:space-y-4 ">
            <h1 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">
              Newsletter
            </h1>
            <a href="#" className="block text-black text-xs sm:text-sm lg:text-base font-medium">
              Stay Up to Date
            </a>
            <div className="relative flex flex-col items-center">
              <input
                type="email"
                placeholder="Your email"
                className=" rounded-full w-full h-10 sm:h-[3.4375rem] px-4 text-[10px] shadow-sm lg:text-xs lg:w-[14rem] sm:block md:block"
              />
              <button className="absolute right-2  md:right-1 lg:right-2 sm:right-0 top-1/2 transform -translate-y-1/2 bg-secondary text-white rounded-full h-8 sm:h-[2.8125rem] lg:h-[2.5rem] lg:w-[6rem] lg:text-xs lg:px-5 px-4 sm:px-8  text-[10px] sm:text-sm  sm:block md:block ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-black font-semibold border-t border-gray-300 pt-8">
        <p className="text-xs sm:text-sm lg:text-base mb-2">
          Empowering Restaurants with Cutting-Edge Solutions
        </p>
        <p className="text-xs sm:text-sm lg:text-base mt-2">
          Copyright 2022 ClearEats Inc. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
