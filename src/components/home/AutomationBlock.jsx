import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AutomationBlock() {
  return (
    <section className="border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-80 rounded-sm border border-white/[0.08] bg-gradient-to-br from-white/[0.02] to-white/[0.01] flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-white/20 text-sm font-serif mb-2">Иллюстрация</div>
              <div className="text-white/10 text-xs">Автоматизация процессов</div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Автоматизация под ключ
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Независимо от сложности вашего бизнеса, наш Enterprise план создан для тех, кому нужны готовые автоматизированные решения под ключ. Вы описываете свою задачу, а наши верифицированные пользователи реализуют её с полной поддержкой в минимальные сроки и срок нашей платформы с почасовой оплатой.
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-md hover:bg-white/90 transition-colors"
            >
              Связаться с отделом продаж <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}