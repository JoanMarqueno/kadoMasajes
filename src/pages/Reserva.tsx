
import { Link } from "react-router-dom";



export default function Reserva() {
  return (
    <div>

      <div className="md:pt-32">
        <section className="text-color-letra-footer body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="md:w-1/2 bg-color-fondo-blanco flex flex-col sm:p-10 md:ml-auto w-full md:py-2 mt-8 md:mt-0">
              <h2 className="text-color-letra-footer  text-xl mb-1 font-semibold title-font">
                Reservas
              </h2>
              <p className="leading-relaxed text-justify mb-5 text-color-letra-footer mt-4">
                Para reservar una cita, por favor, envíanos un correo o un
                mensaje de WhatsApp con tu nombre, el día, la hora y el tipo de
                masaje que deseas reservar.
              </p>
              <p className="leading-relaxed mb-5 text-justify text-color-letra-footer">
                Si tienes alguna duda sobre algún tratamiento, no dudes en
                ponerte en contacto con nosotros.
              </p>
              <p className="leading-relaxed mb-5 text-justify text-color-letra-footer">
                No se atenderán servicios sin cita previa.
              </p>
            </div>
            <div className="lg:w-2/3 md:w-1/2 bg-color-letra-card/40 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6011.602730202711!2d1.248432!3d41.117029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bd8e5946ab7ed%3A0x6c5568c1e3a6f56b!2sKad%C5%8D%20Masajes%20Massage%20Massatge%20Massaggio%20Masaje%20Californiano!5e0!3m2!1sca!2ses!4v1701367404667!5m2!1sca!2ses"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{
                  border: "0",
                  filter: "grayscale(1) contrast(1.2) opacity(0.4)",
                }}
                loading="lazy"
              ></iframe>
              <div className="bg-color-fondo-blanco relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h3 className="text-base font-bold tracking-wide text-color-letra-footer">
                    Dirección
                  </h3>
                  <Link
                    to="https://maps.app.goo.gl/GnHFHcMNXit1jtJ26"
                    target="_blank"
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
                    target="_blank"
                    aria-label="Correo electronico"
                    title="Correo electronico"
                    className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
                  >
                    kadomasajes@gmail.com
                  </Link>
                  <h3 className="text-base font-bold tracking-wide text-color-letra-footer mt-4">
                    WhatsApp
                  </h3>
                  <Link
                    to="tel:+34623519832"
                    target="_blank"
                    aria-label="Telefono empresa"
                    title="Contacto telefono"
                    className="transition-colors duration-300 text-color-letra-footer hover:text-color-letra-card"
                  >
                    +34 623 51 98 32
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
