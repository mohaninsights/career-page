import React from 'react';
import { Tv, Users, Award, ShieldCheck, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import astrologerImage from '../assets/images/regenerated_image_1787658507486.webp';

interface ExpertBannerSectionProps {
  onOpenBooking?: () => void;
}

export const ExpertBannerSection: React.FC<ExpertBannerSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full bg-[#080512] text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-y-2 border-[#D49B35]/40 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#8C3E14]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D49B35]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Dark container with soft gold border */}
        <div className="bg-gradient-to-r from-[#120B24] via-[#160E2E] to-[#120B24] border border-[#D49B35]/30 rounded-3xl p-5 sm:p-7 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Portrait & Astrologer Details (5 cols on lg) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              
              {/* Circular Astrologer Photo with Verified Shield */}
              <div className="relative shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden relative shadow-[0_0_30px_rgba(212,155,53,0.3)]">
                  <img
                    src={astrologerImage}
                    alt="Acharya Ganesh (Hanish Bagga)"
                    width={750}
                    height={750}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>

                {/* Purple / Gold Verified Shield Badge on corner */}
                <div className="absolute -bottom-1 -right-1 w-9 h-9 bg-gradient-to-br from-[#6A2BDE] to-[#3B158A] rounded-lg rotate-6 flex items-center justify-center text-white border border-[#D49B35] shadow-lg">
                  <ShieldCheck className="w-5 h-5 text-[#FDE08B]" />
                </div>
              </div>

              {/* Astrologer Bio & Checklist */}
              <div className="flex flex-col justify-center text-center sm:text-left">
                <div className="text-xs sm:text-sm font-extrabold text-[#E5A93C] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                  <span>EXPERT</span>
                </div>

                <div className="mt-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-serif-vedic font-bold text-white tracking-tight leading-none">
                    Hanish Bagga
                  </h3>
                  <div className="text-sm sm:text-base text-[#FDE08B] font-serif-vedic font-bold mt-1">
                    ( Acharya Ganesh )
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#E2D4EE] font-semibold mt-1 tracking-wide">
                  Astro Vastu Expert
                </p>
              </div>

            </div>

            {/* Middle Column: 2x2 Metric Cards Grid (4 cols on lg) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              
              {/* Metric 1: 10K+ TV Shows & Media */}
              <div className="bg-[#1C1236]/90 hover:bg-[#251847] transition border border-[#D49B35]/20 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A174F] border border-[#F43F5E]/30 flex items-center justify-center text-[#F43F5E] shrink-0">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-tight leading-none">10K+</div>
                  <div className="text-[11px] text-[#C4B2D8] mt-1 leading-tight">TV Shows & Media</div>
                </div>
              </div>

              {/* Metric 2: 50,000+ Happy Clients */}
              <div className="bg-[#1C1236]/90 hover:bg-[#251847] transition border border-[#D49B35]/20 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A174F] border border-[#FBBF24]/30 flex items-center justify-center text-[#FBBF24] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-tight leading-none">50,000+</div>
                  <div className="text-[11px] text-[#C4B2D8] mt-1 leading-tight">Happy Clients</div>
                </div>
              </div>

              {/* Metric 3: 98% Accuracy & Trust */}
              <div className="bg-[#1C1236]/90 hover:bg-[#251847] transition border border-[#D49B35]/20 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A174F] border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-tight leading-none">98%</div>
                  <div className="text-[11px] text-[#C4B2D8] mt-1 leading-tight">Accuracy & Trust</div>
                </div>
              </div>

              {/* Metric 4: 5.0/5 Google Rating */}
              <div className="bg-[#1C1236]/90 hover:bg-[#251847] transition border border-[#D49B35]/20 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A174F] border border-[#4ADE80]/30 flex items-center justify-center text-[#4ADE80] shrink-0">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-tight leading-none">5.0/5</div>
                  <div className="text-[11px] text-[#C4B2D8] mt-1 leading-tight">Google Rating</div>
                </div>
              </div>

            </div>

            {/* Right Column: 17+ Years Box & 3 Trust Checkmarks (3 cols on lg) */}
            <div className="lg:col-span-3 space-y-3">
              
              {/* 17+ Years Experience Card */}
              <div className="bg-[#1C1236]/90 border border-[#D49B35]/20 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A174F] border border-[#D49B35]/30 flex items-center justify-center text-[#FDE08B] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-tight leading-none">17+</div>
                  <div className="text-[11px] text-[#C4B2D8] mt-1 leading-tight">Years Experience</div>
                </div>
              </div>

              {/* 3 Key Trust Bullet points matching screenshot */}
              <div className="space-y-2 pt-1 text-xs text-[#E5D7F2]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span>1-on-1 Private Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span>No Generic Software Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span><strong className="text-[#FDE08B] underline decoration-[#D49B35]/60 underline-offset-2">Practical Vedic</strong> Guidance</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
