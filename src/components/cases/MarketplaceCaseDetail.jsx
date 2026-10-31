import React from 'react';
import CanonicalLink from '../shared/CanonicalLink';
import CaseConfidentiality from './CaseConfidentiality';
import ResponsiveImage from '../shared/ResponsiveImage';
import SEOHead from '../shared/SEOHead';
import SectionsRenderer from '../product/SectionsRenderer';
import { movedCaseProducts } from '../../lib/catalog';
import { teamAuthors } from '../../lib/teamAuthors';
import { SITE_URL } from '../../lib/seoConfig';

export default function MarketplaceCaseDetail({ caseStudy }) {
  const product = movedCaseProducts.find(({ id }) => id === caseStudy.id);
  const author = teamAuthors[caseStudy.authorId];
  const canonical = `/cases/${caseStudy.slug}/`;
  const content = product.content || [];
  const imageInContent = content.some((block) => block.type === 'image' && block.value === caseStudy.image);
  const schema = [{ '@context': 'https://schema.org', '@type': 'Article', headline: caseStudy.title,
    description: caseStudy.description, mainEntityOfPage: `${SITE_URL}${canonical}`,
    author: { '@type': 'Person', name: author.name, jobTitle: author.role, url: `${SITE_URL}/about/team/#${author.id}` },
    image: [`${SITE_URL}/case-og/${caseStudy.slug}.jpg`], inLanguage: 'ru-RU',
    publisher: { '@type': 'Organization', name: 'AI TehCon', url: SITE_URL } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Кейсы', item: `${SITE_URL}/cases/` },
      { '@type': 'ListItem', position: 3, name: caseStudy.title, item: `${SITE_URL}${canonical}` },
    ] }];
  return <article className="min-h-screen bg-black text-white">
    <SEOHead title={`${caseStudy.title} — кейс AI TehCon`} description={caseStudy.description} canonical={canonical} ogImage={`${SITE_URL}/case-og/${caseStudy.slug}.jpg`} ogType="article" schemaJson={schema} />
    <header className="border-b border-white/10"><div className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-20">
      <nav aria-label="Хлебные крошки" className="text-xs text-white/60"><CanonicalLink to="/" className="hover:text-white">Главная</CanonicalLink><span className="mx-3">/</span><CanonicalLink to="/cases/" className="hover:text-white">Кейсы</CanonicalLink></nav>
      <p className="mt-10 text-xs uppercase tracking-widest text-signal">Кейс · Маркетплейсы</p>
      <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">{caseStudy.title}</h1>
      <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75">{caseStudy.description}</p>
      <p className="mt-6 text-sm text-white/60">Автор: <CanonicalLink to={`/about/team/#${author.id}`} className="text-white/85 underline underline-offset-4 hover:text-primary">{author.name}</CanonicalLink>, {author.role.toLowerCase()}.</p>
    </div></header>
    <div className="mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-16">{!imageInContent && <ResponsiveImage src={caseStudy.image} alt={caseStudy.alt} sizes="(min-width: 1024px) 960px, 100vw" className="w-full border border-white/10" />}<div className="mt-8"><SectionsRenderer content={content} fallbackText={product.fullDescription} /></div></div>
    <CaseConfidentiality />
    <section className="border-t border-white/10"><div className="mx-auto max-w-5xl px-5 md:px-8 py-16"><h2 className="font-serif text-4xl">Есть похожая задача?</h2><div className="mt-8 flex flex-wrap gap-4"><CanonicalLink to="/contacts/" className="signal-button px-6 py-3 font-medium">Обсудить задачу ↗</CanonicalLink><CanonicalLink to="/cases/" className="border border-white/20 px-6 py-3 hover:border-primary">Все кейсы →</CanonicalLink></div></div></section>
  </article>;
}
