import React from 'react';

export default function GlowOrb({ color = 'blue', size = 400, className = '' }) {
  const gradients = {
    blue: 'from-primary/20 via-primary/5 to-transparent',
    purple: 'from-accent/20 via-accent/5 to-transparent',
    mixed: 'from-primary/15 via-accent/10 to-transparent',
  };

  return (
    <div
      className={`absolute rounded-full bg-gradient-radial ${gradients[color]} blur-3xl pointer-events-none fade-enter ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
