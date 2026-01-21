import { useState } from "react";

const politicaCookiesContent = `
## ¿Qué son las cookies?

Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando accedes a nuestro sitio web. Se utilizan para recordar información sobre tu visita y mejorar tu experiencia de navegación.

## Tipos de cookies que utilizamos

### Cookies técnicas y funcionales
- **Finalidad:** Garantizar el funcionamiento correcto del sitio web, recordar tu idioma, tus preferencias de accesibilidad y mantener la seguridad.
- **Duración:** Session o largo plazo.
- **Obligatoria:** Sí, según LSSI-CE y RGPD.

### Cookies analíticas
- **Finalidad:** Analizar el uso del sitio web, medir el tráfico, entender el comportamiento de los usuarios y mejorar nuestros servicios.
- **Proveedor:** Google Analytics
- **Duración:** 2 años
- **Consentimiento requerido:** Sí

### Cookies de marketing/publicidad
- **Finalidad:** Mostrar anuncios personalizados, realizar seguimiento de conversiones y medir la efectividad de campañas publicitarias.
- **Duración:** Según la plataforma de publicidad
- **Consentimiento requerido:** Sí

## Responsable del Tratamiento

- **Nombre:** Lucas Bueno (Zizy)
- **NIF:** 73054829K
- **Correo:** lukiprosp@gmail.com
- **Dirección:** C/ Concepción Saiz de Otero 23, Zaragoza, Aragón (España)

## Derechos del usuario

De acuerdo con el RGPD, tienes derecho a:
- **Acceso:** Saber qué cookies se utilizan y sus características.
- **Oposición:** Rechazar el uso de cookies no esenciales.
- **Eliminación:** Solicitar la supresión de datos asociados a cookies.
- **Portabilidad:** Recibir tus datos en formato estructurado.

## Cómo gestionar tus cookies

### En tu navegador:
Puedes controlar, aceptar o rechazar cookies desde la configuración de tu navegador:
- Chrome: Configuración > Privacidad y seguridad > Cookies
- Firefox: Configuración > Privacidad > Cookies
- Safari: Preferencias > Privacidad
- Edge: Configuración > Privacidad

### A través de plataformas:
- **Google Analytics:** https://tools.google.com/dlpage/gaoptout
- **DoubleClick:** https://support.google.com/ads/answer/7395996

## Actualización de esta política

Esta Política de Cookies puede ser actualizada periódicamente. Cualquier cambio será comunicado en esta página y reflejará automáticamente en tu próxima visita.

*Última actualización: Enero 2026*
`;

interface PoliticaCookiesFormProps {
  onClose: () => void;
}

export default function PoliticaCookiesForm({ onClose }: PoliticaCookiesFormProps) {
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
      if (!formData.fullName.trim() || !formData.email.trim() || !formData.reason.trim()) {
        setError("Por favor, completa todos los campos obligatorios");
        setLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Por favor, ingresa un email válido");
        setLoading(false);
        return;
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
            Te responderemos pronto con información adicional sobre cookies.
          </p>
        </div>

        {/* Contenido legal */}
        <div className="prose prose-sm max-w-none text-muted-foreground">
          {politicaCookiesContent.split("\n").map((line, index) => {
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
          Aquí te explicamos cómo utilizamos cookies en nuestro sitio web. Completa este formulario si deseas
          información adicional sobre el tratamiento de cookies y tus derechos según el RGPD.
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
            placeholder="Cuéntanos por qué necesitas información sobre cookies..."
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
          {loading ? "Enviando solicitud..." : "Solicitar información sobre cookies"}
        </button>
      </form>

      {/* Pie de formulario */}
      <p className="text-xs text-muted-foreground mt-4 text-center">
        Tus datos se tratarán según nuestra Política de Privacidad
      </p>
    </div>
  );
}
