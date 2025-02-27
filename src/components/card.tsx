import { useState } from "react";
import { MasajeData } from "../model/global";
import { Collapse } from "react-collapse";
import IconoMas from "./Iconos/iconoMas";
import IconoMenos from "./Iconos/iconoMenos";
import { Link } from "react-router-dom";

type Props = {
  datos: MasajeData;
};

export function TerapeuticMassage({ datos }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateString = (str: string, num: number) => {
    const truncated = str.slice(0, num);
    const lastSpace = truncated.lastIndexOf(" ");
    return str.length > num ? `${truncated.slice(0, lastSpace)}...` : str;
  };

  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-1">
      <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-color-fondo-blanco shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-color-fondo-blanco sm:shrink-0 sm:grow sm:basis-0">
        {datos.recomendado && (
          <span className="bg-color-fondo-marron text-color-fondo-blanco px-3 py-1 tracking-widest sm:text-xl absolute right-5 top-8 rounded-bl">
            Recomendación de Kadō Masajes
          </span>
        )}
        <img
          className="hover:grayscale w-full h-72 object-cover"
          src={datos.src}
          alt={datos.titulo}
        />
        <div className="p-3 xl:pl-4 flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="pb-4 flex justify-between">
              <h2 className="text-3xl text-color-letra-nav">{datos.titulo}</h2>
              <button
                id={datos.titulo}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? <IconoMenos /> : <IconoMas />}
              </button>
            </div>
            <div className="border-4 border-color-fondo-marron"></div>

            <div className="py-4 h-max">
              <Collapse isOpened={isExpanded}>
                <p className="font-medium text-color-letra-nav text-justify whitespace-break-spaces">
                  {datos.descripcion}
                </p>
              </Collapse>
              {!isExpanded && (
                <p className="font-medium text-color-letra-nav text-justify whitespace-break-spaces">
                  {truncateString(datos.descripcion, 150)}
                </p>
              )}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-color-letra-card hover:text-color-letra-card mt-2"
              >
                {isExpanded ? "Leer menos" : "Leer más"}
              </button>
            </div>
          </div>
          <div className="text-center text-clip items-center">
            <Link to="/reserva">
              <button
                id={datos.src}
                className="flex select-none items-center text-2xl gap-2 rounded-lg py-3 px-3 text-center align-middle transition-all text-color-letra-card hover:bg-color-letra-card hover:text-color-fondo-blanco disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Reserva tu experiencia
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
