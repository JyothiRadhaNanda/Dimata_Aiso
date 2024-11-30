import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className="p-14 pt-48 pb-36 h-screen">
      <div className="flex items-center justify-center gap-24 flex-row">
        <div className="w-1/2">
          <p className="text-7xl">
            <b>Accounting Information System Online</b>
          </p>
          <p>
            <i>"Organization Management Made Easier Than Ever"</i>
          </p>
          <button className="bg-blue-800 p-3 rounded-lg mt-4 ">
            Book Free Consultation
          </button>
        </div>
        <div className="relative flex text-">
          <div className="relative flex">
            {/* Div Biru di belakang Gambar */}
            <div className="bg-blue-800 ml-6  absolute inset-0 z-10"></div>

            {/* Gambar dengan Z-index lebih tinggi */}
            <div className=" relative bottom-7 right-7 z-20 ">
              <Image
                src="/photo1.png"
                alt="Aiso Image"
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
