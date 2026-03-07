import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { NavLinkDesktop } from "./navLink";
import IconoInsta from "./Iconos/iconoInstagram";
import IconoWhatsApp from "./Iconos/iconoWhatsapp";
import IconoTelegram from "./Iconos/iconoTelegram";

const navigation = [
  { name: "Tratamientos", href: "/" },
  { name: "Vales Regalo", href: "/vales-regalo" },
  { name: "Tarifas", href: "/tarifas" },
  { name: "Sobre mí", href: "/sobremi" },
  { name: "Reservas", href: "/reserva" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen((current) => !current);
  }

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <nav className="navbar fixed w-full top-0 z-50 text-color-letra-nav font-medium bg-color-fondo-blanco/95 backdrop-blur-md border-b border-color-fondo-marron/20 shadow-[0_8px_24px_rgba(28,22,15,0.06)]">
      <div className="bg-color-fondo-marron p-2 justify-between pr-20 items-center space-x-6 hidden lg:flex">
        <address className="lg:pl-16 2xl:pl-28 flex space-x-8">
          <a
            href="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direccion Kado Masajes"
            title="Direccion Kado Masajes"
            className="transition-colors duration-300 text-color-letra-footer text-center hover:text-color-letra-blanca font-medium"
          >
            Av. Ramón y Cajal 5, 1-1 Tarragona
          </a>
          <div className="flex items-center space-x-2">
            <a
              rel="noopener noreferrer"
              href="tel:+34623519832"
              aria-label="Telefono empresa"
              title="Contacto telefono"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
            >
              <p>+34 623 51 98 32</p>
            </a>
          </div>
        </address>
        <div className="flex space-x-6 items-center">
          <a
            title="Enlace a nuestro Telegram"
            rel="noopener noreferrer"
            href="https://t.me/kadomasajes"
            target="_blank"
            aria-label="Telegram de Kadō Masajes"
            className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
          >
            <IconoTelegram />
          </a>
          <a
            title="Enlace a nuestro Instagram"
            rel="noopener noreferrer"
            href="https://www.instagram.com/kadomasajes/"
            target="_blank"
            aria-label="Instagram de Kadō Masajes"
            className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
          >
            <IconoInsta />
          </a>
          <a
            title="Enlace a nuestro WhatsApp"
            rel="noopener noreferrer"
            href="https://wa.me/34623519832"
            target="_blank"
            aria-label="WhatsApp de Kadō Masajes"
            className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
          >
            <IconoWhatsApp />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-2 lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            aria-label="Ir a página principal"
            title="Acceso a página principal"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src="/k.webp"
              className="w-36 lg:w-44 transition-opacity duration-300"
              alt="Logo de Kado Masajes"
            />
          </NavLink>
          <div className="lg:hidden pt-2">
            <button
              type="button"
              className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-color-fondo-marron/35 bg-color-fondo-blanco/90 text-color-letra-nav shadow-[0_8px_18px_rgba(51,39,24,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(51,39,24,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-color-fondo-marron/60"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              onClick={toggleMenu}
            >
              <span
                aria-hidden="true"
                className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-[6px]"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-[6px]"
                }`}
              />
            </button>
          </div>
        </div>

        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            {isOpen && (
              <m.div
                className="fixed inset-0 z-[45] lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <m.button
                  type="button"
                  aria-label="Cerrar menú"
                  className="absolute inset-0 bg-color-letra-nav/45 backdrop-blur-[2px]"
                  onClick={closeMenu}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                <m.div
                  id="mobile-navigation-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Menú principal"
                  className="absolute left-3 right-3 top-[86px] overflow-hidden rounded-3xl border border-color-fondo-marron/25 bg-color-fondo-blanco/95 backdrop-blur-xl shadow-[0_24px_50px_rgba(34,26,18,0.24)]"
                  initial={{ opacity: 0, y: -14, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.985 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="h-1 w-full bg-gradient-to-r from-color-fondo-marron/10 via-color-fondo-marron to-color-fondo-marron/10" />

                  <div className="px-4 pb-4 pt-3">
                    <p className="px-2 text-xs uppercase tracking-[0.28em] text-color-letra-card/80">
                      Menú
                    </p>

                    <ul className="mt-3 space-y-1">
                      {navigation.map((item, index) => (
                        <m.li
                          key={item.name}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ delay: index * 0.04, duration: 0.22 }}
                        >
                          <NavLink
                            to={item.href}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              `group flex items-center justify-between rounded-2xl px-4 py-3 text-lg transition-all duration-200 ${
                                isActive
                                  ? "bg-color-fondo-marron/25 text-color-letra-card"
                                  : "text-color-letra-nav hover:bg-color-fondo-marron/10 hover:text-color-letra-card"
                              }`
                            }
                          >
                            <span className="tracking-wide">{item.name}</span>
                            <span className="h-2 w-2 rounded-full bg-color-fondo-marron/70 transition-transform duration-200 group-hover:scale-125" />
                          </NavLink>
                        </m.li>
                      ))}
                    </ul>

                    <div className="mt-4 border-t border-color-fondo-marron/20 pt-4">
                      <p className="px-2 text-xs uppercase tracking-[0.24em] text-color-letra-card/75">
                        Síguenos
                      </p>
                      <address className="mt-3 flex justify-center gap-3">
                        <a
                          title="Enlace a nuestro Telegram"
                          rel="noopener noreferrer"
                          href="https://t.me/kadomasajes"
                          target="_blank"
                          aria-label="Telegram de Kadō Masajes"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-color-fondo-marron/35 bg-color-fondo-blanco text-color-letra-footer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-color-letra-card"
                        >
                          <IconoTelegram />
                        </a>
                        <a
                          title="Enlace a nuestro Instagram"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/kadomasajes/"
                          target="_blank"
                          aria-label="Instagram de Kadō Masajes"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-color-fondo-marron/35 bg-color-fondo-blanco text-color-letra-footer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-color-letra-card"
                        >
                          <IconoInsta />
                        </a>
                        <a
                          title="Enlace a nuestro WhatsApp"
                          rel="noopener noreferrer"
                          href="https://wa.me/34623519832"
                          target="_blank"
                          aria-label="WhatsApp de Kadō Masajes"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-color-fondo-marron/35 bg-color-fondo-blanco text-color-letra-footer shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-color-letra-card"
                        >
                          <IconoWhatsApp />
                        </a>
                      </address>
                    </div>
                  </div>
                </m.div>
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-col lg:flex-row lg:mx-6">
            {navigation.map((item) => (
              <NavLinkDesktop key={item.name} to={item.href}>
                {item.name}
              </NavLinkDesktop>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
