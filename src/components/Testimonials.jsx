"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "John Cena",
    text: "Invitation Maker completely changed how I design my invites! It gives amazing results in seconds.",
  },
  {
    name: "Emma Watson",
    text: "I loved how easy and clean everything feels. Perfect for beginners.",
  },
  {
    name: "Alex Carter",
    text: "Beautiful templates and very smooth experience. Highly recommended.",
  },
  {
    name: "Sarah Khan",
    text: "Everything looks premium. I shared my invitation in minutes.",
  },
  {
    name: "Michael Brown",
    text: "Fast, simple, and professional results every time.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(3);

  const startX = useRef(0);
  const sliderRef = useRef(null);

  // ✅ Detect screen size
  useEffect(() => {
    const updatePerView = () => {
      setPerView(window.innerWidth < 768 ? 1 : 3);
      setActive(0); // reset position on resize
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);

    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  // ✅ Correct slide count
  const totalSlides = reviews.length - perView + 1;

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
    sliderRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e) => {
    const diff = e.clientX - startX.current;

    if (diff < -80 && active < totalSlides - 1) {
      setActive(active + 1);
    } else if (diff > 80 && active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="MyContainer">
        {/* Badge */}
        <div className="flex justify-center mb-3 md:mb-5">
          <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#A100FF] to-[#FF6B81]">
            <span className="block px-4 py-1 text-sm rounded-full bg-[#F6D9FF] text-[#A100FF] font-medium">
              Reviews
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-[36px] md:text-[52px] font-bold md:font-extrabold text-black">
          What People Say About Us!
        </h2>

        <p className="mt-2 md:mt-4 text-center max-w-3xl mx-auto text-[#1e1e1e] text-[16px] md:text-[18px]">
          Loved by users who create beautiful invitations effortlessly.
        </p>

        {/* Slider viewport */}
        <div className="mt-14 overflow-hidden">
          <div
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(-${active * (100 / perView)}%)`,
            }}
          >
            {reviews.map((r, i) => (
              <div key={i} className="w-full md:w-1/3 px-2 shrink-0">
                <div className="h-full rounded-[26px] p-[1.5px] bg-gradient-to-br from-[#A100FF] to-[#FF6B81]">
                  <div className="relative h-full rounded-[24px] bg-gradient-to-r from-[#faf3ff] via-[#fbf1ff] to-[#fff3f6] p-10">
                    <Image
                      src="/images/quote.png"
                      alt="quote"
                      width={42}
                      height={42}
                      className="absolute top-8 left-6"
                    />

                    <p className="mt-12 text-[#666] text-[15.5px] leading-relaxed">
                      {r.text}
                    </p>

                    <p className="mt-6 text-center font-medium bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                      {r.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full transition ${
                active === i ? "bg-[#FF2F92]" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
