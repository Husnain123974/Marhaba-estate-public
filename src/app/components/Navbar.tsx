 
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';  
import logo from "../../../public/images/logo.png";  
import contactSVG from '../../../public/icons/contactus.svg'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";  

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);  

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-black fixed w-full h-[88px] flex items-center justify-between px-8 py-6 z-50">
      {/* Logo and Nav Items */}
      <div className="flex items-center space-x-20 md:space-x-12">  
        {/* Logo */}
        <Image src={logo} alt="Logo" width={48} height={48} />

 
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

 
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/contact">
          <div className="flex items-center bg-gradient-to-r from-[#c5a263] to-[#ab8235] text-white py-2 px-6 rounded-full cursor-pointer">
            <span className="font-semibold">Contact Us</span>
          </div>
        </Link>

   
        <div className="flex items-center justify-center bg-[#222222] rounded-full w-10 h-10">
        <Image src={contactSVG} alt='contact-us'/>
        </div>
      </div>

 
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
