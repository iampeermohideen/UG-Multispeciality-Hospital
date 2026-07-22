export interface Department {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  headDoctor: string;
  treatments: string[];
  bedCount?: number;
  location: string;
}

export interface Doctor {
  id: string;
  name: string;
  photo: string;
  qualification: string;
  specialization: string;
  departmentId: string;
  departmentName: string;
  experienceYears: number;
  availability: string;
  days: string[];
  timing: string;
  rating: number;
  reviewCount: number;
  consultationFee: number;
  bio: string;
  languages: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  available24x7: boolean;
  features: string[];
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface HealthPackage {
  id: string;
  title: string;
  tagline: string;
  originalPrice: number;
  discountedPrice: number;
  recommendedFor: string;
  totalTests: number;
  testsList: string[];
  isPopular?: boolean;
  fastingRequired: boolean;
}

export interface Testimonial {
  id: string;
  patientName: string;
  patientPhoto: string;
  location: string;
  rating: number;
  reviewText: string;
  treatmentReceived: string;
  doctorTreated?: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'building' | 'reception' | 'icu' | 'doctors' | 'ot' | 'lab' | 'patients' | 'ambulance';
  image: string;
  caption: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: 'Health Tips' | 'Medical News' | 'Seasonal Diseases' | 'Preventive Care';
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Appointments' | 'Emergency' | 'Insurance' | 'Visiting Hours' | 'Services';
}

export interface AppointmentFormData {
  patientName: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string;
  isFirstVisit: boolean;
}

export interface InsurancePartner {
  id: string;
  name: string;
  logo: string;
  type: 'Insurance' | 'TPA' | 'Corporate';
}
