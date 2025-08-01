"use client";

import React, { useRef } from "react";

const logos = [
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
  "/logos/logo11.png",
  "/logos/logo12.png",
  "/logos/logo13.png",
  "/logos/logo14.png",
  "/logos/logo15.png",
  "/logos/logo16.png",
  "/logos/logo17.png",
  "/logos/logo18.png",
  "/logos/logo19.png",
];

export default function LogoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full my-10 overflow-hidden bg-white py-4">
      <div
        ref={trackRef}
        className="flex md:gap-50 gap-20 w-max animate-scroll"
        onMouseEnter={() => {
          trackRef.current?.classList.add("animate-scroll");
        }}
        onMouseLeave={() => {
          trackRef.current?.classList.add("animate-scroll");
        }}
      >
        {/* duplicate logos for seamless loop */}
        {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
