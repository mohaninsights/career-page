import { VedicHouse, PlanetSignificance, Testimonial, VideoGuide, FaqItem, DeliverableItem } from '../types';

export const HERO_METRICS = [
  { value: '50K+', label: 'Horoscopes Analyzed Across 45+ Countries' },
  { value: '17+', label: 'Years of Vedic Jyotish Experience' },
  { value: '100%', label: 'Personalized 1-on-1 Kundli Guidance' },
  { value: '97%', label: 'Client Timing & Accuracy Satisfaction' }
];

export const VEDIC_HOUSES: VedicHouse[] = [
  {
    houseNumber: 1,
    sanskritName: 'Tanu Bhava (Lagna)',
    signification: 'Self, Personality, Overall Vitality, Leadership Presence',
    careerRelevance: 'Determines personal drive, professional temperament, public presence, and natural inclination toward entrepreneurship or employment.',
    governingPlanets: ['Sun', 'Mars'],
    keyIndustries: 'Leadership roles, personal brand, founder roles, defense & public administration.'
  },
  {
    houseNumber: 2,
    sanskritName: 'Dhana Bhava',
    signification: 'Accumulated Wealth, Speech, Family Business, Liquid Assets',
    careerRelevance: 'Shows earned income from career, ability to monetize skills, communication eloquence, banking, and wealth retention capacity.',
    governingPlanets: ['Jupiter', 'Mercury', 'Venus'],
    keyIndustries: 'Banking, investment advisory, public speaking, chartered accountancy, culinary arts.'
  },
  {
    houseNumber: 6,
    sanskritName: 'Shatru & Rina Bhava',
    signification: 'Daily Service, Employment, Competition, Problem Solving, Overcoming Enemies',
    careerRelevance: 'Crucial house for salaried jobs, corporate employment, competitive exams (UPSC, Banking), litigations, and daily operations.',
    governingPlanets: ['Mars', 'Saturn', 'Mercury'],
    keyIndustries: 'Civil services, law & litigation, medicine & healthcare, corporate operations, auditing.'
  },
  {
    houseNumber: 7,
    sanskritName: 'Jaya Bhava',
    signification: 'Business Partnerships, Public Dealing, Contracts, Overseas Trade',
    careerRelevance: 'Analyzes feasibility of self-employment vs partnerships, client relationships, B2B negotiations, and international business alliances.',
    governingPlanets: ['Venus', 'Mercury'],
    keyIndustries: 'Partnership firms, retail, trade, consulting, international commerce, client servicing.'
  },
  {
    houseNumber: 9,
    sanskritName: 'Bhagya Bhava',
    signification: 'Fortune, Higher Wisdom, Mentors, Long-Distance Travels, Higher Education',
    careerRelevance: 'Governs luck and destiny in career, higher education credentials, supportive mentors/bosses, and overseas work opportunities.',
    governingPlanets: ['Jupiter', 'Sun'],
    keyIndustries: 'Higher academia, research, publishing, spiritual advisory, foreign corporate assignments.'
  },
  {
    houseNumber: 10,
    sanskritName: 'Karma Bhava',
    signification: 'Primary Profession, Social Status, Authority, Career Peak, Public Fame',
    careerRelevance: 'The supreme house of career. Defines your true vocation, government vs private dominance, elevation to C-suite, and career pinnacle.',
    governingPlanets: ['Sun', 'Saturn', 'Mars', 'Jupiter'],
    keyIndustries: 'All primary professional callings, executive leadership, political authority, industry mastery.'
  },
  {
    houseNumber: 11,
    sanskritName: 'Labha Bhava',
    signification: 'Gains, Professional Network, High Earnings, Realization of Desires',
    careerRelevance: 'Shows bonuses, stock options, equity gains, high-net-worth professional networks, recognition, and large organizational rewards.',
    governingPlanets: ['Jupiter', 'Saturn', 'Rahu'],
    keyIndustries: 'Tech ventures, venture capital, large multinationals, industry associations, scaling enterprises.'
  }
];

export const PLANET_SIGNIFICANCES: PlanetSignificance[] = [
  {
    name: 'Sun',
    sanskritName: 'Surya Dev',
    symbol: '☉',
    role: 'Authority, Government Power & Executive Leadership',
    careerDomains: ['Civil Services (IAS/IPS)', 'Government Officials', 'C-Suite Executives', 'Politics', 'Medical Administration'],
    powerAttribute: 'Karaka for status, soul purpose, leadership presence, and government favor.'
  },
  {
    name: 'Saturn',
    sanskritName: 'Shani Dev',
    symbol: '♄',
    role: 'Discipline, Mass Industry, Hard Work & Persistence',
    careerDomains: ['Manufacturing', 'Engineering & Mining', 'Law & Judiciary', 'Supply Chain', 'Real Estate & Infrastructure'],
    powerAttribute: 'Karaka for longevity, sustained diligence, organizational foundation, and karmic rewards.'
  },
  {
    name: 'Mars',
    sanskritName: 'Mangal Dev',
    symbol: '♂',
    role: 'Courage, Technical Precision, Defense & Execution',
    careerDomains: ['Software Engineering', 'Defense & Police', 'Surgeons', 'Real Estate Development', 'Sports Management'],
    powerAttribute: 'Karaka for technical acumen, competitive edge, energy drive, and risk-taking.'
  },
  {
    name: 'Mercury',
    sanskritName: 'Budha Dev',
    symbol: '☿',
    role: 'Commerce, Analytics, Communication & Logic',
    careerDomains: ['Data Science & AI', 'FinTech & Trading', 'Marketing & Media', 'Chartered Accountancy', 'Publishing'],
    powerAttribute: 'Karaka for intellect, analytical agility, sales persuasion, and mathematical mastery.'
  },
  {
    name: 'Jupiter',
    sanskritName: 'Guru Brihaspati',
    symbol: '♃',
    role: 'Wisdom, Strategic Advisory, Finance & Teaching',
    careerDomains: ['Investment Banking', 'Corporate Law & Ethics', 'Professorship', 'Management Consulting', 'Spiritual Guidance'],
    powerAttribute: 'Karaka for growth, ethical leadership, mentor support, and wealth expansion.'
  },
  {
    name: 'Venus',
    sanskritName: 'Shukra Dev',
    symbol: '♀',
    role: 'Creativity, Luxury, Public Relations & Design',
    careerDomains: ['UI/UX & Creative Arts', 'Luxury Retail & Hospitality', 'Entertainment & Film', 'Public Relations', 'Architecture'],
    powerAttribute: 'Karaka for aesthetic excellence, charm, branding power, and diplomatic negotiation.'
  },
  {
    name: 'Rahu & Ketu',
    sanskritName: 'Shadow Planets',
    symbol: '☊ / ☋',
    role: 'Unconventional Tech, Foreign Placements & Innovation',
    careerDomains: ['Overseas Relocation & Visas', 'Deep Tech / Web3 / R&D', 'Aviation', 'Cybersecurity', 'Research & Forensics'],
    powerAttribute: 'Karakas for breakout international opportunities, unconventional career shifts, and specialized technical niches.'
  }
];

export const CAREER_STAGES = [
  {
    id: 'entry',
    badge: 'STUDENTS & EARLY PROFESSIONALS',
    title: 'Career Path & Suitable Profession Analysis',
    subtitle: 'Identify natural karmic talents, ideal academic streams, and whether government or private corporate matches your birth chart.',
    points: [
      'Identification of ideal career sector (Tech, Finance, Law, Civil Services, Creative)',
      'Government job feasibility (UPSC / State PCS / PSU) vs Private corporate track',
      'Guidance on higher studies abroad vs domestic MBA / MS specialization',
      'Auspicious timing for campus placements, first job offers, and internships'
    ],
    targetAudience: 'College graduates, early-career executives (0–4 years experience)',
    ctaText: 'Schedule Career Entry Reading'
  },
  {
    id: 'mid',
    badge: 'MID-LEVEL PROFESSIONALS',
    title: 'Job Change, Employment & Competition Analysis',
    subtitle: 'Pinpoint precise Dasha transitions to switch companies, negotiate substantial compensation hikes, and avoid bad transitions.',
    points: [
      'Precise timing (month & year) for submitting resignations and joining new firms',
      'Analysis of job stability vs sudden layoff risks during malefic transits',
      'Salary increment potential & stock options (11th & 2nd house activation)',
      'Overcoming toxic workplace politics, difficult managers, and promotion stalls'
    ],
    targetAudience: 'Professionals with 5–12 years experience seeking strategic growth',
    ctaText: 'Analyze Job Switch Timing'
  },
  {
    id: 'senior',
    badge: 'SENIOR LEADERS & ENTREPRENEURS',
    title: 'Promotions, Salary Growth & Recognition Prospects',
    subtitle: 'Unlock C-suite elevation, board appointments, international relocation, or transition smoothly into high-growth entrepreneurship.',
    points: [
      'Timing for Director, VP, and Partner promotions with D10 Dashamsha mapping',
      'Feasibility of launching your own startup / venture vs staying in corporate',
      'Foreign visa approval, green card timelines, and international deputations',
      'Remedies for maintaining authority, reputation (Kirti), and business cash flow'
    ],
    targetAudience: 'Senior managers, CXOs, entrepreneurs, and overseas job seekers',
    ctaText: 'Consult on Leadership & Business'
  }
];

export const SESSION_DELIVERABLES: DeliverableItem[] = [
  {
    id: 'del-1',
    title: 'Personalized Career Roadmap',
    tagline: 'Long-term 5-to-10-Year Astrological Blueprint',
    description: 'Comprehensive evaluation of your primary Karma Bhava (10th house), guiding you toward industries where you will achieve maximum financial returns and public recognition.',
    points: [
      'Ideal industry & role alignment',
      'Strengths and karmic bottlenecks',
      'Long-term wealth accumulation potential'
    ],
    iconName: 'Compass'
  },
  {
    id: 'del-2',
    title: 'Job Change Timing',
    tagline: 'Vimshottari Dasha & Gochara (Transit) Mapping',
    description: 'Pinpoint exact auspicious months for initiating job switches, attending interviews, demanding salary revisions, or taking career breaks without financial risks.',
    points: [
      'Favorable planetary transition windows',
      'Dates to avoid hasty career moves',
      'Notice period and offer negotiation strategy'
    ],
    iconName: 'Calendar'
  },
  {
    id: 'del-3',
    title: 'Promotion & Appraisal Prospects',
    tagline: 'C-Suite & Leadership Elevation Guidance',
    description: 'Clear forecast on when pending promotions, salary increments, or management appraisals will materialize, along with remedies to overcome bureaucratic hurdles.',
    points: [
      'Appraisal cycle timing predictions',
      'Overcoming managerial bias & friction',
      'Positioning for leadership roles'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'del-4',
    title: 'Accurate Professional Vastu',
    tagline: 'Workstation & Cabin Energy Optimization',
    description: 'Practical directional alignments for your office desk, laptop orientation, and workspace Vastu to boost concentration, client conversion, and authority.',
    points: [
      'Ideal seating orientation for leaders',
      'Color schemes for professional focus',
      'Vastu remedies without structural changes'
    ],
    iconName: 'Home'
  },
  {
    id: 'del-5',
    title: 'D10 & 10th House Analysis',
    tagline: 'Microscopic Divisional Chart Inspection',
    description: 'The Dashamsha (D10) chart reveals microscopic secrets of your professional destiny that the standard birth chart might overlook, including sudden career fame.',
    points: [
      'D10 Lagna and 10th lord placement',
      'Public standing and reputation metrics',
      'Karmic debts related to professional life'
    ],
    iconName: 'Eye'
  },
  {
    id: 'del-6',
    title: 'Career Challenges & Workplace Remedies',
    tagline: 'Combatting Office Politics & Stability Threats',
    description: 'Identify if Saturn (Shani), Rahu, or afflicted Mars are causing friction with colleagues, ungrounded accusations, or sudden job insecurity, and apply exact antidotes.',
    points: [
      'Neutralizing malefic planetary aspects',
      'Custom Vedic Beej mantras and gemstone advice',
      'Rudraksha & Daan recommendations'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'del-7',
    title: 'Foreign Settlement & Global Mobility',
    tagline: '9th & 12th House Rahu/Jupiter Activation',
    description: 'Examine foreign career deputations, international relocation, work visa approvals (H1B / PR / Tier 2), and overseas trade success probabilities.',
    points: [
      'Auspicious foreign travel & visa timing',
      'Overseas earnings & green card prospects',
      'Cross-border MNC deputation analysis'
    ],
    iconName: 'Globe'
  },
  {
    id: 'del-8',
    title: 'Business vs Job Feasibility',
    tagline: '7th, 3rd & 10th House Entrepreneurship Potential',
    description: 'Determine whether you are cosmically built for a salaried executive track, high-growth startup venture, or family business expansion with risk timing.',
    points: [
      'Sole proprietorship vs partnership compatibility',
      'Capital investment & funding readiness',
      'Best astrological period for startup launch'
    ],
    iconName: 'Briefcase'
  }
];

export const VIDEO_GUIDES: VideoGuide[] = [
  {
    id: 'vid-1',
    title: 'Job Change Timing in Kundli: Which Year & Month is Right for You?',
    duration: '24:18',
    views: '248K views',
    category: 'Job Change Timing',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Learn how to identify the exact sub-period (Antardasha) of the 6th, 10th, and 11th houses to ensure your next career jump brings a 50%+ salary hike and long-term stability.',
    topics: [
      '00:00 - Introduction to Career Timing',
      '04:30 - The role of 6th house in job change',
      '11:15 - Jupiter & Saturn double transit rules',
      '18:40 - Auspicious months for resigning'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vid-2',
    title: 'Government Job vs Private Job: Astrological Combinations for Civil Services & PSU',
    duration: '19:45',
    views: '185K views',
    category: 'Govt vs Pvt Job',
    youtubeId: 'L_LUpnjgPso',
    description: 'Detailed birth chart analysis of Surya (Sun), 10th lord, and Amatyakaraka in D1 & D10 charts to know whether you should invest years in UPSC/State PSC preparation.',
    topics: [
      '01:10 - Royal planets: Sun & Mars synergy',
      '06:20 - 5th house (intelligence) + 10th house connection',
      '12:45 - When to exit civil services prep for corporate'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vid-3',
    title: '10th House in Astrology: Karma Bhava, Growth, D10 Kundli Explained',
    duration: '28:12',
    views: '312K views',
    category: 'Dasha & Transit',
    youtubeId: '3JZ_D3ELwOQ',
    description: 'Understand the fundamental engine of career success in Vedic Jyotish. How planets sitting in or aspecting your 10th house shape your daily authority and peer respect.',
    topics: [
      '00:45 - What Karma Bhava truly signifies',
      '08:15 - Digbala (directional strength) in 10th house',
      '17:30 - Overcoming debilitated 10th lord'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vid-4',
    title: 'Mercury (Budh) in 10th House: Karmic Career Blueprint & Monetization Hacks',
    duration: '16:50',
    views: '142K views',
    category: 'Business vs Job',
    youtubeId: 'kJQP7kiw5Fk',
    description: 'How a strong Mercury placement blesses you with exceptional analytical thinking, high-yield consulting capabilities, and digital business success.',
    topics: [
      '01:00 - Budha Aditya Yoga in career',
      '05:40 - Freelance & tech enterprise combinations',
      '12:10 - Best gemstones and mantras for intellect'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vid-5',
    title: 'Overcoming Workplace Politics & Malefic Placements with Simple Vedic Remedies',
    duration: '21:30',
    views: '198K views',
    category: 'Workplace & Remedies',
    youtubeId: 'fJ9rUzIMcZQ',
    description: 'Facing sudden blame, toxic micromanagement, or missed appraisals? Discover time-tested Vedic remedies to calm afflicted Rahu and Saturn in your professional sphere.',
    topics: [
      '00:30 - Astrological roots of office friction',
      '07:15 - Daily water offerings & Gayatri mantra',
      '15:00 - Auspicious Rudraksha combinations for career stability'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vid-6',
    title: 'Foreign Job Settlement & Overseas Visa Combinations in Vedic Horoscope',
    duration: '22:05',
    views: '275K views',
    category: 'Dasha & Transit',
    youtubeId: 'e-ORhEE9VVg',
    description: 'How the 9th and 12th houses interact with the 10th house to trigger foreign work visas, European/US corporate transfers, and permanent residency opportunities.',
    topics: [
      '02:10 - 12th house (foreign lands) activation',
      '09:40 - Rahu Dasha and international travel',
      '16:20 - Remedies for overcoming visa interview delays'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Rajesh Kulkarni',
    initials: 'RK',
    designation: 'Principal Software Architect',
    location: 'Bengaluru, India',
    rating: 5,
    category: 'Job Switch & Timing',
    quote: 'Salary and destination have hardly changed since the last four years, even regardless of good reviews. I studied my D10 chart, current Dasha and upcoming periods and got some good insights from Acharya Ganesh about the time that would be more favourable for me to move to another job.',
    detailedOutcome: 'Changing jobs during the recommended time frame and advancing to a more fulfilling position with greater challenge and higher pay. Here is the reason I was able to wait for the right job because the career prediction had given me enough confidence to do so.',
    date: 'February 2026',
    verified: true
  },
  {
    id: 't-2',
    author: 'Pooja Sundaram',
    initials: 'PS',
    designation: 'VP Marketing & Growth',
    location: 'Mumbai, India',
    rating: 5,
    category: 'Promotion & Growth',
    quote: 'During consultation, Acharya ji analyzed my career prediction astrology 10th house, Dasha periods and Rahu influence and told me that going back to work with such difficult times and pressure from seniors, etc. was short-lived and he gave me some tips for doing so as well as some patience in my career.',
    detailedOutcome: 'In the next couple of months there was a big organizational change here and I was offered a better leadership position. I\'ve avoided an emotional resignation at the wrong time by following the astrology career prediction.',
    date: 'January 2026',
    verified: true
  },
  {
    id: 't-3',
    author: 'Vikramaditya Rao',
    initials: 'VR',
    designation: 'Founder & Managing Director',
    location: 'Hyderabad / Dubai',
    rating: 5,
    category: 'Business & Startups',
    quote: 'When I looked at my date of birth chart and calculated the astrology of my 6th, 7th, 10th and 11th houses, along with Mercury, Rahu and my chart, it was evident that my career had a significant scope for improvement and transition from the job to a business was best done at a specific time.',
    detailedOutcome: 'I had planned my exit, instead of exiting suddenly and I started the business at the recommended time. The consultation process assisted me in making a thoughtful decision with clarity between a job and entrepreneurship.',
    date: 'December 2025',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Which Chart is Used for Career Prediction?',
    category: 'Divisional Charts',
    answer: 'In Vedic astrology, the Birth Chart with Dashamsha Chart (D10) are generally used for career prediction. These charts help to understand about the professional strengths, growth opportunities and future career. A detailed Career astrology analysis examines the planet positioning, houses and dashas to provide guidance with accuracy. Many choose career astrology by date of birth because it offers personalized insights and support for better planning through trusted astrology career prediction methods. Career astrology also things like your strengths, skills and timing of success. Book a consultation to know more about what kind of career is best for you.'
  },
  {
    id: 'faq-2',
    question: 'Which House is for Career in Astrology?',
    category: 'Houses',
    answer: 'In career astrology, the 10th house is considered the main house in which we can check about profession and achievements. In career prediction astrology, an expert astrologer carefully analyzes the 10th house with this house ruling planet and supporting houses like 2, 6 and 11 respectively. A strong 10th house indicates better career growth and recognition. Career Astrology also studies planetary influences to understand work preferences and future opportunities. Through Career astrology by date of birth, it becomes easier to identify strengths, challenges and suitable career options.'
  },
  {
    id: 'faq-3',
    question: 'Can Career Astrology Prediction Predicts when will I get a Job?',
    category: 'Job Timing',
    answer: 'Astrology can provide timing indications by studying planetary periods, transits and house activations. A detailed astrology career prediction can able to highlight favourable periods and employment opportunities. An expert combines job astrology with dasha analysis to tell when will professional growth may occur. While astrology cannot guarantee exact outcomes, it can tell the periods of growth and opportunities. A proper Career astrology consultation is able to understand career timing, improve preparation and helps to make better decision during professional life.'
  },
  {
    id: 'faq-4',
    question: 'When will I get a Job Prediction?',
    category: 'Job Timing',
    answer: 'The timing of employment is generally analyzed by planetary dashas, transits and last the strength of career house. A personalized job prediction studies the 6th, 10th, and 11th houses to identify the most favourable periods for getting employment. Many people seek job prediction by date of birth to understand what opportunities and challenges may come in the future. Through career prediction astrology, an astrologer can provide phases for job opportunities and growth so that they can plan their efforts more effectively.'
  },
  {
    id: 'faq-5',
    question: 'When will I get Job Astrology Calculator?',
    category: 'Calculators & Precision',
    answer: 'An astrology calculator can only able to provide very basic insights but if someone wants accurate result a detailed chart analysis may be required. Professional job astrology considers planetary placements, dashas and transits that calculator cannot provide. For reliable job prediction by date of birth, a complete horoscope assessment is usually recommended. Many choose career astrology by date of birth because it offers personalized guidance instead of generic results. A detailed analysis can reveal better timing for employment, promotion or any career-related decisions.'
  },
  {
    id: 'faq-6',
    question: 'Which House in Horoscope if for Career?',
    category: 'Houses',
    answer: 'The 10th house is the most important indicator for profession and achievements. A detailed career horoscope focuses on this house along with the 2nd, 6th and 11th houses to evaluate income, service and gains. In career astrology, the condition of the 10th house lord plays the major role as it determines the professional success. Through career prediction, astrologers study these types of combinations to provide insights on career potential, growth and suitable professional path for an individual.'
  },
  {
    id: 'faq-7',
    question: 'Why is Career Horoscope Today Trending Today?',
    category: 'Horoscopes & Trends',
    answer: 'People seek guidance about their jobs, promotions, business growth and changing career opportunities. As a result, daily career horoscope updates have become very popular among professional as well as students. A well-prepared career prediction can provide motivation and help individuals to stay focused on their upcoming opportunities. Interest in astrology career prediction has also become very popular among people who wants better clarity about their future. Daily insights often help to plan for any important professional decisions with better awareness.'
  },
  {
    id: 'faq-8',
    question: 'Which Career is best for me According to Career Astrology?',
    category: 'Career Selection',
    answer: 'The most suitable profession depends on placement of planets, their strengths and natural talents shown in the birth chart. Career astrology analyses these factors to identify career that align with a person\'s potential. Career astrology consultation can give insights about in what field you will perform better like in business or in a job. With the help of career astrology by date of birth, an astrologer provides personalized recommendations that support long-term professional growth and satisfaction.'
  },
  {
    id: 'faq-9',
    question: 'How to Find Career in Astrology Chart?',
    category: 'Methodology',
    answer: 'Finding the right profession involves studying the 10th house, its lord, planetary strengths, dashas and supporting houses. A detailed career prediction astrology analysis also examines the Moon, Sun and important yogas that influence professional success. Many people use Career astrology career to know what are their strengths and ideal working environment in which they can excel. Through astrology career prediction, identifying your career paths, growth opportunities and potential challenges becomes easy. A complete chart reading provides deeper insights than general horoscope reading.'
  },
  {
    id: 'faq-10',
    question: 'How to Find Career in Astrology Chart? (D10 & Comprehensive Consultation)',
    category: 'Consultation & D10',
    answer: 'A professional assessment starts by analyzing the 10th house in your birth chart. Career prediction technique also includes the Dashamsha Chart for detailed analysis. Many astrologers combines these to understand skills, ambitions and growth potential. By evaluating planetary strengths and timing factors, career astrology can help to identify suitable professions. A professional career astrology consultation can help to gain all the insights that a person needs to make proper decision for their career. Contact us to get the right guidance with the help of astrology.'
  }
];

export const SAMPLE_KUNDLI_DETAILS = {
  clientName: 'Rahul Sharma',
  ascendant: 'Leo (Simha Lagna)',
  tenthLord: 'Venus in 10th House (Malavya Mahapurusha Yoga)',
  amatyakaraka: 'Mars (4th & 9th lord Yogakaraka)',
  currentDasha: 'Jupiter Mahadasha - Saturn Antardasha (2024 - 2027)',
  d10Status: 'Exalted Sun in 10th house of D10 indicating high corporate authority & government liaisons',
  keyHighlights: [
    'Peak promotion window: Q3 2026 during Venus sub-transit',
    'Favorable for FinTech / AI product management & strategic consulting',
    'Recommended Gemstone: Natural Untreated Yellow Sapphire (Pukhraj) on index finger',
    'Daily practice: Surya Gayatri Mantra at sunrise for rapid executive recognition'
  ]
};
