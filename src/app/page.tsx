
import HeroSection from "./components/HeroSection";
import Properties from "./components/Properties";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Ratings from "./components/Ratings";
import ContactForm from "./components/ContactForm";
 
import property1 from "../../public/images/property-1.png";
import property2 from "../../public/images/property-2.png";
import property3 from "../../public/images/property-3.png";

import grey1 from "../../public/images/grey-1.png";
import grey2 from "../../public/images/grey-2.png";
import grey3 from "../../public/images/grey-3.png";



export default function Home() {

  const featurredProperties = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      title: 'Imtiaz Properties',
      price: 'AED 1.5 Million',
      name: 'Beach Walk Residence',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: property1,  
    },
    {
      id: '550e8400-e29b-41d4-a716-446655441000',
      title: 'Binghatti Developer',
      price: 'AED 900K',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: property2,   
    },
    {
      id: '550e8400-e29b-41d4-a716-446655442000',
      title: 'Iman Developer',
      price: 'AED 1.2 Million',
      name: 'One Sky Park',
      location: 'JVC, Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: property3,   
    },
    {
      id: '550e8400-e29b-41g4-a716-446655441000',
      title: 'Goraya Developer',
      price: 'AED $900',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: property2,   
    },
    {
      id: '550e8400-e29b-41g4-a716-446655447000',
      title: 'Ati Developer',
      price: 'AED $900',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: property2,   
    },
    {
      id: '550e8400-e29b-41g4-a716-446655448000',
      title: 'Husiqa Developer',
      price: 'AED $900',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: property2,   
    },
    {
      id: '550e8400-e29b-41g4-a716-446655449000',
      title: 'Sono Developer',
      price: 'AED $900',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: property1,   
    },
  ];

  const greyStructures = [
    {
      id: '550e8400-e29b-41d4-a716-446651440000',
      title: 'Imtiaz Properties',
      price: 'AED 1.5 Million',
      name: 'Beach Walk Residence',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: grey1,  
    },
    {
      id: '550e8400-e29b-41d4-a716-446652441000',
      title: 'Binghatti Developer',
      price: 'AED 900K',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: grey2,   
    },
    {
      id: '550e8400-e29b-41d4-a716-446653442000',
      title: 'Iman Developer',
      price: 'AED 1.2 Million',
      name: 'One Sky Park',
      location: 'JVC, Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: grey3,   
    },
    {
      id: '550e8400-e29b-41g4-a716-446654441000',
      title: 'Goraya Developer',
      price: 'AED $900',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: grey1,   
    },
    {
      id: '550e8400-e29b-41g4-a716-446656447000',
      title: 'Ati Developer',
      price: 'AED $900',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: grey2,   
    },
    {
      id: '550e8400-e29b-41g4-a716-446657448000',
      title: 'Husiqa Developer',
      price: 'AED $900',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: grey3,   
    },
    {
      id: '550e8400-e29b-41g4-a716-446655849000',
      title: 'Sono Developer',
      price: 'AED $900',
      name: 'Binghatti Royale',
      location: 'Jumeirah Village Circle (JVC), Dubai',
      bedrooms: '1 & 2',
      size: '500 to 1500',
      paymentPlan: '30/70',
      image: grey1,   
    },
  ];



  return (
    <div className="bg-black min-h-screen text-white">
   
     
      <div className="pt-20">  
        <HeroSection />
      </div>


      <div className="  p-[4.3rem]">
       <Properties headerText="Featured Properties" properties={featurredProperties} />

       
      <div className="pt-20"> 
         <Properties headerText="Grey Structures" properties={greyStructures} />
      </div>

   
       <div className="pt-20">
       <WhyChooseUs />
       </div>
      
   
       <div className="pt-20">
       <Services />
       </div>

   
      <div className="pt-10">
       <Ratings />
       </div>

       <div className="pt-10">
       <ContactForm />
       </div>
 
      

       </div>
      
 
    </div>
  );
}
