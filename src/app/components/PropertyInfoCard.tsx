
import Image from 'next/image';
import location from"../../../public/icons/map.svg";
import download from"../../../public/icons/download.svg";
import bed from"../../../public/icons/bedroom.svg";
import area from"../../../public/icons/area.svg";
import payment from"../../../public/icons/payment-plan.svg";
import { calculateAEDS } from '@/utils/utils';
 
const PropertyInfo = ({property}) => {

 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    // Get day, month, and year
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // 'Dec'
    const year = date.getFullYear();
  
    // Function to get the correct ordinal suffix for the day
    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return 'th'; // Covers 11th, 12th, 13th...
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    // Construct the formatted date string
    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
  };
  
 
  return (
    <div className="bg-[rgba(30,30,30,1)] text-white p-6 rounded-[12px]">
      {/* Price and Buttons */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-4">
        <div>
          <p className="text-sm md:text-xs sm:text-xs text-gray-400">Starting from</p>
          <h2 className="text-4xl md:text-3xl sm:text-xl 673px:text-sm font-bold">AED {calculateAEDS(property.price)}</h2>
        </div>
        <div className="flex space-x-4">
          <button className=" flex items-center space-x-2 text-gradient 440:px-2 px-4 py-2 sm:px-2 sm:py-1 rounded-full border-2 border-[#B58D40] hover:bg-transparent hover:text-[#B58D40] transition duration-300 text-sm md:text-xs sm:text-xs">
            <Image src={download} alt="map" className="h-5 w-5" />
            <span className='440:text-[8px]' >BROCHURE</span>
          </button>
          <button className="flex items-center space-x-2 text-gradient 440:px-2  px-4 py-2 sm:px-2 sm:py-1 rounded-full border-2 border-[#B58D40] hover:bg-transparent hover:text-[#B58D40] transition duration-300 text-sm md:text-xs sm:text-xs">
            <Image src={download} alt="map" className="h-5 w-5" />
            <span className='440:text-[8px] ' >FLOOR PLANS</span>
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div className="pt-4">
        <h3 className="text-2xl md:text-xl sm:text-lg font-semibold">{property.name}</h3>
        <div className="flex items-center space-x-2 text-sm md:text-xs sm:text-xs text-gray-400 mt-2">
          <Image src={location} alt="Location" width={16} height={16} />
          <span>Jumeirah Village Circle (JVC), Dubai</span>
        </div>

        {/* Property info */}
        <div className="flex items-center space-x-4 text-sm md:text-xs sm:text-xs text-gray-400 mt-4">
          <div className="flex items-center space-x-1">
            <Image src={bed} alt="Bed" width={16} height={16} />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Image src={area} alt="Area" width={16} height={16} />
            <span>{property.size} Sq Ft</span>
          </div>
          <div className="flex items-center space-x-1">
            <Image src={payment} alt="Payment Plan" width={16} height={16} />
            <span>{property.payment_plan}</span>
          </div>
        </div>

        {/* Project Completion */}
        <div className="mt-4 text-sm md:text-xs sm:text-xs text-gray-400">
          <span>Project completion : {formatDate(property.project_completion_date)} </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
