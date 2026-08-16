import React from 'react';
import { ArrowUpRight, BarChart3, Bot, FileSearch, Workflow } from 'lucide-react';
import CanonicalLink from '../shared/CanonicalLink';
import RevealOnScroll from '../shared/RevealOnScroll';

const solutions = [
  {
    icon: Bot,
    title: 'ИИ-агенты для 1С',
    description: 'Получайте ответы по продажам, остаткам и документам, запускайте действия в привычном рабочем контуре.',
    to: '/catalog/1c',
  },
  {
    icon: BarChart3,
    title: 'Отчёты и аналитика',
    description: 'Собирайте показатели из разных систем, находите отклонения и отправляйте команде готовые выводы.',
    to: '/catalog/analytics',
  },
  {
    icon: Workflow,
    title: 'Интеграции процессов',
    description: 'Связывайте CRM, Telegram, почту, таблицы и внутренние системы в единый сценарий без ручной рутины.',
    to: '/catalog',
  },
  {
    icon: FileSearch,
    title: 'Проверка документов',
    description: 'Распознавайте сканы, контролируйте обязательные поля и находите ошибки до проведения документа.',
    to: '/catalog/image-analysis',
  },
];

export default function SolutionsSection() {
  return (
    <section className="border-t border-white/[0.08] render-deferred">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-16 2xl:py-24">
        <RevealOnScroll>
          <div className="max-w-2xl mb-10">
            <p className="text-xs text-signal uppercase tracking-[0.15em] mb-4">Задачи, которые решаем</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">Автоматизация там, где бизнес теряет время и деньги</h2>
            <p className="text-sm text-white/80 leading-relaxed">Выберите направление — покажем готовые сценарии и соберём интеграцию под ваши данные и процессы.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <RevealOnScroll key={solution.to} delay={index * 0.06}>
                <CanonicalLink to={solution.to} className="group block h-full border border-white/[0.1] bg-white/[0.015] p-6 rounded-sm hover:border-primary/50 hover:bg-white/[0.03] transition-colors">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-10 h-10 rounded flex items-center justify-center border border-primary/35 bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{solution.description}</p>
                </CanonicalLink>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
