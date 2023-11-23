import { Link } from "react-router-dom";

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
            <img src="/kado.png" width="120"></img>
            <img src="/kadoNombre.png" width="150"></img>
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
        {/* hola */}
        <div className="max-auto md:col-span-1">
          <span className="text-base font-bold tracking-wide text-color-letra-footer">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <Link
              to="/"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-12">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>

            <Link
              to="/"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-14">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>

            <Link
              to="/"
              className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-11">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row"></div>
    </div>
  );
};
