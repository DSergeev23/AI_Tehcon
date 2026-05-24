import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

export default function CTASection() {
  return (
    <section className="border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 py-24 text-center relative">
        <span className="absolute top-5 left-5 text-white/15 text-xs">+</span>
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <span className="absolute bottom-5 left-5 text-white/15 text-xs">+</span>
        <span className="absolute bottom-5 right-5 text-white/15 text-xs">+</span>

        <RevealOnScroll>
          <h2 className="font-serif text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
            Готовы трансформировать<br />бизнес с ИИ?
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="text-sm text-white/40 max-w-md mx-auto mb-10 leading-relaxed">
            Обсудим вашу задачу и подберём оптимальное решение для автоматизации.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-md hover:bg-white/90 transition-colors"
          >
            Начать проект <Plus className="w-4 h-4" />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}