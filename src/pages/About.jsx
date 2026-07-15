import React from 'react';
import { Link } from 'react-router-dom';
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

const techGroups = [
  { title: 'Учёт и данные', items: ['1С', 'SQL', 'PostgreSQL', 'Excel', 'REST API'] },
  { title: 'ИИ и документы', items: ['LLM', 'OCR', 'Компьютерное зрение', 'RAG', 'Классификация'] },
  { title: 'Интеграции и эксплуатация', items: ['Python', 'TypeScript', 'Email (IMAP/SMTP)', 'Docker', 'Очереди задач', 'Мониторинг'] },
];

const oneCExpertise = [
  { title: 'Понимаем логику учёта', description: 'Работаем с документами, справочниками, регистрами, ролями, складскими и кадровыми процессами — учитываем не только интерфейс, но и правила, по которым живёт база.' },
  { title: 'Связываем 1С с ИИ', description: 'Подключаем ИИ к данным и документам 1С: он анализирует, проверяет, ищет отклонения, готовит рекомендации и запускает согласованные действия.' },
  { title: 'Встраиваем в контур компании', description: 'Дополняем 1С интеграциями с CRM, Excel, почтой, ТСД, API и внутренними сервисами, чтобы процесс не обрывался между системами.' },
];

const automationDirections = [
  { title: 'Документы и OCR', description: 'Распознавание сканов, проверка реквизитов, подписей и обязательных полей.', to: '/catalog/image-analysis' },
  { title: 'CRM и коммуникации', description: 'Обработка заявок, лидов, обращений и клиентских сообщений в рабочих каналах.', to: '/catalog/marketing' },
  { title: 'Данные, отчёты и Excel', description: 'Сбор данных, поиск отклонений, регулярные отчёты и ответы на вопросы бизнеса.', to: '/catalog/analytics' },
  { title: 'Склад, ТСД и операции', description: 'Инвентаризация, контроль адресного склада, пересортицы и складских документов.', to: '/catalog/1c-ai-warehouse-inventory' },
  { title: '1С и корпоративные интеграции', description: 'Связь учёта, документов и действий в 1С с ИИ и внешними системами.', to: '/catalog/1c' },
  { title: 'Почта, заявки и сервисы', description: 'Классификация входящей почты, маршрутизация задач и запуск сценариев по правилам.', to: '/catalog' },
];

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
              ИИ-автоматизация бизнеса<br />и интеграции для компаний
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm text-white leading-relaxed mb-6">
              AI TehCon автоматизирует бизнес-процессы с помощью ИИ: от анализа данных и документов до действий в рабочих системах.
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              Объединяем экспертизу в машинном обучении, интеграциях и оптимизации процессов. Обладаем углублёнными знаниями 1С, но работаем и с CRM, Excel, почтой, ТСД, API и внутренними сервисами компании.
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
                <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Миссия</h2>
                <h3 className="font-serif text-3xl text-white tracking-tight leading-tight mb-5">
                  Делаем ИИ доступным<br />для каждого бизнеса
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Верим, что искусственный интеллект — это не привилегия корпораций, а инструмент для бизнеса любого масштаба. Создаём решения, которые встраиваются в существующие процессы без болезненных трансформаций.
                </p>
              </div>
            </RevealOnScroll>

            {/* Values */}
            <RevealOnScroll delay={0.1}>
              <div className="p-10">
                <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Принципы</h2>
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

      {/* Automation directions */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-16">
          <RevealOnScroll>
            <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Какие процессы автоматизируем</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
              {automationDirections.map((direction) => (
                <Link
                  key={direction.title}
                  to={direction.to}
                  className="group p-7 border-r border-b border-white/[0.08] hover:bg-white/[0.025] transition-colors"
                >
                  <h3 className="text-base font-semibold text-white mb-3 group-hover:text-primary transition-colors">{direction.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">{direction.description}</p>
                  <span className="text-xs text-white/75 group-hover:text-white transition-colors">Смотреть решения →</span>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* 1C expertise */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-16">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Экспертиза 1С</h2>
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-tight mb-5">
                  Углублённые знания 1С<br />для внедрения ИИ в работу бизнеса
                </h3>
                <p className="text-sm text-white/80 leading-relaxed max-w-xl">
                  1С — одна из ключевых систем в операционном контуре многих компаний. Поэтому мы проектируем ИИ-сценарии с учётом реальных данных, прав доступа и документов, а не как внешнюю надстройку без связи с процессом.
                </p>
              </div>
              <div className="border-t border-l border-white/[0.08]">
                {oneCExpertise.map((item, index) => (
                  <div key={item.title} className="grid grid-cols-[auto_1fr] gap-5 p-6 border-r border-b border-white/[0.08]">
                    <span className="font-mono text-xs text-signal pt-0.5">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Tech stack */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-12">
          <RevealOnScroll>
            <h2 className="text-[12px] text-signal uppercase tracking-[0.15em] mb-6">Технологический стек</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {techGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border border-white/[0.1] p-7"
                >
                  <h3 className="text-sm font-semibold text-white mb-5">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="px-2.5 py-1.5 border border-white/[0.12] rounded-sm text-xs text-white/75">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <CTASection variant="about" />
    </div>
  );
}
