import Image from "next/image";

export default function Explore() {
  return (
    <div id="explore" className="bg-[#fdf3fc] py-10 md:py-20">
      <section>
        <div className="MyContainer grid gap-1 md:gap-3">
          <div className="flex justify-center mb-4">
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#A100FF] to-[#FF6B81]">
              <span className="block px-4 py-1 text-sm rounded-full bg-[#F6D9FF] text-[#A100FF] font-medium">
                Simple Process
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-center text-black">
            How Invitation Maker Works
          </h2>

          <p className="mt-4 text-center text-[#1e1e1e] text-base sm:text-lg md:text-[18px] max-w-4xl mx-auto">
            Transform your vision into stunning invitations with our AI-powered
            design tools in just 6 steps.
          </p>

          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="flex flex-col justify-center gap-5 items-center md:items-start order-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81]">
                <span className="block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium">
                  Step 1
                </span>
              </div>
              <h3 className="text-[24px] text-center md:text-left md:text-[30px] font-semibold leading-tight text-black">
                Choose Occasion Type
              </h3>

              <p className="text-[#6B6B6B] text-[16px] md:text-[18px] leading-7 text-center md:text-left">
                Choose the perfect occasion to get started with your invitation
                and let AI do the rest. Every celebration begins with the right
                occasion. Select from weddings, birthdays, anniversaries, baby
                showers, bridal showers, and more. Our AI suggest the perfect
                style for each occasion.
              </p>
            </div>

            <div className="relative w-full h-[300px] md:h-[600px] order-2 md:order-2">
              <Image
                src="/images/explore1.png"
                alt="Invitation Maker"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="relative w-full h-[300px] md:h-[600px] order-2 md:order-1 mt-5 md:mt-0">
              <Image
                src="/images/explore2.png"
                alt="Invitation Maker"
                fill
                className="object-contain"
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

              <p className="text-[#6B6B6B] text-[16px] md:text-[18px] leading-7 text-center md:text-left">
                Upload the details to start designing your invitation. Enter
                event information like names, date, time, location, and
                messages, and we’ll seamlessly place everything into a designed
                card. Invitation Maker generate invitation and greeting cards
                based on your choice and preferences.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="flex flex-col justify-center gap-5 items-center md:items-start order-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81]">
                <span className="block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium">
                  Step 3
                </span>
              </div>
              <h3 className="text-[24px] text-center md:text-left md:text-[30px] font-semibold leading-tight text-black">
                Choose Your Style
              </h3>

              <p className="text-[#6B6B6B] text-[16px] md:text-[18px] leading-7 text-center md:text-left">
                Choose the style for your card from the wide variety of trendy,
                minimal, traditional, and other design styles that match your
                vision anf customize the look of your invitation card in just a
                tap. From timeless classics to stylish modern themes, every
                invitation is designed to make your moment unforgettable.
              </p>
            </div>

            <div className="relative w-full h-[300px] md:h-[600px] order-2 md:order-2">
              <Image
                src="/images/explore3.png"
                alt="Invitation Maker"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="relative w-full h-[300px] md:h-[600px] order-2 md:order-1">
              <Image
                src="/images/explore4.png"
                alt="Invitation Maker"
                fill
                className="object-contain"
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

              <p className="text-[#6B6B6B] text-[16px] md:text-[18px] leading-7 text-center md:text-left">
                Choose the size of your card that suit your needs or fits your
                invitation style and platform to look perfect. Select from
                multiple formats to ensure yor invitation card looks great
                everywhere. Every detail is optimized to maintain clarity,
                balance, and design quality.{" "}
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="flex flex-col justify-center gap-5 items-center md:items-start order-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81]">
                <span className="block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium">
                  Step 5
                </span>
              </div>
              <h3 className="text-[24px] text-center md:text-left md:text-[30px] font-semibold leading-tight text-black">
                Pick a Color Palette
              </h3>

              <p className="text-[#6B6B6B] text-[16px] md:text-[18px] leading-7 text-center md:text-left">
                Explore beautiful color combinations and let the AI to select
                the perfect colors based on your theme and preferences. Create
                harmony and visual appeal instantly. From soft pastels to bold
                and vibrant tones, find the perfect colors to express your theme
                and personality.{" "}
              </p>
            </div>

            <div className="relative w-full h-[300px] md:h-[600px] order-2 md:order-2">
              <Image
                src="/images/explore5.png"
                alt="Invitation Maker"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Step 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-0 gap-1 md:gap-12 items-center w-full">
            <div className="relative w-full h-[300px] md:h-[600px] order-2 md:order-1 mt-5 md:mt-0">
              <Image
                src="/images/explore6.png"
                alt="Invitation Maker"
                fill
                className="object-contain"
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

              <p className="text-[#6B6B6B] text-[16px] md:text-[18px] leading-7 text-center md:text-left">
                See your invitation or greeting come to life with real time
                preview. Once you satisfied, download it instantly in
                high-quality formats, ready to share directly via email and
                social media.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
