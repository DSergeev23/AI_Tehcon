import React from 'react';
import { renderToReadableStream } from 'react-dom/server.browser';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from './App';

function textFromHelmet(value) {
  return value.replace(/<[^>]*>/g, '').trim();
}

async function renderApp(element) {
  let renderError = null;
  const stream = await renderToReadableStream(element, {
    onError(error) {
      renderError ||= error;
    },
  });

  await stream.allReady;
  if (renderError) throw renderError;

  return new Response(stream).text();
}

export async function renderPage(url) {
  const helmetContext = {};
  const html = await renderApp(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppContent />
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
