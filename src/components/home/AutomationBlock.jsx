import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AutomationBlock() {
  return (
    <section className="border-t border-white/[0.08] overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24" style={{ paddingBlock: '120px' }}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 2xl:gap-32 items-center">

          {/* Left: Visual — 60% */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 relative flex items-center justify-center">
            
            {/* Subtle ambient glow behind image */}
            <div className="absolute inset-0 rounded-2xl"
            style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
            

            {/* Floating image */}
            <motion.img
              src="https://media.base44.com/images/public/6a12ce8c6eb2615f598d6ab7/46a529f43_image.png"
              alt="AI Автоматизация"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full h-auto"
              style={{
                filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.05))',
                marginBottom: '-24px'
              }} />
            
          </motion.div>

          {/* Right: Content — 40% */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 flex flex-col md:pl-12 md:items-end">
            
            <div className="flex flex-col gap-0 w-full max-w-xl 2xl:max-w-3xl">
              <p className="text-xs md:text-sm text-slate-500 uppercase tracking-[0.2em] mb-5">АВТОМАТИЗАЦИЯ ДЛЯ КОРПОРАЦИЙ</p>

              <h2 className="font-bold text-5xl md:text-7xl 2xl:text-8xl 3xl:text-9xl text-white leading-tight tracking-tighter mb-0">
                Автоматизация под ключ
              </h2>

              <p className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed text-slate-400 mt-6 md:mt-10">
                Неважно, какой сложности ваш бизнес, наш Enterprise план создан для тех, кому нужны готовые автоматизированные решения под ключ. Наши специалисты реализуют вашу задачу с полной поддержкой в минимальные сроки на базе нашей платформы с почасовой оплатой.
              </p>

              <div className="pt-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}>
                  <Link
                    to="/contacts"
                    className="inline-flex items-center gap-2 px-6 py-3 2xl:px-12 2xl:py-6 2xl:text-2xl 2xl:rounded-2xl bg-white text-black text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors">
                    Связаться с отделом продаж
                    <ArrowUpRight className="w-4 h-4 2xl:w-6 2xl:h-6" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>);

}