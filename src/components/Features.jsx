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
    <div id="features" className="bg-white py-10 md:py-16">
      <section>
        <div className="MyContainer grid gap-1 md:gap-3">

          {/* <div className="flex justify-center mb-4">
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#A100FF] to-[#FF6B81]">
              <span className="block px-4 py-1 text-sm rounded-full bg-[#F6D9FF] font-medium">
                <span className="bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </span>
            </div>
          </div> */}

          <h2 className="text-center">
            Advanced Features
          </h2>

          <p className="mt-4 text-center max-w-4xl mx-auto">
            Powerful tools that help you design stunning invitations and
            greetings faster, smarter, and effortlessly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6 md:pt-14 items-stretch">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-[2px] rounded-[37px] bg-gradient-to-r from-[#A100FF] to-[#FF6B81] shadow-lg"
              >
                <div className="h-full rounded-[35px] bg-[#fdf3fc] px-3 py-3 md:shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col justify-between">
                  {/* Full-width Card Title */}
                  <div className="w-full">
                    <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#A100FF] to-[#FF6B81] w-full">
                      <div className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F1D5FF] to-[#FFD9E2] py-3 px-6 w-full">
                        <h3 className="text-center">
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

                  <span className="text-[#6B6B6B] text-center p-4 md:px-6 md:py-10 lg:px-25 lg:py-14 text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed">
                    {f.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
