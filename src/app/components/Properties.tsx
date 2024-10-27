"use client";
import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Image from "next/image";
import nextSVG from "../../../public/icons/next.svg";
import backSVG from "../../../public/icons/back-arrow.svg";
import { HttpMethod, PropertyType } from "@/types/enums";
import { fetchFromApi } from "@/utils/apiClient";
import { PropertiesProps, Property } from "@/types/propertyTypes";
import { toCamelCase } from "@/utils/utils";

const Properties: React.FC<PropertiesProps> = ({
  source,
  headerText,
  propertyType,
  searchText,
}) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 6;
  const visibleCardsCount = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const options = { method: "GET" as HttpMethod };

  const getEndPoint = (): string => {
    return (
      source === PropertyType.Featured
        ? process.env.NEXT_PUBLIC_FEATURED_PROPERTIES_ENDPOINT
        : process.env.NEXT_PUBLIC_GREYSTRUCTURES_PROPERTIES_ENDPOINT
    ) as string;
  };

  const getQuery = (endPoint: string, page: number) => {
    return `${endPoint}?page=${page}&pageSize=${pageSize}${
      propertyType ? `&propertyType=${propertyType}` : ""
    }${searchText ? `&searchText=${searchText}` : ""}`;
  };

  

  const fetchProperties = async (page: number) => {
    try {
      const endPoint: string = getEndPoint();
      const query = getQuery(endPoint, page);
      const response = await fetchFromApi(query, options);

      const { data, total } = response;

      
      if (data) {
        const camelCaseData = toCamelCase(data);
        
        setProperties((prevProperties) =>
          page === 1
            ? camelCaseData
            : [
                ...prevProperties,
                ...camelCaseData.filter(
                  (newProp) =>
                    !prevProperties.some((prop) => prop.id === newProp.id)
                ),
              ]
        );
        setTotalPages(Math.ceil(total / pageSize));
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setProperties([]);
    setCurrentPage(1);
    setCurrentIndex(0);
    fetchProperties(1);
  }, [propertyType, searchText, source]);

  // Fetch new page of properties when currentPage changes (pagination)
  useEffect(() => {
    setLoading(true);
    if (currentPage > 1) {
      fetchProperties(currentPage);
    }
  }, [currentPage]);

  const handleNext = () => {
    // Move to the next visible cards
    if (currentIndex + visibleCardsCount < properties.length) {
      setCurrentIndex((prevIndex) => prevIndex + visibleCardsCount);
    } else if (currentPage < totalPages) {
      // If there are more pages, load the next page
      setCurrentPage((prevPage) => prevPage + 1);
      setCurrentIndex((prevIndex) => prevIndex + visibleCardsCount);
    } else {
      // Loop back to the start if at the end of the list
      setCurrentIndex(0);
    }
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? properties.length - visibleCardsCount
        : prevIndex - visibleCardsCount
    );
  };

  // Get the currently visible properties
  const visibleProperties = properties.slice(
    currentIndex,
    currentIndex + visibleCardsCount
  );

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between p-5">
        <h2 className="text-4xl font-bold text-white">{headerText}</h2>

        {/* Navigation Arrows */}
        <div className="flex space-x-4">
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center"
            onClick={handleBack}
          >
            <Image src={backSVG} alt="back svg" />
          </button>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center"
            onClick={handleNext}
          >
            <Image src={nextSVG} alt="next svg" />
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 673px:grid-cols-1 sm:grid-cols-2 1160px:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {loading
          ? Array.from({ length: visibleCardsCount }).map((_, index) => (
              <div key={index} className="w-[95%]">
                {/* Tailwind-based skeleton loader */}
                <div className="w-full h-52 bg-gray-100 animate-pulse rounded-[24px]"></div>
                <div className="h-4 mt-4 bg-gray-100 animate-pulse rounded-[24px]"></div>
                <div className="h-4 w-[70%] mt-4 bg-gray-100 animate-pulse rounded-[24px]"></div>
              </div>
            ))
            : properties.length === 0 ? (
              <div className="text-gradient text-center text-white text-xl font-semibold py-10">
                {source === PropertyType.Featured
                  ? "No Property Found"
                  : "No Grey Structure Found"}
              </div>
            )
          : visibleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
      </div>
    </div>
  );
};

export default Properties;
