"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#EED3FF] via-[#F5D9FF] to-[#FFD9E2] md:py-25 py-18">
      <div className="MyContainer">
        <div className="flex flex-col items-center text-center">
          {/* LOGO */}
          <div className="w-16 h-16 overflow-hidden mb-3">
            <Image
              src="/images/logo.png"
              alt="AR Drawing"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>

          {/* TITLE */}
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent mb-5 md:mb-10">
            Invitation Maker
          </h3>

          {/* LINKS */}
          <div className="flex items-center md:gap-14 gap-8 md:mb-10 mb-5">
            <Link
              href=""
              className="text-[16px] md:text-[20px] font-bold text-gray-900 hover:opacity-80 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href=""
              className="text-[16px] md:text-[20px] font-bold text-gray-900 hover:opacity-80 transition"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* COPYRIGHT */}
          <span className="text-[18px] text-black leading-relaxed">
            © 2025 Invitation Maker. Built with{" "}
            <span className="text-red-500">❤</span> by Devsrank Pvt. Ltd.
            <br />
            All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
