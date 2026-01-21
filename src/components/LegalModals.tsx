import { X } from "lucide-react";
import AvisoLegalForm from "./AvisoLegalForm";
import PoliticaPrivacidadForm from "./PoliticaPrivacidadForm";
import PoliticaCookiesForm from "./PoliticaCookiesForm";

interface LegalModalsProps {
  activeModal: "aviso" | "privacidad" | "cookies" | null;
  onClose: () => void;
}

const legalContent = {
  aviso: {
    title: "Aviso Legal",
    isForm: true,
  },
  privacidad: {
    title: "Política de Privacidad",
    isForm: true,
  },
  cookies: {
    title: "Política de Cookies",
    isForm: true,
  },
};

const LegalModals = ({ activeModal, onClose }: LegalModalsProps) => {
  if (!activeModal) return null;

  const content = legalContent[activeModal as keyof typeof legalContent];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">{content.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        {activeModal === "aviso" ? (
          <AvisoLegalForm onClose={onClose} />
        ) : activeModal === "privacidad" ? (
          <PoliticaPrivacidadForm onClose={onClose} />
        ) : activeModal === "cookies" ? (
          <PoliticaCookiesForm onClose={onClose} />
        ) : null}
      </div>
    </div>
  );
};

export default LegalModals;
