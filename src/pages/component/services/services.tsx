import Image from "next/image";

export default function ServiceSection() {
  return (
    <section id="services" className="p-14 pt-48 pb-32 px-52">
      <div className="flex justify-center items-center gap-24 flex-col">
        <div className="">
          <hr className="w-32 bg-blue-800 h-1 mb-2 border-none shadow-none" />
          <p className="text-4xl pb-5">
            <b>Services</b>
          </p>
          <p className="text-4xl pb-5">
            Comprehensive Business Management Solutions
          </p>
          <p>
            Dimata AISO offers complete solutions to streamline business
            operations across various industries. Our expertise includes
            efficient inventory management, point-of-sale (POS) integration, and
            data-driven insights to support decision-making and operational
            efficiency.
          </p>
        </div>
        <div className=" items-center justify-center relative flex flex-col w-2/3">
          <div className="flex gap-9  ">
            <div className="w-1/2">
              <Image
                src="/photo3.png"
                alt="Aiso Image"
                width={400}
                height={200}
              />
            </div>
            <div className="w-1/2">
              <p className="text-3xl">
                <b>Sales Management</b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="flex pt-4">
            <div className="w-1/2">
              <p className="text-3xl">
                <b>Inventory Control & Transfer</b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                src="/photo4.png"
                alt="Aiso Image"
                width={400}
                height={200}
              />
            </div>
          </div>
          <div className="flex pt-4">
            <div className="w-1/2">
              <Image
                src="/photo5.png"
                alt="Aiso Image"
                width={400}
                height={200}
              />
            </div>
            <div className="w-1/2">
              <p className="text-3xl">
                <b>Purchasing Management</b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
