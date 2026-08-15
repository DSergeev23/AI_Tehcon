import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { catalogCategoryNav } from './catalog/categorySeo';

export default function PageNotFound() {
  return (
    <div className="min-h-[70vh] bg-black text-white">
      <Helmet>
        <title>Страница не найдена — AI TehCon</title>
        <meta
          name="description"
          content="Запрашиваемая страница не найдена. Перейдите в каталог ИИ-решений AI TehCon или свяжитесь с нами."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(165,29,52,0.18),transparent_38%)]" />
        <div className="relative mx-auto w-full max-w-[1920px] px-5 py-16 md:px-8 md:py-24 2xl:px-16 3xl:px-24">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-signal">Ошибка 404</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Такой страницы нет
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Возможно, адрес изменился или в ссылке есть опечатка. Выберите направление ниже либо перейдите в полный каталог решений.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/catalog"
              className="signal-button inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-medium transition-colors"
            >
              Все услуги
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.04]"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              На главную
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-5 py-14 md:px-8 md:py-20 2xl:px-16 3xl:px-24">
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-signal">Категории каталога</p>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">Найдите подходящее решение</h2>
          </div>
          <Link to="/catalog" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white">
            Смотреть весь каталог
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <nav aria-label="Основные категории услуг" className="grid grid-cols-1 border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {catalogCategoryNav.map((category, index) => (
            <Link
              key={category.slug}
              to={category.canonical}
              className="group min-h-36 border-b border-r border-white/[0.08] p-6 transition-colors hover:bg-white/[0.035]"
            >
              <span className="text-[10px] tracking-[0.16em] text-white/35">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mt-8 flex items-end justify-between gap-4">
                <span className="text-lg text-white/90 transition-colors group-hover:text-white">{category.label}</span>
                <ArrowRight className="h-4 w-4 text-signal transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}

          <Link
            to="/contacts"
            className="group min-h-36 border-b border-r border-white/[0.08] bg-primary/10 p-6 transition-colors hover:bg-primary/15"
          >
            <Mail className="h-4 w-4 text-signal" aria-hidden="true" />
            <span className="mt-8 flex items-end justify-between gap-4">
              <span className="text-lg text-white/90 transition-colors group-hover:text-white">Обсудить задачу</span>
              <ArrowRight className="h-4 w-4 text-signal transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </nav>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.08] pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Не нашли нужное направление?</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/contacts" className="text-white transition-colors hover:text-primary">Контакты</Link>
            <a href="mailto:hello@ai-tehcon.ru" className="text-white transition-colors hover:text-primary">hello@ai-tehcon.ru</a>
            <a href="tel:+79192137111" className="text-white transition-colors hover:text-primary">+7 (919) 213-71-11</a>
          </div>
        </div>
      </section>
    </div>
  );
}
