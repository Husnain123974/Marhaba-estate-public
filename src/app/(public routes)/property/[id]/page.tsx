'use client';  // This tells Next.js that this is a client-side component

import Image from "next/image";
import Img1 from "../../../../../public/images/detail-main-img.png";
import Img2 from "../../../../../public/images/detail-img-2.png";
import Img3 from "../../../../../public/images/detail-img-3.png";
import nextSVG from "../../../../../public/icons/next.svg";
import backSVG from "../../../../../public/icons/back-arrow.svg";
import goldenCheckSVG from "../../../../../public/icons/golden-tick.svg";
import PropertyInfo from "@/app/components/PropertyInfoCard";
import EnquiryForm from "@/app/components/EnquiryForm";
import ImageGallery from "@/app/components/ImageGallery";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Path to your store
 


export default function PropertyDetailsPage() {

 
  const property = useSelector(
    (state: RootState) => state.property.selectedProperty
  );
 
  const smallImages = [Img1, Img2, Img3];

  return (
    <div className="bg-black pt-[6rem] px-4 pb-0 sm:px-[4.3rem]">
      <div className="  text-white p-4 rounded-[12px] max-w-[2400px] mx-auto">
        <ImageGallery
          largeImage={property?.images[0]}
          smallImages={smallImages}
        />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 mt-6 max-w-[2400px] mx-auto">
          {/* PropertyInfo  */}
          <div className="md:col-span-4 space-y-4">
            <PropertyInfo property={property} />

            {/* Commission banner after PropertyInfo */}
            <div className="bg-[#202d19] text-white py-2 px-4 rounded-[12px] flex items-center justify-between">
              <span className="text-lg">Direct sales 0% commission 🎉</span>
            </div>

            {/* Description */}
            <div className="bg-[rgba(30,30,30,1)] text-white p-6 rounded-[12px]">
              <h2 className="text-xl font-bold mb-4">Description</h2>

              <p className="text-gray-300 mb-4">{property?.description}</p>

              <ul className="list-none mb-4">
                <li className="text-gray-300">Fashion Brands</li>
                <li className="text-gray-300">Interior Decor</li>
                <li className="text-gray-300">Jewelers</li>
                <li className="text-gray-500">Foot Wear Brands</li>
              </ul>

              <button className="text-yellow-500 font-semibold">
                Read more
              </button>
            </div>

            {/* Amenities */}
            <div className="bg-[rgba(30,30,30,1)] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-6">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {property?.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Image
                      src={goldenCheckSVG}
                      alt="Check"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                    <span className="text-white">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-[rgba(30,30,30,1)] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="rounded-lg overflow-hidden">
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

          {/* EnquiryForm   */}
          <div className="md:col-span-2">
            <EnquiryForm />
          </div>
        </div>

        {/* Similar Properties Section */}
        <div className="w-full">
          <div className="flex items-center justify-between  p-5">
            <h2 className="text-4xl font-bold text-white">
              Similar Properties
            </h2>
            {/* Navigation Arrows */}
            <div className="flex space-x-4">
              <button className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image src={backSVG} alt="back svg" />
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image src={nextSVG} alt="next svg" />
              </button>
            </div>
          </div>

          {/* Cards Section */}
          {/* <div className="grid grid-cols-1 673px:grid-cols-1 sm:grid-cols-2 1160px:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );

 
}

 