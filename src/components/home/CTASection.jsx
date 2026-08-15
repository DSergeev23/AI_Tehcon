import React from 'react';
import { Link } from 'react-router-dom';

const contentByVariant = {
  default: {
    overline: 'Никакого хайпа вокруг ИИ. Только результаты.',
    heading: <>Готовы трансформировать<br />бизнес с ИИ?</>,
    points: [
      { num: '01', text: 'Найдём 3–5 процессов, где бизнес теряет деньги на ручной работе' },
      { num: '02', text: 'Покажем, что можно автоматизировать в вашей 1С, CRM и таблицах' },
      { num: '03', text: 'За 30–60 минут — процессы, которые сократятся в 5–10 раз' },
    ],
    button: 'Получить аудит',
  },
  about: {
    overline: 'ИИ-автоматизация бизнес-процессов',
    heading: <>Обсудите, где ИИ<br />усилит ваш бизнес</>,
    points: [
      { num: '01', text: 'Разберём процессы в документах, CRM, Excel, почте, 1С и других рабочих системах, где автоматизация даст наибольший эффект.' },
      { num: '02', text: 'Определим источники данных, нужные интеграции и критерии качества для ИИ-решения.' },
      { num: '03', text: 'Подскажем реалистичный следующий шаг: аудит, прототип, интеграцию или доработку существующего процесса.' },
      { num: '04', text: 'Оценим приоритет сценариев: где быстрее получить эффект, снизить ручную работу и уменьшить число ошибок.' },
      { num: '05', text: 'Сформируем понятный план внедрения: этапы, контрольные точки и результат, который можно проверить на практике.' },
    ],
    button: 'Получить консультацию по ИИ',
  },
};

export default function CTASection({ variant = 'default' }) {
  const content = contentByVariant[variant] || contentByVariant.default;

  return (
    <section className="border-t border-white/[0.08] render-deferred">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-24 2xl:py-36 text-center relative">
        <span className="absolute top-5 left-5 text-white/15 text-xs">+</span>
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <span className="absolute bottom-5 left-5 text-white/15 text-xs">+</span>
        <span className="absolute bottom-5 right-5 text-white/15 text-xs">+</span>

        {/* Overline */}
        <p
          style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.75)', marginBottom: '28px' }}
          className="uppercase">
          
          {content.overline}
        </p>

        {/* Headline */}
        <h2
          className="font-serif text-white"
          style={{ fontSize: 'clamp(48px, 5vw, 100px)', lineHeight: '1.1', letterSpacing: '-0.02em', marginBottom: '40px' }}>
          
          {content.heading}
        </h2>

        {/* Body */}
        <div
          className="mx-auto mb-14"
          style={{ maxWidth: '560px' }}>
          
          <div className="flex flex-col gap-4">
            {content.points.map(({ num, text }) =>
            <div key={num} className="flex items-start gap-5 text-left">
                <span className="text-[10px] text-signal tracking-widest mt-0.5 font-mono shrink-0">{num}</span>
                
                <p className="text-white leading-relaxed opacity-100 text-base text-justify">{text}</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div>
          
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 signal-button text-sm font-semibold rounded-sm transition-colors"
            style={{ padding: '12px 36px' }}>
            
            {content.button}
          </Link>
        </div>
      </div>
    </section>);

}
