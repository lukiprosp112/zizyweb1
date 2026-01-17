import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <a
      href="#contacto"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 h-14 px-5 bg-primary text-primary-foreground font-semibold rounded-full shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105"
      aria-label="Solicitar diagnóstico gratuito"
    >
      <MessageCircle className="w-5 h-5" />
      <span>Diagnóstico Gratis</span>
    </a>
  );
};

export default FloatingCTA;
