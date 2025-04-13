import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="px-6 pt-36 py-20 md:px-14 md:pt-48 md:red  md:pb-36 min-h-screen"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-24">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
            Accounting Information System Online
          </p>
          <p className="mt-4 text-base sm:text-lg italic">
            &quot;Organization Management Made Easier Than Ever&quot;
          </p>
          <button className="bg-blue-800 text-white px-5 py-3 rounded-lg mt-6 hover:bg-blue-700 transition w-full sm:w-auto">
            Book Free Consultation
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-auto flex justify-center items-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            {/* Blue shadow box behind */}
            <div className="absolute top-4 left-4 w-full h-full bg-blue-800 rounded-xl z-0"></div>

            {/* Image in front */}
            <div className="relative z-10">
              <Image
                src="/Photo1.png"
                alt="Aiso Image"
                width={400}
                height={200}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
