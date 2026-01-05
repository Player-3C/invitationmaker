"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contactus" className="bg-white py-10 md:py-16">
      <div className="MyContainer grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-start">
        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2">
          {/* GRADIENT BADGE */}
          <div className="inline-flex mb-4 sm:mb-6">
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#A100FF] to-[#FF6B81]">
              <span className="block px-3 sm:px-4 py-1 text-xs sm:text-sm md:text-sm rounded-full bg-gradient-to-r from-[#f8edff] via-[#fbf1ff] to-[#fff1f5] text-[#A100FF] font-medium">
                Contact
              </span>
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-black">
            Contact Us
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 sm:mt-4 text-[#1e1e1e] text-[15px] sm:text-[16px] md:text-[18px] max-w-full ">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6 text-[#111] text-sm sm:text-[16px]">
            <div className="flex items-center gap-3 sm:gap-5">
              <Image
                src="/images/mail.png"
                alt="email"
                width={20}
                height={20}
              />
              <span className="max-w-full sm:max-w-sm text-[16px] md:text-[18px]">
                hello@devsrank.com
              </span>
            </div>

            <div className="flex items-start gap-3 sm:gap-5">
              <Image
                src="/images/location.png"
                alt="location"
                width={22}
                height={22}
              />
              <span className="max-w-full sm:max-w-lg text-[16px] md:text-[18px]">
                Office #112, 2nd Floor Kohinoor Plaza 1, Faisalabad, Punjab,
                Pakistan
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              <Image
                src="/images/phone.png"
                alt="phone"
                width={20}
                height={20}
              />
              <span className="max-w-full sm:max-w-sm text-[16px] md:text-[18px]">
                +92 (300) 1234 968
              </span>
            </div>
          </div>
        </div>

        {/* LEFT FORM */}
        <div className="order-2 lg:order-1 space-y-4 sm:space-y-5 mt-8 lg:mt-0">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <Input placeholder="What's your interests" />
          <Textarea placeholder="Message" />

          <button className="w-full sm:w-auto bg-gradient-to-r from-[#9B1FFF] to-[#FF6B81] text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.97]">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

/* INPUT COMPONENTS */
function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-[35px] bg-gradient-to-r from-[#f8edff] via-[#fbf1ff] to-[#fff1f5] text-[#606267] focus:outline-none"
    />
  );
}

function Textarea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-[35px] bg-gradient-to-r from-[#f8edff] via-[#fbf1ff] to-[#fff1f5] text-[#606267] focus:outline-none resize-none h-32 sm:h-36"
    />
  );
}
