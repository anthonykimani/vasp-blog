
import FeaturedBlogPost from "@/components/blog/FeaturedBlogPost";
import ThreeColumnBlog from "@/components/blog/ThreeColumnBlog";
import Footer from "@/components/global/Footer";
import Blogs from "@/components/landing/Blogs";
import Events from "@/components/landing/Events";
import Features from "@/components/landing/Features";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";
import Partners from "@/components/landing/Partners";


export default function Home() {
  return (
    <section className="bg-[#161625]">
      <Navbar />
      {/* <ThreeColumnBlog /> */}
      <HeroSection />
      <Features />
      <Events />
      <Partners />
      <Blogs />
      <Footer />
    </section>
  );
}
