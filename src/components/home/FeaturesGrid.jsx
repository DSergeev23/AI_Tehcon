import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

const features = [
{
  title: "\u041D\u0435 \u0436\u0434\u0451\u0442 \u043A\u043E\u043C\u0430\u043D\u0434 \u2014 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0430\u043C",
  desc: "AI-\u0430\u0433\u0435\u043D\u0442\u044B \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u044E\u0442 \u043D\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438:\n\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u044E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B,\n\u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F,\n\u0437\u0430\u043F\u0443\u0441\u043A\u0430\u044E\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F,\n\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442 \u0437\u0430\u0434\u0430\u0447\u0438,\n\u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0442 \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u044F.\n\u0411\u0435\u0437 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432.",
  visual: 'icosahedron'
},
{
  title: "Один dashboard на все ваши источники данных",
  desc: "Агент сам подключается ко всем данным компании и собирает их в единое представление. Вы видите ключевые показатели, отчёты и сигналы в удобном dashboard без ручного сведения информации из разных систем.",
  visual: 'diamond'
},
{
  title: "\u0413\u043B\u0443\u0431\u043E\u043A\u0430\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 1\u0421",
  desc: "AI \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \xAB\u0441\u0435\u0440\u0434\u0446\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0430\xBB \u2014 1\u0421. \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B. \u041E\u0441\u0442\u0430\u0442\u043A\u0438. \u0420\u0435\u0435\u0441\u0442\u0440\u044B. \u041F\u0440\u043E\u0434\u0430\u0436\u0438. \u0417\u0430\u043A\u0443\u043F\u043A\u0438. \u0424\u0438\u043D\u0430\u043D\u0441\u044B. \u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0442\u0430\u0431\u043B\u0438\u0446 \u2014 \u0440\u0430\u0431\u043E\u0442\u0430 \u0438\u0434\u0435\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.",
  visual: 'sphere'
},
{
  title: "\u0415\u0434\u0438\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0443\u0440 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
  desc: "\u0421\u0432\u044F\u0437\u044B\u0432\u0430\u0435\u043C 1\u0421, CRM, Telegram, \u043F\u043E\u0447\u0442\u0443 \u0438 \u0441\u0430\u0439\u0442\u044B \u0432 \u0436\u0438\u0432\u0443\u044E \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0443. \u0414\u0430\u043D\u043D\u044B\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u0441\u0442\u0440\u0435\u0432\u0430\u044E\u0442 \u043C\u0435\u0436\u0434\u0443 \u043E\u043A\u043D\u0430\u043C\u0438 \u2014 \u043E\u043D\u0438 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.",
  visual: 'cube'
},
{
  title: "\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435",
  desc: "\u041F\u0438\u043B\u043E\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u2014 \u043E\u0442 14 \u0434\u043D\u0435\u0439.\n\u0411\u0435\u0437 \u043C\u043D\u043E\u0433\u043E\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0442\u044F\u0436\u0435\u043B\u043E\u0433\u043E enterprise-\u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430.\n\u041F\u0435\u0440\u0432\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u2014 \u0443\u0436\u0435 \u0432 \u043F\u0435\u0440\u0432\u044B\u0435 \u043D\u0435\u0434\u0435\u043B\u0438 \u0440\u0430\u0431\u043E\u0442\u044B.\n\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u043E\u0431\u044A\u0435\u043C \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u0431\u0435\u0437 \u043D\u0430\u0439\u043C\u0430 \u043D\u043E\u0432\u044B\u0445 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432. \u041E\u0434\u0438\u043D AI-\u0430\u0433\u0435\u043D\u0442 \u0437\u0430\u043C\u0435\u043D\u044F\u0435\u0442 \u0446\u0435\u043B\u044B\u0439 \u043E\u0442\u0434\u0435\u043B \u043D\u0430 \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u0445.",
  visual: 'ring'
},
{
  title: "\u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u0432\u0438\u0434\u0438\u0442 \u043D\u0438\u043A\u0442\u043E, \u043A\u0440\u043E\u043C\u0435 \u0432\u0430\u0441",
  desc: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D: \u0432\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B, \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0438 \u0438 \u0444\u0430\u0439\u043B\u044B \u043D\u0435 \u043F\u0435\u0440\u0435\u0441\u0435\u043A\u0430\u044E\u0442\u0441\u044F \u0441 \u0447\u0443\u0436\u0438\u043C\u0438. \u0410\u0433\u0435\u043D\u0442 \u0432\u0438\u0434\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u043E, \u0447\u0442\u043E \u0432\u044B \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u043B\u0438 \u2014 \u043D\u0438 \u0431\u0430\u0439\u0442\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u0435.",
  visual: 'grid'
}];


function Visual({ type }) {
  const base = "text-primary/90 opacity-100 drop-shadow-[0_0_10px_rgba(165,29,52,0.22)]";
  const strokeWidth = 0.95;
  if (type === 'icosahedron') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      <polygon points="40,8 70,28 70,52 40,72 10,52 10,28" />
      <line x1="40" y1="8" x2="40" y2="72" />
      <line x1="10" y1="28" x2="70" y2="52" />
      <line x1="70" y1="28" x2="10" y2="52" />
      <circle cx="40" cy="40" r="20" strokeDasharray="2 4" />
    </svg>);

  if (type === 'diamond') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      <polygon points="40,5 75,35 40,75 5,35" />
      <line x1="5" y1="35" x2="75" y2="35" />
      <line x1="40" y1="5" x2="5" y2="35" />
      <line x1="40" y1="5" x2="75" y2="35" />
    </svg>);

  if (type === 'sphere') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      <rect x="12" y="18" width="56" height="44" rx="6" />
      <path d="M24 31h8v18" />
      <path d="M22 49h14" />
      <path d="M56 32c-2.5-2.5-6.5-3.5-10-2.2-5 1.9-7.5 7.5-5.6 12.5s7.5 7.5 12.5 5.6c1.2-.5 2.3-1.2 3.1-2" />
      <path d="M17 23l6 6" opacity="0.55" />
      <path d="M63 57l-6-6" opacity="0.55" />
    </svg>);

  if (type === 'cube') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      <rect x="20" y="20" width="40" height="40" />
      <rect x="12" y="12" width="40" height="40" />
      <line x1="12" y1="12" x2="20" y2="20" />
      <line x1="52" y1="12" x2="60" y2="20" />
      <line x1="12" y1="52" x2="20" y2="60" />
      <line x1="52" y1="52" x2="60" y2="60" />
    </svg>);

  if (type === 'ring') return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      <circle cx="40" cy="40" r="28" />
      <circle cx="40" cy="40" r="18" />
      <ellipse cx="40" cy="40" rx="28" ry="10" />
    </svg>);

  return (
    <svg viewBox="0 0 80 80" className={`w-16 h-16 ${base}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      {[0, 1, 2, 3].map((i) => [0, 1, 2, 3].map((j) =>
      <circle key={`${i}-${j}`} cx={15 + i * 17} cy={15 + j * 17} r="2" fill="currentColor" />
      ))}
    </svg>);

}

export default function FeaturesGrid() {
  return (
    <section id="features" className="border-t border-white/[0.08]">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-6">
          {features.map((f, i) =>
          <RevealOnScroll key={i} delay={i * 0.07}>
              <motion.div
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              className={`relative p-8 2xl:p-10 border-b border-white/[0.08] transition-colors duration-300 h-full ${
              i % 3 !== 2 ? 'md:border-r 2xl:border-r' : 'md:border-r-0'} border-white/[0.08]`
              }>
              
                {/* Corner plus */}
                <Plus className="absolute top-3 right-3 w-3.5 h-3.5 text-primary/55" />

                <div className="mb-6">
                  <Visual type={f.visual} />
                </div>

                <h3 className="text-sm font-semibold text-white mb-2 tracking-tight">{f.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{f.desc}</p>
              </motion.div>
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>);

}
