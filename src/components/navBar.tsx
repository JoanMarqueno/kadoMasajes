import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Transition } from "@headlessui/react";
import { NavLinkDesktop } from "./navLink";
import IconoInsta from "./Iconos/iconoInstagram";
import IconoFacebook from "./Iconos/iconoFacebook";
import IconoWhatsApp from "./Iconos/iconoWhatsapp";
import IconoTelegram from "./Iconos/iconoTelegram";
import ScrollLink from "./scrollLink";

const navigation = [
  { name: "Rituales", href: "/" },
  { name: "Tarifas", href: "/tarifas" },
  { name: "Sobre mi", href: "/sobremi" },
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
        <div className="bg-color-letra-card p-2 justify-between pr-20 items-center space-x-6 hidden md:flex">
          <div className="pl-20 flex space-x-8">
            <ScrollLink
              to="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
              target="_blank"
              rel="non style"
              aria-label="Direccion Kado Masajes"
              title="Direccion Kado Masajes"
              className="transition-colors duration-300 text-color-letra-footer text-center  hover:text-color-letra-blanca font-medium"
            >
              Av. Ramón y Cajal, Tarragona
            </ScrollLink>
            <div className="flex items-center space-x-2">
              <ScrollLink

                to="https://wa.me/34623519832"
                target="_blank"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
              >
                <IconoWhatsApp />
              </ScrollLink>
              <ScrollLink
                to="tel:+34623519832"
                target="_blank"
                aria-label="Telefono empresa"
                title="Contacto telefono"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
              >
                <p>+34 623 51 98 32</p>
              </ScrollLink>
            </div>
          </div>
          <div className="flex space-x-6 items-center">
            <div>
              <ScrollLink

                to="https://t.me/kadomasajes"
                target="_blank"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
              >
                <IconoTelegram />
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="https://www.instagram.com/kadomasajes/"
                target="_blank"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
              >
                <IconoInsta />
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="/"
                target="_blank"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
              >
                <IconoFacebook />
              </ScrollLink>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-6 pl-6 py-2 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <ScrollLink to="/" aria-label="Go home" title="Company">
                <img
                  src="/k.png"
                  className="w-36 md:w-44 "
                  alt="Logo kado"
                ></img>
              </ScrollLink>
            </div>
            <div className="md:hidden pt-2">
              <button
                type="button"
                className="hover:color-letra-nav sifocus:outline-none focus:color-letra-nav"
                aria-label="toggle menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Hamburger size={28} toggled={isOpen} />
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
                className={`${isOpen ? "block" : "hidden"} md:hidden py-5 `}
              >
                <div className="flex flex-col md:flex-row md:mx-6">
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
                      onClick={handleMenuClick}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <div className="flex flex-col-reverse justify-between  py-4 border-t lg:flex-row"></div>
                  <div className="flex justify-around items-center">
                    <ScrollLink
                      to="https://t.me/kadomasajes"
                      target="_blank"
                      className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
                    >
                      <IconoTelegram />
                    </ScrollLink>

                    <ScrollLink
                      to="https://www.instagram.com/kadomasajes/"
                      target="_blank"
                      className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
                    >
                      <IconoInsta />
                    </ScrollLink>

                    <ScrollLink
                      to="/"
                      target="_blank"
                      className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
                    >
                      <IconoFacebook />
                    </ScrollLink>

                    <ScrollLink
                      to="https://wa.me/34623519832"
                      target="_blank"
                      className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
                    >
                      <IconoWhatsApp />
                    </ScrollLink>
                  </div>
                </div>
              </div>
            )}
          </Transition>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row md:mx-6">
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
