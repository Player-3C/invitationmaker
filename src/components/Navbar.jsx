"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "Features", "Explore", "App", "Contact Us"];

  return (
    <header className="w-full bg-gradient-to-r from-[#EED3FF] via-[#F5D9FF] to-[#FFD9E2] shadow-[0_10px_30px_0_rgba(0,0,0,0.12)]">
      <nav className="MyContainer flex items-center justify-between gap-25 h-[12vh] md:h-[12vh] relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="h-[40px] w-[250px] md:h-[40px] md:w-[50px] lg:h-[9vh] lg:w-[11vh]"
          />
          {/* <h2 className="hidden md:block font-bold bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent text-[22px] whitespace-nowrap">
            Invitation Maker
          </h2> */}
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center justify-center w-full">
          <ul className="hidden md:flex items-center gap-20 text-[18px] font-semibold text-gray-900">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-[#7A00FF] transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* IMAGE pushed to right */}
          <div className=" md:ml-auto">
            <Image
              src="/images/appstore.png"
              alt="Download on the App Store"
              width={100}
              height={40}
              className="w-[20vh]"
            />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span
              className={`h-0.5 w-6 bg-gray-900 transition ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-900 transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-900 transition ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="z-10 md:hidden absolute top-[10vh] left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl shadow-lg flex flex-col divide-y">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-center text-black font-semibold text-[16px] hover:bg-[#FFE6E1]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
