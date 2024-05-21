
import ThreeColumnBlog from "@/components/blog/ThreeColumnBlog";
import Events from "@/components/landing/Events";
import Features from "@/components/landing/Features";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";


export default function Home() {
  return (
    <section className="bg-[#161625]">
      <Navbar />
      {/* <ThreeColumnBlog /> */}
      <HeroSection />
      <Features />
      <Events />
    </section>
  );
}
