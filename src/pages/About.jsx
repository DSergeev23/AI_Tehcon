import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../components/shared/RevealOnScroll';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/shared/SEOHead';
import { pageSEO } from '../lib/seoConfig';

const values = [
  { title: 'Результат', desc: 'Каждое решение измеряется конкретными бизнес-метриками и ROI.' },
  { title: 'Партнёрство', desc: 'Работаем как часть вашей команды, погружаясь в специфику бизнеса.' },
  { title: 'Инновации', desc: 'Применяем передовые исследования ИИ в реальных бизнес-задачах.' },
  { title: 'Надёжность', desc: 'Enterprise-grade безопасность и SLA 99.9% для всех систем.' },
];

const stats = [
  { num: '40+', label: 'Конфигураций 1С' },
  { num: '20+', label: 'Моделей ИИ' },
  { num: '12 лет', label: 'На рынке автоматизации' },
  { num: '98%', label: 'Рекомендуют' },
];

const techStack = ['1С', 'SQL', 'Python', 'TypeScript', 'PyTorch', 'LangChain', 'GPT-4o', 'Claude', 'PostgreSQL', 'Redis', 'Kubernetes', 'Docker', 'AWS', 'GCP'];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI TehCon",
  "url": "https://ai-tehcon.ru",
  "description": "AI TehCon — агентство ИИ автоматизации бизнес-процессов. Разработка AI решений и интеграция нейросетей.",
  "foundingDate": "2014",
  "areaServed": "RU",
  "knowsAbout": ["ИИ агенты", "автоматизация бизнеса", "машинное обучение", "нейросети"]
};

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...pageSEO.about} schemaJson={orgSchema} />
      {/* Hero */}
      <div className="border-b border-white/[0.08] relative">
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <span className="absolute bottom-5 left-5 text-white/15 text-xs">+</span>
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 pt-16 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border signal-badge rounded-sm text-[11px] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              О компании
            </div>
            <h1 className="font-serif text-5xl md:text-6xl 2xl:text-7xl text-white tracking-tight leading-tight">
              Создаём будущее<br />с помощью ИИ
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm text-white leading-relaxed mb-6">
              Компания AI TehCon занимается автоматизацией компаний с помощью ИИ с углублённым сопряжением с 1С.
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              Объединяем экспертизу в машинном обучении, разработке 1С и оптимизации бизнес-процессов, чтобы создавать решения, которые встраиваются в реальные процессы компании.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats row */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className={`py-10 px-7 text-center ${i < 3 ? 'border-r border-white/[0.08]' : ''}`}>
                  <div className="text-3xl font-serif text-signal tracking-tight mb-1">{s.num}</div>
                  <div className="text-xs text-white/75">{s.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <RevealOnScroll>
              <div className="p-10 border-r border-white/[0.08]">
                <p className="text-[10px] text-signal uppercase tracking-[0.15em] mb-6">Миссия</p>
                <h2 className="font-serif text-3xl text-white tracking-tight leading-tight mb-5">
                  Делаем ИИ доступным<br />для каждого бизнеса
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  Верим, что искусственный интеллект — это не привилегия корпораций, а инструмент для бизнеса любого масштаба. Создаём решения, которые встраиваются в существующие процессы без болезненных трансформаций.
                </p>
              </div>
            </RevealOnScroll>

            {/* Values */}
            <RevealOnScroll delay={0.1}>
              <div className="p-10">
                <p className="text-[10px] text-signal uppercase tracking-[0.15em] mb-6">Принципы</p>
                <div className="space-y-5">
                  {values.map((v, i) => (
                    <div key={i} className="flex gap-4 py-4 border-b border-white/[0.06] last:border-0">
                      <div className="w-6 h-6 border border-primary/35 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[10px] font-mono text-signal">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">{v.title}</h3>
                        <p className="text-xs text-white/80 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-12">
          <RevealOnScroll>
            <p className="text-[10px] text-signal uppercase tracking-[0.15em] mb-6">Технологический стек</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-3 py-1.5 border border-white/[0.12] rounded-sm text-xs text-white/75 hover:text-white hover:border-primary/45 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
