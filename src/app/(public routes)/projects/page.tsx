 
"use client";
import { useEffect, useRef, useState } from "react";
import SearchBar from "../../components/SearchBar";
import PropertyCard from "../../components/PropertyCard";
import mapSVG from "../../../../public/icons/map.svg";
import downArrow from "../../../../public/icons/downarrow.svg";
import stack from "../../../../public/icons/stack.svg";
import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";
import Pagination from "@/app/components/Pagination";
import { fetchFromApi } from "@/utils/apiClient";
import { HttpMethod } from "@/types/enums";
import { toCamelCase } from "@/utils/utils";
import { Project } from "@/types/propertyTypes";
const options = { method: "GET" as HttpMethod };



export default function Projects() {
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [projectType, setSelectedPrjectType] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const projectsCache = useRef<{ [key: number]: any[] }>({}); 
  const [sortOption, setSortOption] = useState<string>("Most Recent");


  const pageSize = 10;
 

  const getProjectsEndpoint = () => {
    return `${process.env.NEXT_PUBLIC_PROJECTS_ENDPOINT}`;
  };

 

  const getQuery = (endPoint: string, page: number) => {
    return `${endPoint}?page=${page}&pageSize=${pageSize}${
      projectType ? `&projectType=${projectType}` : ""
    }${searchText ? `&searchText=${searchText}` : ""}&sort=${sortOption}`;
  };
  



  const fetchProjects = async (page: number) => {
    if (projectsCache.current[page]) {
      setProjects(projectsCache.current[page]);
      setLoading(false);
      return;
    }

    try {
      const endPoint = getProjectsEndpoint();
      const query = getQuery(endPoint, page);
      console.log("QUry at FE ---------- ",query);
      console.log("Sortr Option at FE ---------- ",sortOption);
      
      const response = await fetchFromApi(query, options);
      const { data, total } = response;

      if (data) {
        const camelCaseData = toCamelCase(data);
        setProjects(camelCaseData);
        projectsCache.current[page] = camelCaseData; // Cache the fetched data
        setTotalPages(Math.ceil(total / pageSize));
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

 

  const resetAndFetch = () => {
    projectsCache.current = {}; // Clear cache
    setProjects([]); // Clear projects list
    setCurrentPage(1); // Reset to the first page
    fetchProjects(1); // Fetch the first page with new filters
  };

  useEffect(() => {
    setLoading(true);
    resetAndFetch();
  }, [projectType, searchText, sortOption]);

  useEffect(() => {

    if (projectsCache.current[currentPage]) {
      setProjects(projectsCache.current[currentPage]);
      setLoading(false);
      return;
    }

    if (currentPage > 1 || projectsCache.current[1] == null) {
      fetchProjects(currentPage);
    }
  }, [currentPage]);



 
   
 
 
  const handlePageChange = (page: number) => {

    setCurrentPage(page);
  };


const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setLoading(true);
  console.log("EVENT -------- ",event.target.value);
  setSortOption(event.target.value);
};


  return (
    <div className="bg-black pt-[13vh] px-[3rem]">
      <div>
        
        {/* Search bar */}
        <SearchBar
          setSelectedPropertyType={setSelectedPrjectType}
          setSearchText={setSearchText}
        />

        <div className="pt-5">
          <div className="w-full">
            {/* Header Section */}
            <div className="flex items-center justify-between  p-5">
              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                Our Projects
              </h2>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Map View Button */}
                <button className="flex items-center space-x-2 text-gradient px-4 py-2 rounded-full border-2 border-[#B58D40] hover:bg-transparent hover:text-[#B58D40] transition duration-300">
                  <Image src={mapSVG} alt="map" className="h-5 w-5" />
                  <span>Map View</span>
                </button>

                {/* Dropdown */}
                <div className="relative flex items-center w-full sm:w-[12.5rem]">
                  {/* Stack Icon */}
                  <div className="absolute left-3 flex items-center pointer-events-none">
                    <Image src={stack} alt="stack" />
                  </div>
                  <select
                    className="w-full h-[3rem] appearance-none bg-transparent text-white text-sm font-medium pl-10 pr-10 rounded-[12px] hover:bg-transparent hover:text-[#B58D40] transition duration-300 cursor-pointer"
                    style={{ border: "1px solid rgba(197, 201, 208, 0.3)" }}
                    onChange={handleSortChange}
                  >
                    <option>Most Recent</option>
                    <option>Oldest First</option>
                  </select>
                  {/* Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <Image src={downArrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 673px:grid-cols-1  sm:grid-cols-2 1160px:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
              {/* {projects.map((project, index) => (
                <PropertyCard key={index} property={project} />
              ))} */}

                {loading
                    ? Array.from({ length: pageSize }).map((_, index) => (
                        <div key={index} className="w-full">
                          {/* Skeleton card structure */}
                          <div className="w-full h-52 bg-gray-100 animate-pulse rounded-[24px]"></div>
                          <div className="h-4 mt-4 bg-gray-100 animate-pulse rounded-[24px]"></div>
                          <div className="h-4 w-[70%] mt-4 bg-gray-100 animate-pulse rounded-[24px]"></div>
                        </div>
                      ))
                      
                      : projects.length === 0 ? (
                        <div className="text-gradient text-center text-white text-xl font-semibold py-10">
                          No Projects Found
                        </div>
                      )
                      
                      :  projects.map((project, index) => (
                        <PropertyCard key={index} property={project} />
                      ))}
            </div>

            {/* add pagination here  */}
            <div className="min-h-[10vh] flex items-center justify-center bg-black">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
