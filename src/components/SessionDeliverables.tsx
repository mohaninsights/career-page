import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Compass, Calendar, TrendingUp, Home, Eye, ShieldAlert, 
  CheckCircle2, ArrowRight, FileText, Image as ImageIcon,
  ChevronLeft, ChevronRight, Globe, Briefcase
} from 'lucide-react';
import { SESSION_DELIVERABLES } from '../data/careerAstrologyData';
import consultationMeetingImg from '../assets/images/regenerated_image_1787660300017.webp';
import { ImageUploadModal } from './ImageUploadModal';

interface SessionDeliverablesProps {
  onOpenBooking: () => void;
  onOpenSampleReport: () => void;
}

export const SessionDeliverables: React.FC<SessionDeliverablesProps> = ({ onOpenBooking, onOpenSampleReport }) => {
  const [currentMeetingImg, setCurrentMeetingImg] = useState<string>(consultationMeetingImg);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  
  // Slider states
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);

  // We show 4 cards per page on desktop, total 8 cards = 2 slides
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(SESSION_DELIVERABLES.length / itemsPerPage);

  useEffect(() => {
    const saved = localStorage.getItem('custom_meeting_image');
    if (saved) {
      setCurrentMeetingImg(saved);
    }
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch and Drag swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
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
      handleNextSlide();
    } else if (isRightSwipe) {
      handlePrevSlide();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const distance = dragStartX - e.clientX;
    if (distance > minSwipeDistance) {
      handleNextSlide();
    } else if (distance < -minSwipeDistance) {
      handlePrevSlide();
    }
  };

  const handleSaveImage = (newUrl: string) => {
    setCurrentMeetingImg(newUrl);
    localStorage.setItem('custom_meeting_image', newUrl);
  };

  const handleResetDefault = () => {
    setCurrentMeetingImg(consultationMeetingImg);
    localStorage.removeItem('custom_meeting_image');
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
              Slide {currentSlide + 1} of {totalSlides} • {currentSlide === 0 ? "Core Astrology Analysis" : "Strategic Career Guidance"}
            </span>
          </div>

          {/* Round Circular Slide Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevSlide}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#D9C4A6] text-[#3B190C] hover:bg-[#8C3E14] hover:text-white hover:border-[#8C3E14] shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Previous Slide"
              title="Slide Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNextSlide}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#D9C4A6] text-[#3B190C] hover:bg-[#8C3E14] hover:text-white hover:border-[#8C3E14] shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Next Slide"
              title="Slide Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sliding Cards Carousel Container with Round Feel and Swipe/Drag Support */}
        <div 
          className="mt-2.5 overflow-hidden relative rounded-2xl cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => isDragging && setIsDragging(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIdx) => {
              const slideDeliverables = SESSION_DELIVERABLES.slice(
                slideIdx * itemsPerPage,
                (slideIdx + 1) * itemsPerPage
              );

              return (
                <div 
                  key={slideIdx} 
                  className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 p-1"
                >
                  {slideDeliverables.map((del) => (
                    <div 
                      key={del.id}
                      className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs hover:border-[#D49B35] hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group"
                    >
                      <div>
                        {/* Round Icon & Pill Tag */}
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
                        <p className="text-xs text-[#6B4B36] mt-1.5 leading-relaxed line-clamp-3">
                          {del.description}
                        </p>

                        <div className="mt-3 pt-2.5 border-t border-[#F0E4D0] space-y-1.5">
                          {del.points.map((pt, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-[#442718]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D49B35] shrink-0 mt-0.5" />
                              <span className="leading-tight text-[11.5px]">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Round Slide Indicator Dots */}
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, slideIdx) => (
            <button
              key={slideIdx}
              onClick={() => setCurrentSlide(slideIdx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === slideIdx
                  ? 'w-7 bg-[#8C3E14] shadow-xs'
                  : 'w-2 bg-[#D9C4A6] hover:bg-[#B39375]'
              }`}
              aria-label={`Slide to page ${slideIdx + 1}`}
            />
          ))}
        </div>

        {/* Detailed Career Report Preview Box with Compact Decreased Image Size */}
        <div className="mt-5 bg-gradient-to-r from-[#FAF0DE] via-[#FFFDF9] to-[#F5EAD9] rounded-2xl border-2 border-[#D49B35] p-4 sm:p-6 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#9E431E] text-white text-[10px] font-bold uppercase tracking-wider">
                <FileText className="w-3 h-3" />
                <span>Documented Kundli Summary</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-vedic font-bold text-[#3B190C]">
                Personalized Vedic Horoscope & Career Report Summary
              </h3>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                Receive an authentic, easy-to-reference written summary of your D1 & D10 divisional charts, ongoing Vimshottari Dasha timeline, auspicious career transition windows, and customized remedial protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-[#422515]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span>D10 Dashamsha & 10th House Breakdown</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span>Favorable Job Transition Windows</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span>Certified Gemstone & Beej Mantra Plan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span>Workstation & Office Vastu Guidelines</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#9E431E] hover:bg-[#803110] text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request Your Consultation Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenSampleReport}
                  className="bg-white border-2 border-[#D49B35] text-[#8C3411] hover:bg-[#FAF0DE] px-3.5 py-2 rounded-lg font-bold text-xs transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D49B35]" />
                  <span>View Sample Kundli Report</span>
                </button>
              </div>
            </div>

            {/* Right side report visual mockup - Decreased Size */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <figure className="relative w-full max-w-[270px] sm:max-w-[290px] rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white group">
                <img 
                  id="career-consultation-session-image"
                  src={currentMeetingImg} 
                  alt="Personalized Vedic Horoscope & Career Report Summary Consultation"
                  className="w-full h-36 sm:h-44 object-cover cursor-pointer block group-hover:scale-105 transition-transform duration-500"
                  onClick={onOpenSampleReport}
                  width={400}
                  height={250}
                />

                {/* Change Image Button */}
                <div className="absolute top-2 right-2 z-20 pointer-events-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsImageModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#241710]/85 hover:bg-[#8C3E14] text-white text-[11px] font-semibold border border-white/20 shadow-xs backdrop-blur-xs transition cursor-pointer hover:scale-105"
                    title="Change or upload image"
                  >
                    <ImageIcon className="w-3 h-3 text-[#FDE08B]" />
                    <span>Change Image</span>
                  </button>
                </div>
              </figure>
            </div>

          </div>
        </div>

        {/* Action Banner Matching PDF */}
        <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#6A240A] via-[#8C3411] to-[#541B07] text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-[#D49B35]">
          <div className="space-y-0.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-serif-vedic font-bold text-[#FDEBD0]">
              Looking to Get a 360-Degree Perspective on Your Career?
            </h3>
            <p className="text-xs text-[#F0D5C2]">
              Gain absolute clarity on job switches, promotions, and overseas career moves.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 bg-[#FFFDF9] hover:bg-[#FAF0DE] text-[#78280D] px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book Consultation Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Image Upload Modal */}
      <ImageUploadModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        title="Change Consultation Session Image"
        currentImage={currentMeetingImg}
        defaultImage={consultationMeetingImg}
        onSaveImage={handleSaveImage}
        onResetDefault={handleResetDefault}
      />
    </section>
  );
};
