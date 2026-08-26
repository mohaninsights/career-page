import React, { useState } from 'react';
import { Youtube, Play, Clock, Eye, ArrowRight, ExternalLink } from 'lucide-react';

interface YouTubeVideoSectionProps {
  onOpenBooking?: () => void;
}

export const YouTubeVideoSection: React.FC<YouTubeVideoSectionProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const video = {
    youtubeId: '3JZ_D3ELwOQ',
    title: '10th House in Astrology: Karma Bhava, Job Growth & D10 Kundli Breakdown',
    duration: '28:12',
    views: '312K+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
  };

  return (
    <section id="youtube-showcase" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF6EE] via-[#FFFDF9] to-[#F5EDE0] border-b border-[#E8DCC2]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Bar with YouTube Channel Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E3D4B8]">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5E5] border border-[#FFA8A8] text-[#CC0000] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Youtube className="w-4 h-4 text-[#FF0000]" />
              <span>Featured Career Masterclass</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
              Watch: 10th House & Career Astrology Masterclass
            </h2>
          </div>

          {/* YouTube Channel Subscribe Badge */}
          <div className="shrink-0 flex items-center gap-3 bg-white px-3.5 py-2 rounded-2xl border-2 border-[#E8DCC4] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-xs">
              <Youtube className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#3B190C]">Acharya Ganesh</div>
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
        <div className="mt-8">
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
              <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-between p-5 sm:p-8">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#FF0000] text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                      <Youtube className="w-3.5 h-3.5" />
                      <span>YouTube Masterclass</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/75 text-white text-xs font-mono backdrop-blur-xs flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FDE08B]" />
                      <span>{video.duration}</span>
                    </span>
                  </div>

                  {/* Center Play Button */}
                  <div className="self-center flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-[#FF0000]/95 hover:bg-[#FF0000] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 ring-4 ring-white/30">
                      <Play className="w-8 h-8 sm:w-11 sm:h-11 fill-current ml-1 text-white" />
                    </div>
                    <span className="mt-3 text-xs font-bold text-white tracking-wider uppercase bg-black/60 px-4 py-1 rounded-full backdrop-blur-xs">
                      Click to Play Video
                    </span>
                  </div>

                  {/* Bottom Title on Video */}
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#FDE08B] font-semibold mb-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{video.views}</span>
                    </div>
                    <h3 className="text-white font-serif-vedic text-base sm:text-xl font-bold leading-snug drop-shadow-md">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Clean Action Bar Below Video */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-[#9E431E] hover:bg-[#803110] text-white py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
            >
              <span>Book 1-on-1 Consultation with Acharya ji</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
