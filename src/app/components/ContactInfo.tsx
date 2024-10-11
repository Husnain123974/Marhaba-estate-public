
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ContactCardProps {
    icon: StaticImageData | string;
    title: string;
    content: string;
}
const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content }) => {
    return (
      <div className="flex flex-col justify-center items-center bg-[#1E1E1E] text-white rounded-3xl p-6 shadow-lg w-full    h-52">
        <div className="flex justify-center items-center mb-4">
          <div className="p-4">
            <Image src={icon} alt="icon" />
          </div>
        </div>
        <div className="text-lg font-semibold mb-2">{title}</div>
        <div className="text-lg">{content}</div>
      </div>
    );
  };
  
  export default ContactCard;
