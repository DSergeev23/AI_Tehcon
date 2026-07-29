# AI TehCon

Публичный сайт AI TehCon: витрина услуг и готовых решений по AI-автоматизации бизнеса и интеграциям с 1С.

## Стек

- React 18;
- Vite;
- React Router;
- Tailwind CSS;
- Framer Motion;
- React Helmet Async.

Сайт является React/Vite-приложением. Контактная форма обрабатывается серверным PHP-скриптом, который размещается вместе со статической сборкой на виртуальном хостинге Timeweb.

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

## Контактная форма

Форма отправляет JSON на `/api/contact.php`. Скрипт использует почтовый агент Timeweb через PHP `mail()` и отправляет заявки на `hello@it-tehcon.ru`.

Перед публикацией убедитесь в панели Timeweb, что ящик `hello@it-tehcon.ru` создан и домен имеет корректные SPF, DKIM и DMARC-записи. Пароль ящика в проекте не используется и не хранится.

Локальный Vite-сервер PHP не выполняет: полноценную проверку отправки нужно проводить после публикации на Timeweb.

## Внешние сервисы

- Google Analytics — web analytics;
- Yandex Metrika — web analytics.

Изменения формы, аналитики, SEO, маршрутов и deployment требуют отдельной проверки перед публикацией.
