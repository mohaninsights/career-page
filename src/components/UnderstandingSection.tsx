import React, { useState, useEffect } from 'react';
import { Compass, Layers, Clock, ShieldCheck, Calendar, ArrowRight, MessageCircle, Sparkles, Image as ImageIcon } from 'lucide-react';
import careerPosterImage from '../assets/images/career_astrology_poster_1787659215152.jpg';
import { ImageUploadModal } from './ImageUploadModal';

interface UnderstandingSectionProps {
  onOpenBooking: () => void;
}

export const UnderstandingSection: React.FC<UnderstandingSectionProps> = ({ onOpenBooking }) => {
  const [currentPoster, setCurrentPoster] = useState<string>(careerPosterImage);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('custom_career_poster_image');
    if (saved && saved.trim() !== '') {
      setCurrentPoster(saved);
    }
  }, []);

  const handleSaveImage = (newUrl: string) => {
    if (newUrl && newUrl.trim() !== '') {
      setCurrentPoster(newUrl);
      localStorage.setItem('custom_career_poster_image', newUrl);
    }
  };

  const handleResetDefault = () => {
    setCurrentPoster(careerPosterImage);
    localStorage.removeItem('custom_career_poster_image');
  };

  return (
    <section id="understanding" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EADFC7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0DF] border border-[#E8D6B8] text-[#8C3E14] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Vedic Career Astrology Insights</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            Understanding Career Astrology by Date of Birth
          </h2>
          
          <p className="text-sm sm:text-base text-[#6B4B36] max-w-2xl mx-auto leading-relaxed">
            Bridging ancient Vedic wisdom with modern career dilemmas to give you actionable clarity.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Descriptive text, 2x2 Feature Boxes, and Action Buttons (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Introductory Paragraphs */}
            <div className="space-y-3 text-sm text-[#4A3225] leading-relaxed">
              <p>
                Career astrology uses your exact date, time, and place of birth to evaluate your{' '}
                <strong className="text-[#3B190C] font-bold">10th House (Karma Bhava)</strong>, governing planets, and current{' '}
                <strong className="text-[#3B190C] font-bold">Mahadasha & Antardasha cycles</strong>.
              </p>
              <p className="text-xs sm:text-sm text-[#5E4232]">
                Rather than relying on vague sun-sign predictions, genuine Vedic astrology analyzes the micro-strengths of the Dashamsha (D10) divisional chart to uncover whether service, independent profession, government role, or entrepreneurship is best suited for your planetary combinations.
              </p>
            </div>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              
              {/* Card 1: 10th House (Karma Bhava) */}
              <div className="bg-[#FAF6F0] rounded-xl p-4 border border-[#ECE0CE] hover:border-[#D49B35]/60 transition flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#EFE3CF] border border-[#DFCEB3] flex items-center justify-center text-[#704221] shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C] leading-snug">
                    10th House (Karma Bhava)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#6B4B36] leading-relaxed">
                    Reveals your natural vocation, authority, executive power, and leadership potential.
                  </p>
                </div>
              </div>

              {/* Card 2: Dashamsha (D10) Chart */}
              <div className="bg-[#FAF6F0] rounded-xl p-4 border border-[#ECE0CE] hover:border-[#D49B35]/60 transition flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#EFE3CF] border border-[#DFCEB3] flex items-center justify-center text-[#704221] shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C] leading-snug">
                    Dashamsha (D10) Chart
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#6B4B36] leading-relaxed">
                    Pinpoints career stability, promotions, recognition, and job vs business alignment.
                  </p>
                </div>
              </div>

              {/* Card 3: Dasha & Planetary Timing */}
              <div className="bg-[#FAF6F0] rounded-xl p-4 border border-[#ECE0CE] hover:border-[#D49B35]/60 transition flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#EFE3CF] border border-[#DFCEB3] flex items-center justify-center text-[#704221] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C] leading-snug">
                    Dasha & Planetary Timing
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#6B4B36] leading-relaxed">
                    Identifies auspicious windows for job change, appraisals, business expansion, and relocation.
                  </p>
                </div>
              </div>

              {/* Card 4: Practical Vedic Remedies */}
              <div className="bg-[#FAF6F0] rounded-xl p-4 border border-[#ECE0CE] hover:border-[#D49B35]/60 transition flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#EFE3CF] border border-[#DFCEB3] flex items-center justify-center text-[#704221] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C] leading-snug">
                    Practical Vedic Remedies
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#6B4B36] leading-relaxed">
                    Targeted gemstones, mantras, and remedies to remove roadblocks after comprehensive chart analysis.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="bg-[#8C3E14] hover:bg-[#73310E] text-white px-5 py-3 rounded-lg font-bold text-xs sm:text-sm tracking-wide transition shadow-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1-on-1 Analysis</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20want%20to%20know%20more%20about%20Career%20Astrology%20Consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#D9CDB8] text-[#332219] hover:bg-[#FAF4EB] px-4.5 py-3 rounded-lg font-semibold text-xs sm:text-sm transition flex items-center gap-2 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Vedic Astrology Poster Image (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center items-start">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border-2 border-[#E3D3BA] bg-[#FAF5EC] group">
              
              {/* Full Image */}
              <img
                src={currentPoster}
                alt="Career Astrology - Discover the Right Path, Timing & Growth with Acharya Hanish Bagga"
                className="w-full h-auto object-cover rounded-2xl cursor-pointer block transition-transform duration-300 group-hover:scale-[1.01]"
                onClick={onOpenBooking}
                width={750}
                height={1125}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = careerPosterImage;
                }}
              />

              {/* Top-Right "Change Image" Floating Button */}
              <div className="absolute top-3.5 right-3.5 z-20">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsImageModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#241710]/85 hover:bg-[#8C3E14] text-white text-xs font-semibold border border-white/20 shadow-md backdrop-blur-xs transition cursor-pointer hover:scale-105"
                  title="Change or upload custom image"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#FDE08B]" />
                  <span>Change Image</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Image Upload / Change Modal */}
      <ImageUploadModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        title="Change Career Astrology Poster"
        currentImage={currentPoster}
        defaultImage={careerPosterImage}
        onSaveImage={handleSaveImage}
        onResetDefault={handleResetDefault}
      />
    </section>
  );
};

