"use client"
import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

import header from "../assets/svgs/landingpage/clear-eats header.svg"
import Image from "next/image"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.querySelector(".navbar").classList.add("fixed")
      } else {
        document.querySelector(".navbar").classList.remove("fixed")
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Disable scroll when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }

    // Clean up by enabling scrolling when component is unmounted or menu closes
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflowY = "auto"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <>
      <div className="navbar transition-all h-[1.25rem] sm:h-[1.875rem] md:h-[2.5rem] lg:h-[3.75rem] flex items-center justify-between p-8 sm:p-10 md:p-14 lg:p-16 pt-10 ">
        <div className="flex items-center">
          <Image
            src={header}
            width={140}
            height={40}
            className="w-[100px] sm:w-[7rem] md:w-[8rem] lg:w-[9rem]"
            alt="Clear Eats Logo"
          />
        </div>

        {/* Burger Menu Icon for Small Screens */}
        <div className="lg:hidden md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes size={24} /> // Close icon when menu is open
            ) : (
              <BurgerMenuIcon />
            )}
          </button>
        </div>

        {/* Center Section for Medium and Large Screens */}
        <div className="hidden lg:flex md:flex justify-end flex-1 font-poppins py-4">
          <nav className="flex space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-4 ml-[0.25rem] sm:ml-[1.75rem] md:ml-[2rem] lg:ml-0">
            <a
              href="#HeroSection"
              className="text-white font-medium hover:opacity-80 px-3 "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-medium hover:opacity-80 px-3 "
            >
              About Us
            </a>
            <a
              href="#Subscription"
              className="text-white font-medium hover:opacity-80 px-3"
            >
              Pricing
            </a>
            <a
              href="#Features"
              className="text-white font-medium hover:opacity-80 px-3"
            >
              Features
            </a>
          </nav>
        </div>
      </div>

      <div className=" transition-all h-[1.25rem] sm:h-[1.875rem] md:h-[2.5rem] lg:h-[3.75rem] flex items-center justify-between p-8 sm:p-10 md:p-14 lg:p-16 pt-10 ">
        <div className="flex items-center">
          <Image
            src={header}
            width={140}
            height={40}
            className="w-[100px] sm:w-[7rem] md:w-[8rem] lg:w-[9rem]"
            alt="Clear Eats Logo"
          />
        </div>

        {/* Burger Menu Icon for Small Screens */}
        <div className="lg:hidden md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes size={24} /> // Close icon when menu is open
            ) : (
              <BurgerMenuIcon />
            )}
          </button>
        </div>

        {/* Center Section for Medium and Large Screens */}
        <div className="hidden lg:flex md:flex justify-end flex-1 font-poppins py-4">
          <nav className="flex space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-4 ml-[0.25rem] sm:ml-[1.75rem] md:ml-[2rem] lg:ml-0">
            <a
              href="#HeroSection"
              className="text-white font-medium
            hover:opacity-100 opacity-90  px-3 py-2 rounded-lg hover:bg-purple
            "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-medium hover:opacity-100 opacity-90 px-3 py-2 rounded-lg hover:bg-purple "
            >
              About Us
            </a>
            <a
              href="#Subscription"
              className="text-white font-medium hover:opacity-100 opacity-90 px-3 py-2 rounded-lg hover:bg-purple "
            >
              Pricing
            </a>
            <a
              href="#Features"
              className="text-white font-medium hover:opacity-100 opacity-90 px-3 py-2 rounded-lg hover:bg-purple "
            >
              Features
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`${
          !isMenuOpen ? "animate-hide-navbar " : "animate-show=navbar"
        }  nav-mobile-menu
        `}
      >
        <nav className="nav-mobile  " onClick={closeMenu}>
          <a href="#HeroSection" className="text-white text-lg font-medium">
            Home
          </a>
          <a
            href="#about"
            className="text-white text-lg font-medium"
            onClick={closeMenu}
          >
            About Us
          </a>
          <a
            href="#Subscription"
            className="text-white text-lg font-medium"
            onClick={closeMenu}
          >
            Pricing
          </a>
          <a
            href="#Features"
            className="text-white text-lg font-medium"
            onClick={closeMenu}
          >
            Features
          </a>
        </nav>
      </div>
    </>
  )
}

export default Navbar

const BurgerMenuIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2180_20269)">
        <rect x="1" y="0.5" width="19" height="19" rx="3.8" fill="white" />
        <path
          d="M5.94141 6.76953H15.2514"
          stroke="#9161E3"
          stroke-width="0.76"
          stroke-linecap="round"
        />
        <path
          d="M5.94141 9.90039H11.2614"
          stroke="#9161E3"
          stroke-width="0.76"
          stroke-linecap="round"
        />
        <path
          d="M5.94141 13.0391H15.2514"
          stroke="#9161E3"
          stroke-width="0.76"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2180_20269"
          x="0.24"
          y="0.5"
          width="20.52"
          height="20.52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.76" />
          <feGaussianBlur stdDeviation="0.38" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2180_20269"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2180_20269"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
