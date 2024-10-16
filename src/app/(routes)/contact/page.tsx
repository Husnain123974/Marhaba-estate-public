
import ContactForm from "@/app/components/ContactForm";
import ContactCard from "../../components/ContactInfo";
import phoneSVG from "../../../../public/icons/phone.svg";
import officeSVG from "../../../../public/icons/office.svg";
import emailSVG from "../../../../public/icons/email.svg";


export default function Contact() {
  return (
    <div className="pt-40 bg-black min-h-[90vh]">
      <div className="flex flex-col items-center justify-center px-4 lg:px-24 w-full">

        {/* Contact Form Section */}
        <div className="w-full">
          <ContactForm isShowMessage={true} headingText="Contact Us" />
        </div>

        {/* Contact Cards and Map Section */}
        <div className="p-[2rem] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Cards */}
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

          {/* Map Section */}
          <div className="rounded-lg overflow-hidden col-span-1 md:col-span-2 lg:col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.9640568238855!2d55.13155867457638!3d25.07821277895745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f3d9f7f91%3A0x41a0c7d4c5c4fae!2sJumeirah%20Beach%20Residence%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1634345626162!5m2!1sen!2sus"
              width="100%"
              height="400"
              loading="lazy"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
