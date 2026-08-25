import React from 'react';
import { Compass, Sparkles, Calendar, ShieldCheck, ArrowRight, MessageCircle, Star, Award, Check } from 'lucide-react';

interface UnderstandingSectionProps {
  onOpenBooking: () => void;
}

export const UnderstandingSection: React.FC<UnderstandingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="understanding" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] border-b border-[#E8DCC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3E6D0] border border-[#DEBE93] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Vedic Career Astrology Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            Understanding Career Astrology by Date of Birth
          </h2>
          <p className="text-base text-[#6B4B36] leading-relaxed">
            Career astrology uses your exact birth time, date, and place of birth to analyze your 10th House (Karma Bhava), planetary placements, Dashamsha (D10) chart, and ongoing Dasha periods to formulate a precise professional roadmap.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 4 Key Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-5 border border-[#E8DCC4] shadow-xs hover:border-[#D49B35] transition group">
                <div className="w-10 h-10 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#9E431E] mb-3 group-hover:scale-105 transition">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif-vedic text-lg font-bold text-[#3B190C]">
                  10th House (Karma Bhava) Analysis
                </h3>
                <p className="text-xs text-[#6B4B36] mt-2 leading-relaxed">
                  Decodes your primary professional DNA, status, and leadership capacity. Reveals if government, corporate, or entrepreneurship suits your destiny.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-5 border border-[#E8DCC4] shadow-xs hover:border-[#D49B35] transition group">
                <div className="w-10 h-10 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#9E431E] mb-3 group-hover:scale-105 transition">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif-vedic text-lg font-bold text-[#3B190C]">
                  Dashamsha (D10) Chart Analysis
                </h3>
                <p className="text-xs text-[#6B4B36] mt-2 leading-relaxed">
                  The microscopic divisional chart exclusively governing your profession, peak career elevation, fame, and executive authority.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-5 border border-[#E8DCC4] shadow-xs hover:border-[#D49B35] transition group">
                <div className="w-10 h-10 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#9E431E] mb-3 group-hover:scale-105 transition">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-serif-vedic text-lg font-bold text-[#3B190C]">
                  Dasha & Planetary Timing
                </h3>
                <p className="text-xs text-[#6B4B36] mt-2 leading-relaxed">
                  Vimshottari Dasha system pinpoints the exact auspicious months for job switch, appraisal, salary jump, or starting a business venture.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl p-5 border border-[#E8DCC4] shadow-xs hover:border-[#D49B35] transition group">
                <div className="w-10 h-10 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#9E431E] mb-3 group-hover:scale-105 transition">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif-vedic text-lg font-bold text-[#3B190C]">
                  Practical Vedic Remedies
                </h3>
                <p className="text-xs text-[#6B4B36] mt-2 leading-relaxed">
                  Tested Vedic Beej mantras, certified gemstone recommendations, Rudraksha, and simple Vastu tweaks to overcome office politics and delays.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#9E431E] hover:bg-[#803110] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-2"
              >
                <span>Book 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20have%20questions%20about%20Career%20Astrology."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#25D366] text-[#1E7E34] hover:bg-[#25D366]/10 px-5 py-2.5 rounded-lg font-bold text-xs transition flex items-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Astrologer Portrait Card matching PDF */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-[#FAF0DE] to-[#F2DFBC] p-6 sm:p-7 rounded-2xl border-2 border-[#D49B35] shadow-xl overflow-hidden">
              
              <div className="absolute top-0 right-0 bg-[#9E431E] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                17+ Yrs Experience
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Astrologer Image with Golden Frame */}
                <div className="relative mb-4">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#D49B35] shadow-xl bg-[#5C1E0A]">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=750&h=750&q=90" 
                      alt="Acharya Hanish Bagga - Vedic Astrologer"
                      width={750}
                      height={750}
                      className="w-full h-full object-cover object-top filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#3B190C] text-[#FDE08B] px-3 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap border border-[#D49B35] shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#D49B35] fill-current" />
                    <span>Acharya Hanish Bagga</span>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="font-cinzel text-sm font-bold text-[#8C3E14] tracking-wider uppercase">
                    ASTROLOGY CONSULTANCY
                  </div>
                  <h4 className="text-xl font-serif-vedic font-bold text-[#3B190C]">
                    Discover the Right Path, Timing & Growth
                  </h4>
                  <p className="text-xs text-[#6B4B36] leading-relaxed max-w-sm">
                    Founder of Acharya Ganesh. Mentor to 50,000+ executives, entrepreneurs, and students worldwide through authentic Parashari and Jaimini Jyotish.
                  </p>
                </div>

                {/* Badges */}
                <div className="mt-4 pt-4 border-t border-[#DEBE93] w-full grid grid-cols-2 gap-2 text-left text-xs text-[#4E2F1F]">
                  <div className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1.5 rounded border border-[#DEBE93]">
                    <Check className="w-3.5 h-3.5 text-[#9E431E]" />
                    <span className="font-medium text-[11px]">Certified Jyotish Acharya</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1.5 rounded border border-[#DEBE93]">
                    <Check className="w-3.5 h-3.5 text-[#9E431E]" />
                    <span className="font-medium text-[11px]">45+ Countries Served</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
