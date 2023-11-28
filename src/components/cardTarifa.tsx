import { MassagePrice } from "../model/global";

type Props = {
  tarifa: MassagePrice;
};

const CardTarifa = ({ tarifa }: Props) => {
  return (
    <div className="p-5 shadow-lg hover:bg-color-letra-card transform transition duration-500 ease-in-out hover:scale-105">
      <div id="header" className="flex">
        <div id="body" className="pl-5 w-full">
          <h2 id="nombreTarifa" className="font-semibold mb-2">
            {tarifa.nombre}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">{tarifa.primerTiempo}</span>
            <span className="font-light">{tarifa.precioPrimerTiempo}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">{tarifa.segundoTiempo}</span>
            <span className="font-light">{tarifa.precioSegundoTiempo}</span>
          </div>
          <div className="pt-5">
            <div className="font-bold mb-2">Precios Bonos</div>
            <div className="flex justify-between items-center">
              <span className="font-bold">3 sesiones de {tarifa.primerTiempo}</span>
              <span className="font-light">{tarifa.primerBono}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">3 sesiones de {tarifa.segundoTiempo}</span>
              <span className="font-light">{tarifa.segundoBono}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTarifa;
