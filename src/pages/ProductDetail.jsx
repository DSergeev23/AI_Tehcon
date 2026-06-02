import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, CheckCircle2, UserCheck, Headphones, FileSearch, Sparkles, TrendingUp, Mic } from 'lucide-react';
import { getProductById } from '../lib/catalogData';
import RevealOnScroll from '../components/shared/RevealOnScroll';
import SEOHead from '../components/shared/SEOHead';
import { getProductSEO } from '../lib/seoConfig';

const iconMap = { UserCheck, Headphones, FileSearch, Sparkles, TrendingUp, Mic };

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
        "offers": {
          "@type": "Offer",
          "price": product.pricing?.replace(/[^0-9]/g, '') || "0",
          "priceCurrency": "RUB",
          "priceSpecification": { "@type": "PriceSpecification", "price": product.pricing, "priceCurrency": "RUB" }
        },
        "serviceType": product.category,
        "areaServed": "RU",
        "url": `https://ai-tehcon.ru/catalog/${product.id}`,
        "category": product.tags?.join(', '),
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black pt-14">
      <SEOHead {...seo} schemaJson={productSchema} />
      {/* Breadcrumb */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-4 flex items-center gap-2">
          <Link to="/catalog" className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Каталог
          </Link>
          <span className="text-white/20 text-xs">/</span>
          <span className="text-xs text-white/50">{product.title}</span>
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
                <h1 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight">{product.title}</h1>
              </div>
            </div>

            <p className="text-sm text-white/50 max-w-2xl leading-relaxed">{product.shortDescription}</p>
          </motion.div>
        </div>
      </div>

      {/* Content grid */}
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 border-r border-white/[0.08]">
            {/* Description */}
            <RevealOnScroll>
              <div className="p-8 border-b border-white/[0.08]">
                <p className="text-xs text-white/30 uppercase tracking-[0.15em] mb-4">Описание</p>
                <p className="text-sm text-white/60 leading-relaxed">{product.fullDescription}</p>
              </div>
            </RevealOnScroll>

            {/* How it works */}
            <RevealOnScroll delay={0.05}>
              <div className="p-8 border-b border-white/[0.08]">
                <p className="text-xs text-white/30 uppercase tracking-[0.15em] mb-6">Как это работает</p>
                <div className="space-y-0">
                  {product.howItWorks.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex gap-5 py-5 border-b border-white/[0.06] last:border-0"
                    >
                      <div className="w-8 h-8 border border-white/[0.12] rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-mono text-white/50">{String(step.step).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                        <p className="text-xs text-white/40 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Benefits */}
             <RevealOnScroll delay={0.1}>
               <div className="p-8 border-b border-white/[0.08]">
                 <p className="text-xs text-white/30 uppercase tracking-[0.15em] mb-6">Преимущества</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   {product.benefits.map((b, i) => (
                     <div key={i} className="flex items-start gap-3 border border-white/[0.07] rounded-sm p-4">
                       <CheckCircle2 className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                       <span className="text-xs text-white/60 leading-relaxed">{b}</span>
                     </div>
                   ))}
                 </div>
               </div>
             </RevealOnScroll>

             {/* Results Block */}
             <RevealOnScroll delay={0.15}>
               <div className="p-8">
                 <div className="text-center">
                   <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-tight">
                     Никакого хайпа вокруг ИИ.<br />Только результаты.
                   </h2>
                   <p className="text-xs text-white/40 mt-4 max-w-md mx-auto leading-relaxed">
                     Мы не обещаем чудеса. Мы доставляем измеримые результаты, которые напрямую влияют на вашу прибыль.
                   </p>
                 </div>
               </div>
             </RevealOnScroll>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-14">
              {/* Pricing */}
              <div className="p-7 border-b border-white/[0.08]">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2">Стоимость</p>
                <p className="text-2xl font-semibold text-white tracking-tight mb-6">{product.pricing}</p>
                <Link
                  to="/contacts"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black text-xs font-semibold rounded-sm hover:bg-white/90 transition-colors"
                >
                  Обсудить проект <Plus className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Specs */}
              <div className="p-7">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-5">Ключевые параметры</p>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-[11px] text-white/35 leading-tight">{key}</span>
                      <span className="text-[11px] font-medium text-white/70 text-right leading-tight">{value}</span>
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