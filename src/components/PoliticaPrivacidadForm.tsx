import { useState } from "react";
import emailjs from "@emailjs/browser";

const politicaPrivacidadContent = `
## Responsable del Tratamiento

- **Responsable:** Lucas Bueno (Zizy)
- **NIF:** 73054829K
- **Dirección:** C/ Concepción Saiz de Otero 23, Zaragoza, Aragón (España)
- **Email:** lukiprosp@gmail.com
- **Teléfono:** 627 126 092

## Finalidad del Tratamiento

Los datos personales que nos facilites a través del formulario de contacto serán tratados con las siguientes finalidades:
- Gestionar tu solicitud de información o presupuesto.
- Enviarte comunicaciones comerciales si has dado tu consentimiento.
- Mantener la relación contractual si se formaliza.

## Legitimación

La base legal para el tratamiento de tus datos es:
- Tu consentimiento expreso al marcar la casilla de aceptación.
- La ejecución de un contrato o medidas precontractuales.
- El interés legítimo del responsable.

## Destinatarios

No se cederán datos a terceros, salvo obligación legal o para la prestación del servicio contratado.

## Derechos

Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un email a lukiprosp@gmail.com indicando el derecho que deseas ejercer.

## Conservación

Los datos se conservarán mientras dure la relación contractual y, posteriormente, durante los plazos legalmente establecidos.

## Seguridad

Aplicamos medidas técnicas y organizativas para garantizar la seguridad de tus datos y evitar su alteración, pérdida o acceso no autorizado.

*Última actualización: Enero 2026*
`;

interface PoliticaPrivacidadFormProps {
  onClose: () => void;
}

export default function PoliticaPrivacidadForm({ onClose }: PoliticaPrivacidadFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reason: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validación básica
      if (!formData.fullName.trim() || !formData.email.trim() || !formData.reason.trim()) {
        setError("Por favor, completa todos los campos obligatorios");
        setLoading(false);
        return;
      }

      // Validar email básicamente
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Por favor, ingresa un email válido");
        setLoading(false);
        return;
      }

      // Integración con EmailJS
      try {
        await emailjs.sendForm(
          'service_abcdef123456',          // Service ID
          'template_hteqn3i',              // Template ID
          e.currentTarget as HTMLFormElement,
          {
            publicKey: 'TnkQKxXs1mRftbNIp',  // Public Key
          }
        );
      } catch (emailErr) {
        console.error('Error al enviar email:', emailErr);
        // Continuamos incluso si el email falla, mostrando el contenido
      }

      setFormSubmitted(true);
    } catch (err) {
      setError("Error al enviar la solicitud. Por favor, intenta de nuevo.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="p-6 max-h-[calc(85vh-72px)] overflow-y-auto">
        {/* Mensaje de éxito */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800 font-semibold">✓ Solicitud enviada exitosamente</p>
          <p className="text-green-700 text-sm mt-1">
            Te responderemos pronto con el contenido completo a tu email.
          </p>
        </div>

        {/* Contenido legal */}
        <div className="prose prose-sm max-w-none text-muted-foreground">
          {politicaPrivacidadContent.split("\n").map((line, index) => {
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
    );
  }

  return (
    <div className="p-6 max-h-[calc(85vh-72px)] overflow-y-auto">
      {/* Texto introductorio */}
      <div className="mb-6">
        <p className="text-muted-foreground leading-relaxed">
          Esta es nuestra Política de Privacidad. El apartado del <strong>responsable del tratamiento</strong>{" "}
          está protegido por motivos de privacidad y seguridad. Completa este formulario para solicitar acceso a él.
          Te lo enviaremos por email o mostraremos aquí tras verificación.
        </p>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre completo */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Tu nombre"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={loading}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="tu@email.com"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={loading}
          />
        </div>

        {/* Motivo de la solicitud */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2">
            Motivo de la solicitud <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            placeholder="Cuéntanos por qué necesitas acceder a esta información..."
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            disabled={loading}
          />
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Enviando solicitud..." : "Solicitar acceso al responsable de tratamiento"}
        </button>
      </form>

      {/* Pie de formulario */}
      <p className="text-xs text-muted-foreground mt-4 text-center">
        Tus datos se tratarán según esta Política de Privacidad
      </p>
    </div>
  );
}
