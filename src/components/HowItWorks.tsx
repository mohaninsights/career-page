import React from 'react';
import { Sparkles, Calendar, FileText, Video, ArrowRight, ShieldCheck, Clock, CheckCircle2, Lock, Sparkle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONSULTATION_STEPS } from '../data/careerAstrologyData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#8C3E14]" />;
      case 1:
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#8C3E14]" />;
      case 2:
        return <Video className="w-5 h-5 sm:w-6 sm:h-6 text-[#8C3E14]" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#8C3E14]" />;
    }
  };

  const getStepHighlights = (index: number) => {
    switch (index) {
      case 0:
        return [
          'Choose 1-on-1 Video (Zoom/Meet), Phone, or Written Report',
          'Instant calendar confirmation across all global timezones',
          'Flexible rescheduling anytime up to 12 hours prior'
        ];
      case 1:
        return [
          'Submit Birth Date, Time & City of Birth securely',
          'Free Birth Time Rectification (BTR) for uncertain birth times',
          '100% confidential, encrypted astrological privacy'
        ];
      case 2:
        return [
          'Direct 1-on-1 consultation with Acharya Hanish Bagga',
          'In-depth D10 chart breakdown & Dasha timing diagnosis',
          'Personalized gemstone, mantra & workstation Vastu remedies'
        ];
      default:
        return [];
    }
  };

  return (
    <section id="how-it-works" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F5EDE0] border-b border-[#E3D4B6] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2.5"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAD8BF] border border-[#D9C4A6] text-[#8C3E14] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            How Your Career Astrology Consultation Works
          </h2>
          <p className="text-sm sm:text-base text-[#6B4B36] leading-relaxed max-w-2xl mx-auto">
            A structured, seamless, and completely confidential step-by-step pathway from booking to direct astrological clarity.
          </p>
        </motion.div>

        {/* Timeline with Line at Left & Animated Cards at Right */}
        <div className="mt-10 sm:mt-14 relative">
          
          {/* Vertical Connecting Line on the Left */}
          <div 
            className="absolute left-5 sm:left-8 top-6 bottom-10 w-1 bg-gradient-to-b from-[#D49B35] via-[#8C3E14] to-[#541B07] rounded-full opacity-40 sm:opacity-50" 
            aria-hidden="true"
          />

          {/* Stepper items */}
          <div className="space-y-8 sm:space-y-10">
            {CONSULTATION_STEPS.map((item, idx) => {
              const highlights = getStepHighlights(idx);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                  className="relative flex items-start gap-4 sm:gap-8 group"
                >
                  {/* Left Side Node Badge on the Line */}
                  <div className="relative z-10 shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FAF0DE] via-[#FFFDF9] to-[#F5E6CC] border-2 sm:border-3 border-[#D49B35] shadow-md flex flex-col items-center justify-center group-hover:scale-108 group-hover:border-[#8C3E14] group-hover:shadow-lg transition-all duration-300">
                      <span className="font-cinzel text-xs sm:text-base font-bold text-[#8C3E14]">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Right Side Process Card */}
                  <div className="flex-1 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-[#E3D4B8] shadow-xs hover:border-[#D49B35] hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3 pb-3 border-b border-[#F0E4D0]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center shrink-0 shadow-2xs">
                          {getStepIcon(idx)}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E431E]">
                            Phase {idx + 1}
                          </span>
                          <h3 className="font-serif-vedic text-lg sm:text-xl font-bold text-[#3B190C]">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-[#FAF1DF] border border-[#E3C69A] text-[11px] font-semibold text-[#8C3E14] shadow-2xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                        <span>{item.actionText}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#6B4B36] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Step Highlight Points */}
                    <div className="mt-4 pt-3.5 border-t border-[#F5EDE0] grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                      {highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-[#442718]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D49B35] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Banner Matching PDF */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 sm:mt-12 rounded-2xl bg-gradient-to-r from-[#6A240A] via-[#8C3411] to-[#541B07] text-white p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl border border-[#D49B35]"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-serif-vedic font-bold text-[#FDEBD0]">
              Ready to Discover Your Astrological Career Blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-[#F0D5C2]">
              Book your direct 1-on-1 session with Acharya Hanish Bagga today.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 bg-[#FFFDF9] hover:bg-[#FAF0DE] text-[#78280D] px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2 cursor-pointer hover:scale-102"
          >
            <span>Book Consultation Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
