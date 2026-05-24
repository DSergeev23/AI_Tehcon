import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { catalogProducts } from '../lib/catalogData';
import CatalogCard from '../components/catalog/CatalogCard';
import SectionHeader from '../components/shared/SectionHeader';

const categories = ['Все', ...new Set(catalogProducts.map(p => p.category))];

export default function Catalog() {
  const [active, setActive] = useState('Все');
  const filtered = active === 'Все' ? catalogProducts : catalogProducts.filter(p => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            badge="Каталог решений"
            title="ИИ-решения для бизнеса"
            description="Готовые продукты и кастомные решения для автоматизации любых процессов"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? 'bg-white/[0.1] text-foreground border border-white/[0.12]'
                    : 'text-muted-foreground hover:text-foreground border border-transparent hover:border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((product, i) => (
              <CatalogCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}