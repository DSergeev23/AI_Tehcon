const YM_ID = 109517533;

export function trackLandingEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined') return;

  const analyticsWindow = /** @type {Window & {
   *   ym?: (...args: unknown[]) => void;
   *   gtag?: (...args: unknown[]) => void;
   * }} */ (window);

  if (typeof analyticsWindow.ym === 'function') {
    analyticsWindow.ym(YM_ID, 'reachGoal', eventName, parameters);
  }

  if (typeof analyticsWindow.gtag === 'function') {
    analyticsWindow.gtag('event', eventName, parameters);
  }
}

export function getCampaignAttribution() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  return keys.reduce((result, key) => {
    const value = params.get(key);
    if (value) result[key] = value;
    return result;
  }, {});
}
