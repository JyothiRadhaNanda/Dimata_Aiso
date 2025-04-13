import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="p-14 pt-60 pb-64 bg-white">
      <div className="flex items-center justify-center flex-row ">
        <div className="relative items-center justify-center flex w-1/2">
          <Image src="/Photo2.png" alt="Aiso Image" width={600} height={200} />
        </div>
        <div className="w-1/2 p-11">
          <p className=" text-black text-5xl">
            <b>DIMATA AISO</b>
          </p>
          <p className=" text-black text-2xl">
            AISO by PT. Dimata Sora Jayate is an online accounting information
            system that facilitates secure and efficient recording, storage, and
            reporting of financial transactions.
          </p>
          <button className="bg-blue-800 p-3 rounded-lg mt-4 ">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
