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
  "@type": "Organization",
  "name": "Tehcon AI",
  "url": "https://tehcon.ai",
  "description": "Разработка ИИ агентов и автоматизация бизнес-процессов",
  "sameAs": ["https://t.me/tehconai"],
  "serviceType": "AI автоматизация бизнеса"
};

export default function Home() {
  return (
    <>
      <SEOHead {...pageSEO.home} schemaJson={homeSchema} />
      <HeroSection />
      <LogoBar />
      <FeaturesGrid />
      <BentoShowcase />
      <IntegrationsSection />
      <CasesSection />
      <AutomationBlock />
      <CTASection />
      <FloatingContacts />
    </>
  );
}