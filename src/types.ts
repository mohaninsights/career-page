export interface ConsultationFormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  gender: string;
  careerConcern: string;
  preferredMode: 'video' | 'audio' | 'written_report';
  preferredDate?: string;
  preferredTimeSlot?: string;
  additionalNotes?: string;
}

export interface VedicHouse {
  houseNumber: number;
  sanskritName: string;
  signification: string;
  careerRelevance: string;
  governingPlanets: string[];
  keyIndustries: string;
}

export interface PlanetSignificance {
  name: string;
  sanskritName: string;
  symbol: string;
  role: string;
  careerDomains: string[];
  powerAttribute: string;
}

export interface Testimonial {
  id: string;
  author: string;
  designation: string;
  location: string;
  rating: number;
  category: 'switch' | 'govt_corp' | 'executive' | 'all';
  quote: string;
  detailedOutcome: string;
  date: string;
  verified: boolean;
}

export interface VideoGuide {
  id: string;
  title: string;
  duration: string;
  views: string;
  category: string;
  youtubeId: string;
  description: string;
  topics: string[];
  thumbnail: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface DeliverableItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  iconName: string;
}
