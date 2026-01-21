interface PoliticaCookiesProps {
  onClose?: () => void;
}

const PoliticaCookies = ({ onClose }: PoliticaCookiesProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-background text-foreground rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Política de Cookies</h1>
        <p className="text-sm text-muted-foreground">
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>
      </div>

      <div className="space-y-8">
        {/* Introducción */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introducción</h2>
          <p className="text-foreground/90 leading-relaxed">
            Esta Política de Cookies describe qué son las cookies, cómo se utilizan en el sitio web zzyworks.com (en adelante "el Sitio"), 
            los tipos de cookies que utilizamos y cómo los usuarios pueden gestionar sus preferencias. Esta política se ajusta a la 
            legislación española (LSSI-CE) y europea sobre privacidad y cookies.
          </p>
        </section>

        {/* Qué son las cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">2. ¿Qué Son las Cookies?</h2>
          <p className="text-foreground/90 leading-relaxed">
            Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando accede al Sitio. 
            Contienen información que identifica de forma única a cada usuario, pero no contienen datos personales identificables 
            por sí solos. Las cookies tienen diferentes usos según su tipo y finalidad.
          </p>
        </section>

        {/* Tipos de cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">3. Tipos de Cookies que Utilizamos</h2>
          
          <div className="space-y-6">
            {/* Cookies técnicas */}
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary">3.1 Cookies Técnicas (Esenciales)</h3>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Son aquellas cookies que son absolutamente necesarias para el funcionamiento técnico del Sitio Web. Sin estas cookies, 
                ciertas funcionalidades no funcionarían correctamente.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                <span className="font-semibold">Ejemplos:</span> Cookies de sesión para mantener el acceso autenticado, cookies para 
                recordar preferencias de idioma, cookies de seguridad para prevenir ataques.
              </p>
              <p className="text-foreground/90 leading-relaxed mt-3">
                <span className="font-semibold">Duración:</span> Sesión del navegador (hasta que cierre el navegador) o máximo 30 días.
              </p>
            </div>

            {/* Cookies de análisis */}
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary">3.2 Cookies de Análisis</h3>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Permiten al titular del Sitio recopilar información sobre cómo los usuarios interactúan con el Sitio, 
                incluyendo páginas visitadas, tiempo de navegación y acciones realizadas. Se utilizan para mejorar el funcionamiento 
                y contenido del Sitio.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                <span className="font-semibold">Ejemplos:</span> Google Analytics para análisis de tráfico y comportamiento del usuario.
              </p>
              <p className="text-foreground/90 leading-relaxed mt-3">
                <span className="font-semibold">Duración:</span> Hasta 2 años.
              </p>
            </div>

            {/* Cookies de publicidad */}
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary">3.3 Cookies de Publicidad y Marketing</h3>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Se utilizan para rastrear el comportamiento del usuario y servir anuncios relevantes, tanto en este Sitio como en otros 
                sitios web. También se pueden usar para limitar la frecuencia de anuncios mostrados.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                <span className="font-semibold">Ejemplos:</span> Facebook Pixel, Google Ads cookies, cookies de retargeting.
              </p>
              <p className="text-foreground/90 leading-relaxed mt-3">
                <span className="font-semibold">Duración:</span> Hasta 2 años.
              </p>
            </div>

            {/* Cookies de terceros */}
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary">3.4 Cookies de Terceros</h3>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Son cookies establecidas por dominios distintos al Sitio Web. Se utilizan para servicios de análisis, publicidad 
                y contenido integrado desde proveedores externos.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                <span className="font-semibold">Proveedores:</span> Google, Meta (Facebook), LinkedIn, y otros servicios integrados.
              </p>
            </div>
          </div>
        </section>

        {/* Tabla de cookies específicas */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">4. Cookies Específicas Utilizadas en Este Sitio</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-muted-foreground">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-2 text-left font-semibold">Nombre</th>
                  <th className="border p-2 text-left font-semibold">Tipo</th>
                  <th className="border p-2 text-left font-semibold">Proveedor</th>
                  <th className="border p-2 text-left font-semibold">Duración</th>
                  <th className="border p-2 text-left font-semibold">Finalidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">_ga</td>
                  <td className="border p-2">Análisis</td>
                  <td className="border p-2">Google Analytics</td>
                  <td className="border p-2">2 años</td>
                  <td className="border p-2">Identificar usuario único para análisis</td>
                </tr>
                <tr>
                  <td className="border p-2">_gid</td>
                  <td className="border p-2">Análisis</td>
                  <td className="border p-2">Google Analytics</td>
                  <td className="border p-2">24 horas</td>
                  <td className="border p-2">Sesión de usuario para análisis</td>
                </tr>
                <tr>
                  <td className="border p-2">_fbp</td>
                  <td className="border p-2">Publicidad</td>
                  <td className="border p-2">Meta (Facebook)</td>
                  <td className="border p-2">90 días</td>
                  <td className="border p-2">Rastreo de conversiones y retargeting</td>
                </tr>
                <tr>
                  <td className="border p-2">session_id</td>
                  <td className="border p-2">Técnica</td>
                  <td className="border p-2">Sitio propio</td>
                  <td className="border p-2">Sesión</td>
                  <td className="border p-2">Mantener sesión autenticada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Consentimiento */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">5. Consentimiento de Cookies</h2>
          <p className="text-foreground/90 leading-relaxed mb-3">
            De conformidad con la legislación española e europea:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90">
            <li>
              <span className="font-semibold">Cookies técnicas:</span> Se utilizan sin necesidad de consentimiento previo, 
              ya que son esenciales para el funcionamiento del Sitio.
            </li>
            <li>
              <span className="font-semibold">Cookies de análisis y publicidad:</span> Se utilizan únicamente con consentimiento 
              explícito del usuario, a través del banner de cookies visible en la primera visita al Sitio.
            </li>
          </ul>
          <p className="text-foreground/90 leading-relaxed mt-3">
            El usuario puede cambiar sus preferencias de cookies en cualquier momento a través del banner de cookies o en la 
            configuración de privacidad del Sitio.
          </p>
        </section>

        {/* Gestión de cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">6. Cómo Gestionar Sus Preferencias de Cookies</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-primary">6.1 A través del Sitio Web</h3>
              <p className="text-foreground/90 leading-relaxed">
                Puede actualizar sus preferencias de cookies haciendo clic en el botón "Gestionar cookies" o "Preferencias de privacidad" 
                disponible en el pie de página del Sitio en cualquier momento.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-primary">6.2 A través de su Navegador</h3>
              <p className="text-foreground/90 leading-relaxed mb-2">
                Puede gestionar, bloquear o eliminar cookies desde la configuración de privacidad de su navegador:
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/90 text-sm">
                <li><span className="font-semibold">Chrome:</span> Configuración → Privacidad y seguridad → Cookies</li>
                <li><span className="font-semibold">Firefox:</span> Preferencias → Privacidad → Cookies</li>
                <li><span className="font-semibold">Safari:</span> Preferencias → Privacidad → Cookies</li>
                <li><span className="font-semibold">Edge:</span> Configuración → Privacidad y servicios → Cookies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-primary">6.3 A través de Herramientas Externas</h3>
              <p className="text-foreground/90 leading-relaxed">
                Puede utilizar herramientas externas como <a href="https://www.aboutads.info" className="text-primary hover:underline">
                aboutads.info
                </a> o <a href="https://www.youronlinechoices.eu" className="text-primary hover:underline">
                youronlinechoices.eu
                </a> para controlar publicidad basada en intereses.
              </p>
            </div>
          </div>
        </section>

        {/* Cambios de preferencias */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">7. Cambios en Preferencias de Cookies</h2>
          <p className="text-foreground/90 leading-relaxed">
            Si rechaza o retira su consentimiento para cookies de análisis o publicidad:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mt-3">
            <li>Se dejarán de recopilar datos analíticos</li>
            <li>Puede recibir menos anuncios personalizados</li>
            <li>La experiencia del usuario en el Sitio podría verse afectada en algunos aspectos</li>
            <li>Las cookies técnicas seguirán funcionando normalmente</li>
          </ul>
        </section>

        {/* Cookies de terceros */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">8. Políticas de Cookies de Terceros</h2>
          <p className="text-foreground/90 leading-relaxed mb-3">
            Este Sitio utiliza servicios de terceros que tienen sus propias políticas de cookies. Le recomendamos que revise sus políticas:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 text-sm">
            <li>
              <span className="font-semibold">Google:</span>{" "}
              <a href="https://policies.google.com/technologies/cookies" className="text-primary hover:underline">
                https://policies.google.com/technologies/cookies
              </a>
            </li>
            <li>
              <span className="font-semibold">Meta (Facebook):</span>{" "}
              <a href="https://www.facebook.com/policies/cookies/" className="text-primary hover:underline">
                https://www.facebook.com/policies/cookies/
              </a>
            </li>
            <li>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a href="https://www.linkedin.com/legal/cookie-policy" className="text-primary hover:underline">
                https://www.linkedin.com/legal/cookie-policy
              </a>
            </li>
          </ul>
        </section>

        {/* Seguridad */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">9. Seguridad de las Cookies</h2>
          <p className="text-foreground/90 leading-relaxed">
            Todas las cookies en este Sitio se transmiten a través de conexiones HTTPS encriptadas. El Sitio implementa medidas de 
            seguridad para proteger los datos almacenados en cookies contra acceso no autorizado.
          </p>
        </section>

        {/* Cambios en política */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">10. Cambios en esta Política de Cookies</h2>
          <p className="text-foreground/90 leading-relaxed">
            El Responsable se reserva el derecho de modificar esta Política de Cookies en cualquier momento para reflejar cambios en 
            las prácticas, tecnología o regulaciones. Los cambios entrarán en vigor desde su publicación en el Sitio Web.
          </p>
        </section>

        {/* Contacto */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">11. Contacto</h2>
          <p className="text-foreground/90 leading-relaxed mb-3">
            Si tiene preguntas sobre esta Política de Cookies, puede contactar al responsable:
          </p>
          <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:lukiprosp@gmail.com" className="text-primary hover:underline">
                lukiprosp@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Teléfono:</span> 627 126 092
            </p>
            <p>
              <span className="font-semibold">Dirección:</span> C/ Concepción Saiz de Otero 23, Zaragoza
            </p>
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

export default PoliticaCookies;
