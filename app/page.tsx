import Footer from "@/components/landing/Footer";
import Blogs from "@/components/landing/Blogs";
import Events from "@/components/landing/Events";
import Features from "@/components/landing/Features";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";
import Partners from "@/components/landing/Partners";

export default function Home() {
  return (
    <section className="bg-[#161625] font-DM">
      <Navbar />
      <HeroSection />
      <Features />
      <Events />
      <Partners />
      <Blogs />
      <Footer />
    </section>
  );
}
