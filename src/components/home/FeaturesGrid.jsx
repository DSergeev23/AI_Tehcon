import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

const features = [
  {
    title: 'Мгновенные итоги',
    desc: 'Чистые, готовые к публикации выводы по каждому бизнес-процессу — в секунды после завершения.',
    visual: 'icosahedron',
  },
  {
    title: 'Автоматизация задач',
    desc: 'Наблюдайте за задачами, ответственными и сроками, умно извлечёнными из каждого взаимодействия.',
    visual: 'diamond',
  },
  {
    title: 'Работает везде',
    desc: 'Zoom, Google Meet, Teams и офлайн записи — система адаптируется к вашему стеку.',
    visual: 'sphere',
  },
  {
    title: 'Легко делиться',
    desc: 'Экспортируйте результаты немедленно и делитесь с командой одним кликом.',
    visual: 'cube',
  },
  {
    title: 'Усиление команды',
    desc: 'Убедитесь, что все участники синхронизированы и ничего не теряется.',
    visual: 'ring',
  },
  {
    title: 'Создан для роста',
    desc: 'Быстрое, надёжное решение, которое масштабируется вместе с вашим бизнесом.',
    visual: 'grid',
  },
];

function Visual({ type }) {
  const base = "opacity-30";
  if (type === 'icosahedron') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="white" strokeWidth="0.7">
      <polygon points="40,8 70,28 70,52 40,72 10,52 10,28" />
      <line x1="40" y1="8" x2="40" y2="72" />
      <line x1="10" y1="28" x2="70" y2="52" />
      <line x1="70" y1="28" x2="10" y2="52" />
      <circle cx="40" cy="40" r="20" strokeDasharray="2 4" />
    </svg>
  );
  if (type === 'diamond') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="white" strokeWidth="0.7">
      <polygon points="40,5 75,35 40,75 5,35" />
      <line x1="5" y1="35" x2="75" y2="35" />
      <line x1="40" y1="5" x2="5" y2="35" />
      <line x1="40" y1="5" x2="75" y2="35" />
    </svg>
  );
  if (type === 'sphere') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="white" strokeWidth="0.7">
      <circle cx="40" cy="40" r="30" />
      <ellipse cx="40" cy="40" rx="15" ry="30" />
      <ellipse cx="40" cy="40" rx="30" ry="12" />
    </svg>
  );
  if (type === 'cube') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="white" strokeWidth="0.7">
      <rect x="20" y="20" width="40" height="40" />
      <rect x="12" y="12" width="40" height="40" />
      <line x1="12" y1="12" x2="20" y2="20" />
      <line x1="52" y1="12" x2="60" y2="20" />
      <line x1="12" y1="52" x2="20" y2="60" />
      <line x1="52" y1="52" x2="60" y2="60" />
    </svg>
  );
  if (type === 'ring') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="white" strokeWidth="0.7">
      <circle cx="40" cy="40" r="28" />
      <circle cx="40" cy="40" r="18" />
      <ellipse cx="40" cy="40" rx="28" ry="10" />
    </svg>
  );
  return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="white" strokeWidth="0.7">
      {[0,1,2,3].map(i => [0,1,2,3].map(j => (
        <circle key={`${i}-${j}`} cx={15 + i*17} cy={15 + j*17} r="2" fill="white" />
      )))}
    </svg>
  );
}

export default function FeaturesGrid() {
  return (
    <section id="features" className="border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((f, i) => (
            <RevealOnScroll key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                className={`relative p-8 border-b border-white/[0.08] transition-colors duration-300 ${
                  i % 3 !== 2 ? 'md:border-r' : ''
                } border-white/[0.08]`}
              >
                {/* Corner plus */}
                <Plus className="absolute top-3 right-3 w-3.5 h-3.5 text-white/15" />

                <div className="mb-6">
                  <Visual type={f.visual} />
                </div>

                <h3 className="text-sm font-semibold text-white mb-2 tracking-tight">{f.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}