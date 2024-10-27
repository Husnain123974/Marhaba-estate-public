import Image from "next/image";
import img from "../../../public/images/choose-us.png";
import ReasonCard from "./ReasonCard";
import { reasons } from "@/data/hardCodedData";

export default function WhyChooseUs() {
  return (
    <div className="w-full max-w-[1300px] h-auto mx-auto flex flex-col items-center relative px-4">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Why Choose Us
      </h2>

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
