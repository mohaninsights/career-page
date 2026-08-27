import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, FileText, Video, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      stepNumber: '01',
      phase: 'PHASE 1',
      title: 'Book Your Consultation',
      icon: Calendar,
      badgeText: 'Flexible slots available 7 days a week',
      badgeIcon: CheckCircle2,
    },
    {
      stepNumber: '02',
      phase: 'PHASE 2',
      title: 'Share Your Career Birth Details',
      icon: FileText,
      badgeText: '100% confidential & encrypted data handling',
      badgeIcon: CheckCircle2,
    },
    {
      stepNumber: '03',
      phase: 'PHASE 3',
      title: 'Receive Personalized Career Guidance',
      icon: Video,
      badgeText: 'Includes remedy chart + post-session summary',
      badgeIcon: CheckCircle2,
    },
  ];

  // Container variant for staggered sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.15,
      },
    },
  };

  // Card & Node item variant
  const itemVariants = {
    hidden: { opacity: 0, y: 35, x: -10 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="how-it-works" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F4ECE1] border-b border-[#E5D7C3] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EAD8BF]/80 border border-[#D9C4A6] text-[#783214] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8C3E14]" />
            <span>SIMPLE 3-STEP PROCESS</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif-vedic font-bold text-[#2A140B] tracking-tight leading-snug max-w-2xl mx-auto text-balance">
            How Your Career Astrology Consultation Works
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed max-w-2xl mx-auto">
            A structured, seamless and completely confidential step-by-step pathway from booking to direct astrological clarity.
          </p>
        </motion.div>

        {/* Timeline with Vertical Line & 3 Sequential Cards */}
        <div className="mt-10 sm:mt-12 relative max-w-5xl mx-auto">
          
          {/* Animated Connecting Vertical Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            style={{ originY: 0 }}
            className="absolute left-6 sm:left-7 top-7 bottom-7 w-[2px] bg-[#C9B397] z-0"
          />

          {/* Step Cards List with Staggered Scroll Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 sm:space-y-7 relative z-10"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const BadgeIcon = step.badgeIcon;

              return (
                <motion.div
                  key={step.stepNumber}
                  variants={itemVariants}
                  className="flex items-center gap-4 sm:gap-6 lg:gap-8"
                >
                  {/* Circular Node with Step Number */}
                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F4ECE1] border-2 border-[#C9B397] flex items-center justify-center shrink-0 shadow-xs z-10"
                  >
                    <span className="font-serif-vedic font-bold text-[#2A140B] text-base sm:text-lg">
                      {step.stepNumber}
                    </span>
                  </motion.div>

                  {/* Main White Content Card */}
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    onClick={onOpenBooking}
                    className="flex-1 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-[#EADBCC] shadow-sm hover:shadow-md hover:border-[#D49B35]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
                  >
                    {/* Left: Icon & Title Content */}
                    <div className="flex items-center gap-3.5 sm:gap-5">
                      {/* Icon Box */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F8EFE4] border border-[#EBDDCF] flex items-center justify-center text-[#783214] shrink-0 group-hover:scale-105 group-hover:bg-[#FAF0DE] transition-transform duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                      </div>

                      {/* Phase & Title */}
                      <div className="space-y-0.5 sm:space-y-1">
                        <div className="text-[10px] sm:text-[11px] font-bold text-[#8C4A26] uppercase tracking-wider">
                          {step.phase}
                        </div>
                        <h3 className="font-serif-vedic font-bold text-[#2A140B] text-lg sm:text-xl lg:text-2xl leading-tight group-hover:text-[#8C3411] transition-colors">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Green Status Pill Badge */}
                    <div className="sm:shrink-0 self-start sm:self-center">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBF7F0] border border-[#A7E3C0] text-[#1E7E4D] text-xs sm:text-xs font-semibold shadow-2xs">
                        <BadgeIcon className="w-3.5 h-3.5 text-[#1E7E4D] shrink-0" />
                        <span className="leading-none">{step.badgeText}</span>
                      </div>
                    </div>

                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
