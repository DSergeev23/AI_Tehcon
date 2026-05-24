import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, UserCheck, Headphones, FileSearch, Sparkles, TrendingUp, Mic } from 'lucide-react';
import { getProductById } from '../lib/catalogData';
import RevealOnScroll from '../components/shared/RevealOnScroll';

const iconMap = { UserCheck, Headphones, FileSearch, Sparkles, TrendingUp, Mic };

const colorSchemes = {
  blue: { accent: 'text-blue-400', glow: 'bg-blue-500/[0.06]', border: 'border-blue-500/20', badge: 'bg-blue-500/10 text-blue-400' },
  purple: { accent: 'text-purple-400', glow: 'bg-purple-500/[0.06]', border: 'border-purple-500/20', badge: 'bg-purple-500/10 text-purple-400' },
  cyan: { accent: 'text-cyan-400', glow: 'bg-cyan-500/[0.06]', border: 'border-cyan-500/20', badge: 'bg-cyan-500/10 text-cyan-400' },
  pink: { accent: 'text-pink-400', glow: 'bg-pink-500/[0.06]', border: 'border-pink-500/20', badge: 'bg-pink-500/10 text-pink-400' },
  green: { accent: 'text-green-400', glow: 'bg-green-500/[0.06]', border: 'border-green-500/20', badge: 'bg-green-500/10 text-green-400' },
  orange: { accent: 'text-orange-400', glow: 'bg-orange-500/[0.06]', border: 'border-orange-500/20', badge: 'bg-orange-500/10 text-orange-400' },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) return <Navigate to="/catalog" replace />;

  const Icon = iconMap[product.icon] || Sparkles;
  const scheme = colorSchemes[product.color] || colorSchemes.blue;

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className={`absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full ${scheme.glow} blur-[140px] pointer-events-none`} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/catalog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
              <ArrowLeft className="w-4 h-4" />
              Назад к каталогу
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${scheme.badge}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-white/[0.05] border ${scheme.border} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${scheme.accent}`} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.category}</p>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter-custom text-foreground">{product.title}</h1>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  {product.fullDescription}
                </p>
              </motion.div>

              {/* How it Works */}
              <RevealOnScroll>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">Как это работает</h2>
                <div className="space-y-4">
                  {product.howItWorks.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="glass-card rounded-xl p-6 flex gap-5"
                    >
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold ${scheme.badge}`}>
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RevealOnScroll>

              {/* Benefits */}
              <RevealOnScroll className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">Преимущества</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 glass-card rounded-xl p-5">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${scheme.accent}`} />
                      <span className="text-sm text-foreground leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="sticky top-28"
              >
                {/* Pricing Card */}
                <div className="glass-card rounded-2xl p-7 mb-5">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Стоимость</p>
                  <p className="text-2xl font-bold text-foreground tracking-tight mb-6">{product.pricing}</p>
                  <Link
                    to="/contacts"
                    className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:opacity-90 transition-all"
                  >
                    Обсудить проект
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Specs Card */}
                <div className="glass-card rounded-2xl p-7">
                  <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wider">Ключевые параметры</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specs).map(([key, value], i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{key}</span>
                        <span className="text-xs font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}