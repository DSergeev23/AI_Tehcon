import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import RevealOnScroll from '../components/shared/RevealOnScroll';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@nexus-ai.ru' },
  { icon: Phone, label: 'Телефон', value: '+7 (495) 123-45-67' },
  { icon: MapPin, label: 'Адрес', value: 'Москва, Пресненская наб. 12' },
];

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-muted-foreground mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Связаться с нами
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter-custom text-gradient-white leading-[0.95] mb-6">
              Начнём проект
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Расскажите о вашей задаче — мы предложим оптимальное ИИ-решение.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <div className="space-y-4 mb-10">
                  {contactInfo.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-0.5">{c.label}</p>
                          <p className="text-sm font-medium text-foreground">{c.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="glass-card rounded-2xl p-7">
                  <h3 className="text-sm font-bold text-foreground mb-3">Время работы</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Пн — Пт: 10:00 — 19:00 (МСК)<br />
                    Ответ на заявку — в течение 2 часов.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <RevealOnScroll delay={0.1}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card rounded-2xl p-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Заявка отправлена</h3>
                    <p className="text-muted-foreground">Мы свяжемся с вами в течение 2 часов.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-2 block">Имя</label>
                        <Input
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Ваше имя"
                          required
                          className="bg-white/[0.03] border-white/[0.08] focus:border-primary/40 text-foreground placeholder:text-muted-foreground/50"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-2 block">Email</label>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="email@company.com"
                          required
                          className="bg-white/[0.03] border-white/[0.08] focus:border-primary/40 text-foreground placeholder:text-muted-foreground/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-2 block">Компания</label>
                      <Input
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Название компании"
                        className="bg-white/[0.03] border-white/[0.08] focus:border-primary/40 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-2 block">Сообщение</label>
                      <Textarea
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Опишите вашу задачу..."
                        rows={5}
                        required
                        className="bg-white/[0.03] border-white/[0.08] focus:border-primary/40 text-foreground placeholder:text-muted-foreground/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full py-6 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                )}
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}