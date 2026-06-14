import React from 'react';
import SEOHead from '../components/shared/SEOHead';
import { pageSEO } from '../lib/seoConfig';
import HeroSection from '../components/home/HeroSection';
import LogoBar from '../components/home/LogoBar';
import FeaturesGrid from '../components/home/FeaturesGrid';
import BentoShowcase from '../components/home/BentoShowcase';
import IntegrationsSection from '../components/home/IntegrationsSection';
import AutomationBlock from '../components/home/AutomationBlock';
import CasesSection from '../components/home/CasesSection';
import CTASection from '../components/home/CTASection';
import FloatingContacts from '../components/shared/FloatingContacts';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ai-tehcon.ru/#organization",
      "name": "AI TehCon",
      "url": "https://ai-tehcon.ru",
      "logo": "https://ai-tehcon.ru/logo.svg",
      "description": "Разработка ИИ агентов и автоматизация бизнес-процессов с помощью нейросетей",
      "sameAs": ["https://t.me/tehconai"],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": "Russian",
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://ai-tehcon.ru/#website",
      "url": "https://ai-tehcon.ru",
      "name": "AI TehCon",
      "publisher": { "@id": "https://ai-tehcon.ru/#organization" },
      "inLanguage": "ru-RU",
    },
    {
      "@type": "Service",
      "name": "Автоматизация бизнес-процессов с ИИ агентами",
      "provider": { "@id": "https://ai-tehcon.ru/#organization" },
      "serviceType": "AI автоматизация бизнеса",
      "description": "Разрабатываем автономных ИИ агентов, которые управляют процессами в 1С, CRM и мессенджерах без участия человека",
      "areaServed": "RU",
    }
  ]
};

export default function Home() {
  return (
    <>
      <SEOHead {...pageSEO.home} schemaJson={homeSchema} />
      <main>
        <HeroSection />
        <LogoBar />
        <FeaturesGrid />
        <BentoShowcase />
        <AutomationBlock />
        <CasesSection />
        <IntegrationsSection />
        <CTASection />
      </main>
      <FloatingContacts />
    </>
  );
}