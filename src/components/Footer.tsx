import ZizyLogo from "./ZizyLogo";
import { MapPin, Phone, Mail } from "lucide-react";

interface FooterProps {
  onOpenModal: (modal: "aviso" | "privacidad" | "cookies") => void;
}

const Footer = ({ onOpenModal }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ZizyLogo size={32} className="text-primary" />
              <span className="font-bold text-xl text-background">Zizy</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Consultoría híbrida de software y marketing digital en Zaragoza.
              Unificamos tecnología y estrategia para que tu negocio crezca.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                C/ Concepción Saiz de Otero 23, Zaragoza
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+34627126092" className="hover:text-primary transition-colors">
                  627 126 092
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:lukiprosp@gmail.com" className="hover:text-primary transition-colors">
                  lukiprosp@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Legal (RGPD)</h4>
            <p className="text-background/70 text-xs mb-3">
              Completa el formulario para acceder a nuestras políticas:
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onOpenModal("aviso")}
                  className="text-background/70 hover:text-primary transition-colors underline text-left"
                >
                  📄 Aviso Legal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("privacidad")}
                  className="text-background/70 hover:text-primary transition-colors underline text-left"
                >
                  🔒 Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal("cookies")}
                  className="text-background/70 hover:text-primary transition-colors underline text-left"
                >
                  🍪 Política de Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <div className="text-center md:text-left">
              <p>
                © {currentYear} <strong>Lucas Bueno (Zizy)</strong> · Consultor Digital
              </p>
              <p className="mt-1">
                NIF: 73054829K | Zaragoza, Aragón (España) | VAT: ES73054829K
              </p>
              <p className="mt-1 text-xs text-background/50">
                Inscrito en el Registro Mercantil de Zaragoza
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium">
                IAE 763
              </span>
              <span className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium">
                IAE 844
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
