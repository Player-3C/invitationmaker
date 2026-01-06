"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Apps() {
  const scrollRef = useRef(null);
  const centerRef = useRef(null);
  const [mounted, setMounted] = useState(false); // SSR-safe

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll center card on mobile
  const scrollToCenter = () => {
    if (!scrollRef.current || !centerRef.current) return;
    if (window.innerWidth >= 768) return; // only mobile

    const container = scrollRef.current;
    const centerItem = centerRef.current;

    const scrollLeft =
      centerItem.offsetLeft -
      container.clientWidth / 1.8 +
      centerItem.clientWidth / 2;

    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  // Only render the scrollable div **after mount** to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div id="app" className="bg-white py-6 md:pt-10 md:pb-10">
      <section>
        <div className="MyContainer grid gap-1 md:gap-3">

          {/* Title */}
          <h2 className="text-center">
            Discover Everything in Invitation Maker
          </h2>

          <p className="mt-4 text-center mx-auto">
            Explore beautiful invitation and greeting designs and creative ideas
            that spark inspiration and bring every occasion story to life.
          </p>

          {/* Store buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 mx-auto w-fit">
            <Image
              src="/images/googleplays.png"
              alt="Get it on Google Play"
              width={190}
              height={40}
              className="w-[150px] md:w-[170px]"
            />
            <Image
              src="/images/appstores.png"
              alt="Download on the App Store"
              width={180}
              height={40}
              className="w-[150px] md:w-[180px]"
            />
          </div>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="mt-8 md:mt-16 flex items-center gap-10 
             overflow-x-scroll md:overflow-x-scroll lg:overflow-x-visible
             whitespace-nowrap md:whitespace-nowrap lg:whitespace-normal 
             touch-pan-x scrollbar-hide
             lg:justify-center"
          >
            <Image
              src="/images/app-card-1.png"
              alt="AI Invitation Card Maker"
              width={170}
              height={420}
              className="shrink-0 md:w-[170px]"
            />

            <Image
              src="/images/app-card-2.png"
              alt="Decorate Invitation Cards"
              width={210}
              height={420}
              className="shrink-0 md:w-[220px]"
            />

            {/* Center Card */}
            <div ref={centerRef} className="shrink-0">
              <Image
                src="/images/app-card-center.png"
                alt="Auto Save and Share"
                width={240}
                height={500}
                onLoad={scrollToCenter} // scroll only after image loads
                className=" md:w-[270px]"
              />
            </div>

            <Image
              src="/images/app-card-4.png"
              alt="Birthday Card & Invitation"
              width={210}
              height={420}
              className="shrink-0 md:w-[220px]"
            />

            <Image
              src="/images/app-card-5.png"
              alt="Eid Card & Invitation"
              width={170}
              height={420}
              className="shrink-0 md:w-[170px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
