import React from 'react';
import { Bot, Brain, Cpu, Shield, Workflow, BarChart3 } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';
import SectionHeader from '../shared/SectionHeader';

const capabilities = [
  {
    icon: Bot,
    title: 'ИИ-Агенты',
    description: 'Автономные агенты для продаж, поддержки и операционных задач.',
    size: 'large',
    glowColor: 'from-primary/10',
  },
  {
    icon: Brain,
    title: 'Машинное обучение',
    description: 'Кастомные ML-модели для прогнозирования и классификации.',
    size: 'small',
    glowColor: 'from-accent/10',
  },
  {
    icon: Workflow,
    title: 'Автоматизация процессов',
    description: 'End-to-end автоматизация бизнес-процессов с ИИ-оркестрацией.',
    size: 'small',
    glowColor: 'from-primary/10',
  },
  {
    icon: Cpu,
    title: 'Обработка данных',
    description: 'Извлечение, трансформация и анализ данных любого масштаба с помощью NLP и Computer Vision.',
    size: 'large',
    glowColor: 'from-accent/10',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Compliance-ready решения, соответствующие 152-ФЗ и GDPR.',
    size: 'small',
    glowColor: 'from-primary/10',
  },
  {
    icon: BarChart3,
    title: 'Аналитика',
    description: 'Предиктивные дашборды и real-time мониторинг.',
    size: 'small',
    glowColor: 'from-accent/10',
  },
];

function BentoCard({ item, index }) {
  const Icon = item.icon;
  const isLarge = item.size === 'large';

  return (
    <RevealOnScroll delay={index * 0.08} className={isLarge ? 'md:col-span-2' : ''}>
      <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden group cursor-default hover-lift">
        {/* Glow on hover */}
        <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-radial ${item.glowColor} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors duration-500">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">{item.title}</h3>
          <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </RevealOnScroll>
  );
}

export default function BentoGrid() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Возможности"
          title="Что мы создаём"
          description="Полный стек ИИ-решений для автоматизации любых бизнес-процессов"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {capabilities.map((item, i) => (
            <BentoCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
