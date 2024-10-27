"use client";
import HeroSection from "./components/HeroSection";
import Properties from "./components/Properties";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Ratings from "./components/Ratings";
import ContactForm from "./components/ContactForm";
import { PropertyType } from "@/types/enums";
import { useState } from "react";

export default function Home() {
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  const onChangeProperty = (data: any) => {
    setSelectedPropertyType(data);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="pt-20">
        <HeroSection
          setSelectedPropertyType={onChangeProperty}
          setSearchText={setSearchText}
        />
      </div>

      <div className="  p-[4.3rem]">
        <Properties
          source={PropertyType.Featured}
          headerText="Featured Properties"
          propertyType={selectedPropertyType}
          searchText={searchText}
        />

        <div className="pt-20">
          <Properties
            source={PropertyType.GreyStructure}
            headerText="Grey Structures"
            propertyType={selectedPropertyType}
            searchText={searchText}
          />
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
