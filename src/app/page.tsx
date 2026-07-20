import Hero from "../components/home/Hero";
import TrustedBy from "../components/home/TrustedBy";
import AboutOverview from "../components/home/AboutOverview";
import ServicesBrief from "../components/home/ServicesBrief";
import ProductShowcase from "../components/home/ProductShowcase";
import IndustriesWeServe from "../components/home/IndustriesWeServe";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import PartnerSection from "../components/home/PartnerSection";
import ContactPreview from "../components/home/ContactPreview";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustedBy />
      <AboutOverview />
      <ServicesBrief />
      <ProductShowcase />
      <WhyChooseUs />
      <IndustriesWeServe />
      <Testimonials />
      <PartnerSection />
      <FAQ />
      <ContactPreview />
    </div>
  );
}
