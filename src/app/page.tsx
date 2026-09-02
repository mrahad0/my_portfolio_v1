import Hero from "@/components/Hero/Hero";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Marquee from "@/components/Marquee/Marquee";
import Stats from "@/components/Stats/Stats";
import Experience from "@/components/Experience/Experience";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Marquee />
      <Stats />
      <Experience />
      <Services />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
