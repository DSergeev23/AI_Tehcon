import React from 'react';
import { ArrowLeft, ArrowRight, Clock3, Plus } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/news/NewsCard';
import CanonicalLink from '../components/shared/CanonicalLink';
import ResponsiveImage from '../components/shared/ResponsiveImage';
import SEOHead from '../components/shared/SEOHead';
import useNewsArticles from '../hooks/useNewsArticles';
import PageNotFound from '../lib/PageNotFound';
import { formatNewsDate } from '../lib/news';
import { getNewsSEO } from '../lib/seoConfig';
import { createNewsArticleSchema, createNewsBreadcrumbSchema } from '../lib/structuredData';

export default function NewsDetail() {
  const { slug } = useParams();
  const { articles: newsArticles, ready } = useNewsArticles();
  const article = newsArticles.find((item) => item.slug === slug);
  if (!article && !ready) return null;
  if (!article) return <PageNotFound />;

  const related = newsArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-black">
      <SEOHead
        {...getNewsSEO(article)}
        schemaJson={[createNewsArticleSchema(article), createNewsBreadcrumbSchema(article)]}
      />

      <div className="border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-5 py-4 md:px-8">
          <CanonicalLink to="/news" className="inline-flex items-center gap-1.5 text-xs text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" /> Новости
          </CanonicalLink>
          <span className="text-primary/60">/</span>
          <span className="max-w-[240px] truncate text-xs text-white/55">{article.title}</span>
        </div>
      </div>

      <header className="relative overflow-hidden border-b border-white/[0.08] grid-lines">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(165,29,52,0.18),transparent_28%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-14 md:px-8 md:pb-16 md:pt-20">
          <div className="page-enter max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.15em]">
              <span className="text-signal">{article.category}</span>
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              <time dateTime={article.publishedAt} className="text-white/55">{formatNewsDate(article.publishedAt)}</time>
            </div>
            <h1 className="mt-7 font-serif text-5xl leading-[0.98] tracking-tight text-white md:text-7xl">{article.title}</h1>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{article.excerpt}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.12] pt-5 text-xs text-white/55">
              <span>{article.author}</span>
              <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5 text-primary" /> {article.readingTime}</span>
              {article.updatedAt !== article.publishedAt && <span>Обновлено {formatNewsDate(article.updatedAt)}</span>}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 pt-8 md:px-8 md:pt-12">
        <div className="relative aspect-[16/8] overflow-hidden border border-white/[0.12] md:aspect-[16/7]">
          <ResponsiveImage
            src={article.coverImage}
            alt={article.coverAlt}
            loading="eager"
            sizes="(min-width: 1440px) 1376px, 100vw"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 py-14 md:px-8 lg:grid-cols-[minmax(0,760px)_280px] lg:gap-20 lg:py-20">
        <div className="news-prose min-w-0">
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>

        <aside className="min-w-0">
          <div className="border border-white/[0.12] bg-white/[0.02] p-6 lg:sticky lg:top-24">
            <p className="text-[10px] uppercase tracking-[0.16em] text-signal">Применить на практике</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-white">Найдём задачу с измеримым эффектом</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">Разберём процесс, данные и ограничения до начала разработки.</p>
            <CanonicalLink to="/contacts" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold signal-button">
              Обсудить задачу <Plus className="h-4 w-4" />
            </CanonicalLink>
          </div>
        </aside>
      </div>

      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-signal">Продолжить чтение</p>
              <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Другие материалы</h2>
            </div>
            <CanonicalLink to="/news" className="hidden items-center gap-2 text-xs font-semibold text-white hover:text-primary md:inline-flex">
              Все публикации <ArrowRight className="h-4 w-4" />
            </CanonicalLink>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {related.map((item) => <NewsCard key={item.slug} article={item} />)}
          </div>
        </div>
      </section>
    </article>
  );
}
