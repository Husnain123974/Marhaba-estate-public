 

import Image from "next/image";
import searchSVG from "../../../public/icons/search.svg";

export default function SearchBar() {
    return (
        <div className="flex items-center bg-[#141416] rounded-[16px] border border-white/15 overflow-hidden max-w-8xl w-full shadow-md">
        <select className="bg-[#141416] text-[#AEAEAE] p-3 md:p-4 border-r border-gray-700 outline-none text-sm md:text-base">
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="office">Office</option>
        </select>

        <input
          type="text"
          placeholder="Search for the city, community"
          className="bg-[#141416] flex-1 p-2 md:p-4 text-[#AEAEAE] placeholder-gray-400 outline-none text-sm md:text-base"
          style={{ minWidth: "50px" }} 
        />

        <button className="bg-custom-gradient p-[0.75rem] md:p-4 flex items-center justify-center flex-shrink-0">
          <Image src={searchSVG} alt="search" width={20} height={20} className="md:w-6 md:h-6" />
        </button>
      </div>
    );
}

