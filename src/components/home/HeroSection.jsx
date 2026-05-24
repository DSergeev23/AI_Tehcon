import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import WireframeGlobe from './WireframeGlobe';
import CornerMark from '../shared/CornerMark';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black grid-lines overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-100" />

      {/* Corner marks */}
      <span className="absolute top-[56px] left-5 text-white/20 text-xs">+</span>
      <span className="absolute top-[56px] right-5 text-white/20 text-xs">+</span>
      <span className="absolute bottom-12 left-5 text-white/20 text-xs">+</span>
      <span className="absolute bottom-12 right-5 text-white/20 text-xs">+</span>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-14 flex flex-col items-center">
        {/* Globe - centered at top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative mt-10 mb-0"
        >
          <WireframeGlobe size={400} />
          {/* Fade bottom of globe */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
        </motion.div>

        {/* Content below globe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full -mt-10 pb-20">
          {/* Left: Badge + Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/[0.12] rounded text-[11px] text-white/50 mb-6">
              <div className="w-3.5 h-3.5 grid grid-cols-2 gap-0.5">
                <div className="bg-white/60 rounded-[1px]" />
                <div className="bg-white/20 rounded-[1px]" />
                <div className="bg-white/20 rounded-[1px]" />
                <div className="bg-white/60 rounded-[1px]" />
              </div>
              Стать бета-партнёром
            </div>

            <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.0] tracking-tight mb-0">
              Ваш ИИ-мозг<br />для бизнеса
            </h1>
          </motion.div>

          {/* Right: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end"
          >
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-sm">
              Безопасный код, зависимости, контейнеры и инфраструктура из единой платформы автоматизации.
            </p>
            <div>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-md hover:bg-white/90 transition-colors"
              >
                Смотреть каталог
                <Plus className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}