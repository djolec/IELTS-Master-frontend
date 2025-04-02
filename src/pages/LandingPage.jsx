import { Link } from "react-router";

import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import EmailSection from "../components/EmailSection";

const LandingPage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <TestimonialsSection />
      <EmailSection />
    </main>
  );
};
export default LandingPage;
