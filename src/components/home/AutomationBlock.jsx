import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AutomationBlock() {
  return (
    <section className="border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5" style={{ paddingBlock: '120px' }}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">

          {/* Left: Visual — 60% */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 relative flex items-center justify-center"
          >
            {/* Subtle ambient glow behind image */}
            <div className="absolute inset-0 rounded-2xl"
              style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
            />

            {/* Floating image */}
            <motion.img
              src="https://media.base44.com/images/public/6a12ce8c6eb2615f598d6ab7/46a529f43_image.png"
              alt="AI Автоматизация"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full h-auto"
              style={{
                filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.05))',
                marginBottom: '-24px',
              }}
            />
          </motion.div>

          {/* Right: Content — 40% */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <p className="text-[11px] text-white/30 uppercase tracking-[0.2em]">
              Enterprise Automation
            </p>

            <h2
              className="font-inter text-4xl md:text-5xl text-white leading-tight"
              style={{ letterSpacing: '-0.02em', fontWeight: 600 }}
            >
              Автоматизация под ключ
            </h2>

            <p
              className="leading-relaxed"
              style={{ fontSize: '18px', color: '#A1A1AA', maxWidth: '360px' }}
            >
              Неважно, какой сложности ваш бизнес, наш Enterprise план создан для тех, кому нужны готовые автоматизированные решения под ключ. Вы описываете свою задачу, а наши верифицированные пользователи реализуют её с полной поддержкой в минимальные сроки на базе нашей платформы с почасовой оплатой.
            </p>

            <div className="pt-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contacts"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors"
                >
                  Связаться с отделом продаж
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}