import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "./component/navbar";
import HomeSection from "./component/home/home";
import AboutSection from "./component/about/about";
import ServiceSection from "./component/services/services";
import BenefitSection from "./component/benefit/benefit";
import ContactSection from "./component/Contact/contact";
import LoginSection from "./component/login/login";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <BenefitSection />
      <ContactSection />
      <LoginSection />
    </div>
  );
}
