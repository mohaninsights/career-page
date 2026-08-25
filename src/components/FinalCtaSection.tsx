import React from 'react';
import { Shield, Clock, Star, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#642008] via-[#7B2C0F] to-[#481604] text-[#FAF4EB] text-center relative overflow-hidden bg-hero-texture border-t-4 border-[#D49B35]">
      
      {/* Background celestial blur circles */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E5A93C]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B1405]/80 border border-[#D49B35]/50 text-[#FDE08B] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#E5A93C]" />
          <span>Transform Career Uncertainty Into Confident Growth</span>
        </div>

        {/* Big Title */}
        <h2 className="text-3xl sm:text-5xl font-serif-vedic font-bold text-white tracking-tight leading-tight">
          Take the First Step Towards a Fulfilling Career
        </h2>

        {/* Subtitle / Description */}
        <p className="text-[#F2DDD0] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light">
          Whether you are anticipating a crucial job switch, navigating workplace politics, or debating entrepreneurship, Acharya Hanish Bagga’s 17+ years of Vedic expertise will give you absolute clarity and timing.
        </p>

        {/* 3 Trust Badges Matching PDF */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs font-semibold text-[#FDEBD0]">
          <div className="flex items-center gap-2 bg-[#421505]/70 border border-[#8C3814] px-3.5 py-1.5 rounded-full">
            <Shield className="w-4 h-4 text-[#25D366]" />
            <span>100% Confidential Reading</span>
          </div>

          <div className="flex items-center gap-2 bg-[#421505]/70 border border-[#8C3814] px-3.5 py-1.5 rounded-full">
            <Clock className="w-4 h-4 text-[#E5A93C]" />
            <span>Instant Slot Confirmation</span>
          </div>

          <div className="flex items-center gap-2 bg-[#421505]/70 border border-[#8C3814] px-3.5 py-1.5 rounded-full">
            <Star className="w-4 h-4 text-[#D49B35] fill-current" />
            <span>4.9/5 Rated by 50,000+ Clients</span>
          </div>
        </div>

        {/* 2 Primary CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#FFFDF9] hover:bg-[#FAF0DE] text-[#6E2810] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer group hover:scale-105"
          >
            <span>Book Your Consultation Slot</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20would%20like%20to%20book%20a%20Career%20Astrology%20Consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-bold text-sm transition shadow-2xl flex items-center justify-center gap-2.5 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Consultation Now</span>
          </a>

        </div>

        {/* Small Footnote */}
        <p className="text-[11px] text-[#D8B49E] pt-2">
          * Consultations are conducted 1-on-1 via private video or phone call. Strict privacy assured. No computerized generic printouts.
        </p>

      </div>
    </section>
  );
};
