import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { ConsultationFormState } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ConsultationFormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'male',
    careerConcern: 'Job Switch & Auspicious Timing',
    preferredMode: 'video',
    preferredDate: '',
    preferredTimeSlot: '11:00 AM - 12:00 PM IST',
    additionalNotes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FFFDF9] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#D49B35] shadow-2xl relative text-[#2C1810]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF0DE] hover:bg-[#EEDBC0] text-[#7A3614] flex items-center justify-center transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#6E2810] to-[#541E0A] p-6 text-white rounded-t-xl">
          <div className="flex items-center gap-2">
            <span className="bg-[#D49B35] text-[#2C1810] font-bold text-[10px] uppercase px-2.5 py-0.5 rounded">
              ✦ 1-on-1 Jyotish ✦
            </span>
            <span className="text-xs text-[#FDE08B]">100% Confidential</span>
          </div>
          <h3 className="text-2xl font-serif-vedic font-bold text-[#FAF4EB] mt-1.5">
            Book Career Astrology Consultation
          </h3>
          <p className="text-xs text-[#E5D2C2] mt-0.5">
            Direct personal session with Acharya Hanish Bagga (Zoom / Meet / Phone)
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Personal Information */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8C3E14] border-b border-[#F0E0CB] pb-1">
                  1. Personal & Contact Details
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#482819] mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#A88C74] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg pl-9 pr-3 py-2 text-xs focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">Phone Number (with WhatsApp) *</label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-[#A88C74] absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765-43210"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg pl-8 pr-3 py-2 text-xs focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-[#A88C74] absolute left-3 top-2.5" />
                      <input
                        type="email"
                        placeholder="vikram@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg pl-8 pr-3 py-2 text-xs focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Birth Details for Chart */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8C3E14] border-b border-[#F0E0CB] pb-1">
                  2. Birth Details for Vedic Kundli & D10
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">Date of Birth *</label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">Exact Time of Birth</label>
                    <input
                      type="time"
                      value={formData.timeOfBirth}
                      onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#482819] mb-1">Place of Birth (City & State/Country) *</label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-[#A88C74] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. New Delhi, India"
                      value={formData.placeOfBirth}
                      onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg pl-8 pr-3 py-2 text-xs focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Concern & Slot Preference */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8C3E14] border-b border-[#F0E0CB] pb-1">
                  3. Consultation Preferences
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#482819] mb-1">Primary Career Question / Concern</label>
                  <select
                    value={formData.careerConcern}
                    onChange={(e) => setFormData({ ...formData, careerConcern: e.target.value })}
                    className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">Preferred Slot Timing</label>
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                    >
                      <option value="11:00 AM - 12:00 PM IST">11:00 AM - 12:00 PM IST (Morning)</option>
                      <option value="02:00 PM - 03:00 PM IST">02:00 PM - 03:00 PM IST (Afternoon)</option>
                      <option value="05:00 PM - 06:00 PM IST">05:00 PM - 06:00 PM IST (Evening)</option>
                      <option value="07:00 PM - 08:00 PM IST">07:00 PM - 08:00 PM IST (Late Evening)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#482819] mb-1">Format</label>
                    <select
                      value={formData.preferredMode}
                      onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value as any })}
                      className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#9E431E] focus:outline-none"
                    >
                      <option value="video">📹 Video Call (Zoom / Google Meet)</option>
                      <option value="audio">📞 Phone Call (Direct Line)</option>
                      <option value="written_report">📄 Detailed Written PDF Report</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#9E431E] to-[#7B2E0F] hover:from-[#B44E24] hover:to-[#923813] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Slot Confirmation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#25D366]/15 rounded-full flex items-center justify-center mx-auto text-[#1EBE5D]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif-vedic font-bold text-[#3B190C]">
                Consultation Slot Reserved!
              </h4>
              <p className="text-xs sm:text-sm text-[#664632] max-w-md mx-auto">
                Namaste <strong>{formData.fullName}</strong>. Your consultation request for <strong>{formData.careerConcern}</strong> has been logged into our calendar.
              </p>

              <div className="bg-[#FAF6EE] rounded-xl p-4 border border-[#E3D4B8] text-xs text-left max-w-md mx-auto space-y-1.5">
                <div><strong>Client:</strong> {formData.fullName} ({formData.phoneNumber})</div>
                <div><strong>Birth Details:</strong> {formData.dateOfBirth} {formData.timeOfBirth ? `at ${formData.timeOfBirth}` : ''}, {formData.placeOfBirth}</div>
                <div><strong>Preferred Slot:</strong> {formData.preferredTimeSlot}</div>
                <div><strong>Mode:</strong> {formData.preferredMode === 'video' ? 'Video Call' : formData.preferredMode === 'audio' ? 'Phone Call' : 'Written PDF Dossier'}</div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5 max-w-md mx-auto">
                <a
                  href={`https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20have%20booked%20a%20Career%20Astrology%20slot%20for%20${encodeURIComponent(formData.fullName)}%20(${encodeURIComponent(formData.careerConcern)}).%20Please%20confirm.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 rounded-lg font-bold text-xs transition shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant Confirmation on WhatsApp (+91 73000-04325)</span>
                </a>
                <button
                  onClick={handleReset}
                  className="text-xs text-[#8C3411] hover:underline font-semibold py-1 cursor-pointer"
                >
                  Close & Return to Page
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
