import HeroSection from "@/components/home/HeroSection";
import GallerySection from "@/components/home/GallerySection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AboutPreview from "@/components/home/AboutPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutPreview />
      <CTASection />
    </>
  );
}
