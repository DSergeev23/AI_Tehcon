export const marketplaceSolutionGroups = [
  {
    id: 'marketplace-finance-solutions',
    title: 'Финансовый контроль маркетплейсов',
    solutions: [
      {
        id: 'marketplace-financial-auditor',
        title: 'ИИ-аудитор финансов WB и Ozon',
        description: 'Сверяет данные маркетплейсов и 1С, показывает структуру расходов, изменение маржи и суммы, которые требуют проверки.',
        image: '/images/marketplace-financial-auditor-report.svg',
        alt: 'Отчёт финансового аудита Ozon со структурой расходов и маржинальной прибылью',
      },
      {
        id: 'marketplace-financial-director',
        title: 'ИИ-финансовый директор для WB и Ozon',
        description: 'Собирает P&L, сравнивает план с фактом и объясняет влияние выручки, ДРР и затрат на операционную прибыль.',
        image: '/images/marketplace-financial-director-report.svg',
        alt: 'Отчёт P&L с планом, фактом, ДРР и расшифровкой отклонения прибыли',
      },
      {
        id: 'marketplace-unit-economist',
        title: 'ИИ-экономист по SKU для WB и Ozon',
        description: 'Считает юнит-экономику и показывает минимальную цену продажи и допустимую себестоимость при целевой марже.',
        image: '/images/marketplace-unit-economist-report.svg',
        alt: 'Отчёт по SKU с юнит-экономикой, минимальной ценой и запасом до порога',
      },
    ],
  },
  {
    id: 'marketplace-traffic-solutions',
    title: 'Реклама и видимость на маркетплейсах',
    solutions: [
      {
        id: 'marketplace-ai-marketer',
        title: 'ИИ-маркетолог для рекламы WB и Ozon',
        description: 'Для бренда косметики группирует восемь SKU по отдаче рекламы WB, проверяет кластеры слабых товаров и предлагает план лимитов.',
        image: '/images/marketplace-ai-marketer-report.svg',
        alt: 'ABC-отчёт ИИ-маркетолога по рекламе восьми косметических товаров WB',
      },
      {
        id: 'marketplace-ad-analyst',
        title: 'ИИ-аналитик рекламы WB и Ozon',
        description: 'Для магазина зоотоваров сравнивает CPC и CPA на Ozon, считает ДРР и ROMI и предлагает перенос лимита.',
        image: '/images/marketplace-ad-analyst-report.svg',
        alt: 'Отчёт аналитика рекламы зоотоваров на Ozon: CPC против CPA и план бюджета',
      },
      {
        id: 'marketplace-card-seo-specialist',
        title: 'ИИ-SEO-специалист по карточкам WB и Ozon',
        description: 'Для продавца кухонных контейнеров группирует запросы и готовит заголовок и описание карточки по свойствам товара.',
        image: '/images/marketplace-card-seo-specialist-report.svg',
        alt: 'Отчёт SEO-специалиста с семантикой, заголовком и описанием карточки товара',
      },
    ],
  },
  {
    id: 'marketplace-content-customer-solutions',
    title: 'Контент и работа с покупателями',
    solutions: [
      {
        id: 'marketplace-content-manager',
        title: 'ИИ-контент-менеджер карточек WB и Ozon',
        description: 'Для производителя туристических рюкзаков готовит атрибуты, структуру галереи и текст карточки Ozon по паспорту товара.',
        image: '/images/marketplace-content-manager-report.svg',
        alt: 'Отчёт контент-менеджера по карточке туристического рюкзака Ozon',
      },
      {
        id: 'marketplace-review-manager',
        title: 'ИИ-менеджер по отзывам и вопросам WB и Ozon',
        description: 'Для бренда спортивной одежды разбирает отзывы и вопросы WB, готовит ответы и выделяет повторяющиеся проблемы.',
        image: '/images/marketplace-review-manager-report.svg',
        alt: 'Отчёт по отзывам спортивной одежды WB с темами и черновиками ответов',
      },
    ],
  },
  {
    id: 'marketplace-market-assortment-solutions',
    title: 'Рынок, ассортимент и акции',
    solutions: [
      {
        id: 'marketplace-competitor-analyst',
        title: 'ИИ-аналитик конкурентов WB и Ozon',
        description: 'Для производителя настольных светильников показывает изменение доли ниши, ассортимента, наличия и цен конкурентов на Ozon.',
        image: '/images/marketplace-competitor-analyst-report.svg',
        alt: 'Отчёт по конкурентам в нише настольных светильников: доля, ассортимент и цены',
      },
      {
        id: 'marketplace-category-manager',
        title: 'ИИ-категорийный менеджер для WB и Ozon',
        description: 'Для импортёра фитнес-оборудования сравнивает спрос, конкуренцию и маржу двух видов роликов до закупки.',
        image: '/images/marketplace-category-manager-report.svg',
        alt: 'Предзакупочный отчёт по нише фитнес-роликов: спрос, конкуренция и юнит-экономика',
      },
      {
        id: 'marketplace-promo-manager',
        title: 'ИИ-менеджер по акциям WB и Ozon',
        description: 'Для производителя листового чая рассчитывает три скидки WB и порог заказов, при котором акция сохраняет прибыль.',
        image: '/images/marketplace-promo-manager-report.svg',
        alt: 'Отчёт по акциям чайного бренда: скидки, вклад с заказа и порог продаж',
      },
    ],
  },
  {
    id: 'marketplace-operations-solutions',
    title: 'Поставки и оперативный контроль',
    solutions: [
      {
        id: 'marketplace-supply-manager',
        title: 'ИИ-менеджер по поставкам WB и Ozon',
        description: 'Для производителя автомобильных щёток рассчитывает пополнение по кластерам Ozon и срочное перемещение до приёмки партии.',
        image: '/images/marketplace-supply-manager-report.svg',
        alt: 'План пополнения щёток Ozon: остатки, дни покрытия и распределение по кластерам',
      },
      {
        id: 'marketplace-duty-analyst',
        title: 'ИИ-дежурный аналитик WB и Ozon',
        description: 'Для продавца пластика 3D-печати на WB выявляет падение продаж SKU, рост ДРР и возвратов и передаёт сигналы ответственным.',
        image: '/images/marketplace-duty-analyst-report.svg',
        alt: 'Очередь сигналов WB: отклонения заказов, рекламы и возвратов с порогами',
      },
    ],
  },
  {
    id: 'marketplace-management-solutions',
    title: 'Управление магазином и временем владельца',
    solutions: [
      {
        id: 'marketplace-operations-director',
        title: 'ИИ-операционный директор для WB и Ozon',
        description: 'Для производителя велоаксессуаров связывает расписание агентов, свежесть обменов и общий утренний обзор магазина.',
        image: '/images/marketplace-operations-director-report.svg',
        alt: 'Отчёт операционного директора: расписание агентов, состояние обменов и сводка магазина',
      },
      {
        id: 'marketplace-personal-assistant',
        title: 'ИИ-личный ассистент владельца бизнеса',
        description: 'Для владельца издательства настольных игр разбирает личную переписку, календарь и дела вне магазина, готовит черновики на согласование.',
        image: '/images/marketplace-personal-assistant-report.svg',
        alt: 'Личный брифинг владельца: входящие письма, задачи, календарь и черновики ответов',
      },
    ],
  },
];


export const marketplaceCases = marketplaceSolutionGroups.flatMap((group) => group.solutions.map((item) => ({ ...item, slug: item.id, authorId: 'sergeev', solution: 'ai-for-marketplace', category: 'Кейс · Маркетплейсы', excerpt: item.description, coverImage: item.image, coverAlt: item.alt })));
