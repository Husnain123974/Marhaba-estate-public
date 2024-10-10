


import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';


interface ServiceCardProps {
  icon: StaticImageData | string;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="bg-[#1E1E1E] p-6 rounded-lg flex flex-col items-start justify-center gap-4 shadow-lg"
      style={{ width: '100%', height: '100%' }}
    >
      <Image src={icon} alt={title} className="w-12 h-12" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-left">{description}</p>
    </div>
  );
};

export default ServiceCard;
