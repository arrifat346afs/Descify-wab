// import { Button } from "@/components/ui/button"

import FAQsThree from "@/components/faqs-3"
import Features from "@/components/features"
// import Features from "@/components/features"
import Footer from "@/components/footer-3"
import HeroSection from "@/components/hero-section"

export default function Page() {
  return (
    <div>
      <HeroSection />
      <div className="pt-20">
        <Features  />
      </div>
      <FAQsThree />
      <Footer />
    </div>
  )
}
