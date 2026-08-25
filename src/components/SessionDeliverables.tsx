import React from 'react';
import { Sparkles, Compass, Calendar, TrendingUp, Home, Eye, ShieldAlert, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { SESSION_DELIVERABLES } from '../data/careerAstrologyData';

interface SessionDeliverablesProps {
  onOpenBooking: () => void;
  onOpenSampleReport: () => void;
}

export const SessionDeliverables: React.FC<SessionDeliverablesProps> = ({ onOpenBooking, onOpenSampleReport }) => {
  const getDeliverableIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#9E431E]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#9E431E]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#9E431E]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#9E431E]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#9E431E]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#9E431E]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#9E431E]" />;
    }
  };

  return (
    <section id="deliverables" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] border-b border-[#E8DCC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3E6D0] border border-[#DEBE93] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Session Deliverables & In-Depth Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            What You'll Receive in Your Career Astrology Session
          </h2>
          <p className="text-base text-[#6B4B36] leading-relaxed">
            A transparent, actionable consultation experience with complete clarity on your career roadmap, auspicious periods, and remedies.
          </p>
        </div>

        {/* 6 Deliverable Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SESSION_DELIVERABLES.map((del) => (
            <div 
              key={del.id}
              className="bg-white rounded-2xl p-6 border-2 border-[#E8DCC4] shadow-sm hover:border-[#D49B35] hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center">
                    {getDeliverableIcon(del.iconName)}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#9E431E] bg-[#FAF1DF] px-2 py-0.5 rounded border border-[#E3C69A]">
                    {del.tagline}
                  </span>
                </div>

                <h3 className="font-serif-vedic text-lg font-bold text-[#3B190C]">
                  {del.title}
                </h3>
                <p className="text-xs text-[#6B4B36] mt-2 leading-relaxed">
                  {del.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F0E4D0] space-y-1.5">
                  {del.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#442718]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D49B35] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Career Report Preview Box matching PDF */}
        <div className="mt-10 bg-gradient-to-r from-[#FAF0DE] via-[#FFFDF9] to-[#F5EAD9] rounded-2xl border-2 border-[#D49B35] p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E431E] text-white text-[10px] font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Documented Kundli Summary</span>
              </div>
              <h3 className="text-2xl font-serif-vedic font-bold text-[#3B190C]">
                Personalized Vedic Horoscope & Career Report Summary
              </h3>
              <p className="text-xs sm:text-sm text-[#6B4B36] leading-relaxed">
                Receive an authentic, easy-to-reference written summary of your D1 & D10 divisional charts, ongoing Vimshottari Dasha timeline, auspicious career transition windows, and customized remedial protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-[#422515]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>D10 Dashamsha & 10th House Breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Favorable Job Transition Windows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Certified Gemstone & Beej Mantra Plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Workstation & Office Vastu Guidelines</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#9E431E] hover:bg-[#803110] text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
                >
                  <span>Request Your Consultation Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenSampleReport}
                  className="bg-white border-2 border-[#D49B35] text-[#8C3411] hover:bg-[#FAF0DE] px-4 py-2.5 rounded-lg font-bold text-xs transition flex items-center gap-1.5 shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D49B35]" />
                  <span>View Sample Kundli Report</span>
                </button>
              </div>
            </div>

            {/* Right side report visual mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white group cursor-pointer" onClick={onOpenSampleReport}>
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80" 
                  alt="Career Horoscope Report Document"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDE08B]">Confidential PDF & Chart</span>
                    <h4 className="text-sm font-bold">Personalized Vedic Career Dossier</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Banner Matching PDF */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#6A240A] via-[#8C3411] to-[#541B07] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#D49B35]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-serif-vedic font-bold text-[#FDEBD0]">
              Looking to Get a 360-Degree Perspective on Your Career?
            </h3>
            <p className="text-xs sm:text-sm text-[#F0D5C2]">
              Gain absolute clarity on job switches, promotions, and overseas career moves.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 bg-[#FFFDF9] hover:bg-[#FAF0DE] text-[#78280D] px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
          >
            <span>Book Consultation Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
