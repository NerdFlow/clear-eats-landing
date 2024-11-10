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
            className="w-[5rem] sm:w-[7rem] md:w-[8rem] lg:w-[9rem]"
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
              <FaBars size={24} /> // Burger icon when menu is closed
            )}
          </button>
        </div>

        {/* Center Section for Medium and Large Screens */}
        <div className="hidden lg:flex md:flex justify-end flex-1 font-poppins py-4">
          <nav className="flex space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-4 ml-[0.25rem] sm:ml-[1.75rem] md:ml-[2rem] lg:ml-0">
            <a href="#HeroSection" className="text-white font-medium ">
              Home
            </a>
            <a href="#about" className="text-white font-medium ">
              About Us
            </a>
            <a href="#Subscription" className="text-white font-medium ">
              Pricing
            </a>
            <a href="#Features" className="text-white font-medium ">
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
            className="w-[5rem] sm:w-[7rem] md:w-[8rem] lg:w-[9rem]"
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
              <FaBars size={24} /> // Burger icon when menu is closed
            )}
          </button>
        </div>

        {/* Center Section for Medium and Large Screens */}
        <div className="hidden lg:flex md:flex justify-end flex-1 font-poppins py-4">
          <nav className="flex space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-4 ml-[0.25rem] sm:ml-[1.75rem] md:ml-[2rem] lg:ml-0">
            <a href="#HeroSection" className="text-white font-medium ">
              Home
            </a>
            <a href="#about" className="text-white font-medium ">
              About Us
            </a>
            <a href="#Subscription" className="text-white font-medium ">
              Pricing
            </a>
            <a href="#Features" className="text-white font-medium ">
              Features
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden max-w-[100%] overflow-x-hidden  md:hidden fixed inset-0  top-[4rem] left-0  bg-purple bg-opacity-95  text-white z-10 ">
          <nav
            className="flex flex-col items-center space-y-4 py-4"
            onClick={closeMenu}
          >
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
      )}
    </>
  )
}

export default Navbar
