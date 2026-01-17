import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Auditoría",
    description:
      "Analizamos tu situación actual: tecnología, marketing, procesos. Identificamos fugas de dinero y oportunidades rápidas de mejora.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Implementación",
    description:
      "Desarrollamos e integramos las soluciones técnicas y estrategias de adquisición adaptadas a tu negocio en Zaragoza.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Escalado",
    description:
      "Optimizamos continuamente. Cuando algo funciona, lo escalamos. Tu negocio crece de forma sostenible y medible.",
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-4">
            Metodología
          </span>
          <h2 className="text-fluid-lg font-bold text-foreground mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso claro, transparente y orientado a resultados desde el primer día.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                </div>
              )}

              <article className="relative bg-card rounded-2xl p-8 text-center shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                {/* Number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 mt-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
