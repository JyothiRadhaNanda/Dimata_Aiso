import Navbar from "./component/navbar";
import HomeSection from "./component/home/home";
import AboutSection from "./component/about/about";
import ServiceSection from "./component/services/services";
import BenefitSection from "./component/benefit/benefit";
import ContactSection from "./component/Contact/contact";
import LoginSection from "./component/login/login";

export default function Home() {
  return (
    <div className="w-full">
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
