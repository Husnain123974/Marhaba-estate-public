'use client'
import Img1 from "../../../public/images/detail-main-img.png"
import Img2 from "../../../public/images/detail-img-2.png"
import Img3 from "../../../public/images/detail-img-3.png"
import leftArrow from "../../../public/icons/back-arrow.svg"
import rightArrow from "../../../public/icons/next.svg"


import Image from "next/image";
import { useState } from "react";
 

interface ImageGalleryProps {
  largeImage: string;
  smallImages: string[];
}


const ImageGallery: React.FC<ImageGalleryProps> = ({ largeImage, smallImages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 300);  
  };

  const handlePreviousImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 300);
  };

  const images = [
    { src: Img1, alt: "Detail Main Image" },
    { src: Img2, alt: "Detail Image 2" },
    { src: Img3, alt: "Detail Image 3" },
  ];

  return (
    <div className="text-white p-4 bg-[rgba(30,30,30,1)] rounded-[12px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {/* Large image on the left */}
        <div className="md:col-span-3 flex">
          <Image
            src={largeImage}
            alt="Large property"
            width={1000}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Small images on the right */}
        <div className="flex flex-col space-y-4">
          {smallImages.slice(0, 2).map((image, index) => (
            <div key={index} className="flex-1">
              <Image
                src={image}
                alt={`Small image ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}

          <div className="relative flex-1" onClick={openModal}>
            <Image
              src={smallImages[2]}
              alt="Small image 3"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl">
              12+ photos
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40">
          <div className="bg-[rgba(30,30,30,1)] p-4 rounded-lg relative w-[1200px] max-w-[90vw] h-auto">
            {/* Close Button */}
             {/* Close Button with white circle */}
            <button
              onClick={closeModal}
              className="z-50 absolute -top-3 -right-2 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-2xl"
              style={{ backgroundColor: 'transparent', fontSize: '25px' }}
            >
              &times;
            </button>

            {/* Image Display with Fade Transition */}
            <div className={`relative w-full h-[60vh] transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePreviousImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2"
              style={{ marginLeft: '-20px' }}
            >
              <div
                style={{
                  background: 'black',
                  transform: 'scale(2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border:'1px solid #E6E8EC'
                }}
              >
                <Image src={leftArrow} alt="Previous" width={24} height={24} />
              </div>
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2"
              style={{ marginRight: '-15px' }}
            >
              <div
                style={{
                  background: 'black',
                  transform: 'scale(2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border:'1px solid #E6E8EC'
                }}
              >
                <Image src={rightArrow} alt="Next" width={24} height={24} />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};






export default ImageGallery;
