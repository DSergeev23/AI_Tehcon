import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/74951234567"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full border border-white/[0.2] bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-colors"
        title="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white/80" />
      </motion.a>

      {/* Telegram */}
      <motion.a
        href="https://t.me/dmtr_sergeev"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.65, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full border border-white/[0.2] bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-colors"
        title="Telegram"
      >
        <Send className="w-5 h-5 text-white/80" />
      </motion.a>
    </div>
  );
}