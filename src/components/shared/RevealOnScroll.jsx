import React from 'react';

export default function RevealOnScroll({ children, className = '', delay: _delay = 0, direction: _direction = 'up' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
