import { SitemapStream, EnumChangefreq } from 'sitemap';
import { createWriteStream } from 'fs';

const createCustomSitemap = () => {
    const stream = new SitemapStream({ hostname: 'http://www.kadomasajes.com' });

    // Agrega las URLs de tus páginas al sitemap
    stream.write({ url: '/' });
    stream.write({ url: '/rituales', changefreq: EnumChangefreq.WEEKLY });
    stream.write({ url: '/tarifas', changefreq: EnumChangefreq.WEEKLY });
    stream.write({ url: '/sobremi', changefreq: EnumChangefreq.MONTHLY });
    stream.write({ url: '/reserva', changefreq: EnumChangefreq.MONTHLY });

    // Finaliza el sitemap y escribe en el archivo
    
    stream.end();
    stream.pipe(createWriteStream('./public/sitemap.xml'));
};

// Ejecuta la función para crear el sitemap
createCustomSitemap();