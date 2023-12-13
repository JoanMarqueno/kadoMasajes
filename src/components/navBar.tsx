import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Transition } from "@headlessui/react";
import { NavLinkDesktop } from "./navLink";
import IconoInsta from "./Iconos/iconoInstagram";
import IconoWhatsApp from "./Iconos/iconoWhatsapp";
import IconoTelegram from "./Iconos/iconoTelegram";
import ScrollLink from "./scrollLink";

const navigation = [
  { name: "Tratamientos", href: "/" },
  { name: "Rituales", href: "/rituales" },
  { name: "Tarifas", href: "/tarifas" },
  { name: "Sobre mí", href: "/sobremi" },
  { name: "Galería", href: "/galeria" },
  { name: "Reservas", href: "/reserva" },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      {/* Contact Bar */}

      <nav className="bg-color-fondo-blanco shadow fixed w-full top-0 z-50 text-color-letra-nav font-medium">
        <div className="bg-color-fondo-marron p-2 justify-between pr-20 items-center space-x-6 hidden lg:flex">
          <address className="pl-20 flex space-x-8">
            <a
              href="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
              target="_blank"
              rel="non style"
              aria-label="Direccion Kado Masajes"
              title="Direccion Kado Masajes"
              className="transition-colors duration-300 text-color-letra-footer text-center  hover:text-color-letra-blanca font-medium"
            >
              Av. Ramón y Cajal, Tarragona
            </a>
            <div className="flex items-center space-x-2">
              <a
                rel="noopener noreferrer"
                href="tel:+34623519832"
                target="_blank"
                aria-label="Telefono empresa"
                title="Contacto telefono"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
              >
                <p>+34 623 51 98 32</p>
              </a>
            </div>
          </address>
          <div className="flex space-x-6 items-center">
            <div>
              <a
                title="Enlace a nuestro Telegram"
                rel="noopener noreferrer"
                href="https://t.me/kadomasajes"
                target="_blank"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
              >
                <IconoTelegram />
              </a>
            </div>
            <div>
              <a
                title="Enlace a nuestro Instagram"
                rel="noopener noreferrer"
                href="https://www.instagram.com/kadomasajes/"
                target="_blank"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
              >
                <IconoInsta />
              </a>
            </div>
            <div>
              <a
                title="Enlace a nuestro WhatsApp"
                rel="noopener noreferrer"
                href="https://wa.me/34623519832"
                target="_blank"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
              >
                <IconoWhatsApp />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-6 pl-6 py-2 lg:flex lg:justify-between lg:items-center">
          <div className="flex justify-between items-center">
            <div>
              <ScrollLink
                to="/"
                aria-label="Ir a página de rituales"
                title="Acceso a página de rituales"
              >
                <img
                  src="/k.webp"
                  className="w-36 lg:w-44 "
                  alt="Logo de Kado Masajes"
                ></img>
              </ScrollLink>
            </div>
            <div className="lg:hidden pt-2">
              <button
                type="button"
                className="hover:color-letra-nav sifocus:outline-none focus:color-letra-nav"
                aria-label="toggle menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Hamburger
                  arial-label="Icono Menú"
                  size={28}
                  toggled={isOpen}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-500 transform"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-500 transform"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-full"
          >
            {(ref) => (
              <div
                ref={ref}
                className={`${isOpen ? "block" : "hidden"} lg:hidden py-5 `}
              >
                <div className="flex flex-col lg:flex-row lg:mx-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.href === location.pathname
                          ? "text-bold text-color-letra-card font-semibold"
                          : "",
                        "px-3 py-5 relative"
                      )}
                      onClick={() => {
                        handleMenuClick();
                        window.scrollTo(0, 0);
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <div className="flex flex-col-reverse justify-between  py-4 border-t lg:flex-row"></div>
                  <address className="flex justify-around items-center">
                    <a
                      title="Enlace a nuestro Telegram"
                      rel="noopener noreferrer"
                      href="https://t.me/kadomasajes"
                      target="_blank"
                      className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
                    >
                      <IconoTelegram />
                    </a>

                    <a
                      title="Enlace a nuestro Instagram"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/kadomasajes/"
                      target="_blank"
                      className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
                    >
                      <IconoInsta />
                    </a>

                    <a
                      title="Enlace a nuestro WhatsApp"
                      rel="noopener noreferrer"
                      href="https://wa.me/34623519832"
                      target="_blank"
                      className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
                    >
                      <IconoWhatsApp />
                    </a>
                  </address>
                </div>
              </div>
            )}
          </Transition>

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
    </div>
  );
}
