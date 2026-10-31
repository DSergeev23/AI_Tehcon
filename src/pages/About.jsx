import React from 'react';
import CanonicalLink from '../components/shared/CanonicalLink';
import SEOHead from '../components/shared/SEOHead';
import { pageSEO } from '../lib/seoConfig';
import { caseStudies } from '../lib/caseStudies';
import { directions } from '../lib/directions';

const featuredResults = [
  { slug: 'telegram-lead-generator-optics-network', result: 'До 40 лидов в неделю', detail: 'Ранее — до 10 в неделю', description: 'ИИ-агент помогает находить клиентов и передаёт заинтересованных в 1С:CRM.' },
  { slug: 'it-integrator-daily-news-autoposting', result: '8 часов → 0 в неделю', detail: 'Ручная работа с публикациями', description: 'ИИ-агент готовит новости и публикует их на сайте и в Telegram.' },
];

const expertise = [
  ['01', 'ИИ для рабочих задач', 'Обрабатываем документы и данные, помогаем искать информацию и создаём ИИ-сценарии для повседневной работы.'],
  ['02', '1С и бизнес-процессы', 'Учитываем логику учёта, документы и права доступа при проектировании решений для 1С.'],
  ['03', 'Интеграции', 'Связываем ИИ с CRM, Excel, почтой, API и другими системами, в которых уже работают сотрудники.'],
];
const steps = [
  ['Знакомимся с задачей', 'Разбираем процесс, определяем сложности и результат, который нужен бизнесу.'],
  ['Предлагаем решение', 'Обсуждаем сценарий, источники данных, интеграции и критерии проверки результата.'],
  ['Проверяем на практике', 'Согласовываем объём первого этапа и проверяем решение на рабочих сценариях.'],
  ['Внедряем и развиваем', 'Подключаем решение к рабочему процессу и обсуждаем дальнейшее сопровождение.'],
];
const principles = [
  ['Понятная цель', 'До начала работ обсуждаем задачу и то, как будем оценивать результат.'],
  ['Работа с реальными процессами', 'Учитываем существующие системы, данные и роль сотрудников в процессе.'],
  ['Контроль доступа', 'При проектировании сценария учитываем права пользователей и требования к данным.'],
  ['Развитие после запуска', 'Обсуждаем поддержку и дальнейшие изменения с учётом потребностей проекта.'],
];
const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'AI TehCon',
  url: 'https://ai-tehcon.ru', description: 'ИИ-автоматизация бизнес-процессов и интеграция с рабочими системами.',
  email: 'hello@ai-tehcon.ru', telephone: '+7 (919) 213-71-11',
};
const wrap = 'w-full max-w-[1440px] mx-auto px-5 md:px-8 2xl:px-16';
const label = 'text-xs uppercase tracking-[0.18em] text-signal';
const heading = 'font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white tracking-tight';

export default function About() {
  const featured = featuredResults.map((result) => ({ ...caseStudies.find((item) => item.slug === result.slug), ...result }));
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead {...pageSEO.about} schemaJson={orgSchema} />
      <section className="border-b border-white/10 relative overflow-hidden">
        <div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-end`}>
          <div className="page-enter">
            <p className={`${label} mb-7`}>О компании / AI TehCon</p>
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.06] tracking-tight">Внедряем ИИ в процессы компании<span className="text-primary">.</span></h1>
          </div>
          <div className="page-enter page-enter-delay lg:pb-1">
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">Помогаем сократить ручную работу и связать ИИ с 1С, CRM, документами и другими рабочими системами.</p>
            <div className="flex flex-wrap gap-4 mt-9">
              <CanonicalLink to="/contacts/" className="signal-button px-7 py-3 text-sm font-semibold">Обсудить задачу <span aria-hidden="true">↗</span></CanonicalLink>
              <CanonicalLink to="/cases/" className="border border-white/25 px-7 py-3 text-sm hover:border-primary transition-colors">Посмотреть кейсы <span aria-hidden="true">→</span></CanonicalLink>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-white/10">
        <div className={`${wrap} py-20 md:py-28 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16`}>
          <p className={label}>01 / О компании</p>
          <div className="max-w-3xl"><h2 className={`${heading} mb-8`}>Технологии, встроенные в работу бизнеса</h2>
            <p className="text-lg text-white/80 leading-relaxed">AI TehCon помогает компаниям применять искусственный интеллект в повседневных процессах: от работы с документами и данными до действий в информационных системах.</p>
            <p className="mt-5 text-base text-white/70 leading-relaxed">Мы объединяем опыт автоматизации, знания 1С и интеграций с возможностями современных ИИ-инструментов. Начинаем с задачи бизнеса и подбираем технологии под существующий рабочий процесс.</p>
          </div>
        </div>
      </section>
      <section className="border-b border-white/10"><div className={`${wrap} py-20 md:py-28`}>
        <p className={`${label} mb-5`}>02 / Экспертиза</p><h2 className={`${heading} max-w-3xl mb-12`}>Соединяем ИИ и рабочие системы</h2>
        <div className="grid md:grid-cols-3 border-t border-l border-white/15">{expertise.map(([num,title,desc],i)=><article key={num} className={`p-7 md:p-8 border-r border-b border-white/15 min-h-[260px] flex flex-col ${i === 0 ? 'bg-primary' : ''}`}><span className="font-mono text-sm text-white/70">{num} /</span><h3 className="font-serif text-3xl mt-12 mb-4">{title}</h3><p className="text-sm leading-relaxed text-white/80">{desc}</p></article>)}</div>
      </div></section>
      <section className="border-b border-white/10"><div className={`${wrap} py-20 md:py-28`}>
        <p className={`${label} mb-5`}>03 / Направления</p><h2 className={`${heading} mb-5`}>Решения для задач бизнеса</h2>
        <p className="text-white/70 leading-relaxed max-w-2xl mb-12">Посмотрите, как применяем ИИ в разных направлениях: от работы с 1С до управления контентом и продажами.</p>
        <div className="grid md:grid-cols-2 border-t border-white/15">{directions.map((direction, i)=><article key={direction.slug} className="py-8 md:p-8 border-b border-white/15 md:odd:border-r flex flex-col"><span className="font-mono text-xs text-signal">{String(i+1).padStart(2,'0')}</span><h3 className="font-serif text-2xl md:text-3xl mt-5 mb-3">{direction.label}</h3><p className="text-white/70 leading-relaxed max-w-lg flex-1">{direction.intro}</p><CanonicalLink to={`/${direction.slug}/`} className="inline-flex mt-6 text-sm hover:text-primary transition-colors">Подробнее <span className="ml-2" aria-hidden="true">→</span></CanonicalLink></article>)}</div>
      </div></section>
      <section className="border-b border-white/10"><div className={`${wrap} py-20 md:py-28`}>
        <p className={`${label} mb-5`}>04 / Подход</p><h2 className={`${heading} mb-12`}>От задачи до рабочего решения</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15">{steps.map(([title,desc],i)=><article key={title} className="p-7 border-r border-b border-white/15"><span className="font-mono text-primary text-sm">{String(i+1).padStart(2,'0')} / 04</span><h3 className="font-serif text-2xl mt-10 mb-4">{title}</h3><p className="text-sm text-white/70 leading-relaxed">{desc}</p></article>)}</div>
      </div></section>
      <section className="border-b border-white/10"><div className={`${wrap} py-20 md:py-28`}>
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12"><div><p className={`${label} mb-5`}>05 / Практика</p><h2 className={heading}>Проекты и результаты</h2></div><CanonicalLink to="/cases/" className="text-sm hover:text-primary">Все кейсы <span aria-hidden="true">→</span></CanonicalLink></div>
        <div className="grid md:grid-cols-2 gap-4">{featured.map(item=><article key={item.slug} className="border border-white/15 p-5 sm:p-7 md:p-9 flex flex-col"><p className="text-xs uppercase tracking-widest text-signal">{item.category}</p><h3 className="font-serif text-2xl md:text-3xl mt-5 mb-4">{item.title}</h3><div className="border-l-2 border-primary pl-4 my-2"><p className="font-serif text-2xl md:text-3xl text-white">{item.result}</p><p className="text-sm text-white/70 mt-1">{item.detail}</p></div><p className="text-sm md:text-base text-white/70 leading-relaxed mt-4 flex-1">{item.description}</p><CanonicalLink to={`/cases/${item.slug}/`} className="mt-5 md:mt-7 text-sm hover:text-primary">Читать кейс <span aria-hidden="true">→</span></CanonicalLink></article>)}</div>
      </div></section>
      <section className="border-b border-white/10"><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-2 gap-12`}>
        <div><p className={`${label} mb-5`}>06 / Принципы</p><h2 className={heading}>Что важно в совместной работе</h2></div>
        <div className="border-t border-white/15">{principles.map(([title,desc])=><div key={title} className="py-6 border-b border-white/15"><h3 className="text-lg font-semibold mb-2">{title}</h3><p className="text-white/70 leading-relaxed">{desc}</p></div>)}</div>
      </div></section>
      <section><div className={`${wrap} py-20 md:py-28 grid lg:grid-cols-2 gap-12`}><div><p className={`${label} mb-5`}>07 / Контакты</p><h2 className={`${heading} mb-6`}>Обсудим вашу задачу</h2><p className="text-white/70 leading-relaxed max-w-lg">Расскажите, какой процесс хотите улучшить. Обсудим задачу и возможные шаги автоматизации.</p><CanonicalLink to="/contacts/" className="signal-button inline-flex mt-8 px-7 py-3 text-sm font-semibold">Оставить заявку <span className="ml-2" aria-hidden="true">↗</span></CanonicalLink></div><div className="border-t border-white/15"><div className="py-5 border-b border-white/15"><p className="text-xs uppercase tracking-widest text-white/60 mb-3">Телефоны</p><div className="flex flex-col gap-2"><a className="hover:text-primary" href="tel:+79192137111">+7 (919) 213-71-11</a><a className="hover:text-primary" href="tel:+79192733552">+7 (919) 273-35-52</a></div></div><div className="py-5 border-b border-white/15"><p className="text-xs uppercase tracking-widest text-white/60 mb-3">Email</p><a className="hover:text-primary" href="mailto:hello@ai-tehcon.ru">hello@ai-tehcon.ru</a></div><div className="py-5 border-b border-white/15"><p className="text-xs uppercase tracking-widest text-white/60 mb-3">Telegram</p><a className="hover:text-primary" href="https://t.me/ai_tehcon_business" target="_blank" rel="noopener noreferrer">@ai_tehcon_business <span aria-hidden="true">↗</span></a></div></div></div></section>
    </div>
  );
}
