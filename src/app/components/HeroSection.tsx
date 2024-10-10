
// import React from "react"; // Ensure this is imported
// import Image from "next/image";
// import HeroImg from "../../../public/images/hero.png"; // Make sure the image path is correct

// const HeroSection = () => {
//   return (
//     <div className="bg-black text-white w-full flex flex-col md:flex-row items-stretch px-4 md:px-16 py-12 h-auto gap-y-8 md:gap-x-2">
//       {/* Left Section with Text */}
//       <div className="flex-1 flex flex-col justify-center bg-[#1E1E1E] p-8 md:p-12 gap-8 rounded-[24px] w-full">
//         <h1 className="text-3xl md:text-6xl font-bold leading-tight">
//           Navigating Real <br className="hidden md:block" /> Estate with <br className="hidden md:block" /> Confidence
//         </h1>

//         {/* Search Section */}
//         <div className="flex items-center bg-gray-900 rounded-full overflow-hidden max-w-lg w-full shadow-md">
//           <select className="bg-transparent text-white p-4 border-r border-gray-700 outline-none">
//             <option value="">Property Type</option>
//             <option value="apartment">Apartment</option>
//             <option value="house">House</option>
//             <option value="office">Office</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Search for the city, community"
//             className="bg-transparent flex-1 p-4 text-white placeholder-gray-400 outline-none"
//           />

//           <button className="bg-[#ab8235] p-4 flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-6 h-6 text-white"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.25-1.25l4.35 4.35z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Right Section with Image */}
//       <div className="flex-1 flex justify-center md:justify-end w-full">
//         <Image
//           src={HeroImg}
//           alt="Real Estate"
//           layout="intrinsic"
//           width={600}
//           height={800}
//           className="rounded-xl object-cover w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/images/hero.png"; // Make sure the image path is correct

const HeroSection = () => {
  return (
    <div className="bg-black text-white w-full flex flex-col md:flex-row items-stretch px-4 md:px-16 py-12 h-auto gap-y-8 md:gap-x-2">
      {/* Left Section with Text */}
      <div className="flex-1 flex flex-col justify-center bg-[#1E1E1E] p-8 md:p-12 gap-8 rounded-[24px] w-full">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Navigating Real <br className="hidden md:block" /> Estate with <br className="hidden md:block" /> Confidence
        </h1>

        {/* Search Section */}
        <div className="flex items-center bg-gray-900 rounded-full overflow-hidden max-w-lg w-full shadow-md">
          <select className="bg-transparent text-white p-3 md:p-4 border-r border-gray-700 outline-none text-sm md:text-base">
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="office">Office</option>
          </select>

          <input
            type="text"
            placeholder="Search for the city, community"
            className="bg-transparent flex-1 p-3 md:p-4 text-white placeholder-gray-400 outline-none text-sm md:text-base"
          />

          <button className="bg-[#ab8235] p-3 md:p-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 text-white"  
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.25-1.25l4.35 4.35z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <Image
          src={HeroImg}
          alt="Real Estate"
          layout="intrinsic"
          width={600}
          height={800}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
