import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { catalogProducts } from '../../lib/catalog';

const navLinks = [
{ label: 'Главная', to: '/' },
{ label: 'О компании', to: '/about' },
{ label: 'Каталог решений', to: '/catalog' },
{ label: 'Контакты', to: '/contacts' }];


function isOneCProduct(product) {
  const searchable = [
    product.title,
    product.shortDescription,
    product.category,
    ...(product.tags || []),
  ].join(' ').toLowerCase();

  return searchable.includes('1с') || searchable.includes('1c');
}

const solutions = [...catalogProducts]
  .sort((a, b) => Number(isOneCProduct(b)) - Number(isOneCProduct(a)))
  .slice(0, 8)
  .map((product) => ({
    label: product.title,
    to: `/catalog/${product.id}`,
  }));


const legal = [
{ label: 'Политика конфиденциальности', to: '/privacy-policy' },
{ label: 'Условия использования', to: '/terms-of-use' }];


function FooterLink({ to, children, external }) {
  const base = "text-[13px] text-white/75 leading-snug transition-colors duration-200 hover:text-white";
  if (external) {
    const opensInNewTab = /^https?:/.test(to);
    return (
      <motion.a
        href={to}
        target={opensInNewTab ? '_blank' : undefined}
        rel={opensInNewTab ? 'noopener noreferrer' : undefined}
        className={base}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.15 }}>
        
        {children}
      </motion.a>);

  }
  return (
    <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
      <Link to={to} className={base}>{children}</Link>
    </motion.div>);

}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 2xl:px-28 3xl:px-40 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[2fr_1fr_2fr_1.5fr] gap-x-8 gap-y-12 mb-16">

          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <img
                src="/images/icon.png"
                alt="AI TehCon"
                className="w-5 h-5 rounded-sm transition-opacity group-hover:opacity-80"
              />
              <span className="text-sm font-semibold text-white tracking-tight">AI TehCon</span>
            </Link>
            <p className="text-[13px] text-white/75 leading-relaxed max-w-[260px]">
              Внедряем автономных AI-агентов в 1С, CRM, Excel и Telegram. Бизнес работает быстрее, точнее и дешевле.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <motion.a
                href="https://t.me/ai_tehcon_business"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI TehCon в Telegram"
                className="w-8 h-8 rounded-md border border-primary/35 bg-primary/10 flex items-center justify-center text-primary hover:text-white hover:border-primary/60 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}>
                
                <Send className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="mailto:hello@it-tehcon.ru"
                aria-label="Написать на hello@it-tehcon.ru"
                className="w-8 h-8 rounded-md border border-primary/35 bg-primary/10 flex items-center justify-center text-primary hover:text-white hover:border-primary/60 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}>
                
                <Mail className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h2 className="text-xs font-semibold text-signal uppercase tracking-[0.16em] mb-5">Навигация</h2>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) =>
              <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
              )}
            </div>
          </div>

          {/* Col 3 — Solutions */}
          <div>
            <h2 className="text-xs font-semibold text-signal uppercase tracking-[0.16em] mb-5">Решения</h2>
            <div className="flex flex-col gap-3">
              {solutions.map((l) =>
              <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
              )}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h2 className="text-xs font-semibold text-signal uppercase tracking-[0.16em] mb-5">Контакты</h2>
            <div className="flex flex-col gap-3">
              <FooterLink to="mailto:hello@it-tehcon.ru" external>hello@it-tehcon.ru</FooterLink>
              <FooterLink to="https://t.me/ai_tehcon_business" external>AI-TehCon в Telegram</FooterLink>
            </div>
            <div className="mt-8">
              <h2 className="text-xs font-semibold text-signal uppercase tracking-[0.16em] mb-5">Правовое</h2>
              <div className="flex flex-col gap-3">
                {legal.map((l) =>
                <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px] text-white/55">© 2026 AI TehCon. Все права защищены.</p>
          <div className="flex items-center gap-5">
            {legal.map((l) =>
            <motion.div key={l.to} whileHover={{ x: 1 }} transition={{ duration: 0.15 }}>
                <Link to={l.to} className="text-[11px] text-white/55 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </footer>);

}
