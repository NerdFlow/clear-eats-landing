import Image from 'next/image';
import { FC } from 'react';
import clearEatsLogo from '../assets/svgs/landingpage/clear-eats footer.svg'; // Adjust the path as needed
import gmailIcon from '../assets/svgs/landingpage/gmailIcon.svg'; // Adjust the path as needed
import phoneIcon from '../assets/svgs/landingpage/phoneIcon.svg'; // Adjust the path as needed

const Footer: FC = () => {
    return (
        <div className="p-4 sm:p-12 font-poppins">
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-8 lg:space-y-0 lg:p-8">
                <div className="flex flex-col items-center lg:items-start space-y-2">
                    <div className="mb-4 mt-4">
                        <Image src={clearEatsLogo} className="w-60" alt="Logo" />
                    </div>

                    <div className="flex items-center lg:items-start space-x-2 leading-10">
                        <Image src={gmailIcon} alt="Gmail Icon" className="w-6 h-6" />
                        <span className="text-black font-medium">Nerdflow@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image src={phoneIcon} alt="Phone Icon" className="w-6 h-6" />
                        <span className="text-black font-medium">+1 234 456 678 89</span>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-x-1 lg:gap-x-2 pl-10 pt-8 -space-x-12">
                    <div className="space-y-2 lg:space-y-4">
                        <h1 className="font-semibold text-[14px] sm:text-[16px] lg:text-[18px]">Links</h1>
                        <a href="#" className="block text-black text-[10px] sm:text-[14px] lg:text-[16px] font-medium">
                            Home
                        </a>
                        <a href="#" className="block text-black text-[10px] sm:text-[14px] lg:text-[16px] font-medium">
                            About Us
                        </a>
                    </div>
                    <div className="space-y-2 lg:space-y-4">
                        <h1 className="font-semibold text-[14px] sm:text-[16px] lg:text-[18px] mb-2">Legal</h1>
                        <a href="#" className="block text-black text-[10px] sm:text-[14px] lg:text-[16px] font-medium">
                            Terms of Use
                        </a>
                        <a href="#" className="block text-black text-[10px] sm:text-[14px] lg:text-[16px] font-medium">
                            Privacy Policy
                        </a>
                        <a href="#" className="block text-black text-[10px] sm:text-[14px] lg:text-[16px] font-medium">
                            Cookie Policy
                        </a>
                    </div>
                    <div className="space-y-2 lg:space-y-4">
                        <h1 className="font-semibold text-[14px] sm:text-[16px] lg:text-[18px] mb-2">Product</h1>
                        <a href="#" className="block text-black text-[10px] sm:text-[14px] lg:text-[16px] font-medium">
                            Take Tour
                        </a>
                        <a href="#" className="block text-black text-[10px] sm:text-[14px] lg:text-[16px] font-medium">
                            Live Chats
                        </a>
                        <a href="#" className="block text-black text-[10px] sm:text-[14px] lg:text-[16px] font-medium">
                            Reviews
                        </a>
                    </div>
                    <div className="space-y-2 lg:space-y-4">
                        <h1 className="font-semibold text-[14px] sm:text-[16px] lg:text-[18px] mb-2">Newsletter</h1>
                        <a href="#" className="block text-black text-[10px] sm:text-[14px] lg:text-[16px] font-medium">
                            Stay Up to Date
                        </a>
                        <div className="relative flex flex-col md:flex-row items-center">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="border border-white rounded-full flex-grow md:w-96 w-[300px] h-[55px] shadow-2 mb-4 md:mb-0 p-6 hidden lg:block" 
                            />
                            <button className="absolute right-2 top-1 bottom-1 h-[45px] bg-secondary text-white rounded-full flex-shrink-0 w-[130px] hidden lg:block">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col items-center justify-center sm:mx-auto md:mx-auto lg:hidden mt-4">
                <input 
                    type="email" 
                    placeholder="Your email" 
                    className="border border-white rounded-full w-80 h-14 md:w-96 shadow-2 mb-4 md:mb-4 p-6 sm:block md:block" 
                />
                <button className="absolute right-14 sm:right-10 md:right-40 top-1 bottom-1 h-[45px] bg-secondary text-white rounded-full flex-shrink-0 w-[150px] sm:block md:block">Subscribe</button>
            </div>
            <div className="text-center text-black font-semibold border-t border-gray-400 p-2 lg:p-6 sm:p-0 md:p-6 leading-7 w-3/4 sm:w-full mx-auto ">
                <p className="text-sm sm:text-xs lg:text-[16px]">Empowering Restaurants with Cutting-Edge Solutions</p>
                <p className="text-sm sm:text-xs lg:text-[16px] mt-2">Copyright 2022 ClearEats inc. all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
