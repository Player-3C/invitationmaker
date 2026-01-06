import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        bg-white
        flex
        items-start md:items-center
        min-h-[88svh] md:pt-10
      "
    >
      <div className="MyContainer grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center">
        {/* IMAGE */}
        <div className="relative w-full h-[300px] md:h-full order-1 md:order-2 mt-6 md:mt-0">
          <Image
            src="/images/hero.png"
            alt="Invitation Maker"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* TEXT */}
        <div
          className="flex flex-col justify-center items-center md:items-start order-2 md:order-1"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <h1 className="text-center md:text-left">
            Create Stunning <br />
            Invites With
            <br />
            <span className="txt-gradient">
              Invitation Maker
            </span>{" "}
          </h1>

          <p className="mt-3 md:mt-6 text-[#1e1e1e] max-w-lg md:leading-8 lg:leading-10 tracking-[0.02em] text-center md:text-left">
            Design invitations and greetings online using smart AI tools -
            beautifully customized for every occasion.
          </p>

          <div className="flex justify-center md:justify-start my-4 md:my-8 w-full">
            <button className="btn-gradient flex items-center gap-3 px-10 py-3 rounded-full text-white shadow-lg text-[16px] md:text-[20px] font-medium transition-transform duration-300 ease-out hover:scale-105 hover:opacity-90">
              {" "}
              <Image
                src="/images/btnstar.png"
                alt="Star Icon"
                width={18}
                height={18}
                className="object-contain"
              />
              <span>Generate Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
