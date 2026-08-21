import React, { useMemo, useRef, useState } from 'react';
import { ArrowDownRight, ArrowRight, CheckCircle2, Handshake, Plus, UsersRound } from 'lucide-react';
import CanonicalLink from '../components/shared/CanonicalLink';
import RevealOnScroll from '../components/shared/RevealOnScroll';
import SEOHead from '../components/shared/SEOHead';
import { pageSEO } from '../lib/seoConfig';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const benefits = [
  ['Для интеграторов', 'Добавляйте ИИ-сценарии к своим проектам в 1С, CRM и корпоративных системах. Берём на себя экспертизу, разработку и внедрение.'],
  ['Для консультантов', 'Закрывайте запросы клиентов на автоматизацию без найма собственной команды разработки. Подскажем реалистичный формат и оценку.'],
  ['Для экспертов и сообществ', 'Делитесь полезным решением с аудиторией и получайте вознаграждение за состоявшееся сотрудничество с привлечённым клиентом.'],
];

const steps = [
  ['01', 'Познакомимся', 'Расскажите о вашей аудитории, компетенциях и типе задач, с которыми приходят клиенты.'],
  ['02', 'Согласуем формат', 'Определим роль в проекте, порядок передачи лида и вознаграждение до старта работы.'],
  ['03', 'Запустим проект', 'Проводим диагностику, внедряем решение и держим вас в курсе ключевых этапов.'],
  ['04', 'Подведём результат', 'После оплаты клиентом проекта выплачиваем согласованное партнёрское вознаграждение.'],
];

const formatMoney = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });

export default function Partners() {
  const [leads, setLeads] = useState(4);
  const [conversion, setConversion] = useState(35);
  const [projectValue, setProjectValue] = useState(300000);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [website, setWebsite] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formOpenedAt = useRef(Date.now());

  const calculator = useMemo(() => {
    const projects = leads * (conversion / 100);
    const turnover = projects * projectValue;
    return { projects, reward: turnover * 0.15 };
  }, [leads, conversion, projectValue]);

  const goToForm = () => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          website,
          message: `Партнёрская заявка. ${form.message}`,
          pageUrl: window.location.href,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) throw new Error('Partner form request failed');
      setSubmitted(true);
    } catch (_) {
      setSubmitError('Не удалось отправить заявку. Напишите нам на hello@ai-tehcon.ru — мы обязательно ответим.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...pageSEO.partners} />

      <section className="relative overflow-hidden border-b border-white/[0.08] grid-lines">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(165,29,52,0.22),transparent_28%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1920px] grid-cols-1 gap-10 px-5 pb-16 pt-16 md:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end 2xl:px-16 3xl:px-24">
          <div className="page-enter">
            <div className="mb-8 inline-flex items-center gap-2 rounded-sm border signal-badge px-4 py-2 text-sm">
              <Handshake className="h-4 w-4" />
              Партнёрская программа
            </div>
            <h1 className="font-serif text-5xl leading-[.98] tracking-tight text-white md:text-7xl 2xl:text-8xl">
              Растим проекты<br />вместе с вами
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Объединяем вашу экспертизу и наши решения по ИИ-автоматизации. Передавайте запросы клиентов — вместе найдём сильный сценарий и доведём его до измеримого результата.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button type="button" onClick={goToForm} className="inline-flex items-center gap-2 rounded-sm signal-button px-6 py-3 text-sm font-semibold">
                Стать партнёром <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#calculator" className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3 text-sm text-white transition-colors hover:border-primary/60 hover:bg-white/[0.03]">
                Рассчитать потенциал <ArrowDownRight className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          <div className="page-enter page-enter-delay border border-white/[0.14] bg-black/60 p-5 backdrop-blur-sm md:p-7">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">Формат сотрудничества</p>
            <div className="mt-7 grid grid-cols-2 border-l border-t border-white/[0.12]">
              {[['15%', 'ориентир вознаграждения'], ['B2B', 'проекты и интеграции'], ['1 команда', 'для работы с клиентом'], ['0 ₽', 'вход в программу']].map(([value, label]) => (
                <div key={label} className="border-b border-r border-white/[0.12] px-4 py-5">
                  <p className="font-serif text-3xl text-white">{value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-white/55">Размер и условия вознаграждения зависят от проекта и фиксируются в партнёрском соглашении.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1920px] px-5 py-16 md:px-8 2xl:px-16 3xl:px-24">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-signal">Кому подойдёт</p>
              <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Дополняйте свою ценность<br />сильной технической командой</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">Не продаём шаблонные продукты. Разбираем контекст клиента и строим решение вокруг его процессов, данных и систем.</p>
          </div>
          <div className="grid grid-cols-1 border-l border-t border-white/[0.12] md:grid-cols-3">
            {benefits.map(([title, text], index) => (
              <RevealOnScroll key={title} delay={index * 0.08} className="border-b border-r border-white/[0.12] p-6 md:p-8 hover:bg-white/[0.025]">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h3 className="mt-10 text-xl text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{text}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="border-b border-white/[0.08] scroll-mt-20">
        <div className="mx-auto grid max-w-[1920px] grid-cols-1 lg:grid-cols-[.8fr_1.2fr]">
          <div className="border-b border-white/[0.08] p-8 lg:border-b-0 lg:border-r md:p-12 2xl:p-16">
            <p className="text-xs uppercase tracking-[0.16em] text-signal">Калькулятор</p>
            <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Оцените потенциал<br />партнёрства</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">Модель считает ориентировочное вознаграждение по ставке 15% от оплаченных проектов. Меняйте вводные под свою аудиторию.</p>
          </div>
          <div className="p-8 md:p-12 2xl:p-16">
            <div className="grid gap-7 md:grid-cols-3">
              <RangeControl label="Передаваемых лидов в месяц" value={leads} min={1} max={20} suffix="лид." onChange={setLeads} />
              <RangeControl label="Доля проектов" value={conversion} min={10} max={80} suffix="%" onChange={setConversion} />
              <RangeControl label="Средний бюджет проекта" value={projectValue} min={100000} max={1000000} step={50000} suffix="₽" onChange={setProjectValue} />
            </div>
            <div className="mt-10 grid grid-cols-1 gap-px bg-white/[0.12] md:grid-cols-2">
              <div className="bg-black p-6"><p className="text-[11px] uppercase tracking-[0.14em] text-white/55">Ожидаемо проектов</p><p className="mt-3 font-serif text-5xl text-white">{calculator.projects.toFixed(1)}</p><p className="mt-2 text-xs text-white/55">в месяц, при заданной конверсии</p></div>
              <div className="bg-primary/[0.12] p-6"><p className="text-[11px] uppercase tracking-[0.14em] text-white/70">Ваш ориентир</p><p className="mt-3 font-serif text-4xl text-white md:text-5xl">{formatMoney.format(calculator.reward)}</p><p className="mt-2 text-xs text-white/65">партнёрское вознаграждение в месяц</p></div>
            </div>
            <p className="mt-4 text-xs text-white/45">Расчёт носит информационный характер и не является офертой или гарантией дохода.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1920px] px-5 py-16 md:px-8 2xl:px-16 3xl:px-24">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">Как начинаем</p>
          <div className="mt-8 grid grid-cols-1 border-l border-t border-white/[0.12] md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => <div key={number} className="min-h-56 border-b border-r border-white/[0.12] p-6"><p className="font-mono text-xs text-primary">{number}</p><h3 className="mt-14 text-lg text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="partner-form" className="scroll-mt-20 border-b border-white/[0.08]">
        <div className="mx-auto grid max-w-[1920px] grid-cols-1 lg:grid-cols-5">
          <div className="border-b border-white/[0.08] p-8 lg:col-span-2 lg:border-b-0 lg:border-r md:p-12 2xl:p-16">
            <UsersRound className="h-7 w-7 text-primary" />
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-signal">Обратная связь</p>
            <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Давайте обсудим<br />партнёрство</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">Оставьте контакты и коротко опишите, с какими клиентами или задачами вы работаете. Ответим в течение двух рабочих часов.</p>
          </div>
          <div className="p-8 lg:col-span-3 md:p-12 2xl:p-16">
            {submitted ? <div className="py-14 text-center page-enter"><CheckCircle2 className="mx-auto h-10 w-10 text-primary" /><h3 className="mt-5 font-serif text-3xl text-white">Заявка отправлена</h3><p className="mt-2 text-sm text-white/70">Спасибо за интерес. Свяжемся с вами в течение двух рабочих часов.</p></div> : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="website" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-px w-px opacity-0" />
                {submitError && <div className="rounded-sm border border-primary/35 bg-primary/10 px-4 py-3 text-sm text-white">{submitError}</div>}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"><Field label="Имя"><Input required value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} placeholder="Ваше имя" className="partner-input" /></Field><Field label="Email"><Input required type="email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} placeholder="email@company.ru" className="partner-input" /></Field><Field label="Телефон"><Input required type="tel" value={form.phone} onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))} placeholder="+7 (999) 000-00-00" className="partner-input" /></Field><Field label="Компания / проект"><Input value={form.company} onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))} placeholder="Название компании" className="partner-input" /></Field></div>
                <Field label="Расскажите о формате партнёрства"><Textarea required value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} placeholder="Например: веду внедрения 1С и получаю запросы на работу с ИИ..." rows={5} className="partner-input resize-none" /></Field>
                <label className="flex cursor-pointer items-start gap-3 text-[12px] leading-relaxed text-white/70"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5 h-4 w-4 accent-[#a51d34]" /><span>Я соглашаюсь с <CanonicalLink to="/privacy-policy" className="text-white underline underline-offset-2 hover:text-primary">Политикой конфиденциальности</CanonicalLink> и даю согласие на обработку персональных данных.</span></label>
                <button type="submit" disabled={!consent || loading} className="flex w-full items-center justify-center gap-2 rounded-sm py-3 signal-button text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40">{loading ? 'Отправка...' : <>Отправить заявку <Plus className="h-4 w-4" /></>}</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function RangeControl({ label, value, min, max, step = 1, suffix, onChange }) {
  const display = suffix === '₽' ? formatMoney.format(value) : `${value} ${suffix}`;
  return <label className="block"><span className="block min-h-10 text-xs leading-relaxed text-white/65">{label}</span><span className="mt-2 block font-serif text-3xl text-white">{display}</span><input type="range" value={value} min={min} max={max} step={step} onChange={(event) => onChange(Number(event.target.value))} className="partner-range mt-5 w-full" /></label>;
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-2 block text-[10px] uppercase tracking-[0.12em] text-white/70">{label}</span>{children}</label>;
}
