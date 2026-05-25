import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

const cases = [
  {
    quote: '" Вначале купили подписку за $300 на месяц и получили 15 готовых workflow по лидогенерации и маркетингу. За первые 2 недели их внедрили, протестировали и увидели результат. Начали резать ФОТ и убирать неэффективных людей, и сейчас 2 человека управляют всеми ИИ-агентами. Работает лучше, чем весь штат маркетинга раньше. Оплатили недавно VIP-подписку. "',
    stats: [
      { value: '$500', label: 'затраты на сервис' },
      { value: '490%', label: 'рост качественных лидов' },
      { value: '$8000', label: 'экономия на ФОТ' },
    ],
    client: 'Маркетинговая команда',
    type: 'AI workflow + Маркетплейс',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    quote: '" Автоматизировали обработку входящих заявок — раньше менеджеры тратили по 3 часа в день только на сортировку. Сейчас агент сам квалифицирует, отвечает на типовые вопросы и передаёт горячих клиентов. Конверсия выросла, а команда занимается реальными продажами. "',
    stats: [
      { value: '3ч', label: 'экономия времени в день' },
      { value: '+34%', label: 'рост конверсии' },
      { value: '×3', label: 'больше сделок' },
    ],
    client: 'Отдел продаж B2B',
    type: 'AI-агент + CRM интеграция',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    quote: '" Подключили ИИ к Google Sheets и Telegram. Теперь еженедельные отчёты генерируются автоматически и приходят прямо в чат. Аналитик освободился от рутины и работает над стратегией. Окупилось за первую неделю. "',
    stats: [
      { value: '8ч', label: 'экономия в неделю' },
      { value: '100%', label: 'автоматизация отчётов' },
      { value: '$0', label: 'доп. найм' },
    ],
    client: 'Финансовый отдел',
    type: 'Автоматизация + Аналитика',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
  },
];

export default function CasesSection() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <section className="border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 py-24">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-white tracking-tight mb-4">
              Кейсы клиентов
            </h2>
            <p className="text-sm text-white/40">
              Те, кто уже автоматизировал рутину и считает результаты в цифрах
            </p>
          </div>
        </RevealOnScroll>

        {/* Card */}
        <RevealOnScroll delay={0.1}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative border border-white/[0.1] rounded-sm bg-white/[0.02] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {/* Corner marks */}
            <span className="absolute top-4 left-4 text-white/15 text-xs">+</span>
            <span className="absolute top-4 right-4 text-white/15 text-xs">+</span>
            <span className="absolute bottom-4 left-4 text-white/15 text-xs">+</span>
            <span className="absolute bottom-4 right-4 text-white/15 text-xs">+</span>

            {/* Left */}
            <div className="flex flex-col justify-between gap-8">
              <p className="text-base text-white/80 leading-relaxed font-serif">
                {current.quote}
              </p>

              {/* Stats */}
              <div className="flex gap-8 flex-wrap">
                {current.stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl font-semibold text-white tracking-tight">{s.value}</div>
                    <div className="text-xs text-white/40 mt-1 leading-tight max-w-[90px]">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Client info */}
              <div className="border-t border-white/[0.08] pt-5">
                <div className="text-sm font-semibold text-white">{current.client}</div>
                <div className="text-xs text-white/40 mt-0.5">{current.type}</div>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08] min-h-[220px]">
              <img
                src={current.image}
                alt={current.client}
                className="w-full h-full object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-6 h-0.5 transition-colors duration-200 ${i === active ? 'bg-white' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActive((active - 1 + cases.length) % cases.length)}
              className="w-9 h-9 border border-white/[0.1] rounded-sm flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActive((active + 1) % cases.length)}
              className="w-9 h-9 border border-white/[0.1] rounded-sm flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}