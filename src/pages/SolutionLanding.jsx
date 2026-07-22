import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowLeft,
  ChartNoAxesCombined,
  Check,
  Clock3,
  Copy,
  Database,
  FileWarning,
  Files,
  Inbox,
  ListChecks,
  Mail,
  MessageSquareWarning,
  Paperclip,
  Plus,
  ScanSearch,
  SquareCheckBig,
  Tags,
  TriangleAlert,
  Unplug,
  UsersRound,
  Waypoints,
} from 'lucide-react';
import SEOHead from '../components/shared/SEOHead';
import RevealOnScroll from '../components/shared/RevealOnScroll';
import LandingLeadForm from '../components/landing/LandingLeadForm';
import { getSolutionLanding } from '../lib/solutionLandings';
import { createSolutionLandingSchema } from '../lib/structuredData';
import { trackLandingEvent } from '../lib/analytics';

const icons = {
  ChartNoAxesCombined,
  Clock3,
  Copy,
  Database,
  FileWarning,
  Files,
  Inbox,
  ListChecks,
  Mail,
  MessageSquareWarning,
  Paperclip,
  ScanSearch,
  SquareCheckBig,
  Tags,
  TriangleAlert,
  Unplug,
  UsersRound,
  Waypoints,
};

function scrollToForm(landing, position) {
  trackLandingEvent('landing_cta_click', {
    landing: landing.slug,
    cta_position: position,
  });
  document.getElementById('landing-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ProcessDiagram({ diagram }) {
  return (
    <div className="relative border border-white/[0.14] bg-black/70 p-5 sm:p-7" aria-label={diagram.label}>
      <span className="absolute -left-px -top-px h-2.5 w-2.5 border-l border-t border-primary" aria-hidden="true" />
      <span className="absolute -bottom-px -right-px h-2.5 w-2.5 border-b border-r border-primary" aria-hidden="true" />
      <div className="mb-7 flex items-center justify-between gap-4">
        <p className="text-[10px] uppercase tracking-[0.14em] text-white/55">{diagram.label}</p>
        <span className="font-mono text-[10px] text-primary">LIVE / 03</span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
        {diagram.nodes.map((node, index) => {
          const Icon = icons[node.icon];
          return (
            <React.Fragment key={node.label}>
              <div className="min-w-0 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center border border-primary/40 bg-primary/[0.10] text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="text-xs font-medium leading-snug text-white break-words">{node.label}</p>
                <p className="mt-1 hidden text-[9px] leading-snug text-white/45 sm:block">{node.meta}</p>
              </div>
              {index < diagram.nodes.length - 1 && (
                <div className="relative h-px w-4 bg-white/20 sm:w-8" aria-hidden="true">
                  <span className="absolute -right-px -top-[2px] h-1.5 w-1.5 rotate-45 border-r border-t border-primary" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-8 border-t border-white/[0.09] pt-5">
        <p className="text-xs leading-relaxed text-white/70">{diagram.result}</p>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return <p className="mb-5 text-[11px] uppercase tracking-[0.14em] text-primary">{children}</p>;
}

export default function SolutionLanding() {
  const { slug } = useParams();
  const landing = getSolutionLanding(slug);

  if (!landing) return <Navigate to="/catalog" replace />;

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead {...landing.seo} schemaJson={createSolutionLandingSchema(landing)} />

      <div className="border-b border-white/[0.08]">
        <div className="mx-auto flex w-full max-w-[1600px] items-center gap-2 px-5 py-4 md:px-8 lg:px-10">
          <Link to="/catalog" className="inline-flex items-center gap-1.5 text-xs text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Решения
          </Link>
          <span className="text-xs text-primary/60">/</span>
          <span className="truncate text-xs text-white/45">{landing.breadcrumb}</span>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="px-5 py-16 md:px-8 md:py-20 lg:border-r lg:border-white/[0.08] lg:px-10 lg:py-24 xl:py-28"
          >
            <div className="mb-7 inline-flex items-center gap-2 border border-primary/40 bg-primary/[0.08] px-3 py-1.5">
              <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/80">{landing.category}</span>
            </div>
            <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,6.4rem)] leading-[0.98] text-white">
              {landing.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
              {landing.lead}
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollToForm(landing, 'hero')}
                className="signal-button inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {landing.cta}
                <Plus className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="text-xs leading-relaxed text-white/50">Первая встреча: задача, контур и следующий шаг</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center px-5 pb-16 md:px-8 md:pb-20 lg:px-10 lg:py-24 xl:px-14"
          >
            <div className="w-full">
              <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-white/45">{landing.signal}</p>
              <ProcessDiagram diagram={landing.diagram} />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-28">
          <RevealOnScroll className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <SectionLabel>Где возникает потеря</SectionLabel>
              <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">Привычная рутина скрывает стоимость процесса</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/65">{landing.frictionIntro}</p>
            </div>
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {landing.frictions.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <div key={item.title} className="grid grid-cols-[40px_1fr] gap-4 py-6 sm:grid-cols-[48px_0.55fr_1fr] sm:items-start sm:gap-6">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/[0.14] text-primary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold leading-snug text-white">{item.title}</h3>
                    <p className="col-start-2 text-sm leading-relaxed text-white/62 sm:col-start-3">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-28">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <SectionLabel>Рабочий подход</SectionLabel>
              <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">{landing.processTitle}</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-base">{landing.processLead}</p>
            </div>
          </RevealOnScroll>

          <div className="mt-14 grid grid-cols-1 border-t border-white/[0.1] md:grid-cols-2 xl:grid-cols-4">
            {landing.steps.map((step, index) => (
              <RevealOnScroll key={step.title} delay={index * 0.06}>
                <div className="relative min-h-full border-b border-white/[0.1] py-7 md:px-7 md:odd:border-r xl:border-b-0 xl:border-r xl:last:border-r-0 xl:first:pl-0">
                  <span className="font-mono text-[11px] text-primary">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-8 text-base font-semibold leading-snug text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{step.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:grid-cols-2">
          <RevealOnScroll className="px-5 py-20 md:px-8 lg:border-r lg:border-white/[0.08] lg:px-10 lg:py-24">
            <SectionLabel>Артефакты</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">{landing.outcomesTitle}</h2>
            <div className="mt-9 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {landing.outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 py-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-white/75">{item}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08} className="bg-white/[0.018] px-5 py-20 md:px-8 lg:px-10 lg:py-24 xl:px-16">
            <SectionLabel>Контроль и границы</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">{landing.controlTitle}</h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/68 md:text-base">{landing.controlText}</p>
            <button
              type="button"
              onClick={() => scrollToForm(landing, 'control')}
              className="mt-9 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-white transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Обсудить границы проекта
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-24">
          <RevealOnScroll className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <SectionLabel>Точка входа</SectionLabel>
              <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">{landing.useCasesTitle}</h2>
            </div>
            <div className="grid grid-cols-1 gap-px bg-white/[0.1] sm:grid-cols-2">
              {landing.useCases.map((item, index) => (
                <div key={item} className="min-h-36 bg-black p-6">
                  <span className="font-mono text-[10px] text-primary">{String(index + 1).padStart(2, '0')}</span>
                  <p className="mt-7 text-sm leading-relaxed text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 px-5 py-20 md:px-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20 lg:px-10 lg:py-24">
          <RevealOnScroll>
            <SectionLabel>Перед стартом</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">Частые вопросы</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08} className="mt-10 divide-y divide-white/[0.09] border-y border-white/[0.09] lg:mt-0">
            {landing.faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold leading-snug text-white marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  {item.question}
                  <Plus className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-relaxed text-white/62">{item.answer}</p>
              </details>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section id="landing-form" className="scroll-mt-20">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
          <RevealOnScroll className="px-5 py-20 md:px-8 lg:border-r lg:border-white/[0.08] lg:px-10 lg:py-24">
            <SectionLabel>Следующий шаг</SectionLabel>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-6xl">{landing.formTitle}</h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">{landing.formDescription}</p>
            <div className="mt-10 border-l border-primary pl-5">
              <p className="text-xs uppercase tracking-[0.12em] text-white/45">Что обсудим</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">Цель, текущий маршрут работы, ограничения по данным и разумный формат первого этапа.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08} className="bg-white/[0.018] px-5 py-20 md:px-8 lg:px-10 lg:py-24 xl:px-16">
            <LandingLeadForm landing={landing} />
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
