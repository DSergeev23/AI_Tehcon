export const SITE_URL = 'https://tehcon.ai';
export const SITE_NAME = 'Tehcon AI';
export const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=630&fit=crop&q=85';

export const pageSEO = {
  home: {
    title: 'Tehcon AI — Автоматизация бизнеса с помощью ИИ агентов',
    description: 'Разрабатываем ИИ агентов и автоматизируем бизнес-процессы. Интеграция нейросетей, AI workflow, разработка AI решений под ключ. Экономия до 4 млн ₽/год.',
    canonical: '/',
  },
  about: {
    title: 'О компании — Tehcon AI | Разработка AI решений',
    description: 'Tehcon AI — команда экспертов по разработке AI решений и интеграции нейросетей. Автоматизация бизнеса с ИИ агентами для роста эффективности и снижения издержек.',
    canonical: '/about',
  },
  catalog: {
    title: 'Каталог ИИ агентов — Tehcon AI | Автоматизация бизнеса',
    description: 'Готовые ИИ агенты для автоматизации продаж, поддержки клиентов, аналитики и маркетинга. Интеграция нейросетей в бизнес-процессы от 55 000 ₽/мес.',
    canonical: '/catalog',
  },
  contacts: {
    title: 'Контакты — Tehcon AI | Обсудить автоматизацию с ИИ',
    description: 'Свяжитесь с Tehcon AI для обсуждения автоматизации бизнес-процессов с помощью ИИ агентов. Разработка AI решений под ваши задачи.',
    canonical: '/contacts',
  },
};

export function getProductSEO(product) {
  return {
    title: `${product.title} — Tehcon AI | ИИ агент для бизнеса`,
    description: `${product.shortDescription} ${product.pricing}. Интеграция нейросетей и автоматизация бизнеса с Tehcon AI.`,
    canonical: `/catalog/${product.id}`,
  };
}