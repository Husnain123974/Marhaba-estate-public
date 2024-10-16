 
"use client";
import SearchBar from "../../components/SearchBar";
import PropertyCard from "../../components/PropertyCard";
import property1 from "../../../../public/images/property-1.png";
import property2 from "../../../../public/images/property-2.png";
import property3 from "../../../../public/images/property-3.png";
import mapSVG from "../../../../public/icons/map.svg";
import downArrow from "../../../../public/icons/downarrow.svg";
import stack from "../../../../public/icons/stack.svg";
import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";
import { useState } from "react";
import Pagination from "@/app/components/Pagination";

// These are hard coded values, will remove once done with backend
const properties = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    title: 'Imtiaz Properties',
    price: 'AED 1.5 Million',
    name: 'Beach Walk Residence',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: '1 & 2',
    size: '500 to 1500',
    paymentPlan: '30/70',
    image: property1,  
  },
  {
    id: '550e8400-e29b-41d4-a716-446655441000',
    title: 'Binghatti Developer',
    price: 'AED 900K',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: '1 & 2',
    size: '500 to 1500',
    paymentPlan: '30/70',
    image: property2,   
  },
  {
    id: '550e8400-e29b-41d4-a716-446655442000',
    title: 'Iman Developer',
    price: 'AED 1.2 Million',
    name: 'One Sky Park',
    location: 'JVC, Dubai',
    bedrooms: '1 & 2',
    size: '500 to 1500',
    paymentPlan: '30/70',
    image: property3,   
  },
  {
    id: '550e8400-e29b-41g4-a716-446655441000',
    title: 'Goraya Developer',
    price: 'AED $900',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: '1 & 2',
    size: '500 to 1500',
    paymentPlan: '30/70',
    image: property2,   
  },
  {
    id: '550e8400-e29b-41g4-a716-446655447000',
    title: 'Ati Developer',
    price: 'AED $900',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: '1 & 2',
    size: '500 to 1500',
    paymentPlan: '30/70',
    image: property2,   
  },
  {
    id: '550e8400-e29b-41g4-a716-446655448000',
    title: 'Husiqa Developer',
    price: 'AED $900',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: '1 & 2',
    size: '500 to 1500',
    paymentPlan: '30/70',
    image: property2,   
  },
  {
    id: '550e8400-e29b-41g4-a716-446655449000',
    title: 'Sono Developer',
    price: 'AED $900',
    name: 'Binghatti Royale',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    bedrooms: '1 & 2',
    size: '500 to 1500',
    paymentPlan: '30/70',
    image: property1,   
  },
];



export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="bg-black pt-[13vh] px-[3rem]">
      <div>
        {/* Search bar */}
        <SearchBar />
        <div className="pt-5">
          <div className="w-full">
            {/* Header Section */}
            <div className="flex items-center justify-between  p-5">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">Our Projects</h2>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Map View Button */}
                <button className="flex items-center space-x-2 text-gradient px-4 py-2 rounded-full border-2 border-[#B58D40] hover:bg-transparent hover:text-[#B58D40] transition duration-300">
                  <Image src={mapSVG} alt="map" className="h-5 w-5" />
                  <span>Map View</span>
                </button>

                {/* Dropdown */}
                <div className="relative flex items-center w-full sm:w-[12.5rem]">
                  {/* Stack Icon */}
                  <div className="absolute left-3 flex items-center pointer-events-none">
                    <Image src={stack} alt="stack" />
                  </div>
                  <select
                    className="w-full h-[3rem] appearance-none bg-transparent text-white text-sm font-medium pl-10 pr-10 rounded-[12px] hover:bg-transparent hover:text-[#B58D40] transition duration-300 cursor-pointer"
                    style={{ border: "1px solid rgba(197, 201, 208, 0.3)" }}
                  >
                    <option>Most Recent</option>
                    <option>Oldest First</option>
                    <option>Most Popular</option>
                  </select>
                  {/* Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <Image src={downArrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 673px:grid-cols-1  sm:grid-cols-2 1160px:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
              {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>

            {/* add pagination here  */}
            <div className="min-h-[10vh] flex items-center justify-center bg-black">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
