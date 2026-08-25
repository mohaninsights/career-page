import React, { useState } from 'react';
import { Phone, Mail, Clock, Calendar, Menu, X, Shield, Star, ChevronRight, Award, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[#FAF6EE] border-b border-[#E8DCB8]/60 sticky top-0 z-40 shadow-xs">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-[#6E2810] text-[#FDEBD0] text-xs py-2 px-4 border-b border-[#8C3E14]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href="tel:+917300004325" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Call Acharya Ganesh Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span className="font-semibold tracking-wide">+91 73000-04325 / +91 73000-04326</span>
            </a>
            <span className="hidden sm:inline text-[#E5A93C]/40">|</span>
            <a 
              href="mailto:consult@hanishbagga.com" 
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>consult@hanishbagga.com</span>
            </a>
            <span className="hidden lg:inline text-[#E5A93C]/40">|</span>
            <span className="hidden lg:flex items-center gap-1 text-[#E2D4B7]">
              <Clock className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>Daily Consultations: 10:00 AM – 8:00 PM IST</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20would%20like%20to%20book%20a%20Career%20Astrology%20Consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-2.5 py-1 rounded-full text-[11px] font-semibold transition shadow-xs"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-[#D49B35] hover:bg-[#E5A93C] text-[#2C1810] px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider transition shadow-xs"
            >
              Book Consult
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#8C3411] to-[#5C1E0A] flex items-center justify-center text-white border-2 border-[#D49B35] shadow-md group-hover:scale-105 transition-transform">
            <span className="font-cinzel text-lg font-bold text-[#FDEBD0]">AG</span>
          </div>
          <div>
            <div className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#3D1A0E] leading-tight flex items-center gap-2">
              <span>ACHARYA GANESH</span>
              <span className="bg-[#FAF1DF] text-[#9E431E] border border-[#E3C69A] text-[10px] font-sans font-semibold px-1.5 py-0.5 rounded">VEDIC</span>
            </div>
            <p className="text-[11px] font-medium text-[#7D5B46] tracking-wide">
              Vedic Astrology & Vastu Consultancy
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#4A2B1D]">
          <button onClick={() => scrollToSection('hero')} className="hover:text-[#9E431E] transition-colors py-1">
            Home
          </button>
          <button onClick={() => scrollToSection('understanding')} className="hover:text-[#9E431E] transition-colors py-1">
            About
          </button>
          <button onClick={() => scrollToSection('career-stages')} className="hover:text-[#9E431E] transition-colors py-1">
            Career Services
          </button>
          <button onClick={() => scrollToSection('kundli-wheel')} className="hover:text-[#9E431E] transition-colors py-1 flex items-center gap-1">
            <span>Kundli Reading</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E431E]"></span>
          </button>
          <button onClick={() => scrollToSection('deliverables')} className="hover:text-[#9E431E] transition-colors py-1">
            Consultations
          </button>
          <button onClick={() => scrollToSection('masterclasses')} className="hover:text-[#9E431E] transition-colors py-1">
            Masterclasses
          </button>
          <button onClick={() => scrollToSection('faqs')} className="hover:text-[#9E431E] transition-colors py-1">
            FAQs
          </button>
          <button 
            onClick={() => scrollToSection('vedic-guide')} 
            className="text-[#9E431E] font-semibold bg-[#F5EADB] px-2.5 py-1 rounded border border-[#E3C69A] hover:bg-[#EBDCC8] transition"
          >
            Vedic Insights
          </button>
        </nav>

        {/* Right Action */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="bg-[#9E431E] hover:bg-[#803110] text-white px-4 py-2 rounded-md font-semibold text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-md text-[#6E2E13] hover:bg-[#F2E8D5] transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF6EE] border-b border-[#E3D4B6] px-4 py-4 space-y-3 animate-fadeIn shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#4A2B1D]">
            <button onClick={() => scrollToSection('hero')} className="text-left px-3 py-2 rounded hover:bg-[#F0E4D0]">Home</button>
            <button onClick={() => scrollToSection('understanding')} className="text-left px-3 py-2 rounded hover:bg-[#F0E4D0]">About Acharya Ganesh</button>
            <button onClick={() => scrollToSection('career-stages')} className="text-left px-3 py-2 rounded hover:bg-[#F0E4D0]">Career Stages Guidance</button>
            <button onClick={() => scrollToSection('kundli-wheel')} className="text-left px-3 py-2 rounded hover:bg-[#F0E4D0]">Interactive Kundli Chart</button>
            <button onClick={() => scrollToSection('deliverables')} className="text-left px-3 py-2 rounded hover:bg-[#F0E4D0]">Consultation Deliverables</button>
            <button onClick={() => scrollToSection('masterclasses')} className="text-left px-3 py-2 rounded hover:bg-[#F0E4D0]">Video Masterclasses</button>
            <button onClick={() => scrollToSection('vedic-guide')} className="text-left px-3 py-2 rounded hover:bg-[#F0E4D0]">Houses & Planets in Career</button>
            <button onClick={() => scrollToSection('faqs')} className="text-left px-3 py-2 rounded hover:bg-[#F0E4D0]">Frequently Asked Questions</button>
          </div>
          <div className="pt-2 border-t border-[#E3D4B6] flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full bg-[#9E431E] hover:bg-[#803110] text-white py-2.5 rounded-md font-semibold text-xs uppercase tracking-wider text-center"
            >
              Book Career Consultation Slot
            </button>
            <a
              href="https://wa.me/917300004325"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 rounded-md font-semibold text-xs text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp (+91 73000-04325)
            </a>
          </div>
        </div>
      )}

      {/* Breadcrumb line matching PDF */}
      <div className="bg-[#F5EDE0] border-t border-[#E8DCBC] py-1.5 px-4 text-[11px] text-[#7A5A43]">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
          <span className="hover:text-[#9E431E] cursor-pointer" onClick={() => scrollToSection('hero')}>Home</span>
          <ChevronRight className="w-3 h-3 text-[#A88C74]" />
          <span>Career Astrology & Kundli Guidance</span>
          <ChevronRight className="w-3 h-3 text-[#A88C74]" />
          <span className="font-semibold text-[#8C3814]">Vedic Career Astrology Consultation</span>
        </div>
      </div>
    </header>
  );
};
