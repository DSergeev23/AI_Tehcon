import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { captureAttribution } from '../../lib/leadContext';

export default function PageLayout() {
  const { pathname, search } = useLocation();
  useEffect(() => { captureAttribution(window.location.href, document.referrer); }, [pathname, search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
