import { TerapeuticMassage } from "../components/card";
import Presentacion from "../components/presentacion";
import Seo from "../components/Seo";
import { masajeInfo } from "../model/global";

function HomePage() {
  const jsonLd = [
    {
      "@type": "WebSite",
      name: "Kadō Masajes",
      url: "https://www.kadomasajes.com/",
      inLanguage: "es",
    },
    {
      "@type": "MassageTherapist",
      name: "Kadō Masajes",
      url: "https://www.kadomasajes.com/",
      image: "https://www.kadomasajes.com/kado.webp",
      description:
        "Centro de masajes terapéuticos y relajantes en Tarragona.",
      telephone: "+34 623 51 98 32",
      email: "kadomasajes@gmail.com",
      priceRange: "€€",
      hasMap: "https://maps.app.goo.gl/GnHFHcMNXit1jtJ26",
      sameAs: [
        "https://www.instagram.com/kadomasajes/",
        "https://t.me/kadomasajes",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Ramón y Cajal, 5 1-1",
        postalCode: "43001",
        addressLocality: "Tarragona",
        addressRegion: "Tarragona",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.117029,
        longitude: 1.248432,
      },
    },
  ];

  return (
    <div className="bg-color-fondo min-h-screen">
      <Seo
        title="Masajes en Tarragona | Kadō Masajes"
        description="Masajes terapéuticos, relajantes, deportivos y de tejido profundo en Tarragona. Reserva tu cita en Kadō Masajes."
        path="/"
        image="/portada3.webp"
        jsonLd={jsonLd}
      />
      <h1 className="sr-only">Masajes en Tarragona | Kadō Masajes</h1>
      <Presentacion
        datos={{
          titulo:
            "Kadō Masajes es un espacio único en pleno centro de Tarragona consagrado al bienestar y a la relajación.",
          texto: "Estás a un masaje de sentirte mejor…",
        }}
        urlFoto="/portada3.webp"
      />

      {/* Sección de Tratamientos */}
      <section className="pt-20 pb-16" aria-labelledby="tratamientos-title">
        <div className="text-center mb-16">
          <h2
            id="tratamientos-title"
            className="text-3xl sm:text-4xl text-color-letra-nav font-medium mb-3"
          >
            Tratamientos
          </h2>
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
      </section>
    </div>
  );
}

export default HomePage;
