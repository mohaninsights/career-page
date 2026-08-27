import React from 'react';
import { Compass, CheckCircle2, ArrowRight, Sparkles, GraduationCap, Briefcase, Trophy, Users, Award, Star, Tv } from 'lucide-react';

interface CareerStagesProps {
  onOpenBooking: () => void;
}

export const CareerStages: React.FC<CareerStagesProps> = ({ onOpenBooking }) => {
  const stages = [
    {
      stageNum: 'STAGE 01',
      stageCategory: 'Early Career & College',
      badge: 'STUDENTS & GRADUATES',
      isPopular: false,
      title: 'Career Path & Suitable Profession Analysis',
      subtitle: 'Identify Your Natural Karmic Blueprint & Core Strengths',
      description: 'Discover ideal academic streams, natural talents and whether government service (UPSC/PCS) or private corporate aligns with your planetary combinations.',
      icon: GraduationCap,
      keyQuestions: [
        'Ideal vocational sectors: Tech, Finance, Civil Services or Creative',
        'Government job feasibility vs. High-growth private corporate track',
        'Higher education choices: Specialized Master’s, MBA or Overseas Studies',
        'Auspicious timing for placements, first offers and competitive exam success'
      ],
      perfectFor: 'Students, Freshers, Graduates, UPSC Aspirants',
      ctaText: 'Explore & Book Consultation'
    },
    {
      stageNum: 'STAGE 02',
      stageCategory: 'Mid-Level & Acceleration',
      badge: 'MID-LEVEL PROFESSIONALS',
      isPopular: true,
      title: 'Job Switch, Appraisal & Workplace Politics',
      subtitle: 'Navigate Critical Career Crossroads & Compensation Hikes',
      description: 'Pinpoint exact Dasha transition windows to switch jobs, negotiate substantial salary hikes, overcome toxic managers and avoid career stagnation traps.',
      icon: Briefcase,
      keyQuestions: [
        'Precise timing (month & year) for job change & new offer letters',
        'Appraisal negotiation potential & equity/salary maximization',
        'Protection against sudden layoffs during malefic planetary transits',
        'Resolution strategies for toxic office politics and conflicts'
      ],
      perfectFor: 'Employees, Managers, Team Leads, Professionals',
      ctaText: 'Explore & Book Consultation'
    },
    {
      stageNum: 'STAGE 03',
      stageCategory: 'Executive & Business Growth',
      badge: 'SENIOR LEADERS & FOUNDERS',
      isPopular: false,
      title: 'Promotions, Salary Growth & Leadership Prospects',
      subtitle: 'Achieve C-Suite Elevation, Global Mobility & Business Success',
      description: 'Unlock C-suite elevation, international relocation or transition securely from corporate employment into high-potential entrepreneurship.',
      icon: Trophy,
      keyQuestions: [
        'Timing for VP, Director and Partner elevation via D10 Dashamsha',
        'Feasibility & auspicious timing to launch or expand business venture',
        'Global mobility: International transfer, settlement & overseas opportunities',
        'Maintaining work-life balance & sustained reputation'
      ],
      perfectFor: 'Executives, Business Owners, CEOs, Founders',
      ctaText: 'Explore & Book Consultation'
    }
  ];

  return (
    <section id="career-stages" className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] border-b border-[#E8DCC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3E6D0] border border-[#DEBE93] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Stages of Career Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            Stages of Career Guidance
          </h2>
          <p className="text-xs sm:text-sm text-[#6B4B36] leading-relaxed">
            Personalized astrology solutions to help you make the right career moves at the right time.
          </p>
        </div>

        {/* 3 Stage Cards */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div 
                key={idx}
                className={`relative bg-white rounded-2xl p-6 sm:p-7 border-2 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md ${
                  stage.isPopular 
                    ? 'border-[#D49B35] ring-2 ring-[#D49B35]/20' 
                    : 'border-[#E8DCC4] hover:border-[#D49B35]'
                }`}
              >
                {/* Most Popular Ribbon */}
                {stage.isPopular && (
                  <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#D49B35] to-[#B37B1F] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Stage Number & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black tracking-widest text-[#8C3E14] bg-[#FAF0DE] px-2 py-0.5 rounded border border-[#E3C9A0]">
                        {stage.stageNum}
                      </span>
                      <span className="text-[11px] font-bold text-[#6B4B36]">
                        {stage.stageCategory}
                      </span>
                    </div>
                  </div>

                  {/* Icon & Target Audience Badge */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#9E431E] shrink-0 group-hover:scale-105 transition">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9E431E] bg-[#FAF1DF] px-2.5 py-1 rounded-md border border-[#E3C69A]">
                      {stage.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif-vedic text-lg sm:text-xl font-bold text-[#3B190C] leading-snug">
                    {stage.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C3E14] mt-1 leading-snug">
                    {stage.subtitle}
                  </div>
                  <p className="text-xs text-[#6B4B36] mt-2 leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Key Questions Resolved */}
                  <div className="mt-4 pt-3 border-t border-[#F0E4D0] space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#8C3E14]">
                      KEY QUESTIONS RESOLVED:
                    </div>
                    {stage.keyQuestions.map((question, qIdx) => (
                      <div key={qIdx} className="flex items-start gap-2 text-xs text-[#442718]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D49B35] shrink-0 mt-0.5" />
                        <span className="leading-snug">{question}</span>
                      </div>
                    ))}
                  </div>

                  {/* Perfect For */}
                  <div className="mt-4 pt-2 text-[11px] text-[#6B4B36] bg-[#FAF6EE] p-2.5 rounded-lg border border-[#E8DCC4]">
                    <strong className="text-[#3B190C]">Perfect For:</strong> {stage.perfectFor}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-3 border-t border-[#F0E4D0]">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#FAF0DE] hover:bg-[#8C3E14] text-[#8C3411] hover:text-white border border-[#E3C9A0] hover:border-[#8C3E14] py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{stage.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Stats Bar matching requested copy */}
        <div className="mt-10 pt-6 border-t border-[#E0D0B6] grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
          <div className="bg-white p-3 rounded-xl border border-[#E8DCC4] shadow-2xs">
            <div className="text-lg sm:text-xl font-bold text-[#3B190C]">50,000+</div>
            <div className="text-[11px] text-[#6B4B36] font-medium mt-0.5">Happy Clients</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-[#E8DCC4] shadow-2xs">
            <div className="text-lg sm:text-xl font-bold text-[#3B190C]">98%</div>
            <div className="text-[11px] text-[#6B4B36] font-medium mt-0.5">Accuracy & Trust</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-[#E8DCC4] shadow-2xs">
            <div className="text-lg sm:text-xl font-bold text-[#3B190C]">5.0/5</div>
            <div className="text-[11px] text-[#6B4B36] font-medium mt-0.5">Google Rating</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-[#E8DCC4] shadow-2xs">
            <div className="text-lg sm:text-xl font-bold text-[#3B190C]">10K+</div>
            <div className="text-[11px] text-[#6B4B36] font-medium mt-0.5">TV Shows & Media</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-[#E8DCC4] shadow-2xs col-span-2 sm:col-span-1">
            <div className="text-lg sm:text-xl font-bold text-[#3B190C]">17+ Years</div>
            <div className="text-[11px] text-[#6B4B36] font-medium mt-0.5">Experience</div>
          </div>
        </div>

      </div>
    </section>
  );
};
