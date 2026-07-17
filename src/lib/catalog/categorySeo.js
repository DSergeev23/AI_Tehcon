export const catalogCategoryPages = {
  '1c': {
    slug: '1c',
    label: '1С',
    title: 'ИИ-агенты и автоматизация 1С для бизнеса | AI TehCon',
    description: 'Каталог ИИ-решений для 1С: аналитика по данным, автоматизация отчетов, интеграции, чат- и голосовые сценарии для бизнеса.',
    h1: 'ИИ-агенты и автоматизация 1С',
    intro: 'Решения для руководителей и команд, которым нужно получать данные из 1С, автоматизировать отчеты и запускать сценарии без ручной рутины.',
    canonical: '/catalog/1c',
    keywords: 'ИИ агент для 1С, автоматизация 1С, аналитика 1С, интеграция 1С, чат-бот для 1С',
  },
  'image-analysis': {
    slug: 'image-analysis',
    label: 'Анализ изображений',
    title: 'ИИ для анализа изображений и проверки документов в 1С | AI TehCon',
    description: 'ИИ-решения для анализа сканов и документов в 1С: проверка путевых листов, медосмотров, кадровых и первичных документов, поиск пропусков и расхождений.',
    h1: 'ИИ для анализа изображений и проверки документов',
    intro: 'Автоматически распознавайте сканы, контролируйте обязательные поля, подписи и даты, сверяйте данные с 1С и получайте уведомления о найденных ошибках.',
    canonical: '/catalog/image-analysis',
    keywords: 'ИИ анализ изображений, распознавание документов 1С, проверка сканов документов, OCR для 1С, автоматическая проверка документов',
  },
  'content-factory': {
    slug: 'content-factory',
    label: 'Контент завод',
    title: 'Контент завод: ИИ-агенты для создания контента | AI TehCon',
    description: 'ИИ-решения для регулярного создания экспертного контента: подготовка постов, статей и публикаций для бизнеса.',
    h1: 'Контент завод',
    intro: 'ИИ-агенты превращают идеи, голосовые сообщения и данные компании в готовый контент для регулярных публикаций.',
    canonical: '/catalog/content-factory',
    keywords: 'контент завод, ИИ генерация контента, AI редактор, автоматизация создания контента',
  },
  marketing: {
    slug: 'marketing',
    label: 'Маркетинг',
    title: 'ИИ-агенты для маркетинга, SEO и контента | AI TehCon',
    description: 'ИИ-решения для маркетинга: генерация контента, SEO-автоматизация, Telegram-воронки, Pinterest, лидогенерация и автопубликация.',
    h1: 'ИИ-агенты для маркетинга',
    intro: 'Автоматизируйте контент, лидогенерацию, SEO-продвижение, Telegram-воронки и работу с маркетинговыми данными.',
    canonical: '/catalog/marketing',
    keywords: 'ИИ агенты для маркетинга, SEO автоматизация, генерация контента AI, Telegram воронка, лидогенерация',
  },
  analytics: {
    slug: 'analytics',
    label: 'Аналитика',
    title: 'ИИ-аналитика и агенты для бизнес-данных | AI TehCon',
    description: 'ИИ-агенты для аналитики: ответы по данным бизнеса, дашборды, мониторинг показателей, саммари новостей и автоматизация отчетов.',
    h1: 'ИИ-аналитика для бизнеса',
    intro: 'Собирайте данные из систем, получайте ответы на вопросы, отслеживайте показатели и превращайте разрозненную информацию в решения.',
    canonical: '/catalog/analytics',
    keywords: 'ИИ аналитика, AI аналитик для бизнеса, автоматизация отчетов, бизнес-аналитика AI, дашборды AI',
  },
  finance: {
    slug: 'finance',
    label: 'Финансы',
    title: 'ИИ-агенты для финансов и инвестиционного консалтинга | AI TehCon',
    description: 'ИИ-решения для финансов: ассистенты по активам, контроль пополнений, напоминания клиентам, автоматизация финансового планирования.',
    h1: 'ИИ-агенты для финансов',
    intro: 'Автоматизируйте клиентские коммуникации, контроль пополнений, финансовые планы и рутинные вопросы в инвестиционном консалтинге.',
    canonical: '/catalog/finance',
    keywords: 'ИИ агент для финансов, финансовый ассистент AI, автоматизация инвестиций, инвестиционный консалтинг, финтех автоматизация',
  },
  marketplace: {
    slug: 'marketplace',
    label: 'Маркетплейс',
    title: 'ИИ-агенты для маркетплейсов, WB и Ozon | AI TehCon',
    description: 'ИИ-решения для e-commerce: аналитика Wildberries и Ozon, парсинг инфлюенсеров, маркетплейсы, дашборды и автоматизация продаж.',
    h1: 'ИИ-агенты для маркетплейсов',
    intro: 'Подключайте аналитику маркетплейсов, автоматизируйте сбор данных, поиск инфлюенсеров и принятие решений по продажам.',
    canonical: '/catalog/marketplace',
    keywords: 'ИИ для e-commerce, аналитика Wildberries, аналитика Ozon, AI для маркетплейсов, автоматизация e-commerce',
  },
};

export const catalogCategoryNav = Object.values(catalogCategoryPages);

export function isOneCProduct(product) {
  const searchable = [
    product.title,
    product.shortDescription,
    product.category,
    ...(product.tags || []),
  ].join(' ').toLowerCase();

  return searchable.includes('1с') || searchable.includes('1c');
}

export function productMatchesCatalogCategory(slug, product) {
  if (slug === '1c') return isOneCProduct(product);
  if (slug === 'image-analysis') {
    return (product.tags || []).some((tag) => tag.toLowerCase() === 'анализ изображений');
  }
  if (slug === 'content-factory') {
    return (product.tags || []).some((tag) => tag.toLowerCase() === 'контент завод');
  }
  if (slug === 'marketplace') {
    const searchable = [
      product.title,
      product.shortDescription,
      product.category,
      ...(product.tags || []),
    ].join(' ').toLowerCase();

    return searchable.includes('e-commerce')
      || searchable.includes('маркетплейс')
      || searchable.includes('wildberries')
      || searchable.includes('ozon');
  }

  const categoryPage = catalogCategoryPages[slug];
  return Boolean(categoryPage) && product.category === categoryPage.label;
}
