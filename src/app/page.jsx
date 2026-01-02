import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Explore from "@/components/Explore";
import Apps from "@/components/Apps";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Hero />
        <Features />
        <Explore />
        <Gallery />
        <Apps />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
