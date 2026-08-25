import React from 'react';
import { BookOpen, Sparkles, Compass, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { VEDIC_HOUSES, PLANET_SIGNIFICANCES } from '../data/careerAstrologyData';

interface VedicKnowledgeGuideProps {
  onOpenBooking: () => void;
}

export const VedicKnowledgeGuide: React.FC<VedicKnowledgeGuideProps> = ({ onOpenBooking }) => {
  return (
    <section id="vedic-guide" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5EDE0] border-b border-[#E3D4B6]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAD8BF] border border-[#D9C4A6] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Vedic Career Astrology Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            How Vedic Astrology Studies Your Professional Life
          </h2>
          <p className="text-base text-[#6B4B36] leading-relaxed">
            In the professional domain, an astrologer looks at the celestial houses related to career, work, power, status, business, and wealth creation to provide a rock-solid roadmap.
          </p>
        </div>

        {/* Section 1 & 2: Explanatory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-2xl p-7 border-2 border-[#E3D4B8] shadow-sm space-y-3">
            <h3 className="text-xl font-serif-vedic font-bold text-[#3B190C] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9E431E]"></span>
              <span>What Is Career Astrology?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B36] leading-relaxed">
              Career astrology is an ancient diagnostic branch of Vedic Jyotish that maps your karmic potential, innate aptitudes, and planetary timings (Dasha cycles) against various career streams (such as Corporate Management, Civil Services, Tech, Entrepreneurship, or Creative Arts). It answers not just <em>what</em> profession suits you, but <em>when</em> your career will reach its pinnacle.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border-2 border-[#E3D4B8] shadow-sm space-y-3">
            <h3 className="text-xl font-serif-vedic font-bold text-[#3B190C] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9E431E]"></span>
              <span>How Does Career Astrology by Date of Birth Work?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B36] leading-relaxed">
              By using your exact date, time, and geographic coordinates of birth, an astrologer constructs your Ascendant chart (Lagna), Moon chart (Chandra Kundli), and the specialized 10th Divisional chart (D10 Dashamsha). These charts reveal planetary strength (Shadbala), ongoing Dasha periods, and transit aspects that trigger job changes and salary hikes.
            </p>
          </div>

        </div>

        {/* Section 3: Structured Houses Table Matching PDF */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#D49B35] shadow-lg space-y-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#9E431E]">Vedic House Diagnostics</span>
            <h3 className="text-2xl font-serif-vedic font-bold text-[#3B190C] mt-1">
              Which Houses Are Important for Career Prediction Astrology?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B36] mt-1">
              Several houses are examined when studying professional life:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#6E2810] text-[#FDEBD0]">
                  <th className="p-3.5 rounded-tl-lg font-bold">House</th>
                  <th className="p-3.5 font-bold">Sanskrit Name</th>
                  <th className="p-3.5 font-bold">Signification in Career</th>
                  <th className="p-3.5 rounded-tr-lg font-bold">Key Focus / Industry Relevance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAD8BF] text-[#422515]">
                {VEDIC_HOUSES.map((house, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FAF6EE]' : 'bg-white'}>
                    <td className="p-3.5 font-bold text-[#8C3411] whitespace-nowrap">
                      {house.houseNumber}{house.houseNumber === 1 ? 'st' : house.houseNumber === 2 ? 'nd' : house.houseNumber === 3 ? 'rd' : 'th'} House
                    </td>
                    <td className="p-3.5 font-semibold">{house.sanskritName}</td>
                    <td className="p-3.5 leading-relaxed">{house.signification}</td>
                    <td className="p-3.5 text-[#6B4B36]">{house.keyIndustries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Planets in Career Grid Matching PDF */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif-vedic font-bold text-[#3B190C]">
              Which Planets Matter Most in Career Astrology?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B36] mt-1">
              Different planets represent different professional qualities and fields:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLANET_SIGNIFICANCES.map((planet, pIdx) => (
              <div 
                key={pIdx}
                className="bg-white rounded-xl p-5 border-2 border-[#E3D4B8] shadow-xs hover:border-[#D49B35] transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl text-[#9E431E] font-serif">{planet.symbol}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E431E] bg-[#FAF1DF] px-2 py-0.5 rounded border border-[#E3C69A]">
                      {planet.sanskritName}
                    </span>
                  </div>
                  <h4 className="font-serif-vedic text-lg font-bold text-[#3B190C]">
                    {planet.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#8C3E14] mt-1">
                    {planet.role}
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#F0E4D0] space-y-1">
                    <span className="text-[10px] font-bold uppercase text-[#A88C74]">Career Domains:</span>
                    <div className="text-xs text-[#523321] space-y-0.5">
                      {planet.careerDomains.map((dom, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#D49B35]"></span>
                          <span className="truncate">{dom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5 & 6: D10 Chart & When Can It Help */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-2xl p-7 border-2 border-[#E3D4B8] shadow-sm space-y-3">
            <h3 className="text-xl font-serif-vedic font-bold text-[#3B190C]">
              The Role of the Dashamsha (D10) Chart in Career Astrology
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B36] leading-relaxed">
              In Vedic astrology, divisional charts (Vargas) are studied to get granular insight into specific life domains. The <strong>Dashamsha (D10)</strong> chart is the exclusive microscopic blueprint of your career, social standing, fame, and leadership status. While the main Rashi (D1) chart shows potential, the D10 chart confirms the magnitude and timing of success.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border-2 border-[#E3D4B8] shadow-sm space-y-3">
            <h3 className="text-xl font-serif-vedic font-bold text-[#3B190C]">
              When Can Career Astrology Help?
            </h3>
            <div className="text-xs sm:text-sm text-[#4E2F1F] space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Navigating chronic promotion delays, missed salary appraisals, or toxic office politics.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Evaluating whether to switch jobs now or wait for a more auspicious sub-period.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Debating between continuing salaried corporate work vs starting a business startup.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Timing overseas job transfers, international assignments, or foreign work visas.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Callout Box Matching PDF */}
        <div className="rounded-2xl bg-gradient-to-r from-[#FAF0DE] via-[#FFFDF9] to-[#F5EAD9] border-2 border-[#D49B35] p-6 sm:p-8 text-center space-y-4 shadow-md">
          <h3 className="text-2xl font-serif-vedic font-bold text-[#3B190C]">
            Discover What Your Horoscope Reveals About Your Career
          </h3>
          <p className="text-xs sm:text-sm text-[#6B4B36] max-w-2xl mx-auto">
            Book a 1-on-1 personalized reading with Acharya Hanish Bagga and receive tailored advice for your unique birth chart.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#9E431E] hover:bg-[#803110] text-white px-7 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-md cursor-pointer"
          >
            <span>Book Your Career Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
