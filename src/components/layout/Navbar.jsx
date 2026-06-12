import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Plus } from 'lucide-react';

const navLinks = [
{ label: 'Главная', path: '/' },
{ label: 'Каталог', path: '/catalog' },
{ label: 'О компании', path: '/about' }];


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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/[0.06] bg-black/80 backdrop-blur-md' : 'bg-transparent'}`
        }>
        
        <div className="w-full max-w-[1400px] 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto flex items-center justify-between px-6 md:px-12 2xl:px-16 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="https://media.base44.com/images/public/6a12ce8c6eb2615f598d6ab7/b985f6d81_icon.png"
              alt="AI Tehcon"
              className="w-8 h-8 rounded-sm"
            />
            <span className="text-sm font-semibold text-white tracking-tight">AI Tehcon</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`bracket-link !text-sm !px-4 !py-1.5 ${isActive ? 'active' : ''}`}>
                  
                  {link.label}
                </Link>);

            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contacts"
              className="flex items-center gap-1.5 text-sm px-5 py-2 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors">
              
              Связаться
              <Plus className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu btn */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/70 hover:text-white">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black border-t border-white/[0.06] pt-14">
          
            <div className="p-5 flex flex-col gap-1">
              {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className="py-4 text-sm text-white/70 hover:text-white border-b border-white/[0.06] transition-colors">
              
                  {link.label}
                </Link>
            )}
              <Link
              to="/contacts"
              className="mt-4 flex items-center justify-center gap-2 py-3 bg-white text-black text-sm font-semibold rounded-md">
              
                Связаться <Plus className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}