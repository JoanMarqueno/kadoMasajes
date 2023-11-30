import { Link } from "react-router-dom";

export default function Reserva() {
  return (
    <div className="pt-20">
      <section className="text-color-letra-footer body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-color-letra-card/40 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6011.602730202711!2d1.248432!3d41.117029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bd8e5946ab7ed%3A0x6c5568c1e3a6f56b!2sKad%C5%8D%20Masajes%20Massage%20Massatge%20Massaggio%20Masaje%20Californiano!5e0!3m2!1sca!2ses!4v1701367404667!5m2!1sca!2ses"
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{border:"0",filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}
              loading="lazy"
            ></iframe>
            <div className="bg-color-fondo-blanco relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
              <h3 className="text-base font-bold tracking-wide text-color-letra-footer">
                  Dirección
                </h3>
                <Link
                to="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
                rel="noopener noreferrer"
                aria-label="Dicción localización"
                title="Dicción localización"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
              >
                Av. Ramón y Cajal, 5 1-1, Tarragona
              </Link>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h3 className="text-base font-bold tracking-wide text-color-letra-footer">
                  Correo
                </h3>
                <Link
                to="mailto:kadomasajes@gmail.com"
                aria-label="Correo electronico"
                title="Correo electronico"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
              >
                kadomasajes@gmail.com
              </Link>
              <h3 className="text-base font-bold tracking-wide text-color-letra-footer mt-4">
              Teléfono
            </h3>
                <Link
                to="tel:+34623519832"
                aria-label="Telefono empresa"
                title="Contacto telefono"
                className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
              >
                +34 623 51 98 32 
              </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-color-fondo-blanco flex flex-col md:ml-auto w-full md:py-2 mt-8 md:mt-0">
            <h2 className="text-color-letra-footer text-xl mb-1 font-medium title-font">
              Reservas
            </h2>
            <p className="leading-relaxed mb-5 text-color-letra-footer">
              Para reservar una cita, por favor, envianos un correo o un mensaje de whatsapp con tu nombre, el día, la hora y el tipo de masaje que deseas reservar.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-color-letra-footer">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-color-fondo-blanco rounded border border-gray-300 focus:border-color-letra-card focus:ring-2 focus:ring-color-letra-card text-base outline-none text-color-letra-footer py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-color-letra-footer"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-color-fondo-blanco rounded border border-gray-300 focus:border-color-letra-card focus:ring-2 focus:ring-color-letra-card text-base outline-none text-color-letra-footer py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-color-letra-footer"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-color-fondo-blanco rounded border border-gray-300 focus:border-color-letra-card focus:ring-2 focus:ring-color-letra-card h-32 text-base outline-none text-color-letra-footer py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
                className="flex select-none items-center text-2xl gap-2 rounded-lg py-3 px-3 text-center align-middle transition-all text-color-letra-card hover:bg-color-letra-card active:bg-color-letra-card-500/30 hover:text-color-fondo-blanco  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Enviar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
          </div>
        </div>
      </section>
    </div>
  );
}
