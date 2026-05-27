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
          className="text-[11px] text-white/30 uppercase tracking-[0.2em] mb-6"
        >
          Никакого хайпа вокруг ИИ. Только результаты.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6"
        >
          Готовы трансформировать<br />бизнес с ИИ?
        </motion.h2>

        <motion.ol
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm text-white/40 max-w-md mx-auto mb-10 leading-relaxed space-y-2"
        >
          <li>Найдем 3–5 процессов, где ваш бизнес теряет деньги на ручной работе</li>
          <li>Покажем, что можно автоматизировать в вашей 1С, CRM и таблицах</li>
          <li>За 30–60 минут найдем процессы, которые можно сократить в 5–10 раз</li>
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-md hover:bg-white/90 transition-colors"
          >
            Получить аудит
          </Link>
        </motion.div>
      </div>
    </section>
  );
}