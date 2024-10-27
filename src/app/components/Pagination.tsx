import React from "react";
import next from "../../../public/icons/pagination-next.svg";
import back from "../../../public/icons/pagination-back.svg";
import Image from "next/image";
import { PaginationProps } from "@/types/propertyTypes";


const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        onClick={() => handlePageChange(currentPage - 1)}
        className={`cursor-pointer ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <Image src={back} alt="back" />
      </div>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`relative flex items-center justify-center w-10 h-10 text-white ${
            currentPage === page
              ? "rounded-[12px] border-[3px] border-solid border-[#C39D53] "
              : " border-[3px] border-solid border-[rgba(230,232,236,0.12)] rounded-[12px]"
          }`}
        >
          <span className="relative z-10">{page}</span>
        </button>
      ))}

      <div
        onClick={() => handlePageChange(currentPage + 1)}
        className={`cursor-pointer ${
          currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <Image src={next} alt="next" />
      </div>
    </div>
  );
};

export default Pagination;
