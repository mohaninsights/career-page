import React from 'react';
import stage1EarlyCareerImg from '../assets/images/regenerated_image_1787812841577.webp';
import stage2MidLevelImg from '../assets/images/regenerated_image_1787812840659.webp';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  Calendar,
  User,
  GraduationCap,
  Briefcase,
  Trophy,
  Building2,
  Crown,
  Compass
} from 'lucide-react';

interface CareerStagesProps {
  onOpenBooking: () => void;
}

export const CareerStages: React.FC<CareerStagesProps> = ({ onOpenBooking }) => {
  return (
    <section id="career-stages" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#090A10] border-b border-[#1F2430] text-white relative overflow-hidden">
      
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0284c7]/10 via-[#c026d3]/10 to-[#eab308]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1D27] border border-[#2D3345] text-[#FDE08B] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Stages of Career Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-white tracking-tight">
            Stages of Career Guidance
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Personalized Vedic astrology solutions crafted to help you make the right career moves at the exact right planetary timing.
          </p>
        </div>

        {/* 3 Exact Dark Astrological Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          
          {/* ======================================================== */}
          {/* CARD 1: STAGE 01 - BLUE / CYAN THEME                     */}
          {/* ======================================================== */}
          <div className="relative rounded-3xl bg-[#060D1E] border-2 border-[#0284C7]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(2,132,199,0.15)] group hover:border-[#0284C7] transition-all">
            
            {/* Glowing top dot connector */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]" />

            <div>
              {/* Top Row: Stage Header + Cosmic Image Thumbnail */}
              <div className="flex items-start justify-between gap-4">
                
                <div className="space-y-2.5">
                  <div className="inline-block px-2.5 py-0.5 rounded-md border border-[#0284C7]/60 bg-[#0284C7]/15 text-[#38BDF8] text-[10px] font-bold tracking-widest uppercase">
                    STAGE 01
                  </div>
                  
                  <h3 className="font-serif-vedic text-2xl font-bold text-white leading-tight">
                    Early Career &amp;<br />College
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1E3B] border border-[#0284C7]/40 text-[#7DD3FC] text-[10px] font-bold tracking-wider uppercase">
                    <User className="w-3 h-3 text-[#38BDF8]" />
                    <span>STUDENTS &amp; GRADUATES</span>
                  </div>
                </div>

                {/* Right Image Thumbnail */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#0284C7]/50 shrink-0 bg-[#0A162D] relative shadow-md">
                  <img 
                    src={stage1EarlyCareerImg} 
                    alt="Early Career & College"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/80 via-transparent to-transparent" />
                </div>

              </div>

              {/* Title & Subtitle */}
              <div className="mt-6">
                <h4 className="font-serif-vedic text-lg font-bold text-white leading-snug">
                  Career Path &amp; Suitable Profession Analysis
                </h4>
                <div className="text-xs font-semibold text-[#38BDF8] mt-1 leading-snug">
                  Identify Your Natural Karmic Blueprint &amp; Core Strengths
                </div>
                <p className="text-xs text-[#94A3B8] mt-2.5 leading-relaxed">
                  Discover ideal academic streams, natural talents, and whether government service (UPSC/PCS) or private corporate aligns with your planetary combinations.
                </p>
              </div>

              {/* Key Questions Resolved */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#38BDF8] uppercase">
                  <HelpCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>KEY QUESTIONS RESOLVED:</span>
                </div>

                <div className="space-y-2 text-xs text-[#CBD5E1]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span className="leading-snug">Ideal vocational sectors: Tech, Finance, Civil Services, or Creative</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span className="leading-snug">Government job feasibility vs. High-growth private corporate track</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span className="leading-snug">Higher education choices: Specialized Master’s, MBA, or Overseas Studies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span className="leading-snug">Auspicious timing for placements, first offers, and competitive exam success</span>
                  </div>
                </div>
              </div>

              {/* Perfect For Section */}
              <div className="mt-6 pt-3 relative">
                {/* Dotted line with center text */}
                <div className="relative flex items-center justify-center">
                  <div className="w-full border-t border-dashed border-[#1E293B]" />
                  <span className="absolute bg-[#060D1E] px-3 text-[10px] font-bold tracking-widest uppercase text-[#38BDF8]">
                    PERFECT FOR
                  </span>
                </div>

                {/* Target Chips */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B172C] border border-[#1E293B] text-[11px] text-[#94A3B8]">
                    <User className="w-3 h-3 text-[#38BDF8]" />
                    <span>Students</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B172C] border border-[#1E293B] text-[11px] text-[#94A3B8]">
                    <GraduationCap className="w-3 h-3 text-[#38BDF8]" />
                    <span>Freshers</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B172C] border border-[#1E293B] text-[11px] text-[#94A3B8]">
                    <GraduationCap className="w-3 h-3 text-[#38BDF8]" />
                    <span>Graduates</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B172C] border border-[#1E293B] text-[11px] text-[#94A3B8]">
                    <Trophy className="w-3 h-3 text-[#38BDF8]" />
                    <span>UPSC As...</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-gradient-to-r from-[#0284C7] to-[#2563EB] hover:from-[#0369A1] hover:to-[#1D4ED8] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer hover:scale-102 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>EXPLORE &amp; BOOK CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* ======================================================== */}
          {/* CARD 2: STAGE 02 - PURPLE / MAGENTA (MOST POPULAR)       */}
          {/* ======================================================== */}
          <div className="relative rounded-3xl bg-[#12071F] border-2 border-[#C026D3] p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_35px_rgba(192,38,211,0.2)] group hover:border-[#D946EF] transition-all">
            
            {/* Top Floating Badge: MOST POPULAR */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C026D3] via-[#DB2777] to-[#E11D48] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 fill-current" />
              <span>MOST POPULAR</span>
            </div>

            <div>
              {/* Top Row: Stage Header + Cosmic Image Thumbnail */}
              <div className="flex items-start justify-between gap-4 pt-1">
                
                <div className="space-y-2.5">
                  <div className="inline-block px-2.5 py-0.5 rounded-md border border-[#C026D3]/60 bg-[#C026D3]/15 text-[#E879F9] text-[10px] font-bold tracking-widest uppercase">
                    STAGE 02
                  </div>
                  
                  <h3 className="font-serif-vedic text-2xl font-bold text-white leading-tight">
                    Mid-Level &amp;<br />Acceleration
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#240C3B] border border-[#C026D3]/40 text-[#F0ABFC] text-[10px] font-bold tracking-wider uppercase">
                    <User className="w-3 h-3 text-[#E879F9]" />
                    <span>MID-LEVEL PROFESSIONALS</span>
                  </div>
                </div>

                {/* Right Image Thumbnail */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#C026D3]/50 shrink-0 bg-[#240C3B] relative shadow-md">
                  <img 
                    src={stage2MidLevelImg} 
                    alt="Mid-Level & Acceleration"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12071F]/80 via-transparent to-transparent" />
                </div>

              </div>

              {/* Title & Subtitle */}
              <div className="mt-6">
                <h4 className="font-serif-vedic text-lg font-bold text-white leading-snug">
                  Job Switch, Appraisal &amp; Workplace Politics
                </h4>
                <div className="text-xs font-semibold text-[#E879F9] mt-1 leading-snug">
                  Navigate Critical Career Crossroads &amp; Compensation Hikes
                </div>
                <p className="text-xs text-[#94A3B8] mt-2.5 leading-relaxed">
                  Pinpoint exact Dasha transition windows to switch jobs, negotiate substantial salary hikes, overcome toxic managers, and avoid career stagnation traps.
                </p>
              </div>

              {/* Key Questions Resolved */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#E879F9] uppercase">
                  <HelpCircle className="w-3.5 h-3.5 text-[#E879F9]" />
                  <span>KEY QUESTIONS RESOLVED:</span>
                </div>

                <div className="space-y-2 text-xs text-[#CBD5E1]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E879F9] shrink-0 mt-0.5" />
                    <span className="leading-snug">Precise timing (month &amp; year) for job change &amp; new offer letters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E879F9] shrink-0 mt-0.5" />
                    <span className="leading-snug">Appraisal negotiation potential &amp; equity/salary maximization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E879F9] shrink-0 mt-0.5" />
                    <span className="leading-snug">Protection against sudden layoffs during malefic planetary transits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E879F9] shrink-0 mt-0.5" />
                    <span className="leading-snug">Resolution strategies for toxic office politics and conflicts</span>
                  </div>
                </div>
              </div>

              {/* Perfect For Section */}
              <div className="mt-6 pt-3 relative">
                {/* Dotted line with center text */}
                <div className="relative flex items-center justify-center">
                  <div className="w-full border-t border-dashed border-[#33184A]" />
                  <span className="absolute bg-[#12071F] px-3 text-[10px] font-bold tracking-widest uppercase text-[#E879F9]">
                    PERFECT FOR
                  </span>
                </div>

                {/* Target Chips */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#240C3B] border border-[#33184A] text-[11px] text-[#94A3B8]">
                    <User className="w-3 h-3 text-[#E879F9]" />
                    <span>Employ...</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#240C3B] border border-[#33184A] text-[11px] text-[#94A3B8]">
                    <Building2 className="w-3 h-3 text-[#E879F9]" />
                    <span>Managers</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#240C3B] border border-[#33184A] text-[11px] text-[#94A3B8]">
                    <User className="w-3 h-3 text-[#E879F9]" />
                    <span>Team Le...</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#240C3B] border border-[#33184A] text-[11px] text-[#94A3B8]">
                    <Trophy className="w-3 h-3 text-[#E879F9]" />
                    <span>Professi...</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-gradient-to-r from-[#C026D3] via-[#DB2777] to-[#E11D48] hover:opacity-90 text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 cursor-pointer hover:scale-102 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>EXPLORE &amp; BOOK CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* ======================================================== */}
          {/* CARD 3: STAGE 03 - GOLDEN / AMBER THEME                  */}
          {/* ======================================================== */}
          <div className="relative rounded-3xl bg-[#170E03] border-2 border-[#CA8A04]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(202,138,4,0.15)] group hover:border-[#EAB308] transition-all">
            
            {/* Glowing top dot connector */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FACC15] shadow-[0_0_10px_#FACC15]" />

            <div>
              {/* Top Row: Stage Header + Cosmic Image Thumbnail */}
              <div className="flex items-start justify-between gap-4">
                
                <div className="space-y-2.5">
                  <div className="inline-block px-2.5 py-0.5 rounded-md border border-[#CA8A04]/60 bg-[#CA8A04]/15 text-[#FACC15] text-[10px] font-bold tracking-widest uppercase">
                    STAGE 03
                  </div>
                  
                  <h3 className="font-serif-vedic text-2xl font-bold text-white leading-tight">
                    Executive &amp;<br />Business Growth
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#382405] border border-[#CA8A04]/40 text-[#FDE047] text-[10px] font-bold tracking-wider uppercase">
                    <User className="w-3 h-3 text-[#FACC15]" />
                    <span>SENIOR LEADERS &amp; FOUNDERS</span>
                  </div>
                </div>

                {/* Right Image Thumbnail */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#CA8A04]/50 shrink-0 bg-[#382405] relative shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" 
                    alt="Executive & Business Growth"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170E03]/80 via-transparent to-transparent" />
                </div>

              </div>

              {/* Title & Subtitle */}
              <div className="mt-6">
                <h4 className="font-serif-vedic text-lg font-bold text-white leading-snug">
                  Promotions, Salary Growth &amp; Leadership Prospects
                </h4>
                <div className="text-xs font-semibold text-[#FACC15] mt-1 leading-snug">
                  Achieve C-Suite Elevation, Global Mobility &amp; Business Success
                </div>
                <p className="text-xs text-[#94A3B8] mt-2.5 leading-relaxed">
                  Unlock C-suite elevation, international relocation, or transition securely from corporate employment into high-potential entrepreneurship.
                </p>
              </div>

              {/* Key Questions Resolved */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#FACC15] uppercase">
                  <HelpCircle className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>KEY QUESTIONS RESOLVED:</span>
                </div>

                <div className="space-y-2 text-xs text-[#CBD5E1]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                    <span className="leading-snug">Timing for VP, Director, and Partner elevation via D10 Dashamsha</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                    <span className="leading-snug">Feasibility &amp; auspicious timing to launch or expand business venture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                    <span className="leading-snug">Global mobility: International transfer, settlement &amp; overseas opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                    <span className="leading-snug">Maintaining work-life balance &amp; sustained reputation</span>
                  </div>
                </div>
              </div>

              {/* Perfect For Section */}
              <div className="mt-6 pt-3 relative">
                {/* Dotted line with center text */}
                <div className="relative flex items-center justify-center">
                  <div className="w-full border-t border-dashed border-[#3D290B]" />
                  <span className="absolute bg-[#170E03] px-3 text-[10px] font-bold tracking-widest uppercase text-[#FACC15]">
                    PERFECT FOR
                  </span>
                </div>

                {/* Target Chips */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2B1B06] border border-[#3D290B] text-[11px] text-[#94A3B8]">
                    <User className="w-3 h-3 text-[#FACC15]" />
                    <span>Executives</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2B1B06] border border-[#3D290B] text-[11px] text-[#94A3B8]">
                    <Building2 className="w-3 h-3 text-[#FACC15]" />
                    <span>Business...</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2B1B06] border border-[#3D290B] text-[11px] text-[#94A3B8]">
                    <Crown className="w-3 h-3 text-[#FACC15]" />
                    <span>CEOs</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2B1B06] border border-[#3D290B] text-[11px] text-[#94A3B8]">
                    <Briefcase className="w-3 h-3 text-[#FACC15]" />
                    <span>Founders</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-gradient-to-r from-[#EAB308] via-[#F59E0B] to-[#D97706] hover:opacity-90 text-[#170E03] py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer hover:scale-102 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>EXPLORE &amp; BOOK CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
