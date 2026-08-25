import React from 'react';
import { Compass, CheckCircle2, ArrowRight, Sparkles, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { CAREER_STAGES } from '../data/careerAstrologyData';

interface CareerStagesProps {
  onOpenBooking: () => void;
}

export const CareerStages: React.FC<CareerStagesProps> = ({ onOpenBooking }) => {
  const getStageIcon = (id: string) => {
    switch (id) {
      case 'entry':
        return <GraduationCap className="w-5 h-5 text-[#9E431E]" />;
      case 'mid':
        return <Briefcase className="w-5 h-5 text-[#9E431E]" />;
      case 'senior':
        return <Trophy className="w-5 h-5 text-[#9E431E]" />;
      default:
        return <Compass className="w-5 h-5 text-[#9E431E]" />;
    }
  };

  return (
    <section id="career-stages" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] border-b border-[#E8DCC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3E6D0] border border-[#DEBE93] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Comprehensive Stage-Based Career Astrology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            Vedic Career Guidance for Every Stage of Your Professional Journey
          </h2>
          <p className="text-base text-[#6B4B36] leading-relaxed">
            From choosing a suitable profession to navigating job transitions, promotions, or foreign career moves, Vedic Astrology provides precision timing for every career milestone.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CAREER_STAGES.map((stage) => (
            <div 
              key={stage.id}
              className="bg-white rounded-2xl p-7 border-2 border-[#E8DCC4] shadow-sm hover:border-[#D49B35] hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Stage Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center group-hover:scale-105 transition">
                    {getStageIcon(stage.id)}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9E431E] bg-[#FAF1DF] px-2.5 py-1 rounded-full border border-[#E3C69A]">
                    {stage.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif-vedic text-xl font-bold text-[#3B190C] leading-snug">
                  {stage.title}
                </h3>
                <p className="text-xs text-[#6B4B36] mt-2.5 leading-relaxed">
                  {stage.subtitle}
                </p>

                {/* Feature Checklist */}
                <div className="mt-6 space-y-2.5 border-t border-[#F0E4D0] pt-4">
                  {stage.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#442718]">
                      <CheckCircle2 className="w-4 h-4 text-[#D49B35] shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-[#F0E4D0]">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#FAF0DE] hover:bg-[#9E431E] text-[#8C3411] hover:text-white border border-[#E3C9A0] hover:border-[#9E431E] py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                >
                  <span>{stage.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
