import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/79192137111"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border border-primary/45 bg-primary/10 hover:bg-primary/15 flex items-center justify-center hover-lift fade-enter"
        title="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-primary" />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/ai_tehcon_business"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border border-primary/45 bg-primary/10 hover:bg-primary/15 flex items-center justify-center hover-lift fade-enter"
        title="Telegram"
      >
        <Send className="w-5 h-5 text-primary" />
      </a>
    </div>
  );
}
