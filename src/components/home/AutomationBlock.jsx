import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AutomationBlock() {
  return (
    <section className="bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] md:[background-size:48px_48px] 2xl:[background-size:64px_64px] overflow-hidden">
      <div className="max-w-[1400px] 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto px-6 md:px-12 2xl:px-20 3xl:px-28 py-24 md:py-32 2xl:py-56 3xl:py-72">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left">

          <h2 className="font-bold text-black tracking-tighter text-5xl md:text-7xl 2xl:text-8xl 3xl:text-9xl leading-[1.0] mb-8 2xl:mb-14">
            Автоматизация под ключ
          </h2>

          <p className="text-[#64748b] text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mb-12 2xl:mb-20">
            Неважно, какой сложности ваш бизнес, наш Enterprise план создан для тех, кому нужны готовые автоматизированные решения под ключ. Наши специалисты реализуют вашу задачу с полной поддержкой в минимальные сроки на базе нашей платформы с почасовой оплатой.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-3 px-8 py-4 2xl:px-14 2xl:py-7 bg-green-500 hover:bg-green-600 text-white text-lg 2xl:text-2xl font-semibold rounded-xl transition-colors">
              Связаться с отделом продаж
              <ArrowUpRight className="w-5 h-5 2xl:w-7 2xl:h-7" />
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}