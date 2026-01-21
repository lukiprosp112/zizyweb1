interface AvisoLegalProps {
  onClose?: () => void;
}

const AvisoLegal = ({ onClose }: AvisoLegalProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-background text-foreground rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Aviso Legal</h1>
        <p className="text-sm text-muted-foreground">
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>
      </div>

      <div className="space-y-8">
        {/* Identificación */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Identificación del Responsable</h2>
          <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
            <p>
              <span className="font-semibold">Nombre Completo:</span> ANDRES LUCAS BUENO CALVO
            </p>
            <p>
              <span className="font-semibold">NIF:</span> 73054829K
            </p>
            <p>
              <span className="font-semibold">Domicilio:</span> C/ Concepción Saiz de Otero 23, Zaragoza (España)
            </p>
            <p>
              <span className="font-semibold">Correo Electrónico:</span>{" "}
              <a href="mailto:lukiprosp@gmail.com" className="text-primary hover:underline">
                lukiprosp@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Teléfono:</span>{" "}
              <a href="tel:+34627126092" className="text-primary hover:underline">
                +34 627 126 092
              </a>
            </p>
          </div>
        </section>

        {/* Régimen de responsabilidad */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">2. Actividad Profesional</h2>
          <p className="text-foreground/90 leading-relaxed">
            El titular de este sitio web es un autónomo que presta servicios de desarrollo web, consultoría digital y marketing. Todos los 
            servicios se regulan por las leyes españolas y la normativa de la Unión Europea, especialmente la Ley 34/1988 de 11 de noviembre 
            sobre publicidad y las normas de la LSSI-CE.
          </p>
        </section>

        {/* Datos de contacto */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">3. Información de Contacto y Comunicaciones</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Para comunicaciones comerciales o consultas sobre servicios, puede contactar a través de:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90">
            <li>Correo electrónico: lukiprosp@gmail.com</li>
            <li>Teléfono: 627 126 092</li>
            <li>Domicilio social: C/ Concepción Saiz de Otero 23, Zaragoza</li>
          </ul>
        </section>

        {/* Uso del sitio */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">4. Uso del Sitio Web</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            El usuario se compromete a usar el sitio web de conformidad con:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90">
            <li>La ley española y normativa aplicable</li>
            <li>Buena fe y prácticas comerciales honestas</li>
            <li>Respeto a los derechos de terceros</li>
            <li>Prohibición de actividades ilícitas, difamatorias o fraudulentas</li>
          </ul>
        </section>

        {/* Limitación de responsabilidad */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">5. Limitación de Responsabilidad</h2>
          <p className="text-foreground/90 leading-relaxed">
            El titular no será responsable por: (a) contenidos incorrectos o incompletos; (b) fallos técnicos en el acceso al sitio; 
            (c) daños indirectos resultantes del uso del sitio; (d) contenidos de terceros vinculados desde este sitio. El usuario 
            accede al sitio bajo su propia responsabilidad.
          </p>
        </section>

        {/* Derechos de propiedad intelectual */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">6. Propiedad Intelectual e Industrial</h2>
          <p className="text-foreground/90 leading-relaxed">
            Todos los contenidos, diseños, logos, gráficos y demás elementos del sitio web están protegidos por derechos de propiedad 
            intelectual e industrial. Queda prohibida su reproducción, distribución o transmisión sin autorización expresa del titular.
          </p>
        </section>

        {/* Política de enlaces */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">7. Enlaces Externos</h2>
          <p className="text-foreground/90 leading-relaxed">
            Este sitio puede contener enlaces a sitios de terceros. El titular no es responsable del contenido, exactitud o legalidad 
            de sitios externos. Los usuarios que accedan a sitios enlazados lo hacen bajo su propia responsabilidad.
          </p>
        </section>

        {/* Modificaciones */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">8. Modificaciones del Aviso Legal</h2>
          <p className="text-foreground/90 leading-relaxed">
            El titular se reserva el derecho de modificar este aviso legal en cualquier momento. Los cambios serán efectivos desde 
            su publicación en el sitio web. Se recomienda revisar periódicamente este documento.
          </p>
        </section>

        {/* Normativa aplicable */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">9. Legislación Aplicable</h2>
          <p className="text-foreground/90 leading-relaxed">
            Este aviso legal y el uso del sitio se rigen por la legislación española, en particular:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mt-3">
            <li>Ley 34/1988, de 11 de noviembre, sobre publicidad</li>
            <li>Ley 3/1991, de 10 de enero, de competencia desleal</li>
            <li>Real Decreto Legislativo 1/1996, de Propiedad Intelectual</li>
            <li>Ley 34/1988 (LSSI-CE) - Servicios de la Sociedad de la Información</li>
            <li>Reglamento (UE) 2016/679 (RGPD)</li>
          </ul>
        </section>

        {/* Jurisdicción */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">10. Jurisdicción y Competencia</h2>
          <p className="text-foreground/90 leading-relaxed">
            Para cualquier controversia derivada de este aviso legal, el usuario y el titular se someten expresamente a la jurisdicción 
            de los juzgados y tribunales de Zaragoza (España).
          </p>
        </section>

        {/* Contacto para reclamaciones */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">11. Contacto para Reclamaciones</h2>
          <p className="text-foreground/90 leading-relaxed mb-2">
            Si tiene reclamaciones o sugerencias relacionadas con este sitio web, puede contactar a:
          </p>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-1">
            <p>Correo: lukiprosp@gmail.com</p>
            <p>Teléfono: 627 126 092</p>
          </div>
        </section>
      </div>

      {onClose && (
        <div className="mt-10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default AvisoLegal;
