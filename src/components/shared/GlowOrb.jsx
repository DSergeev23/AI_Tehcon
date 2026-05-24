import React from 'react';
import { motion } from 'framer-motion';

export default function GlowOrb({ color = 'blue', size = 400, className = '', delay = 0 }) {
  const gradients = {
    blue: 'from-primary/20 via-primary/5 to-transparent',
    purple: 'from-accent/20 via-accent/5 to-transparent',
    mixed: 'from-primary/15 via-accent/10 to-transparent',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay, ease: 'easeOut' }}
      className={`absolute rounded-full bg-gradient-radial ${gradients[color]} blur-3xl pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    />
  );
}