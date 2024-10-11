 
import { FC } from 'react';
import ServiceCard from './ServiceCard';
import  { StaticImageData } from 'next/image';
import companySVG from '../../../public/icons/company-register.svg'
import mortageSVG from '../../../public/icons/mortage.svg'
import bankSVG from '../../../public/icons/bank-account.svg'
import taxSVG from '../../../public/icons/tax.svg'
import visaSVG from '../../../public/icons/visa.svg'
import goldenVisaSVG from '../../../public/icons/golden-visa.svg'
 

interface Service {
  icon: StaticImageData | string;
  title: string;
  description: string;
}
  // These are hard coded values, will remove once done with backend 
  
const services: Service[] = [
  {
    icon: companySVG,
    title: 'Company Registration',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: mortageSVG,
    title: 'Mortgage Assistance',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: bankSVG,
    title: 'Bank Account Opening',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: taxSVG ,
    title: 'Tax Residency',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: visaSVG ,
    title: 'Visa Acquisition',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
  {
    icon: goldenVisaSVG,
    title: 'Golden Visa',
    description:
      'Lorem ipsum dolor sit amet consectetur Tellus volutpat quis hendrerit erat.',
  },
];


const Services: FC = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
          <div className="w-full max-w-xs mx-auto sm:max-w-sm lg:max-w-full" key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;