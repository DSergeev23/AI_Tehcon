import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, CheckCircle2, UserCheck, Headphones, FileSearch, Sparkles, TrendingUp, Mic, MessageSquare } from 'lucide-react';
import { getProductById } from '../lib/catalogData';
import RevealOnScroll from '../components/shared/RevealOnScroll';
import SEOHead from '../components/shared/SEOHead';
import { getProductSEO } from '../lib/seoConfig';
import SectionsRenderer from '../components/product/SectionsRenderer';

const iconMap = { UserCheck, Headphones, FileSearch, Sparkles, TrendingUp, Mic, MessageSquare };

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  if (!product) return <Navigate to="/catalog" replace />;

  const Icon = iconMap[product.icon] || Sparkles;
  const seo = getProductSEO(product);

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://ai-tehcon.ru" },
          { "@type": "ListItem", "position": 2, "name": "Каталог", "item": "https://ai-tehcon.ru/catalog" },
          { "@type": "ListItem", "position": 3, "name": product.title, "item": `https://ai-tehcon.ru/catalog/${product.id}` },
        ]
      },
      {
        "@type": "Service",
        "name": product.title,
        "description": product.fullDescription,
        "provider": { "@type": "Organization", "name": "Tehcon AI", "url": "https://ai-tehcon.ru" },
        "serviceType": product.category,
        "areaServed": "RU",
        "url": `https://ai-tehcon.ru/catalog/${product.id}`,
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <SEOHead {...seo} schemaJson={productSchema} />

      {/* Breadcrumb */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-4 flex items-center gap-2">
          <Link to="/catalog" className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Каталог
          </Link>
          <span className="text-white/20 text-xs">/</span>
          <span className="text-xs text-white/50 truncate max-w-[200px]">{product.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-white/[0.08] relative">
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap gap-1.5 mb-6">
              {product.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 border border-white/[0.1] rounded-sm text-[10px] font-medium text-white/40 uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 border border-white/[0.12] rounded flex items-center justify-center flex-shrink-0 mt-1">
                <Icon className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">{product.category}</p>
                <h1 className="font-serif text-4xl md:text-5xl 2xl:text-6xl text-white tracking-tight leading-tight">{product.title}</h1>
              </div>
            </div>

            <p className="text-base text-white/50 max-w-2xl leading-relaxed">{product.shortDescription}</p>
          </motion.div>
        </div>
      </div>

      {/* Main layout: article + sticky sidebar */}
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24">
        <div className="flex flex-col lg:flex-row gap-0">

          {/* ── Article column ── */}
          <div className="flex-1 min-w-0 border-r border-white/[0.08] py-14 pr-0 lg:pr-16 2xl:pr-24">
            {/* Long-read content constrained to readable width */}
            <div className="max-w-3xl">
              <RevealOnScroll>
                <SectionsRenderer content={product.content} fallbackText={product.fullDescription} />
              </RevealOnScroll>

              {/* How it works */}
              <RevealOnScroll delay={0.05}>
                <div className="mt-16 pt-12 border-t border-white/[0.08]">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-8">Как это работает</p>
                  <div className="space-y-0">
                    {product.howItWorks.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="flex gap-5 py-6 border-b border-white/[0.06] last:border-0"
                      >
                        <div className="w-8 h-8 border border-white/[0.12] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-mono text-white/50">{String(step.step).padStart(2, '0')}</span>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1.5">{step.title}</h3>
                          <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Benefits */}
              <RevealOnScroll delay={0.1}>
                <div className="mt-12 pt-12 border-t border-white/[0.08]">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-6">Преимущества</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-3 border border-white/[0.07] rounded-sm p-4">
                        <CheckCircle2 className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/60 leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Bottom CTA */}
              <RevealOnScroll delay={0.15}>
                <div className="mt-14 pt-12 border-t border-white/[0.08] text-center">
                  <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-tight mb-4">
                    Никакого хайпа вокруг ИИ.<br />Только результаты.
                  </h2>
                  <p className="text-sm text-white/40 mt-4 max-w-md mx-auto leading-relaxed mb-8">
                    Мы не обещаем чудеса. Мы доставляем измеримые результаты, которые напрямую влияют на вашу прибыль.
                  </p>
                  <Link
                    to="/contacts"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors"
                  >
                    Обсудить проект <Plus className="w-4 h-4" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Sticky Sidebar ── */}
          <div className="lg:w-72 2xl:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-16 pt-14 pb-8">
              {/* Price card */}
              <div className="border border-white/[0.08] rounded-sm bg-white/[0.02] p-6 mb-4">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2">Стоимость</p>
                <p className="text-2xl font-semibold text-white tracking-tight mb-6">{product.pricing}</p>
                <Link
                  to="/contacts"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black text-xs font-semibold rounded-sm hover:bg-white/90 transition-colors"
                >
                  Обсудить проект <Plus className="w-3.5 h-3.5" />
                </Link>
                <p className="text-[10px] text-white/25 text-center mt-3">Ответ в течение 2 часов</p>
              </div>

              {/* Specs card */}
              <div className="border border-white/[0.08] rounded-sm bg-white/[0.01] p-6">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-5">Ключевые параметры</p>
                <div className="space-y-0">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div key={i} className="flex flex-col gap-0.5 py-3 border-b border-white/[0.05] last:border-0">
                      <span className="text-[10px] text-white/30 uppercase tracking-[0.1em]">{key}</span>
                      <span className="text-xs font-medium text-white/70 leading-snug">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}