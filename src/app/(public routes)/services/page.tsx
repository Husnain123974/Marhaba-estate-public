import ServiceCardDetails from "../../components/ServiceCardDetails";
import BackDropSectionContent from "../../components/BackDropSection";
import ContactForm from "@/app/components/ContactForm";
import { servicesPropertiesData } from "@/data/hardCodedData";

export default function Services() {
  return (
    <div className="bg-black min-h-[85vh] ">
      <BackDropSectionContent title="What services we offer" />

      <div className="min-h-[85vh]  flex items-start justify-center p-[7rem] 700:p-[2rem]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesPropertiesData.map((property, index) => (
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
