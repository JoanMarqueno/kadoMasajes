
import CardTarifa2 from "../components/cardTarifa2";
import { masajeTarifa } from "../model/global";

function TarifasPage() {
  return (
    <div className="pt-32">
      <div className="pt-10">
        <h1 className="text-center text-3xl text-color-letra-nav pt-2 pb-2 ">
          Tarifas
        </h1>
        <h3 className="text-center text-2xl text-color-letra-nav pb-10">
          Invierte en bienestar
        </h3>
      </div>
      <div className="sm:p-12 p-5 gap-5">
        {masajeTarifa.map((tarifa) => (
          
        
            <CardTarifa2
            tarifa={tarifa}
            />
          
         
        ))}
        
      </div>
    </div>
  );
}

export default TarifasPage;
