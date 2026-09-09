import { getProductById } from './catalog/index.js';
import { getProductDirection } from './catalog/directionCatalog.js';
import { directions } from './directions.js';

const key = 'aiTehConAttribution';
const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'yclid'];
let memory = {};

export function contactDestination(pathname) {
  const path = pathname.replace(/\/$/, '');
  const product = getProductById(path.match(/^\/catalog\/([^/]+)$/)?.[1]);
  const direction = product ? getProductDirection(product.id) : directions.find((item) => `/${item.slug}` === path);
  const params = new URLSearchParams({ from: pathname });
  if (product) params.set('service', product.id);
  if (direction) params.set('direction', direction.slug);
  return `/contacts/?${params}`;
}

export function resolveLeadContext(search) {
  const params = new URLSearchParams(search);
  const product = getProductById(params.get('service'));
  const direction = product ? getProductDirection(product.id) : directions.find((item) => item.slug === params.get('direction'));
  const from = params.get('from') || '';
  return { service: product?.title || '', direction: direction?.label || '', sourcePage: /^\/(?!\/)[a-zA-Z0-9/_-]*$/.test(from) ? from.slice(0, 500) : '' };
}

export function readAttribution() {
  try { return JSON.parse(sessionStorage.getItem(key) || 'null') || memory; } catch { return memory; }
}

export function captureAttribution(href, referrer) {
  const url = new URL(href);
  const saved = readAttribution();
  let referral = '';
  try { const ref = new URL(referrer); referral = `${ref.origin}${ref.pathname}`.slice(0, 1000); } catch { /* Direct visit. */ }
  const campaign = Object.fromEntries(campaignKeys.map((name) => [name, (url.searchParams.get(name) || '').slice(0, 300)]));
  memory = { ...saved, landingPage: saved.landingPage || url.pathname.slice(0, 500), referrer: saved.referrer ?? referral };
  if (campaignKeys.some((name) => campaign[name])) memory = { ...memory, ...campaign };
  try { sessionStorage.setItem(key, JSON.stringify(memory)); } catch { /* In-memory fallback for blocked storage. */ }
  return memory;
}
