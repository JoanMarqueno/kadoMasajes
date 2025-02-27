import { Link } from "react-router-dom";
import ScrollToTop from "../components/scrollTop";
import IconoWhatsApp from "../components/Iconos/iconoWhatsapp";

export default function ValesRegalo() {
  return (
    <>
      <ScrollToTop />
      <div className="bg-color-fondo min-h-screen pt-36 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl text-color-letra-nav font-medium mb-3">
            Vales Regalo
          </h1>
          <p className="text-base sm:text-lg text-color-letra-nav italic max-w-2xl mx-auto">
            El mejor regalo para cuidar a las personas que quieres
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 sm:w-32 border-b-4 border-color-fondo-marron"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-color-fondo-blanco rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 sm:p-10 flex items-center justify-center bg-color-fondo-marron/5">
                  <img
                    src="/vale-regalo-ejemplo.webp"
                    alt="Ejemplo de vale regalo"
                    className="rounded-lg shadow-md max-w-sm w-full hover:scale-102 transition-transform duration-300"
                  />
                </div>

                <div className="lg:w-1/2 p-8 sm:p-10 lg:pl-8">
                  <div className="space-y-8">
                    <p className="text-base sm:text-lg text-color-letra-nav leading-relaxed">
                      Si quieres regalar un masaje tienes a tu disposición los
                      vales personalizables con el texto y duración que desees.
                    </p>

                    <div className="bg-color-fondo-marron/5 p-6 rounded-xl border border-color-fondo-marron/10">
                      <h2 className="text-lg sm:text-xl text-color-letra-nav font-medium mb-4">
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
                      <Link
                        to="https://wa.me/34623519832"
                        target="_blank"
                        className="flex items-center justify-center gap-2 bg-color-fondo-marron text-color-fondo-blanco px-6 py-3.5 rounded-lg hover:bg-color-letra-card transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md"
                      >
                        <IconoWhatsApp />
                        <span>Solicitar Vale Regalo</span>
                      </Link>
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
    </>
  );
}
