import { Link } from "react-router-dom";
import IconoInsta from "./Iconos/iconoInstagram";
import ScrollLink from "./scrollLink";
import IconoTelegram from "./Iconos/iconoTelegram";
import IconoWhatsApp from "./Iconos/iconoWhatsapp";

export const Footer = () => {
  return (
    <footer className="bg-color-fondo font-semibold bottom-0 px-4 pt-16 mx-auto  md:px-12 lg:px-12 z-100">
      <div className="flex  flex-col-reverse pt-5 pb-10 border-t lg:flex-row"></div>
      <div className="grid  md:place-items-center md:items-stretch gap-10 sm:gap-0 mb-8 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="sm:col-span-1">
          <ScrollLink
            to="/"
            aria-label="Ir a pagina rituales"
            title="Logo compañía"
            className="inline-flex items-center"
          >
            <img alt="Logo de Kado Masajes" src="/k.webp" width="300"></img>
          </ScrollLink>
        </div>
        <div className="sm:col-span-1">
          <div className="space-y-2 text-base">
            <p className="text-base font-bold tracking-wide text-color-letra-footer">
              Contacto
            </p>
            <div className="flex">
              <Link
                to="tel:+34623519832"
                target="_blank"
                aria-label="Llámanos: +34 623 51 98 32"
                title="Contacto telefono"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
              >
                +34 623 51 98 32
              </Link>
            </div>
            <div className="flex">
              <Link
                to="mailto:kadomasajes@gmail.com"
                target="_blank"
                aria-label="Envíanos un correo electrónico: kadomasajes@gmail.com"
                title="Correo electronico"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
              >
                kadomasajes@gmail.com
              </Link>
            </div>
            <div className="flex">
              <Link
                to="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Dicción localización Av. Ramón y Cajal, 5 1-1, Tarragona"
                title="Dicción localización"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
              >
                Av. Ramón y Cajal, 5 1-1, Tarragona
              </Link>
            </div>
          </div>
        </div>

        <div className="max-auto md:col-span-1">
          <span className="text-base font-bold tracking-wide text-color-letra-footer">
            Medios sociales
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              title="Enlace a nuestro Telegram"
              aria-label="Enlace a nuestro Telegram"
              href="https://t.me/kadomasajes"
              target="_blank"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
            >
              <IconoTelegram />
            </a>

            <a
              title="Enlace a nuestro Instagram"
              aria-label="Enlace a nuestro Instagram"
              href="https://www.instagram.com/kadomasajes/"
              target="_blank"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
            >
              <IconoInsta />
            </a>

            <a
              title="Enlace a nuestro WhatsApp"
              aria-label="Enlace a nuestro WhatsApp"
              href="https://wa.me/34623519832"
              target="_blank"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
            >
              <IconoWhatsApp />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row"></div>
    </footer>
  );
};
