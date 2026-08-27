import React, { useState } from 'react';
import { Sparkles, Pause, Play, ArrowRight } from 'lucide-react';
import kundliReportImg from '../assets/images/regenerated_image_1787812672428.webp';
import acharyaGaneshEmblemImg from '../assets/images/regenerated_image_1787812285047.jpg';

interface DecodeKundliWheelSectionProps {
  onOpenBooking: () => void;
  onOpenSampleReport?: () => void;
}

interface AspectNode {
  id: string;
  title: string;
  subtitle: string;
  isPrimary?: boolean;
  angle: number; // in degrees: 0 is right, 90 is bottom, -90 is top, 180 is left
  tag: string;
}

const ASPECT_NODES: AspectNode[] = [
  {
    id: '10th-house',
    title: '10th House',
    subtitle: 'Career & Reputation',
    isPrimary: true,
    angle: -90, // Top
    tag: 'Karma Bhava',
  },
  {
    id: 'promotion',
    title: 'Promotion',
    subtitle: '& Growth',
    angle: -38, // Top-Right
    tag: 'Elevation',
  },
  {
    id: 'jupiter',
    title: 'Jupiter',
    subtitle: 'Wisdom & Success',
    angle: 0, // Right
    tag: 'Guru Drishti',
  },
  {
    id: 'business',
    title: 'Business',
    subtitle: 'Potential',
    angle: 42, // Bottom-Right
    tag: '7th / 11th House',
  },
  {
    id: 'salary',
    title: 'Salary',
    subtitle: '& Prosperity',
    angle: 90, // Bottom
    tag: 'Dhana Bhava',
  },
  {
    id: 'government',
    title: 'Government',
    subtitle: 'Job',
    angle: 138, // Bottom-Left
    tag: 'Surya / Mars',
  },
  {
    id: 'saturn',
    title: 'Saturn',
    subtitle: 'Discipline & Hard Work',
    angle: 180, // Left
    tag: 'Shani Dev',
  },
  {
    id: 'd10-chart',
    title: 'D10 Chart',
    subtitle: 'Career Strength',
    angle: -142, // Top-Left
    tag: 'Dashamsha',
  },
];

const ZODIAC_SYMBOLS = [
  { symbol: '♈', name: 'Aries', angle: 0 },
  { symbol: '♉', name: 'Taurus', angle: 30 },
  { symbol: '♊', name: 'Gemini', angle: 60 },
  { symbol: '♋', name: 'Cancer', angle: 90 },
  { symbol: '♌', name: 'Leo', angle: 120 },
  { symbol: '♍', name: 'Virgo', angle: 150 },
  { symbol: '♎', name: 'Libra', angle: 180 },
  { symbol: '♏', name: 'Scorpio', angle: 210 },
  { symbol: '♐', name: 'Sagittarius', angle: 240 },
  { symbol: '♑', name: 'Capricorn', angle: 270 },
  { symbol: '♒', name: 'Aquarius', angle: 300 },
  { symbol: '♓', name: 'Pisces', angle: 330 },
];

export const DecodeKundliWheelSection: React.FC<DecodeKundliWheelSectionProps> = ({
  onOpenBooking,
}) => {
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [activeNode, setActiveNode] = useState<string>('10th-house');

  return (
    <div className="relative mt-8 rounded-3xl overflow-hidden bg-[#060A1D] border border-[#1E293B] shadow-2xl p-4 sm:p-6 lg:p-10 text-white">
      
      {/* High-Clarity Cosmic Star Dot Grid Matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.6) 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Ambient Celestial Light Halos & Nebula Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B82F6]/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[480px] h-[480px] bg-[#F59E0B]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] bg-[#8B5CF6]/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Grid: Left Consultation Card + Right Interactive Cosmic Kundli Wheel */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: Career Consultation Photo Card with Badge   */}
        {/* ======================================================== */}
        <div className="lg:col-span-5 flex justify-center">
          <div 
            onClick={onOpenBooking}
            className="w-full max-w-[480px] rounded-3xl overflow-hidden border border-[#D49B35]/40 bg-[#0B1120] shadow-[0_10px_35px_rgba(0,0,0,0.6)] group cursor-pointer transition-all duration-300 hover:border-[#F59E0B] hover:shadow-[0_15px_45px_rgba(245,158,11,0.2)] relative"
          >
            {/* Consultation Meeting / Kundli Report Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img 
                src={kundliReportImg} 
                alt="Acharya Ganesh Vedic Kundli Career Report Blueprint" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060A17] via-transparent to-transparent opacity-80" />
            </div>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#090E1E]/90 backdrop-blur-md border border-[#334155] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between gap-2 shadow-lg group-hover:border-[#F59E0B]/60 transition-colors">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F1F5F9]">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span className="truncate">Personalized Vedic Career Blueprint</span>
              </div>
              
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenBooking();
                }}
                className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FACC15] hover:text-[#FDE047] shrink-0 group-hover:translate-x-0.5 transition-transform"
              >
                <span>CONSULT NOW</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FACC15]" />
              </button>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: Celestial Kundli Wheel System with 8 Nodes */}
        {/* ======================================================== */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[480px] sm:min-h-[560px] py-4">
          
          <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center">
            
            {/* Concentric Golden Orbit Rings */}
            <div className="absolute w-[82%] h-[82%] rounded-full border border-[#D49B35]/25 pointer-events-none" />
            <div className="absolute w-[68%] h-[68%] rounded-full border border-[#D49B35]/20 pointer-events-none" />
            <div className="absolute w-[52%] h-[52%] rounded-full border border-dashed border-[#D49B35]/30 pointer-events-none" />

            {/* Rotating Zodiac Ring with 12 Zodiac Badges */}
            <div 
              className={`absolute w-[74%] h-[74%] rounded-full flex items-center justify-center pointer-events-none transition-transform ${
                isRotating ? 'animate-spin-zodiac' : ''
              }`}
              style={{ animationDuration: '60s' }}
            >
              {ZODIAC_SYMBOLS.map((z, idx) => {
                const radius = 145; // Approximate px in container
                return (
                  <div
                    key={idx}
                    className="absolute w-5 h-5 rounded-md bg-[#24133A]/80 border border-[#7C3AED]/40 flex items-center justify-center text-[10px] text-[#D8B4FE] shadow-sm select-none"
                    style={{
                      transform: `rotate(${z.angle}deg) translate(${radius}px) rotate(-${z.angle}deg)`
                    }}
                  >
                    {z.symbol}
                  </div>
                );
              })}
            </div>

            {/* Radial Spoke Connecting Rays from Center to Nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 540 540">
              {ASPECT_NODES.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const cx = 270;
                const cy = 270;
                const r = 210;
                const x2 = cx + r * Math.cos(rad);
                const y2 = cy + r * Math.sin(rad);
                const isSelected = activeNode === node.id;
                return (
                  <line
                    key={node.id}
                    x1={cx}
                    y1={cy}
                    x2={x2}
                    y2={y2}
                    stroke={isSelected ? '#F59E0B' : '#78350F'}
                    strokeWidth={isSelected ? '1.5' : '0.8'}
                    strokeDasharray={isSelected ? 'none' : '3,3'}
                    opacity={isSelected ? '0.8' : '0.35'}
                  />
                );
              })}
            </svg>

            {/* =================================================== */}
            {/* CENTER HUB: Radiant Golden Box with Guru Logo & CTA */}
            {/* =================================================== */}
            <div className="relative z-20 flex items-center justify-center">
              {/* Diffuse warm amber backlight halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#EA580C] via-[#F59E0B] to-[#FACC15] rounded-3xl blur-2xl opacity-40 group-hover:opacity-65 transition-opacity" />

              <div 
                onClick={onOpenBooking}
                className="relative w-48 sm:w-52 aspect-square rounded-[28px] bg-gradient-to-b from-[#160B04] via-[#0E0602] to-[#080301] border-2 border-[#FACC15] shadow-[0_0_50px_rgba(234,179,8,0.55)] flex flex-col items-center justify-between p-3.5 sm:p-4 group cursor-pointer hover:scale-105 transition-all duration-300 ring-2 ring-[#EAB308]/40"
              >
                {/* Sparkle Badge at Top Right */}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-tr from-[#EA580C] to-[#F59E0B] border-2 border-[#FEF08A] flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>

                {/* Acharya Ganesh Circular Emblem Graphic */}
                <div className="w-full flex-1 flex flex-col items-center justify-center pt-1">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-[#EAB308]/60 bg-[#160902] shadow-[0_0_25px_rgba(234,179,8,0.35)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={acharyaGaneshEmblemImg} 
                      alt="Acharya Ganesh Vedic Astrology Emblem" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Bottom Orange Button inside Box */}
                <div className="w-full mt-1.5 pb-0.5">
                  <div className="w-full bg-[#EA580C] hover:bg-[#D946EF] group-hover:bg-[#F97316] text-white py-2 px-3 rounded-xl font-black text-[10px] sm:text-[11px] uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md transition-all">
                    <span className="text-sm font-black leading-none">+</span>
                    <span className="font-extrabold tracking-wide">1-ON-1 CONSULTATION</span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================== */}
            {/* 8 SURROUNDING ASPECT NODES (Positioned radially)    */}
            {/* =================================================== */}
            {ASPECT_NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const radius = 205; // radius distance from center (fits 540x540)
              const isSelected = activeNode === node.id;
              
              // Offsets based on angle for nice positioning
              const leftPercent = 50 + (radius * Math.cos(rad) / 270) * 44;
              const topPercent = 50 + (radius * Math.sin(rad) / 270) * 44;

              return (
                <div
                  key={node.id}
                  onClick={() => {
                    setActiveNode(node.id);
                    onOpenBooking();
                  }}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={`absolute z-30 px-3.5 py-2 sm:px-4 sm:py-2 rounded-2xl cursor-pointer transition-all duration-300 text-center select-none shadow-md ${
                    node.isPrimary || isSelected
                      ? 'bg-[#0B152B] border-2 border-[#FACC15] shadow-[0_0_20px_rgba(250,204,21,0.35)] scale-105'
                      : 'bg-[#091124]/90 hover:bg-[#0E1A38] border border-[#1E3A8A]/50 hover:border-[#3B82F6]'
                  }`}
                >
                  <div className={`text-xs sm:text-xs font-bold leading-tight ${
                    node.isPrimary || isSelected ? 'text-[#FACC15]' : 'text-[#F8FAFC]'
                  }`}>
                    {node.title}
                  </div>
                  <div className="text-[10px] text-[#94A3B8] font-medium leading-tight whitespace-nowrap mt-0.5">
                    {node.subtitle}
                  </div>
                </div>
              );
            })}

            {/* Pause / Resume Rotation Control (Located bottom-right below Business node) */}
            <div className="absolute -bottom-2 sm:bottom-1 right-2 sm:right-6 z-30">
              <button
                type="button"
                onClick={() => setIsRotating(!isRotating)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0B132B]/85 border border-[#334155] hover:border-[#FACC15] text-[#CBD5E1] hover:text-[#FACC15] text-[10px] font-semibold transition-all cursor-pointer shadow-xs"
              >
                {isRotating ? (
                  <>
                    <Pause className="w-3 h-3 text-[#FACC15]" />
                    <span>Pause Rotation</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-[#FACC15] fill-current" />
                    <span>Resume Rotation</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
