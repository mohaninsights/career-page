import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { FAQS } from '../data/careerAstrologyData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(f => 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5EDE0] border-b border-[#E3D4B6]">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAD8BF] border border-[#D9C4A6] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Vedic Career Guidance Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
            Frequently Asked Questions About Career Astrology
          </h2>
          <p className="text-base text-[#6B4B36] leading-relaxed">
            Find answers to common questions regarding career astrology consultations, birth chart requirements, and remedies.
          </p>

          {/* Quick Search */}
          <div className="pt-2 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#A88C74] absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search career questions (e.g. 10th house, timing, promotion)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#D9C4A6] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#2C1810] focus:ring-2 focus:ring-[#9E431E] focus:outline-none placeholder:text-[#A89482] shadow-xs"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen ? 'bg-white border-[#D49B35] shadow-md' : 'bg-white/80 border-[#E3D4B8] hover:border-[#D49B35]'}`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-vedic text-base sm:text-lg font-bold text-[#3B190C] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition ${isOpen ? 'bg-[#9E431E] text-white' : 'bg-[#FAF0DE] text-[#9E431E]'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C3B28] leading-relaxed border-t border-[#F5EAD9]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout Box matching PDF */}
        <div className="rounded-2xl bg-gradient-to-r from-[#FAF0DE] to-[#F2DFBC] border-2 border-[#D49B35] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="font-serif-vedic text-base font-bold text-[#3B190C]">
              Have a specific question about your career Kundli?
            </h4>
            <p className="text-xs text-[#6B4B36]">
              Our astrological desk is available 7 days a week for immediate assistance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20have%20a%20question%20regarding%20Career%20Astrology."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2 rounded-lg font-bold text-xs transition shadow-xs flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:+917300004325"
              className="bg-[#9E431E] hover:bg-[#803110] text-white px-4 py-2 rounded-lg font-bold text-xs transition shadow-xs flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
