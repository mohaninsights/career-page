import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Compass, Calendar, TrendingUp, Home, Eye, ShieldAlert, 
  CheckCircle2, ArrowRight, FileText, Image as ImageIcon,
  ChevronLeft, ChevronRight, Globe, Briefcase, Play, Pause
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
  
  // Rolling carousel states
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // We show 4 cards per page on desktop, total 8 cards = 2 pages
  const itemsPerPage = 4;
  const totalPages = Math.ceil(SESSION_DELIVERABLES.length / itemsPerPage);

  useEffect(() => {
    const saved = localStorage.getItem('custom_meeting_image');
    if (saved) {
      setCurrentMeetingImg(saved);
    }
  }, []);

  // Auto-roll timer
  useEffect(() => {
    if (isAutoPlay && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, isHovered, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
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
    <section id="deliverables" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] border-b border-[#E8DCC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3E6D0] border border-[#DEBE93] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Session Deliverables & In-Depth Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            What You'll Receive in Your Career Astrology Session
          </h2>
          <p className="text-base text-[#6B4B36] leading-relaxed">
            A transparent, actionable consultation experience with complete clarity on your career roadmap, auspicious periods, and remedies.
          </p>
        </div>

        {/* Carousel Navigation Toolbar */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#8C3E14] bg-[#FAF0DE] border border-[#E3C9A0] px-3 py-1 rounded-full">
              Showing Deliverables {currentIndex * itemsPerPage + 1}–{Math.min((currentIndex + 1) * itemsPerPage, SESSION_DELIVERABLES.length)} of {SESSION_DELIVERABLES.length}
            </span>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition flex items-center gap-1 cursor-pointer ${
                isAutoPlay 
                  ? 'bg-[#8C3E14] text-white border-[#8C3E14]' 
                  : 'bg-white text-[#6B4B36] border-[#D9C4A6] hover:border-[#8C3E14]'
              }`}
              title={isAutoPlay ? 'Pause Auto-Roll' : 'Enable Auto-Roll (Rolls every 5s)'}
            >
              {isAutoPlay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span className="text-[11px]">{isAutoPlay ? 'Auto-Rolling' : 'Auto-Roll'}</span>
            </button>
          </div>

          {/* Roll Left / Right Controls & Page Dots */}
          <div className="flex items-center gap-3">
            {/* Page Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <button
                  key={pageIdx}
                  onClick={() => setCurrentIndex(pageIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === pageIdx
                      ? 'w-8 bg-[#8C3E14]'
                      : 'w-2.5 bg-[#D9C4A6] hover:bg-[#B39375]'
                  }`}
                  aria-label={`Go to slide ${pageIdx + 1}`}
                />
              ))}
            </div>

            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white border border-[#D9C4A6] text-[#3B190C] hover:bg-[#8C3E14] hover:text-white hover:border-[#8C3E14] transition shadow-xs flex items-center justify-center cursor-pointer"
              aria-label="Previous 4 deliverables"
              title="Roll Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white border border-[#D9C4A6] text-[#3B190C] hover:bg-[#8C3E14] hover:text-white hover:border-[#8C3E14] transition shadow-xs flex items-center justify-center cursor-pointer"
              aria-label="Next 4 deliverables"
              title="Roll Next (Shows another 4 deliverables)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Rolling Cards Carousel Container (Shows 4 cards, then rolls to show the other 4) */}
        <div 
          className="mt-4 overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const pageDeliverables = SESSION_DELIVERABLES.slice(
                pageIdx * itemsPerPage,
                (pageIdx + 1) * itemsPerPage
              );

              return (
                <div 
                  key={pageIdx} 
                  className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-1 py-2"
                >
                  {pageDeliverables.map((del) => (
                    <div 
                      key={del.id}
                      className="bg-white rounded-2xl p-5 border-2 border-[#E8DCC4] shadow-sm hover:border-[#D49B35] hover:shadow-md transition duration-300 flex flex-col justify-between h-full group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center group-hover:scale-105 transition-transform">
                            {getDeliverableIcon(del.iconName)}
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#9E431E] bg-[#FAF1DF] px-2 py-0.5 rounded border border-[#E3C69A] text-right truncate max-w-[130px]">
                            {del.tagline}
                          </span>
                        </div>

                        <h3 className="font-serif-vedic text-base font-bold text-[#3B190C] leading-snug">
                          {del.title}
                        </h3>
                        <p className="text-xs text-[#6B4B36] mt-2 leading-relaxed line-clamp-3">
                          {del.description}
                        </p>

                        <div className="mt-4 pt-3 border-t border-[#F0E4D0] space-y-1.5">
                          {del.points.map((pt, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-[#442718]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D49B35] shrink-0 mt-0.5" />
                              <span className="leading-tight">{pt}</span>
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

        {/* Rolling prompt banner under the cards */}
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={handleNext}
            className="text-xs text-[#8C3E14] hover:text-[#5C1E0A] font-bold inline-flex items-center gap-1.5 bg-[#FAF0DE] hover:bg-[#F3E3C8] px-4 py-1.5 rounded-full border border-[#E3C9A0] transition shadow-2xs cursor-pointer"
          >
            <span>{currentIndex === 0 ? "Roll to view next 4 deliverables →" : "← Roll back to first 4 deliverables"}</span>
          </button>
        </div>

        {/* Detailed Career Report Preview Box matching PDF */}
        <div className="mt-10 bg-gradient-to-r from-[#FAF0DE] via-[#FFFDF9] to-[#F5EAD9] rounded-2xl border-2 border-[#D49B35] p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E431E] text-white text-[10px] font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Documented Kundli Summary</span>
              </div>
              <h3 className="text-2xl font-serif-vedic font-bold text-[#3B190C]">
                Personalized Vedic Horoscope & Career Report Summary
              </h3>
              <p className="text-xs sm:text-sm text-[#6B4B36] leading-relaxed">
                Receive an authentic, easy-to-reference written summary of your D1 & D10 divisional charts, ongoing Vimshottari Dasha timeline, auspicious career transition windows, and customized remedial protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-[#422515]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>D10 Dashamsha & 10th House Breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Favorable Job Transition Windows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Certified Gemstone & Beej Mantra Plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Workstation & Office Vastu Guidelines</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#9E431E] hover:bg-[#803110] text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
                >
                  <span>Request Your Consultation Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenSampleReport}
                  className="bg-white border-2 border-[#D49B35] text-[#8C3411] hover:bg-[#FAF0DE] px-4 py-2.5 rounded-lg font-bold text-xs transition flex items-center gap-1.5 shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D49B35]" />
                  <span>View Sample Kundli Report</span>
                </button>
              </div>
            </div>

            {/* Right side report visual mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <figure className="relative w-full max-w-md rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                <img 
                  id="career-consultation-session-image"
                  src={currentMeetingImg} 
                  alt="Personalized Vedic Horoscope & Career Report Summary Consultation"
                  className="w-full h-64 sm:h-72 object-cover cursor-pointer block group-hover:scale-105 transition-transform duration-500"
                  onClick={onOpenSampleReport}
                  width={600}
                  height={400}
                />

                {/* Change Image Button */}
                <div className="absolute top-3 right-3 z-20 pointer-events-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsImageModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#241710]/85 hover:bg-[#8C3E14] text-white text-xs font-semibold border border-white/20 shadow-md backdrop-blur-xs transition cursor-pointer hover:scale-105"
                    title="Change or upload image"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-[#FDE08B]" />
                    <span>Change Image</span>
                  </button>
                </div>
              </figure>
            </div>

          </div>
        </div>

        {/* Action Banner Matching PDF */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#6A240A] via-[#8C3411] to-[#541B07] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#D49B35]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-serif-vedic font-bold text-[#FDEBD0]">
              Looking to Get a 360-Degree Perspective on Your Career?
            </h3>
            <p className="text-xs sm:text-sm text-[#F0D5C2]">
              Gain absolute clarity on job switches, promotions, and overseas career moves.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 bg-[#FFFDF9] hover:bg-[#FAF0DE] text-[#78280D] px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
          >
            <span>Book Consultation Now</span>
            <ArrowRight className="w-4 h-4" />
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
