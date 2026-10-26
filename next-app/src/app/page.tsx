import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <OurServices />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
