import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AutomationBlock() {
  return (
    <section className="border-t border-white/[0.08] overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-28 3xl:px-40 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center order-2 lg:order-1 ml-5">
            
            <div className="absolute inset-0 rounded-2xl"
              style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

            <motion.img
              src="https://media.base44.com/images/public/6a12ce8c6eb2615f598d6ab7/46a529f43_image.png"
              alt="AI Автоматизация"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full max-w-lg lg:max-w-none h-auto mx-auto"
              style={{ filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.05))' }} />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col order-1 lg:order-2">

            <p className="text-[10px] text-white/75 uppercase tracking-[0.2em] mb-6">Автоматизация для корпораций</p>

            <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl text-white leading-tight tracking-tight mb-6">
              Автоматизация<br />под ключ
            </h2>

            <div className="w-8 h-px bg-primary mb-6" />

            <p className="text-sm md:text-base text-white leading-relaxed mb-10 max-w-lg">
              Неважно, какой сложности ваш бизнес — наш Enterprise план создан для тех, кому нужны готовые автоматизированные решения под ключ. Вы описываете свою задачу, а наши специалисты реализуют её с полной поддержкой в минимальные сроки с почасовой оплатой.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 px-6 py-3 signal-button text-sm font-semibold rounded-sm transition-colors">
                Связаться с отделом продаж
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>);
}
