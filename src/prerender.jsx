import { renderPage } from './server-entry';

export async function prerender({ url }) {
  return renderPage(url);
}
