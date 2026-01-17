import { Code2, BarChart3, Shield, MapPin, Phone, Mail } from "lucide-react";

const skills = [
  { icon: Code2, label: "React, Python, Node.js" },
  { icon: BarChart3, label: "Google Ads, Meta Ads" },
  { icon: Shield, label: "Código 100% tuyo" },
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Decorative Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Abstract decorative SVG */}
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-label="Ilustración abstracta representando la conexión entre código y negocio"
              >
                <defs>
                  <linearGradient id="aboutBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(199 89% 48%)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(199 89% 48%)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="aboutGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(160 84% 39%)" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="hsl(160 84% 39%)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Background circle */}
                <circle cx="200" cy="200" r="180" fill="hsl(210 20% 96%)" />

                {/* Hexagon - code symbol */}
                <polygon
                  points="200,50 280,100 280,200 200,250 120,200 120,100"
                  fill="url(#aboutBlue)"
                />

                {/* Triangle - growth symbol */}
                <polygon
                  points="200,180 300,320 100,320"
                  fill="url(#aboutGreen)"
                />

                {/* Connection lines */}
                <line x1="200" y1="150" x2="200" y2="250" stroke="hsl(0 0% 100%)" strokeWidth="3" />
                <circle cx="200" cy="150" r="8" fill="hsl(0 0% 100%)" />
                <circle cx="200" cy="250" r="8" fill="hsl(0 0% 100%)" />

                {/* Small accent circles */}
                <circle cx="120" cy="100" r="12" fill="hsl(199 89% 48%)" fillOpacity="0.5" />
                <circle cx="280" cy="100" r="12" fill="hsl(160 84% 39%)" fillOpacity="0.5" />
              </svg>

              {/* Floating badges */}
              <div className="absolute top-10 right-0 bg-card shadow-lg rounded-xl px-4 py-2 border border-border">
                <span className="text-sm font-semibold text-primary">IAE 763</span>
              </div>
              <div className="absolute bottom-10 left-0 bg-card shadow-lg rounded-xl px-4 py-2 border border-border">
                <span className="text-sm font-semibold text-accent">IAE 844</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
              Sobre mí
            </span>

            <h2 className="text-fluid-lg font-bold text-foreground">
              Lucas Bueno (Zizy):{" "}
              <span className="text-primary">El traductor entre código y negocio</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un consultor híbrido en Zaragoza que domina tanto el desarrollo de software como 
              la estrategia de crecimiento digital. Mi misión es clara: que tu tecnología y tu 
              marketing trabajen juntos para multiplicar tus resultados.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-4 pt-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2"
                >
                  <skill.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-accent" />
                <span className="font-bold text-foreground">Mi garantía</span>
              </div>
              <p className="text-muted-foreground">
                Código siempre tuyo – sin secuestros técnicos. Trabajamos con transparencia total.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Zaragoza, Aragón (España)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+34627126092"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  627 126 092
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:lukiprosp@gmail.com"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  lukiprosp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
