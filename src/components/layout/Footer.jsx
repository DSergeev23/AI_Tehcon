import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                <div className="bg-white rounded-[1px]" />
                <div className="bg-white/40 rounded-[1px]" />
                <div className="bg-white/40 rounded-[1px]" />
                <div className="bg-white rounded-[1px]" />
              </div>
              <span className="text-sm font-semibold text-white tracking-tight">Tehcon AI</span>
            </Link>
            <p className="text-xs text-white/40 leading-relaxed hidden">
              Stack: TypeScript<br />
              React · Tailwind
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-4">Быстрые ссылки</p>
            <div className="flex flex-col gap-3">
              <Link to="/catalog" className="text-xs text-white/40 hover:text-white/80 transition-colors">Каталог</Link>
              <Link to="/about" className="text-xs text-white/40 hover:text-white/80 transition-colors">Возможности</Link>
              <Link to="/about" className="text-xs text-white/40 hover:text-white/80 transition-colors">Функции</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-4">Страницы</p>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-xs text-white/40 hover:text-white/80 transition-colors">Главная</Link>
              <Link to="/about" className="text-xs text-white/40 hover:text-white/80 transition-colors">О компании</Link>
              <Link to="/contacts" className="text-xs text-white/40 hover:text-white/80 transition-colors">Контакты</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-4">Правовое</p>
            <div className="flex flex-col gap-3">
              <span className="text-xs text-white/40">Условия использования</span>
              <span className="text-xs text-white/40">Конфиденциальность</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-4">Связаться</p>
            <div className="flex flex-col gap-3">
              <span className="text-xs text-white/40">hello@tehcon.ai</span>
              <a href="https://t.me/tehconai" className="text-xs text-white/40 hover:text-white/70 transition-colors">Telegram: @tehconai</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex justify-between items-center">
          <p className="text-xs text-white/25">© 2026 Tehcon AI</p>
          <p className="text-xs text-white/25">Все права защищены</p>
        </div>
      </div>
    </footer>);

}