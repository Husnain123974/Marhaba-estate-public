
import Image from 'next/image';
import location from"../../../public/icons/map.svg";
import download from"../../../public/icons/download.svg";
import bed from"../../../public/icons/bedroom.svg";
import area from"../../../public/icons/area.svg";
import payment from"../../../public/icons/payment-plan.svg";

const PropertyInfo = () => {
  return (
    <div className="bg-[rgba(30,30,30,1)] text-white p-6 rounded-[12px]">
      {/* Price and Buttons */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-4">
        <div>
          <p className="text-sm md:text-xs sm:text-xs text-gray-400">Starting from</p>
          <h2 className="text-4xl md:text-3xl sm:text-xl 673px:text-sm font-bold">AED 2 Million</h2>
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
        <h3 className="text-2xl md:text-xl sm:text-lg font-semibold">Beach Walk Residence</h3>
        <div className="flex items-center space-x-2 text-sm md:text-xs sm:text-xs text-gray-400 mt-2">
          <Image src={location} alt="Location" width={16} height={16} />
          <span>Jumeirah Village Circle (JVC), Dubai</span>
        </div>

        {/* Property info */}
        <div className="flex items-center space-x-4 text-sm md:text-xs sm:text-xs text-gray-400 mt-4">
          <div className="flex items-center space-x-1">
            <Image src={bed} alt="Bed" width={16} height={16} />
            <span>1 & 2</span>
          </div>
          <div className="flex items-center space-x-1">
            <Image src={area} alt="Area" width={16} height={16} />
            <span>500 to 1500 Sq Ft</span>
          </div>
          <div className="flex items-center space-x-1">
            <Image src={payment} alt="Payment Plan" width={16} height={16} />
            <span>30/70</span>
          </div>
        </div>

        {/* Project Completion */}
        <div className="mt-4 text-sm md:text-xs sm:text-xs text-gray-400">
          <span>Project completion: 14th Dec 2025</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
