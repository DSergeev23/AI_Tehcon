import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 py-24 text-center relative">
        <span className="absolute top-5 left-5 text-white/15 text-xs">+</span>
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <span className="absolute bottom-5 left-5 text-white/15 text-xs">+</span>
        <span className="absolute bottom-5 right-5 text-white/15 text-xs">+</span>

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#666', marginBottom: '28px' }}
          className="uppercase"
        >
          Никакого хайпа вокруг ИИ. Только результаты.
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-white"
          style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.1', letterSpacing: '-0.02em', marginBottom: '40px' }}
        >
          Готовы трансформировать<br />бизнес с ИИ?
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(255,255,255,0.38)', maxWidth: '520px', marginBottom: '56px' }}
          className="mx-auto"
        >
          Найдем 3–5 процессов, где ваш бизнес теряет деньги на ручной работе. Покажем, что можно автоматизировать в вашей 1С, CRM и таблицах. За 30–60 минут найдем процессы, которые можно сократить в 5–10 раз.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors"
            style={{ padding: '12px 36px' }}
          >
            Получить аудит
          </Link>
        </motion.div>
      </div>
    </section>
  );
}