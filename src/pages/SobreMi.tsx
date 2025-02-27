export default function SobreMi() {
  return (
    <div className="bg-color-fondo min-h-screen pt-36 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl text-color-letra-nav font-medium mb-3">
          Sobre mí
        </h1>
        <p className="text-base sm:text-lg text-color-letra-nav italic max-w-2xl mx-auto">
          Experiencia y profesionalidad a tu servicio
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 sm:w-32 border-b-4 border-color-fondo-marron"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-color-fondo-blanco rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2">
                <div className="h-full relative">
                  <img
                    className="w-full h-full object-cover"
                    style={{ minHeight: "600px" }}
                    alt="Imagen de Angel el masajista"
                    src="/sobremi.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>

              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl text-color-letra-nav font-medium mb-4">
                      Ángel Martín Sánchez
                    </h2>
                    <div className="w-20 border-b-4 border-color-fondo-marron"></div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-color-fondo-marron/5 p-6 rounded-xl border border-color-fondo-marron/10">
                      <h3 className="font-medium text-xl text-color-letra-nav mb-4">
                        Formación
                      </h3>
                      <ul className="space-y-4 text-color-letra-nav">
                        <li className="flex items-start">
                          <span className="mr-3 text-color-fondo-marron">
                            •
                          </span>
                          <span>
                            Titulado en Quiromasaje y Técnico en SPA y Relax por
                            la Escuela Superior de Técnicas Parasanitarias de
                            Salamanca
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-color-fondo-marron">
                            •
                          </span>
                          <span>
                            Especializado en Masaje Californiano en la Escuela
                            de Masaje Californiano de Barcelona
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-color-fondo-marron">
                            •
                          </span>
                          <span>Terapeuta Reiki niveles I y II</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <p className="text-color-letra-nav leading-relaxed">
                        Amplia experiencia como terapeuta en los SPAs de los
                        mejores hoteles de Barcelona y Tarragona. Gracias a mi
                        formación y experiencia he conseguido crear una terapia
                        basada en una perspectiva holística del cuerpo, teniendo
                        en cuenta nuestra parte física, energética y espiritual.
                      </p>

                      <p className="text-color-letra-nav leading-relaxed">
                        De este modo la experiencia se convierte en un verdadero
                        momento de conexión con nuestro interior para sanar
                        desde dentro hacia afuera.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
