"use client";
import { countries } from "@/data/hardCodedData";
import { ContactFormProps } from "@/types/propertyTypes";
import React, { useState } from "react";

const defaultTitle = (
  <>
    GET A FREE <br /> CONSULTATION
  </>
);

const ContactForm = ({ 
  isShowMessage = false,
  headingText = "",
}: ContactFormProps) => { 
  
  const [country, setCountry] = useState("ae");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedCountry = countries.find((c) => c.code === country);
    const countryCode = selectedCountry?.countryCode || "";

    const payload = {
      name,
      email,
      phone: `${countryCode} ${phone}`,
      message,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email.");
    }
  };

  return (
    <div className="bg-black text-white flex justify-center items-center p-8 mt-7">
      <div className="bg-[#1E1E1E] w-[100%]  h-[auto] min-h-[445px] p-8 rounded-[1.5rem] shadow-lg flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            {headingText || defaultTitle}
          </h2>
          <p className="text-gray-400 text-center">
            Fill form below and our agent will contact you shortly
          </p>
        </div>

        {/* Form Start */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full items-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <input
              type="text"
              placeholder="Your name"
              className="p-4 w-full max-w-sm bg-[#141416] text-white rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your email"
              className="p-4 w-full max-w-sm bg-[#141416] text-white rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="flex items-center w-full max-w-sm bg-[#141416] rounded-[1.5rem]">
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
              </div>

              <input
                type="text"
                placeholder="Phone number"
                className="pl-4 p-4 w-full bg-transparent text-gray-400 focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Message Text Area */}
          {isShowMessage && (
            <div className="mt-4 w-full max-w-[74rem]">
              <textarea
                placeholder="Your message"
                className="w-full h-[14rem] p-4 bg-[#141416] text-white rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="px-12 w-[14rem] py-4 text-white font-semibold rounded-[2.5rem] hover:opacity-90"
              style={{
                background:
                  "linear-gradient(122.79deg, #C39D53 21.1%, #97733E 94.65%)",
              }}
            >
              SEND
            </button>
          </div>
        </form>
        {/* Form End */}

        {status && <p className="mt-4 text-yellow-400">{status}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
