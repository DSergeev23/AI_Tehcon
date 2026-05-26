import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Zap, Shield, Layers, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

const metrics = [
  { value: '4×', label: 'быстрее обработка заявок' },
  { value: '87%', label: 'снижение ручного труда' },
  { value: '24/7', label: 'работа без перерывов' },
];

export default function BentoShowcase() {
  return (
    <section className="border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* Section label */}
        <RevealOnScroll>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-10">Почему Tehcon AI</p>
        </RevealOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-auto">

          {/* Card 1 — Hero wide (span 7) */}
          <RevealOnScroll className="md:col-span-7">
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-[#080808] p-8 min-h-[300px] flex flex-col justify-between group">
              {/* Glow */}
              <div className="absolute top-0 left-0 w-96 h-64 bg-white/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-white/[0.05] transition-all duration-700" />
              {/* Dot pattern */}
              <div className="absolute inset-0 dot-pattern opacity-20" />
              {/* Corner marks */}
              <span className="absolute top-4 left-4 text-white/15 text-xs">+</span>
              <span className="absolute bottom-4 right-4 text-white/15 text-xs">+</span>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/[0.1] rounded-sm text-[10px] text-white/40 mb-6">
                  <Zap className="w-3 h-3" />
                  Автономные агенты
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
                  Агент работает,<br />
                  <span className="italic text-white/60">пока вы спите</span>
                </h2>
                <p className="text-xs text-white/40 max-w-sm leading-relaxed">
                  Задайте правила один раз — ИИ-агент самостоятельно обрабатывает заявки,
                  отвечает клиентам и обновляет CRM без вашего участия.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-8">
                <div className="flex gap-6">
                  {metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-2xl font-serif text-white tracking-tight">{m.value}</div>
                      <div className="text-[10px] text-white/35 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/catalog"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-xs font-semibold rounded-sm hover:bg-white/90 transition-colors flex-shrink-0"
                >
                  Смотреть <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 2 — Tall right (span 5, row-span-2) */}
          <RevealOnScroll delay={0.08} className="md:col-span-5 md:row-span-2">
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-[#060606] p-8 h-full min-h-[300px] md:min-h-0 flex flex-col justify-between group">
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/[0.025] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 group-hover:bg-white/[0.04] transition-all duration-700" />
              <span className="absolute top-4 right-4 text-white/15 text-xs">+</span>

              <div className="relative z-10">
                <div className="w-10 h-10 border border-white/[0.1] rounded flex items-center justify-center mb-6">
                  <Shield className="w-4 h-4 text-white/50" />
                </div>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-3">Безопасность</p>
                <h3 className="font-serif text-3xl text-white tracking-tight leading-tight mb-4">
                  Ваши данные<br />не видит никто,<br />кроме вас
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  Каждый аккаунт изолирован. Данные клиентов, переписки и файлы не пересекаются с чужими. Агент видит только то, что вы разрешили.
                </p>
              </div>

              <div className="relative z-10 mt-8 space-y-2">
                {['Изолированные аккаунты', 'Шифрование данных', 'Enterprise SLA 99.9%', 'Аудит действий'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2 border-b border-white/[0.05] last:border-0">
                    <div className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                    <span className="text-xs text-white/50">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 3 — Integrations (span 4) */}
          <RevealOnScroll delay={0.12} className="md:col-span-4">
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-[#070707] p-7 min-h-[220px] flex flex-col justify-between group">
              <span className="absolute top-4 right-4 text-white/15 text-xs">+</span>

              <div>
                <div className="w-10 h-10 border border-white/[0.1] rounded flex items-center justify-center mb-5">
                  <Layers className="w-4 h-4 text-white/50" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-tight">Одно подключение — все данные внутри</h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  Gmail, Google Calendar, Notion, HubSpot, GitHub, Slack — в один клик.
                </p>
              </div>

              {/* Integration logos strip */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {['Gmail', 'Slack', 'Notion', 'GitHub', 'HubSpot', 'Sheets', '+40'].map((t, i) => (
                  <span key={i} className="px-2 py-0.5 border border-white/[0.08] rounded-sm text-[10px] text-white/35">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 4 — Partner CTA (span 3) */}
          <RevealOnScroll delay={0.16} className="md:col-span-3">
            <div className="relative overflow-hidden rounded-sm border border-white/[0.1] bg-white/[0.03] p-7 min-h-[220px] flex flex-col justify-between group hover:bg-white/[0.05] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
              <span className="absolute top-4 right-4 text-white/20 text-xs">+</span>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/[0.15] rounded-sm text-[10px] text-white/60 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Бета-программа
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-tight leading-snug">
                  Стать первым.<br />Получить больше.
                </h3>
                <p className="text-[11px] text-white/40 leading-relaxed">
                  Приоритетный доступ и персональная настройка.
                </p>
              </div>

              <Link
                to="/contacts"
                className="relative z-10 mt-4 flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
              >
                Подать заявку <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}