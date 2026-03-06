import IconoWhatsApp from "../components/Iconos/iconoWhatsapp";
import Seo from "../components/Seo";

export default function Reserva() {
  return (
    <div className="bg-color-fondo min-h-screen pt-36 pb-16">
      <Seo
        title="Reserva tu masaje en Tarragona | Kadō Masajes"
        description="Reserva tu cita de masaje en Kadō Masajes. Contacta por WhatsApp, teléfono o email y encuentra nuestra ubicación en Tarragona."
        path="/reserva"
        image="/kado.webp"
      />
      {/* Encabezado */}
      <div className="text-center mb-16">
        <h1 className="section-title mb-3">
          Reservas
        </h1>
        <p className="section-subtitle">
          Tu bienestar, nuestra prioridad
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 sm:w-32 border-b-4 border-color-fondo-marron"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="kado-surface overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Mapa */}
              <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6011.602730202711!2d1.248432!3d41.117029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bd8e5946ab7ed%3A0x6c5568c1e3a6f56b!2sKad%C5%8D%20Masajes%20Massage%20Massatge%20Massaggio%20Masaje%20Californiano!5e0!3m2!1sca!2ses!4v1701367404667!5m2!1sca!2ses"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    border: 0,
                    filter: "grayscale(1) contrast(1.2) opacity(0.8)",
                  }}
                  loading="lazy"
                  title="Ubicación de Kadō Masajes"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Contenido */}
              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-lg text-color-letra-nav leading-relaxed">
                      Para reservar una cita, por favor, envíanos un correo o un
                      mensaje de WhatsApp con tu nombre, el día, la hora y el
                      tipo de masaje que deseas reservar.
                    </p>

                    <div className="bg-color-fondo-marron/5 p-6 rounded-xl border border-color-fondo-marron/10">
                      <h3 className="font-medium text-xl text-color-letra-nav mb-4">
                        Información de contacto
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="mr-3 text-color-fondo-marron font-medium w-24">
                            Dirección:
                          </span>
                          <a
                            href="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-color-letra-nav hover:text-color-letra-card transition-colors"
                          >
                            Av. Ramón y Cajal, 5 1-1, Tarragona
                          </a>
                        </div>
                        <div className="flex items-start">
                          <span className="mr-3 text-color-fondo-marron font-medium w-24">
                            Email:
                          </span>
                          <a
                            href="mailto:kadomasajes@gmail.com"
                            className="text-color-letra-nav hover:text-color-letra-card transition-colors"
                          >
                            kadomasajes@gmail.com
                          </a>
                        </div>
                        <div className="flex items-start">
                          <span className="mr-3 text-color-fondo-marron font-medium w-24">
                            Teléfono:
                          </span>
                          <a
                            href="tel:+34623519832"
                            className="text-color-letra-nav hover:text-color-letra-card transition-colors"
                          >
                            +34 623 51 98 32
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-color-letra-nav leading-relaxed">
                        Si tienes alguna duda sobre algún tratamiento, no dudes
                        en ponerte en contacto con nosotros.
                      </p>
                      <p className="text-color-letra-nav font-medium">
                        No se atenderán servicios sin cita previa.
                      </p>
                    </div>

                    <a
                      href="https://wa.me/34623519832"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-color-fondo-marron text-color-fondo-blanco px-6 py-3.5 rounded-lg hover:bg-color-letra-card transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md"
                    >
                      <IconoWhatsApp />
                      <span>Solicitar cita</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
