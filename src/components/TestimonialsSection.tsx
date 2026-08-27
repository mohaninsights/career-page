import React, { useState } from 'react';
import { 
  Star, ShieldCheck, Quote, Sparkles, CheckCircle2, 
  Calendar, MapPin, Briefcase, ArrowRight, TrendingUp 
} from 'lucide-react';
import { TESTIMONIALS } from '../data/careerAstrologyData';

interface TestimonialsSectionProps {
  onOpenBooking?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All Reviews');

  const filterOptions = [
    'All Reviews',
    'Job Switch & Timing',
    'Promotion & Growth',
    'Business & Startups',
    'Abroad Relocation',
    'Govt & Public Sector'
  ];

  const filteredTestimonials = activeFilter === 'All Reviews'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter === 'All Reviews');

  return (
    <section id="testimonials" className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-dot-grid-dark text-white overflow-hidden border-t-2 border-b-2 border-[#572B15]">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D49B35]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#8C3E14]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3D1D0E]/90 border border-[#7A3C1A] text-[#FDE08B] text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C] animate-pulse" />
            <span>Verified Client Success Stories</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-vedic font-bold text-[#FFF5EA] tracking-tight leading-[1.2]">
            Trusted by Professionals Across Different Career Stages
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#D8C4B4] max-w-2xl mx-auto leading-relaxed">
            Real experiences from working professionals, senior executives, entrepreneurs, overseas job seekers and government-sector aspirants who sought guidance through career astrology.
          </p>

          {/* Google Reviews & Rating Pill */}
          <div className="pt-1 flex items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F0D05]/95 border border-[#6B3415] shadow-inner text-xs">
              <div className="flex items-center gap-0.5 text-[#FDE08B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current text-[#FDE08B]" />
                ))}
              </div>
              <span className="font-bold text-[#FFF5EA]">5.0/5.0 Rating</span>
              <span className="text-[#8C6B55]">•</span>
              <span className="text-[#E5CCA8] font-medium">5,000+ Verified Google Reviews</span>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl mx-auto px-2">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#E5A93C] text-[#241108] shadow-md font-extrabold scale-102'
                    : 'bg-[#291207]/90 hover:bg-[#3D1D0E] text-[#D8C4B4] border border-[#572B15]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* EXACT 3 TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {(filteredTestimonials.length > 0 ? filteredTestimonials : TESTIMONIALS).map((item) => (
            <div
              key={item.id}
              className="relative bg-gradient-to-b from-[#2B1308] via-[#220D04] to-[#180903] rounded-3xl p-6 sm:p-7 border-2 border-[#572B15] hover:border-[#D49B35]/70 transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(212,155,53,0.15)] flex flex-col justify-between group"
            >
              {/* Card Top: Date & Rating */}
              <div>
                <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-[#4D2411]">
                  <div className="flex items-center gap-1.5 text-xs text-[#E5CCA8] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>{item.date}</span>
                  </div>

                  <div className="flex items-center gap-0.5 text-[#FDE08B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Card Quote */}
                <div className="mt-4 relative">
                  <Quote className="w-7 h-7 text-[#D49B35]/20 absolute -top-2.5 -left-1 pointer-events-none" />
                  <p className="font-serif-vedic text-xs sm:text-[13px] text-[#FFF5EA] italic leading-relaxed pl-3 relative z-10">
                    "{item.quote}"
                  </p>
                </div>

                {/* Outcome Achieved Box */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#140601]/90 border border-[#4D2411] space-y-1 group-hover:border-[#7A3C1A] transition-colors">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#FDE08B] uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80]" />
                    <span>Outcome Achieved:</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#D8C4B4] leading-relaxed">
                    {item.detailedOutcome}
                  </p>
                </div>
              </div>

              {/* Card Footer: Author Profile with Initials Avatar */}
              <div className="mt-6 pt-4 border-t border-[#4D2411] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Initials Badge */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8C3E14] to-[#E5A93C] flex items-center justify-center font-serif-vedic font-black text-white text-xs tracking-wider shadow-md border-2 border-white/20 shrink-0">
                    {item.initials || item.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif-vedic text-sm font-bold text-[#FFF5EA] truncate">
                      {item.author}
                    </h4>
                    <p className="text-[11px] text-[#C4AB99] truncate">
                      {item.designation}
                    </p>
                    <p className="text-[10px] text-[#E5A93C] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM CTA CALLOUT */}
        {onOpenBooking && (
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#8C3E14] hover:bg-[#A34A1B] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition shadow-lg hover:scale-102 active:scale-98 border border-[#E5A93C]/40 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#FDE08B]" />
              <span>Book Your Vedic Career Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
