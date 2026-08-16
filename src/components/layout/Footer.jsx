import React from 'react';
import CanonicalLink from '../shared/CanonicalLink';
import { Mail, Send } from 'lucide-react';

const navLinks = [
{ label: 'Главная', to: '/' },
{ label: 'О компании', to: '/about' },
{ label: 'Каталог решений', to: '/catalog' },
{ label: 'Контакты', to: '/contacts' }];


const solutions = [
  { label: 'ИИ-агент для 1С: ответы по данным бизнеса', to: '/catalog/ai-agent-for-1c-chat-voice-analytics' },
  { label: 'Анализ договоров поставки на предмет нарушений', to: '/catalog/1c-supplier-contract-penalty-analysis' },
  { label: 'Автоматизация блока закупок с помощью ИИ на примере 1С:УТ', to: '/catalog/1c-procurement-ai-automation' },
  { label: 'Автоматические ежедневные отчеты 1С с поиском отклонений', to: '/catalog/1c-daily-deviation-reports' },
  { label: 'Автоматический анализ цен конкурентов с данными 1С', to: '/catalog/1c-competitor-price-analysis' },
  { label: 'Помощь в закупке товаров 1С через Ozon, Wildberries и Яндекс Маркет', to: '/catalog/1c-marketplace-procurement-assistant' },
  { label: 'Помощник по браку и качеству на производстве в программах 1С', to: '/catalog/1c-production-quality-defects-assistant' },
  { label: 'Анализ норм списания материалов в производстве в программах 1С', to: '/catalog/1c-material-consumption-norms-analysis' },
];

const legal = [
{ label: 'Политика конфиденциальности', to: '/privacy-policy' },
{ label: 'Условия использования', to: '/terms-of-use' }];


function FooterLink({ to, children, external }) {
  const base = "text-[13px] text-white/75 leading-snug transition-colors duration-200 hover:text-white";
  if (external) {
    const opensInNewTab = /^https?:/.test(to);
    return (
      <a
        href={to}
        target={opensInNewTab ? '_blank' : undefined}
        rel={opensInNewTab ? 'noopener noreferrer' : undefined}
        className={`${base} transition-transform hover:translate-x-0.5`}>
        
        {children}
      </a>);

  }
  return (
    <div className="transition-transform hover:translate-x-0.5">
      <CanonicalLink to={to} className={base}>{children}</CanonicalLink>
    </div>);

}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 2xl:px-28 3xl:px-40 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[2fr_1fr_2fr_1.5fr] gap-x-8 gap-y-12 mb-16">

          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <CanonicalLink to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <img
                src="/images/icon-32.png"
                srcSet="/images/icon-32.png 1x, /images/icon-64.png 2x"
                alt="AI TehCon"
                width="20"
                height="20"
                className="w-5 h-5 rounded-sm transition-opacity group-hover:opacity-80"
              />
              <span className="text-sm font-semibold text-white tracking-tight">AI TehCon</span>
            </CanonicalLink>
            <p className="text-[13px] text-white/75 leading-relaxed max-w-[260px]">
              Внедряем автономных AI-агентов в 1С, CRM, Excel и Telegram. Бизнес работает быстрее, точнее и дешевле.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://t.me/ai_tehcon_business"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI TehCon в Telegram"
                className="w-8 h-8 rounded-md border border-primary/35 bg-primary/10 flex items-center justify-center text-primary hover:text-white hover:border-primary/60 transition-transform hover:scale-105">
                
                <Send className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:hello@ai-tehcon.ru"
                aria-label="Написать на hello@ai-tehcon.ru"
                className="w-8 h-8 rounded-md border border-primary/35 bg-primary/10 flex items-center justify-center text-primary hover:text-white hover:border-primary/60 transition-transform hover:scale-105">
                
                <Mail className="w-3.5 h-3.5" />
              </a>
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
              <FooterLink to="mailto:hello@ai-tehcon.ru" external>hello@ai-tehcon.ru</FooterLink>
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
            <div key={l.to} className="transition-transform hover:translate-x-px">
                <CanonicalLink to={l.to} className="text-[11px] text-white/55 hover:text-white transition-colors">
                  {l.label}
                </CanonicalLink>
              </div>
            )}
          </div>
        </div>

      </div>
    </footer>);

}
