
import { TerapeuticMassage } from "../components/card";
import Presentacion from "../components/presentacion";
import { masajeInfo } from "../model/global"; 

function HomePage() {
  

  return (
    <div>
      
        <Presentacion />
        <div className="pt-32">
          <h1 className="text-center text-3xl text-color-letra-nav pt-2 pb-10">
            Nuestros Servicios
          </h1>
        </div>

      <div className="pb-3 md:px-8 h-full w-full">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
          {masajeInfo.map((masaje) => (
            <TerapeuticMassage datos={masaje} key={masaje.titulo} />
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default HomePage;
