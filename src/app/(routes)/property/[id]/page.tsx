 
import Image from 'next/image';
import Img1 from "../../../../../public/images/detail-main-img.png"
import Img2 from "../../../../../public/images/detail-img-2.png"
import Img3 from "../../../../../public/images/detail-img-3.png"
import nextSVG from "../../../../../public/icons/next.svg"
import backSVG from "../../../../../public/icons/back-arrow.svg"
import property1 from "../../../../../public/images/property-1.png"
import property2 from "../../../../../public/images/property-2.png"
import property3 from "../../../../../public/images/property-3.png"
import property4 from "../../../../../public/images/grey-1.png"
import goldenCheckSVG from "../../../../../public/icons/golden-tick.svg"
import PropertyInfo from "@/app/components/PropertyInfoCard";
import EnquiryForm from '@/app/components/EnquiryForm';
import PropertyCard from '@/app/components/PropertyCard';
import ImageGallery from '@/app/components/ImageGallery';
 
 
const properties = [
    {
      id:'550e8400-e29b-41d4-a716-446655440000',
      title: 'Imtiaz Properties',
      price: 'AED 1.5 Million',
      name: 'Beach Walk Residence',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: property1
  
    },
    {
      id:'550e8400-e29b-41d4-a716-446655441000',
      title: 'Binghatti Developer',
      price: 'AED 900K',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image:property2
    
    },
    {
      id:'550e8400-e29b-41d4-a716-446655442000',
      title: 'Iman Developer',
      price: 'AED 1.2 Million',
      name: 'One Sky Park',
      location: 'JVC, Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image:property3
     
    }, 
    {
      id:'550e8h90-e29b-41d4-a716-446655442000',
      title: 'Iman Developer',
      price: 'AED 1.2 Million',
      name: 'One Sky Park',
      location: 'JVC, Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image:property4
     
    },
  ];
 
 // Fetching static paths (like getStaticPaths in the `pages` directory)
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id, // Ensure this matches the `id` field in the properties array
  }));
}

// Fetch the property based on the params
async function getPropertyById(id: string) {
  const property = properties.find((p) => p.id === id);
  return property || null;
}

interface PropertyDetailsPageProps {
  params: {
    id: string;
  };
}



export default async  function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const property = await getPropertyById(params.id);

  if (!property) {
    return <div>Property not found</div>;
  }
  

  const amenities = [
    'Jacuzzi',
    'CCTV Cameras',
    'Children Play Area',
    'Covered Parking',
    'Landmark View',
    'Covered Parking',
    'Community Center',
    'Supermarket Nearby',
    'Shared Gym',
    'Kitchen Appliances',
    'CCTV Cameras',
    'Shared swimming pool',
  ];

  const smallImages = [Img1,Img2, Img3];
 

  if (!property) {
    return <div>Property not found</div>;
  }
 

  return (
    <div className="bg-black pt-[6rem] px-4 pb-0 sm:px-[4.3rem]">
      <div className="  text-white p-4 rounded-[12px] max-w-[2400px] mx-auto">   
       
       <ImageGallery largeImage={Img1} smallImages={smallImages} />

      

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 mt-6 max-w-[2400px] mx-auto">
            {/* PropertyInfo  */}
            <div className="md:col-span-4 space-y-4">
              <PropertyInfo />

              {/* Commission banner after PropertyInfo */}
              <div className="bg-[#202d19] text-white py-2 px-4 rounded-[12px] flex items-center justify-between">
                <span className="text-lg">Direct sales 0% commission 🎉</span>
              </div>

              {/* Description */}
              <div className="bg-[rgba(30,30,30,1)] text-white p-6 rounded-[12px]">
                  <h2 className="text-xl font-bold mb-4">Description</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We present to your attention the best facility in the JVC location and the best 1 bedroom apartment offer on the market. The development includes lush, green spaces and a natural environment, designed to accommodate your lifestyle needs while complementing your busy schedule.
                    Comprising 269 units, including modern 1-bedroom and 2-bedroom apartments, Oakley Square Residences provides ample space and amenities for relaxation and connection with nature.
                    Situated in District 11 of Jumeirah Village Circle, the area features several parks, schools, and various entertainment and leisure options.
                  </p>

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
                  {amenities.map((amenity, index) => (
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
            <h2 className="text-4xl font-bold text-white">Similar Properties</h2>
            {/* Navigation Arrows */}
            <div className="flex space-x-4">
              <button className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image src={backSVG} alt='back svg'/>
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image src={nextSVG} alt='next svg'/>
              </button>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 673px:grid-cols-1 sm:grid-cols-2 1160px:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
