import React from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function SectionHeader({ badge, title, description }) {
  return (
    <div className="text-center mb-16 md:mb-20">
      {badge && (
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {badge}
          </div>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.1}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter-custom text-gradient-white leading-tight">
          {title}
        </h2>
      </RevealOnScroll>
      {description && (
        <RevealOnScroll delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}