import "aos/dist/aos.css"
import Image from "next/image"
import { FC } from "react"
import allerguard from "../assets/images/allerguard.png"
import bgImageSolution from "../assets/images/Group.png"
import loyalty from "../assets/images/loyalty.png"
import management from "../assets/images/management.png"
import solution2 from "../assets/images/solution.png"
import line from "../assets/svgs/landingpage/line.svg"

const Solutions: FC = () => {
  const bgImageSolutionUrl = `url(${bgImageSolution.src})`

  return (
    <div
      className=" font-poppins max-w-full  overflow-x-hidden pt-36 sm:pt-[20%] md:pt-[16%] lg:pt-[20%] xl:pt-[12%] "
      id="about"
    >
      <div className="container">
        <div className="text-center p-4 sm:p-12" data-aos="fade-up">
          <h1 className="font-bold text-2xl sm:text-3xl xl:text-3.5xl text-black-greyish">
            The Solutions We Offer
          </h1>
          <p className="font-normal  text-ssm sm:text-sm ">
            Three Powerful Tools to Elevate Your Restaurant Experience
          </p>
        </div>

        <div className="flex flex-col  lg:flex-row justify-center lg:justify-evenly items-start space-y-8 sm:space-y-6 md:space-y-8 lg:space-y-0 p-2">
          <div
            className="w-full  lg:w-[17.5rem] text-center flex flex-col items-center mb-8 sm:mb-6 md:mb-8 lg:mb-0"
            data-aos="fade-up"
          >
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

          <Image src={line} className="hidden  md:block" alt="Divider" />

          <div
            className="w-full  lg:w-[17.5rem] text-center flex flex-col items-center mb-8 sm:mb-6 md:mb-8 lg:mb-0"
            data-aos="fade-up"
          >
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
              comprehensive management system. Keep your operations organized
              and running smoothly, all from one intuitive dashboard.
            </p>
          </div>

          <Image src={line} className="hidden  md:block" alt="Divider" />

          <div
            className="w-full  lg:w-[17.5rem] text-center flex flex-col items-center md:mt-6 lg:mt-0"
            data-aos="fade-up"
          >
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
              coming back for more, helping you boost revenue and enhance
              customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Empower Section */}
      <section className="bg-[#F9F7FE]">
        <div
          className="bg-cover"
          style={{ backgroundImage: bgImageSolutionUrl }}
        >
          <div className="container flex flex-col lg:flex-row items-center justify-center md:justify-between lg:justify-around p-6 sm:p-8 md:p-12 lg:p-20 mt-16 sm:mt-16 md:mt-18 lg:mt-20 gap-10 xl:gap-0">
            <div
              className="flex-none mb-2 sm:mb-6 md:mb-7 lg:mb-4"
              data-aos="fade-right"
            >
              <Image
                src={solution2}
                width={360}
                height={360}
                className="w-full sm:w-[360px] md:w-[550px] lg:w-[570px] h-auto"
                alt="Solutions Overview"
              />
            </div>
            <div
              className="flex-none max-w-[600px] text-center
          md:text-left
          md:max-w-[470px] lg:max-w-[30rem]"
              data-aos="fade-left"
            >
              <h1
                className="font-bold text-2xl mb-4 text-black-greyish sm:text-3xl  lg:max-w-[29rem]"
                style={{ lineHeight: "1.3" }}
              >
                Empowering Your Restaurant with Cutting-Edge Solutions
              </h1>
              <p className="mb-4 text-[14px] text-black-greyish font-normal sm:text-sm md:text-base lg:text-[14px] lg:text-left leading-snug sm:leading-normal lg:max-w-[22rem]">
                Clear Eats is the Go-to platform for Restaurants Looking to
                streamline their operations and elevate the customer experience.
                Our innovative tools make it easy to manage orders, track sales,
                and customize your offerings.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-purple text-white rounded-full font-bold text-xs p-4">
                  See How Clear Eats works!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
