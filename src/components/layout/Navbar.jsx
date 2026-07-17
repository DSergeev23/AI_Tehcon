import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Plus } from 'lucide-react';

const navLinks = [
  { label: 'Главная', path: '/' },
  { label: 'Каталог', path: '/catalog' },
  { label: 'О компании', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-black/90 backdrop-blur-md'
            : 'border-b border-white/[0.04] bg-black/60 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img
              src="/images/icon.png"
              alt="AI TehCon"
              className="w-8 h-8 rounded-sm"
            />
            <span className="text-sm font-semibold text-white tracking-tight">AI TehCon</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={[
                    'inline-flex items-center h-9 px-4 rounded-md text-sm transition-colors duration-150',
                    isActive
                      ? 'text-white bg-white/[0.07] border border-primary/45'
                      : 'text-white/75 hover:text-white hover:bg-white/[0.05] border border-transparent',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 h-11 px-6 text-base font-medium signal-button rounded-md transition-colors"
            >
              Связаться
              <Plus className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-black border-b border-white/[0.08]"
          >
            <div className="px-5 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="py-3 text-sm text-white/75 hover:text-white border-b border-white/[0.06] last:border-0 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contacts"
                className="mt-4 flex items-center justify-center gap-2 h-11 signal-button text-sm font-semibold rounded-md"
              >
                Связаться <Plus className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
