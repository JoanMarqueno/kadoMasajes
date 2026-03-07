interface Props {
  datos: {
    titulo: string;
    texto: string;
  };
  urlFoto: string;
}

export default function Presentacion({ datos, urlFoto }: Props) {
  return (
    <section className="relative w-full h-[28rem] sm:h-[34rem] overflow-hidden">

      {/* Imagen superpuesta */}
      <img
        src={urlFoto}
        alt="Imagen de la sala con una camilla y unas flores"
        className="absolute inset-0 w-full h-[28rem] sm:h-[34rem] object-cover z-0 scale-[1.02]"
      />
      {/* Espacio reservado para la imagen */}
      <div className="absolute inset-0 w-full h-[28rem] sm:h-[34rem] bg-gradient-to-tr from-color-letra-nav via-color-letra-nav/80 to-color-letra-card opacity-70"></div>
      {/* Contenido */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl relative flex justify-center items-center h-full z-10 px-4">
        <figure className="sm:mt-36 mt-20 text-center">
          <blockquote className="mx-auto text-lg leading-8 text-color-letra-blanca sm:text-3xl sm:leading-[1.45] overflow-hidden [text-shadow:0_2px_14px_rgba(0,0,0,0.22)]">
            <p>{datos.titulo}</p>
            <br />
            <p>
              Descubre los tratamientos que pongo a tu disposición. Escucha a tu
              maestro interior para elegir el que mejor se adapte a ti.
            </p>
            <br />
            <p className="italic text-xl sm:text-2xl">{datos.texto}</p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
