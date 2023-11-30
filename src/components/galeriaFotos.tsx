export default function GaleriaFotos() {
  return (
    <section className="text-gray-600">
      <div className="container px-5  mx-auto flex flex-wrap">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap sm:w-1/2">
            <div className="md:p-2 p-1 sm:w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
              />
            </div>
            <div className="md:p-2 p-1 sm:w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div className="md:p-2 p-1 sm:w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              />
            </div>
            <div className="md:p-2 p-1 sm:w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
