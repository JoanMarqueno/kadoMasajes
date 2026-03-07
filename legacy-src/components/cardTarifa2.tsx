import { Link } from "react-router-dom";
import { MassagePrice } from "../model/global";

type Props = {
  tarifa: MassagePrice;
};

type PriceRow = {
  key: string;
  tipo: "sesion" | "bono";
  duracion: string;
  precio: string;
};

function buildRows(tarifa: MassagePrice): PriceRow[] {
  const rows: PriceRow[] = [];

  if (tarifa.primerTiempo && tarifa.precioPrimerTiempo) {
    rows.push({
      key: `${tarifa.nombre}-sesion-${tarifa.primerTiempo}`,
      tipo: "sesion",
      duracion: tarifa.primerTiempo,
      precio: tarifa.precioPrimerTiempo,
    });
  }

  if (tarifa.segundoTiempo && tarifa.precioSegundoTiempo) {
    rows.push({
      key: `${tarifa.nombre}-sesion-${tarifa.segundoTiempo}`,
      tipo: "sesion",
      duracion: tarifa.segundoTiempo,
      precio: tarifa.precioSegundoTiempo,
    });
  }

  if (tarifa.primerTiempo && tarifa.primerBono) {
    rows.push({
      key: `${tarifa.nombre}-bono-${tarifa.primerTiempo}`,
      tipo: "bono",
      duracion: tarifa.primerTiempo,
      precio: tarifa.primerBono,
    });
  }

  if (tarifa.segundoTiempo && tarifa.segundoBono) {
    rows.push({
      key: `${tarifa.nombre}-bono-${tarifa.segundoTiempo}`,
      tipo: "bono",
      duracion: tarifa.segundoTiempo,
      precio: tarifa.segundoBono,
    });
  }

  return rows;
}

export default function CardTarifa2({ tarifa }: Props) {
  const rows = buildRows(tarifa);

  return (
    <section className="kado-surface rounded-3xl px-5 py-6 sm:px-8 sm:py-8">
      <header className="mb-5 text-center sm:text-left">
        <h2 className="font-custom-font2 text-4xl sm:text-5xl text-color-letra-footer leading-tight">
          {tarifa.nombre}
        </h2>
      </header>

      <ul className="space-y-2">
        {rows.map((row, index) => {
          const isBono = row.tipo === "bono";
          const isLast = index === rows.length - 1;

          return (
            <li
              key={row.key}
              className={`flex items-end justify-between gap-4 py-4 ${
                isBono
                  ? "rounded-2xl border border-color-fondo-marron/35 bg-gradient-to-r from-color-fondo-marron/20 to-color-fondo-marron/10 px-3 sm:px-4"
                  : `${isLast ? "" : "border-b border-color-fondo-marron/25"}`
              }`}
            >
              <div className="min-w-0">
                {isBono ? (
                  <p className="inline-flex items-center rounded-full border border-color-fondo-marron/45 bg-color-fondo-blanco/70 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-color-letra-card">
                    Bono 3 sesiones
                  </p>
                ) : (
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-color-letra-footer/70">
                    Sesión
                  </p>
                )}
                <p className="mt-1 text-lg sm:text-xl text-color-letra-nav">
                  {row.duracion}
                </p>
              </div>

              <p
                className={`font-custom-font2 text-4xl sm:text-5xl leading-none ${
                  isBono ? "text-color-letra-card" : "text-color-letra-nav"
                }`}
              >
                {row.precio}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex justify-center sm:justify-end">
        <Link
          to="/reserva"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-color-fondo-marron/45 px-5 py-2.5 text-lg text-color-letra-card transition-all duration-300 hover:bg-color-letra-card hover:text-color-fondo-blanco"
        >
          <span>Reservar este masaje</span>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
