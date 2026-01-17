import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto cuesta el diagnóstico?",
    answer:
      "El diagnóstico inicial es completamente gratuito. Analizamos tu situación actual y te presentamos un plan de acción sin compromiso.",
  },
  {
    question: "¿Trabajas solo en Zaragoza?",
    answer:
      "Trabajo tanto de forma presencial en Zaragoza y Aragón como online para clientes de toda España. La tecnología nos permite colaborar eficientemente sin importar la ubicación.",
  },
  {
    question: "¿Qué herramientas y tecnologías utilizas?",
    answer:
      "En desarrollo: React, Python, Node.js, y las tecnologías más adecuadas para cada proyecto. En marketing: Google Ads, Meta Business Suite (Facebook/Instagram Ads), herramientas de analítica y automatización.",
  },
  {
    question: "¿Cuánto tiempo tarda en verse resultados?",
    answer:
      "Depende del servicio. En campañas de publicidad, los primeros resultados se ven en las primeras semanas. En desarrollo, entregamos MVPs funcionales en 4-8 semanas según complejidad.",
  },
  {
    question: "¿El código que desarrollas es mío?",
    answer:
      "Absolutamente. Todo el código que desarrollo es 100% tuyo. No hay secuestros técnicos ni dependencias ocultas. Recibes documentación completa y acceso total.",
  },
  {
    question: "¿Puedo contratar solo uno de los servicios?",
    answer:
      "Sí, puedes contratar desarrollo de software (IAE 763) o estrategia de crecimiento (IAE 844) por separado. Sin embargo, los mejores resultados se obtienen cuando tecnología y marketing trabajan juntos.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-4">
              FAQ
            </span>
            <h2 className="text-fluid-lg font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respuestas a las dudas más comunes sobre mis servicios de consultoría en Zaragoza.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
