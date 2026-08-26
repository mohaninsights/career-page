import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Compass, Calendar, TrendingUp, Home, Eye, ShieldAlert, 
  ChevronLeft, ChevronRight, Globe, Briefcase
} from 'lucide-react';
import { SESSION_DELIVERABLES } from '../data/careerAstrologyData';
import { DecodeKundliWheelSection } from './DecodeKundliWheelSection';

interface SessionDeliverablesProps {
  onOpenBooking: () => void;
  onOpenSampleReport: () => void;
}

export const SessionDeliverables: React.FC<SessionDeliverablesProps> = ({ onOpenBooking, onOpenSampleReport }) => {
  
  // Responsive detection
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Slider states
  const [currentMobileIndex, setCurrentMobileIndex] = useState<number>(0);
  const [currentDesktopSlide, setCurrentDesktopSlide] = useState<number>(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Desktop configuration: 4 cards per page, total 8 cards = 2 slides
  const desktopItemsPerPage = 4;
  const totalDesktopSlides = Math.ceil(SESSION_DELIVERABLES.length / desktopItemsPerPage);
  const totalMobileCards = SESSION_DELIVERABLES.length;

  // Mobile 2-second auto-scroll
  useEffect(() => {
    if (!isMobile) return;
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % totalMobileCards);
    }, 2000);

    return () => clearInterval(interval);
  }, [isMobile, isUserInteracting, totalMobileCards]);

  const triggerUserInteractionPause = () => {
    setIsUserInteracting(true);
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    // Resume auto-scroll 3 seconds after touch/interaction ends
    userInteractionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 3000);
  };

  const handleNext = () => {
    triggerUserInteractionPause();
    if (isMobile) {
      setCurrentMobileIndex((prev) => (prev + 1) % totalMobileCards);
    } else {
      setCurrentDesktopSlide((prev) => (prev + 1) % totalDesktopSlides);
    }
  };

  const handlePrev = () => {
    triggerUserInteractionPause();
    if (isMobile) {
      setCurrentMobileIndex((prev) => (prev - 1 + totalMobileCards) % totalMobileCards);
    } else {
      setCurrentDesktopSlide((prev) => (prev - 1 + totalDesktopSlides) % totalDesktopSlides);
    }
  };

  // Touch and Drag swipe handling
  const minSwipeDistance = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    triggerUserInteractionPause();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    triggerUserInteractionPause();
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const distance = dragStartX - e.clientX;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const getDeliverableIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#9E431E]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#9E431E]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#9E431E]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#9E431E]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#9E431E]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#9E431E]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#9E431E]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#9E431E]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#9E431E]" />;
    }
  };

  return (
    <section id="deliverables" className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] border-b border-[#E8DCC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F3E6D0] border border-[#DEBE93] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Session Deliverables & In-Depth Insights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            What You'll Receive in Your Career Astrology Session
          </h2>
          <p className="text-sm text-[#6B4B36] leading-relaxed">
            A transparent, actionable consultation experience with complete clarity on your career roadmap, auspicious periods, and remedies.
          </p>
        </div>

        {/* Sliding Carousel Controls & Header Subtitle */}
        <div className="mt-4 flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#8C3E14] bg-[#FAF0DE] border border-[#E3C9A0] px-3 py-1 rounded-full shadow-2xs">
              {isMobile 
                ? `Deliverable ${currentMobileIndex + 1} of ${totalMobileCards} • 2s Auto-slide`
                : `8 Comprehensive Session Deliverables • Continuous Rolling Motion (Hover to Pause)`
              }
            </span>
          </div>

          {/* Round Circular Slide Navigation Buttons (Mobile View) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-white border border-[#D9C4A6] text-[#3B190C] hover:bg-[#8C3E14] hover:text-white hover:border-[#8C3E14] shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Previous Slide"
              title="Slide Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-white border border-[#D9C4A6] text-[#3B190C] hover:bg-[#8C3E14] hover:text-white hover:border-[#8C3E14] shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Next Slide"
              title="Slide Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sliding & Rolling Cards Container */}
        <div className="mt-2.5 overflow-hidden relative rounded-2xl">
          {/* MOBILE VIEW (Single card with 2-second auto-scroll and touch swipe) */}
          <div 
            className="block sm:hidden cursor-grab active:cursor-grabbing select-none"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => isDragging && setIsDragging(false)}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentMobileIndex * 100}%)` }}
            >
              {SESSION_DELIVERABLES.map((del) => (
                <div key={del.id} className="w-full shrink-0 p-1">
                  <div className="bg-white rounded-2xl p-5 border-2 border-[#E8DCC4] shadow-sm hover:border-[#D49B35] transition-all duration-300 flex flex-col justify-center min-h-[140px]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-full bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center shadow-2xs">
                        {getDeliverableIcon(del.iconName)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E431E] bg-[#FAF1DF] px-3 py-1 rounded-full border border-[#E3C69A] shadow-2xs">
                        {del.tagline}
                      </span>
                    </div>

                    <h3 className="font-serif-vedic text-base font-bold text-[#3B190C] leading-snug">
                      {del.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP & TABLET VIEW: Always in continuous rolling motion */}
          <div className="hidden sm:block overflow-hidden py-1">
            <div className="animate-continuous-roll flex items-center">
              {[...SESSION_DELIVERABLES, ...SESSION_DELIVERABLES].map((del, idx) => (
                <div 
                  key={`${del.id}-${idx}`}
                  className="w-[270px] lg:w-[290px] shrink-0 bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs hover:border-[#D49B35] hover:shadow-md transition-all duration-300 flex flex-col justify-center min-h-[130px] group mx-2.5"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#F6E6CE] transition-all shadow-2xs">
                      {getDeliverableIcon(del.iconName)}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#9E431E] bg-[#FAF1DF] px-2.5 py-0.5 rounded-full border border-[#E3C69A] truncate max-w-[130px] shadow-2xs">
                      {del.tagline}
                    </span>
                  </div>

                  <h3 className="font-serif-vedic text-sm sm:text-base font-bold text-[#3B190C] leading-snug">
                    {del.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Round Slide Indicator Dots for Mobile View */}
        <div className="mt-3 flex sm:hidden items-center justify-center gap-1.5">
          {Array.from({ length: totalMobileCards }).map((_, cardIdx) => (
            <button
              key={cardIdx}
              onClick={() => {
                triggerUserInteractionPause();
                setCurrentMobileIndex(cardIdx);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentMobileIndex === cardIdx
                  ? 'w-6 bg-[#8C3E14] shadow-xs'
                  : 'w-2 bg-[#D9C4A6] hover:bg-[#B39375]'
              }`}
              aria-label={`Slide to card ${cardIdx + 1}`}
            />
          ))}
        </div>

        {/* 4.5. Sacred Kundli Wheel & Career Report Summary Section matching the Screenshot */}
        <DecodeKundliWheelSection
          onOpenBooking={onOpenBooking}
          onOpenSampleReport={onOpenSampleReport}
        />

      </div>
    </section>
  );
};
