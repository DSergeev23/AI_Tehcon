import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Plus,
  Send, Network,
  Search, Database,
  Activity, LineChart,
  TrendingUp, Workflow,
  Bot, Brain,
  PieChart, BarChart3,
  Megaphone, PenTool,
  Image, Layers,
  FileText, Share2,
  UserCheck, Hexagon,
  Sparkles,
} from 'lucide-react';

const iconMap = { Send, Search, Activity, TrendingUp, Bot, PieChart, Megaphone, Image, FileText, UserCheck, Sparkles };
const visualMap = { Network, Database, LineChart, Workflow, Brain, BarChart3, PenTool, Layers, Share2, Hexagon };

export default function CatalogCard({ product, index }) {
  const Icon = iconMap[product.icon] || Sparkles;
  const VisualIcon = visualMap[product.visual] || Hexagon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/catalog/${product.id}`} className="block group">
        <motion.div
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.025)' }}
          className="relative border border-white/[0.08] rounded-sm p-7 transition-colors duration-200 bg-black h-full"
        >
          {/* Corner pluses */}
          <Plus className="absolute top-3 right-3 w-3.5 h-3.5 text-white/15 group-hover:text-white/30 transition-colors" />

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 border border-white/[0.1] rounded-sm text-[10px] font-medium text-white/40 uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Icon + visual placeholder */}
          <div className="mb-6 flex items-end justify-between">
            <div className="w-10 h-10 border border-white/[0.1] rounded flex items-center justify-center">
              <Icon className="w-4 h-4 text-white/60" />
            </div>
            <VisualIcon className="w-12 h-12 text-white/[0.12]" strokeWidth={0.8} />
          </div>

          {/* Category */}
          <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1.5">{product.category}</p>

          {/* Title */}
          <h3 className="text-sm font-semibold text-white mb-3 leading-snug tracking-tight group-hover:text-white transition-colors">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-white/40 leading-relaxed mb-6 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/70">{product.pricing}</span>
            <span className="text-[11px] text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-1">
              Подробнее →
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}