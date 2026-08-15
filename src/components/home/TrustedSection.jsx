import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';

const logos = [
  'Сбербанк', 'Яндекс', 'VK', 'Газпром', 'Тинькофф', 'МТС', 'Ozon', 'Wildberries'
];

export default function TrustedSection() {
  return (
    <section className="relative py-20 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-signal mb-10">
            Нам доверяют лидеры рынка
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center">
            {logos.map((name, i) => (
              <div
                key={i}
                className="text-lg font-bold text-white/[0.15] hover:text-white/[0.35] transition-colors duration-500 tracking-tight cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
