import treatmentData from '../data/masajes.json';
import pricingData from '../data/tarifas.json';
import { absoluteUrl, business } from './site';

export interface TreatmentData {
  titulo: string;
  recomendado: boolean;
  subtitulo: string;
  resumen: string;
  src: string;
  descripcion: string;
}

export interface PricingData {
  nombre: string;
  primerTiempo?: string | null;
  precioPrimerTiempo?: string | null;
  segundoTiempo: string;
  precioSegundoTiempo: string;
  primerBono?: string | null;
  segundoBono: string;
}

export interface PriceRow {
  key: string;
  type: 'sesion' | 'bono';
  duration: string;
  price: string;
}

export interface Treatment extends TreatmentData {
  slug: string;
  paragraphs: string[];
  pricing?: PricingData;
  priceRows: PriceRow[];
}

export function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function buildRows(pricing?: PricingData): PriceRow[] {
  if (!pricing) {
    return [];
  }

  const rows: PriceRow[] = [];

  if (pricing.primerTiempo && pricing.precioPrimerTiempo) {
    rows.push({
      key: `${pricing.nombre}-sesion-${pricing.primerTiempo}`,
      type: 'sesion',
      duration: pricing.primerTiempo,
      price: pricing.precioPrimerTiempo,
    });
  }

  if (pricing.segundoTiempo && pricing.precioSegundoTiempo) {
    rows.push({
      key: `${pricing.nombre}-sesion-${pricing.segundoTiempo}`,
      type: 'sesion',
      duration: pricing.segundoTiempo,
      price: pricing.precioSegundoTiempo,
    });
  }

  if (pricing.primerTiempo && pricing.primerBono) {
    rows.push({
      key: `${pricing.nombre}-bono-${pricing.primerTiempo}`,
      type: 'bono',
      duration: pricing.primerTiempo,
      price: pricing.primerBono,
    });
  }

  if (pricing.segundoTiempo && pricing.segundoBono) {
    rows.push({
      key: `${pricing.nombre}-bono-${pricing.segundoTiempo}`,
      type: 'bono',
      duration: pricing.segundoTiempo,
      price: pricing.segundoBono,
    });
  }

  return rows;
}

const pricingMap = new Map(
  (pricingData as PricingData[]).map((item) => [item.nombre, item]),
);

export const treatments: Treatment[] = (treatmentData as TreatmentData[]).map((item) => {
  const pricing = pricingMap.get(item.titulo);

  return {
    ...item,
    slug: slugify(item.titulo),
    paragraphs: item.descripcion.split('\n\n'),
    pricing,
    priceRows: buildRows(pricing),
  };
});

export function getTreatmentBySlug(slug: string) {
  return treatments.find((item) => item.slug === slug);
}

export function getTreatmentUrl(slug: string) {
  return `/tratamientos/${slug}`;
}

export function getRelatedTreatments(currentSlug: string, limit = 3) {
  return treatments.filter((item) => item.slug !== currentSlug).slice(0, limit);
}

export function getTreatmentFaq(treatment: Treatment) {
  const durations = treatment.priceRows
    .filter((row) => row.type === 'sesion')
    .map((row) => row.duration)
    .join(' y ');

  return [
    {
      question: `¿Qué duración tiene ${treatment.titulo}?`,
      answer: durations
        ? `${treatment.titulo} está disponible en ${durations} en Kadō Masajes, Tarragona.`
        : `${treatment.titulo} se adapta a las opciones de duración disponibles en Kadō Masajes, Tarragona.`,
    },
    {
      question: `¿Cómo reservar ${treatment.titulo} en Tarragona?`,
      answer: `Puedes reservar ${treatment.titulo} por WhatsApp, teléfono o email. Solo necesitas indicar tu nombre, día, hora y el tipo de masaje que deseas reservar.`,
    },
    {
      question: '¿Dónde está Kadō Masajes?',
      answer: `Kadō Masajes está en ${business.streetAddress}, ${business.postalCode} ${business.addressLocality}.`,
    },
  ];
}

export function getTreatmentServiceSchema(treatment: Treatment) {
  const offers = treatment.priceRows.map((row) => ({
    '@type': 'Offer',
    price: row.price.replace('€', ''),
    priceCurrency: 'EUR',
    description:
      row.type === 'bono'
        ? `Bono de 3 sesiones de ${treatment.titulo} de ${row.duration}`
        : `${treatment.titulo} de ${row.duration}`,
    url: absoluteUrl(getTreatmentUrl(treatment.slug)),
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: treatment.titulo,
    description: treatment.resumen,
    areaServed: 'Tarragona',
    provider: {
      '@id': `${absoluteUrl('/') }#business`,
    },
    image: absoluteUrl(treatment.src),
    offers,
  };
}
