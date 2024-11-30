import Image from "next/image";

export default function BenefitSection() {
  return (
    <section id="benefit" className="p-14 pb-40  bg-white">
      <div className="flex gap-24 flex-col ">
        <div className=" flex justify-between px-20 text-black">
          <div>
            <hr className="w-12 bg-blue-800 h-1 mb-2 border-none shadow-none" />
            <p>WORK WITH US</p>
            <p className="text-4xl">
              <b>Why Choose AISO</b>
            </p>
          </div>
          <div className="w-1/3 text-right">
            <p>
              Experience our unmatched expertise and dedication to delivering
              exceptional results, tailored to meet your unique needs.
            </p>
          </div>
        </div>
        <div className="relative flex gap-8 w-full px-20 text-black ">
          <div className="bg-sky-200 w-1/4 p-10">
            <Image
              src="/logo1.png"
              alt="Aiso Image"
              quality={10}
              width={80}
              height={200}
            />
            <p className="text-3xl my-5">
              <b>Intergration</b>
            </p>
            <p>
              AISO provides data dnd information that flows to all parts of the
              company quickly and accurately
            </p>
          </div>
          <div className="bg-sky-200 w-1/4 p-10">
            <Image
              src="/logo2.png"
              alt="Aiso Image"
              quality={10}
              width={80}
              height={200}
            />
            <p className="text-3xl my-5">
              <b>User Friendly</b>
            </p>
            <p>AISO makes it easy for users to operate the AISO system</p>
          </div>
          <div className="bg-sky-200 w-1/4 p-10 ">
            <Image
              src="/logo3.png"
              alt="Aiso Image"
              quality={10}
              width={80}
              height={200}
            />
            <p className="text-3xl my-5">
              <b>Data Security</b>
            </p>
            <p>
              The proven data security of the AISO system for decades ensures
              that company data remains safe
            </p>
          </div>
          <div className="bg-sky-200 w-1/4 p-10">
            <Image
              src="/logo4.png"
              alt="Aiso Image"
              quality={10}
              width={80}
              height={200}
            />
            <p className="text-3xl text-black">
              <b>24/7 Support</b>
            </p>
            <p>
              24 hours x 7 days support from the Dimata team guarantees the use
              of the prochain system with high reliability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
