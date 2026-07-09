import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { catalogProducts } from '../lib/catalog';
import {
  catalogCategoryNav,
  catalogCategoryPages,
  isOneCProduct,
  productMatchesCatalogCategory,
} from '../lib/catalog/categorySeo';
import CatalogCard from '../components/catalog/CatalogCard';
import SEOHead from '../components/shared/SEOHead';
import { pageSEO, SITE_URL } from '../lib/seoConfig';
import { createCatalogItemListSchema, createCatalogBreadcrumbSchema } from '../lib/structuredData';

const sortedCatalogProducts = [...catalogProducts].sort((a, b) => (
  Number(isOneCProduct(b)) - Number(isOneCProduct(a))
));
const categoryLinks = [
  { label: 'Все', to: '/catalog', slug: null },
  ...catalogCategoryNav.map((categoryPage) => ({
    label: categoryPage.label,
    to: categoryPage.canonical,
    slug: categoryPage.slug,
  })),
];

export default function Catalog() {
  const { pathname } = useLocation();
  const categorySlug = pathname.replace(/\/$/, '').split('/')[2];
  const categoryPage = categorySlug ? catalogCategoryPages[categorySlug] : null;
  const seo = categoryPage || pageSEO.catalog;
  const filtered = categoryPage
    ? sortedCatalogProducts.filter((product) => productMatchesCatalogCategory(categoryPage.slug, product))
    : sortedCatalogProducts;
  const h1 = categoryPage?.h1 || 'ИИ-решения для бизнеса';
  const intro = categoryPage?.intro || 'Готовые продукты и кастомные решения для автоматизации любых бизнес-процессов';
  const schemaUrl = `${SITE_URL}${seo.canonical}`;
  const schemaName = categoryPage ? `${categoryPage.h1} | AI TehCon` : 'Каталог AI-решений AI TehCon';

  const schemaJson = [
    createCatalogItemListSchema(filtered, {
      name: schemaName,
      description: seo.description,
      url: schemaUrl,
    }),
    createCatalogBreadcrumbSchema(categoryPage),
  ];

  const activeSlug = categoryPage?.slug || null;

  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...seo} schemaJson={schemaJson} />
      {/* Header */}
      <div className="border-b border-white/[0.08] relative">
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border signal-badge rounded-sm text-[11px] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {categoryPage ? `${categoryPage.label}: решения` : 'Каталог решений'}
            </div>
            <h1 className="font-serif text-5xl md:text-6xl 2xl:text-7xl text-white tracking-tight leading-tight mb-4">
              {h1}
            </h1>
            <p className="text-sm text-white max-w-xl leading-relaxed">
              {intro}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter */}
      <div className="border-b border-white/[0.08]">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {categoryLinks.map((cat) => {
              const active = activeSlug === cat.slug;
              return (
                <Link
                  key={cat.label}
                  to={cat.to}
                  className={`px-3 py-1.5 text-xs rounded-sm whitespace-nowrap transition-colors ${
                    active
                      ? 'border border-primary/50 text-white bg-primary/15'
                      : 'border border-transparent text-white/75 hover:text-white'
                  }`}
                >
                  {active ? `[${cat.label}]` : cat.label}
                </Link>
              );
            })}
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
