import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';
import ResponsiveImage from '../shared/ResponsiveImage';
import { cases } from '../../lib/cases';

export default function CasesSection() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <section className="border-t border-white/[0.08] render-deferred">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-24 2xl:py-32">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl 2xl:text-7xl text-white tracking-tight mb-4">
              Кейсы клиентов
            </h2>
            <p className="text-sm text-white/75">
              Те, кто уже автоматизировал рутину и считает результаты в цифрах
            </p>
          </div>
        </RevealOnScroll>

        {/* Card */}
        <RevealOnScroll delay={0.1}>
          <div
            key={active}
            className="relative border premium-panel rounded-sm p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 page-enter"
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
                    <div className="text-3xl font-semibold text-signal tracking-tight">{s.value}</div>
                    <div className="text-xs text-white/75 mt-1 leading-tight max-w-[90px]">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Client info */}
              <div className="border-t border-white/[0.08] pt-5">
                <div className="text-sm font-semibold text-white">{current.client}</div>
                <div className="text-xs text-white/75 mt-0.5">{current.type}</div>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08] min-h-[220px]">
              <ResponsiveImage
                src={current.image}
                alt={current.client}
                sizes="(min-width: 1280px) 560px, (min-width: 768px) 45vw, calc(100vw - 40px)"
                pictureClassName="contents"
                className="w-full h-full object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </div>
        </RevealOnScroll>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Показать кейс ${i + 1}: ${cases[i].client}`}
                aria-pressed={i === active}
                className={`w-6 h-0.5 transition-colors duration-200 ${i === active ? 'bg-primary' : 'bg-white/40 hover:bg-white/75'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActive((active - 1 + cases.length) % cases.length)}
              aria-label="Показать предыдущий кейс"
              className="w-9 h-9 border border-white/[0.16] rounded-sm flex items-center justify-center text-white/75 hover:text-white hover:border-primary/45 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setActive((active + 1) % cases.length)}
              aria-label="Показать следующий кейс"
              className="w-9 h-9 border border-white/[0.16] rounded-sm flex items-center justify-center text-white/75 hover:text-white hover:border-primary/45 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
