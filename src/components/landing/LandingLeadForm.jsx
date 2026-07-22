import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getCampaignAttribution, trackLandingEvent } from '../../lib/analytics';

const initialForm = {
  name: '',
  company: '',
  contact: '',
  message: '',
};

export default function LandingLeadForm({ landing }) {
  const [form, setForm] = useState(initialForm);
  const [website, setWebsite] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formOpenedAt = useRef(Date.now());

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!consent || loading) return;

    setLoading(true);
    setSubmitError('');

    if (website.trim()) {
      setSubmitted(true);
      setLoading(false);
      return;
    }

    if (Date.now() - formOpenedAt.current < 3000) {
      setSubmitError('Форма заполнена слишком быстро. Проверьте данные и попробуйте ещё раз.');
      setLoading(false);
      return;
    }

    const storageKey = `aiTehConLandingLastSubmitAt:${landing.slug}`;
    const lastSubmitAt = Number(window.localStorage.getItem(storageKey) || 0);
    if (Date.now() - lastSubmitAt < 60000) {
      setSubmitError('Заявка уже отправлялась недавно. Повторите попытку через минуту.');
      setLoading(false);
      return;
    }

    const attribution = getCampaignAttribution();
    const submittedAt = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@it-tehcon.ru', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Новая заявка AI TehCon: ${landing.requestType} / ${form.company.trim() || 'Компания не указана'}`,
          _template: 'table',
          Имя: form.name,
          Компания: form.company,
          Контакт: form.contact,
          Задача: form.message,
          'Тип заявки': landing.requestType,
          Страница: window.location.href,
          'Дата отправки': submittedAt,
          UTM: Object.keys(attribution).length ? JSON.stringify(attribution) : 'Не указаны',
        }),
      });

      if (!response.ok) throw new Error('FormSubmit request failed');

      window.localStorage.setItem(storageKey, String(Date.now()));
      trackLandingEvent('landing_lead_submit', {
        landing: landing.slug,
        request_type: landing.requestType,
        ...attribution,
      });
      setSubmitted(true);
    } catch (_) {
      setSubmitError('Не удалось отправить заявку. Попробуйте ещё раз или напишите на hello@it-tehcon.ru.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[420px] border border-primary/35 bg-primary/[0.07] p-6 sm:p-9 flex flex-col justify-between" role="status">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <div>
          <p className="font-serif text-3xl text-white mb-3">Заявка отправлена</p>
          <p className="text-sm leading-relaxed text-white/75 max-w-md">
            Мы изучим описание процесса и свяжемся по указанному контакту, чтобы уточнить контекст и следующий шаг.
          </p>
        </div>
        <a className="text-sm text-white underline underline-offset-4 hover:text-primary transition-colors" href="mailto:hello@it-tehcon.ru">
          hello@it-tehcon.ru
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`website-${landing.slug}`}>Website</label>
        <input
          id={`website-${landing.slug}`}
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`name-${landing.slug}`} className="block text-[11px] text-white/70 uppercase tracking-[0.12em] mb-2">
            Имя
          </label>
          <Input
            id={`name-${landing.slug}`}
            value={form.name}
            onChange={updateField('name')}
            placeholder="Как к вам обращаться"
            autoComplete="name"
            required
            className="h-11 rounded-sm border-white/[0.14] bg-white/[0.025] text-white placeholder:text-white/35 focus-visible:ring-primary"
          />
        </div>
        <div>
          <label htmlFor={`company-${landing.slug}`} className="block text-[11px] text-white/70 uppercase tracking-[0.12em] mb-2">
            Компания
          </label>
          <Input
            id={`company-${landing.slug}`}
            value={form.company}
            onChange={updateField('company')}
            placeholder="Название компании"
            autoComplete="organization"
            required
            className="h-11 rounded-sm border-white/[0.14] bg-white/[0.025] text-white placeholder:text-white/35 focus-visible:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`contact-${landing.slug}`} className="block text-[11px] text-white/70 uppercase tracking-[0.12em] mb-2">
          Телефон, email или Telegram
        </label>
        <Input
          id={`contact-${landing.slug}`}
          value={form.contact}
          onChange={updateField('contact')}
          placeholder="Удобный способ связи"
          autoComplete="email"
          required
          className="h-11 rounded-sm border-white/[0.14] bg-white/[0.025] text-white placeholder:text-white/35 focus-visible:ring-primary"
        />
      </div>

      <div>
        <label htmlFor={`message-${landing.slug}`} className="block text-[11px] text-white/70 uppercase tracking-[0.12em] mb-2">
          Процесс или задача
        </label>
        <Textarea
          id={`message-${landing.slug}`}
          value={form.message}
          onChange={updateField('message')}
          placeholder={landing.formPlaceholder}
          rows={6}
          required
          className="rounded-sm border-white/[0.14] bg-white/[0.025] text-white placeholder:text-white/35 focus-visible:ring-primary resize-none"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer group">
        <span className="relative mt-0.5 shrink-0">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="peer sr-only"
            required
          />
          <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-white/25 bg-white/[0.03] peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-checked:border-primary peer-checked:bg-primary transition-colors">
            {consent && <CheckCircle2 className="h-4 w-4 text-white" aria-hidden="true" />}
          </span>
        </span>
        <span className="text-xs leading-relaxed text-white/65">
          Я соглашаюсь с{' '}
          <Link to="/privacy-policy" className="text-white underline underline-offset-2 hover:text-primary transition-colors">
            Политикой конфиденциальности
          </Link>{' '}
          и даю согласие на обработку персональных данных.
        </span>
      </label>

      {submitError && (
        <p className="border-l-2 border-primary pl-3 text-sm leading-relaxed text-white" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={!consent || loading}
        className="signal-button flex min-h-12 w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? 'Отправка...' : <>{landing.cta}<Plus className="h-4 w-4" aria-hidden="true" /></>}
      </button>
    </form>
  );
}
