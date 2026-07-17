import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PageNotFound from './lib/PageNotFound';

import PageLayout from './components/layout/PageLayout';
import YandexMetrika from './components/shared/YandexMetrika';
import GoogleAnalytics from './components/shared/GoogleAnalytics';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));

export const PublicApp = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/1c" element={<Catalog />} />
        <Route path="/catalog/image-analysis" element={<Catalog />} />
        <Route path="/catalog/content-factory" element={<Catalog />} />
        <Route path="/catalog/marketing" element={<Catalog />} />
        <Route path="/catalog/analytics" element={<Catalog />} />
        <Route path="/catalog/finance" element={<Catalog />} />
        <Route path="/catalog/ecommerce" element={<Navigate to="/catalog/marketplace" replace />} />
        <Route path="/catalog/marketplace" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Suspense fallback={null}><ProductDetail /></Suspense>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <YandexMetrika />
        <GoogleAnalytics />
        <PublicApp />
      </Router>
      <Toaster />
    </HelmetProvider>
  );
}

export default App;
