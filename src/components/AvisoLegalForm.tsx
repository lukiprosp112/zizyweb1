import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const avisoLegalContent = `
## Datos Identificativos

En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa:

- **Titular:** Lucas Bueno (Zizy)
- **NIF:** B12345678
- **Domicilio:** Zaragoza, Aragón (España)
- **Teléfono:** 627 126 092
- **Email:** lukiprosp@gmail.com
- **Actividad:** Consultoría de software (IAE 763) y Servicios de publicidad (IAE 844)

## Objeto

El presente sitio web tiene por objeto facilitar información sobre los servicios de consultoría tecnológica y marketing digital ofrecidos por Lucas Bueno (Zizy) en Zaragoza y toda España.

## Propiedad Intelectual

Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Lucas Bueno (Zizy).

## Limitación de Responsabilidad

Lucas Bueno (Zizy) no se hace responsable de:
- Los posibles daños derivados de interferencias, interrupciones, virus informáticos, averías telefónicas o desconexiones.
- De la información contenida en páginas web de terceros a las que se pueda acceder mediante enlaces.

## Legislación Aplicable

Las presentes condiciones se rigen por la legislación española, siendo competentes los Juzgados y Tribunales de Zaragoza para conocer de cuantas cuestiones pudieran suscitarse.

*Última actualización: Enero 2026*
`;

interface AvisoLegalFormProps {
  onClose: () => void;
}

export default function AvisoLegalForm({ onClose }: AvisoLegalFormProps) {
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
          {avisoLegalContent.split("\n").map((line, index) => {
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
          El contenido del Aviso Legal está protegido. Por favor, completa este formulario para solicitar
          acceso. Te lo enviaremos por email o mostraremos aquí tras verificación.
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
            placeholder="Cuéntanos por qué necesitas acceder al Aviso Legal..."
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
          {loading ? "Enviando solicitud..." : "Solicitar acceso al Aviso Legal"}
        </button>
      </form>

      {/* Pie de formulario */}
      <p className="text-xs text-muted-foreground mt-4 text-center">
        Tus datos se tratarán según nuestra Política de Privacidad
      </p>
    </div>
  );
}
