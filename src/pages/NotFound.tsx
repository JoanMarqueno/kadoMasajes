import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="">
      <Seo
        title="Página no encontrada | Kadō Masajes"
        description="La página solicitada no existe. Vuelve a la página principal de Kadō Masajes."
        robots="noindex,follow"
      />
      <div className="h-screen w-screen bg-gray-100 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md ">
            <h1 className="text-5xl font-dark font-bold pb-5">404</h1>
            <p className="text-2xl md:text-3xl font-light leading-normal pb-5">
              Lo siento, no podemos encontrar la pagina que está buscando
            </p>
            <Link
              to="/"
              id="Boton volver a inicio"
              className="inline-flex select-none items-center text-2xl gap-2 rounded-lg py-3 px-3 text-center align-middle transition-all text-color-letra-card hover:bg-color-letra-card active:bg-color-letra-card-500/30 hover:text-color-fondo-blanco"
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
            </Link>
          </div>
          <div className="max-w-lg"></div>
        </div>
      </div>
    </div>
  );
}
