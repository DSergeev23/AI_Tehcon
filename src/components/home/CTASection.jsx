import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter-custom text-gradient-white leading-tight mb-6">
            Готовы трансформировать<br />ваш бизнес?
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Обсудим ваш проект и подберём оптимальное ИИ-решение для достижения бизнес-целей.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Link
            to="/contacts"
            className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:opacity-90 transition-all"
          >
            Начать проект
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}