import React, { useState } from 'react';
import { Youtube, Play, Clock, Eye, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface YouTubeVideoSectionProps {
  onOpenBooking?: () => void;
}

export const YouTubeVideoSection: React.FC<YouTubeVideoSectionProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const video = {
    youtubeId: '3JZ_D3ELwOQ',
    title: 'Watch Acharya Ganesh Explain Vedic Career Astrology',
    duration: '16:40',
    durationText: 'Duration: 16m 40s',
    channel: 'Acharya Ganesh Official'
  };

  return (
    <section id="youtube-showcase" className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF6EE] via-[#FFFDF9] to-[#F5EDE0] border-b border-[#E8DCC2]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Bar with YouTube Channel Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E3D4B8]">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5E5] border border-[#FFA8A8] text-[#CC0000] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Youtube className="w-4 h-4 text-[#FF0000]" />
              <span>FEATURED VIDEO MASTERCLASS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
              Watch Acharya Ganesh Explain Vedic Career Astrology
            </h2>
          </div>

          {/* YouTube Channel Subscribe Badge */}
          <div className="shrink-0 flex items-center gap-3 bg-white px-3.5 py-2 rounded-2xl border-2 border-[#E8DCC4] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-xs">
              <Youtube className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#3B190C]">Acharya Ganesh Official</div>
              <div className="text-[10px] text-[#8C6B52] font-medium">116K+ Subscribers</div>
            </div>
            <a
              href="https://www.youtube.com/@acharyaganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 bg-[#FF0000] hover:bg-[#CC0000] text-white px-3 py-1 rounded-lg text-xs font-bold transition shadow-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Subscribe</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Centered Single YouTube Video Player */}
        <div className="mt-6">
          <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#D49B35] bg-[#1A0B05] group">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full cursor-pointer bg-gradient-to-r from-[#2A0E05] via-[#451809] to-[#1F0903]" onClick={() => setIsPlaying(true)}>
                
                {/* Visual Custom Masterclass Thumbnail */}
                <div className="absolute inset-0 flex items-center justify-between p-6 sm:p-10 overflow-hidden">
                  
                  {/* Left content banner */}
                  <div className="max-w-lg space-y-3 z-10">
                    <div className="inline-flex items-center gap-2 bg-[#FFDF00] text-[#4A1D05] px-3.5 py-1 rounded-md text-xs sm:text-sm font-black uppercase tracking-wider shadow-md">
                      <Sparkles className="w-3.5 h-3.5 fill-current text-[#A73A00]" />
                      <span>HD MASTERCLASS</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-serif-vedic drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                      कुंडली से 30 SEC में जाने अपना <span className="text-[#FFDF00] underline decoration-[#FF0000]">CAREER</span>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#FDEBD0] font-medium max-w-md drop-shadow">
                      10th House Karma Bhava • Sun, Saturn & Jupiter Combinations • D10 Dashamsha Analysis
                    </p>

                    <div className="flex items-center gap-4 text-xs text-[#FFDF00] font-bold pt-1">
                      <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                        <Eye className="w-3.5 h-3.5 text-[#FFDF00]" />
                        <span>Acharya Ganesh Official</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                        <Clock className="w-3.5 h-3.5 text-[#FFDF00]" />
                        <span>Duration: 16m 40s</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side Acharya Hanish Bagga portrait badge */}
                  <div className="hidden sm:flex flex-col items-center justify-center relative z-10 pr-4">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#FFDF00] overflow-hidden shadow-2xl bg-[#5C230B] flex items-center justify-center">
                      <div className="text-center p-3">
                        <span className="text-2xl sm:text-3xl font-bold text-[#FFDF00]">Acharya</span>
                        <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Hanish Bagga</div>
                        <div className="text-[10px] text-[#FDEBD0] mt-1">17+ Yrs Exp</div>
                      </div>
                    </div>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl group-hover:scale-115 transition-all duration-300 ring-4 ring-white/50">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 text-white" />
                    </div>
                    <span className="mt-3 text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase bg-black/75 px-4 py-1 rounded-full backdrop-blur-xs border border-white/20 shadow-lg">
                      Click to Play Masterclass (16:40)
                    </span>
                  </div>

                </div>

                <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
              </div>
            )}
          </div>

          {/* Clean Action Bar Below Video */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-[#63240A] hover:bg-[#4E1B07] text-white py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
            >
              <span>Book 1-on-1 Consultation with Acharya Ganesh</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

