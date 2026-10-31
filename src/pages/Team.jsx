import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { teamAuthors } from '../lib/teamAuthors';
import { UserRound } from 'lucide-react';
import CanonicalLink from '../components/shared/CanonicalLink';
import SEOHead from '../components/shared/SEOHead';
import { pageSEO, SITE_URL } from '../lib/seoConfig';

/** @type {Array<{id: string, name: string, role: string, description: string, favorite: string, photo: string, photoBase: string, photoWidth?: number, photoHeight?: number, certificates?: string[], courses?: string[], specializations?: string[]}>} */
const employees = [
  { ...teamAuthors.lomakin, photo: '/team/sergey-lomakin.png', photoBase: '/team/sergey-lomakin', photoWidth: 299, photoHeight: 316, description: 'Руководитель проектов и специалист по внедрению 1С.', favorite: 'Автоматизация производства и решения на базе 1С и ИИ.', certificates: [
    '1С:Специалист по платформе',
    '1С:Специалист-консультант по программным продуктам',
    '1С:Руководитель проекта',
    '1С:Специалист-консультант ERP',
  ] },
  { ...teamAuthors.sergeev, description: 'Руководитель проектов, специалист по настройке и обучению ИИ-моделей, действующий преподаватель.', favorite: 'Автоматизация маркетплейсов и управленческой отчётности, интеграции с различными системами.', photo: '/team/dmitrii-sergeev.png', photoBase: '/team/dmitrii-sergeev', courses: [
    'Проект Феникс — как добиться ускорения в ИТ',
    'Метрики продукта',
    'Трансформация ИТ в традиционных компаниях',
    'Базовый тренинг по Канбан-методу',
    'PM Hard Skills: Release',
    'BA Hard Skills',
    'Школа Менеджеров',
  ] },
  { name: 'Васянович Татьяна', role: 'Руководитель бухгалтерского подразделения', photo: '/team/tatyana-vasyanovich.png', photoBase: '/team/tatyana-vasyanovich', id: 'vasyanovich-tatyana', description: 'Руководитель проектов по бухгалтерскому и налоговому учёту. Куратор законодательных вопросов в области регламентированного учёта.', favorite: 'Проекты с глубокой автоматизацией бухгалтерского учёта на базе ERP.', certificates: [
    '1С:Профессионал по платформе',
    '1С:Специалист-консультант по бухгалтерии',
    '1С:Специалист-консультант по управлению торговлей',
  ], specializations: [
    'Учёт по МСФО',
    'Учёт внешнеэкономической деятельности (ВЭД)',
  ] },
];

export default function Team() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return undefined;
    const frame = requestAnimationFrame(() => document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [hash]);
  const schema = [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'О компании', item: `${SITE_URL}/about/` },
      { '@type': 'ListItem', position: 3, name: 'Ключевые сотрудники', item: `${SITE_URL}/about/team/` },
    ] },
    { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Ключевые сотрудники AI TehCon', itemListElement: employees.map((employee, index) => ({
      '@type': 'ListItem', position: index + 1, item: { '@type': 'Person', name: employee.name, jobTitle: employee.role,
        url: `${SITE_URL}/about/team/#${employee.id}`, worksFor: { '@type': 'Organization', name: 'AI TehCon', url: SITE_URL },
        ...(employee.photo && { image: `${SITE_URL}${employee.photoWidth ? employee.photoBase + ".webp" : employee.photoBase + "-851.webp"}` }),
      },
    })) },
  ];
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead {...pageSEO.team} schemaJson={schema} />
      <section className="border-b border-white/10">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 2xl:px-16 py-16 md:py-24">
          <nav aria-label="Навигационная цепочка" className="text-sm text-white/65 mb-10"><CanonicalLink to="/about/" className="hover:text-white">О компании</CanonicalLink><span className="mx-3" aria-hidden="true">/</span><span aria-current="page" className="text-white">Ключевые сотрудники</span></nav>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div><p className="text-xs uppercase tracking-[0.18em] text-signal mb-6">AI TehCon / Люди</p><h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.06] tracking-tight">Ключевые сотрудники<span className="text-primary">.</span></h1></div>
            <p className="text-lg text-white/75 leading-relaxed max-w-xl">Люди, которые отвечают за развитие компании, автоматизацию и бухгалтерское направление.</p>
          </div>
        </div>
      </section>
      <section aria-label="Сотрудники"><div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 2xl:px-16 py-16 md:py-24">
        <div className="grid md:grid-cols-3 border-t border-l border-white/15">
          {employees.map((employee) => <article id={employee.id} key={employee.name} className="scroll-mt-24 border-r border-b border-white/15 flex flex-col">
            <div className="aspect-[4/3] bg-white/[0.035] border-b border-white/10 flex items-center justify-center relative overflow-hidden">{employee.photo ? <picture className="block w-full h-full"><source type="image/webp" srcSet={employee.photoWidth ? `${employee.photoBase}.webp ${employee.photoWidth}w` : `${employee.photoBase}-480.webp 480w, ${employee.photoBase}-851.webp 851w`} sizes="(min-width: 768px) 33vw, 100vw" /><img src={employee.photo} alt={`Фото: ${employee.name}`} width={employee.photoWidth || 851} height={employee.photoHeight || 1280} loading="lazy" decoding="async" className="w-full h-full object-cover object-[center_32%]" /></picture> : <UserRound aria-hidden="true" className="w-16 h-16 text-white/20" strokeWidth={1} />}</div>
            <div className="p-6 md:p-8 flex flex-col flex-1"><p className="text-xs uppercase tracking-widest text-signal leading-relaxed min-h-10">{employee.role}</p><h2 className="font-serif text-3xl mt-3">{employee.name}</h2>{employee.description && <p className="mt-4 text-sm text-white/75 leading-relaxed">{employee.description}</p>}{employee.favorite && <div className="mt-6"><h3 className="text-sm font-semibold">Направления работы</h3><p className="mt-2 text-sm text-white/75 leading-relaxed">{employee.favorite}</p></div>}{employee.specializations && <div className="mt-6"><h3 className="text-sm font-semibold">Специализация</h3><ul className="mt-3 space-y-2 text-sm text-white/75 list-disc pl-5 leading-relaxed">{employee.specializations.map((specialization) => <li key={specialization}>{specialization}</li>)}</ul></div>}
              <div className="mt-8 pt-5 border-t border-white/15 text-sm">
                <h3 className="font-semibold text-white">Сертификаты и обучение</h3>
                {employee.certificates && <ul className="mt-4 space-y-2 text-white/75 list-disc pl-5 leading-relaxed">{employee.certificates.map((certificate) => <li key={certificate}>{certificate}</li>)}</ul>}
                {employee.courses && <ul className="mt-4 space-y-2 text-white/75 list-disc pl-5 leading-relaxed"><li>Сертификат разработчика платформы WebSoft HCM</li><li><a className="text-white underline underline-offset-4 hover:text-primary" href="/certificates/dmitrii-sergeev-one-million-prompters.png" target="_blank" rel="noopener noreferrer">One Million Prompters — сертификат ↗</a></li>{employee.courses.map((course) => <li key={course}>{course}</li>)}</ul>}
              </div></div>
          </article>)}
        </div>
      </div></section>
      <section className="border-t border-white/10"><div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 2xl:px-16 py-16 md:py-20 flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs uppercase tracking-[0.18em] text-signal mb-4">AI TehCon</p><h2 className="font-serif text-3xl md:text-4xl">Обсудим ваш проект</h2><p className="mt-4 text-white/70 leading-relaxed max-w-xl">Расскажите о вашей задаче — обсудим, как команда AI TehCon может помочь с её решением.</p></div><CanonicalLink to="/contacts/" className="signal-button inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold">Связаться с нами <span aria-hidden="true">↗</span></CanonicalLink></div></section>
    </div>
  );
}
