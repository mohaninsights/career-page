import React, { useState } from 'react';
import { CheckCircle2, Shield, Star, Sparkles, Clock, Calendar, MessageCircle, ArrowRight, User, Phone, Mail, MapPin } from 'lucide-react';
import { HERO_METRICS } from '../data/careerAstrologyData';
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
    careerConcern: 'Job Switch & Auspicious Timing',
    preferredMode: 'video'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.dateOfBirth) {
      alert('Please fill in your Name, Phone Number, and Date of Birth to proceed.');
      return;
    }
    setSubmitted(true);
    onFormSubmit(formData);
  };

  return (
    <section id="hero" className="relative w-full bg-gradient-to-b from-[#6A240A] via-[#7E2F10] to-[#541B07] text-[#FAF4EB] pt-8 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-hero-texture border-b-4 border-[#D49B35]">
      {/* Decorative celestial background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B24E24]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Proposition & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3D1405]/70 border border-[#E5A93C]/40 text-[#FDE68A] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>Ancient Vedic Jyotish for Career Clarity & High Growth</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-vedic font-bold text-white leading-tight tracking-tight">
              Understand Your Career Path with <span className="text-[#FDE08B] underline decoration-[#D49B35]/50 underline-offset-8">Vedic Astrology</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#F2DDD0] text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Decode your horoscope to unlock auspicious career timing, job promotions, business decisions, foreign settlement, and overcome professional setbacks with ancient Vedic wisdom.
            </p>

            {/* Value checklist matching PDF */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#FBEEDC]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Accurate Career Predictions by Date of Birth & Time</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Dashamsha (D10) Analysis for Career Status & High Growth</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>10th House (Karma Bhava) & Career Roadmaps</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Remedies, Gemstones & Auspicious Muhurat for Success</span>
              </div>
              <div className="flex items-start gap-2.5 sm:col-span-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#2D0D03]/80 border border-[#D49B35]/40 text-[#FDEBD0] text-xs font-semibold">
                  <Shield className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>100% Private & Confidential 1-on-1 Consultation with Acharya Hanish Bagga</span>
                </div>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="pt-6 border-t border-[#9E431E]/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {HERO_METRICS.map((metric, idx) => (
                <div key={idx} className="bg-[#461807]/60 border border-[#8C3814] rounded-lg p-3 backdrop-blur-xs">
                  <div className="text-2xl sm:text-3xl font-serif-vedic font-bold text-[#FDE08B] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-[#E8D0BE] mt-1 leading-snug font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Consultation Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 text-[#2C1810] shadow-2xl border-2 border-[#D49B35]/70 relative">
              
              {/* Gold decorative header badge */}
              <div className="text-center pb-4 border-b border-[#EEDCC4]">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E431E] bg-[#FAF0DE] px-3 py-1 rounded-full border border-[#E5CAA0]">
                  ✦ 1-on-1 Vedic Jyotish ✦
                </span>
                <h2 className="text-2xl font-serif-vedic font-bold text-[#3B190C] mt-2">
                  Book Career Consultation
                </h2>
                <p className="text-xs text-[#704E38] mt-1">
                  Direct private guidance with Acharya Hanish Bagga
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#25D366]/15 rounded-full flex items-center justify-center mx-auto text-[#1EBE5D]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3B190C]">Consultation Request Received!</h3>
                  <p className="text-xs text-[#664632]">
                    Thank you <strong className="text-[#9E431E]">{formData.fullName}</strong>. Our appointment team will contact you within 15 minutes to confirm your preferred slot.
                  </p>
                  <a
                    href={`https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20have%20submitted%20my%20career%20consultation%20request%20for%20${encodeURIComponent(formData.fullName)}%20regarding%20${encodeURIComponent(formData.careerConcern)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 rounded-lg font-bold text-sm transition shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Instant WhatsApp Confirmation</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#A88C74] absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg pl-9 pr-3 py-2 text-sm text-[#2C1810] focus:ring-2 focus:ring-[#9E431E] focus:outline-none placeholder:text-[#A89482]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email 2-col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#482819] mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-[#A88C74] absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765-43210"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg pl-8 pr-2 py-2 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#9E431E] focus:outline-none placeholder:text-[#A89482]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#482819] mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-[#A88C74] absolute left-3 top-2.5" />
                        <input
                          type="email"
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg pl-8 pr-2 py-2 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#9E431E] focus:outline-none placeholder:text-[#A89482]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date of Birth & Time of Birth */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#482819] mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-2.5 py-1.5 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#482819] mb-1">
                        Time of Birth (Exact/Approx)
                      </label>
                      <input
                        type="time"
                        value={formData.timeOfBirth}
                        onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-2.5 py-1.5 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Place of Birth */}
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">
                      Place of Birth (City, State, Country)
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-[#A88C74] absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="e.g. New Delhi, India"
                        value={formData.placeOfBirth}
                        onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg pl-8 pr-2 py-2 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#9E431E] focus:outline-none placeholder:text-[#A89482]"
                      />
                    </div>
                  </div>

                  {/* Primary Career Concern */}
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">
                      Primary Career Focus Area
                    </label>
                    <select
                      value={formData.careerConcern}
                      onChange={(e) => setFormData({ ...formData, careerConcern: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-2.5 py-2 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#9E431E] focus:outline-none font-medium"
                    >
                      <option value="Job Switch & Auspicious Timing">Job Switch & Auspicious Timing</option>
                      <option value="Promotion, Appraisal & Salary Increment">Promotion, Appraisal & Salary Increment</option>
                      <option value="Government Job (UPSC/PCS/PSU) vs Corporate">Government Job (UPSC/PCS/PSU) vs Corporate</option>
                      <option value="Business vs Salaried Job Decision">Business vs Salaried Job Decision</option>
                      <option value="Foreign Settlement & Overseas Work Visa">Foreign Settlement & Overseas Work Visa</option>
                      <option value="Workplace Politics, Boss Friction & Stability">Workplace Politics, Boss Friction & Stability</option>
                      <option value="Gemstones, Yantra & Vedic Remedies Guidance">Gemstones, Yantra & Vedic Remedies Guidance</option>
                      <option value="Comprehensive 360° Career Kundli Reading">Comprehensive 360° Career Kundli Reading</option>
                    </select>
                  </div>

                  {/* Preferred Mode */}
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">
                      Consultation Format
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <label className={`cursor-pointer border rounded-lg py-1.5 px-2 transition flex flex-col items-center justify-center gap-0.5 ${formData.preferredMode === 'video' ? 'bg-[#9E431E] text-white border-[#9E431E] font-bold shadow-xs' : 'bg-[#FAF6EE] border-[#D9C4A6] text-[#482819]'}`}>
                        <input
                          type="radio"
                          name="mode"
                          className="sr-only"
                          checked={formData.preferredMode === 'video'}
                          onChange={() => setFormData({ ...formData, preferredMode: 'video' })}
                        />
                        <span>📹 Video Call</span>
                        <span className="text-[9px] opacity-80">(Zoom / Meet)</span>
                      </label>

                      <label className={`cursor-pointer border rounded-lg py-1.5 px-2 transition flex flex-col items-center justify-center gap-0.5 ${formData.preferredMode === 'audio' ? 'bg-[#9E431E] text-white border-[#9E431E] font-bold shadow-xs' : 'bg-[#FAF6EE] border-[#D9C4A6] text-[#482819]'}`}>
                        <input
                          type="radio"
                          name="mode"
                          className="sr-only"
                          checked={formData.preferredMode === 'audio'}
                          onChange={() => setFormData({ ...formData, preferredMode: 'audio' })}
                        />
                        <span>📞 Phone Call</span>
                        <span className="text-[9px] opacity-80">(Direct Line)</span>
                      </label>

                      <label className={`cursor-pointer border rounded-lg py-1.5 px-2 transition flex flex-col items-center justify-center gap-0.5 ${formData.preferredMode === 'written_report' ? 'bg-[#9E431E] text-white border-[#9E431E] font-bold shadow-xs' : 'bg-[#FAF6EE] border-[#D9C4A6] text-[#482819]'}`}>
                        <input
                          type="radio"
                          name="mode"
                          className="sr-only"
                          checked={formData.preferredMode === 'written_report'}
                          onChange={() => setFormData({ ...formData, preferredMode: 'written_report' })}
                        />
                        <span>📄 PDF Report</span>
                        <span className="text-[9px] opacity-80">(Written Kundli)</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 bg-gradient-to-r from-[#9E431E] to-[#7B2E0F] hover:from-[#B44E24] hover:to-[#923813] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Schedule Consultation Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Quick WhatsApp Action */}
                  <a
                    href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20want%20to%20inquire%20about%20Career%20Astrology%20Consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2 rounded-lg font-bold text-xs transition shadow-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Quick WhatsApp Consultation (+91 73000-04325)</span>
                  </a>

                  {/* Trust Footer */}
                  <div className="text-center pt-1 text-[11px] text-[#7A5842] flex items-center justify-center gap-3">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-[#25D366]" /> 100% Confidential
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#D49B35] fill-current" /> 4.9/5 Client Rating
                    </span>
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
