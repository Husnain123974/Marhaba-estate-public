"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import contactSVG from "../../../public/icons/contactus.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation"; // Import the hook
const NavBar = () => {
  // State
  const [navOpen, setNavOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  // Check if the current route includes 'admin'
  const pathname = usePathname();
  const isAdminRoute = pathname.includes("admin");

  // Do not render NavBar if on an admin route
  if (isAdminRoute) {
    return null;
  }

  // Types
  interface NavbarItem {
    name: string;
    href: string;
  }

  //Nav Items array
  const navItems: NavbarItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "FAQ", href: "/contact" },
  ];

  // Function to handle nav item click
  const handleNavClick = (item: NavbarItem) => {
    setSelectedItem(item.name);
  };

  // Function to apply gradient on text if the item is selected
  const getNavItemClasses = (item: NavbarItem) => {
    return `cursor-pointer font-inter text-[14px] font-bold leading-[21px] text-left p-2 ${
      selectedItem === item.name ? "text-gradient" : "hover:text-gray-400"
    }`;
  };

  //Function to handle mobile nav
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  //main HTML content
  return (
    <nav className="bg-black fixed w-full h-[88px] flex items-center justify-between px-4 py-6 z-50">
      <div className="flex items-center space-x-20 md:space-x-12">
        {/* Logo */}
        <Image src={logo} alt="Logo" width={28} height={30} />

        <ul className="hidden md:flex space-x-6 text-white uppercase text-sm font-semibold tracking-wide">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={getNavItemClasses(item)}
              onClick={() => handleNavClick(item)}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action and Icon */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/contact">
          <div className="flex items-center bg-gradient-to-r from-[#c5a263] to-[#ab8235] text-white py-2 px-6 rounded-full cursor-pointer">
            <span className="font-semibold">Contact Us</span>
          </div>
        </Link>

        <div className="flex items-center justify-center bg-[#222222] rounded-full w-10 h-10">
          <Image src={contactSVG} alt="contact-us" />
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleNav} className="text-white">
          {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[88px] left-0 w-full bg-black text-white transition-transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={getNavItemClasses(item)}
              onClick={() => handleNavClick(item)}
            >
              <Link href={item.href} onClick={toggleNav}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
