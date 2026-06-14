import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Linkedin } from 'lucide-react';

const navLinks = [
{ label: 'Главная', to: '/' },
{ label: 'О компании', to: '/about' },
{ label: 'Каталог решений', to: '/catalog' },
{ label: 'Контакты', to: '/contacts' }];


const solutions = [
{ label: 'ИИ-Лидогенерация в Telegram', to: '/catalog/telegram-lead-generator' },
{ label: 'Автоматизация поддержки', to: '/catalog/customer-support-automation' },
{ label: 'Анализ документов', to: '/catalog/document-analyzer' },
{ label: 'Генератор контента', to: '/catalog/content-generator' },
{ label: 'Предиктивная аналитика', to: '/catalog/predictive-analytics' },
{ label: 'ИИ-Агент для рассылок', to: '/catalog/outreach-ai-agent' },
{ label: 'Голосовой ИИ-ассистент', to: '/catalog/voice-ai-assistant' }];


const legal = [
{ label: 'Политика конфиденциальности', to: '/privacy-policy' },
{ label: 'Условия использования', to: '/terms-of-use' }];


function FooterLink({ to, children, external }) {
  const base = "text-[13px] text-white/40 leading-snug transition-colors duration-200 hover:text-white/80";
  if (external) {
    return (
      <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
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
                src="https://media.base44.com/images/public/6a12ce8c6eb2615f598d6ab7/b985f6d81_icon.png"
                alt="AI Tehcon"
                className="w-5 h-5 rounded-sm transition-opacity group-hover:opacity-80"
              />
              <span className="text-sm font-semibold text-white tracking-tight">Tehcon AI</span>
            </Link>
            <p className="text-[13px] text-white/35 leading-relaxed max-w-[260px]">
              Внедряем автономных AI-агентов в 1С, CRM, Excel и Telegram. Бизнес работает быстрее, точнее и дешевле.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <motion.a
                href="https://t.me/dmtr_sergeev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/25 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}>
                
                <Send className="w-3.5 h-3.5" />
              </motion.a>
              








              
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.16em] mb-5">Навигация</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) =>
              <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
              )}
            </div>
          </div>

          {/* Col 3 — Solutions */}
          <div>
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.16em] mb-5">Решения</p>
            <div className="flex flex-col gap-3">
              {solutions.map((l) =>
              <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
              )}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.16em] mb-5">Контакты</p>
            <div className="flex flex-col gap-3">
              <FooterLink to="mailto:hello@it-tehcon.ru" external>hello@it-tehcon.ru</FooterLink>
              <FooterLink to="https://t.me/dmtr_sergeev" external>@dmtr_sergeev</FooterLink>
            </div>
            <div className="mt-8">
              <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.16em] mb-5">Правовое</p>
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
          <p className="text-[11px] text-white/20">© 2026 Tehcon AI. Все права защищены.</p>
          <div className="flex items-center gap-5">
            {legal.map((l) =>
            <motion.div key={l.to} whileHover={{ x: 1 }} transition={{ duration: 0.15 }}>
                <Link to={l.to} className="text-[11px] text-white/20 hover:text-white/45 transition-colors">
                  {l.label}
                </Link>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </footer>);

}