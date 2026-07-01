import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

const cases = [
  {
    quote: '" У клиента база 1С не успевала за продажами на маркетплейсах: остатки, цены и заказы обновлялись вручную, а отчёты собирались после закрытия дня. Мы настроили синхронизацию 1С с Ozon, добавили AI-анализ продаж и контроль расхождений. Система сама сверяет карточки, остатки и заказы, подсвечивает ошибки и помогает планировать закупки. "',
    stats: [
      { value: '40 000', label: 'затраты на сервис' },
      { value: '-70%', label: 'затрат на анализ продаж' },
      { value: '100 000р', label: 'экономия на ФОТ в месяц' },
    ],
    client: 'Автоматизация базы 1С',
    type: '1С + AI + Маркетплейс',
    image: '/images/1c-ozon-sync-case.png',
  },
  {
    quote: '" Связали базу 1С:УТ с Яндекс Алисой и AI-слоем аналитики. Руководитель задаёт голосом вопрос по продажам, остаткам, заказам или марже, а система забирает актуальные данные из 1С и возвращает ответ в читаемом виде. Любые отчёты из 1С теперь доступны голосом каждый день без ручной подготовки таблиц. "',
    stats: [
      { value: 'любой', label: 'отчёт из 1С голосом' },
      { value: '100%', label: 'информации по анализу каждый день' },
      { value: '+1', label: 'правильное решение каждый день' },
    ],
    client: 'Руководство',
    type: '1С + Алиса + AI',
    image: '/images/1c-alice-report-case.png',
  },
  {
    quote: '" В распределённой розничной сети выбрали показатели, которые нужно отслеживать в 1С:УТ каждый день: например, продажи по категориям за последние сутки. Мы запустили ИИ-агента, который ежедневно анализирует динамику, находит просадки продаж по категориям и сразу сигнализирует руководителям. Это помогает оперативно реагировать на изменения и принимать правильные стратегические решения. "',
    stats: [
      { value: '20 ч', label: 'экономия в неделю' },
      { value: '100%', label: 'ежедневный анализ показателей' },
      { value: 'Оперативная', label: 'реакция на ошибки в торговле' },
    ],
    client: 'Розничная сеть',
    type: '1С + AI',
    image: '/images/1c-retail-ai-alert-case.png',
  },
];

export default function CasesSection() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <section className="border-t border-white/[0.08]">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-24 2xl:py-32">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl 2xl:text-7xl text-white tracking-tight mb-4">
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
