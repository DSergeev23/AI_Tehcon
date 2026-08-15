import React from 'react';
import {
  Calendar,
  FileText,
  Table,
  Send,
  MessageCircle,
  Briefcase,
  FileSpreadsheet,
  Mail,
  Video,
  Database,
  Mic,
  Server,
  BookOpen,
  Blocks,
  ShoppingBag,
  Users,
} from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

const integrations = [
  { icon: Server, title: '1С Предприятие', description: 'Читает и записывает данные в документы, справочники, синхронизирует номенклатуру и создаёт отчёты' },
  { icon: Mic, title: 'Алиса от Яндекса', description: 'Создание кастомных приватных навыков для голосового помощника, управление бизнес-процессами голосом' },
  { icon: Calendar, title: 'Google Calendar', description: 'Читает расписание, создаёт события, проверяет занятость и блокирует время' },
  { icon: FileText, title: 'Google Docs', description: 'Создаёт и редактирует документы, вставляет таблицы, сохраняет отчёты' },
  { icon: Table, title: 'Google Sheets', description: 'Читает и записывает данные в таблицы, строит сводки, делает пакетные обновления' },
  { icon: Send, title: 'Telegram', description: 'Отправляет и получает сообщения, управляет каналами, ботами и уведомлениями' },
  { icon: MessageCircle, title: 'WhatsApp', description: 'Интеграция с WhatsApp Business API, рассылки, автоответы и умная маршрутизация диалогов' },
  { icon: Users, title: 'CRM-системы', description: 'Создаёт лиды и сделки, обновляет воронки, фиксирует касания и передаёт данные в отчёты' },
  { icon: FileSpreadsheet, title: 'Excel & Word', description: 'Парсинг сложных таблиц, автоматическая генерация договоров, актов и отчетов по шаблонам' },
  { icon: Mail, title: 'Email сервисы', description: 'Автоматические сообщения на почту, отчеты и многое другое' },
  { icon: Video, title: 'Zoom', description: 'Автоматическое создание конференций, транскрибация созвонов и генерация AI-саммари встреч' },
  { icon: Database, title: 'Базы данных SQL', description: 'Прямое подключение к PostgreSQL/MySQL, выполнение сложных запросов и аналитика больших данных' },
  { icon: BookOpen, title: 'Notion', description: 'Создаёт страницы и базы данных, ищет по воркспейсу, обновляет записи' },
  { icon: ShoppingBag, title: 'Ozon / Wildberries', description: 'Собирает заказы, остатки, цены, отзывы и аналитику продаж с маркетплейсов' },
  { icon: Briefcase, title: 'Битрикс24', description: 'Создаёт лиды, ставит задачи, обновляет сделки, статусы и карточки клиентов' },
  { icon: Blocks, title: 'И многое другое', description: 'Тысячи интеграций через API, Webhooks и MCP-серверы под любые задачи вашего бизнеса' },
];

export default function IntegrationsSection() {
  return (
    <section className="border-t border-white/[0.08] render-deferred">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-16 2xl:py-24">
        <RevealOnScroll>
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl text-white tracking-tight leading-tight mb-4">
              Подключается ко всему,<br />
              <span className="[font-family:'Instrument_Serif',_serif] not-italic">что вы уже используете</span>
            </h2>
            <p className="text-sm text-white max-w-md leading-relaxed">
              AI TehCon работает с вашими инструментами через MCP и API.{' '}
              Никакой ручной настройки — просто скажите агенту подключиться.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {integrations.map((item) => (
            <div
              key={item.title}
              className="group bg-neutral-950 border border-white/10 rounded-lg p-6 hover:bg-white/[0.03] hover:border-primary/45 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
