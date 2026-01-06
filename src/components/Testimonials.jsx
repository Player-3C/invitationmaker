"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "John Cena",
    text: "“Invitation Maker completely changed how I design my invites! I just start using it, and within seconds, it gave me amazing invitation ideas.”",
  },
  {
    name: "Emma Watson",
    text: "“Using Invitation Maker made creating invites so easy! I just entered my details, and instantly, I got beautiful designs ready to use.”",
  },
  {
    name: "Alex Carter",
    text: "“I love how fast Invitation Maker works! In moments, I had unique invitation templates that perfectly fit my event.”",
  },
  {
    name: "Sarah Khan",
    text: "“Invitation Maker is a game-changer! I added my preferences, and within seconds, it produced stunning invitations I could share immediately.”",
  },
  {
    name: "Michael Brown",
    text: "“Creating invites has never been simpler! I just started, and Invitation Maker instantly suggested gorgeous designs that I loved.”",
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
    <section className="bg-white py-10 md:py-1 lg:py-16">
      <div className="MyContainer">

        {/* Title */}
        <h2 className="text-center">
          What People Say About Us!
        </h2>

        <p className="mt-2 md:mt-4 text-center max-w-3xl mx-auto">
          Loved by users who create beautiful invitations effortlessly.
        </p>

        {/* Slider viewport */}
        <div className="mt-6 md:mt-14 overflow-hidden">
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
                  <div className="relative h-full rounded-[24px] bg-gradient-to-r from-[#faf3ff] via-[#fbf1ff] to-[#fff3f6] p-10 md:p-8 lg:p-10">
                    <Image
                      src="/images/quote.png"
                      alt="quote"
                      width={35}
                      height={35}
                      className="absolute top-8 left-6"
                    /><br />

                    <span className="mt-12 text-[#666] text-[16px] leading-relaxed">
                      {r.text}
                    </span><br />

                    <div className="flex flex-col items-center">
                      <span className="mt-2 text-center font-medium bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                      {r.name}
                    </span>
                    </div>
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
