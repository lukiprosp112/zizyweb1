import { Code2, TrendingUp, Check } from "lucide-react";

const services = [
  {
    id: "soluciones-tecnologicas",
    icon: Code2,
    iae: "IAE 763",
    title: "Infraestructura Robusta",
    subtitle: "Soluciones Tecnológicas",
    description: "Desarrollo de software que escala contigo sin romperse.",
    features: [
      "Desarrollo web y aplicaciones a medida",
      "Automatizaciones y flujos de trabajo",
      "Optimización de rendimiento",
      "Código 100% tuyo – sin secuestros técnicos",
    ],
  },
  {
    id: "estrategia-crecimiento",
    icon: TrendingUp,
    iae: "IAE 844",
    title: "Adquisición de Clientes",
    subtitle: "Estrategia de Crecimiento",
    description: "Publicidad digital que genera retorno desde el primer mes.",
    features: [
      "Campañas Google Ads y Meta Ads",
      "Funnels de conversión optimizados",
      "Copywriting persuasivo",
      "ROI positivo desde el mes 1",
    ],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Servicios
          </span>
          <h2 className="text-fluid-lg font-bold text-foreground mb-4">
            Dos mundos, una estrategia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos desarrollo de software y marketing digital para maximizar tu inversión en Zaragoza y online.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  {service.iae}
                </span>
              </div>

              {/* Content */}
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                {service.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-1 mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
