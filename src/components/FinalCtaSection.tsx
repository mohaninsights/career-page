import React from 'react';
import { Shield, Clock, Star, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#52210D] via-[#63240A] to-[#3B1405] text-[#FAF4EB] text-center relative overflow-hidden border-t-4 border-[#D49B35]">
      
      {/* Background celestial blur circles */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E5A93C]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#341508] border border-[#8C3E14] text-[#FDE08B] text-xs font-bold uppercase tracking-wider shadow-md">
          <Sparkles className="w-4 h-4 text-[#E5A93C] animate-pulse" />
          <span>Get Personalized Career Guidance</span>
        </div>

        {/* Big Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-vedic font-bold text-[#FFFDF9] tracking-tight leading-tight drop-shadow-md">
          Ready To Examine Your Career Situation In Greater Depth?
        </h2>

        {/* Subtitle / Description */}
        <p className="text-[#FCECDA] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
          If you are dealing with career confusion, delayed promotion, job instability, repeated rejection, workplace pressure or an important professional decision, a personalized consultation can give you complete clarity.
        </p>

        {/* 3 Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 pt-1 text-xs font-semibold text-[#FAF0DE]">
          <div className="flex items-center gap-2 bg-[#341508]/90 border border-[#8C3E14] px-4 py-2 rounded-full shadow-xs">
            <Shield className="w-4 h-4 text-[#25D366]" />
            <span>100% Confidential Reading</span>
          </div>

          <div className="flex items-center gap-2 bg-[#341508]/90 border border-[#8C3E14] px-4 py-2 rounded-full shadow-xs">
            <Clock className="w-4 h-4 text-[#E5A93C]" />
            <span>Instant Slot Confirmation</span>
          </div>

          <div className="flex items-center gap-2 bg-[#341508]/90 border border-[#8C3E14] px-4 py-2 rounded-full shadow-xs">
            <Star className="w-4 h-4 text-[#FDE08B] fill-current" />
            <span>5.0/5.0 Rated by 50,000+ Clients</span>
          </div>
        </div>

        {/* 2 Primary CTA Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#FFFDF9] hover:bg-[#FAF0DE] text-[#63240A] px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition shadow-2xl flex items-center justify-center gap-2 cursor-pointer group hover:scale-103"
          >
            <span>Book 1-on-1 Consultation with Acharya Ganesh</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20would%20like%20to%20book%20a%20Career%20Astrology%20Consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#0FA958] hover:bg-[#0D8F4A] text-white px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-2xl flex items-center justify-center gap-2 hover:scale-103"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>WhatsApp Consultation Now</span>
          </a>

        </div>

        {/* Small Footnote */}
        <p className="text-xs text-[#E8CCA6] pt-1 font-light">
          * Consultations are conducted 1-on-1 via private video or phone call. Strict privacy assured. No computerized generic printouts.
        </p>

      </div>
    </section>
  );
};

