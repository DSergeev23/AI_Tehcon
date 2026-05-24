import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, UserCheck, Headphones, FileSearch, Sparkles, TrendingUp, Mic } from 'lucide-react';

const iconMap = {
  UserCheck, Headphones, FileSearch, Sparkles, TrendingUp, Mic,
};

const colorMap = {
  blue: { border: 'group-hover:border-blue-500/30', glow: 'from-blue-500/10', icon: 'text-blue-400' },
  purple: { border: 'group-hover:border-purple-500/30', glow: 'from-purple-500/10', icon: 'text-purple-400' },
  cyan: { border: 'group-hover:border-cyan-500/30', glow: 'from-cyan-500/10', icon: 'text-cyan-400' },
  pink: { border: 'group-hover:border-pink-500/30', glow: 'from-pink-500/10', icon: 'text-pink-400' },
  green: { border: 'group-hover:border-green-500/30', glow: 'from-green-500/10', icon: 'text-green-400' },
  orange: { border: 'group-hover:border-orange-500/30', glow: 'from-orange-500/10', icon: 'text-orange-400' },
};

export default function CatalogCard({ product, index }) {
  const Icon = iconMap[product.icon] || Sparkles;
  const colors = colorMap[product.color] || colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/catalog/${product.id}`} className="block group">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`glass-card rounded-2xl p-7 h-full relative overflow-hidden transition-colors duration-500 ${colors.border}`}
          style={{ borderWidth: '0.5px' }}
        >
          {/* Glow */}
          <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-radial ${colors.glow} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

          <div className="relative z-10">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-5">
              {product.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-white/[0.08] bg-white/[0.03] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-5">
              <Icon className={`w-5 h-5 ${colors.icon}`} />
            </div>

            {/* Category */}
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{product.category}</p>

            {/* Title */}
            <h3 className="text-lg font-bold tracking-tight text-foreground mb-3 group-hover:text-gradient-blue transition-all duration-300">
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Price + CTA */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">{product.pricing}</span>
              <div className="flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                Подробнее
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}