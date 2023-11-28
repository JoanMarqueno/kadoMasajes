import { Link } from "react-router-dom";
import IconoTwitter from "./Iconos/twitter";
import IconoInsta from "./Iconos/iconoInstagram";
import IconoFacebook from "./Iconos/iconoFacebook";

export const Footer = () => {
  return (
    <div className="bg-color-fondo font-semibold bottom-0 px-4 pt-16 mx-auto  md:px-12 lg:px-12 z-100">
      <div className="flex  flex-col-reverse pt-5 pb-10 border-t lg:flex-row"></div>
      <div className="grid  md:place-items-center md:items-stretch gap-10 sm:gap-0 mb-8 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="sm:col-span-1">
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img src="/k.png" width="300"></img>
            
          </Link>
        </div>
        <div className="sm:col-span-1">
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-color-letra-footer">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-color-letra-footer">Phone:</p>
              <Link
                to="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
              >
                850-123-5021
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-color-letra-footer">Email:</p>
              <Link
                to="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
              >
                info@lorem.mail
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-color-letra-footer">Address:</p>
              <Link
                to="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
              >
                312 Lovely Street, NY
              </Link>
            </div>
          </div>
        </div>

        <div className="max-auto md:col-span-1">
          <span className="text-base font-bold tracking-wide text-color-letra-footer">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <Link
              to="/"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
            >
              <IconoTwitter />
            </Link>

            <Link
              to="/"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
            >
              <IconoInsta/>
            </Link>

            <Link
              to="/"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
            >
              <IconoFacebook/>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row"></div>
    </div>
  );
};
