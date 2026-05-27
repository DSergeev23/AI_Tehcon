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
      "@id": "https://tehcon.ai/#organization",
      "name": "Tehcon AI",
      "url": "https://tehcon.ai",
      "logo": "https://tehcon.ai/logo.svg",
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
      "@id": "https://tehcon.ai/#website",
      "url": "https://tehcon.ai",
      "name": "Tehcon AI",
      "publisher": { "@id": "https://tehcon.ai/#organization" },
      "inLanguage": "ru-RU",
    },
    {
      "@type": "Service",
      "name": "Автоматизация бизнес-процессов с ИИ агентами",
      "provider": { "@id": "https://tehcon.ai/#organization" },
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