import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import WireframeGlobe from './WireframeGlobe';
import CornerMark from '../shared/CornerMark';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black grid-lines overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-100" />

      {/* Corner marks */}
      <span className="absolute top-[56px] left-5 text-white/20 text-xs">+</span>
      <span className="absolute top-[56px] right-5 text-white/20 text-xs">+</span>
      <span className="absolute bottom-12 left-5 text-white/20 text-xs">+</span>
      <span className="absolute bottom-12 right-5 text-white/20 text-xs">+</span>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-20 2xl:px-28 3xl:px-40 pt-14 flex flex-col items-center">
        {/* Globe - centered at top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative mt-10 mb-16">
          
          <WireframeGlobe size={480} />
          {/* Fade bottom of globe */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
        </motion.div>

        {/* Content below globe */}
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-10 lg:gap-16 2xl:gap-24 w-full -mt-10 pb-20">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white leading-[1.0] tracking-tight mb-0">AI агенты и автоматизации для бизнеса</h1>
          </motion.div>

          {/* Right: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end">

            <p className="text-sm lg:text-base 2xl:text-lg text-white/50 leading-relaxed mb-6 max-w-none">Превращаем 1С, CRM, Excel, Telegram и внутренние системы в единую AI-инфраструктуру управления бизнесом. 
Tehcon AI внедряет автономных AI-агентов, которые самостоятельно анализируют данные, контролируют процессы, запускают действия и помогают бизнесу работать быстрее, точнее и дешевле.</p>
            <div>
              <Link to="/catalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-md hover:bg-white/90 transition-colors">
                Смотреть каталог
                <Plus className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}