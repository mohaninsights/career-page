import React, { useState } from 'react';
import { Play, Youtube, Clock, Eye, Sparkles, CheckCircle2, Bookmark, Share2 } from 'lucide-react';
import { VIDEO_GUIDES } from '../data/careerAstrologyData';
import { VideoGuide } from '../types';

export const VideoMasterclasses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Masterclasses');
  const [activeVideo, setActiveVideo] = useState<VideoGuide>(VIDEO_GUIDES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const categories = [
    'All Masterclasses',
    'Job Change Timing',
    'Govt vs Pvt Job',
    'Business vs Job',
    'Dasha & Transit',
    'Workplace & Remedies'
  ];

  const filteredVideos = selectedCategory === 'All Masterclasses'
    ? VIDEO_GUIDES
    : VIDEO_GUIDES.filter(v => v.category === selectedCategory);

  const handleSelectVideo = (video: VideoGuide) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  return (
    <section id="masterclasses" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] border-b border-[#E8DCC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header & YouTube Subscribe Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E3D4B8]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3E6D0] border border-[#DEBE93] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
              <Youtube className="w-3.5 h-3.5 text-[#FF0000]" />
              <span>Career Astrology Masterclass Series</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight">
              Watch Career Astrology Video Guides & Insights
            </h2>
            <p className="text-sm text-[#6B4B36]">
              Explore in-depth video masterclasses by Acharya Hanish Bagga on career timing, job switches, and Vedic remedies.
            </p>
          </div>

          {/* YouTube Subscribe Pill */}
          <div className="shrink-0 flex items-center gap-3 bg-white p-2.5 rounded-xl border border-[#E8DCC4] shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3B190C]">
              <div className="w-7 h-7 rounded-full bg-[#FF0000] flex items-center justify-center text-white">
                <Youtube className="w-4 h-4" />
              </div>
              <div>
                <div>Acharya Ganesh</div>
                <div className="text-[10px] text-[#8C6B52] font-normal">116K+ Subscribers</div>
              </div>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-xs"
            >
              Subscribe
            </a>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${selectedCategory === cat ? 'bg-[#9E431E] text-white shadow-xs' : 'bg-white text-[#5E3B27] border border-[#E3D4B8] hover:bg-[#FAF0DE]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Player & Playlist Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Active Video Player */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-[#D49B35] bg-[#1A0B05] group">
              {isPlaying ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#240C04] text-white">
                  <div className="w-16 h-16 rounded-full bg-[#9E431E] flex items-center justify-center mb-3 animate-pulse">
                    <Play className="w-8 h-8 fill-current ml-1 text-white" />
                  </div>
                  <h4 className="text-lg font-bold font-serif-vedic text-[#FDE08B]">{activeVideo.title}</h4>
                  <p className="text-xs text-[#E8D0BD] mt-2 max-w-md">Playing Masterclass preview with Acharya Hanish Bagga. Click timestamps below to skip chapters.</p>
                  <button 
                    onClick={() => setIsPlaying(false)} 
                    className="mt-4 text-xs text-[#D49B35] underline cursor-pointer"
                  >
                    Return to Video Overview
                  </button>
                </div>
              ) : (
                <>
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-black/30 to-transparent flex flex-col justify-between p-6">
                    <div className="self-start bg-[#9E431E] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {activeVideo.category}
                    </div>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="self-center w-16 h-16 rounded-full bg-[#9E431E]/90 group-hover:bg-[#E5A93C] group-hover:scale-110 text-white flex items-center justify-center transition-all shadow-2xl border-2 border-white cursor-pointer"
                      aria-label="Play Masterclass"
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </button>
                    <div className="flex items-center justify-between text-xs text-[#FAF4EB]">
                      <span className="font-semibold">{activeVideo.views}</span>
                      <span className="bg-black/60 px-2 py-0.5 rounded">{activeVideo.duration}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Video Details */}
            <div className="bg-white rounded-xl p-5 border border-[#E8DCC4] shadow-xs space-y-3">
              <h3 className="text-xl font-serif-vedic font-bold text-[#3B190C]">
                {activeVideo.title}
              </h3>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                {activeVideo.description}
              </p>

              {/* Topics / Timestamps */}
              <div className="pt-3 border-t border-[#F0E4D0]">
                <div className="text-xs font-bold text-[#9E431E] mb-2 uppercase tracking-wide">
                  Masterclass Chapters & Timestamp Timetable:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeVideo.topics.map((topic, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={() => setIsPlaying(true)}
                      className="text-left text-xs text-[#4E2F1F] bg-[#FAF6EE] hover:bg-[#FAF0DE] p-2 rounded border border-[#E3D4B8] transition flex items-center gap-1.5"
                    >
                      <Clock className="w-3.5 h-3.5 text-[#D49B35] shrink-0" />
                      <span className="truncate">{topic}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Playlist Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-[#8C3E14] uppercase tracking-wider flex items-center justify-between px-1">
              <span>Related Career Masterclasses ({filteredVideos.length})</span>
              <span className="text-[10px] text-[#A88C74]">Click to Watch</span>
            </div>

            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {filteredVideos.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => handleSelectVideo(vid)}
                  className={`p-3 rounded-xl border transition flex gap-3 cursor-pointer ${activeVideo.id === vid.id ? 'bg-[#FAF0DE] border-[#D49B35] shadow-xs' : 'bg-white border-[#E8DCC4] hover:border-[#D49B35] hover:bg-[#FAF8F2]'}`}
                >
                  <div className="relative w-28 h-18 rounded-lg overflow-hidden shrink-0 bg-[#3B190C]">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] px-1 rounded font-mono">
                      {vid.duration}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between overflow-hidden">
                    <h4 className="text-xs font-bold text-[#3B190C] line-clamp-2 leading-snug">
                      {vid.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-[#7E5D47] mt-1">
                      <span>{vid.views}</span>
                      <span>•</span>
                      <span className="text-[#9E431E] font-medium">{vid.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
