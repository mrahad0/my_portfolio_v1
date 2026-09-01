import Hero from "@/components/Hero/Hero";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Skills from "@/components/Skills/Skills";
import Stats from "@/components/Stats/Stats";
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <Skills />
      <Footer />
    </>
  );
}
