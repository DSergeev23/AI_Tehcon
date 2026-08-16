import React from 'react';
import CanonicalLink from '../shared/CanonicalLink';
import { Zap, Layers, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

const metrics = [
{ value: '15 сек', label: 'обработка заявки' },
{ value: '90%', label: 'снижение ошибок ручного ввода' },
{ value: '24/7', label: 'контроль всех бизнес-процессов' }];


export default function BentoShowcase() {
  return (
    <section className="border-t border-white/[0.08] render-deferred">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-16 2xl:py-24">

        {/* Section label */}
        <RevealOnScroll>
          <p className="text-sm text-white uppercase tracking-[0.2em] mb-10 font-semibold">Почему AI TehCon</p>
        </RevealOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-auto">

          {/* Card 1 — Hero wide (span 7) */}
          <RevealOnScroll className="md:col-span-7">
            <div className="relative overflow-hidden rounded-sm border premium-panel p-8 min-h-[300px] flex flex-col justify-between group">
              {/* Glow */}
              <div className="absolute top-0 left-0 w-96 h-64 bg-white/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-white/[0.05] transition-all duration-700" />
              {/* Dot pattern */}
              <div className="absolute inset-0 dot-pattern opacity-20" />
              {/* Corner marks */}
              <span className="absolute top-4 left-4 text-white/15 text-xs">+</span>
              <span className="absolute bottom-4 right-4 text-white/15 text-xs">+</span>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border signal-badge rounded-sm text-[10px] mb-6">
                  <Zap className="w-3 h-3" />
                  Автономные агенты
                </div>
                <h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl text-white leading-tight tracking-tight mb-4">Бизнес работает, пока вы принимаете решения


                </h2>
                <p className="text-xs text-white/80 max-w-sm leading-relaxed">Пока вы строите стратегию, AI-агенты Tehcon управляют процессами в 1С, CRM и мессенджерах. Без пауз, ошибок и человеческого фактора.

                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mt-8">
                <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-6 w-full sm:w-auto">
                  {metrics.map((m, i) =>
                  <div key={i}>
                      <div className="text-2xl font-serif text-signal tracking-tight">{m.value}</div>
                      <div className="text-[10px] text-white/75 mt-0.5">{m.label}</div>
                    </div>
                  )}
                </div>
                <CanonicalLink
                  to="/contacts"
                  className="flex w-full sm:w-auto items-center justify-center gap-1.5 px-4 py-2 signal-button text-xs font-semibold rounded-sm transition-colors text-center whitespace-normal sm:whitespace-nowrap">Рассчитать потенциал</CanonicalLink>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 2 — Tall right (span 5, row-span-2) */}
          <RevealOnScroll delay={0.08} className="md:col-span-5 md:row-span-2">
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-[#060606] p-8 h-full min-h-[300px] md:min-h-0 flex flex-col justify-between group">
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/[0.025] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 group-hover:bg-white/[0.04] transition-all duration-700" />
              <span className="absolute top-4 right-4 text-white/15 text-xs">+</span>

              <div className="relative z-10">
                
                <h3 className="text-white tracking-tight leading-tight mb-4 text-3xl normal-case opacity-100 [font-family:'Roboto',_sans-serif] font-normal">Операционный интеллект

                </h3>
                <p className="text-xs text-white font-semibold mb-3">Что делает AI TehCon</p>
                <div className="space-y-3 text-xs text-white/80 leading-relaxed">
                  <p>Найдём процессы, где сотрудники тратят время вручную, и сделаем так, чтобы система выполняла их сама.</p>
                  <p>Подключимся к 1С и покажем не просто цифры, а выводы:</p>
                  <div className="space-y-1 pl-3 border-l border-white/[0.08]">
                    {['что продаётся', 'что лежит на складе', 'где заморожены деньги', 'что пора распродать', 'что нужно докупить'].map((item, i) =>
                    <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    )}
                  </div>
                  <p>Настроим автоматические напоминания, чтобы клиенты и менеджеры не забывали важные действия.</p>
                </div>
              </div>

              <div className="relative z-10 mt-6">
                <p className="text-xs text-white/75 italic">Мы поможем вам управлять бизнесом не по ощущениям, а по понятным данным.</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 3 — Integrations (span 4) */}
          <RevealOnScroll delay={0.12} className="md:col-span-4">
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-[#070707] p-7 min-h-[220px] flex flex-col justify-between group">
              <span className="absolute top-4 right-4 text-white/15 text-xs">+</span>

              <div>
                <div className="w-10 h-10 border border-white/[0.1] rounded flex items-center justify-center mb-5">
                  <Layers className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-tight">Единый контур управления</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Связываем 1С, CRM, почту и мессенджеры в живую экосистему. Данные больше не теряются.
                </p>
              </div>

              {/* Integration logos strip */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {['1С:ERP', 'Bitrix24', 'amoCRM', 'Telegram', 'WhatsApp', 'Почта'].map((t, i) =>
                <span key={i} className="px-2 py-0.5 border border-white/[0.12] rounded-sm text-[10px] text-white/75">
                    {t}
                  </span>
                )}
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 4 — Partner CTA (span 3) */}
          <RevealOnScroll delay={0.16} className="md:col-span-3">
            <div className="relative overflow-hidden rounded-sm border border-white/[0.1] bg-white/[0.03] p-7 min-h-[220px] flex flex-col justify-between group hover:bg-white/[0.05] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
              <span className="absolute top-4 right-4 text-primary/55 text-xs">+</span>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border signal-badge rounded-sm text-[10px] mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Early Access
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-tight leading-snug">
                  Станьте первым.<br />Заберите преимущество.
                </h3>
                <p className="text-[11px] text-white/80 leading-relaxed">
                  Через год разрыв в эффективности между AI-бизнесом и ручным управлением станет критическим.
                </p>
              </div>

              <CanonicalLink
                to="/contacts"
                className="relative z-10 mt-4 flex items-center gap-1.5 text-xs text-white/75 hover:text-white transition-colors">
                
                Записаться на аудит процессов <ArrowUpRight className="w-3.5 h-3.5" />
              </CanonicalLink>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>);

}
