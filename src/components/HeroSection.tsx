import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Plus, Minus, Lock, Star } from 'lucide-react';
import { ConsultationFormState } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSectionProps {
  onFormSubmit: (data: ConsultationFormState) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<ConsultationFormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'male',
    careerConcern: 'Career Path & Suitable Field Analysis',
    preferredMode: 'video'
  });

  const [showBirthDetails, setShowBirthDetails] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber) {
      alert('Please fill in your Full Name and Phone / WhatsApp number.');
      return;
    }
    setSubmitted(true);
    onFormSubmit(formData);
  };

  return (
    <section 
      id="hero" 
      className="relative w-full bg-[#52210D] text-[#FAF4EB] py-8 sm:py-12 px-4 sm:px-6 lg:px-10 overflow-hidden border-b-2 border-[#8C3E14]"
    >
      {/* Background Sacred Geometric Kundli Diagram Lines (matching screenshot) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-25 overflow-hidden">
        {/* Sacred Kundli Geometry Vector - Responsive positioning: centered behind banner heading on mobile, framed to left column on desktop */}
        <svg 
          className="absolute -top-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-12 sm:-top-10 lg:-left-16 lg:-top-16 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] max-w-none transition-all" 
          viewBox="0 0 400 400" 
          stroke="#FDE08B" 
          strokeWidth="0.8" 
          fill="none"
        >
          <circle cx="200" cy="200" r="190" stroke="#FDE08B" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="140" stroke="#FDE08B" strokeWidth="0.6" />
          <rect x="60" y="60" width="280" height="280" stroke="#FDE08B" strokeWidth="1" />
          <line x1="60" y1="60" x2="340" y2="340" stroke="#FDE08B" strokeWidth="0.8" />
          <line x1="340" y1="60" x2="60" y2="340" stroke="#FDE08B" strokeWidth="0.8" />
          <polygon points="200,60 340,200 200,340 60,200" stroke="#FDE08B" strokeWidth="0.8" />
        </svg>

        {/* Right subtle zodiac wheel arc (hidden on small mobile to prevent clash with form) */}
        <svg 
          className="hidden sm:block absolute -right-20 -bottom-20 w-[450px] lg:w-[600px] h-[450px] lg:h-[600px]" 
          viewBox="0 0 400 400" 
          stroke="#FDE08B" 
          strokeWidth="0.7" 
          fill="none"
        >
          <circle cx="350" cy="350" r="300" stroke="#FDE08B" strokeWidth="0.8" strokeDasharray="6 4" />
          <circle cx="350" cy="350" r="220" stroke="#FDE08B" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Breadcrumb, Badge, Headline, Planets & 4 Value Boxes */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Breadcrumb Navigation matching screenshot */}
            <div className="text-xs text-[#E8CCA6] flex items-center gap-1.5 font-medium">
              <span>Home</span>
              <span className="text-[#B3876B]">›</span>
              <span>Services</span>
              <span className="text-[#B3876B]">›</span>
              <span className="text-[#FDE08B] font-semibold">Career Growth & Job Uncertainty (Career Astrology)</span>
            </div>

            {/* Pill Badge matching screenshot */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#341508]/90 border border-[#8C3E14] text-[#FDE08B] text-xs font-bold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse"></span>
                <span>AUTHENTIC VEDIC CAREER GUIDANCE</span>
              </div>
            </div>

            {/* Main Headline matching screenshot */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-vedic font-bold text-white leading-[1.15] tracking-tight drop-shadow-sm">
              Unlock Your Career Destiny Through Astrology
            </h1>

            {/* Key Planetary Career Influences Title */}
            <div className="pt-1">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FDE08B]">
                KEY PLANETARY CAREER INFLUENCES:
              </div>

              {/* 5 Planetary Badges in Row matching screenshot */}
              <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5">
                
                {/* Sun */}
                <div className="bg-[#341508]/90 border border-[#7A3614] rounded-xl p-2.5 text-center shadow-md hover:border-[#D49B35] transition-all">
                  <div className="text-xs sm:text-sm font-bold text-[#FDE08B] flex items-center justify-center gap-1">
                    <span>Sun</span>
                    <span className="text-[#E5A93C] text-sm">☉</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#F0D5C3] mt-1 font-medium leading-tight">
                    Authority & Govt.
                  </div>
                </div>

                {/* Jupiter */}
                <div className="bg-[#341508]/90 border border-[#7A3614] rounded-xl p-2.5 text-center shadow-md hover:border-[#D49B35] transition-all">
                  <div className="text-xs sm:text-sm font-bold text-[#FDE08B] flex items-center justify-center gap-1">
                    <span>Jupiter</span>
                    <span className="text-[#E5A93C] text-sm">♃</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#F0D5C3] mt-1 font-medium leading-tight">
                    Growth & Wisdom
                  </div>
                </div>

                {/* Saturn */}
                <div className="bg-[#341508]/90 border border-[#7A3614] rounded-xl p-2.5 text-center shadow-md hover:border-[#D49B35] transition-all">
                  <div className="text-xs sm:text-sm font-bold text-[#FDE08B] flex items-center justify-center gap-1">
                    <span>Saturn</span>
                    <span className="text-[#E5A93C] text-sm">♄</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#F0D5C3] mt-1 font-medium leading-tight">
                    Karma & Tenure
                  </div>
                </div>

                {/* Mercury */}
                <div className="bg-[#341508]/90 border border-[#7A3614] rounded-xl p-2.5 text-center shadow-md hover:border-[#D49B35] transition-all">
                  <div className="text-xs sm:text-sm font-bold text-[#FDE08B] flex items-center justify-center gap-1">
                    <span>Mercury</span>
                    <span className="text-[#E5A93C] text-sm">☿</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#F0D5C3] mt-1 font-medium leading-tight">
                    Business & Tech
                  </div>
                </div>

                {/* Rahu */}
                <div className="bg-[#341508]/90 border border-[#7A3614] rounded-xl p-2.5 text-center shadow-md hover:border-[#D49B35] transition-all col-span-2 sm:col-span-1">
                  <div className="text-xs sm:text-sm font-bold text-[#FDE08B] flex items-center justify-center gap-1">
                    <span>Rahu</span>
                    <span className="text-[#E5A93C] text-sm">☊</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#F0D5C3] mt-1 font-medium leading-tight">
                    Foreign Careers
                  </div>
                </div>

              </div>
            </div>

            {/* 4 Value proposition boxes matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-[#FAF0DE]">
              
              <div className="bg-[#341508]/85 border border-[#7A3614] rounded-2xl p-4 flex items-start gap-3 shadow-md hover:border-[#8C3E14] transition-all">
                <span className="text-[#FDE08B] text-base leading-none shrink-0 mt-0.5">✦</span>
                <span className="leading-snug font-medium text-[#FCECDA]">
                  Identify suitable career fields matching your planetary strengths
                </span>
              </div>

              <div className="bg-[#341508]/85 border border-[#7A3614] rounded-2xl p-4 flex items-start gap-3 shadow-md hover:border-[#8C3E14] transition-all">
                <span className="text-[#FDE08B] text-base leading-none shrink-0 mt-0.5">✦</span>
                <span className="leading-snug font-medium text-[#FCECDA]">
                  Understand auspicious timing for job change, promotion & growth
                </span>
              </div>

              <div className="bg-[#341508]/85 border border-[#7A3614] rounded-2xl p-4 flex items-start gap-3 shadow-md hover:border-[#8C3E14] transition-all">
                <span className="text-[#FDE08B] text-base leading-none shrink-0 mt-0.5">✦</span>
                <span className="leading-snug font-medium text-[#FCECDA]">
                  Resolve business vs job dilemmas through Dashamsha (D10) chart
                </span>
              </div>

              <div className="bg-[#341508]/85 border border-[#7A3614] rounded-2xl p-4 flex items-start gap-3 shadow-md hover:border-[#8C3E14] transition-all">
                <span className="text-[#FDE08B] text-base leading-none shrink-0 mt-0.5">✦</span>
                <span className="leading-snug font-medium text-[#FCECDA]">
                  Practical, time-tested Vedic remedies to overcome roadblocks
                </span>
              </div>

            </div>

            {/* Bottom Trust & Stats Bar matching screenshot */}
            <div className="pt-3 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-[#7A3614]/60 text-xs text-[#F0D5C3]">
              <div className="flex items-center gap-1.5">
                <span className="text-[#FDE08B] font-bold">★ 5.0/5.0</span>
                <span className="text-[#E5CEBA]">Client Rating</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[#FDE08B] font-bold">50,000+</span>
                <span className="text-[#E5CEBA]">Charts Analyzed</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[#25D366] font-bold">100%</span>
                <span className="text-[#E5CEBA]">Confidential</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Booking Form Card matching screenshot */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 text-[#2C1810] shadow-2xl border-2 border-[#D49B35]/70 relative">
              
              {/* Header Badge & Title matching screenshot */}
              <div className="text-center pb-3">
                <div className="inline-block bg-[#5C230B] text-[#FAF4EB] text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-2">
                  1-ON-1 CONSULTATION
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-vedic font-bold text-[#2E1206]">
                  Book Career Consultation
                </h2>
                <p className="text-xs text-[#704E38] mt-1 font-medium">
                  Get personalized Vedic roadmap from Acharya Ganesh
                </p>
              </div>

              {submitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-[#25D366]/15 rounded-full flex items-center justify-center mx-auto text-[#1EBE5D]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#3B190C]">Consultation Slot Reserved!</h3>
                  <p className="text-xs text-[#664632]">
                    Thank you <strong className="text-[#8C3411]">{formData.fullName}</strong>. Our team will contact you shortly on WhatsApp to confirm your appointment.
                  </p>
                  <a
                    href={`https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20have%20submitted%20my%20career%20consultation%20request%20for%20${encodeURIComponent(formData.fullName)}%20(${encodeURIComponent(formData.careerConcern)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 rounded-xl font-bold text-xs transition shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Instant WhatsApp Booking (+91 73000-04325)</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-3 space-y-3.5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#3B1E10] mb-1">
                      Full Name <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-xl px-3.5 py-2.5 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#8C3411] focus:outline-none placeholder:text-[#A89482]"
                    />
                  </div>

                  {/* Phone / WhatsApp & Email Address (2-Column) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#3B1E10] mb-1">
                        Phone / WhatsApp <span className="text-[#C0392B]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-xl px-3 py-2.5 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#8C3411] focus:outline-none placeholder:text-[#A89482]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3B1E10] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-xl px-3 py-2.5 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#8C3411] focus:outline-none placeholder:text-[#A89482]"
                      />
                    </div>
                  </div>

                  {/* Primary Career Focus */}
                  <div>
                    <label className="block text-xs font-bold text-[#3B1E10] mb-1">
                      Primary Career Focus <span className="text-[#C0392B]">*</span>
                    </label>
                    <select
                      value={formData.careerConcern}
                      onChange={(e) => setFormData({ ...formData, careerConcern: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-xl px-3 py-2.5 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#8C3411] focus:outline-none font-medium cursor-pointer"
                    >
                      <option value="Career Path & Suitable Field Analysis">Career Path & Suitable Field Analysis</option>
                      <option value="Job Switch & Salary Appraisal Timing">Job Switch & Salary Appraisal Timing</option>
                      <option value="Promotion Delay & Corporate Politics">Promotion Delay & Corporate Politics</option>
                      <option value="Business vs Job (D10 Dashamsha Analysis)">Business vs Job (D10 Dashamsha Analysis)</option>
                      <option value="Foreign Relocation & Visa Timing">Foreign Relocation & Visa Timing</option>
                      <option value="Government Exam / UPSC Astrological Window">Government Exam / UPSC Astrological Window</option>
                    </select>
                  </div>

                  {/* Collapsible / Optional Birth Details for clean minimalist card */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowBirthDetails(!showBirthDetails)}
                      className="text-[11px] text-[#7A3614] hover:text-[#52210B] font-semibold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      {showBirthDetails ? (
                        <Minus className="w-3.5 h-3.5 text-[#8C3411]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-[#8C3411]" />
                      )}
                      <span>Add Birth Details (Optional for Faster Reading)</span>
                    </button>

                    {showBirthDetails && (
                      <div className="mt-2.5 p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DCC2] space-y-2.5 animate-fadeIn">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-bold text-[#4E2B1A] mb-0.5">Date of Birth</label>
                            <input
                              type="date"
                              value={formData.dateOfBirth}
                              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                              className="w-full bg-white border border-[#D9C4A6] rounded-lg px-2 py-1.5 text-xs text-[#2C1810]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#4E2B1A] mb-0.5">Time of Birth</label>
                            <input
                              type="time"
                              value={formData.timeOfBirth}
                              onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                              className="w-full bg-white border border-[#D9C4A6] rounded-lg px-2 py-1.5 text-xs text-[#2C1810]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#4E2B1A] mb-0.5">Place of Birth (City/Country)</label>
                          <input
                            type="text"
                            placeholder="e.g. New Delhi, India"
                            value={formData.placeOfBirth}
                            onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                            className="w-full bg-white border border-[#D9C4A6] rounded-lg px-2.5 py-1.5 text-xs text-[#2C1810]"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Brown Confirm Consultation Slot CTA matching screenshot */}
                  <button
                    type="submit"
                    className="w-full bg-[#63240A] hover:bg-[#4E1B07] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition shadow-md flex items-center justify-center gap-2 cursor-pointer group mt-1"
                  >
                    <span>Confirm Consultation Slot</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Instant WhatsApp Booking button matching screenshot */}
                  <a
                    href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20want%20to%20book%20a%20Career%20Astrology%20Consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0FA958] hover:bg-[#0D8F4A] text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Instant WhatsApp Booking (+91 73000-04325)</span>
                  </a>

                  {/* Footer confidentiality note matching screenshot */}
                  <div className="pt-2 text-center text-[11px] text-[#7A5B48] flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#7A5B48]" />
                    <span>Strict Confidentiality • 100% Verified Vedic Astrologers</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

