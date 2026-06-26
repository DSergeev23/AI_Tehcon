import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { catalogProducts } from '../lib/catalogData';
import CatalogCard from '../components/catalog/CatalogCard';
import SEOHead from '../components/shared/SEOHead';
import { pageSEO } from '../lib/seoConfig';
import { createCatalogItemListSchema, createCatalogBreadcrumbSchema } from '../lib/structuredData';

const ONE_C_CATEGORY = '1С';

function isOneCProduct(product) {
  const searchable = [
    product.title,
    product.shortDescription,
    product.category,
    ...(product.tags || []),
  ].join(' ').toLowerCase();

  return searchable.includes('1с') || searchable.includes('1c');
}

const sortedCatalogProducts = [...catalogProducts].sort((a, b) => (
  Number(isOneCProduct(b)) - Number(isOneCProduct(a))
));
const categories = ['Все', ONE_C_CATEGORY, ...new Set(sortedCatalogProducts.map(p => p.category))];

export default function Catalog() {
  const [active, setActive] = useState('Все');
  const filtered = active === 'Все'
    ? sortedCatalogProducts
    : active === ONE_C_CATEGORY
      ? sortedCatalogProducts.filter(isOneCProduct)
      : sortedCatalogProducts.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...pageSEO.catalog} schemaJson={[createCatalogItemListSchema(sortedCatalogProducts), createCatalogBreadcrumbSchema()]} />
      {/* Header */}
      <div className="border-b border-white/[0.08] relative">
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/[0.1] rounded-sm text-[11px] text-white/40 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              Каталог решений
            </div>
            <h1 className="font-serif text-5xl md:text-6xl 2xl:text-7xl text-white tracking-tight leading-tight mb-4">
              ИИ-решения<br />для бизнеса
            </h1>
            <p className="text-sm text-white/40 max-w-md leading-relaxed">
              Готовые продукты и кастомные решения для автоматизации любых бизнес-процессов
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 py-1.5 text-xs rounded-sm whitespace-nowrap transition-colors ${
                  active === cat
                    ? 'border border-white/[0.2] text-white bg-white/[0.05]'
                    : 'border border-transparent text-white/40 hover:text-white/70'
                }`}
              >
                {active === cat ? `[${cat}]` : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
          {filtered.map((product, i) => (
            <CatalogCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
