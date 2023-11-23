export default function Presentacion() {
  return (
    <section className="mt-16 sm:mt-28">
      {/* Mostrar video en pantallas grandes */}
      <div className="hidden lg:block">
      <video
        src="https://carontestudio.com/img/f4.mp4"
        autoPlay
        muted
        loop
        poster="https://carontestudio.com/img/contacto.jpg"
        className="absolute inset-0 w-full h-[28rem] object-cover z-0 hidden lg:block"
      ></video>

      </div>
     

      <img
        src="https://khian.es/wp-content/uploads/2022/03/Terapeutico-Portada-1-800x442.jpg"
        alt="Descripción de la imagen"
        className="absolute inset-0 w-full h-[28rem] object-cover z-0 block lg:hidden"
      />
      <div className="absolute inset-0 w-full h-[28rem] bg-gradient-to-tr from-color-letra-nav to-color-fondo opacity-70"></div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl relative z-10 flex justify-center items-center h-full">
        <figure className="mt-36 text-center">
          <blockquote className="text-xl leading-8 mx-2 sm:mx-0 text-color-letra-blanca sm:text-2xl sm:leading-9 max-h-50 overflow-hidden">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
        </figure>
      </div>  
    </section>
  );
}
