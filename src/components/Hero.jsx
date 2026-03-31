import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { HiOutlinePlayCircle } from "react-icons/hi2";

import heroImg from "../assets/banner.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden  ">
      {/* Background blur circle */}

      <div className="max-w-6xl mx-auto py-20 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1 space-y-7">
          {/* Badge */}
          <div className="bg-[#e1e7ffFF] shadow-sm  rounded-full px-5 py-2 flex items-center gap-2 text-sm w-fit ">
            <FaRegDotCircle className="text-purple-500" />
            <span className="text-purple-600 font-medium bg">
              New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Supercharge Your <br />
            <span className="text-black">
              Digital Workflow
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-md ">
            Access premium AI tools, templates, and productivity software—
            everything you need to build faster and smarter.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white px-7 py-3 rounded-full font-medium shadow-lg cursor-pointer">
              Explore Products
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 cursor-pointer ">
              <HiOutlinePlayCircle className="text-xl text-purple-500" />
             <span className="bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-transparent bg-clip-text ">Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-end relative ">
          <div className="absolute w[350px] h[350px] bg-purple-200 rounded-full blur-3xl opacity-40 "></div>

          <img
            src={heroImg}
            alt="hero"
            className="relative w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;