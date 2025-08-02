"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ffffff50] backdrop-blur-sm fixed w-full z-50 top-0 start-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link href="#" className="flex items-center space-x-3">
          <Image src="/Harlink3.svg" width={30} height={30} alt="Logo" />
          <span className="text-xl md:text-2xl font-bold text-black">HARLINK</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
            {[{name:"Home", link: '/'}, {name:"Services", link: "/#services"}, {name:"About Us", link:"/aboutus"}, {name:"Team", link: '/#team'}].map((text, i) => (
                <Link
                key={i}
                href={text.link}
                className="relative text-black hover:text-[#F08825] font-[600] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F08825] hover:after:w-full after:transition-all after:duration-300"
                >
                {text.name}
                </Link>
            ))}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 md:space-x-0">
          <Link href={'/contact'} target="-blank">
            <button className="hidden md:inline-block bg-[#F08825] hover:bg-[#BD6512] text-white font-medium rounded-lg text-sm px-4 py-2">
              Get Started
            </button>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none relative w-10 h-10"
          >
            {/* Animated hamburger */}
            <div className="relative w-6 h-6">
              <span
                className={`absolute rounded-2xl h-[3px] w-6 bg-black transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-45 top-2.5" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute rounded-2xl h-[3px] w-6 bg-black transition-opacity duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "top-2.5"
                }`}
              ></span>
              <span
                className={`absolute rounded-2xl h-[3px] w-6 bg-black transition-transform duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 bottom-2.5" : "bottom-0"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-4 bg-[#ffffff1f] backdrop-blur-sm shadow-md py-6 text-lg font-medium">
          <Link href="/" className="text-black hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#services" className="text-black hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Service</Link>
          <Link href="/aboutus" className="text-black hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/#team" className="text-black hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Team</Link>
          <Link href={'/contact'}>
          <button className="bg-[#F08825] hover:bg-[#BD6512] text-white font-medium rounded-lg text-sm px-4 py-2">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
