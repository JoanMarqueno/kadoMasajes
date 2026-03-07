import { useEffect } from "react";

const SITE_URL = "https://www.kadomasajes.com";
const DEFAULT_IMAGE = `${SITE_URL}/kado.webp`;

type JsonLdObject = Record<string, unknown>;

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  robots?: string;
  jsonLd?: JsonLdObject | JsonLdObject[];
}

function upsertMetaByName(name: string, content: string) {
  let element = document.querySelector(
    `meta[name="${name}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let element = document.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let canonical = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function upsertJsonLd(jsonLd: JsonLdObject | JsonLdObject[]) {
  const scriptId = "kado-jsonld";
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const payload = Array.isArray(jsonLd)
    ? { "@context": "https://schema.org", "@graph": jsonLd }
    : jsonLd;

  script.textContent = JSON.stringify(payload);
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  robots = "index,follow",
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const resolvedPath =
      path ?? `${window.location.pathname}${window.location.search}`;
    const absoluteUrl = new URL(resolvedPath, SITE_URL).toString();
    const absoluteImage = image.startsWith("http")
      ? image
      : new URL(image, SITE_URL).toString();

    document.title = title;

    upsertMetaByName("description", description);
    upsertMetaByName("robots", robots);

    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:type", type);
    upsertMetaByProperty("og:url", absoluteUrl);
    upsertMetaByProperty("og:image", absoluteImage);
    upsertMetaByProperty("og:locale", "es_ES");
    upsertMetaByProperty("og:site_name", "Kadō Masajes");

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", absoluteImage);

    upsertCanonical(absoluteUrl);

    if (jsonLd) {
      upsertJsonLd(jsonLd);
      return;
    }

    const existingJsonLd = document.getElementById("kado-jsonld");
    if (existingJsonLd) {
      existingJsonLd.remove();
    }
  }, [description, image, jsonLd, path, robots, title, type]);

  return null;
}
