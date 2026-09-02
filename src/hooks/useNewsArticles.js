import { useEffect, useState } from 'react';

function readingTime(minutes) {
  if (!Number.isInteger(minutes) || minutes < 1) return 'Время чтения не указано';
  return `${minutes} минут`;
}

function normalizeArticle(value) {
  if (!value || typeof value !== 'object') return null;

  const requiredStrings = [
    'slug', 'title', 'excerpt', 'category', 'coverImage', 'coverAlt',
    'publishedAt', 'updatedAt', 'author', 'body',
  ];
  if (requiredStrings.some((field) => typeof value[field] !== 'string' || !value[field].trim())) {
    return null;
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.slug)) return null;
  if (Number.isNaN(Date.parse(value.publishedAt)) || Number.isNaN(Date.parse(value.updatedAt))) return null;

  return {
    ...value,
    tags: Array.isArray(value.tags) ? value.tags.filter((item) => typeof item === 'string') : [],
    relatedSolutionIds: Array.isArray(value.relatedSolutionIds)
      ? value.relatedSolutionIds.filter((item) => typeof item === 'string')
      : [],
    sourceUrls: Array.isArray(value.sourceUrls)
      ? value.sourceUrls.filter((item) => typeof item === 'string')
      : [],
    readingTime: readingTime(value.readingTimeMinutes),
    seo: {
      title: value.seo?.title || `${value.title} | AI TehCon`,
      description: value.seo?.description || value.excerpt,
    },
  };
}

export default function useNewsArticles() {
  const [articles, setArticles] = useState([]);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/data/news/news.json', {
      cache: 'no-cache',
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error(`News cache request failed: ${response.status}`);
        return response.json();
      })
      .then((payload) => {
        const cachedArticles = Array.isArray(payload?.articles)
          ? payload.articles.map(normalizeArticle).filter(Boolean)
          : [];

        cachedArticles.sort(
          (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
        );
        setArticles(cachedArticles);
      })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') setError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setReady(true);
      });

    return () => controller.abort();
  }, []);

  return { articles, ready, error };
}
