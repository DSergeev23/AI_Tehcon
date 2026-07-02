import React from 'react';

export default function CornerMark({ position = 'top-left', className = '' }) {
  const positions = {
    'top-left': '-top-2 -left-2',
    'top-right': '-top-2 -right-2',
    'bottom-left': '-bottom-2 -left-2',
    'bottom-right': '-bottom-2 -right-2',
  };
  return (
    <span className={`absolute ${positions[position]} text-primary/55 text-xs leading-none pointer-events-none select-none ${className}`}>+</span>
  );
}
