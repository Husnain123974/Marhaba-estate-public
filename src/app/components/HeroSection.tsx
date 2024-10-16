import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/images/hero.png";
import searchSVG from "../../../public/icons/search.svg";

const HeroSection = () => {
  return (
    <div className="bg-black text-white w-full flex flex-col md:flex-row items-stretch px-4 md:px-4 py-4 gap-y-8 md:gap-x-2 min-h-[60vh] lg:h-[43rem]">
      {" "}
      {/* Left Section with Text */}
      <div className="flex-1 flex flex-col justify-center bg-[rgba(30,30,30,1)] p-8 md:p-12 gap-8 rounded-[24px] w-full">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Navigating Real <br className="hidden md:block" /> Estate with{" "}
          <br className="hidden md:block" /> Confidence
        </h1>

        {/* Search Section */}
        <div className="flex border border-[rgba(205,205,205,0.1)] items-center bg-[rgba(20,20,22,1)] rounded-[22px] overflow-hidden max-w-lg w-full shadow-md">
          <select className="bg-[rgba(20,20,22,1)] text-[rgba(174,174,174,1)] p-3 md:p-4 outline-none text-sm md:text-base">
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="office">Office</option>
          </select>

          <input
            type="text"
            placeholder="Search for the city, community"
            className="custom-placeholder border-l border-[rgba(205,205,205,0.1)] ml-5 bg-[rgba(20,20,22,1)] flex-1 p-2 md:p-4 outline-none text-sm md:text-base"
            style={{ minWidth: "50px" }}
          />

          <button className="bg-[#B08A4D] p-[0.75rem] md:p-4 flex items-center justify-center flex-shrink-0">
            <Image
              src={searchSVG}
              alt="search"
              width={20}
              height={20}
              className="md:w-6 md:h-6"
            />
          </button>
        </div>
      </div>
      {/* Right Section with Image */}
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <Image
          src={HeroImg}
          alt="Real Estate"
          layout="intrinsic"
          width={550}
          height={700}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
