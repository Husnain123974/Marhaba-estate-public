 
// import Image from 'next/image';
// import { FC } from 'react';
// import bedroom from "../../../public/icons/bedroom.svg"
// import area from "../../../public/icons/area.svg"
// import payment from "../../../public/icons/payment-plan.svg"


// // Define the Property type
// interface Property {
//   title: string;
//   price: string;
//   name: string;
//   location: string;
//   bedrooms: string;
//   size: string;
//   paymentPlan: string;
//   image: any;
// }

// interface PropertyCardProps {
//   property: Property;
// }

// const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
//   return (
//     <div className="w-[410px] h-auto bg-black p-4 rounded-lg">
 
//       <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
//         <Image
//           src={property.image}
//           alt={property.title}
//           layout="fill"
//           objectFit="cover"
//         />
//         {/* Property Title Overlay */}
//         <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full">
//           <span className="text-black font-bold">{property.title}</span>
//         </div>
//       </div>

//       {/* Property Info Section */}
//       <div className="text-white mt-4">
//         <p className="text-sm">Starting from</p>
//         <h3 className="text-2xl font-bold">{property.price}</h3>
//         <p className="text-lg">{property.name}</p>
//         <p className="text-sm text-gray-400">{property.location}</p>

//         {/* Icons Section */}
//         <div className="flex items-center justify-between mt-4">
//           {/* Bedrooms Icon */}
//           <div className="flex items-center space-x-1">
//              <Image src={bedroom} alt='bedroom' />
//             <span>{property.bedrooms}</span>
//           </div>
          
//           {/* Size Icon */}
//           <div className="flex items-center space-x-1">
//           <Image src={area} alt='bedroom' />
//             <span>{property.size}</span>
//           </div>

//           {/* Payment Plan Icon */}
//           <div className="flex items-center space-x-1">
//           <Image src={payment} alt='bedroom' />
//             <span>{property.paymentPlan}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;


import Image from 'next/image';
import { FC } from 'react';
import bedroom from "../../../public/icons/bedroom.svg";
import area from "../../../public/icons/area.svg";
import payment from "../../../public/icons/payment-plan.svg";

// Define the Property type
interface Property {
  title: string;
  price: string;
  name: string;
  location: string;
  bedrooms: string;
  size: string;
  paymentPlan: string;
  image: any;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="
      w-full
      sm:w-[100%]  {/* Adjust width to ensure three cards per row */}
      md:w-[90%] 
      lg:w-[100%] 
      xl:w-[100%] 
      h-auto bg-black p-4 rounded-lg transition-all duration-300">
 
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          layout="fill"
          objectFit="cover"
        />
        {/* Property Title Overlay */}
        <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full">
          <span className="text-black font-bold">{property.title}</span>
        </div>
      </div>

      {/* Property Info Section */}
      <div className="text-white mt-4">
        <p className="text-sm">Starting from</p>
        <h3 className="text-2xl font-bold">{property.price}</h3>
        <p className="text-lg">{property.name}</p>
        <p className="text-sm text-gray-400">{property.location}</p>

        {/* Icons Section */}
        <div className="flex items-center justify-between mt-4">
          {/* Bedrooms Icon */}
          <div className="flex items-center space-x-1">
             <Image src={bedroom} alt='bedroom' />
            <span>{property.bedrooms}</span>
          </div>
          
          {/* Size Icon */}
          <div className="flex items-center space-x-1">
          <Image src={area} alt='area' />
            <span>
            {property.size}
            <span className="hidden 905px:inline"> Sq Ft</span> 
            </span>
         </div>

          {/* Payment Plan Icon */}
          <div className="flex items-center space-x-1">
          <Image src={payment} alt='payment plan' />
            <span>{property.paymentPlan}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

 