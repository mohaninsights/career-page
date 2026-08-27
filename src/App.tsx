/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExpertBannerSection } from './components/ExpertBannerSection';
import { UnderstandingSection } from './components/UnderstandingSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { YouTubeVideoSection } from './components/YouTubeVideoSection';
import { CareerStages } from './components/CareerStages';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HowItWorks } from './components/HowItWorks';
import { SessionDeliverables } from './components/SessionDeliverables';
import { VedicKnowledgeGuide } from './components/VedicKnowledgeGuide';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ConsultationModal } from './components/ConsultationModal';
import { SampleReportModal } from './components/SampleReportModal';
import { FloatingActionBar } from './components/FloatingActionBar';
import { ConsultationFormState } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isSampleReportOpen, setIsSampleReportOpen] = useState<boolean>(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleHeroFormSubmit = (data: ConsultationFormState) => {
    console.log('Hero form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#2C1810] flex flex-col selection:bg-[#9E431E]/20 selection:text-[#6E2E13]">
      {/* Header & Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main 12 Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero Section (AUTHENTIC VEDIC CAREER GUIDANCE & Form) */}
        <HeroSection onFormSubmit={handleHeroFormSubmit} />

        {/* Section 2: Vedic Career Guidance with Acharya Hanish Bagga */}
        <ExpertBannerSection onOpenBooking={handleOpenBooking} />

        {/* Section 3: Understanding Career Astrology by Date of Birth */}
        <UnderstandingSection onOpenBooking={handleOpenBooking} />

        {/* Section 4: Why Choose Our Career Astrology Services? */}
        <WhyChooseUs />

        {/* Section 5: Watch: 10th House & Career Astrology Masterclass */}
        <YouTubeVideoSection onOpenBooking={handleOpenBooking} />

        {/* Section 6: Stages of Career Guidance (Early, Mid, Executive + Stats Bar) */}
        <CareerStages onOpenBooking={handleOpenBooking} />

        {/* Section 7: Verified Client Success Stories */}
        <TestimonialsSection onOpenBooking={handleOpenBooking} />

        {/* Section 8: How Your Career Astrology Consultation Works (3 Steps Timeline) */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* Section 9: Session Deliverables & In-Depth Insights (8 Deliverables + Kundli Wheel & Dossier) */}
        <SessionDeliverables 
          onOpenBooking={handleOpenBooking}
          onOpenSampleReport={() => setIsSampleReportOpen(true)}
        />

        {/* Section 9: Vedic Career Astrology Guide & Knowledge Hub */}
        <VedicKnowledgeGuide onOpenBooking={handleOpenBooking} />

        {/* Section 10: Got Questions? (Frequently Asked Questions) */}
        <FaqSection />

        {/* Section 11: Get Personalized Career Guidance (Final CTA) */}
        <FinalCtaSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Modals & Quick Action Overlays */}
      <ConsultationModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
      />

      <SampleReportModal 
        isOpen={isSampleReportOpen} 
        onClose={() => setIsSampleReportOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating Action Buttons */}
      <FloatingActionBar onOpenBooking={handleOpenBooking} />
    </div>
  );
}
