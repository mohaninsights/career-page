import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Sparkles, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#180903] text-[#D8C2B2] pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t-2 border-[#D49B35]/40 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 4 Columns Grid Matching PDF Page 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Brand / Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8C3411] to-[#5C1E0A] flex items-center justify-center text-white border-2 border-[#D49B35] shadow-lg">
                <span className="font-cinzel text-xl font-bold text-[#FDEBD0]">AG</span>
              </div>
              <div>
                <div className="font-cinzel text-base font-bold text-[#FAF4EB] tracking-wider">
                  ACHARYA GANESH
                </div>
                <p className="text-[10px] font-semibold text-[#E5A93C] uppercase tracking-wider">
                  Vedic Career Astrologer & Mentor
                </p>
              </div>
            </div>

            <p className="text-xs text-[#BBA595] leading-relaxed">
              With 17+ years of experience and 50,000+ satisfied clients across 45+ countries, Acharya Hanish Bagga provides deeply accurate Vedic Career Astrology, Kundli analysis, and actionable remedies.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2A1208] border border-[#5E2812] text-[#FDE08B] text-[11px] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>Certified Jyotish Acharya & Vastu Mentor</span>
            </div>
          </div>

          {/* Column 2: Astrological Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-vedic text-sm font-bold text-[#FAF4EB] uppercase tracking-wider border-b border-[#3B190C] pb-2">
              Astrological Services
            </h4>
            <ul className="space-y-2 text-xs text-[#BBA595]">
              <li><a href="#hero" className="hover:text-[#FDE08B] transition">Career Astrology & Job Timing</a></li>
              <li><a href="#career-stages" className="hover:text-[#FDE08B] transition">Promotion & Appraisal Guidance</a></li>
              <li><a href="#career-stages" className="hover:text-[#FDE08B] transition">Business vs Job Decision</a></li>
              <li><a href="#career-stages" className="hover:text-[#FDE08B] transition">Foreign Job & Visa Astrology</a></li>
              <li><a href="#kundli-wheel" className="hover:text-[#FDE08B] transition">Vedic Career Chart Analysis</a></li>
              <li><a href="#deliverables" className="hover:text-[#FDE08B] transition">Consultation Deliverables</a></li>
              <li><a href="#masterclasses" className="hover:text-[#FDE08B] transition">Astrology Video Masterclasses</a></li>
              <li><a href="https://acharyaganesh.com/wealth-astrology" target="_blank" rel="noopener noreferrer" className="hover:text-[#FDE08B] transition">Wealth Astrology & Finances</a></li>
              <li><a href="https://acharyaganesh.com/health-astrology" target="_blank" rel="noopener noreferrer" className="hover:text-[#FDE08B] transition">Health Astrology & Vitality</a></li>
              <li><a href="#vedic-guide" className="hover:text-[#FDE08B] transition">Vedic Remedies & Gemstones</a></li>
            </ul>
          </div>

          {/* Column 3: Career Astrology Insights (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-vedic text-sm font-bold text-[#FAF4EB] uppercase tracking-wider border-b border-[#3B190C] pb-2">
              Career Insights
            </h4>
            <ul className="space-y-2 text-xs text-[#BBA595]">
              <li><a href="#understanding" className="hover:text-[#FDE08B] transition">Career Prediction by Date of Birth</a></li>
              <li><a href="#vedic-guide" className="hover:text-[#FDE08B] transition">10th House (Karma Bhava) Analysis</a></li>
              <li><a href="#vedic-guide" className="hover:text-[#FDE08B] transition">D10 Dashamsha Divisional Chart</a></li>
              <li><a href="#vedic-guide" className="hover:text-[#FDE08B] transition">Vimshottari Dasha Job Timing</a></li>
              <li><a href="#faqs" className="hover:text-[#FDE08B] transition">Astrology for Office Politics</a></li>
              <li><a href="#deliverables" className="hover:text-[#FDE08B] transition">Gemstones for Career Success</a></li>
            </ul>
          </div>

          {/* Column 4: Appointment Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-vedic text-sm font-bold text-[#FAF4EB] uppercase tracking-wider border-b border-[#3B190C] pb-2">
              Appointment Desk
            </h4>
            <p className="text-[11px] text-[#A88E7D] leading-relaxed">
              Consultations are conducted privately via Video Call (Zoom/Google Meet) or Phone.
            </p>

            <div className="space-y-2 pt-1">
              <a href="tel:+917300004325" className="flex items-center gap-2 text-[#FDEBD0] hover:text-[#FDE08B] transition">
                <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>+91 73000-04325 / +91 73000-04326</span>
              </a>
              <a href="mailto:consult@hanishbagga.com" className="flex items-center gap-2 text-[#FDEBD0] hover:text-[#FDE08B] transition">
                <Mail className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>consult@hanishbagga.com</span>
              </a>
              <div className="flex items-center gap-2 text-[#A88E7D]">
                <MapPin className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                <span>New Delhi, India (Global Online Consultation)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-gradient-to-r from-[#9E431E] to-[#7B2E0F] hover:from-[#B44E24] hover:to-[#923813] text-white py-2 px-3 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-sm"
              >
                Book 1-on-1 Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 border-t border-[#36160A] space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9E8270]">
            <div>
              © 2026 Acharya Hanish Bagga. All Rights Reserved. Vedic Astrology & Vastu Consultancy.
            </div>
            <div className="flex items-center gap-4">
              <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition">Terms of Consultation</a>
              <span>•</span>
              <a href="#disclaimer" className="hover:text-white transition">Disclaimer</a>
              <span>•</span>
              <button onClick={scrollToTop} className="hover:text-[#FDE08B] flex items-center gap-1">
                <span>Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

          <p className="text-[10px] text-[#7A6150] text-center leading-relaxed max-w-4xl mx-auto">
            Disclaimer: Vedic Astrology is a predictive science and diagnostic guide based on ancient mathematical and celestial systems. Individual outcomes may vary depending on personal Karma, hard work, and free will.
          </p>
        </div>

      </div>
    </footer>
  );
};
