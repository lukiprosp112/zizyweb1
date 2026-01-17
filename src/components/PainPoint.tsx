import { AlertTriangle } from "lucide-react";

const PainPoint = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-6">
            <AlertTriangle className="w-8 h-8 text-accent" />
          </div>
          
          <h2 className="text-fluid-lg font-bold mb-6 text-balance">
            La mayoría de las empresas pierden dinero porque su tecnología y su marketing{" "}
            <span className="text-primary">no se hablan</span>.
          </h2>
          
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            Lucas Bueno (Zizy) unifica ambos mundos para que cada euro invertido trabaje para ti en{" "}
            <strong className="text-background">Zaragoza y toda España</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoint;
