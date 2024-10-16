
'use client'

import { useState } from 'react';
import PropertyCard from './PropertyCard';
import Image, { StaticImageData } from 'next/image';
import nextSVG from "../../../public/icons/next.svg";
import backSVG from "../../../public/icons/back-arrow.svg";
// Define types for the properties and the component props
type Property = {
  id: string;
  title: string;
  price: string;
  name: string;
  location: string;
  bedrooms: string;
  size: string;
  paymentPlan: string;
  image: string | StaticImageData;
};

interface PropertiesProps {
  properties: Property[];
  headerText: string;
}

const Properties: React.FC<PropertiesProps> = ({ properties, headerText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCardsCount = 3; // Number of cards to show at a time

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCardsCount < properties.length ? prevIndex + visibleCardsCount : 0
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - visibleCardsCount : prevIndex - visibleCardsCount
    );
  };

  // Get the currently visible properties
  const visibleProperties = properties.slice(currentIndex, currentIndex + visibleCardsCount);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between p-5">
        <h2 className="text-4xl font-bold text-white">{headerText}</h2>

         {/* Navigation Arrows */}
         <div className="flex space-x-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center" onClick={handleBack}>
            <Image src={backSVG} alt="back svg" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center" onClick={handleNext}>
            <Image src={nextSVG} alt="next svg" />
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 673px:grid-cols-1 sm:grid-cols-2 1160px:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-8">
        {visibleProperties.map((property) => (
          <PropertyCard key={property.id} property={property}   />
        ))}
      </div>
    </div>
  );
};

export default Properties;
