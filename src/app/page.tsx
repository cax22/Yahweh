import Hero from "@/components/hero";
import TuesdaySpecial from "@/components/tuesday-special";
import ServicesPreview from "@/components/services-preview";
import AboutPreview from "@/components/about-preview";
import BarbersPreview from "@/components/barbers-preview";
import GalleryPreview from "@/components/gallery-preview";
import ContactCta from "@/components/contact-cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <TuesdaySpecial />
      <AboutPreview />
      <ServicesPreview />
      <BarbersPreview />
      <GalleryPreview />
      <ContactCta />
    </main>
  );
}
