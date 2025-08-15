import About from "./about";
import Achivements from "./achivements";
import Contact from "./contact";
import Faqs from "./faqs";
import OtherServices from "./other-services";
import ServicesOne from "./servicesOne";
import ServicesTwo from "./servicesTwo";
import TopSection from "./top-section/index";

export default function FactoringPage() {
  return (
    <mian>
      <TopSection />
      <Achivements />
      <ServicesOne />
      <ServicesTwo />
      <Contact />
      <About />
      <OtherServices />
      <Faqs />
    </mian>
  );
}
