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

export const CONSULTATION_STEPS = [
  {
    step: '01',
    title: 'Book Your Consultation',
    description: 'Select your preferred time slot and consultation format (1-on-1 Video Call via Zoom/Meet, Audio Call, or Comprehensive Written PDF Report).',
    actionText: 'Flexible slots available 7 days a week'
  },
  {
    step: '02',
    title: 'Share Your Career Birth Details',
    description: 'Provide your accurate date, exact time, and city of birth. If birth time is slightly uncertain, our team applies Birth Time Rectification (BTR) principles.',
    actionText: '100% confidential & encrypted data handling'
  },
  {
    step: '03',
    title: 'Receive Personalized Career Guidance',
    description: 'Direct interactive session with Acharya Hanish Bagga. Receive deep Kundli diagnostics, exact timing predictions, tailored Vedic remedies, and ask all your questions.',
    actionText: 'Includes remedy chart + post-session summary'
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
    author: 'Vikram Malhotra',
    designation: 'VP of Engineering, Global SaaS Firm',
    location: 'Bengaluru / San Jose',
    rating: 5,
    category: 'executive',
    quote: 'Acharya Hanish Bagga’s timing for my executive role transition was accurate down to the specific month. He advised me to hold off on an early offer in April and wait until July when my Jupiter Antardasha commenced. That single decision landed me a VP role with double the equity allocation.',
    detailedOutcome: 'Successfully transitioned to VP Engineering with 65% salary increment and overseas relocation package.',
    date: 'February 2026',
    verified: true
  },
  {
    id: 't-2',
    author: 'Pooja Sharma',
    designation: 'Senior Product Manager, FinTech',
    location: 'Gurugram, India',
    rating: 5,
    category: 'switch',
    quote: 'I had been stuck in the same senior analyst band for over 3 years despite stellar ratings. During the 1-on-1 session, Acharya ji identified a malefic Saturn aspect on my 10th house and recommended specific chanting and gemstone remedies. Within 4 months, I cleared three rounds of interviews and secured a dream Senior PM role at a leading FinTech unicorn.',
    detailedOutcome: 'Broke 3-year promotion stagnation; joined top unicorn with a 45% pay jump.',
    date: 'January 2026',
    verified: true
  },
  {
    id: 't-3',
    author: 'Amitabh Sen',
    designation: 'Civil Services Aspirant & State PCS Officer',
    location: 'Lucknow, India',
    rating: 5,
    category: 'govt_corp',
    quote: 'After two unsuccessful UPSC attempts, I was completely disheartened. Acharya ji analyzed my D10 chart and told me with immense confidence that my Sun and Mars were positioned for State Administrative Services in the upcoming cycle rather than central services. Following his study timing guidance, I cleared the State PSC with Rank 14.',
    detailedOutcome: 'Secured State Administrative Service selection (Rank 14) after applying strategic focus guidance.',
    date: 'November 2025',
    verified: true
  },
  {
    id: 't-4',
    author: 'Dr. Radhika Nair',
    designation: 'Healthcare Startup Founder & Consultant',
    location: 'Mumbai & Singapore',
    rating: 5,
    category: 'executive',
    quote: 'I consulted Acharya Ganesh regarding whether to continue my hospital leadership role or launch my diagnostic venture. His guidance on my 7th and 11th houses gave me the clarity I needed. He also suggested an auspicious date (Muhurat) for incorporating the company. Today our venture is backed by tier-1 angels.',
    detailedOutcome: 'Smooth transition from hospital director to venture-backed healthcare founder.',
    date: 'October 2025',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Which House is for Career in Astrology?',
    category: 'Houses',
    answer: 'In Vedic Astrology, the primary house for career and professional destiny is the 10th House (Karma Bhava). It signifies your public status, authority, executive leadership, reputation, and life’s main vocation. Additionally, the 6th House governs daily service and competitive employment, the 2nd House governs wealth earned through work, the 7th House represents business partnerships, and the 11th House denotes financial gains and professional network rewards.'
  },
  {
    id: 'faq-2',
    question: 'Can Career Astrology predict the exact time when I will get a job?',
    category: 'Timing',
    answer: 'Yes. Vedic Astrology uses the time-tested Vimshottari Dasha system (Mahadasha, Antardasha, and Pratyantardasha) combined with major planetary transits (Gochara of Jupiter, Saturn, and Rahu) to pinpoint favorable job-seeking windows with remarkable precision. When planetary periods activate the 6th, 10th, or 11th houses, interview calls and job offers materialize swiftly.'
  },
  {
    id: 'faq-3',
    question: 'When will I get a Job Promotion or Appraisal?',
    category: 'Timing',
    answer: 'Promotions and appraisals typically occur during the sub-periods of the 10th lord, 11th lord (house of gains), or 1st lord (enhancement of status). Transits of Jupiter aspecting your 10th house or natal Sun also bring leadership elevation, official recognition, and salary increments. During your consultation, Acharya Hanish Bagga calculates your exact timeline for promotion eligibility.'
  },
  {
    id: 'faq-4',
    question: 'When will I get Job Stability / Increment?',
    category: 'Stability',
    answer: 'Job stability is achieved when strong functional benefics (such as Jupiter, benefic Mercury, or a well-placed Saturn) influence the 6th and 10th houses. If you are experiencing frequent job changes or unstable contracts, it is often due to Sade Sati, Kantaka Shani, or Rahu transit through the 10th house. Simple remedial measures help ground and stabilize your current role.'
  },
  {
    id: 'faq-5',
    question: 'Which House in Horoscope Affects Career Negatively?',
    category: 'Challenges',
    answer: 'Afflictions to the 10th house or its lord by malefic planets, or active Dashas of the 8th house (sudden transformations/obstacles) or 12th house (losses, relocations, exit from current role) can create temporary career hurdles. However, Vedic Astrology views these periods as evolutionary cycles where targeted remedial actions (mantras, charity, gemstone activation) neutralize negative friction.'
  },
  {
    id: 'faq-6',
    question: 'Why is Career Promotion Delay Trending Today?',
    category: 'Modern Workplace',
    answer: 'In today’s volatile economy, frequent restructuring, automation, and corporate reorganizations coincide with major slow-moving planetary transits like Saturn (Shani) and Rahu. Many professionals face career stagnation when their natal charts undergo Sade Sati or 8th house Dasha. An astrological consultation helps you diagnose whether the delay is macro-economic or individual karma, allowing you to prepare proactively.'
  },
  {
    id: 'faq-7',
    question: 'Which Career is Best for Me According to Career Astrology?',
    category: 'Career Selection',
    answer: 'Your ideal career is determined by analyzing the sign on your 10th house, the planet occupying the 10th house, your Amatyakaraka (planet with the second highest degree), and your Dashamsha (D10) chart. For instance, strong Mars/Mercury combinations excel in Software Engineering and FinTech, Sun/Jupiter combinations dominate Government Administration & Law, while Venus/Mercury favors Media, Design, and Commerce.'
  },
  {
    id: 'faq-8',
    question: 'How to Find Career in Astrology Chart?',
    category: 'Methodology',
    answer: 'To find your career path, an astrologer analyzes four key components: (1) The 10th house of the Rashi (D1) chart, (2) The Dashamsha (D10) divisional chart which is dedicated exclusively to profession, (3) The Amatyakaraka in Jaimini astrology, and (4) The Moon chart (Chandra Kundli) to understand mental aptitude and professional satisfaction.'
  },
  {
    id: 'faq-9',
    question: 'How do I book an Astrology consultation?',
    category: 'Booking',
    answer: 'Booking is quick and seamless. Simply fill out the consultation form on this page with your birth details (Date, Time, Place of Birth), select your preferred consultation format (Video Call on Zoom/Google Meet or Audio Call), and choose your convenient time slot. You can also connect directly via WhatsApp at +91 73000-04325 for instant slot confirmation.'
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
