 

import Image, { StaticImageData } from 'next/image';
import benefitSVG from '../../../public/icons/benefit.svg';
import outcomeSVG from '../../../public/icons/outcomes.svg';
import { ServiceCardDetilsProps } from '@/types/propertyTypes';


const ServiceCardDetails: React.FC<ServiceCardDetilsProps> = ({ title, image, benefits, outcomes }) => {
  return (
    <div className="relative bg-[#1E1E1E] text-white shadow-lg w-full max-w-[52rem] rounded-[20px] opacity-100 mx-auto">
      {/* Card Image */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="w-full h-72 object-cover rounded-[20px]"
        />
        
        {/* Floating Text Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#1E1E1E]  p-4 rounded-tl-[20px] rounded-tr-[20px]">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
        </div>

      </div>

      <div className="p-4">
        {/* Benefits Section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
          <ul className="list-none space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Image src={benefitSVG} alt="benefit" width={24} height={24} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Outcomes:</h3>
          <ul className="list-none space-y-2">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Image src={outcomeSVG} alt="outcome" width={24} height={24} />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDetails;
