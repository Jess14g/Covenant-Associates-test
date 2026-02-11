import HeroSection from "@/components/home/HeroSection";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FactorySection from "@/components/home/FactorySection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnapshot />
      <FeaturedProducts />
      <FactorySection />
      <CTABanner />
    </>
  );
}
