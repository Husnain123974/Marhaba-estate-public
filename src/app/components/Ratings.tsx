import nextSVG from "../../../public/icons/next.svg";
import backSVG from "../../../public/icons/back-arrow.svg";
import Image from "next/image";
import RatingCard from "./RatingCard";
import { ratings } from "@/data/hardCodedData";

const Ratings = () => {
  return (
    <div className="w-full py-0 px-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6 p-5">
        <h2 className="text-4xl 440:text-2xl font-bold text-white">
          What Our Clients Say
        </h2>

        {/* Navigation Arrows */}
        <div className="flex space-x-4">
          <button className="w-10 h-10   rounded-full flex items-center justify-center">
            <Image src={backSVG} alt="back svg " />
          </button>

          <button className="w-10 h-10   rounded-full flex items-center justify-center">
            <Image src={nextSVG} alt="next svg " />
          </button>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ratings.map((rating, index) => (
          <RatingCard key={index} rating={rating} />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
