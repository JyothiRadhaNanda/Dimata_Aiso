import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Lucide untuk ikon hamburger dan close

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-[#569DD7] fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-20 py-4 text-white">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/aiso.png" alt="Aiso Image" width={160} height={40} />
        </Link>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex space-x-6 text-xl items-center">
          {["home", "about", "services", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`px-3 ${
                  activeSection === item ? "text-white" : "text-blue-800"
                } hover:text-white transition`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li className="bg-blue-800 px-5 py-2 rounded-md text-white hover:bg-blue-900 transition">
            <Link href="/component/login_page/loginPage">Login</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 text-white">
          <ul className="flex flex-col space-y-4 text-lg">
            {["home", "about", "services", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className={`block ${
                    activeSection === item ? "text-white" : "text-blue-800"
                  } hover:text-white transition`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <li className="bg-blue-800 px-5 py-2 rounded-md text-center">
              <Link href="/component/login_page/loginPage">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
