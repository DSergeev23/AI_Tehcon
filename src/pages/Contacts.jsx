import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, CheckCircle2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RevealOnScroll from '../components/shared/RevealOnScroll';

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black pt-14">
      {/* Header */}
      <div className="border-b border-white/[0.08] relative">
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <div className="max-w-7xl mx-auto px-5 pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/[0.1] rounded-sm text-[11px] text-white/40 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              Связаться
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white tracking-tight leading-tight">ДАВАЙТ ОБСУДИ
Ваш прое
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Info sidebar */}
          <div className="lg:col-span-2 border-r border-white/[0.08]">
            <RevealOnScroll>
              <div className="p-8 border-b border-white/[0.08]">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-5">Контакты</p>
                <div className="space-y-4">
                  {[
                  { label: 'Email', val: 'hello@nexus-ai.ru' },
                  { label: 'Телефон', val: '+7 (495) 123-45-67' },
                  { label: 'Адрес', val: 'Москва, Пресненская наб. 12' }].
                  map((c, i) =>
                  <div key={i} className="py-3 border-b border-white/[0.06] last:border-0">
                      <p className="text-[10px] text-white/25 uppercase tracking-[0.12em] mb-0.5">{c.label}</p>
                      <p className="text-sm text-white/60">{c.val}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="p-8">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-4">Время работы</p>
                <p className="text-sm text-white/45 leading-relaxed">
                  Пн — Пт: 10:00 — 19:00 (МСК)<br />
                  Ответ на заявку — в течение 2 часов.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-8">
            <RevealOnScroll delay={0.1}>
              {submitted ?
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center">
                
                  <div className="w-12 h-12 border border-white/[0.12] rounded flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-5 h-5 text-white/60" />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Заявка отправлена</h3>
                  <p className="text-sm text-white/40">Свяжемся с вами в течение 2 часов.</p>
                </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-6">Форма обратной связи</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-white/30 uppercase tracking-[0.12em] mb-2">Имя</label>
                      <Input
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Ваше имя"
                      required
                      className="bg-white/[0.02] border-white/[0.08] text-white placeholder:text-white/20 focus:border-white/[0.2] rounded-sm h-10 text-sm" />
                    
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/30 uppercase tracking-[0.12em] mb-2">Email</label>
                      <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="email@company.ru"
                      required
                      className="bg-white/[0.02] border-white/[0.08] text-white placeholder:text-white/20 focus:border-white/[0.2] rounded-sm h-10 text-sm" />
                    
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-white/30 uppercase tracking-[0.12em] mb-2">Компания</label>
                    <Input
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    placeholder="Название компании"
                    className="bg-white/[0.02] border-white/[0.08] text-white placeholder:text-white/20 focus:border-white/[0.2] rounded-sm h-10 text-sm" />
                  
                  </div>

                  <div>
                    <label className="block text-[10px] text-white/30 uppercase tracking-[0.12em] mb-2">Сообщение</label>
                    <Textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Опишите вашу задачу..."
                    rows={6}
                    required
                    className="bg-white/[0.02] border-white/[0.08] text-white placeholder:text-white/20 focus:border-white/[0.2] rounded-sm text-sm resize-none" />
                  
                  </div>

                  <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors">
                  
                    Отправить заявку <Plus className="w-4 h-4" />
                  </button>
                </form>
              }
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>);

}