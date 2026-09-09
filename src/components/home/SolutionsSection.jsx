import React from 'react';
import { ArrowUpRight, ShoppingBag, Bot, PenTool, Workflow } from 'lucide-react';
import CanonicalLink from '../shared/CanonicalLink';
import RevealOnScroll from '../shared/RevealOnScroll';
import { directions } from '../../lib/directions';

const icons = [Bot, ShoppingBag, Workflow, PenTool];
const summaries = [
  'Отчёты, документы, закупки и финансы на данных вашей учётной системы.',
  'Аналитика продаж, карточки товаров, отзывы, остатки и заказы.',
  'Заявки, коммуникации и документы между CRM, почтой и внутренними системами.',
  'Статьи, посты и переработка материалов: от исходников до согласованной публикации.',
];
const solutions = directions.map((direction, index) => ({
  icon: icons[index], title: direction.label, description: summaries[index], to: `/${direction.slug}`,
}));

export default function SolutionsSection() {
  return (
    <section id="directions" aria-labelledby="home-directions-title" className="scroll-mt-24 border-t border-white/[0.08]">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-16 2xl:py-24">
        <RevealOnScroll>
          <div className="max-w-2xl mb-10">
            <p className="text-xs text-signal uppercase tracking-[0.15em] mb-4">Четыре направления</p>
            <h2 id="home-directions-title" className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">С какой задачи начнём?</h2>
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
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-signal">Услуги направления <ArrowUpRight className="h-4 w-4" /></span>
                </CanonicalLink>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
