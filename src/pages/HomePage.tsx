import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AuthorizedBrands from "../components/AuthorizedBrands";
import AuthorizationMeaning from "../components/AuthorizationMeaning";
import ProblemsSection from "../components/ProblemsSection";
import PowerSelection from "../components/PowerSelection";
import BuyerGuide from "../components/BuyerGuide";
import Packages from "../components/Packages";
import PricingExtras from "../components/PricingExtras";
import Process from "../components/Process";
import Warranty from "../components/Warranty";
import Certifications from "../components/Certifications";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <AuthorizedBrands />
      <AuthorizationMeaning />
      <ProblemsSection />
      <PowerSelection />
      <BuyerGuide />
      <Packages />
      <PricingExtras />
      <Process />
      <Warranty />
      <Certifications />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
