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
  FileText, FileSearch, Share2,
  UserCheck, Hexagon,
  Sparkles,
} from 'lucide-react';

function OneCIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="4" y="7" width="24" height="18" rx="4" fill="currentColor" opacity="0.14" />
      <rect x="4.75" y="7.75" width="22.5" height="16.5" rx="3.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.1 18.5H12.1V13.2H10.45V11.7C11.35 11.55 11.95 11.35 12.55 10.95H14.25V18.5H16V20.25H10.1V18.5Z" fill="currentColor" />
      <path d="M23.25 17.15C22.95 19.05 21.55 20.45 19.35 20.45C16.85 20.45 15.25 18.55 15.25 15.7C15.25 12.85 16.95 10.85 19.45 10.85C21.55 10.85 22.9 12 23.25 13.9L21.15 14.2C20.95 13.25 20.4 12.75 19.45 12.75C18.2 12.75 17.55 13.8 17.55 15.7C17.55 17.55 18.2 18.55 19.4 18.55C20.35 18.55 20.95 18 21.15 16.9L23.25 17.15Z" fill="currentColor" />
    </svg>
  );
}

const iconMap = { Send, Search, Activity, TrendingUp, Bot, PieChart, Megaphone, Image, FileText, UserCheck, Sparkles, OneC: OneCIcon };
const visualMap = { Network, Database, LineChart, Workflow, Brain, BarChart3, PenTool, Layers, Share2, Hexagon, FileSearch };

export default function CatalogCard({ product, index }) {
  const Icon = iconMap[product.icon] || Sparkles;
  const VisualIcon = visualMap[product.visual] || Hexagon;
  const isOneCIcon = product.icon === 'OneC';

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
          <Plus className="absolute top-3 right-3 w-3.5 h-3.5 text-primary/70 group-hover:text-primary transition-colors" />

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
            <div
              className={`w-10 h-10 border rounded flex items-center justify-center ${
                isOneCIcon
                  ? 'border-primary/45 bg-primary/10 shadow-[0_0_18px_rgba(165,29,52,0.16)]'
                  : 'border-primary/30 bg-primary/5'
              }`}
            >
              <Icon className={`${isOneCIcon ? 'w-6 h-6' : 'w-4 h-4'} text-primary`} />
            </div>
            <VisualIcon className="w-12 h-12 text-primary/70" strokeWidth={1} />
          </div>

          {/* Category */}
          <p className="text-[10px] text-white/75 uppercase tracking-[0.15em] font-semibold mb-1.5">{product.category}</p>

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
            <span className="text-[11px] text-primary/90 group-hover:text-primary transition-colors flex items-center gap-1">
              Подробнее →
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
