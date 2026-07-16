# AI TehCon

Публичный сайт AI TehCon: витрина услуг и готовых решений по AI-автоматизации бизнеса и интеграциям с 1С.

## Стек

- React 18;
- Vite;
- React Router;
- Tailwind CSS;
- Framer Motion;
- React Helmet Async.

Сайт является автономным статическим React/Vite-приложением и не использует Base44 SDK, backend, authentication или CDN.

## Локальная разработка

Требуется Node.js 24 и npm.

```bash
npm ci
npm run dev
```

Production-сборка и локальный preview:

```bash
npm run build
npm run preview
```

## Проверка

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

Production размещается на Timeweb.

GitHub Actions workflow `.github/workflows/deploy-timeweb.yml` вручную запускает проверки, собирает `dist/` и загружает его по FTP в `public_html/`.

Для workflow нужны GitHub Environment secrets:

- `FTP_HOST`;
- `FTP_USERNAME`;
- `FTP_PASSWORD`.

Не коммитьте `.env`, credentials, FTP-доступы и содержимое `dist/`.

## Внешние сервисы

- FormSubmit — отправка заявок с контактной формы;
- Google Analytics — web analytics;
- Yandex Metrika — web analytics.

Изменения формы, аналитики, SEO, маршрутов и deployment требуют отдельной проверки перед публикацией.
