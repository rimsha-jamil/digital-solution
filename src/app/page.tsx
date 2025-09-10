import AgencyRole from "./components/agancyRole";
import AgencyIntro from "./components/agencyIntro";
import AppointSection from "./components/appointSection";
import BrandSection from "./components/brandSection";
import Hero from "./components/hero";
import Industries from "./components/industries";
import ServicesSection from "./components/serviceSection";
import StartProject from "./components/startProject";
import ThriveSection from "./components/thriveSection";

export default function Home() {
  return (
    <section>
      <Hero />
      <BrandSection />
      <ServicesSection />
      <ThriveSection />
      <AppointSection />
      <Industries />
      <StartProject />
      <AgencyIntro />
    </section>
  );
}
