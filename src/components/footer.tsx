import { Link } from "react-router-dom";
import IconoInsta from "./Iconos/iconoInstagram";
import IconoTelegram from "./Iconos/iconoTelegram";
import IconoWhatsApp from "./Iconos/iconoWhatsapp";

export const Footer = () => {
  return (
    <footer className="bg-color-fondo font-semibold bottom-0 px-4 pt-16 mx-auto md:px-12 lg:px-12 z-100">
      <div className="flex justify-center pt-5 pb-10 border-t border-color-fondo-marron/10"></div>

      {/* Versión móvil */}
      <div className="md:hidden flex flex-col items-center space-y-8 mb-8">
        <Link to="/" className="inline-flex items-center">
          <img alt="Logo de Kado Masajes" src="/k.webp" className="w-48" />
        </Link>

        <div className="text-center">
          <h3 className="text-lg font-medium text-color-letra-footer mb-6">
            Contacto
          </h3>
          <div className="space-y-4">
            <Link
              to="tel:+34623519832"
              className="block text-color-letra-footer hover:text-color-letra-card transition-colors"
            >
              +34 623 51 98 32
            </Link>
            <Link
              to="mailto:kadomasajes@gmail.com"
              className="block text-color-letra-footer hover:text-color-letra-card transition-colors"
            >
              kadomasajes@gmail.com
            </Link>
            <Link
              to="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
              className="block text-color-letra-footer hover:text-color-letra-card transition-colors"
            >
              Av. Ramón y Cajal, 5 1-1, Tarragona
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-medium text-color-letra-footer mb-6">
            Síguenos
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://t.me/kadomasajes"
              className="text-color-letra-footer hover:text-color-letra-card transition-all hover:scale-110"
            >
              <IconoTelegram />
            </a>
            <a
              href="https://www.instagram.com/kadomasajes/"
              className="text-color-letra-footer hover:text-color-letra-card transition-all hover:scale-110"
            >
              <IconoInsta />
            </a>
            <a
              href="https://wa.me/34623519832"
              className="text-color-letra-footer hover:text-color-letra-card transition-all hover:scale-110"
            >
              <IconoWhatsApp />
            </a>
          </div>
        </div>
      </div>

      {/* Versión desktop */}
      <div className="hidden md:block max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-start">
          <div className="w-1/3">
            <Link to="/" className="inline-flex items-center">
              <img alt="Logo de Kado Masajes" src="/k.webp" width="300" />
            </Link>
          </div>

          <div className="w-1/3">
            <h3 className="text-base font-bold tracking-wide text-color-letra-footer mb-6">
              Contacto
            </h3>
            <div className="space-y-2">
              <Link
                to="tel:+34623519832"
                className="block text-color-letra-footer hover:text-color-letra-card transition-colors"
              >
                +34 623 51 98 32
              </Link>
              <Link
                to="mailto:kadomasajes@gmail.com"
                className="block text-color-letra-footer hover:text-color-letra-card transition-colors"
              >
                kadomasajes@gmail.com
              </Link>
              <Link
                to="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
                className="block text-color-letra-footer hover:text-color-letra-card transition-colors"
              >
                Av. Ramón y Cajal, 5 1-1, Tarragona
              </Link>
            </div>
          </div>

          <div className="w-1/3">
            <h3 className="text-base font-bold tracking-wide text-color-letra-footer mb-6">
              Síguenos
            </h3>
            <div className="flex space-x-5">
              <a
                href="https://t.me/kadomasajes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-letra-footer hover:text-color-letra-card transition-all hover:scale-110"
              >
                <IconoTelegram />
              </a>
              <a
                href="https://www.instagram.com/kadomasajes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-letra-footer hover:text-color-letra-card transition-all hover:scale-110"
              >
                <IconoInsta />
              </a>
              <a
                href="https://wa.me/34623519832"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-letra-footer hover:text-color-letra-card transition-all hover:scale-110"
              >
                <IconoWhatsApp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-5 pb-10 border-t border-color-fondo-marron/10">
        <Link
          to="/avisolegal"
          className="text-sm text-color-letra-footer hover:text-color-letra-card transition-colors"
        >
          Aviso Legal
        </Link>
      </div>
    </footer>
  );
};
