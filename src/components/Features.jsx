import Image from "next/image";

const features = [
  {
    img: "/images/invitationcard.png",
    title: "Invitation Cards",
    desc: "Create stunning invitation cards for every occasion with ease. Invitation Maker helps you design personalized cards in minutes.",
  },
  {
    img: "/images/pencil-line.png",
    title: "Greeting Cards",
    desc: "Create stunning greeting cards for every occasion with ease. Invitation Maker helps you design personalized cards in minutes.",
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-10 md:pt-10 md:pb-20">
      <section>
        <div className="MyContainer grid gap-1 md:gap-3">
          <div className="flex justify-center mb-4">
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#A100FF] to-[#FF6B81]">
              <span className="block px-4 py-1 text-sm rounded-full bg-[#F6D9FF] text-[#A100FF] font-medium">
                Powerful Features
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-black">
            Advanced Features
          </h2>

          <p className="mt-4 text-center text-[#444] text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Powerful tools that help you design stunning invitations and
            greetings faster, smarter, and effortlessly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6 md:pt-14 items-stretch">
            {features.map((f) => (
              <div
                key={f.title} // using title as key since ids removed
                className="p-[2px] rounded-[37px] bg-gradient-to-r from-[#A100FF] to-[#FF6B81] shadow-lg"
              >
                <div className="h-full rounded-[35px] bg-[#fdf3fc] px-3 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col justify-between">
                  {/* Full-width Card Title */}
                  <div className="w-full">
                    <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#A100FF] to-[#FF6B81] w-full">
                      <div className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F1D5FF] to-[#FFD9E2] py-3 px-6 w-full">
                        <h3 className="text-black text-[18px] md:text-[20px] font-bold text-center flex-1">
                          {f.title}
                        </h3>
                        <Image
                          src={f.img}
                          alt={f.title}
                          width={22}
                          height={22}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-[#1e1e1e] text-center p-4 md:p-10 text-[16px] md:text-[17px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
