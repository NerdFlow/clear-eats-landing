import Image from "next/image";
import { FC } from "react";

import allerguard from "../assets/images/allerguard.png";
import loyalty from "../assets/images/loyalty.png";
import management from "../assets/images/management.png";
import solution2 from "../assets/images/solution.png";
import line from "../assets/svgs/landingpage/line.svg";
import bgImageSolution from "../assets/svgs/landingpage/solutions2-bg.svg";

const Solutions: FC = () => {
  const bgImageSolutionUrl = `url(${bgImageSolution.src})`;
  return (
    <div
      className="bg-white font-poppins pt-28 sm:pt-60 md:pt-40 lg:pt-30 2xl:pt-80"
      id="about"
    >
      <div className="text-center p-4 sm:p-12 ">
        <h1 className="font-bold text-3xl mb-4 sm:text-4xl md:text-5xl lg:text-5xl text-black-greyish">
          The Solutions We Offer
        </h1>
        <p className="font-normal text-xs sm:text-sm md:text-base lg:text-sm">
          Three Powerful Tools to Elevate Your Restaurant Experience
        </p>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-wrap lg:flex-row justify-center lg:justify-evenly items-start space-x-0 sm:space-x-6 lg:-space-x-40 p-2">
        <div className="w-full sm:w-[17rem] md:w-[17.5rem] lg:w-[17.5rem] text-center flex flex-col items-center mb-8 sm:mb-6 md:mb-8 lg:mb-0">
          <Image
            src={allerguard}
            width={64}
            height={64}
            className="mb-4"
            alt="Allerguard"
          />
          <h1 className="font-bold text-xl text-black-greyish sm:text-xl md:text-2xl lg:text-2xl">
            Allerguard
          </h1>
          <h5 className="text-black-lightgreyish font-medium text-[12px] mb-2 sm:text-sm md:text-base lg:text-[14px]">
            Protect Your Customers and Your Brand
          </h5>
          <p
            className="text-xs text-gray-500 sm:text-xs md:text-sm lg:text-xs"
            style={{ lineHeight: "1.7" }}
          >
            Ensure that your menu meets the highest safety standards with our
            advanced allergen management system.
          </p>
        </div>

        <Image src={line} className="hidden lg:block md:block" alt="Divider" />

        <div className="w-full sm:w-[17rem] md:w-[17.5rem] lg:w-[17.5rem] text-center flex flex-col items-center mb-8 sm:mb-6 md:mb-8 lg:mb-0">
          <Image
            src={management}
            width={64}
            height={64}
            className="mb-4"
            alt="Management System"
          />
          <h1 className="font-bold text-xl text-black-greyish sm:text-xl md:text-2xl lg:text-2xl">
            Management System
          </h1>
          <h5 className="text-black-lightgreyish font-medium text-[12px] mb-2 sm:text-sm md:text-base lg:text-[14px]">
            Efficiency at Your Fingertips
          </h5>
          <p
            className="text-xs text-gray-500 sm:text-xs md:text-sm lg:text-xs"
            style={{ lineHeight: "1.7" }}
          >
            Manage orders, track sales, and monitor staff performance with our
            comprehensive management system. Keep your operations organized and
            running smoothly, all from one intuitive dashboard.
          </p>
        </div>

        <Image src={line} className="hidden lg:block" alt="Divider" />

        <div className="w-full sm:w-[17rem] md:w-[17.5rem] lg:w-[17.5rem] text-center flex flex-col items-center md:mt-6 lg:mt-0">
          <Image
            src={loyalty}
            width={64}
            height={64}
            className="mb-4"
            alt="Loyalty Program"
          />
          <h1 className="font-bold text-xl text-black-greyish sm:text-xl md:text-2xl lg:text-2xl">
            Loyalty Program
          </h1>
          <h5 className="text-black-lightgreyish font-medium text-[12px] mb-2 sm:text-sm md:text-base lg:text-[14px]">
            Build Lasting Relationships
          </h5>
          <p
            className="text-xs text-gray-500 sm:text-xs md:text-sm lg:text-xs"
            style={{ lineHeight: "1.7" }}
          >
            Our flexible loyalty program is designed to keep your customers
            coming back for more, helping you boost revenue and enhance customer
            satisfaction.
          </p>
        </div>
      </div>

      <div
        className="bg-cover flex flex-col lg:flex-row items-center justify-center md:justify-between lg:justify-around p-6 sm:p-8 md: lg:p-20 mt-16 sm:mt-16 md:mt-18 lg:mt-20"
        style={{ backgroundImage: bgImageSolutionUrl }}
      >
        <div className="flex-none mb-2 sm:mb-6 md:mb-7 lg:mb-4">
          <Image
            src={solution2}
            width={360}
            height={360}
            className="w-[360px] sm:w-[360px] md:w-[550px] lg:w-[570px] h-auto"
            alt="Solutions Overview"
          />
        </div>
        <div className="flex-none md:max-w-[470px] lg:max-w-[30rem]">
          <h1
            className="font-bold text-2xl mb-4 text-black-greyish sm:text-4xl md:text-4xl lg:text-4xl lg:max-w-[29rem]"
            style={{ lineHeight: "2.6rem" }}
          >
            Empowering Your Restaurant with Cutting-Edge Solutions
          </h1>
          <p className="mb-4 text-[14px] text-black-greyish font-normal w-[345px] sm:w-full sm:text-sm md:text-base lg:text-[14px] lg:text-left leading-snug sm:leading-normal lg:max-w-[22rem]">
            Clear Eats is the Go-to platform for Restaurants Looking to
            streamline their operations and elevate the customer experience. Our
            innovative tools make it easy to manage orders, track sales, and
            customize your offerings.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-purple text-white rounded-full w-[180px] h-[40px] font-bold text-xs sm:w-[180px] sm:h-[40px] md:w-[190px] md:h-[43px] lg:w-[200px] lg:h-[45px]">
              See How Clear Eats works!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
