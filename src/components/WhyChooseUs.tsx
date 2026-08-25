import React from 'react';
import { Sparkles, Shield, Award, Users, FileCheck, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Deep 10-Point Vedic Career Analysis',
      description: 'Comprehensive analysis of 10th House, D10 Dashamsha, Amatyakaraka, and planetary dignity to decode suitable industries and leadership positioning.',
      stat: '17+ Years of Vedic Excellence',
      icon: Award
    },
    {
      title: 'Personalized Horoscope-Based Guidance',
      description: 'Zero computerized generic printouts. Every reading is performed directly by Acharya Hanish Bagga with manual chart scrutiny and Dasha cross-verification.',
      stat: '50K+ Horoscope Consultations',
      icon: Users
    },
    {
      title: 'Practical & Downtime-Tested Kundli Remedies',
      description: 'Simple, non-destructive Vedic remedies including customized Beej mantras, certified gemstone advice, and office desk Vastu optimizations.',
      stat: 'Dasha-Tested Remedial Science',
      icon: Shield
    },
    {
      title: 'Experience Across Diverse Career Domains',
      description: 'Proven track record guiding IT tech leads, civil services aspirants (UPSC/PCS), doctors, corporate CXOs, and entrepreneurs across 45+ nations.',
      stat: '100+ Career Sectors Analyzed',
      icon: FileCheck
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5EDE0] border-b border-[#E3D4B6]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAD8BF] border border-[#D9C4A6] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Why Choose Our Career Astrology Services?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            Why Choose Our Career Astrology Services?
          </h2>
          <p className="text-base text-[#6B4B36] leading-relaxed">
            Professional Vedic guidance tailored to overcome professional uncertainty, unlock promotion opportunities, and foster long-term career growth.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-[#E3D4B8] shadow-sm hover:shadow-md hover:border-[#D49B35] transition-all flex flex-col justify-between"
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
                  <span className="text-[11px] font-bold text-[#9E431E] uppercase tracking-wide">
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
