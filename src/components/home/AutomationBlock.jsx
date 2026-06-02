import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AutomationBlock() {
  return (
    <section className="border-t border-white/[0.08] overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24" style={{ paddingBlock: '120px' }}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">

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
            className="md:col-span-2 flex flex-col md:pl-12">

            <div className="flex flex-col max-w-xl">
              {/* Eyebrow */}
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-5 font-medium">
                АВТОМАТИЗАЦИЯ ДЛЯ КОРПОРАЦИЙ
              </p>

              {/* Headline */}
              <h2 className="font-inter text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tighter font-extrabold mb-6">
                Автоматизация под ключ
              </h2>

              {/* Divider */}
              <div className="w-10 h-px bg-white/20 mb-7" />

              {/* Body */}
              <p className="text-slate-400 leading-relaxed text-base max-w-md">
                Неважно, какой сложности ваш бизнес, наш Enterprise план создан для тех, кому нужны готовые автоматизированные решения под ключ. Вы описываете свою задачу, а наши специалисты реализуют её с полной поддержкой в минимальные сроки с почасовой оплатой.
              </p>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  to="/contacts"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]">
                  Связаться с отделом продаж
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>);

}