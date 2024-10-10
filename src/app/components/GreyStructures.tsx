// pages/FeaturedProperties.tsx
import PropertyCard from '../components/PropertyCard';
import img1 from "../../../public/images/grey-1.png"
import img2 from "../../../public/images/grey-2.png"
import img3 from "../../../public/images/grey-3.png"
import nextSVG from "../../../public/icons/next.svg"
import backSVG from "../../../public/icons/back-arrow.svg"

import Image from 'next/image';
const GreyStructures = () => {
  // Array of property data
  const properties = [
    {
      title: 'Imtiaz Properties',
      price: 'AED 1.5 Million',
      name: 'Beach Walk Residence',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: img1, // Add the path to your image
    },
    {
      title: 'Binghatti Developer',
      price: 'AED 900K',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image:  img2, // Add the path to your image
    },
    {
      title: 'Iman Developer',
      price: 'AED 1.2 Million',
      name: 'One Sky Park',
      location: 'JVC, Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: img3, // Add the path to your image
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6 p-5">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white">Grey Structures</h2>

        {/* Navigation Arrows */}
        <div className="flex space-x-4">
          {/* Left Arrow */}
          <button className="w-10 h-10   rounded-full flex items-center justify-center">
            <Image src={backSVG} alt='back svg '/>
          </button>

          {/* Right Arrow */}
          <button className="w-10 h-10   rounded-full flex items-center justify-center">
          <Image src={nextSVG} alt='next svg '/>
          </button>
        </div>
      </div>

    {/* Cards Section */}
    <div className="grid grid-cols-1 673px:grid-cols-1  sm:grid-cols-2 1160px:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
    </div>

    </div>
  );
};

export default GreyStructures;
