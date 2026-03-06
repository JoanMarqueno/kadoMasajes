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
  const contentId = `descripcion-${datos.titulo
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <article className="kado-surface ring-0 relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(46,36,24,0.12)]">
      {datos.recomendado && (
        <div className="pointer-events-none absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-color-fondo-marron/30 bg-color-fondo-blanco/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-color-letra-card shadow-[0_8px_20px_rgba(31,23,15,0.14)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-color-letra-card" />
          <span>Recomendado</span>
        </div>
      )}
      <img
        className="h-72 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        src={datos.src}
        alt={datos.titulo}
        loading="lazy"
      />
      <div className="flex h-full flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex items-start justify-between gap-3 pb-4">
            <h3 className="font-custom-font2 text-4xl text-color-letra-nav leading-tight">
              {datos.titulo}
            </h3>
            <button
              id={datos.titulo}
              aria-controls={contentId}
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 shrink-0"
            >
              {isExpanded ? <IconoMenos /> : <IconoMas />}
            </button>
          </div>
          <div className="h-[3px] w-full rounded-full bg-color-fondo-marron/80"></div>

          <div className="py-4">
            <Collapse isOpened={isExpanded}>
              <div id={contentId} className="max-h-44 overflow-y-auto pr-1">
                <p className="font-medium text-color-letra-nav leading-relaxed whitespace-pre-line">
                  {datos.descripcion}
                </p>
              </div>
            </Collapse>
            {!isExpanded && (
              <p
                id={contentId}
                className="min-h-[7.5rem] font-medium text-color-letra-nav leading-relaxed"
              >
                {datos.resumen}
              </p>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 inline-flex text-color-letra-card transition-colors hover:text-color-letra-nav"
            >
              {isExpanded ? "Leer menos" : "Leer más"}
            </button>
          </div>
        </div>
        <div className="pt-2">
          <Link
            to="/reserva"
            id={datos.src}
            className="inline-flex select-none items-center text-xl sm:text-2xl gap-2 rounded-xl border border-color-fondo-marron/50 py-3 px-4 text-center align-middle transition-all text-color-letra-card hover:border-color-letra-card hover:bg-color-letra-card hover:text-color-fondo-blanco"
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
          </Link>
        </div>
      </div>
    </article>
  );
}
