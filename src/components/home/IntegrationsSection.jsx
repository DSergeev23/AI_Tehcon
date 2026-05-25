import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Calendar, HardDrive, FileText, Sheet, Search, Video, Send, Github, GitBranch, Zap, MessageSquare, BookOpen } from 'lucide-react';
import RevealOnScroll from '../shared/RevealOnScroll';

const integrations = [
  {
    name: 'Google Calendar',
    desc: 'Читает расписание, создаёт события, проверяет занятость и блокирует время',
    icon: Calendar,
  },
  {
    name: 'Google Drive',
    desc: 'Ищет файлы, читает документы, создаёт папки и управляет доступом',
    icon: HardDrive,
  },
  {
    name: 'Google Docs',
    desc: 'Создаёт и редактирует документы, вставляет таблицы, сохраняет отчёты',
    icon: FileText,
  },
  {
    name: 'Google Sheets',
    desc: 'Читает и записывает данные в таблицы, строит сводки, делает пакетные обновления',
    icon: Sheet,
  },
  {
    name: 'Search Console',
    desc: 'Анализирует поисковый трафик, позиции, CTR и ошибки индексации',
    icon: Search,
  },
  {
    name: 'Google Meet',
    desc: 'Получает информацию о встречах, список участников, записи и транскрипции',
    icon: Video,
  },
  {
    name: 'Telegram',
    desc: 'Отправляет и получает сообщения, управляет каналами, ботами и уведомлениями',
    icon: Send,
  },
  {
    name: 'GitHub',
    desc: 'Управляет репозиториями, issues и PR, мониторит CI/CD и алерты безопасности',
    icon: Github,
  },
  {
    name: 'GitLab',
    desc: 'Работает с issues, merge requests, pipeline-ами, wiki и milestones',
    icon: GitBranch,
  },
  {
    name: 'Supabase',
    desc: 'Выполняет SQL-запросы, управляет таблицами, деплоит Edge Functions',
    icon: Zap,
  },
  {
    name: 'Slack',
    desc: 'Отправляет сообщения, ищет по истории переписки, создаёт уведомления',
    icon: MessageSquare,
  },
  {
    name: 'Notion',
    desc: 'Создаёт страницы и базы данных, ищет по воркспейсу, обновляет записи',
    icon: BookOpen,
  },
  {
    name: 'И многое другое',
    desc: 'Тысячи интеграций через API и MCP-серверы',
    isMore: true,
  },
];

export default function IntegrationsSection() {
  return (
    <section className="border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Подключается ко всему,<br />
              <span className="italic">что вы уже используете</span>
            </h2>
            <p className="text-sm text-white/45 max-w-md leading-relaxed">
              Tehcon AI работает с вашими инструментами через MCP и API.{' '}
              Никакой ручной настройки — просто скажите агенту подключиться.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="relative bg-black p-6 transition-colors duration-200"
            >
              {item.isMore
                ? <div className="w-8 h-8 border border-white/[0.15] rounded flex items-center justify-center mb-4">
                    <Plus className="w-4 h-4 text-white/50" />
                  </div>
                : <div className="w-8 h-8 border border-white/[0.1] rounded flex items-center justify-center mb-4">
                    {item.icon && <item.icon className="w-4 h-4 text-white/60" />}
                  </div>
              }
              <h3 className="text-sm font-semibold text-white mb-1.5 leading-snug">{item.name}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}