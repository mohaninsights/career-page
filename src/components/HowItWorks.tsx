import React from 'react';
import { Sparkles, Calendar, FileText, Video, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONSULTATION_STEPS } from '../data/careerAstrologyData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-6 h-6 text-[#9E431E]" />;
      case 1:
        return <FileText className="w-6 h-6 text-[#9E431E]" />;
      case 2:
        return <Video className="w-6 h-6 text-[#9E431E]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#9E431E]" />;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5EDE0] border-b border-[#E3D4B6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAD8BF] border border-[#D9C4A6] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            How Your Career Astrology Consultation Works
          </h2>
          <p className="text-base text-[#6B4B36] leading-relaxed">
            A simple, structured, and 100% confidential 3-step consultation process to unlock career clarity.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONSULTATION_STEPS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border-2 border-[#E3D4B8] shadow-sm hover:border-[#D49B35] transition relative flex flex-col justify-between"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center">
                  {getStepIcon(idx)}
                </div>
                <span className="font-cinzel text-3xl font-bold text-[#D49B35]/40">
                  {item.step}
                </span>
              </div>

              <div>
                <h3 className="font-serif-vedic text-xl font-bold text-[#3B190C]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B4B36] mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0E4D0] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="text-[11px] font-semibold text-[#8C3E14]">
                  {item.actionText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner Matching PDF */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#6A240A] via-[#8C3411] to-[#541B07] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#D49B35]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-serif-vedic font-bold text-[#FDEBD0]">
              Ready to Discover Your Astrological Career Blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-[#F0D5C2]">
              Book your direct 1-on-1 session with Acharya Hanish Bagga today.
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
    </section>
  );
};
