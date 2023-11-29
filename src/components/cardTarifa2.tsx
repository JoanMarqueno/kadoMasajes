import { MassagePrice } from "../model/global";

type Props = {
  tarifa: MassagePrice;
};

export default function CardTarifa2({ tarifa }: Props) {
  return (
    <section className="text-color-letra-footer body-font overflow-hidden p-6">
      <div className="container mx-auto sm:py-10 sm:px-5 sm:border-2 sm:border-color-letra-card sm:shadow-lg">
        <div className="flex flex-col text-center w-full my-5">
          <h2 className="text-2xl font-medium  mb-2 text-color-letra-footer">
            {tarifa.nombre}
          </h2>
          
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 w-1/2">
            <div className="h-full p-6 rounded-lg border-2 border-color-letra-card/80 flex flex-col relative overflow-hidden">
              
              <div className="flex justify-between items-center"></div>
              <h3 className=" tracking-widest mb-1 text-lg ">
                {tarifa.primerTiempo}
              </h3>
              <h3 className="sm:text-5xl text-4xl text-color-letra-nav pb-4 mb-4 border-b border-color-letra-card leading-none">
                {tarifa.precioPrimerTiempo}
              </h3>
              <button className="flex items-center mt-auto text-color-letra-card bg-color-fondo-blanco border-0 py-1 px-2 sm:py-2 sm:px-4 w-full focus:outline-none hover:bg-color-letra-card hover:text-color-fondo-blanco rounded">
                {window.innerWidth <= 768 ? 'Reserva' : 'Reserva tu experiencia'}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 w-1/2">
            <div className="h-full p-6 rounded-lg border-2 border-color-letra-card/80 flex flex-col relative overflow-hidden">
              <h3 className=" tracking-widest title-font mb-1 text-lg ">
                {tarifa.segundoTiempo}
              </h3>
              <h3 className="sm:text-5xl text-4xl text-color-letra-nav pb-4 mb-4 border-b border-color-letra-card leading-none">
                {tarifa.precioSegundoTiempo}
              </h3>
              <button className="flex items-center mt-auto text-color-letra-card bg-color-fondo-blanco border-0 py-1 px-2 sm:py-2 sm:px-4 w-full focus:outline-none hover:bg-color-letra-card hover:text-color-fondo-blanco rounded">
                {window.innerWidth <= 768 ? 'Reserva' : 'Reserva tu experiencia'}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 w-1/2">
            <div className="h-full p-6 rounded-lg border-2 border-color-letra-card/80 flex flex-col relative overflow-hidden">
            <span className="bg-color-letra-card text-color-fondo-blanco px-3 py-1 tracking-widest text-xs sm:text-xl absolute right-0 top-0 rounded-bl">3 SESIONES</span>
              <h3 className=" tracking-widest title-font mb-1 text-lg mt-2 sm:mt-0">
                {tarifa.primerTiempo}
              </h3>
              <h3 className="sm:text-5xl text-4xl text-color-letra-nav pb-4 mb-4 border-b border-color-letra-card leading-none">
                {tarifa.primerBono}
              </h3>
              <button className="flex items-center mt-auto text-color-letra-card bg-color-fondo-blanco border-0 py-1 px-2 sm:py-2 sm:px-4 w-full focus:outline-none hover:bg-color-letra-card hover:text-color-fondo-blanco rounded">
                {window.innerWidth <= 768 ? 'Reserva' : 'Reserva tu experiencia'}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 w-1/2">
            <div className="h-full p-6 rounded-lg border-2 border-color-letra-card/80 flex flex-col relative overflow-hidden">
            <span className="bg-color-letra-card text-color-fondo-blanco px-3 py-1 tracking-widest text-xs sm:text-xl absolute right-0 top-0 rounded-bl">3 SESIONES</span>
              <h3 className=" tracking-widest title-font mb-1 text-lg mt-2 sm:mt-0">
                {tarifa.segundoTiempo}
              </h3>
              <h3 className="sm:text-5xl text-4xl text-color-letra-nav pb-4 mb-4 border-b border-color-letra-card leading-none">
                {tarifa.segundoBono}
              </h3>
              <button className="flex items-center mt-auto text-color-letra-card bg-color-fondo-blanco border-0 py-1 px-2 sm:py-2 sm:px-4 w-full focus:outline-none hover:bg-color-letra-card hover:text-color-fondo-blanco rounded">
                {window.innerWidth <= 768 ? 'Reserva' : 'Reserva tu experiencia'}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
