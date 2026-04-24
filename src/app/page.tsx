import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LatestCollection } from "@/components/latest-collection";
import { ComboSection } from "@/components/combo-section";
import { MarqueeStatement } from "@/components/marquee";
import { WhyLocFacil } from "@/components/why-loc-facil";
import { EquipmentCatalog } from "@/components/equipment-catalog";
import { CtaBanner } from "@/components/cta-banner";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 w-full relative">
        <Hero />
        <LatestCollection />
        <ComboSection />
        <MarqueeStatement />
        <WhyLocFacil />
        <EquipmentCatalog />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
