import React from 'react';
import CaseCard from '../components/cases/CaseCard';
import SEOHead from '../components/shared/SEOHead';
import { caseStudies } from '../lib/caseStudies';
import { pageSEO } from '../lib/seoConfig';

export default function Cases() {
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
        {caseStudies.length > 0 ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">{caseStudies.map((caseStudy) => <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />)}</div> : <div className="border border-white/[0.12] bg-white/[0.015] p-8 text-white/70"><h2 className="font-serif text-3xl text-white">Кейсы скоро появятся</h2><p className="mt-3 text-sm leading-relaxed">Собираем подтверждённые результаты внедрений и подготовим подробные материалы.</p></div>}
      </main>
    </div>
  );
}
