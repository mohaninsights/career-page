import React from 'react';
import { 
  BookOpen, Sparkles, Compass, Clock, CheckCircle2, 
  Briefcase, Building2, Landmark, ShieldCheck, Gem, 
  Flame, UserCheck, LayoutGrid, ArrowRight, HelpCircle 
} from 'lucide-react';

interface VedicKnowledgeGuideProps {
  onOpenBooking: () => void;
}

export const VedicKnowledgeGuide: React.FC<VedicKnowledgeGuideProps> = ({ onOpenBooking }) => {
  const careerHouses = [
    {
      house: '10th House',
      vedicName: 'Karma Bhava',
      significance: 'Profession, responsibilities, authority, reputation and public role',
      tag: 'Primary Career Anchor'
    },
    {
      house: '6th House',
      vedicName: 'Seva Bhava',
      significance: 'Employment, competition, service, workplace challenges and routine work',
      tag: 'Job & Daily Service'
    },
    {
      house: '2nd House',
      vedicName: 'Dhana Bhava',
      significance: 'Earned income, accumulated resources, speech and financial stability',
      tag: 'Wealth & Assets'
    },
    {
      house: '11th House',
      vedicName: 'Labha Bhava',
      significance: 'Gains, salary growth, professional networks and fulfillment of ambitions',
      tag: 'Salary & Promotions'
    },
    {
      house: '7th House',
      vedicName: 'Yuvati Bhava',
      significance: 'Business, partnerships, trade and dealings with the public',
      tag: 'Trade & Alliances'
    },
    {
      house: '3rd House',
      vedicName: 'Sahaja Bhava',
      significance: 'Initiative, communication, skills, courage and independent effort',
      tag: 'Self-Enterprise'
    }
  ];

  return (
    <section id="vedic-guide" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FBF7F0] border-b border-[#E3D4B6]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION SUPER-HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FAF0DE] border border-[#E8D6B8] text-[#8C3E14] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>Vedic Career Astrology Guide & Knowledge Hub</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight leading-[1.2]">
            How Vedic Astrology Studies Your Professional Life
          </h2>
          
          <div className="space-y-2 text-xs sm:text-sm text-[#5C3F2E] max-w-3xl mx-auto leading-relaxed">
            <p>
              Your career is influenced by education, skills, experience, choices, economic conditions, opportunities and personal effort. Vedic astrology provides an additional framework for understanding professional tendencies and timing through the birth chart.
            </p>
            <p className="font-semibold text-[#8C3E14]">
              A complete career astrology analysis does not depend on a single planet or house. Multiple factors are studied together before drawing conclusions.
            </p>
          </div>
        </div>

        {/* 1 & 2: WHAT IS CAREER ASTROLOGY & HOW IT WORKS BY DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: What Is Career Astrology? */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#E8DCC4] shadow-xs hover:border-[#D49B35] transition-all space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#8C3E14]">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif-vedic font-bold text-[#3B190C]">
                What Is Career Astrology?
              </h3>
            </div>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#5C3F2E] leading-relaxed">
              <p>
                In the professional domain, an astrologer looks at the houses related to career, work, income, gains, initiative, business, education and fortune. Personalised career predictions, thus, call for more than merely reading the Sun sign.
              </p>
              <p>
                The scheduling aspect is also crucial. <strong className="text-[#3B190C] font-semibold">Vimshottari Dasha, Antardasha and the important planetary transits</strong> are studied to determine the time when certain career themes will get more active. This is the difference between career prediction astrology and a daily or monthly horoscope.
              </p>
            </div>
          </div>

          {/* Card 2: How Does Career Astrology by Date of Birth Work? */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#E8DCC4] shadow-xs hover:border-[#D49B35] transition-all space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#8C3E14]">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif-vedic font-bold text-[#3B190C]">
                How Does Career Astrology by Date of Birth Work?
              </h3>
            </div>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#5C3F2E] leading-relaxed">
              <p>
                Your date of birth determines the positions of your planets for the day you were born. But birth time and place are generally also needed for an exact professional analysis.
              </p>
              <p>
                Career astrology by date of birth involves looking at the position of planets in the horoscope of an individual and not only his zodiac sign. The ascendant changes approximately every two hours; therefore, exact birth time is critical for house calculations.
              </p>
              <p className="text-[11px] sm:text-xs text-[#8C3E14] font-semibold bg-[#FAF1DF] p-2 rounded-lg border border-[#E8D6B8]">
                Therefore, a full career reading by date and time provides significantly more tailored insight than a generic sun sign reading.
              </p>
            </div>
          </div>

        </div>

        {/* 3. WHICH HOUSES ARE IMPORTANT FOR CAREER PREDICTION ASTROLOGY */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E8DCC4] shadow-md space-y-6">
          
          <div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF0DE] border border-[#E3C9A0] text-[#8C3E14] text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-[#9E431E]" />
              <span>Astrological Architecture</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-vedic font-bold text-[#3B190C]">
              Which Houses Are Important for Career Prediction Astrology?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B36] mt-1">
              Several houses become important when studying professional life in a birth chart:
            </p>
          </div>

          {/* Structured Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#E3D4B8]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#57220C] text-[#FFF5EA]">
                  <th className="p-3.5 sm:p-4 font-bold border-b border-[#733112]">House</th>
                  <th className="p-3.5 sm:p-4 font-bold border-b border-[#733112]">Vedic Name</th>
                  <th className="p-3.5 sm:p-4 font-bold border-b border-[#733112]">Career Significance</th>
                  <th className="p-3.5 sm:p-4 font-bold border-b border-[#733112] text-right">Domain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAD8BF] text-[#3B190C]">
                {careerHouses.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FCF9F3]' : 'bg-white hover:bg-[#FAF3E6]'}>
                    <td className="p-3.5 sm:p-4 font-bold text-[#8C3E14] whitespace-nowrap">
                      {item.house}
                    </td>
                    <td className="p-3.5 sm:p-4 font-serif-vedic font-bold text-[#4A2511]">
                      {item.vedicName}
                    </td>
                    <td className="p-3.5 sm:p-4 text-[#523321] leading-relaxed">
                      {item.significance}
                    </td>
                    <td className="p-3.5 sm:p-4 text-right">
                      <span className="inline-block text-[10px] font-bold text-[#8C3E14] bg-[#FAF0DE] px-2.5 py-1 rounded-md border border-[#E3C9A0] whitespace-nowrap">
                        {item.tag}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footnote Callout */}
          <div className="p-4 rounded-xl bg-[#FAF3E6] border border-[#E3D4B8] text-xs sm:text-sm text-[#5C3F2E] leading-relaxed space-y-1">
            <strong className="text-[#3B190C] font-bold block">No house should be interpreted independently.</strong>
            <p>
              For example, a strong 10th house may show professional ambition, while the 11th house provides additional information about gains from that profession. This combined approach is an essential cornerstone of accurate career astrology.
            </p>
          </div>

        </div>

        {/* 4. WHY IS THE D10 DASHAMSHA IMPORTANT FOR A CAREER? */}
        <div className="bg-gradient-to-br from-white via-[#FCF9F3] to-[#FAF1DF] rounded-3xl p-6 sm:p-8 border-2 border-[#E8DCC4] shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#57220C] text-[#FDE08B] flex items-center justify-center font-serif-vedic font-bold text-sm shadow-sm">
              D10
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif-vedic font-bold text-[#3B190C]">
                Why Is the D10 Dashamsha Important for a Career?
              </h3>
              <p className="text-xs text-[#8C3E14] font-semibold">
                Divisional Micro-Analysis of Professional Karma
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs sm:text-sm text-[#5C3F2E] leading-relaxed">
            <p>
              One of the most popular divisional charts to study is the Dashamsha chart also known as the D10 chart. The main D1 chart forms the foundation, and the D10 gives a further layer of microscopic detail pertaining to career, responsibilities, authority, reputation and profession.
            </p>
            <p>
              One of the steps of astrology career prediction is to see if the 10th lord is stronger or weaker than the career planets in both charts. For instance, if the main horoscope shows a strong Mars and the D10 shows a weaker Mars, it is studied more deeply to forecast long-term sustainability.
            </p>
          </div>

          <div className="p-3 bg-white/80 rounded-xl border border-[#E3D4B8] text-xs text-[#6B4B36] font-medium">
            Therefore, the D10 chart is uniquely helpful when learning about professional development over a sustained period of time rather than relying on a single planetary placement.
          </div>
        </div>

        {/* 5. HOW CAN ASTROLOGY PREDICT JOB CHANGE AND PROMOTION TIMING? */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E8DCC4] shadow-md space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0DE] border border-[#E3C9A0] text-[#8C3E14] text-[11px] font-bold uppercase tracking-wider mb-2">
              <Clock className="w-3 h-3 text-[#9E431E]" />
              <span>Planetary Timing Framework</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-vedic font-bold text-[#3B190C]">
              How Can Astrology Predict Job Change and Promotion Timing?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B36] mt-1">
              The most common job astrology questions are: <em className="text-[#3B190C] font-serif-vedic font-semibold">“When should I change my job?”</em> or <em className="text-[#3B190C] font-serif-vedic font-semibold">“When can I expect professional growth or promotion?”</em> Timing is primarily studied through Dasha periods and planetary transits.
            </p>
          </div>

          {/* 4 Timing Factors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Mahadasha & Antardasha */}
            <div className="bg-[#FAF6EE] rounded-2xl p-4.5 border border-[#E8DCC4] space-y-2">
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                Mahadasha & Antardasha
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                The active planetary period creates the broader operating theme in your life. When planets connected with employment, profession, income, or gains become active, career developments receive greater emphasis.
              </p>
            </div>

            {/* Jupiter Transit */}
            <div className="bg-[#FAF6EE] rounded-2xl p-4.5 border border-[#E8DCC4] space-y-2">
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                Jupiter Transit (Guru Gochar)
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                Jupiter is associated with expansion, learning, guidance, and opportunity. Its transit in relation to important career houses may become relevant during growth-oriented promotion and learning phases.
              </p>
            </div>

            {/* Saturn Transit */}
            <div className="bg-[#FAF6EE] rounded-2xl p-4.5 border border-[#E8DCC4] space-y-2">
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                Saturn Transit (Shani Gochar)
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                Saturn represents discipline, structure, responsibility, delay, persistence, and long-term effort. A difficult Saturn period does not mean failure—it indicates restructuring, greater duty, or sustained effort.
              </p>
            </div>

            {/* Rahu and Ketu */}
            <div className="bg-[#FAF6EE] rounded-2xl p-4.5 border border-[#E8DCC4] space-y-2">
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                Rahu and Ketu Transits
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                The lunar nodes are traditionally associated with unconventional developments, sudden pivots, foreign connections, high-tech, and unusual professional directions evaluated collectively.
              </p>
            </div>

          </div>

          <p className="text-xs text-[#8C3E14] font-medium text-center bg-[#FAF1DF] p-2.5 rounded-xl border border-[#E3C9A0]">
            A detailed career astrology consultation evaluates all these planetary influences together rather than declaring a result from one isolated transit alone.
          </p>
        </div>

        {/* 6. JOB VS BUSINESS: COMPARISON GRID */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E8DCC4] shadow-md space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif-vedic font-bold text-[#3B190C]">
              Can Career Prediction Astrology Tell Whether Job or Business Is Better?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B36] mt-1.5 leading-relaxed">
              This is another common question among experienced professionals. Someone may have a secure job but want independence. Another person may already have a business but struggle with consistency. The answer requires comparison of several horoscope factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Employment Suitability */}
            <div className="bg-[#FAF6EE] rounded-2xl p-5 sm:p-6 border-2 border-[#E3D4B8] space-y-3">
              <div className="flex items-center gap-2 text-[#8C3E14] font-serif-vedic font-bold text-base">
                <Briefcase className="w-4 h-4 text-[#8C3E14]" />
                <span>When Employment May Be More Suitable</span>
              </div>
              <p className="text-xs text-[#6B4B36]">
                An astrologer evaluates the following structural elements:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#422515]">
                {[
                  'Strength of the 6th house (Seva Bhava)',
                  'Condition of the 10th house (Authority & Job security)',
                  "Saturn's role (Discipline & steady service)",
                  "Sun's influence (Governance & managerial hierarchy)",
                  'D10 stability for long-term corporate tenure',
                  'Current Dasha periods supporting stable employment',
                  'Regular income patterns across 2nd & 11th houses'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C3E14] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Suitability */}
            <div className="bg-[#FAF6EE] rounded-2xl p-5 sm:p-6 border-2 border-[#E3D4B8] space-y-3">
              <div className="flex items-center gap-2 text-[#8C3E14] font-serif-vedic font-bold text-base">
                <Building2 className="w-4 h-4 text-[#8C3E14]" />
                <span>When Business May Be More Suitable</span>
              </div>
              <p className="text-xs text-[#6B4B36]">
                Business evaluation involves analyzing the following planetary dynamics:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#422515]">
                {[
                  '7th house strength (Trade, clients & contracts)',
                  '3rd house initiative (Risk appetite & independent drive)',
                  "Mercury's condition (Commercial intellect & negotiation)",
                  '2nd and 11th house high-yield wealth connections',
                  "Rahu's influence (Disruptive innovation & scale)",
                  'Active Dhana Yogas (Multi-source revenue potential)',
                  'Partnership combinations and equity alignment'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C3E14] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF0DE] border border-[#E3C9A0] text-xs sm:text-sm text-[#5C3F2E] leading-relaxed">
            <p>
              An individual career horoscope by date of birth helps compare these factors against your actual professional circumstances. <strong>The purpose of career astrology is not to force you into business or employment, but to provide greater clarity before an important decision.</strong>
            </p>
          </div>
        </div>

        {/* 7. GOVERNMENT JOB QUESTIONS */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E8DCC4] shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#8C3E14]">
              <Landmark className="w-5 h-5 text-[#8C3E14]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif-vedic font-bold text-[#3B190C]">
                Can Job Astrology Help With Government Job Questions?
              </h3>
              <p className="text-xs text-[#8C3E14] font-semibold">
                Competitive Examinations, Public Administration & PSU Roles
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#5C3F2E] leading-relaxed">
            <p>
              Government employment is a highly competitive career choice and no horoscope can replace preparation, eligibility, examination performance or recruitment procedures.
            </p>
            <p>
              However, job astrology can be used to study planetary combinations traditionally associated with government roles, authority, administration, competition and public service. The <strong className="text-[#3B190C]">Sun, Saturn, Mars, Jupiter, 6th house, 10th house and relevant Dasha periods</strong> receive particular attention depending on the horoscope.
            </p>
            <p className="bg-[#FAF6EE] p-3 rounded-xl border border-[#E8DCC4] text-xs text-[#4A2511]">
              A detailed astrology career prediction can also help an aspirant understand whether continuing preparation, changing strategy or keeping parallel private-sector options deserves consideration.
            </p>
          </div>
        </div>

        {/* 8. WHAT REMEDIES ARE USED FOR CAREER GROWTH? */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E8DCC4] shadow-md space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0DE] border border-[#E3C9A0] text-[#8C3E14] text-[11px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9E431E]" />
              <span>Sattvik Upaya Protocols</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-vedic font-bold text-[#3B190C]">
              What Remedies Are Used for Career Growth?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B36] mt-1 leading-relaxed">
              Remedies should be selected only after studying the complete horoscope. There is no single mantra, gemstone or Vastu change that is equally suitable for everyone.
            </p>
          </div>

          {/* 4 Remedies Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Gemstone Guidance */}
            <div className="bg-[#FAF6EE] rounded-2xl p-5 border border-[#E8DCC4] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#8C3E14]">
                <Gem className="w-4 h-4 text-[#8C3E14]" />
              </div>
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                1. Gemstone Guidance
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                A gemstone may be considered when strengthening a particular functional benefic planet is appropriate according to the chart. Gemstones should not be selected merely from a zodiac sign or online recommendation.
              </p>
            </div>

            {/* 2. Mantra & Spiritual Practices */}
            <div className="bg-[#FAF6EE] rounded-2xl p-5 border border-[#E8DCC4] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#8C3E14]">
                <Flame className="w-4 h-4 text-[#8C3E14]" />
              </div>
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                2. Mantra & Spiritual Practices
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                Traditional Beej mantra practices and personalized rituals may be suggested according to the planetary factors identified during the 1-on-1 consultation.
              </p>
            </div>

            {/* 3. Behavioral Remedies */}
            <div className="bg-[#FAF6EE] rounded-2xl p-5 border border-[#E8DCC4] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#8C3E14]">
                <UserCheck className="w-4 h-4 text-[#8C3E14]" />
              </div>
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                3. Behavioral Remedies
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                Often the most useful recommendation is practical: becoming disciplined, improving communication, avoiding impulsive decisions, and developing new leadership habits.
              </p>
            </div>

            {/* 4. Workplace Vastu */}
            <div className="bg-[#FAF6EE] rounded-2xl p-5 border border-[#E8DCC4] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FAF0DE] border border-[#E3C9A0] flex items-center justify-center text-[#8C3E14]">
                <LayoutGrid className="w-4 h-4 text-[#8C3E14]" />
              </div>
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                4. Workplace Vastu
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                Desk orientation, cabin seating arrangement, workspace organization and practical energetic alignments to support mental focus and clarity.
              </p>
            </div>

          </div>

          <p className="text-xs text-[#5C3F2E] font-medium text-center">
            The goal is to complement your career astrology reading with practical steps that can be followed consistently.
          </p>
        </div>

        {/* 9. GET PERSONALIZED CAREER GUIDANCE (CTA BANNER) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#FAF0DE] via-[#FFFDF9] to-[#F5EAD9] border-2 border-[#D49B35] p-6 sm:p-9 text-center space-y-4 shadow-lg">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D9C4A6] text-[#8C3E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C97F18]" />
            <span>Get Personalized Career Guidance</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-vedic font-bold text-[#3B190C]">
            Ready to Gain Unshakeable Clarity on Your Career Path?
          </h3>

          <p className="text-xs sm:text-sm text-[#5C3F2E] max-w-2xl mx-auto leading-relaxed">
            If you are dealing with career confusion, delayed promotion, job instability, repeated rejection, workplace pressure or an important professional decision, a personalized consultation can help you examine the situation in greater depth.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#8C3E14] hover:bg-[#73310E] text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition shadow-md hover:scale-102 active:scale-98 cursor-pointer"
            >
              <span>Book a 1-on-1 Career Astrology Consultation with Acharya Ganesh</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
