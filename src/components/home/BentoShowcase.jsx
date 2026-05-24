import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

export default function BentoShowcase() {
  return (
    <section id="benefits" className="border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          {/* Left: dark photo-like block */}
          <RevealOnScroll>
            <div className="relative overflow-hidden border-r border-white/[0.08] min-h-[340px] md:min-h-0">
              {/* Cloud-like blobs */}
              <div className="absolute inset-0 bg-[#0a0a0a]">
                <div className="absolute top-8 left-10 w-64 h-48 rounded-full bg-white/[0.04] blur-3xl" />
                <div className="absolute top-20 right-8 w-48 h-40 rounded-full bg-white/[0.03] blur-2xl" />
                <div className="absolute bottom-16 left-1/4 w-72 h-36 rounded-full bg-white/[0.03] blur-3xl" />
                {/* Dot pattern overlay */}
                <div className="absolute inset-0 dot-pattern opacity-30" />
              </div>
              <div className="relative z-10 p-10 flex flex-col justify-end h-full min-h-[340px]">
                <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
                  Встречи. Результаты<br />в действии.
                </h2>
                <p className="text-xs text-white/45 max-w-xs leading-relaxed mb-8">
                  Автоматические резюме, мгновенный обмен и умная организация для продвижения проектов.
                </p>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-md w-fit hover:bg-white/90 transition-colors">
                  Начать <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <Plus className="absolute bottom-5 right-5 w-3.5 h-3.5 text-white/15" />
            </div>
          </RevealOnScroll>

          {/* Right: stats panel */}
          <RevealOnScroll delay={0.1}>
            <div className="relative p-10 flex flex-col justify-center bg-[#050505] min-h-[340px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/[0.1] rounded text-[11px] text-white/40 mb-6 w-fit">
                <div className="w-3 h-3 grid grid-cols-2 gap-0.5">
                  <div className="bg-white/60 rounded-[1px]" />
                  <div className="bg-white/20 rounded-[1px]" />
                  <div className="bg-white/20 rounded-[1px]" />
                  <div className="bg-white/60 rounded-[1px]" />
                </div>
                Стать бета-партнёром
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
                Организованно.<br />Синхронизированно.<br />Проактивно.
              </h2>
              <p className="text-xs text-white/40 leading-relaxed max-w-sm">
                Превращайте каждое взаимодействие в чёткие резюме, легко отслеживаемые заметки и аналитику.
              </p>
              <Plus className="absolute top-5 right-5 w-3.5 h-3.5 text-white/15" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}