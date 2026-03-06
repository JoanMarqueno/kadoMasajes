import CardTarifa2 from "../components/cardTarifa2";
import Seo from "../components/Seo";
import { masajeTarifa } from "../model/global";

function TarifasPage() {
  return (
    <div className="bg-color-fondo min-h-screen pt-36 pb-16">
      <Seo
        title="Tarifas de Masajes en Tarragona | Kadō Masajes"
        description="Consulta precios y bonos de masajes en Tarragona: masaje relajante, deportivo, deep tissue, facial y más."
        path="/tarifas"
        image="/kado.webp"
      />
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl text-color-letra-nav font-medium mb-3">
          Tarifas
        </h1>
        <p className="text-base sm:text-lg text-color-letra-nav italic max-w-2xl mx-auto">
          Invierte en bienestar
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 sm:w-32 border-b-4 border-color-fondo-marron"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {masajeTarifa.map((tarifa) => (
              <div
                key={tarifa.nombre}
                className="bg-color-fondo-blanco rounded-xl shadow-lg overflow-hidden"
              >
                <CardTarifa2 tarifa={tarifa} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarifasPage;
