import { TerapeuticMassage } from "../components/card";
import Presentacion from "../components/presentacion";
import { masajeInfo } from "../model/global";

function HomePage() {
  return (
    <div className="bg-color-fondo min-h-screen">
      <Presentacion
        datos={{
          titulo:
            "Kadō Masajes es un espacio único en pleno centro de Tarragona consagrado al bienestar y a la relajación.",
          texto: "Estás a un masaje de sentirte mejor…",
        }}
        urlFoto="/portada3.webp"
      />

      {/* Sección de Tratamientos */}
      <div className="pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl text-color-letra-nav font-medium mb-3">
            Tratamientos
          </h1>
          <p className="text-base sm:text-lg text-color-letra-nav italic max-w-2xl mx-auto">
            Descubre nuestros servicios personalizados
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 sm:w-32 border-b-4 border-color-fondo-marron"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
              {masajeInfo.map((masaje) => (
                <div key={masaje.titulo} className="relative z-0">
                  <TerapeuticMassage datos={masaje} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
