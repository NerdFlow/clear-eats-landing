"use client";
import Image from "next/image";
import { FC } from "react";

import bgImageSubscription from "../assets/images/image.jpeg";
import tick from "../assets/svgs/landingpage/tick.svg";
import whitetick from "../assets/svgs/landingpage/whitetick.svg";

const Subscription: FC = () => {
  return (
    <div className="p-6 sm:p-10 md:p-10 bg-white" id="Subscription">
      <div className="text-center mb-6 md:mb-8 px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-6">
          Choose the Right Plan for Your Business
        </h1>
        <p className="mt-4 pb-6 md:pb-12 font-normal">
          Flexible Pricing to Fit Your Needs
        </p>
      </div>
      <div>
        <div className="font-inter flex flex-col lg:flex-row md:flex-col items-center space-y-6 md:space-y-6 md:space-x-5 justify-center">
          {/* Silver Plan */}
          <div className="flex flex-col p-6 md:p-8 bg-white border-2 border-purple rounded-2xl w-full h-[340px] sm:h-[360px]">
            <h3 className="text-lg sm:text-xl font-bold text-black-greyish">
              Silver
            </h3>
            <p className="text-gray-600 mb-1 text-sm sm:text-md">
              Billed at $35.99/year that's like
            </p>
            <h1 className="text-black-greyish font-extrabold text-3xl sm:text-4xl pt-3 mb-2">
              $35
              <span className="text-base sm:text-lg font-semibold">/month</span>
            </h1>
            <h2 className="text-sm sm:text-md font-medium text-gray-600 mb-4">
              Get our All Premium features
            </h2>
            <div className="flex flex-col leading-7">
              <div className="flex flex-row items-center">
                <Image
                  src={tick}
                  className="w-4 sm:w-5"
                  alt="tick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-black-lightblack ml-2">
                  Digital Menu Management
                </p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  src={tick}
                  className="w-4 sm:w-5"
                  alt="tick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-black-lightblack ml-2">
                  Allergen Management
                </p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  src={tick}
                  className="w-4 sm:w-5"
                  alt="tick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-black-lightblack ml-2">
                  QR Code Display for Menus
                </p>
              </div>
            </div>
            <button className="text-secondary font-semibold py-2 px-4 rounded-md w-full h-12 sm:h-14 mt-4 text-sm sm:text-md border border-secondary hover:bg-secondary hover:text-white transition-colors duration-150 ease-in">
              Proceed to Checkout
            </button>
          </div>

          <div
            className="relative flex flex-col p-6 md:p-8  w-full h-[390px] sm:h-[410px] rounded-2xl mx-auto -mt-5 md:-mt-7"
            style={{
              backgroundImage: `url(${bgImageSubscription.src})`,
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat", 
              filter: "brightness(1.2) contrast(1.1)",
            }}
          >
            <button className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-danger-light font-bold py-2 px-4 rounded-md w-32 sm:w-36 h-8 sm:h-10 text-xs sm:text-sm bg-secondary border border-white">
              Best Deal
            </button>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Platinum
            </h3>
            <p className="mb-1 text-white text-sm sm:text-md">
              Billed today at
            </p>
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl pt-3 mb-2">
              $65
              <span className="text-base sm:text-lg font-semibold">/month</span>
            </h1>
            <h2 className="text-sm sm:text-md font-medium text-white mb-6">
              Get our All Premium features
            </h2>
            <div className="flex flex-col leading-7">
              <div className="flex flex-row items-center">
                <Image
                  src={whitetick}
                  className="w-4 sm:w-5"
                  alt="whitetick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-white ml-2">
                  All Silver Package Features
                </p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  src={whitetick}
                  className="w-4 sm:w-5"
                  alt="whitetick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-white ml-2">
                  24/7 Customer Support
                </p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  src={whitetick}
                  className="w-4 sm:w-5"
                  alt="whitetick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-white ml-2">
                  Order Management (OMS)
                </p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  src={whitetick}
                  className="w-4 sm:w-5"
                  alt="whitetick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-white ml-2">
                  Real-Time Sales & Analytics
                </p>
              </div>
            </div>
            <button className="text-white font-bold py-2 px-4 rounded-md w-full h-12 sm:h-14 text-sm sm:text-md bg-secondary mt-6 hover:bg-white hover:text-purple transition-colors duration-150 ease-in">
              Proceed to Checkout
            </button>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col p-6 md:p-8 bg-white border-2 border-purple rounded-2xl w-full h-[340px] sm:h-[360px] mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-black-greyish">
              Premium
            </h3>
            <p className="text-gray-600 mb-1 text-sm sm:text-md">
              Billed today at
            </p>
            <h1 className="text-black-greyish font-extrabold text-3xl sm:text-4xl pt-3 mb-2">
              $125
              <span className="text-base sm:text-lg font-semibold">/month</span>
            </h1>
            <h2 className="text-sm sm:text-md font-medium text-gray-600 mb-4">
              Get our All Premium features
            </h2>
            <div className="flex flex-col leading-7">
              <div className="flex flex-row items-center">
                <Image
                  src={tick}
                  className="w-4 sm:w-5"
                  alt="tick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-black-lightblack ml-2">
                  All Platinum Package Features
                </p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  src={tick}
                  className="w-4 sm:w-5"
                  alt="tick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-black-lightblack ml-2">
                  Advanced QR Code Ordering
                </p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  src={tick}
                  className="w-4 sm:w-5"
                  alt="tick"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-md font-medium text-black-lightblack ml-2">
                  Custom Branding for Menus
                </p>
              </div>
            </div>
            <button className="text-secondary font-semibold py-2 px-4 rounded-md w-full h-12 sm:h-14 mt-4 text-sm sm:text-md border border-secondary hover:bg-secondary hover:text-white transition-colors duration-150 ease-in">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
