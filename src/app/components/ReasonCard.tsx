import { Reason } from "@/types/propertyTypes";

export default function ReasonCard({ reason }: { reason: Reason }) {
  return (
    <div
      className="bg-[#1E1E1E] p-6 rounded-[26px] flex items-start gap-4 relative shadow-lg"
      style={{ marginTop: reason.number !== '1' ? '-20px' : '0px' }}  
    >
      {/* Number box */}
      <div className="flex-shrink-0 bg-[#B09A511A] text-[#B09A51] w-12 h-20 flex items-center justify-center rounded-md text-5xl font-bold">
        {reason.number}
      </div>
      <div>
       
        <h3 className="text-xl 900-1200:text-[10px] font-bold text-white">
          {reason.title}
        </h3>
        <p className="text-base 900-1200:text-[10px] text-gray-400">
          {reason.description}
        </p>
      </div>
    </div>
  );
}
