import React from 'react';
import { motion } from 'framer-motion';

export default function RevealOnScroll({ children, className = '', delay = 0, direction = 'up' }) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const d = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, y: d.y, x: d.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}