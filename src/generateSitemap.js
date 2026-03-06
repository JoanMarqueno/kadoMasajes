import { createWriteStream } from "node:fs";
import { SitemapStream } from "sitemap";

const hostname = "https://www.kadomasajes.com";
const routes = ["/", "/vales-regalo", "/tarifas", "/sobremi", "/reserva"];

function createCustomSitemap() {
  const stream = new SitemapStream({ hostname });
  const writeStream = createWriteStream("./public/sitemap.xml");
  const now = new Date().toISOString();

  stream.pipe(writeStream);

  for (const route of routes) {
    stream.write({ url: route, lastmod: now });
  }

  stream.end();
}

createCustomSitemap();
