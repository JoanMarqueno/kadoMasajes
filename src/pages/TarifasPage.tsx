import CardTarifa from "../components/cardTarifa";
import { masajeTarifa } from "../model/global";

function TarifasPage() {
  return (
    <div className="pt-32">
      <div className="pt-10">
        <h1 className="text-center text-3xl text-color-letra-nav pt-2 pb-10 ">
          Tarifas
        </h1>
      </div>
      <div className="p-12 gap-5 grid sm:grid-cols-2">
        {masajeTarifa.map((tarifa) => (
          
            <CardTarifa
              tarifa={tarifa}
            />
         
        ))}
        
      </div>
    </div>
  );
}

export default TarifasPage;
