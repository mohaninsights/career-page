import React from 'react';
import { 
  Sparkles, Compass, Calendar, TrendingUp, Home, Eye, ShieldAlert, 
  Globe, Briefcase
} from 'lucide-react';
import { SESSION_DELIVERABLES } from '../data/careerAstrologyData';
import { DecodeKundliWheelSection } from './DecodeKundliWheelSection';

interface SessionDeliverablesProps {
  onOpenBooking: () => void;
  onOpenSampleReport: () => void;
}

export const SessionDeliverables: React.FC<SessionDeliverablesProps> = ({ onOpenBooking, onOpenSampleReport }) => {

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
        <div className="mt-4 flex items-center justify-center px-1">
          <span className="text-xs font-semibold text-[#8C3E14] bg-[#FAF0DE] border border-[#E3C9A0] px-3.5 py-1 rounded-full shadow-2xs text-center">
            8 Comprehensive Session Deliverables • Continuous Rolling Motion (Hover or Tap to Pause)
          </span>
        </div>

        {/* Continuous Rolling Cards Container for Mobile & Desktop */}
        <div className="mt-3.5 overflow-hidden relative rounded-2xl py-1">
          <div className="animate-continuous-roll flex items-center">
            {[...SESSION_DELIVERABLES, ...SESSION_DELIVERABLES, ...SESSION_DELIVERABLES].map((del, idx) => (
              <div 
                key={`${del.id}-${idx}`}
                className="w-[250px] sm:w-[270px] lg:w-[290px] shrink-0 bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#E8DCC4] shadow-xs hover:border-[#D49B35] hover:shadow-md transition-all duration-300 flex flex-col justify-center min-h-[130px] sm:min-h-[135px] group mx-2 sm:mx-2.5"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#F6E6CE] transition-all shadow-2xs">
                    {getDeliverableIcon(del.iconName)}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#9E431E] bg-[#FAF1DF] px-2.5 py-0.5 rounded-full border border-[#E3C69A] truncate max-w-[130px] shadow-2xs">
                    {del.tagline}
                  </span>
                </div>

                <h3 className="font-serif-vedic text-sm sm:text-base font-bold text-[#3B190C] leading-snug line-clamp-2">
                  {del.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* 4.5. Sacred Kundli Wheel & Career Report Summary Section */}
        <DecodeKundliWheelSection
          onOpenBooking={onOpenBooking}
          onOpenSampleReport={onOpenSampleReport}
        />

      </div>
    </section>
  );
};
