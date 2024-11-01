
// import Image from 'next/image';
// import phone from"../../../public/icons/white-phone.svg";
// import Whatsapp from"../../../public/icons/whatsapp.svg";

// const EnquiryForm = () => {
//   return (
//     <div className="bg-[rgba(30,30,30,1)] text-white p-6 rounded-[12px] max-w-3xl">
//       <h2 className="text-xl md:text-lg sm:text-base font-bold mb-4">Get more information</h2>

//       {/* Call and WhatsApp Buttons */}
//       <div className="flex space-x-4 mb-6">
//         <button className="bg-[rgba(244,244,244,0.1)] hover:bg-gray-700 flex items-center justify-center space-x-2 px-4 py-2 rounded-[40px] w-10 h-10 md:w-auto md:h-auto md:px-4">
//           <Image src={phone} alt="Call" width={20} height={20} />
//           <span className="text-white 1000:hidden inline"><a href="https://wa.me/971509981850" target="_blank">CALL</a></span>  
//         </button>
//         <button className="bg-[rgba(29,136,33,1)] flex items-center justify-center space-x-2 px-4 py-2 rounded-[40px] w-10 h-10 md:w-auto md:h-auto md:px-4">
//           <Image src={Whatsapp} alt="WhatsApp" width={20} height={20} />
//           <span className="text-white 1000:hidden inline"><a href="https://wa.me/971509981850" target="_blank">WhatsApp</a>
//  </span>  
//         </button>
//       </div>

//       {/* Form Fields */}
//       <form className="space-y-4">
//         <input
//           type="text"
//           placeholder="Your name"
//           className="w-full bg-[rgba(20,20,22,1)] text-gray-400 placeholder-gray-500 rounded-[20px] p-[14px] border-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-xs"
//         />

//         <select
//           className="w-full bg-[rgba(20,20,22,1)] text-gray-400 placeholder-gray-500 rounded-[20px] p-[14px] border-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-xs"
//         >
//           <option>Who are you</option>
//           <option>Buyer</option>
//           <option>Investor</option>
//         </select>

//         <input
//           type="email"
//           placeholder="Your email"
//           className="w-full bg-[rgba(20,20,22,1)] text-gray-400 placeholder-gray-500 rounded-[20px] p-[14px] border-none focus:ring-2 text-sm md:text-xs"
//         />

//         <div className="flex items-center space-x-2 bg-[rgba(20,20,22,1)] rounded-[20px] p-[14px]">
//           <input
//             type="text"
//             placeholder="Phone number"
//             className="flex-1 bg-transparent text-gray-400 placeholder-gray-500 border-none focus:ring-0 outline-none text-sm md:text-xs"
//           />
//         </div>

//         <textarea
//           placeholder="Enter your enquiry"
//           className="w-full bg-[rgba(20,20,22,1)] text-gray-400 placeholder-gray-500 rounded-[20px] p-[14px] border-none focus:ring-2 focus:ring-yellow-500 h-24 text-sm md:text-xs"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-[#c5a263] to-[#ab8235] text-white py-3 rounded-[40px] font-semibold mt-4 text-sm md:text-xs"
//         >
//           ENQUIRE NOW
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EnquiryForm;



"use client";
import Image from 'next/image';
import phone from "../../../public/icons/white-phone.svg";
import Whatsapp from "../../../public/icons/whatsapp.svg";
import { useState } from "react";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Who are you");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      role,
      email,
      phone: phoneNumber,
      enquiry,
    };

    try {
      const response = await fetch("/api/sendEnquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("Enquiry sent successfully!");
      } else {
        setStatus("Failed to send enquiry.");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      setStatus("Failed to send enquiry.");
    }
  };

  return (
    <div className="bg-[rgba(30,30,30,1)] text-white p-6 rounded-[12px] max-w-3xl">
      <h2 className="text-xl md:text-lg sm:text-base font-bold mb-4">Get more information</h2>

      {/* Call and WhatsApp Buttons */}
      <div className="flex space-x-4 mb-6">
        <button className="bg-[rgba(244,244,244,0.1)] hover:bg-gray-700 flex items-center justify-center space-x-2 px-4 py-2 rounded-[40px] w-10 h-10 md:w-auto md:h-auto md:px-4">
          <Image src={phone} alt="Call" width={20} height={20} />
          <span className="text-white 1000:hidden inline">
            <a href="https://wa.me/971509981850" target="_blank">CALL</a>
          </span>
        </button>
        <button className="bg-[rgba(29,136,33,1)] flex items-center justify-center space-x-2 px-4 py-2 rounded-[40px] w-10 h-10 md:w-auto md:h-auto md:px-4">
          <Image src={Whatsapp} alt="WhatsApp" width={20} height={20} />
          <span className="text-white 1000:hidden inline">
            <a href="https://wa.me/971509981850" target="_blank">WhatsApp</a>
          </span>
        </button>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[rgba(20,20,22,1)] text-gray-400 placeholder-gray-500 rounded-[20px] p-[14px] border-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-xs"
          required
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full bg-[rgba(20,20,22,1)] text-gray-400 placeholder-gray-500 rounded-[20px] p-[14px] border-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-xs"
        >
          <option>Who are you</option>
          <option>Buyer</option>
          <option>Investor</option>
        </select>

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[rgba(20,20,22,1)] text-gray-400 placeholder-gray-500 rounded-[20px] p-[14px] border-none focus:ring-2 text-sm md:text-xs"
          required
        />

        <div className="flex items-center space-x-2 bg-[rgba(20,20,22,1)] rounded-[20px] p-[14px]">
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex-1 bg-transparent text-gray-400 placeholder-gray-500 border-none focus:ring-0 outline-none text-sm md:text-xs"
            required
          />
        </div>

        <textarea
          placeholder="Enter your enquiry"
          value={enquiry}
          onChange={(e) => setEnquiry(e.target.value)}
          className="w-full bg-[rgba(20,20,22,1)] text-gray-400 placeholder-gray-500 rounded-[20px] p-[14px] border-none focus:ring-2 focus:ring-yellow-500 h-24 text-sm md:text-xs"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#c5a263] to-[#ab8235] text-white py-3 rounded-[40px] font-semibold mt-4 text-sm md:text-xs"
        >
          ENQUIRE NOW
        </button>
      </form>

      {status && <p className="mt-4 text-yellow-400">{status}</p>}
    </div>
  );
};

export default EnquiryForm;
