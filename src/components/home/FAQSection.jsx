import React from 'react';
import { Plus } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

export const homeFaq = [
  {
    question: 'Сколько занимает запуск ИИ-агента?',
    answer: 'Пилотный сценарий обычно запускаем за 7–14 дней. Срок зависит от количества систем, качества исходных данных и необходимости доработок в 1С или других сервисах.',
  },
  {
    question: 'Можно ли интегрировать ИИ-агента с 1С?',
    answer: 'Да. Агент может читать и записывать данные в 1С, формировать отчёты, проверять документы и запускать согласованные действия через API или другие доступные механизмы интеграции.',
  },
  {
    question: 'Какие данные нужны для старта?',
    answer: 'Начинаем с одной конкретной задачи и определяем минимальный набор источников: например, документы и справочники 1С, CRM, таблицы, почту или данные маркетплейсов.',
  },
  {
    question: 'Может ли ИИ менять данные без согласования?',
    answer: 'По умолчанию нет. Агент сначала готовит рекомендацию, отчёт или черновик действия. Изменения выполняются только после утверждения сотрудником или по заранее согласованному правилу.',
  },
];

export default function FAQSection() {
  return (
    <section className="border-t border-white/[0.08]" aria-labelledby="home-faq-title">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8 py-16 2xl:py-24">
        <RevealOnScroll>
          <div className="max-w-2xl mb-10">
            <p className="text-xs text-signal uppercase tracking-[0.15em] mb-4">Ответы на вопросы</p>
            <h2 id="home-faq-title" className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight">Как запускается автоматизация с ИИ</h2>
          </div>
        </RevealOnScroll>

        <div className="border-t border-white/[0.1]">
          {homeFaq.map(({ question, answer }, index) => (
            <RevealOnScroll key={question} delay={index * 0.05}>
              <details className="group border-b border-white/[0.1] py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium text-white marker:content-none">
                  {question}
                  <Plus className="w-5 h-5 shrink-0 text-primary transition-transform group-open:rotate-45" />
                </summary>
                <p className="max-w-3xl pt-4 text-sm leading-relaxed text-white/80">{answer}</p>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
