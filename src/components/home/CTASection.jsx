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

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] text-white/55 uppercase mb-8"
          style={{ letterSpacing: '0.18em' }}
        >
          Никакого хайпа вокруг ИИ. Только результаты.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-6xl text-white tracking-tight mb-12"
          style={{ lineHeight: '1.05' }}
        >
          Готовы трансформировать<br />бизнес с ИИ?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-[13px] text-white/40 mx-auto text-center" style={{ maxWidth: '420px', lineHeight: '1.85' }}>
            Найдем 3–5 процессов, где ваш бизнес теряет деньги на ручной работе. Покажем, что можно автоматизировать в вашей 1С, CRM и таблицах. За 30–60 минут найдем процессы, которые можно сократить в 5–10 раз.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors"
          >
            Получить аудит
          </Link>
        </motion.div>
      </div>
    </section>
  );
}