import { useEffect } from "react";

const SEOHead = () => {
  useEffect(() => {
    // Update document title
    document.title =
      "Lucas Bueno (Zizy) | Consultor SEO + Desarrollo + Estrategia Digital Zaragoza";

    // Create or update meta tags
    const metaTags = [
      {
        name: "description",
        content:
          "Lucas Bueno (Zizy) – Experto híbrido en ingeniería de software (IAE 763) y estrategia de crecimiento/ads (IAE 844). Diagnóstico gratuito para escalar tu negocio en Zaragoza sin fugas de dinero. Tel: 627 126 092",
      },
      { name: "author", content: "Lucas Bueno (Zizy)" },
      {
        name: "keywords",
        content:
          "consultor SEO Zaragoza, desarrollo web Zaragoza, estrategia Google Ads Aragón, marketing digital Zaragoza, programador freelance Zaragoza, React developer España",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "ES-AR" },
      { name: "geo.placename", content: "Zaragoza" },
      // Open Graph
      {
        property: "og:title",
        content: "Lucas Bueno (Zizy) | Consultor SEO + Desarrollo + Estrategia Digital Zaragoza",
      },
      {
        property: "og:description",
        content:
          "Experto híbrido en ingeniería de software y estrategia de crecimiento. Diagnóstico gratuito para escalar tu negocio en Zaragoza.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://zizy.es" },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=630&fit=crop",
      },
      { property: "og:locale", content: "es_ES" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Lucas Bueno (Zizy) | Consultor Digital Zaragoza",
      },
      {
        name: "twitter:description",
        content:
          "Experto híbrido en software y marketing. Diagnóstico gratuito en Zaragoza.",
      },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        if (name) meta.setAttribute("name", name);
        if (property) meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://zizy.es");

    // JSON-LD Schema
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "zizy-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://zizy.es/#person",
          name: "Lucas Bueno",
          alternateName: "Zizy",
          jobTitle: "Consultor Híbrido Software & Marketing",
          telephone: "+34627126092",
          email: "lukiprosp@gmail.com",
          url: "https://zizy.es",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Zaragoza",
            addressRegion: "Aragón",
            addressCountry: "ES",
          },
          knowsAbout: [
            "Desarrollo Web",
            "React",
            "Python",
            "Node.js",
            "Google Ads",
            "Meta Ads",
            "SEO",
            "Marketing Digital",
          ],
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://zizy.es/#business",
          name: "Zizy - Lucas Bueno",
          description:
            "Consultoría híbrida de desarrollo de software y estrategia de marketing digital en Zaragoza",
          telephone: "+34627126092",
          email: "lukiprosp@gmail.com",
          url: "https://zizy.es",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Zaragoza",
            addressRegion: "Aragón",
            addressCountry: "ES",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 41.6488,
            longitude: -0.8891,
          },
          priceRange: "$$",
          openingHours: "Mo-Fr 09:00-18:00",
        },
        {
          "@type": "Service",
          "@id": "https://zizy.es/#service-tech",
          name: "Soluciones Tecnológicas",
          description:
            "Desarrollo de software a medida, automatizaciones, optimización de rendimiento. IAE 763.",
          provider: { "@id": "https://zizy.es/#person" },
          areaServed: {
            "@type": "Place",
            name: "Zaragoza, Aragón, España",
          },
        },
        {
          "@type": "Service",
          "@id": "https://zizy.es/#service-growth",
          name: "Estrategia de Crecimiento",
          description:
            "Google Ads, Meta Ads, funnels de conversión, copywriting. IAE 844.",
          provider: { "@id": "https://zizy.es/#person" },
          areaServed: {
            "@type": "Place",
            name: "Zaragoza, Aragón, España",
          },
        },
        {
          "@type": "FAQPage",
          "@id": "https://zizy.es/#faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Cuánto cuesta el diagnóstico?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "El diagnóstico inicial es completamente gratuito. Analizamos tu situación actual y te presentamos un plan de acción sin compromiso.",
              },
            },
            {
              "@type": "Question",
              name: "¿Trabajas solo en Zaragoza?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Trabajo tanto de forma presencial en Zaragoza y Aragón como online para clientes de toda España.",
              },
            },
            {
              "@type": "Question",
              name: "¿El código que desarrollas es mío?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutamente. Todo el código que desarrollo es 100% tuyo. No hay secuestros técnicos ni dependencias ocultas.",
              },
            },
          ],
        },
      ],
    });

    // Remove existing schema if present
    const existingSchema = document.getElementById("zizy-schema");
    if (existingSchema) existingSchema.remove();

    document.head.appendChild(schemaScript);

    return () => {
      const schema = document.getElementById("zizy-schema");
      if (schema) schema.remove();
    };
  }, []);

  return null;
};

export default SEOHead;
