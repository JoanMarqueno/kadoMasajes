export default function Presentacion() {
  return (
    <section className="w-full h-[28rem] sm:h-[32rem]">
      <img
        src="/portada3.jpg"
        alt="Descripción de la imagen"
        className="absolute inset-0 w-full h-[28rem] sm:h-[32rem] object-cover  z-0 block"
      />
      <div className="absolute inset-0 w-full h-[28rem] sm:h-[32rem] bg-gradient-to-tr from-color-letra-nav to-color-letra-card opacity-60"></div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl relative flex justify-center items-center h-full">
        <figure className="sm:mt-36 mt-20 text-center">
          <blockquote className="text-xl leading-8 mx-2 sm:mx-0  text-color-letra-blanca sm:text-2xl sm:leading-9 overflow-hidden" style={{ fontFamily: 'Montserrat' }}>
            <p>
              “Kadō Masajes es un espacio único en pleno centro de Tarragona consagrado al bienestar y a la relajación”
            </p>
            <br/>
            <p>
              Estás a un masaje de sentirte mejor…
            </p>  
          </blockquote>
        </figure>
      </div>  
    </section>
  );
}