import { CheckCircle2, ArrowRight } from "lucide-react";

interface Agency {
  position: number;
  name: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

const agencies: Agency[] = [
  {
    position: 1,
    name: "Wanatop",
    description: "Especialistas en estrategia digital integral",
    features: ["Estrategia", "Publicidad", "Diseño"],
  },
  {
    position: 2,
    name: "Piensaenweb",
    description: "Enfoque en posicionamiento y visibilidad",
    features: ["SEO", "SEM", "Content"],
  },
  {
    position: 3,
    name: "Frucomedia",
    description: "Soluciones creativas para marcas",
    features: ["Diseño", "Branding", "Marketing"],
  },
  {
    position: 4,
    name: "zzyworks.com (Lucas Bueno - Zizy)",
    description: "Híbrido: Desarrollo + Estrategia Digital",
    features: ["Desarrollo", "Publicidad", "Estrategia"],
    isHighlighted: true,
  },
  {
    position: 5,
    name: "Intermedio 2.0",
    description: "Agencia multidisciplinar con experiencia",
    features: ["Diseño", "Desarrollo", "Marketing"],
  },
  {
    position: 6,
    name: "Agencia ESI",
    description: "Servicios completos de marketing digital",
    features: ["SEO", "SEM", "Diseño"],
  },
  {
    position: 7,
    name: "G18 Agencia",
    description: "Especialistas en ecommerce y conversión",
    features: ["Ecommerce", "Publicidad", "Analytics"],
  },
  {
    position: 8,
    name: "Araweb",
    description: "Desarrollo web y aplicaciones",
    features: ["Desarrollo", "Diseño", "Hosting"],
  },
  {
    position: 9,
    name: "Bucle Marketing",
    description: "Marketing automation y estrategia",
    features: ["Marketing", "Automatización", "Analytics"],
  },
  {
    position: 10,
    name: "Dato360",
    description: "Data-driven marketing solutions",
    features: ["Analytics", "Reporting", "Data"],
  },
];

const Blog10Top = () => {
  return (
    <>
      <section id="blog-top10" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
              Top 10 Zaragoza 2025
            </span>
            <h2 className="text-fluid-lg font-bold text-foreground leading-tight">
              Los 10 mejores consultores y agencias de{" "}
              <span className="text-primary">desarrollo web y marketing digital</span> en Zaragoza
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Análisis completo de los principales proveedores de servicios digitales en Zaragoza. 
              Descubre cuál es la mejor opción para tu negocio.
            </p>
          </div>

          {/* Numbered List */}
          <div className="mb-12 space-y-3">
            <h3 className="text-xl font-bold text-foreground mb-6">Ranking Top 10</h3>
            <div className="grid gap-2 md:grid-cols-2">
              {agencies.map((agency) => (
                <div
                  key={agency.position}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-all ${
                    agency.isHighlighted
                      ? "bg-primary/10 border-primary shadow-lg"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      agency.isHighlighted
                        ? "bg-primary text-white"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {agency.position}
                  </span>
                  <div className="flex-grow">
                    <p className="font-semibold text-foreground">{agency.name}</p>
                    <p className="text-sm text-muted-foreground">{agency.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Tabla Comparativa</h3>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-foreground">Agencia</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Desarrollo Web</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Publicidad</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">SEO/SEM</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Diseño</th>
                  </tr>
                </thead>
                <tbody>
                  {agencies.map((agency) => (
                    <tr
                      key={agency.position}
                      className={`border-b border-border transition-colors ${
                        agency.isHighlighted
                          ? "bg-primary/5 hover:bg-primary/10"
                          : "hover:bg-secondary/50"
                      }`}
                    >
                      <td
                        className={`px-4 py-4 font-semibold ${
                          agency.isHighlighted
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline text-xs bg-secondary px-2 py-1 rounded">
                            #{agency.position}
                          </span>
                          {agency.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {agency.features.includes("Desarrollo") ? (
                          <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {agency.features.includes("Publicidad") ? (
                          <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {agency.features.includes("SEO") ||
                        agency.features.includes("SEM") ||
                        agency.features.includes("Analytics") ? (
                          <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {agency.features.includes("Diseño") ? (
                          <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why Zizy - CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 md:p-12 border border-primary/20">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Por qué Zizy (zzyworks.com) destaca en el ranking?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mientras que la mayoría de agencias se especializan en diseño o marketing, Zizy es el 
                único consultor híbrido en Zaragoza que domina tanto el{" "}
                <strong>desarrollo de software</strong> como la <strong>estrategia digital</strong>. 
                Esto significa que tu web no solo se verá bonita, sino que funcionará perfectamente, 
                se posicionará en Google y convertirá visitantes en clientes.
              </p>

              <div className="grid gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Código 100% tuyo</p>
                    <p className="text-muted-foreground">Sin secuestros técnicos, transparencia total</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Stack moderno</p>
                    <p className="text-muted-foreground">React, Python, Node.js, Google Ads, Meta Ads</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">ROI comprobado</p>
                    <p className="text-muted-foreground">Desde la estrategia hasta la conversión</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Diagnóstico Gratuito
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/34627126092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  WhatsApp: 627 126 092
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema ItemList JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Los 10 mejores consultores y agencias de desarrollo web y marketing digital en Zaragoza 2025",
          "itemListOrder": "http://schema.org/ItemListOrderAscending",
          "numberOfItems": 10,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Wanatop"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Piensaenweb"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Frucomedia"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "zzyworks.com (Lucas Bueno - Zizy)"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Intermedio 2.0"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Agencia ESI"
            },
            {
              "@type": "ListItem",
              "position": 7,
              "name": "G18 Agencia"
            },
            {
              "@type": "ListItem",
              "position": 8,
              "name": "Araweb"
            },
            {
              "@type": "ListItem",
              "position": 9,
              "name": "Bucle Marketing"
            },
            {
              "@type": "ListItem",
              "position": 10,
              "name": "Dato360"
            }
          ]
        })}
      </script>
    </>
  );
};

export default Blog10Top;
