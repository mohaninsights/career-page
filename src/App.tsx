/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { UnderstandingSection } from './components/UnderstandingSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CareerStages } from './components/CareerStages';
import { HowItWorks } from './components/HowItWorks';
import { SessionDeliverables } from './components/SessionDeliverables';
import { KundliChartSection } from './components/KundliChartSection';
import { VideoMasterclasses } from './components/VideoMasterclasses';
import { VedicKnowledgeGuide } from './components/VedicKnowledgeGuide';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
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
      {/* 1. Header & Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section with Booking Form & Metrics */}
        <HeroSection onFormSubmit={handleHeroFormSubmit} />

        {/* 3. Understanding Career Astrology by Date of Birth */}
        <UnderstandingSection onOpenBooking={handleOpenBooking} />

        {/* 4. Why Choose Our Career Astrology Services */}
        <WhyChooseUs />

        {/* 5. Career Stages Guidance (Early, Mid, Senior) */}
        <CareerStages onOpenBooking={handleOpenBooking} />

        {/* 6. How Your Consultation Works (3 Steps) */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 7. Session Deliverables & Written Kundli Dossier */}
        <SessionDeliverables 
          onOpenBooking={handleOpenBooking}
          onOpenSampleReport={() => setIsSampleReportOpen(true)}
        />

        {/* 8. Sacred Kundli Wheel & 12 House Explorer (Dark Theme) */}
        <KundliChartSection onOpenBooking={handleOpenBooking} />

        {/* 9. Video Masterclasses & YouTube Insights */}
        <VideoMasterclasses />

        {/* 10. Vedic Knowledge Guide (Houses Table & Planets) */}
        <VedicKnowledgeGuide onOpenBooking={handleOpenBooking} />

        {/* 11. Verified Client Testimonials */}
        <TestimonialsSection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Final CTA Banner (Page 2 Hero) */}
        <FinalCtaSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 14. Footer with 4-Column Layout */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 15. Modals & Quick Action Overlays */}
      <ConsultationModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
      />

      <SampleReportModal 
        isOpen={isSampleReportOpen} 
        onClose={() => setIsSampleReportOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* 16. Floating Action Buttons */}
      <FloatingActionBar onOpenBooking={handleOpenBooking} />
    </div>
  );
}
