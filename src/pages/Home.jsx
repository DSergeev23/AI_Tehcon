import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BentoGrid from '../components/home/BentoGrid';
import TrustedSection from '../components/home/TrustedSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <BentoGrid />
      <CTASection />
    </>
  );
}