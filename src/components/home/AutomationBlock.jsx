import React from 'react';
import CanonicalLink from '../shared/CanonicalLink';
import { ArrowUpRight } from 'lucide-react';
import ResponsiveImage from '../shared/ResponsiveImage';

export default function AutomationBlock() {
  return (
    <section className="border-t border-white/[0.08] overflow-hidden render-deferred">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-28 3xl:px-40 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Visual */}
          <div className="relative flex items-center justify-center order-2 lg:order-1 ml-5">
            
            <div className="absolute inset-0 rounded-2xl"
              style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

            <div
              className="relative z-10 w-full max-w-lg lg:max-w-none h-auto mx-auto gentle-float"
              style={{ filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.05))' }}
            >
              <ResponsiveImage
                src="/images/automation-enterprise.png"
                alt="AI Автоматизация"
                sizes="(min-width: 1536px) 780px, (min-width: 1024px) 50vw, calc(100vw - 48px)"
                className="block h-auto w-full"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col order-1 lg:order-2">

            <p className="text-[10px] text-white/75 uppercase tracking-[0.2em] mb-6">Автоматизация для корпораций</p>

            <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl text-white leading-tight tracking-tight mb-6">
              Автоматизация<br />под ключ
            </h2>

            <div className="w-8 h-px bg-primary mb-6" />

            <p className="text-sm md:text-base text-white leading-relaxed mb-10 max-w-lg">
              Неважно, какой сложности ваш бизнес — наш Enterprise план создан для тех, кому нужны готовые автоматизированные решения под ключ. Вы описываете свою задачу, а наши специалисты реализуют её с полной поддержкой в минимальные сроки с почасовой оплатой.
            </p>

            <div className="inline-block hover-lift">
              <CanonicalLink
                to="/contacts"
                className="inline-flex items-center gap-2 px-6 py-3 signal-button text-sm font-semibold rounded-sm transition-colors">
                Связаться с отделом продаж
                <ArrowUpRight className="w-4 h-4" />
              </CanonicalLink>
            </div>
          </div>

        </div>
      </div>
    </section>);
}
