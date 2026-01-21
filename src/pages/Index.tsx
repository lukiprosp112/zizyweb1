import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import About from "@/components/About";
import Blog10Top from "@/components/Blog10Top";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FAQAi from "@/components/FAQAi";
import Footer from "@/components/Footer";
import LegalModals from "@/components/LegalModals";
import CookieBanner from "@/components/CookieBanner";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  const [activeModal, setActiveModal] = useState<"aviso" | "privacidad" | "cookies" | null>(null);

  const handleOpenModal = (modal: "aviso" | "privacidad" | "cookies") => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <SEOHead />
      
      <Header />
      
      <main>
        <Hero />
        <PainPoint />
        <Services />
        <Methodology />
        <About />
        <Blog10Top />
        <Contact />
        <FAQ />
        <FAQAi />
      </main>

      <Footer onOpenModal={handleOpenModal} />

      <LegalModals activeModal={activeModal} onClose={handleCloseModal} />
      <CookieBanner />
      <FloatingCTA />
    </>
  );
};

export default Index;
