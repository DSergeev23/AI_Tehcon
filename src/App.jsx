import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PageNotFound from './lib/PageNotFound';

import PageLayout from './components/layout/PageLayout';
import YandexMetrika from './components/shared/YandexMetrika';
import GoogleAnalytics from './components/shared/GoogleAnalytics';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Catalog = React.lazy(() => import('./pages/Catalog'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const Partners = React.lazy(() => import('./pages/Partners'));
const News = React.lazy(() => import('./pages/News'));
const NewsDetail = React.lazy(() => import('./pages/NewsDetail'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = React.lazy(() => import('./pages/TermsOfUse'));
const LazyProductDetail = React.lazy(() => import('./pages/ProductDetail'));

function LazyRoute({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export const PublicApp = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<LazyRoute><Home /></LazyRoute>} />
        <Route path="/about" element={<LazyRoute><About /></LazyRoute>} />
        <Route path="/catalog" element={<LazyRoute><Catalog /></LazyRoute>} />
        <Route path="/catalog/1c" element={<LazyRoute><Catalog /></LazyRoute>} />
        <Route path="/catalog/image-analysis" element={<LazyRoute><Catalog /></LazyRoute>} />
        <Route path="/catalog/content-factory" element={<LazyRoute><Catalog /></LazyRoute>} />
        <Route path="/catalog/marketing" element={<LazyRoute><Catalog /></LazyRoute>} />
        <Route path="/catalog/analytics" element={<LazyRoute><Catalog /></LazyRoute>} />
        <Route path="/catalog/finance" element={<LazyRoute><Catalog /></LazyRoute>} />
        <Route path="/catalog/ecommerce" element={<Navigate to="/catalog/marketplace/" replace />} />
        <Route path="/catalog/marketplace" element={<LazyRoute><Catalog /></LazyRoute>} />
        <Route
          path="/catalog/:id"
          element={
            <LazyRoute>
              <LazyProductDetail />
            </LazyRoute>
          }
        />
        <Route path="/contacts" element={<LazyRoute><Contacts /></LazyRoute>} />
        <Route path="/partners" element={<LazyRoute><Partners /></LazyRoute>} />
        <Route path="/news" element={<LazyRoute><News /></LazyRoute>} />
        <Route path="/news/:slug" element={<LazyRoute><NewsDetail /></LazyRoute>} />
        <Route path="/privacy-policy" element={<LazyRoute><PrivacyPolicy /></LazyRoute>} />
        <Route path="/terms-of-use" element={<LazyRoute><TermsOfUse /></LazyRoute>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export function AppContent() {
  return (
    <>
      <YandexMetrika />
      <GoogleAnalytics />
      <PublicApp />
      <Toaster />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
