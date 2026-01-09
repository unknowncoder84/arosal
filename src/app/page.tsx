import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navigation links={siteData.navigation} logo="AROSAL" />
      <main>
        <Hero {...siteData.hero} />
        <About {...siteData.about} />
        <Services {...siteData.services} />
        <Portfolio {...siteData.portfolio} />
        <Contact {...siteData.contact} />
      </main>
      <Footer {...siteData.footer} />
      <WhatsAppButton />
    </>
  );
}
