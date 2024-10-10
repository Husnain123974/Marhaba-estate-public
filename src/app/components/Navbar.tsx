 
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for Next.js navigation
import logo from "../../../public/images/logo.png"; // Replace with your image path
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For hamburger icons

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false); // State to manage hamburger toggle

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-black fixed w-full h-[88px] flex items-center justify-between px-8 py-6 z-50">
      {/* Logo and Nav Items */}
      <div className="flex items-center space-x-20 md:space-x-12"> {/* Adjust space for smaller screens */}
        {/* Logo */}
        <Image src={logo} alt="Logo" width={48} height={48} />

        {/* Nav Items (Hidden on small screens) */}
        <ul className="hidden md:flex space-x-6 text-white uppercase text-sm font-semibold tracking-wide">
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </div>

      {/* Contact Us Button (Hidden on small screens) */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/contact">
          <div className="flex items-center bg-gradient-to-r from-[#c5a263] to-[#ab8235] text-white py-2 px-6 rounded-full cursor-pointer">
            <span className="font-semibold">Contact Us</span>
          </div>
        </Link>

        {/* Arrow Circle */}
        <div className="flex items-center justify-center bg-[#222222] rounded-full w-10 h-10">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="white" opacity="0.1"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27.2888 28.1773L18.3081 19.349L19.2895 18.3506L28.2703 27.1789L28.2065 18.8571L29.6008 18.8452L29.6924 29.5585L18.9791 29.6502L18.9672 28.2559L27.2888 28.1773Z" fill="#F4F4F4"/>
          </svg>
        </div>
      </div>

      {/* Hamburger Menu Icon (Visible on small screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleNav} className="text-white">
          {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-[88px] left-0 w-full bg-black text-white transition-transform ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/" onClick={toggleNav}>Home</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/about" onClick={toggleNav}>About Us</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/services" onClick={toggleNav}>Services</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/projects" onClick={toggleNav}>Projects</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/faq" onClick={toggleNav}>FAQ</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/contact" onClick={toggleNav}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
