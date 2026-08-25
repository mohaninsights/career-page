import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/careerAstrologyData';

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'switch', label: 'Job Switch & Timing' },
    { id: 'govt_corp', label: 'Govt vs Corporate' },
    { id: 'executive', label: 'Executive & Business' },
  ];

  const filteredReviews = activeCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] border-b border-[#E8DCC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3E6D0] border border-[#DEBE93] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Verified Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            Trusted by Professionals Across Different Career Stages
          </h2>
          <p className="text-base text-[#6B4B36] leading-relaxed">
            Real experiences from working professionals, senior executives, entrepreneurs, and overseas job seekers who gained career clarity through Vedic guidance.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex justify-center items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${activeCategory === cat.id ? 'bg-[#9E431E] text-white shadow-xs' : 'bg-white text-[#5E3B27] border border-[#E3D4B8] hover:bg-[#FAF0DE]'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-6 border-2 border-[#E8DCC4] shadow-sm hover:border-[#D49B35] transition flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#D49B35]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Reading</span>
                  </div>
                </div>

                <Quote className="w-6 h-6 text-[#D49B35]/40 mb-2" />

                <p className="text-xs text-[#523422] italic leading-relaxed">
                  "{item.quote}"
                </p>

                {/* Outcome box */}
                <div className="mt-4 p-2.5 rounded-lg bg-[#FAF6EE] border border-[#E8DCC4] text-[11px] text-[#8C3411] font-medium">
                  <strong>Outcome:</strong> {item.detailedOutcome}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0E4D0] flex items-center justify-between">
                <div>
                  <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                    {item.author}
                  </h4>
                  <p className="text-[10px] text-[#7E5D47]">
                    {item.designation} • {item.location}
                  </p>
                </div>
                <span className="text-[10px] text-[#A88C74] font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
