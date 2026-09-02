import React from 'react';
import NewsCard from '../components/news/NewsCard';
import SEOHead from '../components/shared/SEOHead';
import useNewsArticles from '../hooks/useNewsArticles';
import { pageSEO } from '../lib/seoConfig';
import { createNewsCollectionSchema } from '../lib/structuredData';

export default function News() {
  const { articles: newsArticles, ready, error } = useNewsArticles();
  const [featured, ...articles] = newsArticles;

  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...pageSEO.news} schemaJson={createNewsCollectionSchema(newsArticles)} />

      <header className="relative overflow-hidden border-b border-white/[0.08] grid-lines">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(165,29,52,0.2),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1920px] px-5 py-16 md:px-8 md:py-24 2xl:px-16 3xl:px-24">
          <div className="page-enter max-w-5xl">
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-signal">
              <span className="h-2 w-2 bg-primary" aria-hidden="true" />
              Редакция AI TehCon
            </div>
            <h1 className="font-serif text-5xl leading-[0.96] tracking-tight text-white md:text-7xl 2xl:text-8xl">
              Новости и практика<br />применения AI
            </h1>
          </div>
        </div>
      </header>

      <div id="latest" className="scroll-mt-20">
        <section className="mx-auto max-w-[1920px] px-5 py-10 md:px-8 md:py-12 2xl:px-16 3xl:px-24">
          <div className="mb-5 flex items-center justify-between">
            <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-white/65">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              {featured ? 'Последний материал' : 'Публикации'}
            </p>
            {featured && (
              <span className="rounded-sm border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary">
                001 / {String(newsArticles.length).padStart(3, '0')}
              </span>
            )}
          </div>
          {featured ? (
            <NewsCard article={featured} featured />
          ) : (
            <div className="border border-white/[0.12] bg-white/[0.015] p-8 text-white/70">
              <h2 className="font-serif text-3xl text-white">
                {error ? 'Не удалось загрузить публикации' : ready ? 'Публикаций пока нет' : 'Загружаем публикации'}
              </h2>
              <p className="mt-3 text-sm">
                {error
                  ? 'Обновите страницу через несколько минут.'
                  : ready
                    ? 'Новые материалы появятся здесь после публикации.'
                    : 'Это займёт несколько секунд.'}
              </p>
            </div>
          )}
        </section>

        {articles.length > 0 && <section className="border-t border-white/[0.08]">
          <div className="mx-auto max-w-[1920px] px-5 py-12 md:px-8 md:py-16 2xl:px-16 3xl:px-24">
            <div className="mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-signal">Лента</p>
                <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Все публикации</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article) => <NewsCard key={article.slug} article={article} />)}
            </div>
          </div>
        </section>}
      </div>
    </div>
  );
}
