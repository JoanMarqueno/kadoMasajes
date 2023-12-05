export default function SobreMi() {
  return (
    <section className="text-color-letra-nav body-font sm:pt-32 pt-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-fill rounded"
            alt="Imagen de Angel el masajista"
            src="/sobremi.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-color-letra-footer ">
            Ángel Martín Sánchez
          </h1>
          <div className="border-4 border-color-letra-card sm:w-[23rem] w-80" />
          <h3 className="text-color-letra-footer text-l mt-4 mb-4 text-justify font-semibold">
            Titulado en Quiromasaje y Técnico en SPA y Relax por la Escuela
            Superior de Técnicas Parasanitarias de Salamanca
          </h3>
          <h3 className="text-color-letra-footer text-l mb-4 text-justify font-semibold">
            Especializado en Masaje Californiano en la Escuela de Masaje
            Californiano de Barcelona Terapeuta Reiki niveles I y II
          </h3>
          <p className="mb-8 leading-normal text-justify">
            Amplia experiencia como terapeuta en los SPAs de los mejores hoteles
            de Barcelona y Tarragona. Gracias a mi formación y experiencia he
            conseguido crear una una terapia basada en una perspectiva holística
            del cuerpo, teniendo en cuenta nuestra parte física, energética y
            espiritual. De este modo la experiencia se convierte en un verdadero
            momento de conexión con nuestro interior para sanar desde dentro
            hacia afuera.
          </p>
        </div>
      </div>
    </section>
  );
}
