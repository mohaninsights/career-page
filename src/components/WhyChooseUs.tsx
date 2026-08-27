import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, UserCheck, Shield, Briefcase } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'expert-analysis',
      icon: Award,
      title: 'Get Expert Vedic Career Analysis',
    },
    {
      id: 'personalized-guidance',
      icon: UserCheck,
      title: 'Personalized Horoscope-Based Guidance',
    },
    {
      id: 'practical-direction',
      icon: Shield,
      title: 'Practical Direction Instead of Generic Answers',
    },
    {
      id: 'cross-career-experience',
      icon: Briefcase,
      title: 'Experience Across Different Career Situations',
    },
  ];

  // Container variant for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  // Card entrance variant
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="why-choose-us" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F4ECE1] border-b border-[#E5D7C3] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EAD8BF]/80 border border-[#D9C4A6] text-[#783214] text-xs sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8C3E14]" />
            <span>Why Choose Our Career Astrology Services?</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif-vedic font-bold text-[#2A140B] tracking-tight leading-tight">
            Why Choose Our Career Astrology Services?
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#5C4033] leading-relaxed max-w-2xl mx-auto">
            Personalized Vedic insights and practical roadmaps formulated from your birth chart by Acharya Ganesh.
          </p>
        </motion.div>

        {/* 4 Floating Cards with One-by-One Staggered Entry */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 4.5 + index * 0.4,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#EBDCCB] shadow-md shadow-[#2A140B]/5 hover:shadow-xl hover:shadow-[#2A140B]/10 hover:border-[#D49B35]/50 transition-all flex flex-col justify-start min-h-[220px] group cursor-default"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#F6EDE2] border border-[#E8DACB] flex items-center justify-center text-[#783214] mb-6 group-hover:bg-[#FAF0DE] group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="font-serif-vedic font-bold text-[#2A140B] text-xl sm:text-xl leading-snug tracking-tight group-hover:text-[#8C3411] transition-colors">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
