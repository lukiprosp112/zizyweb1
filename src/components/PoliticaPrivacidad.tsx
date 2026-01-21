interface PoliticaPrivacidadProps {
  onClose?: () => void;
}

const PoliticaPrivacidad = ({ onClose }: PoliticaPrivacidadProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-background text-foreground rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Política de Privacidad</h1>
        <p className="text-sm text-muted-foreground">
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>
      </div>

      <div className="space-y-8">
        {/* Introducción */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introducción</h2>
          <p className="text-foreground/90 leading-relaxed">
            Esta Política de Privacidad establece cómo ANDRES LUCAS BUENO CALVO (en adelante "el Responsable") recopila, utiliza, 
            almacena y protege los datos personales de los usuarios del sitio web zzyworks.com (en adelante "el Sitio Web"). 
            El Responsable se compromete a garantizar el cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la legislación española 
            de protección de datos (LOPDGDD).
          </p>
        </section>

        {/* Responsable */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">2. Responsable del Tratamiento de Datos</h2>
          <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
            <p>
              <span className="font-semibold">Nombre:</span> ANDRES LUCAS BUENO CALVO
            </p>
            <p>
              <span className="font-semibold">NIF:</span> 73054829K
            </p>
            <p>
              <span className="font-semibold">Domicilio:</span> C/ Concepción Saiz de Otero 23, Zaragoza (España)
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:lukiprosp@gmail.com" className="text-primary hover:underline">
                lukiprosp@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Teléfono:</span> +34 627 126 092
            </p>
          </div>
        </section>

        {/* Datos recopilados */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">3. Datos Personales Recopilados</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            El Sitio Web recopila datos personales únicamente cuando el usuario voluntariamente los proporciona a través de formularios 
            de contacto o consultas por email. Los datos recopilados incluyen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90">
            <li>Nombre y apellidos</li>
            <li>Correo electrónico</li>
            <li>Teléfono (opcional)</li>
            <li>Empresa (opcional)</li>
            <li>Mensaje o consulta</li>
            <li>Datos de navegación (dirección IP, navegador, tipo de dispositivo) mediante servidores web estándar</li>
          </ul>
        </section>

        {/* Fundamento legal */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">4. Fundamento Legal del Tratamiento</h2>
          <p className="text-foreground/90 leading-relaxed">
            El tratamiento de datos personales se realiza sobre la base de:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mt-3">
            <li>
              <span className="font-semibold">Consentimiento (Art. 6.1.a RGPD):</span> Para envíos de información sobre servicios 
              solicitados expresamente por el usuario.
            </li>
            <li>
              <span className="font-semibold">Interés legítimo (Art. 6.1.f RGPD):</span> Para mejorar el sitio web, análisis de 
              tráfico y prevención de fraude.
            </li>
            <li>
              <span className="font-semibold">Obligación legal:</span> Cuando sea requerido por legislación aplicable.
            </li>
          </ul>
        </section>

        {/* Finalidades */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">5. Finalidades del Tratamiento</h2>
          <p className="text-foreground/90 leading-relaxed mb-3">
            Los datos personales se utilizan para:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90">
            <li>Responder a consultas y solicitudes de información de servicios</li>
            <li>Mantener la correspondencia y contacto directo con el usuario</li>
            <li>Facilitar la prestación de servicios contratados</li>
            <li>Enviar información sobre nuevos servicios o promociones (con consentimiento previo)</li>
            <li>Cumplir obligaciones legales y fiscales</li>
            <li>Mejorar la experiencia del usuario en el sitio web</li>
            <li>Análisis estadísticos y optimización del sitio</li>
            <li>Prevención de fraude y seguridad informática</li>
          </ul>
        </section>

        {/* Conservación */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">6. Período de Conservación de Datos</h2>
          <p className="text-foreground/90 leading-relaxed">
            Los datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades descritas, 
            en particular:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mt-3">
            <li>
              <span className="font-semibold">Consultas y contactos:</span> Se conservarán durante 3 años desde el último contacto 
              o hasta que el usuario solicite su eliminación.
            </li>
            <li>
              <span className="font-semibold">Datos de navegación (logs):</span> Se conservarán durante 30 días.
            </li>
            <li>
              <span className="font-semibold">Obligaciones fiscales:</span> Se conservarán durante 6 años conforme a la legislación 
              fiscal española.
            </li>
          </ul>
        </section>

        {/* Destinatarios */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">7. Destinatarios de los Datos</h2>
          <p className="text-foreground/90 leading-relaxed">
            Los datos personales no se compartirán con terceros excepto en los siguientes casos:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mt-3">
            <li>Cuando sea requerido por la ley o autoridades públicas competentes</li>
            <li>Proveedores de servicios técnicos de hosting y email (bajo contrato de protección de datos)</li>
            <li>Autoridades fiscales cuando sea obligatorio por ley</li>
            <li>Con consentimiento expreso del usuario para servicios adicionales</li>
          </ul>
          <p className="text-foreground/90 leading-relaxed mt-3">
            Los proveedores de servicios están vinculados por contratos de protección de datos conforme al RGPD.
          </p>
        </section>

        {/* Derechos del usuario */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">8. Derechos de los Usuarios (RGPD)</h2>
          <p className="text-foreground/90 leading-relaxed mb-3">
            De conformidad con el RGPD, los usuarios tienen los siguientes derechos:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90">
            <li>
              <span className="font-semibold">Derecho de acceso:</span> Solicitar información sobre qué datos personales tiene 
              el Responsable.
            </li>
            <li>
              <span className="font-semibold">Derecho de rectificación:</span> Solicitar la corrección de datos inexactos.
            </li>
            <li>
              <span className="font-semibold">Derecho de supresión (olvido):</span> Solicitar la eliminación de datos personales.
            </li>
            <li>
              <span className="font-semibold">Derecho de limitación:</span> Solicitar limitar el tratamiento de datos.
            </li>
            <li>
              <span className="font-semibold">Derecho de portabilidad:</span> Obtener datos en formato legible y transferible.
            </li>
            <li>
              <span className="font-semibold">Derecho de oposición:</span> Oponerse al tratamiento de datos por interés legítimo.
            </li>
            <li>
              <span className="font-semibold">Derecho a no ser objeto de decisiones automatizadas:</span> No ser sometido a decisiones 
              basadas únicamente en tratamiento automatizado.
            </li>
          </ul>
        </section>

        {/* Ejercicio de derechos */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">9. Cómo Ejercer Sus Derechos</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Para ejercer cualquiera de los derechos anteriores, el usuario puede contactar al Responsable a través de:
          </p>
          <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:lukiprosp@gmail.com" className="text-primary hover:underline">
                lukiprosp@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Dirección postal:</span> C/ Concepción Saiz de Otero 23, Zaragoza
            </p>
            <p>
              <span className="font-semibold">Teléfono:</span> 627 126 092
            </p>
          </div>
          <p className="text-foreground/90 leading-relaxed mt-4">
            Las solicitudes serán atendidas en un plazo de 30 días desde su recepción.
          </p>
        </section>

        {/* Medidas de seguridad */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">10. Medidas de Seguridad</h2>
          <p className="text-foreground/90 leading-relaxed">
            El Responsable implementa medidas técnicas y organizativas para proteger los datos personales contra acceso no autorizado, 
            alteración, pérdida o destrucción, incluyendo:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 mt-3">
            <li>Encriptación de datos en tránsito (HTTPS/SSL)</li>
            <li>Acceso restringido a los datos personales</li>
            <li>Copias de seguridad regulares</li>
            <li>Sistemas de prevención de intrusiones</li>
            <li>Políticas de contraseña segura</li>
          </ul>
          <p className="text-foreground/90 leading-relaxed mt-3">
            Sin embargo, ningún método de transmisión por Internet es 100% seguro. El usuario utiliza el Sitio bajo su propia responsabilidad.
          </p>
        </section>

        {/* Cookies y rastreo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">11. Cookies y Rastreo</h2>
          <p className="text-foreground/90 leading-relaxed">
            Este Sitio Web utiliza cookies técnicas necesarias para el funcionamiento del sitio. Para más información sobre cookies, 
            consulte la Política de Cookies. El usuario puede gestionar cookies en la configuración de su navegador.
          </p>
        </section>

        {/* Cambios en política */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">12. Cambios en la Política de Privacidad</h2>
          <p className="text-foreground/90 leading-relaxed">
            El Responsable se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios entrarán 
            en vigor desde su publicación en el Sitio Web. Se recomienda revisar periódicamente esta política.
          </p>
        </section>

        {/* Contacto para quejas */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">13. Derecho a Presentar Reclamaciones</h2>
          <p className="text-foreground/90 leading-relaxed">
            Si tiene dudas o quejas sobre el tratamiento de sus datos personales, puede contactar con el Responsable o 
            presentar una reclamación ante la Autoridad de Control (Agencia Española de Protección de Datos - AEPD) 
            en www.aepd.es.
          </p>
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

export default PoliticaPrivacidad;
