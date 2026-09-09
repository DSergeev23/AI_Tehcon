import React from 'react';
import { ArrowRight } from 'lucide-react';
import ResponsiveImage from './ResponsiveImage';
import CanonicalLink from './CanonicalLink';

export function DirectionExample({ example }) {
  return (
    <section id="example" aria-labelledby="example-title" className="scroll-mt-24 border-y border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <p className="text-xs uppercase tracking-widest text-signal">Пример применения</p>
        <h2 id="example-title" className="mt-4 max-w-4xl font-serif text-4xl md:text-5xl">{example.title}</h2>
        <div className="mt-9 grid items-start gap-8 lg:grid-cols-2">
          <figure>
            <ResponsiveImage src={example.image} alt={example.alt} sizes="(min-width: 1024px) 640px, 100vw" className="aspect-video w-full rounded-sm border border-white/10 object-contain" />
            <figcaption className="mt-3 text-xs leading-relaxed text-white/55">Иллюстрация сценария. Состав отчёта и интерфейс определяются задачей проекта.</figcaption>
          </figure>
          <dl className="space-y-6">
            {[['Сейчас', example.before], ['Как работает сценарий', example.action], ['Что получает сотрудник', example.output]].map(([title, text]) => <div key={title}><dt className="mb-2 text-sm font-semibold text-white">{title}</dt><dd className="text-sm leading-relaxed text-white/70">{text}</dd></div>)}
          </dl>
        </div>
        <div className="mt-8 border-l-2 border-primary pl-5"><h3 className="font-medium">Как проверим результат на пилоте</h3><p className="mt-2 max-w-4xl text-sm leading-relaxed text-white/70">{example.acceptance}</p></div>
      </div>
    </section>
  );
}

export function DirectionPricing({ example }) {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24 border-y border-white/10">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-signal">Стоимость и объём работ</p>
          <h2 id="pricing-title" className="mt-4 font-serif text-4xl md:text-5xl">Рассчитаем под ваш процесс</h2>
          <p className="mt-5 leading-relaxed text-white/70">Цены «от» в карточках относятся к отдельным услугам. Итоговую стоимость и сроки определяем после разбора задачи, данных и интеграций.</p>
          <p className="mt-4 text-sm leading-relaxed text-white/65">В предложении отдельно указываем внедрение, регулярное сопровождение и расходы на внешние сервисы, если они нужны. Границы пилота и критерии приёмки согласуем до начала работ.</p>
          <CanonicalLink to="/contacts" className="signal-button mt-7 inline-flex items-center gap-3 rounded-sm px-6 py-3 font-medium">Получить оценку проекта <ArrowRight size={18} /></CanonicalLink>
        </div>
        <div className="rounded-sm border border-white/15 bg-white/[0.02] p-6 md:p-8">
          <h3 className="text-xl">Что влияет на расчёт</h3>
          <ul className="mt-5 space-y-4">{example.factors.map((factor) => <li key={factor} className="flex gap-3 text-sm leading-relaxed text-white/75"><span aria-hidden="true" className="text-primary">+</span>{factor}</li>)}</ul>
          <div className="mt-7 border-t border-white/10 pt-6"><h3 className="font-medium">Что подготовить для первого разговора</h3><p className="mt-3 text-sm leading-relaxed text-white/65">{example.prepare}</p></div>
        </div>
      </div>
    </section>
  );
}
