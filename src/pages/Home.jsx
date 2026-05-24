import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LogoBar from '../components/home/LogoBar';
import FeaturesGrid from '../components/home/FeaturesGrid';
import BentoShowcase from '../components/home/BentoShowcase';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <FeaturesGrid />
      <BentoShowcase />
      <CTASection />
    </>
  );
}