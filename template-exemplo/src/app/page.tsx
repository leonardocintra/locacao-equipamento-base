import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedEquipment } from "@/components/featured-equipment"
import { ComboBanner } from "@/components/combo-banner"
import { AllEquipment } from "@/components/all-equipment"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedEquipment />
        <ComboBanner />
        <AllEquipment />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
