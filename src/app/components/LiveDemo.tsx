import "aos/dist/aos.css"
import { FC } from "react"
import bgImageLiveDemo from "../assets/svgs/landingpage/LiveDemo-bg.svg" // Adjust the path as needed

const LiveDemo: FC = () => {
  const bgImageLiveDemoUrl = `url(${bgImageLiveDemo.src})`

  return (
    <div
      className="p-8 sm:p-12 md:p-16 lg:p-20 bg-cover max-w-full"
      style={{
        backgroundImage: bgImageLiveDemoUrl,
      }}
    >
      <div
        className="text-center text-white flex gap-4 flex-col justify-center"
        data-aos="fade-up"
      >
        <h1
          className="font-bold text-2xl sm:text-4xl "
          style={{ lineHeight: "1.2" }}
        >
          Love our Solution? <br /> Try it now
        </h1>
        <p className=" text-ssm sm:text-lg">
          Clear Eats: Your All-in-One Restaurant Management Solution
        </p>
        <div className="flex justify-center text-center">
          <button className=" mt-3 text-purple bg-white rounded-full p-3 px-[40px] font-bold hover:bg-purple-500 hover:text-white hover:bg-[#7452BA] duration-150 ease-in">
            Try Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default LiveDemo
