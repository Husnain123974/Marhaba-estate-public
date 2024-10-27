import { FC } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/hardCodedData";

const Services: FC = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            className="w-full max-w-xs mx-auto sm:max-w-sm lg:max-w-full"
            key={index}
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
