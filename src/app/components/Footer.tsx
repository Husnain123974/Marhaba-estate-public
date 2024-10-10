

import React from 'react';
import facebookSVG from '../../../public/icons/facebook.svg';
import instagramSVG from '../../../public/icons/instagram.svg';
import twitterSVG from '../../../public/icons/twitter.svg';

import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E1E1E] rounded-[24px] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left Logo Section */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={48} height={48} />
        </div>

        {/* Middle Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg 980:text-[10px] 980:text-[10px]">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
          <Link href="/about" className="hover:underline">
            ABOUT US
          </Link>
          <Link href="/services" className="hover:underline">
            SERVICES
          </Link>
          <Link href="/projects" className="hover:underline">
            PROJECTS
          </Link>
          <Link href="/contact" className="hover:underline">
            CONTACT
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
        </nav>

        {/* Right Social Icons */}
        <div className="flex space-x-4">
          <Link href="#" aria-label="Facebook" className="relative">
            <div className="border-2 border-[#C39D53] rounded-full h-10 w-10 flex items-center justify-center">
              <Image
                src={facebookSVG}
                alt="Facebook"
                className="h-6 w-6"
              />
            </div>
          </Link>

          <Link href="#" aria-label="Instagram" className="relative">
            <div className="border-2 border-[#C39D53] rounded-full h-10 w-10 flex items-center justify-center">
              <Image
                src={instagramSVG}
                alt="Instagram"
                className="h-6 w-6"
              />
            </div>
          </Link>

          <Link href="#" aria-label="Twitter" className="relative">
            <div className="border-2 border-[#C39D53] rounded-full h-10 w-10 flex items-center justify-center">
              <Image
                src={twitterSVG}
                alt="Twitter"
                className="h-6 w-6"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-4"></div>

      {/* Copyright Section */}
      <div className="container mx-auto text-center py-4">
        <p className="text-sm text-gray-400">
          @ Copyright 2024 Marhaba Estates - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

 