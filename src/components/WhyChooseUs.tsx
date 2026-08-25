import React from 'react';
import { Sparkles, Shield, Award, Users, Compass, CheckCircle, Briefcase } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Get Expert Vedic Career Analysis',
      description:
        'Acharya Ganesh brings 17+ years of experience in studying professional patterns through Vedic astrology. Your 10th house, 6th house, 2nd house, 11th house, planetary strengths, Mahadasha, Antardasha and Dashamsha chart are examined for a detailed astrology career prediction.',
      stat: '17+ Years of Vedic Practice',
      icon: Award,
    },
    {
      title: 'Personalized Horoscope-Based Guidance',
      description:
        "There's no such thing as a standard career path. Your consultation will be done using your Lagna chart, Moon chart, Dasha cycles, planetary positions and D10 Dashamsha. A detailed career horoscope by date of birth can be used to pinpoint your career tendencies and times to concentrate on.",
      stat: '100% Personalized Kundli Analysis',
      icon: Users,
    },
    {
      title: 'Practical Direction Instead of Generic Answers',
      description:
        'The purpose of career astrology is not simply to say whether your career will be good or bad. The consultation focuses on questions you can actually act upon. You can discuss promotion timing, job changes, workplace difficulties, career breaks, professional studies and other concerns.',
      stat: 'Clear & Action-Oriented Guidance',
      icon: Shield,
    },
    {
      title: 'Experience Across Different Career Situations',
      description:
        'Professionals, executives, entrepreneurs, students, job seekers, government aspirants and business owners may face completely different challenges. A detailed job astrology assessment allows the horoscope to be evaluated according to your current professional situation.',
      stat: 'Multi-Industry Expertise',
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EDE0] border-b border-[#E3D4B6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAD8BF] border border-[#D9C4A6] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Why Choose Our Career Astrology Services?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            Why Choose Our Career Astrology Services?
          </h2>
          <p className="text-sm sm:text-base text-[#6B4B36] leading-relaxed">
            Personalized Vedic insights and practical roadmaps formulated from your birth chart by Acharya Ganesh.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-[#E3D4B8] shadow-xs hover:shadow-md hover:border-[#D49B35] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#9E431E] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-vedic text-lg font-bold text-[#3B190C] leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-[#6B4B36] mt-3 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0E4D0] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D49B35] shrink-0" />
                  <span className="text-[11px] font-bold text-[#9E431E] tracking-wide">
                    {reason.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
