import AppointSection from "./components/appointSection";
import BrandSection from "./components/brandSection";
import Hero from "./components/hero";
import ServicesSection from "./components/serviceSection";
import ThriveSection from "./components/thriveSection";

export default function Home() {
  return (
    <section>
      <Hero />
      <BrandSection />
      <ServicesSection />
      <ThriveSection />
      <AppointSection />
    </section>
  );
}
