export const SITE_URL = 'https://ai-tehcon.ru';
export const SITE_NAME = 'Tehcon AI';
export const DEFAULT_OG_IMAGE = 'https://media.base44.com/images/public/6a12ce8c6eb2615f598d6ab7/b29535303_generated_image.png';

export const pageSEO = {
  home: {
    title: 'Tehcon AI — Автоматизация бизнес-процессов с помощью ИИ агентов',
    description: 'Tehcon AI разрабатывает автономных ИИ агентов для автоматизации бизнес-процессов. Интеграция нейросетей в 1С, CRM, Telegram. Первые результаты за 14 дней. Экономия до 4 млн ₽/год.',
    canonical: '/',
    keywords: 'ИИ агенты, автоматизация бизнеса, разработка AI решений, интеграция нейросетей, искусственный интеллект для бизнеса',
  },
  about: {
    title: 'О компании Tehcon AI — Разработка AI решений и ИИ агентов',
    description: 'Tehcon AI — команда экспертов по разработке AI решений и интеграции нейросетей в бизнес. Автоматизируем процессы в 1С, CRM, мессенджерах. Узнайте о нашем подходе и ценностях.',
    canonical: '/about',
    keywords: 'Tehcon AI, разработка AI решений, команда, ИИ агенты, автоматизация',
  },
  catalog: {
    title: 'Каталог ИИ агентов — Готовые решения для автоматизации бизнеса | Tehcon AI',
    description: 'Готовые ИИ агенты для продаж, поддержки клиентов, аналитики и маркетинга. Интеграция нейросетей в бизнес-процессы от 55 000 ₽/мес. Быстрое внедрение от 14 дней.',
    canonical: '/catalog',
    keywords: 'каталог ИИ агентов, автоматизация продаж, поддержка клиентов AI, предиктивная аналитика',
  },
  contacts: {
    title: 'Контакты — Обсудить автоматизацию бизнеса с ИИ | Tehcon AI',
    description: 'Свяжитесь с Tehcon AI для бесплатного аудита бизнес-процессов. Найдём 3–5 точек роста и покажем, как ИИ агенты сократят расходы и увеличат эффективность вашего бизнеса.',
    canonical: '/contacts',
    keywords: 'контакты Tehcon AI, аудит бизнес-процессов, консультация по AI',
  },
};

export function getProductSEO(product) {
  return {
    title: `${product.title} — ИИ агент для автоматизации бизнеса | Tehcon AI`,
    description: `${product.shortDescription} Цена: ${product.pricing}. Интеграция нейросетей, разработка AI решений и автоматизация бизнес-процессов с Tehcon AI.`,
    canonical: `/catalog/${product.id}`,
    keywords: `${product.title}, ${product.category}, ИИ агент, автоматизация бизнеса, ${product.tags?.join(', ')}`,
  };
}

export function getProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": product.title,
    "description": product.fullDescription,
    "provider": {
      "@type": "Organization",
      "name": "Tehcon AI",
      "url": SITE_URL,
    },
    "serviceType": "AI автоматизация",
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "RUB",
      "price": product.pricing?.replace(/[^0-9]/g, '') || "0",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": product.pricing,
        "priceCurrency": "RUB",
      },
    },
    "url": `${SITE_URL}/catalog/${product.id}`,
  };
}