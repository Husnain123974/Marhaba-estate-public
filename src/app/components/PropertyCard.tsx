'use client';

import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import bedroom from "../../../public/icons/bedroom.svg";
import area from "../../../public/icons/area.svg";
import payment from "../../../public/icons/payment-plan.svg";
import { useRouter } from "next/navigation";  
import { calculateAEDS } from '@/utils/utils';
import { useDispatch } from 'react-redux';
import { setSelectedProperty } from '@/redux/slices/propertyDetailsSlice'; // Path to your slice


interface Property {
  id: string,
  builders: string;
  price: string | number;
  name: string;
  location: string;
  bedrooms: string;
  area: string;
  paymentplan: string;
  images: StaticImageData[] | string;
  amenities:string[];
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    // Dispatch the selected property to Redux store
    dispatch(setSelectedProperty(property));
    
    // Navigate to the property details page
    router.push(`/property/${property.id}`);
  };


  return (
    <div className="
      w-full
     
      h-[auto] bg-black p-4 rounded-lg transition-all duration-300"
      onClick={handleClick}
    >
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.builders}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full">
          <span className="text-black font-bold">{property.builders}</span>
        </div>
      </div>

      <div className="text-white mt-4">
        <p className="text-sm">Starting from</p>
        <h3 className="text-2xl font-bold">{calculateAEDS(property)}</h3>
        <p className="text-lg">{property.name}</p>
        <p className="text-sm text-gray-400">{property.location}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1">
            <Image src={bedroom} alt='bedroom' />
            <span className="text-base sm:text-sm">{property.bedrooms}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Image src={area} alt='area' />
            <span className="text-base sm:text-sm">
              {property.area}
              <span className="hidden 905px:inline"> Sq Ft</span>
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <Image src={payment} alt='payment plan' />
            <span className="text-base sm:text-sm">{property.paymentplan}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

 