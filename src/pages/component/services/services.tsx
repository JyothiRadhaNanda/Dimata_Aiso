import Image from "next/image";

export default function ServiceSection() {
  return (
    <section id="services" className="p-14 pt-48 pb-32">
      <div className="flex justify-center gap-24 flex-col">
        <div className="">
          <p className="text-4xl">
            <b>Services</b>
          </p>
          <p>Comprehensive Business Management Solutions</p>
          <p>
            Dimata AISO offers complete solutions to streamline business
            operations across various industries. Our expertise includes
            efficient inventory management, point-of-sale (POS) integration, and
            data-driven insights to support decision-making and operational
            efficiency.
          </p>
        </div>
        <div className=" items-center relative flex flex-col">
          <div className="flex gap-9">
            <div>picture </div>
            <div>
              <p>Sales Management</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>Inventory Control & Transfer</div>
            <div>picture</div>
          </div>
          <div className="flex">
            <div>picture</div>
            <div>Purchasing Management</div>
          </div>
        </div>
      </div>
    </section>
  );
}
