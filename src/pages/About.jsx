import React from 'react';
import CanonicalLink from '../components/shared/CanonicalLink';
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
  { title: 'Находим потери', caption: 'Ручная работа · задержки · ошибки', result: 'Точка роста', visual: 'process' },
  { title: 'Соединяем системы', caption: '1С · CRM · Excel · документы', result: 'Единые данные', visual: 'data' },
  { title: 'Добавляем интеллект', caption: 'Распознать · проверить · решить', result: 'ИИ-сценарий', visual: 'ai' },
  { title: 'Получаем эффект', caption: 'Быстрее · точнее · под контролем', result: 'Измеримый результат', visual: 'result' },
];

const atlasPositions = { process: '0% 0%', data: '100% 0%', ai: '0% 100%', result: '100% 100%' };

function StepIllustration({ type }) {
  return (
    <div className="relative h-52 flex items-center justify-center" aria-hidden="true">
      <div
        className="absolute w-44 h-44 2xl:w-52 2xl:h-52 bg-no-repeat"
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

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI TehCon",
  "url": "https://ai-tehcon.ru",
  "description": "AI TehCon — агентство ИИ автоматизации бизнес-процессов. Разработка AI решений и интеграция нейросетей.",
  "foundingDate": "2014",
  "areaServed": "RU",
  "knowsAbout": ["ИИ агенты", "автоматизация бизнеса", "машинное обучение", "нейросети"],
  "email": "hello@ai-tehcon.ru",
  "telephone": "+7 (919) 213-71-11",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Москва",
    "streetAddress": "2-й Вольный переулок, 11",
    "addressCountry": "RU"
  }
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
              О компании AI TehCon
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

      {/* Expertise */}
      <section className="border-b border-white/[0.08] overflow-hidden" aria-label="Экспертиза AI TehCon">
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
                  <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">От задачи до эффекта</h2>
                </div>
                <div className="font-mono text-xs uppercase text-white/55">4 шага · 1 рабочий контур</div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4">
                {implementationSteps.map((step, index) => (
                  <article key={step.title} className={`relative p-6 md:p-8 ${index < 3 ? 'border-b lg:border-b-0 lg:border-r border-white/[0.12]' : ''}`}>
                    <div className="absolute top-4 left-4 w-7 h-7 bg-white text-black font-mono text-[10px] flex items-center justify-center">{String(index + 1).padStart(2, '0')}</div>
                    {index < 3 && <ArrowRight className="hidden lg:block absolute z-20 top-[70px] -right-3 w-6 h-6 p-1 bg-primary text-white" aria-hidden="true" />}
                    <StepIllustration type={step.visual} />
                    <h3 className="font-serif text-2xl text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-white/60 min-h-8">{step.caption}</p>
                    <div className="mt-6 pt-4 border-t border-white/[0.12] flex items-center gap-2 text-sm font-semibold text-white">
                      <span className="w-2 h-2 bg-primary" aria-hidden="true" />{step.result}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* Values */}
      <section className="border-b border-white/[0.08]" aria-label="Принципы работы">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-12 md:py-14">
          <RevealOnScroll>
            <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Принципы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/[0.08]">
              {values.map((value, index) => (
                <div key={value.title} className="flex gap-4 p-5 border-r border-b border-white/[0.08]">
                  <span className="text-[10px] font-mono text-signal pt-0.5">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{value.title}</h3>
                    <p className="text-xs text-white/80 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 1C expertise */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-12 md:py-14">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-3xl">
                <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-4">1С в контуре бизнеса</h2>
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-tight mb-4">
                  Учитываем реальную логику учёта
                </h3>
                <p className="text-sm text-white/80 leading-relaxed max-w-xl">
                  Проектируем ИИ-сценарии с учётом данных, документов и прав доступа в 1С — и связываем их с CRM, Excel и другими рабочими системами.
                </p>
              </div>
              <CanonicalLink to="/ai-for-1c/" className="shrink-0 inline-flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                Решения для 1С <span aria-hidden="true">→</span>
              </CanonicalLink>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Contacts */}
      <section className="border-b border-white/[0.08]" aria-label="Контактные данные">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-14 md:py-16">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
              <div>
                <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-5">Контакты</h2>
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-tight mb-7">Обсудим вашу задачу</h3>
                <dl className="border-t border-white/[0.12]">
                  <div className="py-4 border-b border-white/[0.12]">
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-white/55 mb-2">Телефоны</dt>
                    <dd className="flex flex-col items-start gap-1.5">
                      <a href="tel:+79192137111" className="text-base text-white hover:text-primary transition-colors">+7 (919) 213-71-11</a>
                      <a href="tel:+79192733552" className="text-base text-white hover:text-primary transition-colors">+7 (919) 273-35-52</a>
                    </dd>
                  </div>
                  <div className="py-4 border-b border-white/[0.12]">
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-white/55 mb-2">Email</dt>
                    <dd><a href="mailto:hello@ai-tehcon.ru" className="text-base text-white hover:text-primary transition-colors">hello@ai-tehcon.ru</a></dd>
                  </div>
                  <div className="py-4 border-b border-white/[0.12]">
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-white/55 mb-2">Адрес</dt>
                    <dd className="text-base text-white">Москва, 2-й Вольный переулок, 11</dd>
                  </div>
                </dl>
                <CanonicalLink to="/contacts/" className="inline-flex mt-7 items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                  Оставить заявку <span aria-hidden="true">→</span>
                </CanonicalLink>
              </div>

              <div className="min-h-[340px] border border-white/[0.12] bg-white/[0.015] overflow-hidden">
                <iframe
                  title="Карта: Москва, 2-й Вольный переулок, 11"
                  src="https://www.google.com/maps?q=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%202-%D0%B9%20%D0%92%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA%2C%2011&output=embed"
                  className="block h-full min-h-[340px] w-full border-0 grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection variant="about" />
    </div>
  );
}
