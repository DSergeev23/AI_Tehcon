import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
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
  { num: '150+', label: 'Проектов' },
  { num: '40+', label: 'Экспертов' },
  { num: '5 лет', label: 'На рынке' },
  { num: '98%', label: 'Рекомендуют' },
];

const techStack = ['Python', 'TypeScript', 'PyTorch', 'LangChain', 'GPT-4o', 'Claude', 'PostgreSQL', 'Redis', 'Kubernetes', 'Docker', 'AWS', 'GCP'];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tehcon AI",
  "url": "https://ai-tehcon.ru",
  "description": "Tehcon AI — агентство ИИ автоматизации бизнес-процессов. Разработка AI решений и интеграция нейросетей.",
  "foundingDate": "2019",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 40 },
  "areaServed": "RU",
  "knowsAbout": ["ИИ агенты", "автоматизация бизнеса", "машинное обучение", "нейросети"]
};

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-14">
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/[0.1] rounded-sm text-[11px] text-white/40 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              О компании
            </div>
            <h1 className="font-inter font-extrabold text-5xl md:text-6xl 2xl:text-7xl text-white tracking-[-0.04em] leading-[0.95]">
              Создаём будущее<br />с помощью ИИ
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base text-slate-300 leading-relaxed mb-6">
              NEXUS.AI — агентство интеллектуальной автоматизации. Объединяем экспертизу в машинном обучении с глубоким пониманием бизнес-процессов.
            </p>
            <p className="text-sm text-white/35 leading-relaxed">
              За 5 лет работы реализовали более 150 проектов для компаний от стартапов до enterprise. Накопили уникальную экспертизу на стыке ИИ и бизнеса.
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
                  <div className="text-3xl font-inter font-bold text-white tracking-tight mb-1">{s.num}</div>
                  <div className="text-xs text-white/35">{s.label}</div>
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
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-6">Миссия</p>
                <h2 className="font-inter font-bold text-3xl text-white tracking-[-0.03em] leading-tight mb-5">
                  Делаем ИИ доступным<br />для каждого бизнеса
                </h2>
                <p className="text-sm text-white/45 leading-relaxed">
                  Верим, что искусственный интеллект — это не привилегия корпораций, а инструмент для бизнеса любого масштаба. Создаём решения, которые встраиваются в существующие процессы без болезненных трансформаций.
                </p>
              </div>
            </RevealOnScroll>

            {/* Values */}
            <RevealOnScroll delay={0.1}>
              <div className="p-10">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-6">Принципы</p>
                <div className="space-y-5">
                  {values.map((v, i) => (
                    <div key={i} className="flex gap-4 py-4 border-b border-white/[0.06] last:border-0">
                      <div className="w-6 h-6 border border-white/[0.1] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[10px] font-mono text-white/40">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">{v.title}</h3>
                        <p className="text-xs text-white/40 leading-relaxed">{v.desc}</p>
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
            <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-6">Технологический стек</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-3 py-1.5 border border-white/[0.08] rounded-sm text-xs text-white/50 hover:text-white/80 hover:border-white/[0.15] transition-colors"
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