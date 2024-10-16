 
import Image from 'next/image';
import img from "../../../public/images/choose-us.png";  
import ReasonCard from './ReasonCard';  

// These are hard coded values, will remove once done with backend 
const reasons = [
  {
    number: '1',
    title: 'Integrity',
    description:
      'We are committed to conducting our business with transparency and honesty, ensuring that our clients can trust us to act in their best interest.',
  },
  {
    number: '2',
    title: 'Excellence',
    description:
      'We aim for the highest standards in everything, from the quality of properties we represent to the professionalism of our team.',
  },
  {
    number: '3',
    title: 'Innovation',
    description:
      'We believe in building not just homes, but communities. Our work is driven by a desire to contribute positively to the neighborhoods we serve.',
  },
  {
    number: '4',
    title: 'Community Focus',
    description:
      'We believe in building not just homes, but communities. Our work is driven by a desire to contribute positively to the neighborhoods we serve.',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="w-full max-w-[1300px] h-auto mx-auto flex flex-col items-center relative px-4">
       
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose Us</h2>
      
      <div className="flex flex-col lg-custom:flex-row gap-8 items-center w-full relative">
 
        <div className="flex flex-col gap-12 w-full lg-custom:w-1/2 z-10 justify-center lg-custom:relative lg-custom:-mr-28">
          {reasons.map((reason) => (
            <ReasonCard key={reason.number} reason={reason} />  
          ))}
        </div>

    
        <div className="w-full lg-custom:w-1/2 h-auto hidden lg-custom:block">
          <Image
            src={img}
            alt="Dubai Buildings"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}




