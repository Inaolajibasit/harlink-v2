'use client';
import { FaCar, FaArrowUp, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F08825] text-white px-6 md:px-[20rem] py-12 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">HARLINK</h2>
          <p>Shipping. Warehousing. Haulage.<br /> Simplified.</p>
          <div className="flex gap-3">
            <div className="bg-white text-[#F08825] cursor-pointer p-3 rounded-full"> <Link href={'#'}> <FaFacebook /> </Link> </div>
            <div className="bg-white text-[#F08825] cursor-pointer p-3 rounded-full"> <Link href={'#'}>  <FaLinkedin /> </Link>  </div>
            <div className="bg-white text-[#F08825] cursor-pointer p-3 rounded-full"> <Link href={'#'}>  <FaTwitter />  </Link> </div>
          </div>
          <p className="text-sm pt-6">© 2025 Harlink Investment</p>
        </div>

        {/* Right section */}
        <div className="flex flex-col md:flex-row flex-1 justify-between gap-10">
          <div className="space-y-2">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Information</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>harlinkinvestment@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold mt-2">Phone</h4>
              <p>08033047379 <br /> 08167202457</p>
            </div>
            <div>
              <h4 className="font-semibold mt-2">Location</h4>
              <p>34, Rhodes Crescent Apapa Lagos </p>
            </div>
            <p className="pt-3">Website by Inaolaji Basit</p>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="text-center w-full mt-12">
        <h1 className="text-5xl font-bold opacity-10 tracking-[10px] md:tracking-[1.7rem]">HARLINK INVESTMENT Ltd</h1>

        <div className="mt-6 flex justify-center">
          <button
            onClick={scrollToTop}
            className="bg-orange-300 hover:bg-orange-400 border-1 transition justify-between text-white px-6 py-3 w-full rounded-full flex items-center gap-2"
          >
            <span>Back to the top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
