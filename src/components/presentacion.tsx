interface Props {
  datos: {
    titulo: string;
    texto: string;
  };
  urlFoto: string;
}

export default function Presentacion({ datos, urlFoto }: Props) {
  return (
    <section className="w-full h-[28rem] sm:h-[32rem]">
      <img
        src={urlFoto}
        alt="Imagen de la sala con una camilla y unas flores"
        className="absolute inset-0 w-full h-[28rem] sm:h-[32rem] object-cover  z-0 block"
      />

      <div className="absolute inset-0 w-full h-[28rem] sm:h-[32rem] bg-gradient-to-tr from-color-letra-nav to-color-letra-card opacity-60"></div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl relative flex justify-center items-center h-full">
        <figure className="sm:mt-36 mt-20 text-center">
          <blockquote className="text-xl leading-8 mx-2 sm:mx-0  text-color-letra-blanca sm:text-2xl sm:leading-9 overflow-hidden">
            <p>{datos.titulo}</p>
            <br />
            <p>
              Descubre los tratamientos que pongo a tu disposición. Escucha a tu
              maestro interior para elegir el que mejor se adapte a ti.
            </p>
            <br />
            <p className="italic text-lg sm:text-xl">{datos.texto}</p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
