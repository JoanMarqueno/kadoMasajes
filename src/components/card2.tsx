
import { MasajeData } from '../model/global'

type Props = {
  datos: MasajeData;
};

export function TerapeuticMassage2({ datos }: Props) {
  return (
    <div className="xl:flex bg-color-fondo rounded-xl xl:p-0">
      <div className="xl:w-[70%]">
        <img
          src={datos.src}
          alt={datos.descripcion}
          className="hover:grayscale h-full object-cover"
        />
      </div>
      <div className=" p-3 xl:w-3/4 xl:pl-4 flex flex-col justify-between">
        <div>
          <div className="pb-4">
            <h2 className="text-3xl text-color-letra-nav">{datos.titulo}</h2>
          </div>
          <div className="border-4  border-color-letra-card"></div>
          <div className="py-4 h-auto">
            <p className="font-medium text-color-letra-nav">{datos.descripcion}</p>
          </div>
        </div>
        <div className="text-center text-clip items-center">
          <button className="font-bold text-color-letra-nav border-2 border-color-letra-card px-12 py-2  btn btn-primary hover:bg-color-letra-card hover:text-color-fondo-blanco">
            Más Información
          </button>
        </div>
      </div>
    </div>
  );
}
