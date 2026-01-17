import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

type CookieConsent = "accepted" | "rejected" | "configured" | null;

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent") as CookieConsent;
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    localStorage.setItem(
      "cookie_preferences",
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    );
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    localStorage.setItem(
      "cookie_preferences",
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    );
    setIsVisible(false);
  };

  const handleSaveConfig = () => {
    localStorage.setItem("cookie_consent", "configured");
    localStorage.setItem("cookie_preferences", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
        {!showConfig ? (
          /* Main Banner */
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-2">
                  🍪 Usamos cookies
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico 
                  del sitio y personalizar contenido. Puedes aceptar todas, rechazarlas o configurar 
                  tus preferencias.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleAccept}
                    className="h-10 px-5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Aceptar todas
                  </button>
                  <button
                    onClick={handleReject}
                    className="h-10 px-5 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    Rechazar
                  </button>
                  <button
                    onClick={() => setShowConfig(true)}
                    className="h-10 px-5 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
                  >
                    Configurar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Configuration Panel */
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-foreground text-lg">
                Configurar Cookies
              </h3>
              <button
                onClick={() => setShowConfig(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary */}
              <label className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                <div>
                  <span className="font-medium text-foreground">Necesarias</span>
                  <p className="text-sm text-muted-foreground">
                    Esenciales para el funcionamiento del sitio
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-5 h-5 rounded text-primary"
                />
              </label>

              {/* Analytics */}
              <label className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl cursor-pointer">
                <div>
                  <span className="font-medium text-foreground">Analíticas</span>
                  <p className="text-sm text-muted-foreground">
                    Nos ayudan a entender cómo usas el sitio
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                />
              </label>

              {/* Marketing */}
              <label className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl cursor-pointer">
                <div>
                  <span className="font-medium text-foreground">Marketing</span>
                  <p className="text-sm text-muted-foreground">
                    Permiten mostrarte publicidad personalizada
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                />
              </label>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSaveConfig}
                className="flex-1 h-10 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Guardar preferencias
              </button>
              <button
                onClick={handleAccept}
                className="h-10 px-5 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
