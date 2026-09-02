export const SITE_URL = 'https://ai-tehcon.ru';
export const SITE_NAME = 'AI TehCon';
export const DEFAULT_OG_IMAGE = 'https://ai-tehcon.ru/og-image.jpg';

export function toCanonicalPath(path) {
  if (!path || path === '/') return '/';
  return `${path.replace(/\/+$/, '')}/`;
}

export function toAbsoluteUrl(value) {
  if (!value) return DEFAULT_OG_IMAGE;
  if (/^https:\/\//i.test(value)) return value;
  return `${SITE_URL}/${value.replace(/^\/+/, '')}`;
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
    description: 'Каталог ИИ-агентов AI TehCon для 1С, продаж, маркетинга, аналитики, финансов и маркетплейсов. Готовые сценарии и интеграции под задачи бизнеса.',
    canonical: '/catalog/',
    keywords: 'каталог ИИ агентов, ИИ агенты для бизнеса, автоматизация 1С, Telegram бот для бизнеса, AI аналитика, автоматизация продаж, e-commerce автоматизация',
  },
  contacts: {
    title: 'Контакты AI TehCon — консультация по ИИ-автоматизации',
    description: 'Свяжитесь с AI TehCon для бесплатного аудита бизнес-процессов. Найдём 3–5 точек роста и покажем, как ИИ агенты сократят расходы и увеличат эффективность вашего бизнеса.',
    canonical: '/contacts/',
    keywords: 'контакты AI TehCon, аудит бизнес-процессов, консультация по AI',
  },
  partners: {
    title: 'Партнёрская программа AI TehCon — вознаграждение за проекты ИИ-автоматизации',
    description: 'Партнёрская программа AI TehCon для интеграторов, консультантов и экспертов. Передавайте клиентов на ИИ-автоматизацию, получайте вознаграждение и развивайте совместные проекты.',
    canonical: '/partners/',
    keywords: 'партнёрская программа ИИ, партнёрство по автоматизации, реферальная программа B2B, интегратор 1С, AI TehCon партнёры',
  },
  news: {
    title: 'Новости искусственного интеллекта и автоматизации | AI TehCon',
    description: 'Новости, практические разборы и опыт применения искусственного интеллекта в бизнес-процессах, 1С, аналитике и корпоративной автоматизации.',
    canonical: '/news/',
    keywords: 'новости искусственного интеллекта, новости AI, ИИ для бизнеса, AI автоматизация, ИИ агенты, 1С и AI',
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

export function getNewsSEO(article) {
  return {
    title: article.seo?.title || `${article.title} | AI TehCon`,
    description: article.seo?.description || article.excerpt,
    canonical: toCanonicalPath(`/news/${article.slug}`),
    ogImage: toAbsoluteUrl(article.coverImage),
    ogType: 'article',
  };
}
