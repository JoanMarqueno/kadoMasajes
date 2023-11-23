import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Transition } from "@headlessui/react";
import { NavLinkDesktop } from "./navLink";

const navigation = [
  { name: "Servicios", href: "/" },
  { name: "¿Quiénes somos?", href: "/quienessomos" },
  { name: "Reservas", href: "/reserva" },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      {/* Contact Bar */}
      
    <nav className="bg-color-fondo-blanco shadow fixed w-full top-0 z-50 text-color-letra-nav font-medium">
    <div className="bg-color-letra-card p-2 justify-end pr-20 items-center space-x-6 hidden md:flex">
        {/* Replace the following placeholders with your actual contact icons */}
        <div>
        <Link
              to="/"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>
        </div>
        <div>
        <Link
              to="/"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-8">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
        </div>
        <div>
        <Link
              to="/"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-blanca"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
        </div>
      </div>
      <div className="container mx-auto p-6 pl-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" aria-label="Go home" title="Company">
              <div className="flex items-center">
                <img
                  className="h-16"
                  src="/k.png"
                  alt="logo Kado"
                />
                <img
                  className="h-20"
                  src="/kadoNombre.png"
                  alt="Logo Kado"
                />
              </div>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="hover:color-letra-nav focus:outline-none focus:color-letra-nav"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Hamburger />
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
                  >
                    
                      {item.name}
                    
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </Transition>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:justify-between py-0">
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