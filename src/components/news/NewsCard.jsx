import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CanonicalLink from '../shared/CanonicalLink';
import ResponsiveImage from '../shared/ResponsiveImage';
import { formatNewsDate } from '../../lib/news';

export default function NewsCard({ article, featured = false }) {
  return (
    <article className={`group h-full border border-white/[0.12] bg-white/[0.015] transition-colors hover:border-primary/55 hover:bg-white/[0.03] ${featured ? 'grid lg:grid-cols-2' : 'flex flex-col'}`}>
      <CanonicalLink to={`/news/${article.slug}`} className={`relative block overflow-hidden ${featured ? 'min-h-[260px] bg-[#07090a] lg:min-h-[380px]' : 'aspect-[16/10]'}`} aria-label={`Читать: ${article.title}`}>
        <ResponsiveImage
          src={article.coverImage}
          alt={article.coverAlt}
          loading={featured ? 'eager' : 'lazy'}
          sizes={featured ? '(min-width: 1024px) 62vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
          className={`absolute inset-0 h-full w-full opacity-80 transition duration-500 group-hover:opacity-95 ${featured ? 'object-contain' : 'object-cover group-hover:scale-[1.02]'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" aria-hidden="true" />
      </CanonicalLink>

      <div className={`flex flex-1 flex-col ${featured ? 'p-6 md:p-8 lg:p-9' : 'p-6'}`}>
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.14em]">
          <span className="text-signal">{article.category}</span>
          <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
          <time dateTime={article.publishedAt} className="text-white/55">{formatNewsDate(article.publishedAt)}</time>
        </div>
        <h2 className={`mt-6 font-serif leading-[1.04] tracking-tight text-white ${featured ? 'text-3xl md:text-4xl' : 'text-3xl'}`}>
          <CanonicalLink to={`/news/${article.slug}`} className="transition-colors group-hover:text-white/85">
            {article.title}
          </CanonicalLink>
        </h2>
        <p className={`mt-5 leading-relaxed text-white/70 ${featured ? 'text-base' : 'text-sm'}`}>{article.excerpt}</p>
        <CanonicalLink to={`/news/${article.slug}`} className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold text-white transition-colors hover:text-primary">
          Читать материал <ArrowUpRight className="h-4 w-4" />
        </CanonicalLink>
      </div>
    </article>
  );
}
