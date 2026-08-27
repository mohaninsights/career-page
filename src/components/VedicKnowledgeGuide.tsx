import React from 'react';
import { 
  BookOpen, Sparkles, Compass, Clock, CheckCircle2, 
  Briefcase, Building2, Landmark, ShieldCheck, Gem, 
  Flame, UserCheck, LayoutGrid, ArrowRight 
} from 'lucide-react';

interface VedicKnowledgeGuideProps {
  onOpenBooking: () => void;
}

export const VedicKnowledgeGuide: React.FC<VedicKnowledgeGuideProps> = ({ onOpenBooking }) => {
  const careerHouses = [
    {
      house: '10th House',
      vedicName: 'Karma Bhava',
      significance: 'Profession, responsibilities, authority, reputation and public role'
    },
    {
      house: '6th House',
      vedicName: 'Seva Bhava',
      significance: 'Employment, competition, service, workplace challenges and routine work'
    },
    {
      house: '2nd House',
      vedicName: 'Dhana Bhava',
      significance: 'Earned income, accumulated resources, speech and financial stability'
    },
    {
      house: '11th House',
      vedicName: 'Labha Bhava',
      significance: 'Gains, salary growth, professional networks and fulfillment of ambitions'
    },
    {
      house: '7th House',
      vedicName: 'Yuvati Bhava',
      significance: 'Business, partnerships, trade and dealings with the public'
    },
    {
      house: '3rd House',
      vedicName: 'Sahaja Bhava',
      significance: 'Initiative, communication, skills, courage and independent effort'
    }
  ];

  return (
    <section id="vedic-guide" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FBF7F0] border-b border-[#E3D4B6]">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* SECTION SUPER-HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FAF0DE] border border-[#E8D6B8] text-[#8C3E14] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#9E431E]" />
            <span>VEDIC CAREER ASTROLOGY GUIDE & KNOWLEDGE HUB</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-vedic font-bold text-[#3B190C] tracking-tight leading-[1.2]">
            How Vedic Astrology Studies Your Professional Life
          </h2>
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
            
            <div className="space-y-3 text-xs sm:text-sm text-[#5C3F2E] leading-relaxed">
              <p>
                Professional domain, the astrologer analyses the houses that are related to career, work, income, gains, initiative, business, education, fortune, as well as insights from <a href="https://acharyaganesh.com/health-astrology" target="_blank" rel="noopener noreferrer" className="text-[#8C3E14] font-semibold underline decoration-[#C97F18] hover:text-[#C97F18] transition-colors inline-flex items-center gap-0.5">health astrology</a> for sustained energy and focus. Personalised career predictions, thus, call for more than merely reading the Sun sign.
              </p>
              <p>
                The scheduling aspect is also crucial. <strong className="text-[#3B190C] font-semibold">Vimshottari Dasha, Antardasha and the important planetary transits</strong> are studied to determine the time when certain career themes will get more active.
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
            
            <div className="space-y-3 text-xs sm:text-sm text-[#5C3F2E] leading-relaxed">
              <p>
                The positions of your planets on the day you were born are based on your date of birth. In general, however, an exact professional analysis requires Birth time/place as well. Career astrology by date of birth involves looking at the position of planets in the horoscope of an individual and not only his zodiac sign.
              </p>
              <p>
                The Ascendant changes only about 2 hours and thus the time of birth is very important for house calculations. Hence the full career by Time and Date reading will be able to provide more individual information than the Sun Sign reading.
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
              Several houses become important when studying professional life.
            </p>
          </div>

          {/* Structured Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#E3D4B8]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#57220C] text-[#FFF5EA]">
                  <th className="p-3.5 sm:p-4 font-bold border-b border-[#733112] w-1/4">House</th>
                  <th className="p-3.5 sm:p-4 font-bold border-b border-[#733112] w-1/4">Vedic Name</th>
                  <th className="p-3.5 sm:p-4 font-bold border-b border-[#733112] w-1/2">Career Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAD8BF] text-[#3B190C]">
                {careerHouses.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FCF9F3]' : 'bg-white hover:bg-[#FAF3E6]'}>
                    <td className="p-3.5 sm:p-4 font-bold text-[#8C3E14] whitespace-nowrap">
                      {item.house}
                    </td>
                    <td className="p-3.5 sm:p-4 font-serif-vedic font-bold text-[#4A2511] whitespace-nowrap">
                      {item.vedicName}
                    </td>
                    <td className="p-3.5 sm:p-4 text-[#523321] leading-relaxed">
                      {item.significance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footnote Callout */}
          <div className="p-4 rounded-xl bg-[#FAF3E6] border border-[#E3D4B8] text-xs sm:text-sm text-[#5C3F2E] leading-relaxed space-y-1">
            <p>
              No house should be interpreted independently. For example, a strong 10th house may show professional ambition, while the 11th house provides additional information about gains from that profession. This combined approach is an important part of career astrology.
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
            </div>
          </div>

          <div className="space-y-3 pt-1 text-xs sm:text-sm text-[#5C3F2E] leading-relaxed">
            <p>
              One of the most popular divisional charts to study is the Dashamsha chart also known as D10 chart. The main D1 chart forms the basis and a D10 gives a further layer of detail pertaining to career, responsibilities, authority, reputation and profession. The first step of making predictions for an astrologer's career is to determine whether the career planets are stronger or weaker than the 10th lord in both horoscopes.
            </p>
            <p>
              If the main horoscope has a strong Mars, and the D10 has a weak Mars, it would be investigated more in-depth. So, the D10 can be useful when having to learn more about professional development that is longer term than a single placement.
            </p>
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
            <div className="text-xs sm:text-sm text-[#6B4B36] mt-2 space-y-1">
              <p>The most common job astrology question is:</p>
              <p className="font-serif-vedic font-semibold text-[#3B190C] italic">“When should I change my job?”</p>
              <p>or</p>
              <p className="font-serif-vedic font-semibold text-[#3B190C] italic">“When can I expect professional growth or promotion?”</p>
              <p className="pt-1">Timing is primarily studied through Dasha periods and planetary transits.</p>
            </div>
          </div>

          {/* 4 Timing Factors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Mahadasha & Antardasha */}
            <div className="bg-[#FAF6EE] rounded-2xl p-4.5 border border-[#E8DCC4] space-y-2">
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                Mahadasha & Antardasha
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                The active planetary period creates the broader theme operating in your life.
              </p>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                When planets connected with employment, profession, income or gains become active in your career and <a href="https://acharyaganesh.com/wealth-astrology" target="_blank" rel="noopener noreferrer" className="text-[#8C3E14] font-semibold underline decoration-[#C97F18] hover:text-[#C97F18] transition-colors inline-flex items-center gap-0.5">wealth astrology</a> chart, career-related developments may receive greater emphasis.
              </p>
            </div>

            {/* Jupiter Transit */}
            <div className="bg-[#FAF6EE] rounded-2xl p-4.5 border border-[#E8DCC4] space-y-2">
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                Jupiter Transit
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                Jupiter is associated with expansion, learning, guidance and opportunity. Its transit in relation to important career houses may become relevant during growth-oriented phases.
              </p>
            </div>

            {/* Saturn Transit */}
            <div className="bg-[#FAF6EE] rounded-2xl p-4.5 border border-[#E8DCC4] space-y-2">
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                Saturn Transit
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                Saturn is the symbol of discipline, structure, responsibility, delay and effort. The bad Saturn period isn't mean loss. Instead, it could mean more responsibilities, slower progress, restructuring and/or long-term effort.
              </p>
            </div>

            {/* Rahu and Ketu */}
            <div className="bg-[#FAF6EE] rounded-2xl p-4.5 border border-[#E8DCC4] space-y-2">
              <h4 className="font-serif-vedic text-sm font-bold text-[#3B190C]">
                Rahu and Ketu
              </h4>
              <p className="text-xs text-[#6B4B36] leading-relaxed">
                The lunar nodes are traditionally associated with unconventional developments, sudden changes, foreign connections, technology, detachment and unusual professional directions.
              </p>
            </div>

          </div>

          <p className="text-xs text-[#8C3E14] font-medium text-center bg-[#FAF1DF] p-3 rounded-xl border border-[#E3C9A0]">
            A detailed career astrology consultation evaluates these influences together rather than declaring a result from one transit alone.
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
                An astrologer may examine:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#422515]">
                {[
                  'Strength of the 6th house',
                  'Condition of the 10th house',
                  "Saturn's role",
                  "Sun's influence",
                  'D10 stability',
                  'Current Dasha periods',
                  'Regular income patterns'
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
                Business evaluation may involve:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#422515]">
                {[
                  '7th house strength',
                  '3rd house initiative',
                  "Mercury's condition",
                  '2nd and 11th house connections',
                  "Rahu's influence",
                  'Dhana Yogas',
                  'Partnership combinations'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C3E14] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-[#FAF0DE] border border-[#E3C9A0] text-xs sm:text-sm text-[#5C3F2E] leading-relaxed space-y-1">
            <p>
              An individual career horoscope by date of birth helps compare these factors against your actual professional circumstances. The purpose of career astrology is not to force you into business or employment but to provide greater clarity before an important decision.
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
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#5C3F2E] leading-relaxed">
            <p>
              Government job is a competitive job and no horoscope can substitute in the preparation, eligibility, examination performance or recruitment procedures. But job astrology can be used for the study of the planetary combinations traditionally considered as connected with government positions, authority, administration, competition and public service.
            </p>
            <p>
              Sun, Saturn, Mars, Jupiter, 6th house, 10th house and the relevant Dasha periods can be looked into in detail depending upon the horoscope. A detailed astrology career prediction can also help an aspirant to know whether more preparations, changing strategy or having parallel career options (two jobs/employments) is worth considering.
            </p>
          </div>
        </div>

        {/* 8. WHAT REMEDIES ARE USED FOR CAREER GROWTH? */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E8DCC4] shadow-md space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0DE] border border-[#E3C9A0] text-[#8C3E14] text-[11px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9E431E]" />
              <span>Remedial Framework</span>
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
                A gemstone may be considered when strengthening a particular functional benefic planet is appropriate according to the horoscope. Gemstones should not be selected merely because of a zodiac sign or online recommendation.
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
                Traditional mantra practices may be suggested according to the planetary factors identified during the consultation.
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
                Sometimes the most useful recommendation is practical: becoming more disciplined, improving communication, avoiding impulsive decisions, developing additional skills or changing professional habits.
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
                Desk orientation, cabin arrangement, workspace organization and other practical Vastu considerations may also be discussed where relevant. The goal is to complement your career astrology reading with practical steps that can be followed consistently.
              </p>
            </div>

          </div>

          <p className="text-xs text-[#5C3F2E] font-medium text-center">
            The goal is to complement your career astrology reading with practical steps that can be followed consistently.
          </p>
        </div>

      </div>
    </section>
  );
};

