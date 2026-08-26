import React, { useState } from 'react';
import { Sparkles, Compass, Star, Shield, ArrowRight, Eye, RefreshCw, CheckCircle2 } from 'lucide-react';
import { VEDIC_HOUSES } from '../data/careerAstrologyData';

interface KundliChartSectionProps {
  onOpenBooking: () => void;
}

export const KundliChartSection: React.FC<KundliChartSectionProps> = ({ onOpenBooking }) => {
  const [selectedHouse, setSelectedHouse] = useState<number>(10);
  const [activeChartType, setActiveChartType] = useState<'D1' | 'D10'>('D10');

  const currentHouseInfo = VEDIC_HOUSES.find(h => h.houseNumber === selectedHouse) || VEDIC_HOUSES[5];

  // House layout positions in standard North Indian Kundli Diamond Chart
  // 1 = Top Diamond (Lagna)
  // 2 = Top-Left Triangle
  // 3 = Left-Top Triangle
  // 4 = Left Diamond (Sukha Bhava)
  // 5 = Left-Bottom Triangle
  // 6 = Bottom-Left Triangle (Shatru/Job)
  // 7 = Bottom Diamond (Jaya/Partnerships)
  // 8 = Bottom-Right Triangle
  // 9 = Right-Bottom Triangle (Bhagya)
  // 10 = Right Diamond / Top-Center (Karma) - In standard North Indian:
  // 1 is top center diamond, 4 is left center diamond, 7 is bottom center diamond, 10 is right center diamond.
  // 2 is top-left, 3 is left-top, 5 is left-bottom, 6 is bottom-left, 8 is bottom-right, 9 is right-bottom, 11 is right-top, 12 is top-right.

  const houseButtons = [
    { num: 10, label: '10th House (Karma Bhava - Zenith of Career)', badge: 'PRIMARY CAREER' },
    { num: 6, label: '6th House (Daily Job, Competition & Service)', badge: 'EMPLOYMENT & EXAMS' },
    { num: 11, label: '11th House (Labha Bhava - Highest Gains & Bonuses)', badge: 'PROFITS & NETWORK' },
    { num: 2, label: '2nd House (Dhana Bhava - Earned Wealth & Speech)', badge: 'SALARY & WEALTH' },
    { num: 1, label: '1st House (Lagna - Leadership Presence & Vigor)', badge: 'EXECUTIVE DRIVER' },
    { num: 9, label: '9th House (Bhagya Bhava - Luck & Foreign Postings)', badge: 'FORTUNE & MENTORS' },
    { num: 7, label: '7th House (Jaya Bhava - Business Partnerships)', badge: 'B2B & CONTRACTS' },
  ];

  return (
    <section id="kundli-wheel" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-dot-grid-dark text-[#FAF4EB] border-t-2 border-b-4 border-[#D49B35] relative overflow-hidden">
      {/* Golden glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D49B35]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3D1D0E] border border-[#A65526] text-[#FDE08B] text-xs font-bold tracking-wide shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C] animate-pulse" />
            <span>Deep Vedic Career Diagnostics & Kundli Reading</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-vedic font-extrabold text-[#FFF5EA] tracking-tight leading-[1.2] drop-shadow-md">
            Decode Your True Calling Through the Sacred Kundli Wheel
          </h2>
          <p className="text-sm sm:text-base text-[#FCECDA] leading-relaxed max-w-2xl mx-auto font-medium">
            Your birth chart is an astronomical compass. Click different houses below to reveal how your planetary positions influence promotions, career switches, and authority.
          </p>
        </div>

        {/* Interactive Kundli Explorer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: North Indian Kundli SVG Visualizer */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Chart Type Selector */}
            <div className="flex items-center gap-2 bg-[#260C03] p-1 rounded-lg border border-[#D49B35]/40 mb-4 text-xs font-bold">
              <button
                onClick={() => setActiveChartType('D10')}
                className={`px-4 py-1.5 rounded-md transition ${activeChartType === 'D10' ? 'bg-[#9E431E] text-white shadow-xs' : 'text-[#D4B294] hover:text-white'}`}
              >
                D10 Dashamsha (Career Status)
              </button>
              <button
                onClick={() => setActiveChartType('D1')}
                className={`px-4 py-1.5 rounded-md transition ${activeChartType === 'D1' ? 'bg-[#9E431E] text-white shadow-xs' : 'text-[#D4B294] hover:text-white'}`}
              >
                D1 Rashi Chart (Birth Base)
              </button>
            </div>

            {/* North Indian Diamond Chart Visualizer */}
            <div className="relative w-full max-w-md aspect-square bg-[#220B04] border-2 border-[#D49B35] rounded-xl p-3 shadow-2xl">
              <svg viewBox="0 0 400 400" className="w-full h-full text-[#D49B35]">
                {/* Outer Box */}
                <rect x="10" y="10" width="380" height="380" fill="#2E0E05" stroke="#D49B35" strokeWidth="2.5" />
                
                {/* Diagonal Lines */}
                <line x1="10" y1="10" x2="390" y2="390" stroke="#D49B35" strokeWidth="1.5" />
                <line x1="390" y1="10" x2="10" y2="390" stroke="#D49B35" strokeWidth="1.5" />

                {/* Inner Diamond connecting midpoints */}
                <polygon points="200,10 390,200 200,390 10,200" fill="none" stroke="#D49B35" strokeWidth="2" />

                {/* House Labels / Interactive Target Regions */}
                {/* House 1: Top Diamond */}
                <text x="200" y="110" fill={selectedHouse === 1 ? '#FDE08B' : '#E8D4BE'} fontSize="14" fontWeight="bold" textAnchor="middle">1 (Lagna)</text>
                <text x="200" y="130" fill="#D49B35" fontSize="10" textAnchor="middle">Self & Vigor</text>

                {/* House 2: Top Left */}
                <text x="105" y="70" fill={selectedHouse === 2 ? '#FDE08B' : '#E8D4BE'} fontSize="13" fontWeight="bold" textAnchor="middle">2</text>
                <text x="105" y="85" fill="#D49B35" fontSize="9" textAnchor="middle">Dhana</text>

                {/* House 3: Left Top */}
                <text x="65" y="110" fill={selectedHouse === 3 ? '#FDE08B' : '#E8D4BE'} fontSize="13" textAnchor="middle">3</text>

                {/* House 4: Left Diamond */}
                <text x="110" y="200" fill={selectedHouse === 4 ? '#FDE08B' : '#E8D4BE'} fontSize="14" textAnchor="middle">4 (Sukha)</text>

                {/* House 5: Left Bottom */}
                <text x="65" y="295" fill={selectedHouse === 5 ? '#FDE08B' : '#E8D4BE'} fontSize="13" textAnchor="middle">5</text>

                {/* House 6: Bottom Left (Crucial for Career/Job) */}
                <text x="105" y="335" fill={selectedHouse === 6 ? '#FDE08B' : '#E8D4BE'} fontSize="14" fontWeight="bold" textAnchor="middle">6 (Shatru)</text>
                <text x="105" y="350" fill="#D49B35" fontSize="9" textAnchor="middle">Job / Exams</text>

                {/* House 7: Bottom Diamond */}
                <text x="200" y="295" fill={selectedHouse === 7 ? '#FDE08B' : '#E8D4BE'} fontSize="14" fontWeight="bold" textAnchor="middle">7 (Jaya)</text>
                <text x="200" y="315" fill="#D49B35" fontSize="10" textAnchor="middle">Partnerships</text>

                {/* House 8: Bottom Right */}
                <text x="295" y="335" fill={selectedHouse === 8 ? '#FDE08B' : '#E8D4BE'} fontSize="13" textAnchor="middle">8</text>

                {/* House 9: Right Bottom (Bhagya/Luck) */}
                <text x="335" y="295" fill={selectedHouse === 9 ? '#FDE08B' : '#E8D4BE'} fontSize="13" fontWeight="bold" textAnchor="middle">9 (Bhagya)</text>
                <text x="335" y="310" fill="#D49B35" fontSize="9" textAnchor="middle">Fortune</text>

                {/* House 10: Right Diamond (Primary Career) */}
                <text x="290" y="200" fill={selectedHouse === 10 ? '#FDE08B' : '#E8D4BE'} fontSize="16" fontWeight="bold" textAnchor="middle">10 (Karma)</text>
                <text x="290" y="220" fill="#FDE08B" fontSize="11" fontWeight="bold" textAnchor="middle">★ Career Peak</text>

                {/* House 11: Right Top (Gains/Profits) */}
                <text x="335" y="110" fill={selectedHouse === 11 ? '#FDE08B' : '#E8D4BE'} fontSize="13" fontWeight="bold" textAnchor="middle">11 (Labha)</text>
                <text x="335" y="125" fill="#D49B35" fontSize="9" textAnchor="middle">Gains</text>

                {/* House 12: Top Right */}
                <text x="295" y="70" fill={selectedHouse === 12 ? '#FDE08B' : '#E8D4BE'} fontSize="13" textAnchor="middle">12 (Foreign)</text>

                {/* Center Karma Emblem */}
                <circle cx="200" cy="200" r="32" fill="#421406" stroke="#D49B35" strokeWidth="1.5" />
                <text x="200" y="205" fill="#FDE08B" fontSize="12" fontWeight="bold" textAnchor="middle">KUNDLI</text>
              </svg>

              <div className="text-center mt-2 text-[11px] text-[#D4B294]">
                Interactive Vedic {activeChartType} Diagram • Highlighting 12 Karmic Houses
              </div>
            </div>

          </div>

          {/* Right: Interactive Diagnostics Details */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="bg-[#240C04] border-2 border-[#D49B35] rounded-2xl p-6 sm:p-7 shadow-xl">
              
              {/* House selector pills */}
              <div className="flex flex-wrap gap-2 pb-4 border-b border-[#5E220D]">
                {houseButtons.map((btn) => (
                  <button
                    key={btn.num}
                    onClick={() => setSelectedHouse(btn.num)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${selectedHouse === btn.num ? 'bg-[#D49B35] text-[#2C1810] shadow-md scale-105' : 'bg-[#3A1407] text-[#E8D4BE] hover:bg-[#521C0A] border border-[#6E2E13]'}`}
                  >
                    <span>House {btn.num}</span>
                    <span className="text-[9px] opacity-80 uppercase">({btn.badge})</span>
                  </button>
                ))}
              </div>

              {/* Active Selected House Information */}
              <div className="mt-5 space-y-4">
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5A93C]">
                      House {currentHouseInfo.houseNumber} of 12
                    </span>
                    <h3 className="text-2xl font-serif-vedic font-bold text-[#FDEBD0]">
                      {currentHouseInfo.sanskritName}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#521C0A] border border-[#D49B35] flex items-center justify-center font-cinzel font-bold text-[#FDE08B]">
                    H{currentHouseInfo.houseNumber}
                  </div>
                </div>

                <p className="text-xs text-[#E8D0BD] leading-relaxed">
                  <strong className="text-[#FDE08B]">Core Signification:</strong> {currentHouseInfo.signification}
                </p>

                <div className="p-3.5 rounded-xl bg-[#3A1407] border border-[#6E2E13] space-y-2">
                  <div className="text-xs text-[#FAF4EB]">
                    <span className="font-bold text-[#D49B35]">Career Impact: </span>
                    {currentHouseInfo.careerRelevance}
                  </div>
                  <div className="text-xs text-[#FAF4EB] pt-1 border-t border-[#541C0A]">
                    <span className="font-bold text-[#D49B35]">Ruling Planets: </span>
                    {currentHouseInfo.governingPlanets.join(', ')}
                  </div>
                  <div className="text-xs text-[#FAF4EB] pt-1 border-t border-[#541C0A]">
                    <span className="font-bold text-[#D49B35]">Key Industries: </span>
                    {currentHouseInfo.keyIndustries}
                  </div>
                </div>

                {/* CTA inside inspector */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 bg-gradient-to-r from-[#D49B35] to-[#B88022] hover:from-[#E5A93C] hover:to-[#C98E2A] text-[#240C04] py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get My Kundli Reading</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
