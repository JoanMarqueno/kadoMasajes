import Seo from "../components/Seo";
import IconoWhatsApp from "../components/Iconos/iconoWhatsapp";

export default function ValesRegalo() {
  return (
    <div className="bg-color-fondo min-h-screen pt-36 pb-16">
      <Seo
        title="Vales Regalo de Masajes | Kadō Masajes Tarragona"
        description="Regala bienestar con vales personalizables de Kadō Masajes. Solicítalos por WhatsApp y recíbelos en formato digital."
        path="/vales-regalo"
        image="/vale-regalo-ejemplo.webp"
      />
      <div className="text-center mb-16">
        <h1 className="section-title mb-3">
          Vales Regalo
        </h1>
        <p className="section-subtitle whitespace-normal break-words">
          El mejor regalo para cuidar a las personas que quieres
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 sm:w-32 border-b-4 border-color-fondo-marron"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="kado-surface overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 sm:p-10 flex items-center justify-center bg-color-fondo-marron/5">
                <img
                  src="/vale-regalo-ejemplo.webp"
                  alt="Ejemplo de vale regalo"
                  className="rounded-lg shadow-md max-w-sm w-full hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="lg:w-1/2 p-8 sm:p-10 lg:pl-8">
                <div className="space-y-8">
                  <p className="text-base sm:text-lg text-color-letra-nav leading-relaxed">
                    Si quieres regalar un masaje tienes a tu disposición los
                    vales personalizables con el texto y duración que desees.
                  </p>

                  <div className="bg-color-fondo-marron/5 p-6 rounded-xl border border-color-fondo-marron/10">
                    <h2 className="kado-heading text-lg sm:text-xl text-color-letra-nav mb-4">
                      Información importante:
                    </h2>
                    <ul className="space-y-4 text-color-letra-nav">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Se envía en formato digital por WhatsApp, no es
                          necesario imprimir
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Caduca en 6 meses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Pago por Bizum una vez recibido el vale ya
                          personalizado
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-2">
                    <a
                      href="https://wa.me/34623519832"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-color-fondo-marron text-color-fondo-blanco px-6 py-3.5 rounded-lg hover:bg-color-letra-card transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md"
                    >
                      <IconoWhatsApp />
                      <span>Solicitar Vale Regalo</span>
                    </a>
                    <p className="text-sm text-color-letra-nav/80 text-center">
                      Para comprar tu vale regalo o solicitar más información
                      <br className="hidden sm:block" /> envía mensaje por
                      WhatsApp al{" "}
                      <span className="font-medium">623519832</span>
                    </p>
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
