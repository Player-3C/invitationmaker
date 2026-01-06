import Image from "next/image";

export default function Gallery() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="MyContainer">
        {/* Heading */}
        <div className="flex justify-center mb-4">
          <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#A100FF] to-[#FF6B81]">
            <span className="block px-4 py-1 text-sm rounded-full bg-[#F6D9FF] text-[#A100FF] font-medium">
              Discover
            </span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-center text-black">
          Design Your Cards with AI{" "}
        </h2>

        <p className="mt-4 text-center text-[#1e1e1e] text-base sm:text-lg md:text-[18px] max-w-4xl mx-auto">
          Each card design is uniquely created using your details, style
          preferences, and vision that enhance the feel of your card.
        </p>

        {/* GRID */}
        <div className="mt-6 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Row 1 */}
          <div className="grid gap-5">
            <Card src="/images/cards/1.png" size="tall" />
            <Card src="/images/cards/2.png" size="medium" />
            <Card src="/images/cards/3.png" size="small" />
          </div>

          {/* Row 2 */}
          <div className="grid gap-5">
            <Card src="/images/cards/4.png" size="medium" />
            <Card src="/images/cards/5.png" size="small" />
            <Card src="/images/cards/6.png" size="tall" />
          </div>

          {/* Row 3 */}
          <div className="grid gap-5">
            <Card src="/images/cards/7.png" size="small" />
            <Card src="/images/cards/8.png" size="tall" />
            <Card src="/images/cards/9.png" size="medium" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Card */
function Card({ src, size }) {
  const heights = {
    tall: "h-[650px]",
    medium: "h-[570px]",
    small: "h-[490px]",
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[26px]
      bg-[#fdf3fc] ${heights[size]}`}
    >
      <Image src={src} alt="AI Card" fill className="object-" />
    </div>
  );
}
