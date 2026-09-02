import aiAgentBusinessProcess from './articles/ai-agent-business-process.js';
import aiAndOneCData from './articles/ai-and-1c-data.js';
import aiPilotMetrics from './articles/ai-pilot-metrics.js';

export const newsArticles = [aiAgentBusinessProcess, aiAndOneCData, aiPilotMetrics]
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

export function getNewsBySlug(slug) {
  return newsArticles.find((article) => article.slug === slug);
}

export function formatNewsDate(value) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${value}T12:00:00Z`));
}
