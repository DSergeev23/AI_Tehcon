import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AutomationBlock() {
  return (
    <section className="border-t border-white/[0.08] overflow-hidden relative">
      {/* Dot-grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto px-6 md:px-16 2xl:px-24 py-20 md:py-32 2xl:py-48 3xl:py-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 2xl:gap-40 items-center">

          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center order-2 lg:order-1">

            <div
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.06) 0%, transparent 70%)' }}
            />

            <motion.img
              src="https://media.base44.com/images/public/6a12ce8c6eb2615f598d6ab7/46a529f43_image.png"
              alt="AI Автоматизация"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full max-w-lg lg:max-w-none h-auto mx-auto"
              style={{ filter: 'drop-shadow(0 0 80px rgba(255,255,255,0.07))' }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col order-1 lg:order-2">

            <p className="text-[10px] 2xl:text-xs 3xl:text-sm text-white/40 uppercase tracking-[0.2em] mb-6 2xl:mb-8">
              Автоматизация для корпораций
            </p>

            <h2 className="font-inter text-5xl md:text-7xl 2xl:text-8xl 3xl:text-9xl text-white leading-tight tracking-tight font-semibold mb-6 2xl:mb-10" style={{ letterSpacing: '-0.02em' }}>
              Автоматизация<br />под ключ
            </h2>

            <div className="w-10 h-px bg-white/20 mb-6 2xl:mb-10" />

            <p className="text-lg 2xl:text-2xl 3xl:text-3xl text-white/50 leading-relaxed mb-10 2xl:mb-14 max-w-xl 2xl:max-w-4xl 3xl:max-w-5xl">
              Неважно, какой сложности ваш бизнес — наш Enterprise план создан для тех, кому нужны готовые автоматизированные решения под ключ. Вы описываете свою задачу, а наши специалисты реализуют её с полной поддержкой в минимальные сроки с почасовой оплатой.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-3 px-10 py-5 2xl:px-14 2xl:py-7 bg-white text-black text-xl 2xl:text-2xl font-semibold rounded-sm 2xl:rounded-2xl hover:bg-white/90 transition-colors">
                Связаться с отделом продаж
                <ArrowUpRight className="w-5 h-5 2xl:w-7 2xl:h-7" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}