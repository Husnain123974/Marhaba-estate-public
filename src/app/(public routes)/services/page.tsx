 
import ServiceCardDetails from "../../components/ServiceCardDetails";
import serviceImg1 from "../../../../public/images/service-1.png"
import serviceImg2 from "../../../../public/images/service-2.jpeg"
import serviceImg3 from "../../../../public/images/service-3.jpeg"
import serviceImg4 from "../../../../public/images/service-4.png"

import BackDropSectionContent from '../../components/BackDropSection';
import ContactForm from "@/app/components/ContactForm";

 
// These are hard coded values, will remove once done with backend 
const propertyData = [
  {
    title: "Buying Off-Plan Properties",
    image: serviceImg1,  
    benefits: [
      "Early access",
      "Customization options",
      "Potential for appreciation",
      "Flexible payment plans",
    ],
    outcomes: [
      "Early investment advantage",
      "Personalized home features",
      "Potential for increased property value",
    ],
  },
  {
    title: "Buying Ready Properties",
    image: serviceImg2,  
    benefits: [
      "Immediate possession",
      "No unforeseen costs",
      "Clear understanding of the final product",
    ],
    outcomes: [
      "Quick transition",
      "Predictable costs",
      "Immediate usability",
    ],
  },
  {
    title: "Selling Off-Plan Properties",
    image: serviceImg3,  
    benefits: [
      "Attracts investors",
      "Higher market demand",
      "Flexible marketing",
    ],
    outcomes: [
      "Faster sales",
      "Potential for higher returns",
      "-",
    ],
  },
  {
    title: "Selling Ready Properties",
    image: serviceImg4,  
    benefits: [
      "Immediate sale opportunity",
      "Clear condition and value",
      "Faster transactions",
    ],
    outcomes: [
      "Quicker sales process",
      "Higher buyer interest",
      "-",
    ],
  },
];



export default function Services() {
  return (
    <div className="bg-black min-h-[85vh] ">
      
      <BackDropSectionContent title="What services we offer" />
 
      <div className="min-h-[85vh]  flex items-start justify-center p-[7rem] 700:p-[2rem]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {propertyData.map((property, index) => (
            <ServiceCardDetails
              key={index}
              title={property.title}
              image={property.image}
              benefits={property.benefits}
              outcomes={property.outcomes}
            />
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  );
}