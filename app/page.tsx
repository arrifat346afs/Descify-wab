// import { Button } from "@/components/ui/button"

import FAQsThree from "@/components/faqs-3"
// import Features from "@/components/features-4";
import FeaturesSectionDemo from "@/components/features-section-demo-2"
import Footer from "@/components/footer-3"
import HeroSection from "@/components/hero-section"

export default function Page() {
  return (
    <div>
      <HeroSection />
      {/* <Features /> */}
      <div className="pt-20">
        <FeaturesSectionDemo />
      </div>
      <FAQsThree />
      <Footer />
    </div>
  )
}
