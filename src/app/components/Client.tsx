"use client";
import Image from "next/image";
import { FC, useState } from "react";

import bgImageAction from '../assets/svgs/landingpage/Action-bg.svg';
import clientImage from '../assets/svgs/landingpage/ClientImage.svg';
import comma from '../assets/svgs/landingpage/comma.svg';
import leftArrow from '../assets/svgs/landingpage/leftarrow.svg';
import rightArrow from '../assets/svgs/landingpage/rightarrow.svg';
import star from '../assets/svgs/landingpage/star.svg';

const Client: FC = () => {
  const bgImageActionUrl = `url(${bgImageAction.src})`;
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
    {
      name: "David Lee",
      feedback:
        "Our customers love the rewards, and we love the repeat business. Win-win!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length
    );
  };

  const getFeedbackItems = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % feedbacks.length;
      items.push(feedbacks[index]);
    }
    return items;
  };

  return (
    
    <div
      className="bg-cover overflow-hidden"
      style={{
        backgroundImage: bgImageActionUrl,
    }}
    >
      <div className="text-center">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-4xl lg:text-6xl mt-10">
          What Our Happy Clients Say
        </h1>
        <p className="pt-1 sm:pt-2 md:pt-4 lg:pt-6 mb-8 font-semibold text-sm">
          Trusted by Restaurants Around the World
        </p>
      </div>
      <div className="relative w-full flex justify-center">
        <div
          className="flex flex-row gap-2 mt-10 mb-10 transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {getFeedbackItems().map((feedback, index) => (
            <div
              key={index}
              className="bg-white w-[550px] h-[250px] rounded-xl mt-8 flex-shrink-0 mx-2 shadow-2"
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
                  <div className="flex flex-col pl-24">
                    <Image
                      src={star}
                      alt="Star Rating"
                      className="mb-2"
                    />
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
  );
};

export default Client;
