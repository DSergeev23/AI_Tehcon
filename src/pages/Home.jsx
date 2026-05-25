import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LogoBar from '../components/home/LogoBar';
import FeaturesGrid from '../components/home/FeaturesGrid';
import BentoShowcase from '../components/home/BentoShowcase';
import IntegrationsSection from '../components/home/IntegrationsSection';
import CTASection from '../components/home/CTASection';
import FloatingContacts from '../components/shared/FloatingContacts';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <FeaturesGrid />
      <BentoShowcase />
      <IntegrationsSection />
      <CTASection />
      <FloatingContacts />
    </>
  );
}