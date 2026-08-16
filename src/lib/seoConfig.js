export const SITE_URL = 'https://ai-tehcon.ru';
export const SITE_NAME = 'AI TehCon';
export const DEFAULT_OG_IMAGE = 'https://ai-tehcon.ru/og-image.jpg';

export function toCanonicalPath(path) {
  if (!path || path === '/') return '/';
  return `${path.replace(/\/+$/, '')}/`;
}

export const pageSEO = {
  home: {
    title: 'AI TehCon — AI-агенты для 1С и автоматизации бизнеса',
    description: 'Внедряем AI-агентов для автоматизации бизнеса: интеграция с 1С, CRM, Telegram, маркетплейсами и внутренними системами. Аналитика, отчёты и действия без ручной рутины.',
    canonical: '/',
    keywords: 'ИИ агенты, автоматизация бизнеса, разработка AI решений, интеграция нейросетей, искусственный интеллект для бизнеса',
  },
  about: {
    title: 'AI TehCon — ИИ-автоматизация бизнеса и интеграции',
    description: 'AI TehCon автоматизирует бизнес-процессы с помощью ИИ: документы, данные, CRM, Excel, почту, 1С и внутренние системы. Аудит, прототипирование, интеграция и поддержка.',
    canonical: '/about/',
    keywords: 'ИИ автоматизация бизнеса, интеграция ИИ, разработка AI решений, автоматизация документов, CRM Excel 1С, AI TehCon',
  },
  catalog: {
    title: 'Каталог ИИ-агентов для бизнеса и 1С | AI TehCon',
    description: 'Каталог ИИ-агентов и автоматизаций AI TehCon: решения для 1С, продаж, Telegram, маркетинга, аналитики, финансов и e-commerce. Подбираем готовый сценарий или собираем кастомную интеграцию под бизнес.',
    canonical: '/catalog/',
    keywords: 'каталог ИИ агентов, ИИ агенты для бизнеса, автоматизация 1С, Telegram бот для бизнеса, AI аналитика, автоматизация продаж, e-commerce автоматизация',
  },
  contacts: {
    title: 'AI TehCon',
    description: 'Свяжитесь с AI TehCon для бесплатного аудита бизнес-процессов. Найдём 3–5 точек роста и покажем, как ИИ агенты сократят расходы и увеличат эффективность вашего бизнеса.',
    canonical: '/contacts/',
    keywords: 'контакты AI TehCon, аудит бизнес-процессов, консультация по AI',
  },
};

export function getProductSEO(product) {
  const seo = product.seo || {};

  return {
    title: seo.title || `${product.title} | AI TehCon`,
    description: seo.description || `${product.shortDescription} Цена: ${product.pricing}. Интеграция нейросетей, разработка AI решений и автоматизация бизнес-процессов с AI TehCon.`,
    canonical: toCanonicalPath(seo.canonical || `/catalog/${product.id}`),
    keywords: seo.keywords || `${product.title}, ${product.category}, ИИ агент, автоматизация бизнеса, ${product.tags?.join(', ')}`,
  };
}
