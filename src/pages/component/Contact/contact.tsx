import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="p-14 pt-48 pb-32 h-screen px-60">
      <div className="flex items-center justify-center gap-24 flex-row">
        <div className="w-1/2 flex flex-col items-center">
          <div className=" flex">
            <p className="text-7xl">
              <b>Our Location</b>
            </p>
            <p className="pt-11 pl-4">Address Dimata</p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.846030212877!2d115.23796897589622!3d-8.706167791342807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241bfead42cb1%3A0x24c6e2d6d2d87689!2sDimata%20IT%20and%20Software!5e0!3m2!1sid!2sid!4v1730960400785!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="w-1/2 text-center">
          <p className="text-2xl">
            Jl. Danau Tempe No.21A, Sidakarya, Denpasar Selatan, Kota Denpasar,
            Bali 80224
          </p>
          <p className="text-2xl pt-16">Hours</p>
          <p className="text-2xl">Monday-Saturday: 08.30AM - 05.30PM</p>
        </div>
      </div>
    </section>
  );
}
