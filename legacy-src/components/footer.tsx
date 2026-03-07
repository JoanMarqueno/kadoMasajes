import { Link } from "react-router-dom";
import IconoInsta from "./Iconos/iconoInstagram";
import IconoTelegram from "./Iconos/iconoTelegram";
import IconoWhatsApp from "./Iconos/iconoWhatsapp";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 px-4 pb-8 pt-10 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-3xl border border-color-fondo-marron/20 bg-color-fondo-blanco/80 px-6 py-8 shadow-[0_18px_40px_rgba(50,38,24,0.10)] backdrop-blur-sm md:px-10">
        <div className="grid gap-10 text-center md:grid-cols-[1.15fr_1fr_0.9fr] md:gap-8 md:text-left">
          <div>
            <Link to="/" className="inline-flex items-center justify-center md:justify-start">
              <img alt="Logo de Kado Masajes" src="/k.webp" className="w-56 sm:w-64" />
            </Link>
            <p className="mt-4 text-sm sm:text-base text-color-letra-footer/90">
              Un espacio dedicado al bienestar, la calma y el equilibrio.
            </p>
          </div>

          <div>
            <h3 className="font-custom-font2 text-3xl sm:text-4xl font-semibold text-color-letra-footer mb-4">
              Contacto
            </h3>
            <div className="space-y-3 text-base sm:text-[1.05rem]">
              <a
                href="tel:+34623519832"
                className="block text-color-letra-footer hover:text-color-letra-card transition-colors"
              >
                +34 623 51 98 32
              </a>
              <a
                href="mailto:kadomasajes@gmail.com"
                className="block text-color-letra-footer hover:text-color-letra-card transition-colors"
              >
                kadomasajes@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-color-letra-footer hover:text-color-letra-card transition-colors"
              >
                Av. Ramón y Cajal, 5 1-1, Tarragona
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-custom-font2 text-3xl sm:text-4xl font-semibold text-color-letra-footer mb-4">
              Síguenos
            </h3>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <a
                href="https://t.me/kadomasajes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram de Kadō Masajes"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-color-fondo-marron/35 bg-color-fondo-blanco text-color-letra-footer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-color-letra-card"
              >
                <IconoTelegram />
              </a>
              <a
                href="https://www.instagram.com/kadomasajes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Kadō Masajes"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-color-fondo-marron/35 bg-color-fondo-blanco text-color-letra-footer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-color-letra-card"
              >
                <IconoInsta />
              </a>
              <a
                href="https://wa.me/34623519832"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Kadō Masajes"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-color-fondo-marron/35 bg-color-fondo-blanco text-color-letra-footer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-color-letra-card"
              >
                <IconoWhatsApp />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-color-fondo-marron/20 pt-5 flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-color-letra-footer/80">
            © {year} Kadō Masajes
          </p>
          <Link
            to="/avisolegal"
            className="text-sm text-color-letra-footer hover:text-color-letra-card transition-colors"
          >
            Aviso Legal
          </Link>
        </div>
      </div>
    </footer>
  );
};
