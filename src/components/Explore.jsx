import Image from "next/image";

export default function Explore() {
  return (
    <div id="explore" className="bg-[#fdf3fc] py-10 md:py-14">
      <section>
        <div className="MyContainer grid gap-1 md:gap-3">
          <h2 className="text-center">How Invitation Maker Works</h2>

          <p className="mt-4 text-center max-w-4xl mx-auto">
            Transform your vision into stunning invitations with our AI-powered
            design tools in just 6 steps.
          </p>

          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-6 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="flex flex-col justify-center gap-5 items-center md:items-start order-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81]">
                <span className="block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium">
                  Step 1
                </span>
              </div>
              <h3 className="text-[24px] text-center md:text-left md:text-[30px] font-semibold leading-tight text-black">
                Choose Occasion Type
              </h3>

              <span className="text-[#1e1e1e] text-[16px] md:text-[18px] lg:text-[22px] text-center md:text-left">
                Choose the perfect occasion to get started with your invitation
                and let AI do the rest. Every celebration begins with the right
                occasion. Select from weddings, birthdays, anniversaries, baby
                showers, bridal showers, and more. Our AI suggest the perfect
                style for each occasion.
              </span>
            </div>

            <div className="order-2 md:order-2">
              <Image
                src="/images/explore1.png"
                alt="Invitation Maker"
                width={800}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-6 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="order-2 md:order-1 mt-5 md:mt-0">
              <Image
                src="/images/explore2.png"
                alt="Invitation Maker"
                width={800}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>

            <div className="flex flex-col justify-center gap-5 items-center md:items-start order-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81]">
                <span className="block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium">
                  Step 2
                </span>
              </div>
              <h3 className="text-[24px] text-center md:text-left md:text-[30px] font-semibold leading-tight text-black">
                Upload Your Details
              </h3>

              <span className="text-[#1e1e1e] text-[16px] md:text-[18px] lg:text-[22px] text-center md:text-left">
                Upload the details to start designing your invitation. Enter
                event information like names, date, time, location, and
                messages, and we’ll seamlessly place everything into a designed
                card. Invitation Maker generate invitation and greeting cards
                based on your choice and preferences.
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-6 md:pt-0 gap-1 md:gap-12 items-center w-full">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center gap-5 items-center md:items-start order-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81]">
                <span className="block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium">
                  Step 3
                </span>
              </div>

              <h3 className="text-[24px] text-center md:text-left md:text-[30px] font-semibold leading-tight text-black">
                Choose Your Style
              </h3>

              <span className="text-[#1e1e1e] text-[16px] md:text-[18px] lg:text-[22px] text-center md:text-left">
                Choose the style for your card from the wide variety of trendy,
                minimal, traditional, and other design styles that match your
                vision and customize the look of your invitation card in just a
                tap. From timeless classics to stylish modern themes, every
                invitation is designed to make your moment unforgettable.
              </span>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-2 md:order-2">
              <Image
                src="/images/explore3.png"
                alt="Invitation Maker"
                width={800}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-6 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="order-2 md:order-1">
              <Image
                src="/images/explore4.png"
                alt="Invitation Maker"
                width={800}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>

            <div className="flex flex-col justify-center gap-5 items-center md:items-start order-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81]">
                <span className="block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium">
                  Step 4
                </span>
              </div>
              <h3 className="text-[24px] text-center md:text-left md:text-[30px] font-semibold leading-tight text-black">
                Choose A Size
              </h3>

              <span className="text-[#1e1e1e] text-[16px] md:text-[18px] lg:text-[22px] text-center md:text-left">
                Choose the size of your card that suit your needs or fits your
                invitation style and platform to look perfect. Select from
                multiple formats to ensure yor invitation card looks great
                everywhere. Every detail is optimized to maintain clarity,
                balance, and design quality.{" "}
              </span>
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-6 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="flex flex-col justify-center gap-5 items-center md:items-start order-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81]">
                <span className="block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium">
                  Step 5
                </span>
              </div>
              <h3 className="text-[24px] text-center md:text-left md:text-[30px] font-semibold leading-tight text-black">
                Pick a Color Palette
              </h3>

              <span className="text-[#1e1e1e] text-[16px] md:text-[18px] lg:text-[22px] text-center md:text-left">
                Explore beautiful color combinations and let the AI to select
                the perfect colors based on your theme and preferences. Create
                harmony and visual appeal instantly. From soft pastels to bold
                and vibrant tones, find the perfect colors to express your theme
                and personality.{" "}
              </span>
            </div>

            <div className="order-2 md:order-2">
              <Image
                src="/images/explore5.png"
                alt="Invitation Maker"
                width={800}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Step 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-6 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className=" order-2 md:order-1 mt-5 md:mt-0">
              <Image
                src="/images/explore6.png"
                alt="Invitation Maker"
                width={800}
                height={500}
                className="w-full h-full"
                priority
              />
            </div>

            <div className="flex flex-col justify-center gap-5 items-center md:items-start order-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81]">
                <span className="block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium">
                  Step 6
                </span>
              </div>
              <h3 className="text-[24px] text-center md:text-left md:text-[30px] font-semibold leading-tight text-black">
                Preview & Download
              </h3>

              <span className="text-[#1e1e1e] text-[16px] md:text-[18px] lg:text-[22px] text-center md:text-left">
                See your invitation or greeting come to life with real time
                preview. Once you satisfied, download it instantly in
                high-quality formats, ready to share directly via email and
                social media.{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
