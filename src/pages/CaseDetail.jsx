import React from 'react';
import { useParams } from 'react-router-dom';
import CanonicalLink from '../components/shared/CanonicalLink';
import ResponsiveImage, { getOptimizedImageUrl } from '../components/shared/ResponsiveImage';
import SEOHead from '../components/shared/SEOHead';
import PageNotFound from '../lib/PageNotFound';
import { getCaseStudy, caseAuthor } from '../lib/caseStudies';
import { SITE_URL, toAbsoluteUrl } from '../lib/seoConfig';
import { imageVariants } from '../lib/imageVariants.generated';
import { getCaseSolution } from '../lib/caseStudies';

export default function CaseDetail() {
  const { slug } = useParams();
  const caseStudy = getCaseStudy(slug);
  const solution = caseStudy && getCaseSolution(caseStudy);
  if (!caseStudy) return <PageNotFound />;
  const canonical = `/cases/${caseStudy.slug}/`;
  const url = `${SITE_URL}${canonical}`;
  const ogImage = toAbsoluteUrl(getOptimizedImageUrl(caseStudy.coverImage, 1200, 'webp'));
  const image = imageVariants[caseStudy.coverImage];
  const ogWidth = image.webp.find((variant) => variant.width >= 1200)?.width || image.width;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', '@id': `${url}#article`,
        headline: caseStudy.title, description: caseStudy.excerpt,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        image: [ogImage], inLanguage: 'ru-RU',
        dateModified: caseStudy.dateModified,
        author: caseAuthor,
        publisher: { '@type': 'Organization', name: 'ООО ТехКон', url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Кейсы', item: `${SITE_URL}/cases/` },
          { '@type': 'ListItem', position: 3, name: caseStudy.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="min-h-screen bg-black text-white">
      <SEOHead title={caseStudy.seoTitle} description={caseStudy.excerpt} canonical={canonical} ogImage={ogImage} ogImageWidth={ogWidth} ogImageHeight={Math.round(image.height * ogWidth / image.width)} ogType="article" schemaJson={schema} />
      <header className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-8 md:py-20 lg:px-12">
          <nav aria-label="Хлебные крошки" className="text-xs text-white/60"><CanonicalLink to="/" className="hover:text-white">Главная</CanonicalLink><span className="mx-3">/</span><CanonicalLink to="/cases" className="hover:text-white">Кейсы</CanonicalLink></nav>
          <p className="mt-10 text-xs uppercase tracking-[0.16em] text-signal">{caseStudy.category}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {solution && <CanonicalLink to={`/${solution.slug}`} className="inline-flex rounded-sm border border-primary/35 bg-primary/10 px-3 py-1.5 text-xs text-white transition-colors hover:border-primary/60">Решение: {solution.label}</CanonicalLink>}
            {caseStudy.service && <CanonicalLink to={caseStudy.service.path} className="inline-flex rounded-sm border border-white/[0.18] px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-white/40 hover:text-white">Услуга: {caseStudy.service.label}</CanonicalLink>}
          </div>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] md:text-6xl">{caseStudy.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75">{caseStudy.excerpt}</p>
          <p className="mt-6 text-sm leading-relaxed text-white/60">Автор: {caseAuthor.name}, специалист компании ООО ТехКон.<br />Обновлено: <time dateTime={caseStudy.dateModified}>{caseStudy.dateModified.split('-').reverse().join('.')}</time></p>
        </div>
      </header>
      <main className="mx-auto max-w-[1440px] px-5 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <div className="min-w-0 space-y-10 text-base leading-relaxed text-white/75 md:text-lg">
            {caseStudy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-3xl text-white md:text-4xl">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.table && <div className="mt-8 overflow-hidden border border-white/[0.12] bg-white/[0.015]"><div className="overflow-x-auto"><table className="min-w-[680px] w-full text-left text-sm"><thead className="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-white/60"><tr>{section.table.columns.map((column) => <th key={column} className="px-5 py-4 font-medium">{column}</th>)}</tr></thead><tbody className="divide-y divide-white/[0.1] text-white/75">{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell} className="px-5 py-4 align-top leading-relaxed">{cell}</td>)}</tr>)}</tbody></table></div><p className="border-t border-white/[0.1] px-5 py-4 text-sm leading-relaxed text-white/60">{section.table.caption}</p></div>}
                {section.visual && <figure className="mt-8 overflow-hidden border border-white/[0.12] bg-white/[0.015]"><ResponsiveImage src={section.visual.image} mobileSrc={section.visual.mobileImage} alt={section.visual.alt} sizes="(min-width: 1024px) 720px, 100vw" className={section.visual.mobileImage ? 'aspect-[9/16] w-full object-cover md:aspect-[16/10]' : 'aspect-[16/10] w-full object-cover'} /><figcaption className="border-t border-white/[0.1] px-5 py-4 text-sm leading-relaxed text-white/60">{section.visual.caption}</figcaption></figure>}
              </section>
            ))}
            {caseStudy.reportSetups?.length > 0 && <section className="border-t border-white/[0.12] pt-10"><p className="text-xs uppercase tracking-[0.16em] text-signal">Настройки 1С:УТ 11.5</p><h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">Какие отчёты использовали</h2><p className="mt-4">Ниже — схемы настройки типовых отчётов на условных данных. Они показывают состав полей, отборов и сравнений, которые использовал агент.</p><div className="mt-8 space-y-8">{caseStudy.reportSetups.map((report) => <article key={report.title} className="overflow-hidden border border-white/[0.12] bg-white/[0.015]"><ResponsiveImage src={report.image} alt={report.alt} sizes="(min-width: 1024px) 720px, 100vw" className="aspect-[16/10] w-full object-cover" /><div className="p-6"><h3 className="font-serif text-2xl text-white">{report.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/70">{report.purpose}</p><dl className="mt-6 grid gap-x-6 gap-y-4 border-t border-white/[0.1] pt-5 sm:grid-cols-2">{report.settings.map(([label, value]) => <div key={label}><dt className="text-[10px] uppercase tracking-[0.14em] text-white/50">{label}</dt><dd className="mt-1 text-sm text-white/85">{value}</dd></div>)}</dl></div></article>)}</div></section>}
          </div>
          <aside className="border border-white/[0.12] bg-white/[0.015] p-6 lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.16em] text-signal">Параметры проекта</p>
            <dl className="mt-6 space-y-5">
              {[
                ['Конфигурация', caseStudy.facts.configuration],
                ['Анализ до внедрения', caseStudy.facts.analysisBefore],
                ['Анализ после внедрения', caseStudy.facts.analysisAfter],
                ['Стоимость внедрения', caseStudy.facts.implementationCost],
                ['Поддержка', caseStudy.facts.monthlySupport],
                ['Модели ИИ', caseStudy.facts.aiModels],
                ['Размещение модели', caseStudy.facts.modelDeployment],
                ['Подключение к интернету', caseStudy.facts.internetRequirement],
              ].filter(([, value]) => value).map(([label, value]) => <div key={label} className="border-t border-white/[0.1] pt-4 first:border-t-0 first:pt-0"><dt className="text-[10px] uppercase tracking-[0.14em] text-white/50">{label}</dt><dd className="mt-1.5 text-sm font-medium text-white">{value}</dd></div>)}
            </dl>
          </aside>
        </div>
      </main>
      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-5xl px-5 py-8 md:px-8 lg:px-12">
          <p className="border-l-2 border-primary/60 pl-4 text-sm leading-relaxed text-white/60">Мы соблюдаем соглашение о конфиденциальности и не раскрываем данные, название и внутренние процессы клиента. Иллюстрации показывают демонстрационные интерфейсы на условных данных и не относятся к данным конкретного заказчика.</p>
        </div>
      </section>
    </article>
  );
}
