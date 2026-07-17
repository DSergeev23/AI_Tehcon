import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { PublicApp } from './App';

function textFromHelmet(value) {
  return value.replace(/<[^>]*>/g, '').trim();
}

export function renderPage(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <PublicApp />
      </StaticRouter>
    </HelmetProvider>,
  );
  const helmet = helmetContext.helmet;

  return {
    html,
    head: {
      lang: 'ru',
      title: textFromHelmet(helmet.title.toString()),
      elements: new Set([
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]),
    },
  };
}
