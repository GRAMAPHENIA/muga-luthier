export const DEFAULT_LOCALE = "es";
export const SUPPORTED_LOCALES = ["es", "en"];

const ES_TO_EN_PATHS = {
  "/": "/en",
  "/instrumentos": "/en/instruments",
  "/instrumentos/buconero": "/en/instruments/buconero",
  "/instrumentos/velluto": "/en/instruments/velluto",
  "/instrumentos/eira": "/en/instruments/eira",
  "/galeria": "/en/gallery",
  "/reparaciones": "/en/repairs",
  "/taller": "/en/workshop",
  "/acerca-de": "/en/about",
};

const EN_TO_ES_PATHS = Object.fromEntries(
  Object.entries(ES_TO_EN_PATHS).map(([esPath, enPath]) => [enPath, esPath])
);

const EXTERNAL_PROTOCOL = /^(https?:|mailto:|tel:)/i;

const normalizePath = (path = "/") => {
  if (!path || path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path.slice(0, -1) : path;
};

export const getLocaleFromPathname = (pathname = "/") => {
  const normalized = normalizePath(pathname);
  return normalized === "/en" || normalized.startsWith("/en/") ? "en" : "es";
};

export const localizeHref = (href, locale = DEFAULT_LOCALE) => {
  if (!href || locale === "es" || EXTERNAL_PROTOCOL.test(href)) {
    return href;
  }

  if (href.startsWith("/#")) {
    return `/en${href.slice(1)}`;
  }

  if (href.startsWith("#")) {
    return `/en${href}`;
  }

  const [rawPath, hash] = href.split("#");
  const path = normalizePath(rawPath);
  const mappedPath = ES_TO_EN_PATHS[path] || (path.startsWith("/en") ? path : `/en${path}`);

  return hash ? `${mappedPath}#${hash}` : mappedPath;
};

export const swapLocalePath = (pathname, targetLocale) => {
  const path = normalizePath(pathname || "/");

  if (targetLocale === "en") {
    if (path === "/en" || path.startsWith("/en/")) {
      return path;
    }

    return ES_TO_EN_PATHS[path] || `/en${path === "/" ? "" : path}`;
  }

  if (targetLocale === "es") {
    if (path === "/") {
      return "/";
    }

    if (EN_TO_ES_PATHS[path]) {
      return EN_TO_ES_PATHS[path];
    }

    if (path === "/en") {
      return "/";
    }

    if (path.startsWith("/en/")) {
      const withoutPrefix = path.replace("/en", "");
      return withoutPrefix || "/";
    }

    return path;
  }

  return path;
};
