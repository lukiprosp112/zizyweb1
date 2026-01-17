import GeometricBackground from "./GeometricBackground";
import ZizyLogo from "./ZizyLogo";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <GeometricBackground className="opacity-80" />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <ZizyLogo size={48} />
              <span className="text-2xl font-bold text-foreground">Zizy</span>
            </div>

            <h1 className="text-fluid-xl font-bold leading-tight text-foreground text-balance">
              Ingeniería de software para escalar.{" "}
              <span className="text-primary">Estrategia de publicidad para vender.</span>
            </h1>

            <p className="text-fluid-base text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Zizy unifica tecnología y marketing para que tu negocio crezca sin fugas de dinero en{" "}
              <strong className="text-foreground">Zaragoza</strong>.
            </p>

            <p className="text-lg text-foreground font-medium">
              — Lucas Bueno (Zizy)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-semibold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-primary/25"
              >
                Solicitar Diagnóstico Gratuito
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center h-14 px-8 border-2 border-primary text-primary font-semibold text-lg rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Visual Element - Abstract Geometric Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square">
              <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=600&fit=crop"
                alt="Ilustración abstracta de arquitectura limpia y optimización digital – Zizy Zaragoza"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              {/* Overlay geometric shapes */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
