import Image from "next/image";

export default function BenefitSection() {
  return (
    <section id="benefit" className="px-6 md:px-14 pb-40 bg-white">
      <div className="flex flex-col pt-20 gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 text-black">
          <div>
            <hr className="w-12 bg-blue-800 h-1 mb-2 border-none shadow-none" />
            <p>WORK WITH US</p>
            <p className="text-3xl md:text-4xl font-bold">Why Choose AISO</p>
          </div>
          <div className="md:w-1/3 text-left md:text-right">
            <p>
              Experience our unmatched expertise and dedication to delivering
              exceptional results, tailored to meet your unique needs.
            </p>
          </div>
        </div>

        {/* Benefit Cards */}
        <div className="flex flex-col md:flex-row gap-8 text-black">
          <div className="bg-sky-200 w-full md:w-1/4 p-8 rounded-xl">
            <Image
              src="/logo1.png"
              alt="Aiso Image"
              quality={10}
              width={80}
              height={80}
            />
            <p className="text-2xl md:text-3xl my-4 font-bold">Integration</p>
            <p>
              AISO provides data and information that flows to all parts of the
              company quickly and accurately.
            </p>
          </div>
          <div className="bg-sky-200 w-full md:w-1/4 p-8 rounded-xl">
            <Image
              src="/logo2.png"
              alt="Aiso Image"
              quality={10}
              width={80}
              height={80}
            />
            <p className="text-2xl md:text-3xl my-4 font-bold">User Friendly</p>
            <p>AISO makes it easy for users to operate the AISO system.</p>
          </div>
          <div className="bg-sky-200 w-full md:w-1/4 p-8 rounded-xl">
            <Image
              src="/logo3.png"
              alt="Aiso Image"
              quality={10}
              width={80}
              height={80}
            />
            <p className="text-2xl md:text-3xl my-4 font-bold">Data Security</p>
            <p>
              The proven data security of the AISO system ensures that company
              data remains safe.
            </p>
          </div>
          <div className="bg-sky-200 w-full md:w-1/4 p-8 rounded-xl">
            <Image
              src="/logo4.png"
              alt="Aiso Image"
              quality={10}
              width={80}
              height={80}
            />
            <p className="text-2xl md:text-3xl my-4 font-bold">24/7 Support</p>
            <p>
              24/7 support from the Dimata team guarantees reliable use of the
              system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
