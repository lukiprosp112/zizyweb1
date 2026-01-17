import { X } from "lucide-react";
import AvisoLegalForm from "./AvisoLegalForm";
import PoliticaPrivacidadForm from "./PoliticaPrivacidadForm";

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
    content: `
## ¿Qué son las cookies?

Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde información sobre tu visita.

## Cookies que utilizamos

### Cookies Técnicas (Necesarias)
Permiten la navegación y el uso de las funciones básicas del sitio. Sin ellas, el sitio web no funcionaría correctamente.

| Cookie | Finalidad | Duración |
|--------|-----------|----------|
| cookie_consent | Guarda tu preferencia de cookies | 1 año |

### Cookies Analíticas (Opcionales)
Nos permiten medir y analizar el comportamiento de los usuarios de forma anónima para mejorar el sitio.

### Cookies de Marketing (Opcionales)
Se utilizan para mostrar publicidad personalizada basada en tu navegación.

## Gestión de Cookies

Puedes configurar tu navegador para rechazar cookies o para ser avisado cuando se envíe una cookie. Ten en cuenta que si desactivas las cookies, algunas funciones del sitio pueden no estar disponibles.

### Cómo eliminar cookies en los principales navegadores:
- **Chrome:** Configuración > Privacidad y seguridad > Cookies
- **Firefox:** Opciones > Privacidad y seguridad
- **Safari:** Preferencias > Privacidad
- **Edge:** Configuración > Cookies y permisos del sitio

## Actualización de esta política

Esta política puede actualizarse para adaptarse a cambios normativos o a nuevas funcionalidades del sitio.

## Contacto

Para cualquier consulta sobre nuestra política de cookies, contacta en lukiprosp@gmail.com

*Última actualización: Enero 2026*
    `,
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
        ) : (
          <div className="p-6 overflow-y-auto max-h-[calc(85vh-72px)]">
            <div className="prose prose-sm max-w-none text-muted-foreground">
              {content.content.split("\n").map((line: string, index: number) => {
                if (line.startsWith("## ")) {
                  return (
                    <h3 key={index} className="text-lg font-bold text-foreground mt-6 mb-3">
                      {line.replace("## ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("### ")) {
                  return (
                    <h4 key={index} className="text-base font-semibold text-foreground mt-4 mb-2">
                      {line.replace("### ", "")}
                    </h4>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <p key={index} className="ml-4 mb-1">
                      • {line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  );
                }
                if (line.startsWith("| ")) {
                  return null; // Skip table formatting for simplicity
                }
                if (line.startsWith("*") && line.endsWith("*")) {
                  return (
                    <p key={index} className="italic text-sm mt-6">
                      {line.replace(/\*/g, "")}
                    </p>
                  );
                }
                if (line.trim()) {
                  return (
                    <p key={index} className="mb-3 leading-relaxed">
                      {line.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalModals;
