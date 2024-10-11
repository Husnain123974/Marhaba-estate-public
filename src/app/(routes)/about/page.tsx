
import BackDropSectionContent from '../../components/BackDropSection'; 
import Image from 'next/image';
import Vision from '../../../../public/images/vision.png';
import Mission from '../../../../public/images/mission.png';


export default function AboutUs() {
  return (
    <div className="bg-black min-h-screen">

      {/*MainContent */}
      <BackDropSectionContent title=''  />

      {/* Vision section */}
      <section className="relative flex flex-col md:flex-row items-center   rounded-[24px]  overflow-hidden mt-16 w-10/12 mx-auto">

        <div className="w-full md:w-1/2 relative">
          <Image
            src={Vision}  
            alt="Skyline view"
            layout="responsive"
            width={1000}
            height={600}
            objectFit="cover"
            className="rounded-[24px]  "
          />
        </div>


        <div className="w-full md:w-1/2 p-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            Our vision is to be the leading real estate brokerage known for
            excellence and innovation in the industry. We aim to create a
            seamless experience for every client, positioning Marhaba Estates
            as the go-to firm for exceptional service, local market expertise,
            and a commitment to community growth. We envision a future where
            every home-buying or selling experience is rewarding and memorable.
          </p>
        </div>
      </section>

         {/* Mission section */}
         <section className=" pt-10 relative flex flex-col md:flex-row items-center   rounded-[24px]  overflow-hidden mt-16 w-10/12 mx-auto">
       
     
        <div className="w-full md:w-1/2 p-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our vision is to be the leading real estate brokerage known for
            excellence and innovation in the industry. We aim to create a
            seamless experience for every client, positioning Marhaba Estates
            as the go-to firm for exceptional service, local market expertise,
            and a commitment to community growth. We envision a future where
            every home-buying or selling experience is rewarding and memorable.
          </p>
        </div>

         
         <div className="w-full md:w-1/2 relative">
          <Image
            src={Mission} 
            alt="Skyline view"
            layout="responsive"
            width={1000}
            height={600}
            objectFit="cover"
            className="rounded-[24px]  "
          />
        </div>
      </section>
    </div>
  );
}
