import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/shared/SEOHead';
import { pageSEO } from '../lib/seoConfig';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RevealOnScroll from '../components/shared/RevealOnScroll';

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [website, setWebsite] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formOpenedAt = useRef(Date.now());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) return;
    setLoading(true);
    setSubmitError('');

    if (website.trim()) {
      setSubmitted(true);
      setLoading(false);
      return;
    }

    if (Date.now() - formOpenedAt.current < 3000) {
      setSubmitError('Форма отправлена слишком быстро. Проверьте данные и попробуйте ещё раз.');
      setLoading(false);
      return;
    }

    const lastSubmitAt = Number(window.localStorage.getItem('aiTehConContactLastSubmitAt') || 0);
    if (Date.now() - lastSubmitAt < 60000) {
      setSubmitError('Заявка уже отправлялась недавно. Попробуйте повторить через минуту.');
      setLoading(false);
      return;
    }

    const submittedAt = new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow'
    });
    const subjectName = form.name.trim() || 'Без имени';
    const subjectCompany = form.company.trim() || 'Без компании';

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@it-tehcon.ru", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Новая заявка AI TehCon: ${subjectName} / ${subjectCompany}`,
          _template: 'table',
          _replyto: form.email,
          'Имя': form.name,
          'Email': form.email,
          'Телефон': form.phone,
          'Компания': form.company || 'Не указана',
          'Задача': form.message,
          'Источник': 'Сайт AI TehCon',
          'Страница': window.location.href,
          'Дата отправки': submittedAt,
          'Тип заявки': 'Консультация'
        })
      });
      if (!response.ok) {
        throw new Error('FormSubmit request failed');
      }
      window.localStorage.setItem('aiTehConContactLastSubmitAt', String(Date.now()));
      setSubmitted(true);
    } catch (_) {
      setSubmitError('Не удалось отправить заявку. Попробуйте ещё раз или напишите напрямую на hello@it-tehcon.ru.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SEOHead title="AI TehCon" description={pageSEO.contacts.description} canonical={pageSEO.contacts.canonical} />
      {/* Header */}
      <div className="border-b border-white/[0.08] relative">
        <span className="absolute top-5 right-5 text-white/15 text-xs">+</span>
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border signal-badge rounded-sm text-[11px] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Связаться
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white tracking-tight leading-tight">Давайте обсудим 
Ваш проект
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Info sidebar */}
          <div className="lg:col-span-2 border-r border-white/[0.08]">
            <RevealOnScroll>
              <div className="p-8 border-b border-white/[0.08]">
                <p className="text-[10px] text-signal uppercase tracking-[0.15em] mb-5">Контакты</p>
                <div className="space-y-4">
                  {[
                  { label: 'Email', val: 'hello@it-tehcon.ru' },
                  { label: 'Телефон', val: '+7 (919) 213-71-11\n+7 (919) 273-35-52' },
                  { label: 'Адрес', val: 'Москва, 2-й Вольный пер, д.11' }].
                  map((c, i) =>
                  <div key={i} className="py-3 border-b border-white/[0.06] last:border-0">
                      <p className="text-[10px] text-white/75 uppercase tracking-[0.12em] mb-0.5">{c.label}</p>
                      <p className="text-sm text-white whitespace-pre-line">{c.val}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="p-8">
                <p className="text-[10px] text-signal uppercase tracking-[0.15em] mb-4">Время работы</p>
                <p className="text-sm text-white/80 leading-relaxed">
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
                
                  <div className="w-12 h-12 border border-primary/40 bg-primary/10 rounded flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Заявка отправлена</h3>
                  <p className="text-sm text-white/80">Свяжемся с вами в течение 2 часов.</p>
                </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-[10px] text-signal uppercase tracking-[0.15em] mb-6">Форма обратной связи</p>
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0"
                  />
                  {submitError &&
                    <div className="border border-primary/35 bg-primary/10 text-white rounded-sm px-4 py-3 text-sm leading-relaxed">
                      {submitError}
                    </div>
                  }

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-white/75 uppercase tracking-[0.12em] mb-2">Имя</label>
                      <Input
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Ваше имя"
                      required
                      className="bg-white/[0.02] border-white/[0.12] text-white placeholder:text-white/35 focus:border-primary/50 rounded-sm h-10 text-sm" />
                    
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/75 uppercase tracking-[0.12em] mb-2">Email</label>
                      <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="email@company.ru"
                      required
                      className="bg-white/[0.02] border-white/[0.12] text-white placeholder:text-white/35 focus:border-primary/50 rounded-sm h-10 text-sm" />
                    
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-white/75 uppercase tracking-[0.12em] mb-2">Телефон</label>
                      <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="+7 (999) 000-00-00"
                      required
                      className="bg-white/[0.02] border-white/[0.12] text-white placeholder:text-white/35 focus:border-primary/50 rounded-sm h-10 text-sm" />
                    
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/75 uppercase tracking-[0.12em] mb-2">Компания</label>
                      <Input
                      value={form.company}
                      onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                      placeholder="Название компании"
                      className="bg-white/[0.02] border-white/[0.12] text-white placeholder:text-white/35 focus:border-primary/50 rounded-sm h-10 text-sm" />
                    
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-white/75 uppercase tracking-[0.12em] mb-2">Сообщение</label>
                    <Textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Опишите вашу задачу..."
                    rows={6}
                    required
                    className="bg-white/[0.02] border-white/[0.12] text-white placeholder:text-white/35 focus:border-primary/50 rounded-sm text-sm resize-none" />
                  
                  </div>

                  {/* Consent checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group mt-2">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-[3px] border transition-colors ${consent ? 'bg-primary border-primary' : 'border-white/25 bg-white/[0.03] group-hover:border-primary/45'}`}>
                        {consent && (
                          <svg className="w-4 h-4 text-black" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-[12px] text-white/75 leading-relaxed">
                      Я соглашаюсь с{' '}
                      <Link to="/privacy-policy" className="text-white underline underline-offset-2 hover:text-primary transition-colors">
                        Политикой конфиденциальности
                      </Link>{' '}
                      и даю согласие на обработку персональных данных.
                    </span>
                  </label>

                  <button
                  type="submit"
                  disabled={!consent || loading}
                  className="w-full flex items-center justify-center gap-2 py-3 signal-button text-sm font-semibold rounded-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                  
                    {loading ? 'Отправка...' : <>Отправить заявку <Plus className="w-4 h-4" /></>}
                  </button>
                </form>
              }
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>);

}
