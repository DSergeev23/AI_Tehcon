import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="border-t border-white/[0.08]">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-24 2xl:py-36 text-center relative">
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
          style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.75)', marginBottom: '28px' }}
          className="uppercase">
          
          Никакого хайпа вокруг ИИ. Только результаты.
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-white"
          style={{ fontSize: 'clamp(48px, 5vw, 100px)', lineHeight: '1.1', letterSpacing: '-0.02em', marginBottom: '40px' }}>
          
          Готовы трансформировать<br />бизнес с ИИ?
        </motion.h2>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-14"
          style={{ maxWidth: '560px' }}>
          
          <div className="flex flex-col gap-4">
            {[
            { num: '01', text: 'Найдём 3–5 процессов, где бизнес теряет деньги на ручной работе' },
            { num: '02', text: 'Покажем, что можно автоматизировать в вашей 1С, CRM и таблицах' },
            { num: '03', text: 'За 30–60 минут — процессы, которые сократятся в 5–10 раз' }].
            map(({ num, text }) =>
            <div key={num} className="flex items-start gap-5 text-left">
                <span className="text-[10px] text-signal tracking-widest mt-0.5 font-mono shrink-0">{num}</span>
                
                <p className="text-white leading-relaxed opacity-100 text-base text-justify">{text}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 signal-button text-sm font-semibold rounded-sm transition-colors"
            style={{ padding: '12px 36px' }}>
            
            Получить аудит
          </Link>
        </motion.div>
      </div>
    </section>);

}
