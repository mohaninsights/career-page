import React, { useState } from 'react';
import { Phone, User, BookOpen, Menu, X } from 'lucide-react';
import acharyaGaneshLogoImg from '../assets/images/acharya_ganesh_emblem_1787811434091.jpg';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalType, setLoginModalType] = useState<'login' | 'course' | null>(null);
  const [activeNav, setActiveNav] = useState<string>('Home');

  const scrollToSection = (id: string, name: string) => {
    setActiveNav(name);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', targetId: 'hero' },
    { name: 'About', targetId: 'understanding' },
    { name: 'Courses', targetId: 'masterclasses' },
    { name: 'Products', targetId: 'deliverables' },
    { name: 'Services', targetId: 'career-stages' },
    { name: 'Contact', targetId: 'faqs' },
    { name: 'Blogs', targetId: 'vedic-guide' },
  ];

  return (
    <>
      <header className="w-full bg-[#FAF7F2] border-b border-[#E8DFC8] sticky top-0 z-40 shadow-xs">
        
        {/* Top Tier: Logo on Left, Phone Numbers & Login Buttons on Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Authentic Acharya Ganesh Logo */}
          <a 
            href="#hero" 
            onClick={() => setActiveNav('Home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Circular Emblem with Acharya Ganesh Round Logo */}
              <div className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-full overflow-hidden shadow-[0_0_15px_rgba(217,119,6,0.35)] group-hover:scale-105 transition-transform flex items-center justify-center bg-[#FAF7F2] p-0.5 border border-[#D49B35]/40">
                <img 
                  src={acharyaGaneshLogoImg} 
                  alt="Acharya Ganesh Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Brand Name Text (Visible on md+) */}
              <div className="hidden sm:block">
                <div className="font-serif-vedic text-lg font-bold tracking-wide text-[#381608] leading-tight flex items-center gap-1.5">
                  <span>ACHARYA GANESH</span>
                </div>
                <p className="text-[10.5px] font-semibold text-[#8C3E14] tracking-wide">
                  ( जो सही राह दिखाए )
                </p>
                <p className="text-[9.5px] font-medium text-[#7C5338] tracking-wider uppercase">
                  By Hanish Bagga • Vedic Astrology & Guidance
                </p>
              </div>
            </div>
          </a>

          {/* Right Controls: Phone Numbers & Pill Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
            
            {/* Phone Number 1 */}
            <a
              href="tel:+917300004325"
              className="flex items-center gap-2 text-[#241711] hover:text-[#8C3411] transition group"
              title="Call Helpline 1"
            >
              <div className="w-8 h-8 rounded-full border border-[#2B1B15] flex items-center justify-center text-[#2B1B15] group-hover:border-[#8C3411] group-hover:text-[#8C3411] group-hover:bg-[#FAF0DE] transition">
                <Phone className="w-3.5 h-3.5 stroke-[2.2]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#2B1B15] group-hover:text-[#8C3411] hidden md:inline">
                +91 73000-04325
              </span>
            </a>

            {/* Phone Number 2 */}
            <a
              href="tel:+917300004326"
              className="hidden sm:flex items-center gap-2 text-[#241711] hover:text-[#8C3411] transition group"
              title="Call Helpline 2"
            >
              <div className="w-8 h-8 rounded-full border border-[#2B1B15] flex items-center justify-center text-[#2B1B15] group-hover:border-[#8C3411] group-hover:text-[#8C3411] group-hover:bg-[#FAF0DE] transition">
                <Phone className="w-3.5 h-3.5 stroke-[2.2]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#2B1B15] group-hover:text-[#8C3411]">
                +91 73000-04326
              </span>
            </a>

            {/* Log in Pill Button */}
            <button
              onClick={() => setLoginModalType('login')}
              className="flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full border border-[#2B1B15] text-[#2B1B15] hover:bg-[#2B1B15] hover:text-white font-medium text-xs sm:text-sm transition cursor-pointer"
            >
              <User className="w-3.5 h-3.5 fill-current" />
              <span>Log in</span>
            </button>

            {/* Course Login Pill Button */}
            <button
              onClick={() => setLoginModalType('course')}
              className="hidden xs:flex items-center px-4 sm:px-5 py-1.5 rounded-full border border-[#2B1B15] text-[#2B1B15] hover:bg-[#8C3411] hover:border-[#8C3411] hover:text-white font-medium text-xs sm:text-sm transition cursor-pointer"
            >
              <span>Course Login</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#2B1B15] hover:bg-[#EDE3CF] rounded-lg transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Bottom Tier: Centered Navigation Bar */}
        <div className="border-t border-[#E8DFC8]/80 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 py-2.5 text-sm font-semibold text-[#301F17]">
              {navItems.map((item) => {
                const isActive = activeNav === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.targetId, item.name)}
                    className={`transition-colors duration-150 relative py-1 cursor-pointer ${
                      isActive 
                        ? 'text-[#8C3411] font-bold' 
                        : 'hover:text-[#8C3411] text-[#301F17]'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C3411] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-t border-[#E8DFC8] px-4 py-4 space-y-3 animate-fadeIn shadow-lg">
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-[#301F17]">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.targetId, item.name)}
                  className="text-left px-3 py-2 rounded-lg hover:bg-[#EFE3CD] transition cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E8DFC8] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#8C3411] hover:bg-[#722A0D] text-white py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition shadow-xs text-center cursor-pointer"
              >
                Book 1-on-1 Consultation
              </button>

              <div className="flex items-center justify-between gap-2 pt-1 text-xs text-[#523526]">
                <a href="tel:+917300004325" className="flex items-center gap-1.5 font-bold">
                  <Phone className="w-3.5 h-3.5 text-[#8C3411]" />
                  <span>+91 73000-04325</span>
                </a>
                <a href="tel:+917300004326" className="flex items-center gap-1.5 font-bold">
                  <Phone className="w-3.5 h-3.5 text-[#8C3411]" />
                  <span>+91 73000-04326</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </header>

      {/* Login / Course Login Interactive Modal */}
      {loginModalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div 
            className="bg-[#FFFDF9] rounded-2xl max-w-md w-full p-6 border-2 border-[#D49B35] shadow-2xl relative text-[#2C1810]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLoginModalType(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF0DE] hover:bg-[#EEDBC0] text-[#7A3614] flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-2 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#FAF0DE] border border-[#D49B35] flex items-center justify-center mx-auto text-[#8C3411]">
                {loginModalType === 'login' ? <User className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-serif-vedic font-bold text-[#3B190C]">
                {loginModalType === 'login' ? 'Acharya Ganesh Portal Login' : 'Vedic Astrology Course Portal'}
              </h3>
              <p className="text-xs text-[#7A5B48]">
                {loginModalType === 'login' 
                  ? 'Access your consultation history, Kundli dossiers, and appointment schedules.'
                  : 'Access your enrolled masterclasses, Vedic lessons, and study materials.'}
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Login successful! Redirecting to student dashboard...'); setLoginModalType(null); }} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#482819] mb-1">
                  Registered Email or Phone *
                </label>
                <input
                  type="text"
                  required
                  placeholder="name@example.com or +91 98765..."
                  className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#8C3411] focus:outline-none"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-[#482819]">Password *</label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to registered email.'); }} className="text-[11px] text-[#8C3411] hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-[#FAF6EE] border border-[#D9C4A6] rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#8C3411] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8C3411] hover:bg-[#722A0D] text-white py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition shadow-sm mt-2 cursor-pointer"
              >
                Sign In
              </button>

              <div className="text-center pt-2 text-xs text-[#7A5B48]">
                New student or client?{' '}
                <button
                  type="button"
                  onClick={() => { setLoginModalType(null); onOpenBooking(); }}
                  className="text-[#8C3411] font-bold hover:underline cursor-pointer"
                >
                  Book a Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
