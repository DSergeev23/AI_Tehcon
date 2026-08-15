import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import WireframeGlobe from './WireframeGlobe';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] max-h-[1200px] bg-black grid-lines overflow-hidden flex flex-col justify-center">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-100" />

      {/* Corner marks */}
      <span className="absolute top-[56px] left-5 text-primary/55 text-xs">+</span>
      <span className="absolute top-[56px] right-5 text-primary/55 text-xs">+</span>
      <span className="absolute bottom-12 left-5 text-primary/55 text-xs">+</span>
      <span className="absolute bottom-12 right-5 text-primary/55 text-xs">+</span>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-20 2xl:px-28 3xl:px-40 flex flex-col items-center py-16">
        {/* Globe - centered at top */}
        <div className="relative mb-12 fade-enter">
          
          <WireframeGlobe size={480} />
          {/* Fade bottom of globe */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Content below globe */}
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-10 lg:gap-16 2xl:gap-24 w-full -mt-10">
          {/* Left: Heading */}
          <div className="page-enter">

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white leading-[1.0] tracking-tight mb-0">AI агенты и автоматизации для бизнеса</h1>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col justify-end page-enter page-enter-delay">

            <p className="text-sm lg:text-base 2xl:text-lg text-white leading-relaxed mb-4 max-w-none">
              Превращаем 1С, CRM, Excel, Telegram и внутренние системы в единую AI-инфраструктуру управления бизнесом.
              AI TehCon внедряет автономных AI-агентов, которые самостоятельно анализируют данные, контролируют процессы, запускают действия и помогают бизнесу работать быстрее, точнее и дешевле.
            </p>
            <p className="text-sm lg:text-base 2xl:text-lg text-white leading-relaxed mb-6 max-w-none">
              Результат — на ваш мобильный телефон, почту или в мессенджер.
            </p>
            <div>
              <Link to="/catalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 signal-button text-sm font-semibold rounded-md transition-colors">
                Смотреть каталог
                <Plus className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
