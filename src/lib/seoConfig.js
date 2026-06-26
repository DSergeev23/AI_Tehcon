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
    title: 'AI TehCon',
    description: 'Готовые ИИ агенты для продаж, поддержки клиентов, аналитики и маркетинга. Интеграция нейросетей в бизнес-процессы от 55 000 ₽/мес. Быстрое внедрение от 14 дней.',
    canonical: '/catalog',
    keywords: 'каталог ИИ агентов, автоматизация продаж, поддержка клиентов AI, предиктивная аналитика',
  },
  contacts: {
    title: 'AI TehCon',
    description: 'Свяжитесь с AI TehCon для бесплатного аудита бизнес-процессов. Найдём 3–5 точек роста и покажем, как ИИ агенты сократят расходы и увеличат эффективность вашего бизнеса.',
    canonical: '/contacts',
    keywords: 'контакты AI TehCon, аудит бизнес-процессов, консультация по AI',
  },
};

export function getProductSEO(product) {
  return {
    title: 'AI TehCon',
    description: `${product.shortDescription} Цена: ${product.pricing}. Интеграция нейросетей, разработка AI решений и автоматизация бизнес-процессов с AI TehCon.`,
    canonical: `/catalog/${product.id}`,
    keywords: `${product.title}, ${product.category}, ИИ агент, автоматизация бизнеса, ${product.tags?.join(', ')}`,
  };
}
