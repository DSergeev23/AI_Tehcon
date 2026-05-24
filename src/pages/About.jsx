import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield, Brain, Cpu, Database, Cloud } from 'lucide-react';
import RevealOnScroll from '../components/shared/RevealOnScroll';
import SectionHeader from '../components/shared/SectionHeader';
import CTASection from '../components/home/CTASection';

const values = [
  { icon: Target, title: 'Результат', description: 'Каждое решение измеряется конкретными бизнес-метриками и ROI.' },
  { icon: Users, title: 'Партнёрство', description: 'Работаем как часть вашей команды, погружаясь в специфику бизнеса.' },
  { icon: Lightbulb, title: 'Инновации', description: 'Применяем передовые исследования ИИ в реальных бизнес-задачах.' },
  { icon: Shield, title: 'Надёжность', description: 'Enterprise-grade безопасность и SLA 99.9% для всех систем.' },
];

const techStack = [
  { icon: Brain, name: 'LLM & NLP', desc: 'GPT-4, Claude, LLaMA, BERT' },
  { icon: Cpu, name: 'ML Frameworks', desc: 'PyTorch, TensorFlow, JAX' },
  { icon: Database, name: 'Data Infrastructure', desc: 'PostgreSQL, Redis, Pinecone' },
  { icon: Cloud, name: 'Cloud & Deploy', desc: 'Kubernetes, AWS, GCP' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-muted-foreground mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              О компании
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter-custom text-gradient-white leading-[0.95] mb-8">
              Создаём будущее<br />с помощью ИИ
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              NEXUS.AI — агентство интеллектуальной автоматизации нового поколения. Мы объединяем экспертизу в машинном обучении с глубоким пониманием бизнес-процессов.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-24 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Миссия</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter-custom text-foreground mb-6 leading-tight">
                  Делаем ИИ доступным для каждого бизнеса
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Мы верим, что искусственный интеллект — это не привилегия корпораций, а инструмент, который должен быть доступен бизнесу любого масштаба. Наша команда создаёт решения, которые интегрируются в существующие процессы без болезненных трансформаций.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  За 5 лет работы мы реализовали более 150 проектов для компаний от стартапов до enterprise-уровня, накопив уникальную экспертизу на стыке ИИ и бизнеса.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '150+', label: 'Проектов реализовано' },
                  { num: '40+', label: 'Экспертов в команде' },
                  { num: '5', label: 'Лет на рынке' },
                  { num: '98%', label: 'Клиентов рекомендуют' },
                ].map((s, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-gradient-blue tracking-tighter-custom">{s.num}</div>
                    <div className="text-xs text-muted-foreground mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Принципы"
            title="Наши ценности"
            description="Четыре столпа, на которых строится каждый наш проект"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-2xl p-7 h-full group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:border-primary/30 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Технологии"
            title="Наш стек"
            description="Используем лучшие инструменты для создания enterprise-grade решений"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((t, i) => {
              const Icon = t.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-7 text-center group hover:border-white/[0.12] transition-colors">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-4 group-hover:border-accent/30 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{t.name}</h3>
                    <p className="text-xs text-muted-foreground">{t.desc}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}