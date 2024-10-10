

import PropertyCard from '../components/PropertyCard'; 
import property1 from "../../../public/images/property-1.png";
import property2 from "../../../public/images/property-2.png";
import property3 from "../../../public/images/property-3.png";
import nextSVG from "../../../public/icons/next.svg"
import backSVG from "../../../public/icons/back-arrow.svg"

import Image from 'next/image';
const FeaturedProperties = () => {
 
  const properties = [
    {
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
      title: 'Binghatti Developer',
      price: 'AED 900K',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image:  property2,   
    },
    {
      title: 'Iman Developer',
      price: 'AED 1.2 Million',
      name: 'One Sky Park',
      location: 'JVC, Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: property3,   
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6 p-5">
        <h2 className="text-4xl font-bold text-white">Featured Properties</h2>

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

export default FeaturedProperties;
