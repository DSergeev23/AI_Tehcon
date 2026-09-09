import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import CanonicalLink from '../components/shared/CanonicalLink';
import SEOHead from '../components/shared/SEOHead';
import { SITE_URL } from '../lib/seoConfig';
import CatalogCard from '../components/catalog/CatalogCard';
import { getDirectionGroups } from '../lib/catalog/directionCatalog';
import { createCatalogItemListSchema } from '../lib/structuredData';
import { directionExamples } from '../lib/directionExamples';
import { DirectionExample, DirectionPricing } from '../components/shared/DirectionEvidence';

export default function Direction({ direction }) {
  const d = direction;
  const example = directionExamples[d.slug];
  const canonical = `/${d.slug}/`;
  const groups = getDirectionGroups(d.slug);
  const products = groups.flatMap((group) => group.products);
  const container = 'mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12';
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead title={d.title} description={d.description} canonical={canonical} schemaJson={[
        createCatalogItemListSchema(products, { name: d.label, description: d.description, url: `${SITE_URL}${canonical}` }),
        { '@context': 'https://schema.org', '@type': 'Service', name: d.label, description: d.description, url: `${SITE_URL}${canonical}`, provider: { '@type': 'Organization', name: 'AI TehCon', url: SITE_URL } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: d.label, item: `${SITE_URL}${canonical}` }] },
      ]} />
      <header className="relative overflow-hidden border-b border-white/10 grid-lines">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_20%,rgba(165,29,52,0.25),transparent_60%)]" />
        <div className={`${container} relative py-12 md:py-24`}>
          <nav aria-label="Хлебные крошки" className="mb-12 text-xs text-white/60"><CanonicalLink to="/" className="hover:text-white">Главная</CanonicalLink><span className="mx-3" aria-hidden="true">/</span><span aria-current="page">{d.label}</span></nav>
          <p className="mb-6 text-xs uppercase tracking-[0.16em] text-signal">{d.eyebrow}</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[1.04] tracking-tight md:text-7xl">{d.label}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">{d.intro}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CanonicalLink to="/contacts" className="signal-button inline-flex items-center gap-3 rounded-sm px-6 py-3 font-medium">Обсудить задачу <Plus size={18} /></CanonicalLink>
            <a href="#tasks" className="inline-flex items-center gap-3 rounded-sm border border-white/20 px-6 py-3 hover:bg-white/5">Что можно автоматизировать <ArrowRight size={18} /></a>
            <a href="#services" className="inline-flex items-center gap-3 px-3 py-3 text-white/80 underline underline-offset-4 hover:text-white">Выбрать услугу <ArrowRight size={18} /></a>
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-white/55">{d.audience}</p>
        </div>
      </header>
      <section id="tasks" className={`${container} scroll-mt-24 py-16 md:py-20`}>
        <p className="text-xs uppercase tracking-widest text-signal">Задачи направления</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">С чего можно начать</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {d.tasks.map(([title, body], i) => <div key={title} className="border border-white/10 bg-white/[0.02] p-7 md:p-9"><span className="font-mono text-xs text-primary">0{i + 1}</span><h3 className="mt-5 text-xl font-medium">{title}</h3><p className="mt-3 leading-relaxed text-white/65">{body}</p></div>)}
        </div>
      </section>
      <DirectionExample example={example} />
      <nav aria-label="Разделы направления" className={`${container} flex flex-wrap gap-5 py-6 text-sm text-white/75`}>
        <a href="#services" className="hover:text-white">Выбрать услугу ↓</a>
        <a href="#pricing" className="hover:text-white">Стоимость и условия ↓</a>
      </nav>
      <section id="services" aria-labelledby="services-title" className={`${container} scroll-mt-24 pb-16 md:pb-20`}>
        <p className="text-xs uppercase tracking-widest text-signal">Услуги направления</p>
        <h2 id="services-title" className="mt-4 font-serif text-4xl md:text-5xl">Выберите решение под вашу задачу</h2>
        <nav aria-label="Группы услуг" className="mt-10 mb-12 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => <a key={group.id} href={`#${group.id}`} className="group flex min-h-12 items-center justify-between gap-3 rounded-sm border border-white/20 bg-gradient-to-b from-white/[0.08] to-white/[0.015] px-3 py-1.5 text-xs text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_5px_14px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-px hover:border-primary/60 hover:from-white/[0.12] hover:to-white/[0.04] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_18px_rgba(0,0,0,0.38)] active:translate-y-0">
            <span className="leading-snug">{group.label}</span>
            <span className="shrink-0 font-mono text-xs text-primary/80">{group.products.length}</span>
          </a>)}
        </nav>
        <div className="space-y-12">
          {groups.map((group) => <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-48">
            <h3 id={`${group.id}-title`} className="mb-5 text-xl font-medium md:text-2xl">{group.label}</h3>
            <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {group.products.map((product) => <CatalogCard key={product.id} product={product} headingLevel="h4" expanded />)}
            </div>
          </section>)}
        </div>
      </section>
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className={`${container} grid gap-10 py-16 md:grid-cols-2 md:py-20`}>
          <div><p className="text-xs uppercase tracking-widest text-signal">Под ваши системы</p><h2 className="mt-4 font-serif text-4xl">Как выстраиваем работу</h2></div>
          <div><p className="leading-relaxed text-white/75">{d.integration}</p><p className="mt-6 border-l-2 border-primary pl-5 text-lg leading-relaxed">{d.outcome}</p></div>
        </div>
      </section>
      <section className={`${container} py-16 md:py-20`}>
        <h2 className="font-serif text-4xl md:text-5xl">От задачи к рабочему сценарию</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {[['Разбираем процесс', 'Обсуждаем задачу, данные и ограничения. Определяем объём работ, стоимость и критерии результата.'], ['Проверяем на пилоте', 'Собираем ограниченный сценарий и проверяем его на согласованных примерах. Оцениваем качество и участие сотрудников.'], ['Внедряем и сопровождаем', 'Подключаем согласованные системы, передаём инструкции и договариваемся о поддержке.']].map(([title, body], i) => <li key={title}><span className="text-sm text-primary">0{i + 1} /</span><h3 className="mt-4 text-xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/65">{body}</p></li>)}
        </ol>
      </section>
      <DirectionPricing example={example} />
      <section className={`${container} py-16 md:py-20`}>
        <h2 className="mb-8 font-serif text-4xl">Частые вопросы</h2>
        {d.faq.map(([question, answer]) => <details key={question} className="border-t border-white/15 py-5"><summary className="cursor-pointer text-lg">{question}</summary><p className="mt-4 max-w-3xl leading-relaxed text-white/65">{answer}</p></details>)}
      </section>
      <section className="border-t border-primary/30 bg-primary/[0.07]">
        <div className={`${container} py-16 md:py-20`}><p className="text-xs uppercase tracking-widest text-signal">Следующий шаг</p><h2 className="mt-4 font-serif text-4xl md:text-5xl">Обсудим ваш процесс</h2><p className="mt-5 max-w-2xl leading-relaxed text-white/70">Расскажите, какую задачу хотите автоматизировать и какими системами пользуетесь. Определим, с чего начать и что потребуется для оценки проекта.</p><div className="mt-8 flex flex-wrap items-center gap-6"><CanonicalLink to="/contacts" className="signal-button inline-flex items-center gap-3 rounded-sm px-6 py-3 font-medium">Связаться с командой <ArrowRight size={18} /></CanonicalLink><a href="#services" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">Посмотреть услуги направления</a></div></div>
      </section>
    </div>
  );
}
