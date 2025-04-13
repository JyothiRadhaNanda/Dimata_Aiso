export default function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-60 pt-48 pb-32 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Map Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div>
            <p className="text-4xl md:text-7xl mb-8 font-bold">Our Location</p>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.846030212877!2d115.23796897589622!3d-8.706167791342807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241bfead42cb1%3A0x24c6e2d6d2d87689!2sDimata%20IT%20and%20Software!5e0!3m2!1sid!2sid!4v1730960400785!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/2 text-center">
          <p className="text-3xl md:text-4xl mb-6 font-bold">Address</p>
          <p className="text-lg md:text-2xl">
            Jl. Danau Tempe No.21A, Sidakarya, Denpasar Selatan, Kota Denpasar,
            Bali 80224
          </p>

          <p className="text-3xl md:text-4xl pt-12 mb-6 font-bold">Open From</p>
          <p className="text-lg md:text-2xl">
            Monday - Saturday <br /> 08.30AM - 05.30PM
          </p>
        </div>
      </div>
    </section>
  );
}
