"use client";
import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Image, { StaticImageData } from "next/image";
import nextSVG from "../../../public/icons/next.svg";
import backSVG from "../../../public/icons/back-arrow.svg";
import { PropertyType } from "@/utils/PropertyEnums";
import { fetchFromApi } from "@/utils/apiClient";

 
// Define types for the properties and the component props
type Property = {
  id: string;
  title: string;
  price: string;
  name: string;
  location: string;
  bedrooms: string;
  area: string;
  paymentplan: string;
  images: string | StaticImageData[];
  builders: string;
};

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface PropertiesProps {
  source: string;
  headerText: string;
  propertyType:string;
  searchText:string;
}



const Properties: React.FC<PropertiesProps> = ({
  source,
  headerText,
  propertyType,
  searchText
}) => {
  const [properties, setProperties] = useState<Property[]>([]); // Use Property[] type for the state
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page for pagination
  const [totalPages, setTotalPages] = useState(1); // Store the total number of pages
  const pageSize = 6; // Number of properties to fetch per page
  const visibleCardsCount = 3; // Number of cards to show at a time
  const [currentIndex, setCurrentIndex] = useState(0); // Track current visible card index
  const options = { method: "GET" as HttpMethod };

    const getEndPoint = () :string =>{
    return (
      source === PropertyType.Featured
        ? process.env.NEXT_PUBLIC_FEATURED_PROPERTIES_ENDPOINT
        : process.env.NEXT_PUBLIC_GREYSTRUCTURES_PROPERTIES_ENDPOINT
    ) as string;
  }


  const getQuery = (endPoint: string, page: number) => {
    return  `${endPoint}?page=${page}&pageSize=${pageSize}${
      propertyType ? `&propertyType=${propertyType}` : ""
    }${searchText ? `&searchText=${searchText}` : ""}`;
    
  };

 

  // Fetch properties with pagination
  const fetchProperties = async (page: number) => {
    try {
      const endPoint: string = getEndPoint();
      const query = getQuery(endPoint, page);
      const response = await fetchFromApi(query, options);

      // Ensure response contains 'data' and 'total'
      const { data, total } = response;

      if (data) {
        // Replace properties if it's the first page, otherwise append
        setProperties((prevProperties) =>
          page === 1 ? data : [...prevProperties, ...data.filter(
              (newProp) => !prevProperties.some((prop) => prop.id === newProp.id)
            )]
        ); // Filter out duplicate properties
        setTotalPages(Math.ceil(total / pageSize)); // Calculate total pages
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  // Reset properties and page index when filter (propertyType) changes
  useEffect(() => {
    console.log("Search chnaged   -------------------- ", searchText);
    setLoading(true);
    setProperties([]); // Clear the old properties when the filter changes
    console.log("Props =--------------------> ",properties);
    console.log("Props =--------------------> ",visibleProperties);
    
    setCurrentPage(1); // Reset the page to 1 when filter changes
    setCurrentIndex(0); // Reset the index to 0
    fetchProperties(1); // Fetch new properties from the first page
  }, [propertyType,searchText, source]); // Add source if needed

  // Fetch new page of properties when currentPage changes (pagination)
  useEffect(() => {
    console.log("Page code is running ... ")
      setLoading(true);
      if (currentPage > 1) {
        fetchProperties(currentPage); // Fetch new page's properties without clearing old ones
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
          : visibleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
      </div>
    </div>
  );
};

export default Properties;