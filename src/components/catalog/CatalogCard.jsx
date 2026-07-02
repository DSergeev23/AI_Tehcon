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

function OneCIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M4 15.5H7.2V9.1H4.7V7.2C6.1 7 7 6.7 7.9 6.1H10.1V15.5H12.8V18H4V15.5Z"
        fill="currentColor"
      />
      <path
        d="M19.9 14.1C19.4 16.6 17.6 18.3 14.8 18.3C11.7 18.3 9.7 15.9 9.7 12.1C9.7 8.3 11.8 5.8 15 5.8C17.6 5.8 19.4 7.3 19.9 9.8L17.2 10.2C16.9 8.9 16.2 8.2 15 8.2C13.4 8.2 12.6 9.6 12.6 12.1C12.6 14.6 13.4 15.9 14.9 15.9C16.1 15.9 16.9 15.2 17.2 13.8L19.9 14.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const iconMap = { Send, Search, Activity, TrendingUp, Bot, PieChart, Megaphone, Image, FileText, UserCheck, Sparkles, OneC: OneCIcon };
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
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.035)' }}
          className="relative border border-white/[0.1] rounded-sm p-7 transition-colors duration-200 bg-black h-full group-hover:border-primary/45"
        >
          {/* Corner pluses */}
          <Plus className="absolute top-3 right-3 w-3.5 h-3.5 text-primary/45 group-hover:text-primary transition-colors" />

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 border border-white/[0.14] rounded-sm text-[10px] font-medium text-white/75 uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Icon + visual placeholder */}
          <div className="mb-6 flex items-end justify-between">
            <div className="w-10 h-10 border border-white/[0.1] rounded flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
            <VisualIcon className="w-12 h-12 text-white/[0.22]" strokeWidth={0.8} />
          </div>

          {/* Category */}
          <p className="text-[10px] text-signal uppercase tracking-[0.15em] mb-1.5">{product.category}</p>

          {/* Title */}
          <h3 className="text-sm font-semibold text-white mb-3 leading-snug tracking-tight group-hover:text-white transition-colors">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-white/80 leading-relaxed mb-6 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">{product.pricing}</span>
            <span className="text-[11px] text-white/75 group-hover:text-white transition-colors flex items-center gap-1">
              Подробнее →
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
