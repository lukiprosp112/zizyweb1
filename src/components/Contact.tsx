import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
    privacidad: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email no válido";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio";
    }

    if (!formData.privacidad) {
      newErrors.privacidad = "Debes aceptar la política de privacidad";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real scenario, this would send to an API
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
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
              ¡Mensaje enviado!
            </h2>
            <p className="text-muted-foreground">
              Gracias por contactar con Zizy. Te responderé en menos de 24 horas.
            </p>
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

          {/* Form */}
          <form
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
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.nombre ? "border-destructive" : "border-border"
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-destructive">{errors.nombre}</p>
                )}
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
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.email ? "border-destructive" : "border-border"
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                )}
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
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.telefono ? "border-destructive" : "border-border"
                  }`}
                  placeholder="600 000 000"
                />
                {errors.telefono && (
                  <p className="mt-1 text-sm text-destructive">{errors.telefono}</p>
                )}
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
                  value={formData.empresa}
                  onChange={handleChange}
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
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
                  errors.mensaje ? "border-destructive" : "border-border"
                }`}
                placeholder="Cuéntame sobre tu proyecto..."
              />
              {errors.mensaje && (
                <p className="mt-1 text-sm text-destructive">{errors.mensaje}</p>
              )}
            </div>

            {/* Privacidad */}
            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacidad"
                  checked={formData.privacidad}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">
                  He leído y acepto la{" "}
                  <button
                    type="button"
                    onClick={() => document.getElementById("modal-privacidad")?.classList.remove("hidden")}
                    className="text-primary hover:underline"
                  >
                    Política de Privacidad
                  </button>{" "}
                  *
                </span>
              </label>
              {errors.privacidad && (
                <p className="mt-1 text-sm text-destructive">{errors.privacidad}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-8 w-full h-14 bg-primary text-primary-foreground font-semibold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-primary/25 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
