import React, { useState } from 'react';
import CaseCard from '../components/cases/CaseCard';
import SEOHead from '../components/shared/SEOHead';
import { caseStudies } from '../lib/caseStudies';
import { directions } from '../lib/directions';
import { pageSEO } from '../lib/seoConfig';

export default function Cases() {
  const [activeSolution, setActiveSolution] = useState(null);
  const filteredCases = activeSolution ? caseStudies.filter((caseStudy) => caseStudy.solution === activeSolution) : caseStudies;

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
          {filteredCases.length > 0 ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">{filteredCases.map((caseStudy) => <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />)}</div> : <div className="border border-white/[0.12] bg-white/[0.015] p-8 text-white/70"><h2 className="font-serif text-3xl text-white">Кейсов пока нет</h2><p className="mt-3 text-sm leading-relaxed">Для этого направления мы ещё готовим подтверждённые материалы.</p></div>}
        </> : <div className="border border-white/[0.12] bg-white/[0.015] p-8 text-white/70"><h2 className="font-serif text-3xl text-white">Кейсы скоро появятся</h2><p className="mt-3 text-sm leading-relaxed">Собираем подтверждённые результаты внедрений и подготовим подробные материалы.</p></div>}
      </main>
    </div>
  );
}
