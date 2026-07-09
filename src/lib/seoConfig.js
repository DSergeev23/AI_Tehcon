export const SITE_URL = 'https://ai-tehcon.ru';
export const SITE_NAME = 'AI TehCon';
export const DEFAULT_OG_IMAGE = 'https://ai-tehcon.ru/og-image.jpg';

export const pageSEO = {
  home: {
    title: 'AI TehCon — AI-агенты для 1С и автоматизации бизнеса',
    description: 'Внедряем AI-агентов для автоматизации бизнеса: интеграция с 1С, CRM, Telegram, маркетплейсами и внутренними системами. Аналитика, отчёты и действия без ручной рутины.',
    canonical: '/',
    keywords: 'ИИ агенты, автоматизация бизнеса, разработка AI решений, интеграция нейросетей, искусственный интеллект для бизнеса',
  },
  about: {
    title: 'AI TehCon',
    description: 'AI TehCon — команда экспертов по разработке AI решений и интеграции нейросетей в бизнес. Автоматизируем процессы в 1С, CRM, мессенджерах. Узнайте о нашем подходе и ценностях.',
    canonical: '/about',
    keywords: 'AI TehCon, разработка AI решений, команда, ИИ агенты, автоматизация',
  },
  catalog: {
    title: 'Каталог ИИ-агентов для бизнеса и 1С | AI TehCon',
    description: 'Каталог ИИ-агентов и автоматизаций AI TehCon: решения для 1С, продаж, Telegram, маркетинга, аналитики, финансов и e-commerce. Подбираем готовый сценарий или собираем кастомную интеграцию под бизнес.',
    canonical: '/catalog',
    keywords: 'каталог ИИ агентов, ИИ агенты для бизнеса, автоматизация 1С, Telegram бот для бизнеса, AI аналитика, автоматизация продаж, e-commerce автоматизация',
  },
  contacts: {
    title: 'AI TehCon',
    description: 'Свяжитесь с AI TehCon для бесплатного аудита бизнес-процессов. Найдём 3–5 точек роста и покажем, как ИИ агенты сократят расходы и увеличат эффективность вашего бизнеса.',
    canonical: '/contacts',
    keywords: 'контакты AI TehCon, аудит бизнес-процессов, консультация по AI',
  },
};

export function getProductSEO(product) {
  const seo = product.seo || {};

  return {
    title: seo.title || `${product.title} | AI TehCon`,
    description: seo.description || `${product.shortDescription} Цена: ${product.pricing}. Интеграция нейросетей, разработка AI решений и автоматизация бизнес-процессов с AI TehCon.`,
    canonical: seo.canonical || `/catalog/${product.id}`,
    keywords: seo.keywords || `${product.title}, ${product.category}, ИИ агент, автоматизация бизнеса, ${product.tags?.join(', ')}`,
  };
}
