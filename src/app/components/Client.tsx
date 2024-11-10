"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import clientImage from "../assets/images/clientImage.png"
import bgImageAction from "../assets/svgs/landingpage/Action-bg.svg"
import comma from "../assets/svgs/landingpage/comma.svg"
import leftArrow from "../assets/svgs/landingpage/leftarrow.svg"
import rightArrow from "../assets/svgs/landingpage/rightarrow.svg"
import star from "../assets/svgs/landingpage/star.svg"

const Client: FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  const bgImageActionUrl = `url(${bgImageAction.src})`
  const feedbacks = [
    {
      name: "John De marli",
      feedback:
        "We saw a 20% increase in customer satisfaction thanks to the easy-to-use loyalty program.",
    },
    {
      name: "Jane Smith",
      feedback:
        "The loyalty program helped us retain more customers and grow our business exponentially.",
    },
    {
      name: "Mike Johnson",
      feedback:
        "Our customer engagement increased significantly after implementing the loyalty program.",
    },
    {
      name: "Emily Davis",
      feedback:
        "The best investment we made this year was in the loyalty program. It paid off big time!",
    },
    {
      name: "David Lee",
      feedback:
        "Our customers love the rewards, and we love the repeat business. Win-win!",
    },
    {
      name: "Emily Davis",
      feedback:
        "The best investment we made this year was in the loyalty program. It paid off big time!",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3) // Default to 3

  const nextFeedback = () => {
    // Move to the next feedback or reset to the first if at the end
    if (currentIndex + itemsPerPage >= feedbacks.length) {
      setCurrentIndex(0) // Reset to first item
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1) // Move to the next item
    }
  }

  const prevFeedback = () => {
    // Move to the previous feedback or go to the last if at the start
    if (currentIndex === 0) {
      setCurrentIndex(feedbacks.length - itemsPerPage) // Go to the last set
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1) // Move to the previous item
    }
  }

  // Calculate the percentage to translate
  const translateXValue = -(currentIndex * (100 / itemsPerPage)) // Adjust translate percentage

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1) // Set to 1 for smaller screens
      } else {
        setItemsPerPage(3) // Set to 3 for larger screens
      }
    }

    updateItemsPerPage() // Initial check

    window.addEventListener("resize", updateItemsPerPage) // Update on resize
    return () => window.removeEventListener("resize", updateItemsPerPage) // Cleanup on unmount
  }, [])

  return (
    <div
      className="bg-cover overflow-hidden"
      style={{
        backgroundImage: bgImageActionUrl,
      }}
    >
      <div className="text-center">
        <h1 className="font-bold text-2xl sm:text-4xl  mt-10">
          What Our Happy Clients Say
        </h1>
        <p className="pt-1 sm:pt-2 md:pt-4 lg:pt-6 mb-8 font-medium text-sm">
          Trusted by Restaurants Around the World
        </p>
      </div>
      <div className="relative w-full flex justify-center">
        <div className="w-full overflow-hidden">
          {" "}
          {/* Ensure container is overflow-hidden */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateXValue}%)` }} // Apply transform
          >
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="bg-white w-[350px] sm:w-[400px] lg:w-[550px] h-[250px] 2xl:w-[610px] rounded-xl mt-8 flex-shrink-0 mx-2 shadow-2"
                data-aos="fade-zoom-in"
              >
                <div className="flex flex-col">
                  <div className="relative -mt-12 mx-auto">
                    <Image
                      src={clientImage}
                      alt="Client Image"
                      width={100} // Adjust width as needed
                      height={100} // Adjust height as needed
                    />
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <Image
                        src={comma}
                        alt="Comma Icon"
                        width={120}
                        className="pl-8"
                      />
                    </div>
                    <div className="flex flex-col pl-8 lg:pl-24 xl:pl-24 2xl:pl-24">
                      <Image src={star} alt="Star Rating" className="mb-2" />
                      <h1 className="font-bold text-center">{feedback.name}</h1>
                    </div>
                  </div>
                </div>
                <p className="text-black-greyish text-center p-6 leading-6">
                  {feedback.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Carousel Navigation */}
      <div className="flex space-x-2 items-center justify-center mt-6 mb-8">
        <button onClick={prevFeedback}>
          <Image
            src={leftArrow}
            alt="Previous"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
          />
        </button>
        <button onClick={nextFeedback}>
          <Image
            src={rightArrow}
            alt="Next"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
          />
        </button>
      </div>
    </div>
  )
}

export default Client
