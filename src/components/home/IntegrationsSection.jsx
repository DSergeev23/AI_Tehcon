import React from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

const integrations = [
  { icon: Calendar, title: 'Google Calendar', description: 'Читает расписание, создаёт события, проверяет занятость и блокирует время' },
  { icon: FileText, title: 'Google Docs', description: 'Создаёт и редактирует документы, вставляет таблицы, сохраняет отчёты' },
  { icon: Table, title: 'Google Sheets', description: 'Читает и записывает данные в таблицы, строит сводки, делает пакетные обновления' },
  { icon: Send, title: 'Telegram', description: 'Отправляет и получает сообщения, управляет каналами, ботами и уведомлениями' },
  { icon: MessageCircle, title: 'WhatsApp', description: 'Интеграция с WhatsApp Business API, рассылки, автоответы и умная маршрутизация диалогов' },
  { icon: Briefcase, title: 'Битрикс24 / CRM', description: 'Полная интеграция: создание лидов, постановка задач, обновление статусов сделок и карточек клиентов' },
  { icon: FileSpreadsheet, title: 'Excel & Word', description: 'Парсинг сложных таблиц, автоматическая генерация договоров, актов и отчетов по шаблонам' },
  { icon: Mail, title: 'Email сервисы', description: 'Автоматические сообщения на почту, отчеты и многое другое' },
  { icon: Video, title: 'Zoom', description: 'Автоматическое создание конференций, транскрибация созвонов и генерация AI-саммари встреч' },
  { icon: Database, title: 'Базы данных SQL', description: 'Прямое подключение к PostgreSQL/MySQL, выполнение сложных запросов и аналитика больших данных' },
  { icon: Mic, title: 'Алиса от Яндекса', description: 'Создание кастомных приватных навыков для голосового помощника, управление бизнес-процессами голосом' },
  { icon: Server, title: '1C Предприятие', description: 'Читает и записывает данные в документы, справочники, синхронизирует номенклатуру и создаёт отчёты' },
  { icon: BookOpen, title: 'Notion', description: 'Создаёт страницы и базы данных, ищет по воркспейсу, обновляет записи' },
  { icon: Blocks, title: 'И многое другое', description: 'Тысячи интеграций через API, Webhooks и MCP-серверы под любые задачи вашего бизнеса' },
];

export default function IntegrationsSection() {
  return (
    <section className="border-t border-white/[0.08]">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24 py-16 2xl:py-24">
        <RevealOnScroll>
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl text-white tracking-tight leading-tight mb-4">
              Подключается ко всему,<br />
              <span className="[font-family:'Instrument_Serif',_serif] not-italic">что вы уже используете</span>
            </h2>
            <p className="text-sm text-white/45 max-w-md leading-relaxed">
              Tehcon AI работает с вашими инструментами через MCP и API.{' '}
              Никакой ручной настройки — просто скажите агенту подключиться.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {integrations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group bg-neutral-950 border border-white/5 rounded-lg p-6 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-white/5 text-neutral-300 w-fit mb-4 group-hover:bg-white/10 transition-colors duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}