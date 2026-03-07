export const siteConfig = {
  url: 'https://www.kadomasajes.com',
  name: 'Kadō Masajes',
  defaultTitle: 'Masajes en Tarragona | Kadō Masajes',
  defaultDescription:
    'Masajes terapéuticos, relajantes, deportivos y de tejido profundo en Tarragona. Reserva tu cita en Kadō Masajes.',
  defaultImage: '/kado.webp',
};

export const business = {
  name: 'Kadō Masajes',
  owner: 'Ángel Martín Sánchez',
  email: 'kadomasajes@gmail.com',
  phone: '+34 623 51 98 32',
  phoneHref: 'tel:+34623519832',
  whatsapp: 'https://wa.me/34623519832',
  instagram: 'https://www.instagram.com/kadomasajes/',
  telegram: 'https://t.me/kadomasajes',
  mapsApp: 'https://maps.app.goo.gl/GnHFHcMNXit1jtJ26',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6011.602730202711!2d1.248432!3d41.117029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bd8e5946ab7ed%3A0x6c5568c1e3a6f56b!2sKad%C5%8D%20Masajes%20Massage%20Massatge%20Massaggio%20Masaje%20Californiano!5e0!3m2!1sca!2ses!4v1701367404667!5m2!1sca!2ses',
  streetAddress: 'Av. Ramón y Cajal, 5 1-1',
  addressLocality: 'Tarragona',
  addressRegion: 'Tarragona',
  postalCode: '43001',
  addressCountry: 'ES',
  latitude: 41.117029,
  longitude: 1.248432,
  priceRange: '€€',
};

export type SchemaObject = Record<string, unknown>;

export function absoluteUrl(pathname = '/') {
  return new URL(pathname, siteConfig.url).toString();
}

export function createReservationLink(treatment?: string) {
  const base = business.whatsapp;

  if (!treatment) {
    return `${base}?text=${encodeURIComponent(
      'Hola, me gustaría reservar una cita en Kadō Masajes.',
    )}`;
  }

  return `${base}?text=${encodeURIComponent(
    `Hola, me gustaría reservar ${treatment} en Kadō Masajes.`,
  )}`;
}

export function getWebsiteSchema(): SchemaObject {
  return {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    inLanguage: 'es',
  };
}

export function getBusinessSchema(): SchemaObject {
  return {
    '@type': 'MassageTherapist',
    '@id': `${siteConfig.url}/#business`,
    name: business.name,
    url: `${siteConfig.url}/`,
    image: absoluteUrl('/kado.webp'),
    logo: absoluteUrl('/kado.webp'),
    description: 'Centro de masajes terapéuticos y relajantes en Tarragona.',
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceRange,
    hasMap: business.mapsApp,
    sameAs: [business.instagram, business.telegram],
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.streetAddress,
      postalCode: business.postalCode,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      addressCountry: business.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.latitude,
      longitude: business.longitude,
    },
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): SchemaObject {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFaqSchema(
  items: Array<{ question: string; answer: string }>,
): SchemaObject {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
