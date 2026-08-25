import React, { useState } from 'react';
import { Phone, User, BookOpen, Menu, X } from 'lucide-react';

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
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              {/* Circular Emblem with Zodiac Wheel & Meditating Rishi */}
              <div className="relative flex flex-col items-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                    {/* Outer Zodiac / Ray Ring */}
                    <circle cx="50" cy="50" r="46" fill="#FDF9F0" stroke="#7A3614" strokeWidth="2.5" strokeDasharray="3 2" />
                    <circle cx="50" cy="50" r="41" fill="#F8EFE0" stroke="#9E4E24" strokeWidth="1.5" />
                    
                    {/* Radial astrological spokes */}
                    {[...Array(12)].map((_, i) => (
                      <line
                        key={i}
                        x1="50"
                        y1="50"
                        x2={50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}
                        y2={50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}
                        stroke="#D4A060"
                        strokeWidth="0.75"
                        opacity="0.6"
                      />
                    ))}

                    {/* Inner Sun / Aura circle */}
                    <circle cx="50" cy="46" r="28" fill="#F3DFBE" stroke="#C9883E" strokeWidth="1" />
                    
                    {/* Meditating Rishi / Acharya Silhouette & Saffron Robe */}
                    {/* Aura rays */}
                    <circle cx="50" cy="38" r="14" fill="#FCEACD" />
                    
                    {/* Head / Bun */}
                    <circle cx="50" cy="31" r="3.5" fill="#5A230B" />
                    {/* Head bun (Topknot) */}
                    <circle cx="50" cy="26.5" r="2.2" fill="#5A230B" />
                    {/* Face & Beard */}
                    <path d="M46 31 Q50 39 54 31 Q52 41 50 43 Q48 41 46 31 Z" fill="#5A230B" />
                    
                    {/* Saffron Angavastram / Body In Meditation */}
                    <path 
                      d="M42 41 Q50 37 58 41 L62 55 Q50 58 38 55 Z" 
                      fill="#D96821" 
                    />
                    {/* Folded legs (Padmasana) */}
                    <path 
                      d="M36 53 Q50 50 64 53 Q66 59 50 59 Q34 59 36 53 Z" 
                      fill="#8C3E14" 
                    />
                    {/* Namaste/Dhyan mudra hands */}
                    <ellipse cx="50" cy="47" rx="3.5" ry="2" fill="#E8A763" />
                  </svg>

                  {/* Ribbon Banner at base */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 text-center pointer-events-none">
                    <div className="bg-gradient-to-r from-[#EED5A5] via-[#FFF3D6] to-[#EED5A5] border border-[#B37837] rounded-sm py-0.5 px-1.5 shadow-xs">
                      <span className="font-serif-vedic text-[9px] font-bold text-[#4E1E09] tracking-tight block uppercase leading-none">
                        Acharya Ganesh
                      </span>
                    </div>
                    <div className="text-[7.5px] font-sans text-[#753818] font-semibold -mt-0.5 tracking-tighter">
                      ( जो सही राह दिखाए )
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand Name Text (Visible on md+) */}
              <div className="hidden sm:block pl-2">
                <div className="font-serif-vedic text-lg font-bold tracking-wide text-[#381608] leading-tight flex items-center gap-1.5">
                  <span>ACHARYA GANESH</span>
                </div>
                <p className="text-[10px] font-medium text-[#7C5338] tracking-wider uppercase">
                  Vedic Career Astrology & Guidance
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
