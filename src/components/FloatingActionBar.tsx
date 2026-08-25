import React from 'react';
import { MessageCircle, Calendar, Phone } from 'lucide-react';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 items-end">
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20would%20like%20to%20inquire%20about%20Career%20Astrology."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold px-0 group-hover:px-1">
          WhatsApp Us
        </span>
      </a>

      {/* Floating Book Consultation Button */}
      <button
        onClick={onOpenBooking}
        className="bg-gradient-to-r from-[#9E431E] to-[#78280D] hover:from-[#B44E24] hover:to-[#923813] text-white py-2.5 px-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs font-bold uppercase tracking-wider border-2 border-[#D49B35] cursor-pointer"
        aria-label="Book Consultation"
      >
        <Calendar className="w-4 h-4 text-[#FDE08B]" />
        <span>Book Slot</span>
      </button>

    </div>
  );
};
