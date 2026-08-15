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
import SolutionsSection from '../components/home/SolutionsSection';
import FAQSection, { homeFaq } from '../components/home/FAQSection';
import FloatingContacts from '../components/shared/FloatingContacts';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ai-tehcon.ru/#organization",
      "name": "AI TehCon",
      "url": "https://ai-tehcon.ru",
      "logo": "https://ai-tehcon.ru/images/icon-512.png",
      "description": "Разработка ИИ агентов и автоматизация бизнес-процессов с помощью нейросетей",
      "sameAs": ["https://t.me/ai_tehcon_business"],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "telephone": "+7-919-213-71-11",
        "email": "hello@ai-tehcon.ru",
        "availableLanguage": "Russian",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2-й Вольный переулок, 11",
        "addressLocality": "Москва",
        "addressCountry": "RU"
      },
      "areaServed": "RU"
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
    },
    {
      "@type": "FAQPage",
      "mainEntity": homeFaq.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
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
        <SolutionsSection />
        <FeaturesGrid />
        <BentoShowcase />
        <AutomationBlock />
        <CasesSection />
        <IntegrationsSection />
        <FAQSection />
        <CTASection />
      </main>
      <FloatingContacts />
    </>
  );
}
