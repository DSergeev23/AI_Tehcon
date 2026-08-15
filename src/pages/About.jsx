import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit } from 'lucide-react';
import RevealOnScroll from '../components/shared/RevealOnScroll';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/shared/SEOHead';
import { getOptimizedImageUrl } from '../components/shared/ResponsiveImage';
import { pageSEO } from '../lib/seoConfig';

const values = [
  { title: 'Результат', desc: 'Каждое решение измеряется конкретными бизнес-метриками и ROI.' },
  { title: 'Партнёрство', desc: 'Работаем как часть вашей команды, погружаясь в специфику бизнеса.' },
  { title: 'Инновации', desc: 'Применяем передовые исследования ИИ в реальных бизнес-задачах.' },
  { title: 'Надёжность', desc: 'Enterprise-grade безопасность и SLA 99.9% для всех систем.' },
];

const expertise = [
  {
    value: '40+',
    title: 'конфигураций 1С',
    caption: 'Видим логику учёта целиком',
    area: '1С и учёт',
    visual: 'one-c',
    markers: ['Документы', 'Регистры', 'Роли'],
  },
  {
    value: '20+',
    title: 'моделей ИИ',
    caption: 'Выбираем модель под задачу',
    area: 'ИИ-инструменты',
    visual: 'ai',
    markers: ['LLM', 'OCR', 'RAG'],
  },
  {
    value: '12 лет',
    title: 'в автоматизации',
    caption: 'Понимаем процессы бизнеса',
    area: 'Опыт внедрений',
    visual: 'experience',
    markers: ['Процессы', 'Интеграции', 'Контроль'],
  },
];

const implementationSteps = [
  {
    title: 'Находим потери',
    caption: 'Ручная работа · задержки · ошибки',
    result: 'Точка роста',
    visual: 'process',
  },
  {
    title: 'Соединяем системы',
    caption: '1С · CRM · Excel · документы',
    result: 'Единые данные',
    visual: 'data',
  },
  {
    title: 'Добавляем интеллект',
    caption: 'Распознать · проверить · решить',
    result: 'ИИ-сценарий',
    visual: 'ai',
  },
  {
    title: 'Получаем эффект',
    caption: 'Быстрее · точнее · под контролем',
    result: 'Измеримый результат',
    visual: 'result',
  },
];

const atlasPositions = {
  process: '0% 0%',
  data: '100% 0%',
  ai: '0% 100%',
  result: '100% 100%',
};

function AtlasVisual({ type, size = 'step', blend = false }) {
  return (
    <div
      className={`relative overflow-hidden ${size === 'expertise' ? 'w-36 h-36 md:w-44 md:h-44' : 'w-44 h-44 2xl:w-52 2xl:h-52'} ${blend ? 'mix-blend-screen' : ''}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-no-repeat transition-transform duration-500 hover:scale-[1.04]"
        style={{
          backgroundImage: `url(${getOptimizedImageUrl('/images/about-automation-atlas.png', 960)})`,
          backgroundPosition: atlasPositions[type],
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  );
}

function ExpertiseVisual({ type }) {
  if (type === 'one-c') {
    return (
      <div className="relative w-36 h-32" aria-hidden="true">
        <div className="absolute left-0 top-0 w-20 h-16 border border-black/35 bg-black/10" />
        <div className="absolute left-2 top-2 w-20 h-16 border border-black/55 bg-white/[0.08]" />
        <div className="absolute left-4 top-4 w-20 h-16 border-2 border-black bg-[#d9d9d7] text-black shadow-[6px_6px_0_rgba(0,0,0,0.24)] transition-transform duration-300 hover:translate-x-[3px] hover:translate-y-[3px]">
          <div className="h-3 px-1 flex items-center gap-1 border-b border-black/30 bg-white/40">
            <span className="w-1.5 h-1.5 bg-primary" />
            <span className="w-1.5 h-1.5 bg-black/25" />
            <span className="w-1.5 h-1.5 bg-black/25" />
          </div>
          <div className="h-[49px] flex items-center justify-center gap-2">
            <span className="font-mono text-lg font-bold">1С</span>
            <span className="w-5 space-y-1">
              <span className="block h-px bg-black/50" />
              <span className="block h-px bg-black/30" />
              <span className="block h-px bg-black/20" />
            </span>
          </div>
        </div>
        <span className="absolute right-0 bottom-1 w-4 h-4 border border-black bg-white/35" />
      </div>
    );
  }

  if (type === 'ai') {
    return (
      <div className="relative w-36 h-36 flex items-center justify-center" aria-hidden="true">
        <div className="absolute inset-5 border border-white/15 rotate-45" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20" />
        <div className="relative z-10 w-[72px] h-[72px] border border-primary/70 bg-black shadow-[0_0_24px_rgba(165,29,52,0.18)] flex items-center justify-center signal-pulse">
          <BrainCircuit className="w-9 h-9 text-white" strokeWidth={1.25} />
        </div>
        {['left-0 top-[58px]', 'right-0 top-[58px]', 'left-[58px] top-0', 'left-[58px] bottom-0'].map((position, index) => (
          <span
            key={position}
            className={`absolute ${position} w-3 h-3 border signal-pulse ${index === 1 ? 'border-primary bg-primary' : 'border-white/50 bg-black'}`}
            style={{ animationDelay: `${index * 280}ms` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-44 h-32" aria-hidden="true">
      <div className="absolute left-0 right-0 bottom-6 h-px bg-white/30" />
      <div className="absolute inset-x-0 bottom-7 h-16 flex items-end gap-2">
        {[24, 36, 48, 62, 78, 96].map((height, index) => (
          <div
            key={height}
            className="relative flex-1 border border-white/30 bg-white/[0.04]"
            style={{ height: `${height}%` }}
          >
            <span className={`absolute inset-x-0 top-0 h-1 ${index === 5 ? 'bg-primary' : 'bg-white/65'}`} />
          </div>
        ))}
      </div>
      <span className="absolute left-0 bottom-0 font-mono text-[9px] text-white/45">2014</span>
      <span className="absolute right-0 bottom-0 font-mono text-[9px] text-white/70">2026</span>
    </div>
  );
}

function StepIllustration({ type }) {
  return (
    <div className="relative h-52 flex items-center justify-center" aria-hidden="true">
      <AtlasVisual type={type} />
    </div>
  );
}

const oneCExpertise = [
  { title: 'Понимаем логику учёта', description: 'Работаем с документами, справочниками, регистрами, ролями, складскими и кадровыми процессами — учитываем не только интерфейс, но и правила, по которым живёт база.' },
  { title: 'Связываем 1С с ИИ', description: 'Подключаем ИИ к данным и документам 1С: он анализирует, проверяет, ищет отклонения, готовит рекомендации и запускает согласованные действия.' },
  { title: 'Встраиваем в контур компании', description: 'Дополняем 1С интеграциями с CRM, Excel, почтой, ТСД, API и внутренними сервисами, чтобы процесс не обрывался между системами.' },
];

const automationDirections = [
  { title: 'Документы и OCR', description: 'Распознавание сканов, проверка реквизитов, подписей и обязательных полей.', to: '/catalog/image-analysis' },
  { title: 'CRM и коммуникации', description: 'Обработка заявок, лидов, обращений и клиентских сообщений в рабочих каналах.', to: '/catalog/marketing' },
  { title: 'Данные, отчёты и Excel', description: 'Сбор данных, поиск отклонений, регулярные отчёты и ответы на вопросы бизнеса.', to: '/catalog/analytics' },
  { title: 'Склад, ТСД и операции', description: 'Инвентаризация, контроль адресного склада, пересортицы и складских документов.', to: '/catalog/1c-ai-warehouse-inventory' },
  { title: '1С и корпоративные интеграции', description: 'Связь учёта, документов и действий в 1С с ИИ и внешними системами.', to: '/catalog/1c' },
  { title: 'Почта, заявки и сервисы', description: 'Классификация входящей почты, маршрутизация задач и запуск сценариев по правилам.', to: '/catalog' },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI TehCon",
  "url": "https://ai-tehcon.ru",
  "description": "AI TehCon — агентство ИИ автоматизации бизнес-процессов. Разработка AI решений и интеграция нейросетей.",
  "foundingDate": "2014",
  "areaServed": "RU",
  "knowsAbout": ["ИИ агенты", "автоматизация бизнеса", "машинное обучение", "нейросети"]
};

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...pageSEO.about} schemaJson={orgSchema} />
      {/* Hero */}
      <div className="border-b border-white/[0.08] relative">
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <span className="absolute bottom-5 left-5 text-white/15 text-xs">+</span>
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 pt-16 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div className="page-enter">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border signal-badge rounded-sm text-[11px] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              О компании
            </div>
            <h1 className="font-serif text-5xl md:text-6xl 2xl:text-7xl text-white tracking-tight leading-tight">
              ИИ-автоматизация бизнеса<br />и интеграции для компаний
            </h1>
          </div>

          <div className="page-enter page-enter-delay">
            <p className="text-sm text-white leading-relaxed mb-6">
              AI TehCon автоматизирует бизнес-процессы с помощью ИИ: от анализа данных и документов до действий в рабочих системах.
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              Объединяем экспертизу в машинном обучении, интеграциях и оптимизации процессов. Обладаем углублёнными знаниями 1С, но работаем и с CRM, Excel, почтой, ТСД, API и внутренними сервисами компании.
            </p>
          </div>
        </div>
      </div>

      {/* Expertise and implementation infographic */}
      <section className="border-b border-white/[0.08] overflow-hidden" aria-label="Экспертиза и процесс внедрения">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.12]">
            {expertise.map((item, index) => (
              <RevealOnScroll key={item.area} delay={index * 0.08}>
                <article className={`h-full min-h-[250px] md:min-h-[270px] p-5 md:p-6 flex flex-col relative overflow-hidden ${index === 0 ? 'bg-primary' : 'bg-black'} text-white ${index < 2 ? 'border-b md:border-b-0 md:border-r border-white/[0.16]' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 ${index === 0 ? 'bg-black' : 'bg-primary'}`} aria-hidden="true" />
                    <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">{item.area}</span>
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-2 py-3 md:py-2">
                    <div className="relative z-10 min-w-0 max-w-[54%]">
                      <div className="font-serif text-5xl lg:text-[3.4rem] 2xl:text-6xl leading-none mb-2 text-white whitespace-nowrap">
                        {item.value}
                      </div>
                      <h3 className="text-sm 2xl:text-base font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-xs 2xl:text-sm leading-snug text-white/75">{item.caption}</p>
                    </div>
                    <div className="flex flex-1 justify-end scale-[0.92] lg:scale-100 origin-right">
                      <ExpertiseVisual type={item.visual} />
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5" aria-label={`Компетенции: ${item.markers.join(', ')}`}>
                    {item.markers.map((marker) => (
                      <span key={marker} className="inline-flex items-center gap-1.5 text-[10px] 2xl:text-[11px] uppercase tracking-[0.08em] text-white/75">
                        <span className={`w-1 h-1 ${index === 0 ? 'bg-black/70' : 'bg-primary'}`} aria-hidden="true" />
                        {marker}
                      </span>
                    ))}
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-10 md:mt-14 bg-black text-white border border-white/[0.12] overflow-hidden">
              <div className="p-7 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-b border-white/[0.12]">
                <div>
                  <div className="text-[11px] text-primary uppercase tracking-[0.15em] mb-4">Как запускаем решение</div>
                  <h3 className="font-serif text-4xl md:text-5xl text-white leading-tight">От задачи до эффекта</h3>
                </div>
                <div className="font-mono text-xs uppercase text-white/55">4 шага · 1 рабочий контур</div>
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-4">
                <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-20 h-1 bg-white/10" aria-hidden="true">
                  <div className="h-full bg-primary" />
                </div>

                {implementationSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className={`relative p-6 md:p-8 ${index < 3 ? 'border-b lg:border-b-0 lg:border-r border-white/[0.12]' : ''}`}
                  >
                    <div className="absolute top-4 left-4 w-7 h-7 bg-white text-black font-mono text-[10px] flex items-center justify-center z-10">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {index < 3 && (
                      <ArrowRight className="hidden lg:block absolute z-20 top-[70px] -right-3 w-6 h-6 p-1 bg-primary text-white" aria-hidden="true" />
                    )}

                    <StepIllustration type={step.visual} />

                    <h4 className="font-serif text-2xl text-white mb-2">{step.title}</h4>
                    <p className="text-xs text-white/60 min-h-8">{step.caption}</p>
                    <div className="mt-6 pt-4 border-t border-white/[0.12] flex items-center gap-2 text-sm font-semibold text-white">
                      <span className="w-2 h-2 bg-primary" aria-hidden="true" />
                      {step.result}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Mission */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <RevealOnScroll>
              <div className="p-10 border-r border-white/[0.08]">
                <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Миссия</h2>
                <h3 className="font-serif text-3xl text-white tracking-tight leading-tight mb-5">
                  Делаем ИИ доступным<br />для каждого бизнеса
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Верим, что искусственный интеллект — это не привилегия корпораций, а инструмент для бизнеса любого масштаба. Создаём решения, которые встраиваются в существующие процессы без болезненных трансформаций.
                </p>
              </div>
            </RevealOnScroll>

            {/* Values */}
            <RevealOnScroll delay={0.1}>
              <div className="p-10">
                <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Принципы</h2>
                <div className="space-y-5">
                  {values.map((v, i) => (
                    <div key={i} className="flex gap-4 py-4 border-b border-white/[0.06] last:border-0">
                      <div className="w-6 h-6 border border-primary/35 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[10px] font-mono text-signal">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">{v.title}</h3>
                        <p className="text-xs text-white/80 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Automation directions */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-16">
          <RevealOnScroll>
            <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Какие процессы автоматизируем</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
              {automationDirections.map((direction) => (
                <Link
                  key={direction.title}
                  to={direction.to}
                  className="group p-7 border-r border-b border-white/[0.08] hover:bg-white/[0.025] transition-colors"
                >
                  <h3 className="text-base font-semibold text-white mb-3 group-hover:text-primary transition-colors">{direction.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">{direction.description}</p>
                  <span className="text-xs text-white/75 group-hover:text-white transition-colors">Смотреть решения →</span>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* 1C expertise */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-16">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Экспертиза 1С</h2>
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-tight mb-5">
                  Углублённые знания 1С<br />для внедрения ИИ в работу бизнеса
                </h3>
                <p className="text-sm text-white/80 leading-relaxed max-w-xl">
                  1С — одна из ключевых систем в операционном контуре многих компаний. Поэтому мы проектируем ИИ-сценарии с учётом реальных данных, прав доступа и документов, а не как внешнюю надстройку без связи с процессом.
                </p>
              </div>
              <div className="border-t border-l border-white/[0.08]">
                {oneCExpertise.map((item, index) => (
                  <div key={item.title} className="grid grid-cols-[auto_1fr] gap-5 p-6 border-r border-b border-white/[0.08]">
                    <span className="font-mono text-xs text-signal pt-0.5">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <CTASection variant="about" />
    </div>
  );
}
