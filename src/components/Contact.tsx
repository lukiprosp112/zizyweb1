import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Formspree maneja la validación y envío
    setIsLoading(true);
    
    // Mostrar mensaje de éxito después de un breve tiempo
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ¡Gracias, te contacto pronto!
            </h2>
            <p className="text-muted-foreground">
              He recibido tu solicitud. Te responderé en menos de 24 horas a través de email o WhatsApp.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Contacto
            </span>
            <h2 className="text-fluid-lg font-bold text-foreground mb-4">
              Solicita tu Diagnóstico Gratuito
            </h2>
            <p className="text-lg text-muted-foreground">
              Cuéntame sobre tu proyecto y te mostraré cómo podemos hacerlo crecer juntos en Zaragoza.
            </p>
          </div>

          {/* Form - Formspree */}
          <form
            action="https://formspree.io/f/xyzabcde"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full h-12 px-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full h-12 px-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  className="w-full h-12 px-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="600 000 000"
                />
              </div>

              {/* Empresa */}
              <div>
                <label
                  htmlFor="empresa"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Empresa <span className="text-muted-foreground">(opcional)</span>
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="w-full h-12 px-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div className="mt-6">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            {/* Matrícula - Optional Hidden Field for Spam Protection */}
            <input
              type="hidden"
              name="_captcha"
              value="false"
            />
            <input
              type="hidden"
              name="_next"
              value={`${window.location.origin}/?success=true`}
            />

            {/* Privacidad - Checkbox RGPD */}
            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacidad"
                  required
                  className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">
                  He leído y acepto la{" "}
                  <a
                    href="mailto:lukiprosp@gmail.com?subject=Solicitud%20Política%20de%20Privacidad"
                    className="text-primary hover:underline"
                  >
                    Política de Privacidad
                  </a>{" "}
                  y la{" "}
                  <a
                    href="mailto:lukiprosp@gmail.com?subject=Solicitud%20Política%20de%20Cookies"
                    className="text-primary hover:underline"
                  >
                    Política de Cookies
                  </a>
                  . Consiento el tratamiento de mis datos para contacto. *
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-8 w-full h-14 bg-primary text-primary-foreground font-semibold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isLoading ? "Enviando..." : "Enviar Solicitud"}
            </button>

            {/* Footer Legal Note */}
            <p className="mt-4 text-xs text-muted-foreground text-center">
              Al enviar este formulario, aceptas que tus datos serán procesados según RGPD y LSSI.
              Tu información es confidencial y solo será usada para contactarte.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
