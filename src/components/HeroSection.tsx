import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, ArrowRight, Plus, Minus } from 'lucide-react';
import { ConsultationFormState } from '../types';

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
      className="relative w-full bg-[#703013] text-[#FAF4EB] py-10 sm:py-14 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Background Sacred Geometric Kundli Diagram Lines (matching screenshot) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        {/* Left North Indian diamond subtle background pattern */}
        <svg className="absolute -left-20 -top-20 w-[600px] h-[600px]" viewBox="0 0 400 400" stroke="#FDE08B" strokeWidth="1" fill="none">
          <rect x="50" y="50" width="300" height="300" stroke="#FDE08B" strokeWidth="1.2" />
          <line x1="50" y1="50" x2="350" y2="350" stroke="#FDE08B" strokeWidth="1" />
          <line x1="350" y1="50" x2="50" y2="350" stroke="#FDE08B" strokeWidth="1" />
          <polygon points="200,50 350,200 200,350 50,200" stroke="#FDE08B" strokeWidth="1" />
        </svg>

        {/* Right subtle zodiac wheel arc */}
        <svg className="absolute -right-24 -bottom-24 w-[650px] h-[650px]" viewBox="0 0 400 400" stroke="#FDE08B" strokeWidth="1" fill="none">
          <circle cx="350" cy="350" r="300" stroke="#FDE08B" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="350" cy="350" r="240" stroke="#FDE08B" strokeWidth="0.8" />
          <circle cx="350" cy="350" r="180" stroke="#FDE08B" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Pill badges, Title, Detailed Description, Planet Pills & Value Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badges matching screenshot */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#52210B]/80 border border-[#8C3E14] text-[#F3DFBD] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#E5A93C]"></span>
                <span>Astrology for Career Growth & Job Uncertainty</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#52210B]/80 border border-[#8C3E14] text-[#F3DFBD] text-xs font-semibold">
                <span>🧭</span>
                <span className="uppercase text-[11px] tracking-wider">10th House Karma Bhava</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-vedic font-bold text-white leading-tight tracking-tight">
                Get Clear Career Direction & Overcome Job Uncertainty
              </h1>
              <p className="text-sm sm:text-base font-serif-vedic text-[#FDEBD0] italic font-medium">
                Sick of your current position? Choosing between promotion, a job change, government work or business?
              </p>
            </div>

            {/* Requested Detailed Copy */}
            <p className="text-[#F1DDD0] text-xs sm:text-sm leading-relaxed font-light text-justify sm:text-left">
              Career astrology is the interpretation of your natal chart to know your strengths in your career, tough times, appropriate career paths and the best timing in your career life. A customized career forecast may offer another viewpoint into your current stage and future opportunities rather than an important decision just being made due to stress or uncertainty.
            </p>

            {/* Planet Role Badges (Sun, Jupiter, Saturn, Mercury, Rahu) matching screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
              <div className="bg-[#481B09]/80 border border-[#853513] rounded-lg p-2 text-center backdrop-blur-xs">
                <div className="text-xs font-bold text-[#FDE08B]">Sun ☉</div>
                <div className="text-[10px] text-[#D8BCAB] mt-0.5 leading-tight">Authority & Govt.</div>
              </div>

              <div className="bg-[#481B09]/80 border border-[#853513] rounded-lg p-2 text-center backdrop-blur-xs">
                <div className="text-xs font-bold text-[#FDE08B]">Jupiter ♃</div>
                <div className="text-[10px] text-[#D8BCAB] mt-0.5 leading-tight">Growth & Wisdom</div>
              </div>

              <div className="bg-[#481B09]/80 border border-[#853513] rounded-lg p-2 text-center backdrop-blur-xs">
                <div className="text-xs font-bold text-[#FDE08B]">Saturn ♄</div>
                <div className="text-[10px] text-[#D8BCAB] mt-0.5 leading-tight">Karma & Tenure</div>
              </div>

              <div className="bg-[#481B09]/80 border border-[#853513] rounded-lg p-2 text-center backdrop-blur-xs">
                <div className="text-xs font-bold text-[#FDE08B]">Mercury ☿</div>
                <div className="text-[10px] text-[#D8BCAB] mt-0.5 leading-tight">Business & Tech</div>
              </div>

              <div className="bg-[#481B09]/80 border border-[#853513] rounded-lg p-2 text-center backdrop-blur-xs col-span-2 sm:col-span-1">
                <div className="text-xs font-bold text-[#FDE08B]">Rahu ☊</div>
                <div className="text-[10px] text-[#D8BCAB] mt-0.5 leading-tight">Foreign Careers</div>
              </div>
            </div>

            {/* 4 Value proposition boxes matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#FAF0DE]">
              <div className="bg-[#481B09]/70 border border-[#853513] rounded-xl p-3.5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span className="leading-snug">Identify suitable career fields matching your planetary strengths</span>
              </div>

              <div className="bg-[#481B09]/70 border border-[#853513] rounded-xl p-3.5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span className="leading-snug">Understand auspicious timing for job change, promotion & growth</span>
              </div>

              <div className="bg-[#481B09]/70 border border-[#853513] rounded-xl p-3.5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span className="leading-snug">Resolve business vs job dilemmas through Dashamsha (D10) chart</span>
              </div>

              <div className="bg-[#481B09]/70 border border-[#853513] rounded-xl p-3.5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span className="leading-snug">Practical, time-tested Vedic remedies to overcome roadblocks</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean & Minimized Contact Form Card matching screenshot */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 text-[#2C1810] shadow-2xl border-2 border-[#D49B35]/70 relative">
              
              {/* Header Badge & Title matching screenshot */}
              <div className="text-center pb-3">
                <div className="inline-block bg-[#5C230B] text-[#FAF4EB] text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full mb-2">
                  1-ON-1 CONSULTATION
                </div>
                <h2 className="text-2xl font-serif-vedic font-bold text-[#2E1206]">
                  Book Career Consultation
                </h2>
                <p className="text-xs text-[#704E38] mt-0.5">
                  Get personalized Vedic roadmap from Hanish Bagga (Acharya Ganesh)
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
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 rounded-lg font-bold text-xs transition shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
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
                      <option value="Job Change & Auspicious Timing">Job Change & Auspicious Timing</option>
                      <option value="Promotion & Appraisal Timing">Promotion & Appraisal Timing</option>
                      <option value="Government vs Private Job Dilemma">Government vs Private Job Dilemma</option>
                      <option value="Job vs Business Decision">Job vs Business Decision</option>
                      <option value="Foreign Work & Relocation Astrology">Foreign Work & Relocation Astrology</option>
                      <option value="Workplace Politics & Office Stress">Workplace Politics & Office Stress</option>
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
                      <span>Add Birth Details Now (Optional for Faster Reading)</span>
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
                    className="w-full bg-[#753413] hover:bg-[#5C260B] text-white py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition shadow-md flex items-center justify-center gap-2 cursor-pointer group mt-1"
                  >
                    <span>Confirm Consultation Slot</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Subtext divider & Instant WhatsApp Booking button matching screenshot */}
                  <div className="space-y-2 pt-1 text-center">
                    <p className="text-[11px] text-[#7A5B48]">
                      or need instant assistance?
                    </p>

                    <a
                      href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20want%20to%20book%20a%20Career%20Astrology%20Consultation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-sm flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Instant WhatsApp Booking (+91 73000-04325)</span>
                    </a>
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
