import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% dari section terlihat baru dianggap masuk
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <nav className="bg-[#569DD7] fixed top-0 left-0 flex w-full justify-between p-5 px-20 text-2xl items-center text-white z-50">
        <Link href="/">
          <div className="title text-3xl font-bold">
            <Image src="/aiso.png" alt="Aiso Image" width={200} height={10} />
          </div>
        </Link>
        <div className="menu">
          <ul className="flex text-center items-center">
            <li
              className={`px-3 ${
                activeSection === "home" ? "text-white" : "text-blue-800"
              } hover:text-blue-800 cursor-pointer`}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`px-3 ${
                activeSection === "about" ? "text-white" : "text-blue-800"
              } hover:text-blue-800 cursor-pointer`}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={`px-3 ${
                activeSection === "services" ? "text-white" : "text-blue-800"
              } hover:text-blue-800 cursor-pointer`}
            >
              <Link href="#services">Services</Link>
            </li>
            <li
              className={`px-3 ${
                activeSection === "contact" ? "text-white" : "text-blue-800"
              } hover:text-blue-800 cursor-pointer`}
            >
              <Link href="#contact">Contact</Link>
            </li>
            <li className="pl-6 pr-6 flex text-center items-center justify-center bg-blue-800 h-10">
              <Link href="/component/login_page/loginPage">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
