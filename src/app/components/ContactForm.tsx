 
'use client'
import React, { useState } from "react";

// List of countries 
const countries = [
  { code: "ae", name: "United Arab Emirates", flag: "🇦🇪" , countryCode: "+971" },
  { code: "us", name: "United States", flag: "🇺🇸" ,  countryCode: "+1" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧" ,  countryCode: "+44"},
];

const ContactForm = () => {
  const [country, setCountry] = useState("ae");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div className="bg-black text-white flex justify-center items-center py-12">
      <div className="bg-[#1E1E1E] w-[90%] max-w-[82rem] h-auto p-8 rounded-[1.5rem] shadow-lg flex flex-col justify-center items-center" >
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            GET A FREE <br /> CONSULTATION
          </h2>
          <p className="text-gray-400 text-center">
            Fill form below and our agent will contact you shortly
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
      
          <input
            type="text"
            placeholder="Your name"
            className="p-4 w-full max-w-sm bg-[#141416] text-white rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

   
          <input
            type="email"
            placeholder="Your email"
            className="p-4 w-full max-w-sm bg-[#141416] text-white rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

      
          <div className="flex items-center w-full max-w-sm bg-[#141416] rounded-[1.5rem] ">
         
            <div className="relative">
              <select
                value={country}
                onChange={handleCountryChange}
                className="w-12 h-12 rounded-full bg-[#141416] text-white text-2xl flex justify-center items-center"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag}
                  </option>
                ))}
              </select>
              <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"></span>
            </div>

        
            <input
              type="text"
              placeholder="Phone number"
              className="pl-4 p-4 w-full bg-transparent text-gray-400 focus:outline-none"
              style={{ color: '#b3b3b3', fontSize: '16px' }}
            />
          </div>
        </form>

  
        <div className="mt-8">
          <button
            type="submit"
            className="px-12 w-[14rem]  py-4 text-black font-semibold rounded-[2.5rem] hover:opacity-90"
            style={{
              background: "linear-gradient(122.79deg, #C39D53 21.1%, #97733E 94.65%)",
            }}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
