import Image from "next/image";

export default function ServiceSection() {
  return (
    <section id="services" className="px-6 md:px-14 pt-40 pb-32">
      <div className="flex flex-col justify-center items-center gap-16">
        {/* Header */}
        <div className="text-center md:text-left max-w-6xl">
          <hr className="w-32 bg-blue-800 h-1 mb-2 border-none shadow-none mx-auto md:mx-0" />
          <p className="text-3xl md:text-4xl pb-3 font-bold">Services</p>
          <p className="text-2xl md:text-4xl pb-5">
            Comprehensive Business Management Solutions
          </p>
          <p className="text-base md:text-lg">
            Dimata AISO offers complete solutions to streamline business
            operations across various industries. Our expertise includes
            efficient inventory management, point-of-sale (POS) integration, and
            data-driven insights to support decision-making and operational
            efficiency.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 w-full max-w-6xl">
          {/* Sales Management */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/photo3.png"
                alt="Aiso Image"
                width={400}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-2xl md:text-3xl font-bold">Sales Management</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>

          {/* Inventory Control */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <p className="text-2xl md:text-3xl font-bold">
                Inventory Control & Transfer
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <Image
                src="/photo4.png"
                alt="Aiso Image"
                width={400}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Purchasing Management */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/photo5.png"
                alt="Aiso Image"
                width={400}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-2xl md:text-3xl font-bold">
                Purchasing Management
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
