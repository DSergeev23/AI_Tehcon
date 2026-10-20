import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CaseCard from '../components/cases/CaseCard';
import CanonicalLink from '../components/shared/CanonicalLink';
import ResponsiveImage from '../components/shared/ResponsiveImage';
import SEOHead from '../components/shared/SEOHead';
import { caseStudies } from '../lib/caseStudies';
import { directions } from '../lib/directions';
import { pageSEO } from '../lib/seoConfig';

const marketplaceSolutionGroups = [
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
];

export default function Cases() {
  const [activeSolution, setActiveSolution] = useState(null);
  const filteredCases = activeSolution ? caseStudies.filter((caseStudy) => caseStudy.solution === activeSolution) : caseStudies;
  const showMarketplaceSolutions = !activeSolution || activeSolution === 'ai-for-marketplace';

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead {...pageSEO.cases} />
      <header className="relative overflow-hidden border-b border-white/[0.08] grid-lines">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(165,29,52,0.22),transparent_28%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1920px] px-5 py-16 md:px-8 md:py-24 2xl:px-16 3xl:px-24">
          <p className="mb-6 text-xs uppercase tracking-[0.18em] text-signal">Практика внедрений</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.96] tracking-tight md:text-7xl 2xl:text-8xl">Кейсы клиентов</h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">Реальные задачи, внедрённые решения и результаты, которые можно измерить в работе бизнеса.</p>
        </div>
      </header>

      <main className="mx-auto max-w-[1920px] px-5 py-12 md:px-8 md:py-16 2xl:px-16 3xl:px-24">
        {caseStudies.length > 0 ? <>
          <section aria-label="Отбор кейсов по направлениям" className="mb-10 border-y border-white/[0.08] py-5 md:mb-12">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-white/50">Направления решений</p>
            <div className="flex flex-wrap gap-2">
              {directions.map((direction) => {
                const isActive = activeSolution === direction.slug;
                return <button key={direction.slug} type="button" aria-pressed={isActive} onClick={() => setActiveSolution(isActive ? null : direction.slug)} className={`shrink-0 border px-4 py-2.5 text-sm transition-colors ${isActive ? 'border-primary bg-primary text-white' : 'border-white/[0.16] bg-white/[0.015] text-white/75 hover:border-white/40 hover:text-white'}`}>{direction.label}</button>;
              })}
            </div>
          </section>
          {showMarketplaceSolutions && marketplaceSolutionGroups.map((group) => (
            <section key={group.id} className="mb-12" aria-labelledby={group.id}>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-signal">Решения по теме кейсов</p>
              <h2 id={group.id} className="mb-7 font-serif text-3xl text-white md:text-4xl">{group.title}</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.solutions.map((solution) => (
                  <article key={solution.id} className="group flex h-full flex-col overflow-hidden border border-primary/35 bg-white/[0.025] transition-colors hover:border-primary/60 hover:bg-white/[0.04]">
                    <CanonicalLink to={`/catalog/${solution.id}`} className="relative block aspect-[16/10] overflow-hidden bg-[#f7f8f9]" aria-label={`Смотреть решение: ${solution.title}`}>
                      <ResponsiveImage src={solution.image} alt={solution.alt} sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                    </CanonicalLink>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-signal">Решение · ИИ для маркетплейсов</p>
                      <h3 className="mt-4 text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.025em] text-white"><CanonicalLink to={`/catalog/${solution.id}`}>{solution.title}</CanonicalLink></h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">{solution.description}</p>
                      <CanonicalLink to={`/catalog/${solution.id}`} className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-semibold text-white transition-colors hover:text-primary">Смотреть решение <ArrowUpRight className="h-4 w-4" /></CanonicalLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
          {filteredCases.length > 0 ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">{filteredCases.map((caseStudy) => <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />)}</div> : <div className="border border-white/[0.12] bg-white/[0.015] p-8 text-white/70"><h2 className="font-serif text-3xl text-white">Кейсов пока нет</h2><p className="mt-3 text-sm leading-relaxed">Для этого направления мы ещё готовим подтверждённые материалы.</p></div>}
        </> : <div className="border border-white/[0.12] bg-white/[0.015] p-8 text-white/70"><h2 className="font-serif text-3xl text-white">Кейсы скоро появятся</h2><p className="mt-3 text-sm leading-relaxed">Собираем подтверждённые результаты внедрений и подготовим подробные материалы.</p></div>}
      </main>
    </div>
  );
}
