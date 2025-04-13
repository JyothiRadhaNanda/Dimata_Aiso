import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="p-6 pt-40 pb-32 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Gambar */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/Photo2.png"
            alt="Aiso Image"
            width={600}
            height={200}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
          />
        </div>

        {/* Deskripsi */}
        <div className="w-full md:w-1/2 px-4 md:px-11 text-center md:text-left">
          <p className="text-black text-4xl md:text-5xl font-bold mb-4">
            DIMATA AISO
          </p>
          <p className="text-black text-lg md:text-2xl">
            AISO by PT. Dimata Sora Jayate is an online accounting information
            system that facilitates secure and efficient recording, storage, and
            reporting of financial transactions.
          </p>
          <button className="bg-blue-800 text-white p-3 rounded-lg mt-6">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
