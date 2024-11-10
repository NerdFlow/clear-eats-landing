"use client"

import React, { lazy, useEffect, useState } from "react"

import Image from "next/image"
import logo from "../assets/brand-logos/favicon-light.png"
import defaultLayoutBg from "../assets/images/Frame.png"
import loader from "../assets/brand-logos/loaderSpinner.png"

interface ILoaderProps {
  show?: boolean | undefined
  loaderBgImage?: string | null
  loaderText?: string
  loading?: boolean
  className?: string
  backgroundColor?: string | null
  children?: React.ReactNode
}

function ClearEatsSplashLoader({
  show = true,
  loaderBgImage,
  loaderText,
  className,
  backgroundColor,
  children,
}: ILoaderProps): JSX.Element {
  const [showLoader, setShowLoader] = useState(true)
  useEffect(() => {
    if (show == true) {
      setShowLoader(true)
      return
    } else if (show == false) {
      const screenLoader = document.getElementsByClassName("screen_loader")
      if (screenLoader?.length) {
        screenLoader[0].classList.add("animate__fadeOut")
        setTimeout(() => {
          setShowLoader(false)
        }, 1000)
      }
    }
  }, [show])

  return (
    <>
      {showLoader ? (
        <div
          style={{
            backgroundImage: `url(${loaderBgImage || defaultLayoutBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "multiply",
          }}
          className={`${className} screen_loader  fixed inset-0 grid place-content-center animate__animated`}
        >
          <div
            style={{ backgroundColor: `${backgroundColor}D1` }}
            className="screen_loader  fixed inset-0 bg-purple/50  dark:bg-[#060818] z-[60] grid place-content-center animate__animated"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                className="animate object-scale-down w-28"
                src={logo}
                alt="loading"
              />
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="text-white text-center font-semibold text-sm font-poppins">
                  {loaderText || "Loading..."}
                </div>

                <Image
                  className="animate animate__animated animate__infinite animate-spin animate object-scale-down w-7 "
                  src={loader}
                  alt="loading"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        children && children
      )}
    </>
  )
}

export default ClearEatsSplashLoader
