import React from 'react';
import { motion } from 'framer-motion';

export default function RevealOnScroll({ children, className = '', delay = 0, direction = 'up' }) {
  const offsets = { up: { y: 24, x: 0 }, down: { y: -24, x: 0 }, left: { y: 0, x: 24 }, right: { y: 0, x: -24 } };
  const d = offsets[direction] || offsets.up;
  return (
    <motion.div
      initial={{ opacity: 0, y: d.y, x: d.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}