import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tighter-custom text-foreground">
                NEXUS<span className="text-gradient-blue">.AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Создаём интеллектуальные системы автоматизации, которые трансформируют бизнес-процессы и открывают новые возможности для роста.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Навигация</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Главная</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">О компании</Link>
              <Link to="/catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Каталог</Link>
              <Link to="/contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Контакты</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground">hello@nexus-ai.ru</span>
              <span className="text-sm text-muted-foreground">+7 (495) 123-45-67</span>
              <span className="text-sm text-muted-foreground">Москва, Россия</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 NEXUS.AI — Все права защищены</p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Политика конфиденциальности</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Условия использования</span>
          </div>
        </div>
      </div>
    </footer>
  );
}