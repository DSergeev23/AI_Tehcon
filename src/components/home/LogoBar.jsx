import React from 'react';
import { motion } from 'framer-motion';

const logos = ['Сбербанк', 'Яндекс', 'VK Tech', 'Газпром', 'Тинькофф', 'МТС'];

export default function LogoBar() {
  return (
    <div className="border-y border-white/[0.08] bg-black">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {logos.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`py-5 flex items-center justify-center border-r border-white/[0.08] last:border-r-0 ${i >= 3 ? 'md:border-t-0 border-t border-white/[0.08]' : ''}`}
            >
              <span className="text-xs font-semibold text-white/25 tracking-wide uppercase">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}