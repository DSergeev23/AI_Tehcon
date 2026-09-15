import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CanonicalLink from '../shared/CanonicalLink';
import ResponsiveImage from '../shared/ResponsiveImage';
import { getCaseSolution } from '../../lib/caseStudies';

export default function CaseCard({ caseStudy }) {
  const solution = getCaseSolution(caseStudy);
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-white/[0.12] bg-white/[0.015] transition-colors hover:border-primary/55 hover:bg-white/[0.03]">
      <CanonicalLink to={`/cases/${caseStudy.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[#07090a]" aria-label={`Читать кейс: ${caseStudy.title}`}>
        <ResponsiveImage src={caseStudy.coverImage} alt={caseStudy.coverAlt} sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-95" />
      </CanonicalLink>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] uppercase tracking-[0.14em] text-signal">{caseStudy.category}</p>
        {solution && <CanonicalLink to={`/${solution.slug}`} className="mt-3 text-xs text-white/60 transition-colors hover:text-primary">Решение: {solution.label}</CanonicalLink>}
        <h2 className="mt-4 text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.025em] text-white"><CanonicalLink to={`/cases/${caseStudy.slug}`}>{caseStudy.title}</CanonicalLink></h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70">{caseStudy.excerpt}</p>
        <CanonicalLink to={`/cases/${caseStudy.slug}`} className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-semibold text-white transition-colors hover:text-primary">Читать кейс <ArrowUpRight className="h-4 w-4" /></CanonicalLink>
      </div>
    </article>
  );
}
