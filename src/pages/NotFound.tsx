export default function NotFound() {
  return (
    <div className="">
      <div className="h-screen w-screen bg-gray-100 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md ">
            <div className="text-5xl font-dark font-bold pb-5">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal pb-5">
              Lo siento, no podemos encontrar la pagina que está buscando{" "}
            </p>

            <button
                id="Boton volver a inicio"
                className="flex select-none items-center text-2xl gap-2 rounded-lg py-3 px-3 text-center align-middle transition-all text-color-letra-card hover:bg-color-letra-card active:bg-color-letra-card-500/30 hover:text-color-fondo-blanco  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Volver a inicio
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
          <div className="max-w-lg"></div>
          
        </div>
      </div>
    </div>
  );
}
