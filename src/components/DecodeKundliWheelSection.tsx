import React, { useState, useEffect } from 'react';
import { Sparkles, Compass, Eye, ArrowRight, Pause, Play, Image as ImageIcon } from 'lucide-react';
import defaultKundliImage from '../assets/images/regenerated_image_1787718781539.webp';
import { ImageUploadModal } from './ImageUploadModal';

interface DecodeKundliWheelSectionProps {
  onOpenBooking: () => void;
  onOpenSampleReport: () => void;
}

interface DimensionItem {
  id: string;
  category: string;
  shortLabel: string;
  pillTag: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

const KUNDLI_DIMENSIONS: DimensionItem[] = [
  {
    id: 'vocation-power',
    category: 'VOCATION & POWER',
    shortLabel: '10th House Karma...',
    pillTag: 'Vocation & Power',
    title: '10th House Karma Matrix',
    description: 'Reveals your leadership ceiling, high-growth sectors (Tech, Govt, Corporate), and recognition cycles.',
    metric: '98.4%',
    metricLabel: 'CAREER PATH ACCURACY'
  },
  {
    id: 'divisional-strength',
    category: 'DIVISIONAL STRENGTH',
    shortLabel: 'D10 Dashamsha Care...',
    pillTag: 'Divisional Strength',
    title: 'D10 Dashamsha Career Blueprint',
    description: 'Calculates exact promotional periods, executive authority surges, and stability vs entrepreneurship balance.',
    metric: '16x',
    metricLabel: 'PRECISION RESOLUTION'
  },
  {
    id: 'planetary-transits',
    category: 'PLANETARY TRANSITS',
    shortLabel: 'Vimshottari Dasha...',
    pillTag: 'Planetary Transits',
    title: 'Vimshottari Dasha & Gochar Matrix',
    description: 'Pinpoints high-yield timing windows for job changes, salary appraisals, foreign relocations, and career pivots.',
    metric: '360°',
    metricLabel: 'TIMING FORECAST'
  },
  {
    id: 'energization-upaya',
    category: 'ENERGIZATION & UPAYA',
    shortLabel: 'Actionable Vedic...',
    pillTag: 'Energization & Upaya',
    title: 'Actionable Vedic Remedies & Yantras',
    description: 'Prescribes certified Jyotish gemstones, energizing Beej mantras, and workstation Vastu alignments.',
    metric: '100%',
    metricLabel: 'SATTVIK PROTOCOLS'
  }
];

const ZODIAC_SIGNS = [
  { name: 'ARIES', angle: 0 },
  { name: 'TAURUS', angle: 30 },
  { name: 'GEMINI', angle: 60 },
  { name: 'CANCER', angle: 90 },
  { name: 'LEO', angle: 120 },
  { name: 'VIRGO', angle: 150 },
  { name: 'LIBRA', angle: 180 },
  { name: 'SCORPIO', angle: 210 },
  { name: 'SAGITTARIUS', angle: 240 },
  { name: 'CAPRICORN', angle: 270 },
  { name: 'AQUARIUS', angle: 300 },
  { name: 'PISCES', angle: 330 },
];

export const DecodeKundliWheelSection: React.FC<DecodeKundliWheelSectionProps> = ({
  onOpenBooking,
  onOpenSampleReport,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isWheelPaused, setIsWheelPaused] = useState<boolean>(false);
  const [currentKundliImg, setCurrentKundliImg] = useState<string>(defaultKundliImage);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('custom_kundli_dossier_image');
    if (saved) {
      setCurrentKundliImg(saved);
    }
  }, []);

  const handleSaveImage = (newUrl: string) => {
    setCurrentKundliImg(newUrl);
    localStorage.setItem('custom_kundli_dossier_image', newUrl);
  };

  const handleResetDefault = () => {
    setCurrentKundliImg(defaultKundliImage);
    localStorage.removeItem('custom_kundli_dossier_image');
  };

  const selectedDimension = KUNDLI_DIMENSIONS[activeTab];

  return (
    <div className="relative mt-8 rounded-3xl overflow-hidden bg-dot-grid-dark border-2 border-[#572B15] shadow-2xl text-white">
      
      {/* Ambient background glow layers */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D49B35]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8C3E14]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Texts, Dimensions & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3D1D0E]/90 border border-[#7A3C1A] text-[#FDE08B] text-xs font-semibold tracking-wide shadow-xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
              <span>Deep Vedic Career Diagnostics & Kundli Reading</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-vedic font-bold text-[#FFF5EA] leading-[1.2] tracking-tight">
              Decode Your True Calling Through the Sacred Kundli Wheel
            </h2>

            {/* Sub-paragraph */}
            <p className="text-xs sm:text-sm text-[#D8C4B4] leading-relaxed max-w-2xl">
              Your birth chart is an astronomical compass. Gain definitive answers on career growth, promotion timelines, job transitions, and authentic Vedic remedies.
            </p>

            {/* Dimensions Explorer Heading */}
            <div className="pt-1">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#E5A93C]">
                <Compass className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>EXPLORE CORE DIMENSIONS ANALYZED IN YOUR CHART:</span>
              </div>

              {/* 4 Interactive Dimension Selectors Grid */}
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {KUNDLI_DIMENSIONS.map((dim, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={dim.id}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`text-left p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#472211] border-[#E5A93C] shadow-md ring-1 ring-[#E5A93C]/60 text-white'
                          : 'bg-[#2A1308]/80 hover:bg-[#381B0D] border-[#572B15] text-[#C4AB99] hover:text-white'
                      }`}
                    >
                      <div className={`text-[9px] font-bold tracking-wider uppercase truncate ${isActive ? 'text-[#FDE08B]' : 'text-[#A07A60]'}`}>
                        {dim.category}
                      </div>
                      <div className="text-xs font-bold truncate mt-0.5">
                        {dim.shortLabel}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Dimension Details Box */}
            <div className="bg-[#1C0B04]/90 rounded-2xl p-4 sm:p-5 border border-[#572B15] shadow-inner flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#3D1D0E] border border-[#6A3317] text-[#FDE08B] text-[10px] font-bold tracking-wide">
                    {selectedDimension.pillTag}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {selectedDimension.title}
                  </h4>
                </div>
                <p className="text-xs text-[#C9B3A2] leading-relaxed">
                  {selectedDimension.description}
                </p>
              </div>

              {/* Stat Metric */}
              <div className="shrink-0 sm:text-right border-t sm:border-t-0 sm:border-l border-[#401C0B] pt-2 sm:pt-0 sm:pl-5">
                <div className="text-xl sm:text-2xl font-serif-vedic font-bold text-[#FDE08B] tracking-tight">
                  {selectedDimension.metric}
                </div>
                <div className="text-[9px] font-bold tracking-widest text-[#9C755D] uppercase">
                  {selectedDimension.metricLabel}
                </div>
              </div>
            </div>

            {/* Bottom Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="bg-white hover:bg-[#FAF0DE] text-[#241108] px-5 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition shadow-lg flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-[#C97F18]" />
                <span>Get My Career Reading</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#241108]" />
              </button>

              <button
                type="button"
                onClick={onOpenSampleReport}
                className="bg-[#241108]/80 hover:bg-[#3D1D0E] border border-[#6E3516] text-[#EED8C6] hover:text-white px-4 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98 backdrop-blur-xs"
              >
                <Eye className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>Preview Report Chapters</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Rotating Sacred Zodiac Wheel + Floating Kundli Dossier Card (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            
            {/* Pause / Play Wheel Button at Top Right */}
            <button
              type="button"
              onClick={() => setIsWheelPaused(!isWheelPaused)}
              className="absolute top-0 right-0 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1C0B04]/85 border border-[#572B15] text-[#C4AB99] hover:text-white text-[11px] font-medium transition cursor-pointer backdrop-blur-xs hover:border-[#E5A93C]"
            >
              {isWheelPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#E5A93C] fill-current" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#E5A93C]" />
                  <span>Pause</span>
                </>
              )}
            </button>

            {/* Rotating Celestial Zodiac Kundli Wheel Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div 
                className={`w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#D49B35]/25 flex items-center justify-center animate-spin-zodiac ${
                  isWheelPaused ? 'animation-paused' : ''
                }`}
              >
                {/* Outer Ring & Markers */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D49B35]/20" />
                <div className="absolute inset-6 rounded-full border border-[#D49B35]/30" />
                <div className="absolute inset-14 rounded-full border border-[#D49B35]/15" />

                {/* 12 Zodiac Text Markings around Circle */}
                {ZODIAC_SIGNS.map((sign, idx) => {
                  const rad = (sign.angle * Math.PI) / 180;
                  // Radius for positioning labels
                  const r = 160; 
                  return (
                    <div
                      key={idx}
                      className="absolute text-[8px] sm:text-[9px] font-mono tracking-widest text-[#E5A93C]/60 font-bold uppercase select-none"
                      style={{
                        transform: `rotate(${sign.angle}deg) translate(${r}px) rotate(90deg)`,
                        transformOrigin: '0 0'
                      }}
                    >
                      {sign.name}
                    </div>
                  );
                })}

                {/* Radial dividing spokes */}
                {[0, 30, 60, 90, 120, 150].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#D49B35]/15 to-transparent"
                    style={{ transform: `rotate(${deg}deg)` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Kundli Dossier Book Card with Real Image */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[310px]">
              
              <figure 
                onClick={onOpenSampleReport}
                className="relative rounded-2xl overflow-hidden border-2 border-[#E5A93C] shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-[#FAF3E6] group cursor-pointer transition-all duration-300 hover:scale-103"
              >
                {/* Top Badge Strip over Image */}
                <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#241108]/85 backdrop-blur-xs text-[#FDE08B] border border-[#7A3C1A] px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide shadow-sm">
                    53+ Vedic Lineage
                  </span>
                  <span className="bg-[#241108]/85 backdrop-blur-xs text-[#FFF5EA] border border-[#7A3C1A] px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide shadow-sm">
                    Verified D10
                  </span>
                </div>

                {/* The Kundli Dossier Image */}
                <img
                  id="kundli-dossier-report-image"
                  src={currentKundliImg}
                  alt="Personalized Vedic Horoscope & Kundli Career Report Dossier"
                  className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 text-center">
                  <span className="inline-flex items-center justify-center gap-1.5 w-full bg-[#1C0B04]/90 text-[#FDE08B] py-1.5 px-3 rounded-xl text-[10px] font-bold tracking-wide shadow-md group-hover:bg-[#8C3E14] group-hover:text-white transition-colors border border-[#E5A93C]/30 backdrop-blur-xs">
                    <Eye className="w-3 h-3" />
                    <span>Click to Inspect 4 Chapters</span>
                  </span>
                </div>
              </figure>

            </div>

          </div>

        </div>
      </div>

      {/* Image Upload / Change Modal */}
      <ImageUploadModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        title="Change Kundli Dossier Report Image"
        currentImage={currentKundliImg}
        defaultImage={defaultKundliImage}
        onSaveImage={handleSaveImage}
        onResetDefault={handleResetDefault}
      />

    </div>
  );
};
