import React from 'react';
import { X, FileText, CheckCircle2, Shield, Download, Printer, Award, Compass, Star } from 'lucide-react';
import { SAMPLE_KUNDLI_DETAILS } from '../data/careerAstrologyData';

interface SampleReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const SampleReportModal: React.FC<SampleReportModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#D49B35] shadow-2xl relative text-[#2C1810]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF0DE] hover:bg-[#EEDBC0] text-[#7A3614] flex items-center justify-center transition z-10"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#6E2810] to-[#541E0A] p-6 text-white rounded-t-xl">
          <div className="flex items-center gap-2">
            <span className="bg-[#D49B35] text-[#2C1810] font-bold text-[10px] uppercase px-2.5 py-0.5 rounded">
              Confidential Vedic Dossier
            </span>
            <span className="text-xs text-[#FDE08B]">Sample Preview</span>
          </div>
          <h3 className="text-2xl font-serif-vedic font-bold text-[#FAF4EB] mt-1">
            Personalized Vedic Career & Kundli Dossier
          </h3>
          <p className="text-xs text-[#E5D2C2]">
            Comprehensive Analysis Prepared by Acharya Hanish Bagga
          </p>
        </div>

        {/* Report Content */}
        <div className="p-6 space-y-6">
          
          {/* Client summary box */}
          <div className="bg-[#FAF6EE] rounded-xl p-4 border border-[#E3D4B8] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <span className="text-[#8C6B52] block text-[10px] uppercase font-bold">Client Name</span>
              <strong className="text-[#3B190C]">{SAMPLE_KUNDLI_DETAILS.clientName}</strong>
            </div>
            <div>
              <span className="text-[#8C6B52] block text-[10px] uppercase font-bold">Ascendant (Lagna)</span>
              <strong className="text-[#3B190C]">{SAMPLE_KUNDLI_DETAILS.ascendant}</strong>
            </div>
            <div>
              <span className="text-[#8C6B52] block text-[10px] uppercase font-bold">Primary 10th Lord</span>
              <strong className="text-[#3B190C]">{SAMPLE_KUNDLI_DETAILS.tenthLord}</strong>
            </div>
            <div>
              <span className="text-[#8C6B52] block text-[10px] uppercase font-bold">Amatyakaraka (AmK)</span>
              <strong className="text-[#3B190C]">{SAMPLE_KUNDLI_DETAILS.amatyakaraka}</strong>
            </div>
            <div className="col-span-2">
              <span className="text-[#8C6B52] block text-[10px] uppercase font-bold">Ongoing Vimshottari Cycle</span>
              <strong className="text-[#9E431E]">{SAMPLE_KUNDLI_DETAILS.currentDasha}</strong>
            </div>
          </div>

          {/* D10 Status */}
          <div className="space-y-2">
            <h4 className="font-serif-vedic text-base font-bold text-[#3B190C] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D49B35]" />
              <span>Dashamsha (D10) Divisional Evaluation</span>
            </h4>
            <div className="p-3.5 bg-[#FAF0DE] rounded-lg border border-[#E3C9A0] text-xs text-[#523422] leading-relaxed">
              {SAMPLE_KUNDLI_DETAILS.d10Status}
            </div>
          </div>

          {/* Key Strategic Highlights */}
          <div className="space-y-2">
            <h4 className="font-serif-vedic text-base font-bold text-[#3B190C] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D49B35]" />
              <span>Key Astrological Forecasts & Timings</span>
            </h4>
            <div className="space-y-2">
              {SAMPLE_KUNDLI_DETAILS.keyHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#442718] p-2 bg-white rounded border border-[#E8DCC4]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span className="leading-snug">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-4 border-t border-[#F0E4D0] flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => { onClose(); onOpenBooking(); }}
              className="w-full sm:w-auto bg-[#9E431E] hover:bg-[#803110] text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer"
            >
              Order Your Customized Report
            </button>
            <button
              onClick={() => alert('Sample report downloaded.')}
              className="w-full sm:w-auto bg-[#FAF0DE] hover:bg-[#EEDBC0] text-[#7A3614] px-4 py-2.5 rounded-lg font-bold text-xs transition flex items-center justify-center gap-1.5 border border-[#E3C9A0] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Sample</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
