 

import ContactForm from "@/app/components/ContactForm";
import ContactCard from "../../components/ContactInfo";
import phoneSVG from "../../../../public/icons/phone.svg";
import officeSVG from "../../../../public/icons/office.svg";
import emailSVG from "../../../../public/icons/email.svg";
import Map from "../../../../public/images/map.png";
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="pt-40 bg-black min-h-[90vh]">
      <div className="flex flex-col items-center justify-center px-4 lg:px-24 w-full">
        
        {/* Contact Form Section */}
        <div className="w-full">
          <ContactForm isShowMessage={true} headingText="Contact Us" />
        </div>

        {/* Contact Cards Section */}
        <div className="p-[2rem] w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            icon={phoneSVG}
            title="Phone"
            content="+971509981850"
          />
          <ContactCard
            icon={officeSVG}
            title="Office"
            content="39, Al Khalas - Frond B Street, Dubai"
          />
          <ContactCard
            icon={emailSVG}
            title="Email"
            content="info@marhabaestates.ae"
          />
        </div>

        <div className="p-[2rem]" >
          <Image className="rounded-[16px]"  src={Map} alt="map" />
        </div>
      </div>
    </div>
  );
}

 