import { SITE_URL, SITE_NAME } from './seoConfig';

// ── Shared Organization ──
export const ORGANIZATION = {
  "@type": "Organization",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/icon.png`,
  "description": "AI TehCon разрабатывает ИИ-агентов и автоматизирует бизнес-процессы компаний.",
};

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
  };
}

// ── Offer helper ──
function createOffer(product) {
  const url = `${SITE_URL}/catalog/${product.id}`;
  const numericMatch = product.pricing?.match(/[\d\s]+/);
  const numericPrice = numericMatch ? parseInt(numericMatch[0].replace(/\s/g, ''), 10) : null;

  const offer = {
    "@type": "Offer",
    "url": url,
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
  };

  if (numericPrice && numericPrice > 0) {
    offer.price = numericPrice;
    offer.description = product.pricing;
  } else {
    offer.description = "Стоимость рассчитывается по запросу";
  }

  return offer;
}

function getProductDescription(product) {
  return product.seo?.description || product.shortDescription;
}

// ── Catalog: ItemList ──
export function createCatalogItemListSchema(products, options = {}) {
  const url = options.url || `${SITE_URL}/catalog`;
  const name = options.name || "Каталог AI-решений AI TehCon";
  const description = options.description || "Каталог ИИ-агентов, автоматизаций и интеграционных решений для бизнеса.";

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "description": description,
    "url": url,
    "numberOfItems": products.length,
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `${SITE_URL}/catalog/${p.id}`,
      "item": {
        "@type": "Service",
        "name": p.title,
        "description": getProductDescription(p),
        "provider": { ...ORGANIZATION },
        "serviceType": p.category,
        "category": p.category,
        "keywords": p.tags?.join(", ") || "",
      },
    })),
  };
}

// ── Catalog: BreadcrumbList ──
export function createCatalogBreadcrumbSchema(categoryPage) {
  const itemListElement = [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Каталог", "item": `${SITE_URL}/catalog` },
  ];

  if (categoryPage) {
    itemListElement.push({
      "@type": "ListItem",
      "position": 3,
      "name": categoryPage.label,
      "item": `${SITE_URL}${categoryPage.canonical}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement,
  };
}

// ── Product detail: Service ──
export function createServiceSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": product.title,
    "description": getProductDescription(product),
    "url": `${SITE_URL}/catalog/${product.id}`,
    "provider": { ...ORGANIZATION },
    "areaServed": {
      "@type": "Country",
      "name": "Россия",
    },
    "serviceType": product.category,
    "category": product.category,
    "keywords": product.tags?.join(", ") || "",
    "offers": createOffer(product),
  };
}

// ── Product detail: BreadcrumbList ──
export function createProductBreadcrumbSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Каталог", "item": `${SITE_URL}/catalog` },
      { "@type": "ListItem", "position": 3, "name": product.title, "item": `${SITE_URL}/catalog/${product.id}` },
    ],
  };
}
