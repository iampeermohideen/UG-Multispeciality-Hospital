import {
  Department,
  Doctor,
  Service,
  Facility,
  HealthPackage,
  Testimonial,
  GalleryItem,
  BlogPost,
  FAQItem,
  InsurancePartner
} from '../types';

export const HOSPITAL_INFO = {
  name: 'UG Multispeciality Hospital',
  tagline: 'Advanced Healthcare With Compassion',
  phone: '+91 98765 43210',
  emergencyPhone: '+91 98765 00000',
  ambulancePhone: '+91 98765 11111',
  email: 'info@ughospital.com',
  appointmentsEmail: 'appointments@ughospital.com',
  address: '100 Feet Ring Road, Healthcare Enclave, City Central, Bengaluru, Karnataka - 560001',
  workingHours: '24 Hours Open (Emergency & ICU) | OPD: 8:00 AM - 8:00 PM',
  whatsapp: '+919876543210',
  stats: [
    { label: 'Years Experience', value: 25, suffix: '+' },
    { label: 'Expert Doctors', value: 100, suffix: '+' },
    { label: 'Modern Beds', value: 300, suffix: '+' },
    { label: 'Happy Patients', value: 100000, suffix: '+' }
  ]
};

export const WHY_CHOOSE_US = [
  {
    id: 'emergency-247',
    title: '24/7 Emergency Care',
    description: 'Round-the-clock rapid response trauma center, critical care specialists, and dedicated fleet of cardiac ambulances.',
    icon: 'Ambulance'
  },
  {
    id: 'expert-doctors',
    title: 'Expert Doctors',
    description: 'Board-certified senior consultants, surgeons, and super-specialists with international fellowships and decades of experience.',
    icon: 'UserCheck'
  },
  {
    id: 'advanced-tech',
    title: 'Advanced Technology',
    description: 'Equipped with 3T MRI, 128-Slice CT, Robotic Surgical Systems, and ultra-modern digital catheterization labs.',
    icon: 'Cpu'
  },
  {
    id: 'affordable-care',
    title: 'Affordable & Transparent',
    description: 'Fair pricing structure, comprehensive cashless insurance support, and no hidden financial surcharges.',
    icon: 'ShieldCheck'
  },
  {
    id: 'modern-icu',
    title: 'Modern ICU Beds',
    description: '50+ isolation and critical care beds equipped with HEPA filters, central monitoring, and dedicated nursing ratios.',
    icon: 'Activity'
  },
  {
    id: 'modular-ot',
    title: 'Operation Theatres',
    description: 'Modular ultra-clean OTs with laminar airflow system, minimum infection risks, and state-of-the-art anesthesia workstations.',
    icon: 'Microscope'
  },
  {
    id: 'digital-lab',
    title: 'Digital Laboratory',
    description: 'NABL accredited automated pathology, microbiology, and molecular diagnostics with online instant report delivery.',
    icon: 'FlaskConical'
  },
  {
    id: 'patient-centered',
    title: 'Patient-Centered Treatment',
    description: 'Holistic healing environment, compassionate patient relationship executives, and custom dietary guidance.',
    icon: 'HeartHandshake'
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'gen-med',
    name: 'General Medicine',
    shortDesc: 'Comprehensive diagnosis & treatment for acute illnesses, chronic lifestyle disorders, and complex medical conditions.',
    fullDesc: 'Our General Medicine department provides preventive, diagnostic, and curative care for adult medical conditions including hypertension, diabetes, infections, thyroid disorders, and multi-organ diseases.',
    iconName: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Rajesh Kumar',
    treatments: ['Diabetes Management', 'Hypertension & Lipid Care', 'Fever & Infection Clinic', 'Thyroid & Endocrine Care'],
    bedCount: 40,
    location: 'Block A, 1st Floor'
  },
  {
    id: 'gen-surg',
    name: 'General Surgery',
    shortDesc: 'Advanced laparoscopic, minimally invasive, and open surgical procedures performed by veteran surgeons.',
    fullDesc: 'State-of-the-art surgical suites offering minimal access laparoscopic surgery, hernia repair, gallbladder surgery, appendectomy, and gastrointestinal surgical procedures with rapid recovery protocols.',
    iconName: 'Scissors',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Vikramaditya Shah',
    treatments: ['Laparoscopic Cholecystectomy', 'Hernia Repair', 'Appendectomy', 'Bariatric & Weight Loss Surgery'],
    bedCount: 35,
    location: 'Block B, 2nd Floor'
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    shortDesc: 'Comprehensive cardiac care including angiogram, angioplasty, pacemaker implantation, and heart failure management.',
    fullDesc: 'Equipped with a flat-panel digital Cath Lab, our Cardiology department offers 24/7 primary angioplasty for heart attacks, electrophysiology, 2D Echo, TEE, and preventive cardiology programs.',
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Ananya Sharma',
    treatments: ['Coronary Angiography & Angioplasty', 'Pacemaker Implantation', '2D & 3D Echocardiography', 'Heart Failure Management'],
    bedCount: 30,
    location: 'Block C, 3rd Floor'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    shortDesc: 'Expert care for stroke, epilepsy, Parkinson’s disease, neuropathy, migraine, and complex neurological disorders.',
    fullDesc: 'Dedicated Stroke Unit offering thrombolysis within the golden hour, advanced EEG, EMG, nerve conduction studies, and neuro-rehabilitation therapy.',
    iconName: 'Brain',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Siddharth Menon',
    treatments: ['Acute Stroke Care', 'Epilepsy Clinic', 'Parkinson’s & Movement Disorders', 'Migraine & Headache Management'],
    bedCount: 25,
    location: 'Block C, 2nd Floor'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    shortDesc: 'Joint replacement surgery, sports medicine, trauma care, spine surgery, and arthroscopy.',
    fullDesc: 'Renowned joint replacement unit specializing in computer-navigated Knee and Hip replacements, arthroscopic ligament repairs, complex fracture surgeries, and spine correction.',
    iconName: 'Bone',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Ramesh Sundaram',
    treatments: ['Total Knee & Hip Replacement', 'ACL Arthroscopy', 'Spine Surgery', 'Complex Trauma & Fracture Care'],
    bedCount: 35,
    location: 'Block A, 2nd Floor'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    shortDesc: 'Child healthcare, newborn intensive care (NICU), pediatric emergency, and vaccination services.',
    fullDesc: 'Child-friendly department providing complete physical and developmental care from birth to adolescence, backed by Level-3 NICU and Pediatric ICU.',
    iconName: 'Baby',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Meera Vasudevan',
    treatments: ['Pediatric Immunization', 'Newborn Intensive Care (NICU)', 'Growth & Development Tracking', 'Pediatric Respiratory Care'],
    bedCount: 20,
    location: 'Block B, 1st Floor'
  },
  {
    id: 'gynecology',
    name: 'Gynecology & Obstetrics',
    shortDesc: 'Maternity care, painless delivery, high-risk pregnancy management, and gynecological surgeries.',
    fullDesc: 'Comprehensive women’s health center with luxury birthing suites, fetal medicine unit, laparoscopic hysterectomy, and fertility guidance.',
    iconName: 'UserPlus',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Sunita Reddy',
    treatments: ['High-Risk Pregnancy Care', 'Painless Labor & Delivery', 'Laparoscopic Gynec Surgery', 'PCOS & Infertility Clinic'],
    bedCount: 30,
    location: 'Block A, 3rd Floor'
  },
  {
    id: 'ent',
    name: 'ENT (Ear, Nose & Throat)',
    shortDesc: 'Microscopic ear surgery, sinus surgery, throat care, snoring treatment, and hearing assessment.',
    fullDesc: 'Advanced ENT care featuring endoscopic sinus surgery, cochlear implants, voice therapy, and vertigo management.',
    iconName: 'Ear',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. K. V. N. Murthy',
    treatments: ['Endoscopic Sinus Surgery (FESS)', 'Micro Ear Surgery & Tympanoplasty', 'Tonsillectomy & Adenoidectomy', 'Hearing & Speech Audiometry'],
    bedCount: 15,
    location: 'Block B, OPD Floor'
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    shortDesc: 'Cataract surgery (Micro-incision blade-free), glaucoma care, retina laser, and vision correction.',
    fullDesc: 'State-of-the-art eye clinic offering stitchless phacoemulsification, diabetic retinopathy lasers, corneal evaluation, and pediatric eye care.',
    iconName: 'Eye',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Preeti Deshmukh',
    treatments: ['Phacoemulsification Cataract Surgery', 'LASIK & Refractive Correction', 'Glaucoma Management', 'Diabetic Retina Lasers'],
    bedCount: 10,
    location: 'Block B, OPD Floor'
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Cosmetology',
    shortDesc: 'Treatment for skin allergies, acne, eczema, hair loss, laser skin rejuvenation, and anti-aging therapies.',
    fullDesc: 'Advanced dermatological diagnosis alongside medical aesthetics, laser treatments, PRP therapy, and skin biopsy services.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Alok Verma',
    treatments: ['Psoriasis & Eczema Clinic', 'Acne Scar Laser Therapy', 'PRP Hair Restoration', 'Skin Allergy Testing'],
    bedCount: 10,
    location: 'Block A, OPD Floor'
  },
  {
    id: 'dentistry',
    name: 'Dentistry & Maxillofacial',
    shortDesc: 'Root canal treatment, dental implants, teeth whitening, jaw fracture management, and cosmetic dentistry.',
    fullDesc: 'Full spectrum dental suite with digital intraoral scanner, painless root canal, invisible aligners, and facial trauma reconstruction.',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Sneha Roy',
    treatments: ['Single Visit Root Canal', 'Dental Implants', 'Invisible Braces/Aligners', 'Maxillofacial Trauma Surgery'],
    bedCount: 10,
    location: 'Block B, OPD Floor'
  },
  {
    id: 'urology',
    name: 'Urology',
    shortDesc: 'Laser treatment for kidney stones, prostate enlargement, urinary infections, and uro-oncology.',
    fullDesc: 'Advanced urology care with Holmium Laser lithotripsy, minimally invasive prostate surgery (TURP/HOLEP), and male fertility care.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1582718142937-883646ce61a1?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Arvind Swamy',
    treatments: ['Laser Kidney Stone Removal (RIRS)', 'Prostate Surgery (TURP/Laser)', 'Uro-Oncology Surgeries', 'Infertility & Andrology'],
    bedCount: 20,
    location: 'Block C, 1st Floor'
  },
  {
    id: 'nephrology',
    name: 'Nephrology & Dialysis',
    shortDesc: 'Kidney disease management, 24/7 hemodialysis, peritoneal dialysis, and kidney transplant care.',
    fullDesc: 'Modern 15-bed dialysis center with ultra-pure RO water purification, acute kidney injury management, and pre/post transplant care.',
    iconName: 'Droplet',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Varun Hegde',
    treatments: ['24x7 Hemodialysis Unit', 'Kidney Biopsy', 'Chronic Kidney Disease Management', 'Hypertensive Kidney Care'],
    bedCount: 20,
    location: 'Block C, 1st Floor'
  },
  {
    id: 'pulmonology',
    name: 'Pulmonology',
    shortDesc: 'Care for asthma, COPD, pneumonia, sleep apnea, interstitial lung disease, and bronchoscopy.',
    fullDesc: 'Comprehensive respiratory care center with pulmonary function laboratory, video bronchoscopy, and overnight sleep study setup.',
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Rohan Banerjee',
    treatments: ['Pulmonary Function Test (PFT)', 'Video Bronchoscopy', 'Asthma & Allergy Clinic', 'Sleep Apnea Diagnosis (Polysomnography)'],
    bedCount: 20,
    location: 'Block A, 1st Floor'
  },
  {
    id: 'emergency-med',
    name: 'Emergency Medicine',
    shortDesc: 'Level-1 emergency trauma care, cardiac resuscitation, acute injury triage, and poison management.',
    fullDesc: 'Round-the-clock emergency department managed by certified emergency physicians, equipped with dedicated resuscitation bays, minor OT, and direct ICU elevator link.',
    iconName: 'Cross',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Deepa Nair',
    treatments: ['Acute Trauma & Injury Protocol', 'Cardiac Resuscitation (ACLS)', 'Stroke Golden Hour Triage', 'Poison & Overdose Protocol'],
    bedCount: 25,
    location: 'Ground Floor Emergency Wing'
  },
  {
    id: 'radiology',
    name: 'Radiology & Imaging',
    shortDesc: '3T MRI, 128-Slice CT Scan, Digital X-Ray, 4D Ultrasound, Color Doppler, and Mammography.',
    fullDesc: 'Fully digital imaging department connected to PACS for instant online doctor reports, sub-specialty radiologist reporting, and image-guided interventions.',
    iconName: 'Scan',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Sanjay Nambiar',
    treatments: ['3 Tesla MRI Diagnostics', '128-Slice Cardiac CT Angio', '4D Ultrasound & Doppler', 'Digital Mammography'],
    bedCount: 0,
    location: 'Basement 1, Diagnostic Wing'
  },
  {
    id: 'icu-critical',
    name: 'ICU & Critical Care',
    shortDesc: '50-Bed multi-disciplinary ICU, Cardiac Care Unit (CCU), High Dependency Unit (HDU), and NICU.',
    fullDesc: 'Intensive care managed by 24/7 dedicated intensivists, invasive hemodynamic monitoring, advanced ventilators, CRRT, and ECMO readiness.',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Nagesh Rao',
    treatments: ['Invasive Mechanical Ventilation', 'Hemodynamic Monitoring', 'Continuous Renal Replacement (CRRT)', 'Post-Surgical Critical Care'],
    bedCount: 50,
    location: 'Block C, 4th Floor'
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy & Rehab',
    shortDesc: 'Neuro-rehabilitation, post-op joint rehab, sports injury recovery, electrotherapy, and ergonomic training.',
    fullDesc: 'Modern physical rehabilitation center equipped with laser therapy, ultrasonic therapy, traction, exercise gym, and customized home exercise plans.',
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    headDoctor: 'Dr. Kavita Joshi (PT)',
    treatments: ['Post Knee/Hip Replacement Rehab', 'Neuro Stroke Rehabilitation', 'Sports Injury Recovery', 'Spine & Posture Care'],
    bedCount: 10,
    location: 'Block A, Ground Floor'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Ananya Sharma',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    qualification: 'MD, DM (Cardiology), FACC (USA)',
    specialization: 'Senior Interventional Cardiologist',
    departmentId: 'cardiology',
    departmentName: 'Cardiology',
    experienceYears: 18,
    availability: 'Available Today',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    timing: '10:00 AM - 04:00 PM',
    rating: 4.9,
    reviewCount: 420,
    consultationFee: 800,
    bio: 'Pioneer in complex coronary angioplasties, radial access cardiac interventions, and structural heart disease care with over 5,000 successful procedures.',
    languages: ['English', 'Hindi', 'Kannada']
  },
  {
    id: 'doc-2',
    name: 'Dr. Ramesh Sundaram',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    qualification: 'MS (Ortho), M.Ch (UK), Fellowship Joint Replacement',
    specialization: 'Chief Orthopedic & Robotic Joint Replacement Surgeon',
    departmentId: 'orthopedics',
    departmentName: 'Orthopedics',
    experienceYears: 22,
    availability: 'Available Today',
    days: ['Mon', 'Wed', 'Fri', 'Sat'],
    timing: '11:00 AM - 05:00 PM',
    rating: 4.95,
    reviewCount: 510,
    consultationFee: 900,
    bio: 'Renowned joint surgeon specializing in computer-navigated total knee and hip replacements, complex revision surgeries, and knee arthroscopy.',
    languages: ['English', 'Tamil', 'Hindi']
  },
  {
    id: 'doc-3',
    name: 'Dr. Siddharth Menon',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    qualification: 'DM (Neurology), Fellowship Stroke Care (Canada)',
    specialization: 'Senior Neurologist & Stroke Specialist',
    departmentId: 'neurology',
    departmentName: 'Neurology',
    experienceYears: 16,
    availability: 'Available Today',
    days: ['Mon', 'Tue', 'Thu', 'Fri'],
    timing: '09:30 AM - 02:30 PM',
    rating: 4.88,
    reviewCount: 310,
    consultationFee: 850,
    bio: 'Expert in hyperacute stroke management, refractory epilepsy, movement disorders, and nerve conduction electrodiagnosis.',
    languages: ['English', 'Malayalam', 'Hindi']
  },
  {
    id: 'doc-4',
    name: 'Dr. Sunita Reddy',
    photo: 'https://images.unsplash.com/photo-1594824813566-82823d5afe4a?auto=format&fit=crop&w=600&q=80',
    qualification: 'MD (Obstetrics & Gynae), DNB, FICOG',
    specialization: 'Director - Obstetrics, Gynaecology & IVF',
    departmentId: 'gynecology',
    departmentName: 'Gynecology & Obstetrics',
    experienceYears: 20,
    availability: 'Available Today',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    timing: '10:00 AM - 03:00 PM',
    rating: 4.92,
    reviewCount: 680,
    consultationFee: 800,
    bio: 'Specialist in high-risk pregnancies, painless labor management, laparoscopic hysterectomy, and holistic adolescent and menopausal care.',
    languages: ['English', 'Telugu', 'Hindi', 'Kannada']
  },
  {
    id: 'doc-5',
    name: 'Dr. Vikramaditya Shah',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    qualification: 'MS (General Surgery), FMAS, FIAGES',
    specialization: 'Senior Laparoscopic & Bariatric Surgeon',
    departmentId: 'gen-surg',
    departmentName: 'General Surgery',
    experienceYears: 19,
    availability: 'Available Tomorrow',
    days: ['Tue', 'Thu', 'Sat'],
    timing: '02:00 PM - 07:00 PM',
    rating: 4.85,
    reviewCount: 290,
    consultationFee: 750,
    bio: 'Expert in minimal access laparoscopic hernia, gallbladder, gastrointestinal surgeries, and laser proctology procedures.',
    languages: ['English', 'Gujarati', 'Hindi']
  },
  {
    id: 'doc-6',
    name: 'Dr. Meera Vasudevan',
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    qualification: 'MD (Pediatrics), Fellowship Neonatology (Singapore)',
    specialization: 'Senior Pediatrician & Neonatologist',
    departmentId: 'pediatrics',
    departmentName: 'Pediatrics',
    experienceYears: 14,
    availability: 'Available Today',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    timing: '09:00 AM - 01:00 PM',
    rating: 4.9,
    reviewCount: 450,
    consultationFee: 700,
    bio: 'Dedicated child specialist managing premature infants, growth disorders, childhood asthma, and routine pediatric immunizations.',
    languages: ['English', 'Tamil', 'Kannada']
  },
  {
    id: 'doc-7',
    name: 'Dr. Rajesh Kumar',
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    qualification: 'MD (Internal Medicine), FACP',
    specialization: 'Chief Consultant - Internal Medicine & Diabetology',
    departmentId: 'gen-med',
    departmentName: 'General Medicine',
    experienceYears: 24,
    availability: 'Available Today',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    timing: '08:30 AM - 01:30 PM',
    rating: 4.87,
    reviewCount: 530,
    consultationFee: 750,
    bio: 'Extensive background in managing complex multi-system illness, severe diabetes complications, infectious fevers, and adult preventive health.',
    languages: ['English', 'Hindi', 'Bengali']
  },
  {
    id: 'doc-8',
    name: 'Dr. Arvind Swamy',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    qualification: 'MS, M.Ch (Urology), FRCS',
    specialization: 'Senior Urologist & Renal Transplant Surgeon',
    departmentId: 'urology',
    departmentName: 'Urology',
    experienceYears: 17,
    availability: 'Available Tomorrow',
    days: ['Mon', 'Wed', 'Fri'],
    timing: '03:00 PM - 07:00 PM',
    rating: 4.91,
    reviewCount: 380,
    consultationFee: 850,
    bio: 'Specializes in laser stone treatment (RIRS), prostate surgery (TURP/HoLEP), reconstructive urology, and male reproductive care.',
    languages: ['English', 'Kannada', 'Hindi']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Comprehensive Health Checkups',
    description: 'Customized preventive health checkup packages tailored for individuals, families, corporate employees, and senior citizens.',
    iconName: 'ClipboardCheck',
    available24x7: false,
    features: ['Same-day report delivery', 'Complimentary physician consultation', 'Customized dietary analysis']
  },
  {
    id: 'srv-2',
    title: '24/7 Emergency & Trauma Care',
    description: 'Immediate medical attention for heart attacks, stroke, polytrauma, accidents, and acute pediatric emergencies.',
    iconName: 'Siren',
    available24x7: true,
    features: ['Dedicated Resuscitation Bay', 'Golden Hour Trauma Protocol', 'Direct ICU Escalation']
  },
  {
    id: 'srv-3',
    title: 'Advanced Cardiac Ambulance Fleet',
    description: 'Mobile ICUs equipped with ventilator, multipara monitor, defibrillator, oxygen, and trained emergency technicians.',
    iconName: 'Ambulance',
    available24x7: true,
    features: ['GPS Live Tracking', 'Tele-monitoring with ER Doctors', 'Rapid Response Dispatch']
  },
  {
    id: 'srv-4',
    title: 'NABL Accredited Laboratory',
    description: 'Full automated pathology, biochemistry, hematology, microbiology, and molecular diagnostic testing.',
    iconName: 'FlaskConical',
    available24x7: true,
    features: ['Home sample collection', 'SMS & WhatsApp instant reports', 'Strict Barcode tracking']
  },
  {
    id: 'srv-5',
    title: '24/7 In-House Pharmacy',
    description: 'Fully stocked pharmacy with genuine medicines, surgical equipment, baby care items, and refrigerated biologicals.',
    iconName: 'Pill',
    available24x7: true,
    features: ['100% genuine medicines', 'Bedside IPD delivery', 'Senior citizen discounts']
  },
  {
    id: 'srv-6',
    title: 'Licensed Blood Bank & Component Unit',
    description: '24/7 availability of tested whole blood, packed red blood cells, single donor platelets, and fresh frozen plasma.',
    iconName: 'Droplet',
    available24x7: true,
    features: ['NAT-tested safe blood', 'Apheresis platelet facility', 'Voluntary donor network']
  },
  {
    id: 'srv-7',
    title: 'ICU & Critical Care',
    description: '50-bed multi-disciplinary ICU with advanced invasive monitoring, mechanical ventilation, and dedicated 1:1 nursing.',
    iconName: 'Activity',
    available24x7: true,
    features: ['Intensivist present 24/7', 'HEPA-filtered isolation rooms', 'Dialysis at bedside']
  },
  {
    id: 'srv-8',
    title: 'Ultra-Clean Operation Theatres',
    description: 'Laminar air flow surgical suites designed for joint replacement, neurosurgery, cardiac procedures, and laparoscopy.',
    iconName: 'Scissors',
    available24x7: true,
    features: ['Zero-infection airflow', 'Latest C-Arm & microscope', 'Advanced Anesthesia workstations']
  },
  {
    id: 'srv-9',
    title: 'Vaccination & Immunization Centre',
    description: 'Full spectrum vaccination services for infants, children, adults, international travelers, and senior citizens.',
    iconName: 'Syringe',
    available24x7: false,
    features: ['Cold chain maintained', 'WHO-approved vaccines', 'Digital immunization record']
  },
  {
    id: 'srv-10',
    title: 'Home Healthcare Services',
    description: 'Professional nursing care, physiotherapist visits, doctor home visits, and medical equipment rentals at your doorstep.',
    iconName: 'Home',
    available24x7: true,
    features: ['Post-surgical wound care', 'Elderly care assistants', 'Lab test sample pickup']
  },
  {
    id: 'srv-11',
    title: 'Telemedicine & E-Consultation',
    description: 'Connect with senior consultants virtually via high-definition video call from the comfort of your home.',
    iconName: 'Video',
    available24x7: false,
    features: ['Digital prescription delivery', 'Follow-up consultation', 'Easy appointment booking']
  },
  {
    id: 'srv-12',
    title: 'Cashless Insurance & TPA Desk',
    description: 'Dedicated helpdesk to assist with seamless cashless hospitalization claims with 40+ leading insurance providers.',
    iconName: 'FileText',
    available24x7: true,
    features: ['Fast pre-authorization', 'Zero paperwork hassle', 'Corporate tie-up support']
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'fac-1',
    title: '3 Tesla Digital MRI Scan',
    category: 'Diagnostics',
    description: 'Ultra-high resolution brain, spine, joint, and abdominal imaging with reduced scan duration and spacious quiet bore design.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    highlights: ['Silent MRI technology', 'Cardiac & Neuro Vascular MRI', 'Spacious wide-bore comfort']
  },
  {
    id: 'fac-2',
    title: '128-Slice Cardiac CT Scan',
    category: 'Diagnostics',
    description: 'Non-invasive coronary angiograms and ultra-fast body scanning with ultra-low radiation dosage protocols.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    highlights: ['Heart CT Angiography in seconds', 'Low radiation AI software', 'Whole-body trauma CT']
  },
  {
    id: 'fac-3',
    title: 'Flat-Panel Digital Cath Lab',
    category: 'Cardiology',
    description: 'State-of-the-art catheterization laboratory for emergency angioplasties, stenting, pacemaker insertions, and peripheral vascular procedures.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    highlights: ['24/7 Primary PCI readiness', 'Clarity IQ low dose imaging', 'Intravascular Ultrasound (IVUS)']
  },
  {
    id: 'fac-4',
    title: 'Level-3 NICU & PICU',
    category: 'Pediatrics',
    description: 'Specialized neonatal and pediatric intensive care equipped with advanced incubators, high-frequency ventilators, and cooling therapy.',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80',
    highlights: ['Care for micro-preemies (26+ weeks)', 'Invasive arterial monitoring', '24/7 Neonatologist on site']
  },
  {
    id: 'fac-5',
    title: 'Modular Operation Theatres',
    category: 'Surgical Unit',
    description: '6 Ultra-modern surgical suites featuring seamless anti-bacterial walls, HEPA air filtration, LED shadowless surgical lighting, and integrated audio-video transmission.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    highlights: ['Laminar positive pressure airflow', 'Stryker 4K Laparoscopy tower', 'Carl Zeiss Neuro-microscope']
  },
  {
    id: 'fac-6',
    title: 'Deluxe & Private Patient Suites',
    category: 'Inpatient Rooms',
    description: 'Spacious, air-conditioned private rooms equipped with motorized patient bed, attendant sofa bed, Smart TV, Wi-Fi, and en-suite modern bathroom.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    highlights: ['Nurse call bell system', 'In-room customized meal service', '24/7 Attendant access']
  },
  {
    id: 'fac-7',
    title: 'Digital X-Ray & 4D Ultrasound',
    category: 'Diagnostics',
    description: 'High frequency digital radiography and high resolution 4D Doppler ultrasound for pregnancy, abdominal, and musculoskeletal scans.',
    image: 'https://images.unsplash.com/photo-1582718142937-883646ce61a1?auto=format&fit=crop&w=800&q=80',
    highlights: ['Instant digital PACS access', 'Color Doppler blood flow mapping', 'Targeted anomaly scan']
  },
  {
    id: 'fac-8',
    title: 'Emergency Trauma & Triage Ward',
    category: 'Emergency',
    description: 'A 25-bed dedicated emergency department with direct triage entry, minor surgical theatre, and point-of-care laboratory testing.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    highlights: ['Zero-wait resuscitation bay', 'Dedicated CT/X-Ray link', 'Trauma surgeon on floor']
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'pkg-basic',
    title: 'Basic Health Checkup',
    tagline: 'Essential screening for overall body health and early risk identification.',
    originalPrice: 2499,
    discountedPrice: 999,
    recommendedFor: 'Men & Women above 18 years',
    totalTests: 45,
    fastingRequired: true,
    testsList: [
      'Complete Blood Count (CBC - 24 Parameters)',
      'Fasting Blood Sugar (FBS)',
      'Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)',
      'Liver Function Test (SGOT, SGPT, Bilirubin)',
      'Kidney Function Test (Serum Creatinine, Blood Urea)',
      'Urine Routine Examination',
      'Physician Consultation & Health Guidance'
    ]
  },
  {
    id: 'pkg-executive',
    title: 'Executive Master Health Package',
    tagline: 'Comprehensive full-body evaluation for working professionals and busy adults.',
    originalPrice: 6999,
    discountedPrice: 2999,
    recommendedFor: 'Working Professionals (30+ years)',
    totalTests: 75,
    isPopular: true,
    fastingRequired: true,
    testsList: [
      'All Basic Package Tests (45 Parameters)',
      'HbA1c (Average 3-Month Blood Sugar)',
      'Thyroid Profile (T3, T4, TSH)',
      'Vitamin D3 & Vitamin B12 Levels',
      'Electrocardiogram (ECG 12-Lead)',
      'Chest X-Ray Digital',
      'Ultrasound Abdomen & Pelvis',
      'Senior Doctor & Dietitian Consultation'
    ]
  },
  {
    id: 'pkg-senior',
    title: 'Senior Citizen Wellness Package',
    tagline: 'Specialized diagnostic panel focused on joint health, heart function, and age-related screening.',
    originalPrice: 8499,
    discountedPrice: 3499,
    recommendedFor: 'Seniors aged 60+ years',
    totalTests: 80,
    fastingRequired: true,
    testsList: [
      'Comprehensive Blood & Diabetes Profile',
      'Cardiac Profile (ECG + 2D Echo)',
      'Bone Mineral Density (DEXA) / Calcium & Phosphorus',
      'Kidney & Liver Comprehensive Function',
      'PSA Test (For Men) / PAP Smear (For Women)',
      'Ophthalmology & ENT Screening',
      'Geriatric Specialist Consultation'
    ]
  },
  {
    id: 'pkg-women',
    title: 'Women’s Comprehensive Health Package',
    tagline: 'Tailored screening for hormonal balance, breast health, bone health, and gynecology.',
    originalPrice: 7999,
    discountedPrice: 3199,
    recommendedFor: 'Women of all ages',
    totalTests: 70,
    fastingRequired: true,
    testsList: [
      'Thyroid & Hormonal Panel (TSH, Prolactin)',
      'Iron Profile & Hemogram (Anemia Panel)',
      'Mammography / Breast Ultrasound',
      'PAP Smear & Cervical Screening',
      'Vitamin D3 & Calcium Levels',
      'Abdomen & Pelvis Sonography',
      'Senior Gynecologist Consultation'
    ]
  },
  {
    id: 'pkg-diabetes',
    title: 'Diabetes Care & Cardiac Shield',
    tagline: 'Targeted monitoring for diabetic patients to prevent heart, kidney, and eye complications.',
    originalPrice: 5999,
    discountedPrice: 2499,
    recommendedFor: 'Diabetic & Pre-diabetic individuals',
    totalTests: 55,
    fastingRequired: true,
    testsList: [
      'FBS, PPBS & HbA1c Glycated Hemoglobin',
      'Urine Microalbumin & Creatinine Ratio',
      'Complete Lipid Profile & hs-CRP',
      'ECG 12-Lead & Diabetic Neuropathy Foot Test',
      'Dilated Fundus Eye Examination',
      'Diabetologist & Clinical Nutritionist Consultation'
    ]
  },
  {
    id: 'pkg-heart',
    title: 'Advanced Heart Checkup',
    tagline: 'In-depth cardiovascular risk evaluation including Stress Test and 2D Echo.',
    originalPrice: 9999,
    discountedPrice: 4299,
    recommendedFor: 'High stress, family history of heart disease',
    totalTests: 60,
    fastingRequired: true,
    testsList: [
      '2D Echocardiography with Color Doppler',
      'Treadmill Stress Test (TMT / Stress ECG)',
      'High Sensitivity CRP & Cardiac Markers',
      'Lipid Profile & Homocysteine Level',
      'Kidney Function & Blood Electrolytes',
      'Chest X-Ray & Pulmonary Screening',
      'Senior Cardiologist Consultation'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'Subhash Chandra Bose',
    patientPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    location: 'Jayanagar, Bengaluru',
    rating: 5,
    reviewText: 'My father was admitted with severe chest pain at midnight. The ER team at UG Hospital responded within seconds. Dr. Ananya Sharma performed primary angioplasty smoothly. The doctors and nurses in CCU were extremely attentive. Truly a lifesaver hospital!',
    treatmentReceived: 'Emergency Angioplasty & Cardiac Care',
    doctorTreated: 'Dr. Ananya Sharma',
    date: '2 weeks ago'
  },
  {
    id: 't-2',
    patientName: 'Priya Sundararaman',
    patientPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    location: 'Indiranagar, Bengaluru',
    rating: 5,
    reviewText: 'Delivered my baby girl at UG Multispeciality Hospital under Dr. Sunita Reddy. The maternity suite was clean like a 5-star hotel, and the nursing staff gave us constant encouragement during labor. Painless delivery experience was fantastic!',
    treatmentReceived: 'Maternity & Normal Delivery',
    doctorTreated: 'Dr. Sunita Reddy',
    date: '1 month ago'
  },
  {
    id: 't-3',
    patientName: 'Kameshwar Rao',
    patientPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    location: 'Whitefield, Bengaluru',
    rating: 5,
    reviewText: 'Underwent total knee replacement surgery for both legs with Dr. Ramesh Sundaram. I was able to walk with support on the second day itself. The physiotherapy rehab unit is top-notch. I am pain-free after 5 years of joint suffering.',
    treatmentReceived: 'Bilateral Knee Replacement Surgery',
    doctorTreated: 'Dr. Ramesh Sundaram',
    date: '3 weeks ago'
  },
  {
    id: 't-4',
    patientName: 'Nandini Patel',
    patientPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    location: 'Koramangala, Bengaluru',
    rating: 5,
    reviewText: 'Booked the Executive Master Health Checkup package for my parents. Everything from blood sample collection to ultrasound and doctor consultation was completed seamlessly in under 3 hours. Reports arrived on WhatsApp the same evening!',
    treatmentReceived: 'Executive Health Package',
    doctorTreated: 'Dr. Rajesh Kumar',
    date: '1 week ago'
  },
  {
    id: 't-5',
    patientName: 'Aravind Venkat',
    patientPhoto: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
    location: 'HSR Layout, Bengaluru',
    rating: 5,
    reviewText: 'Had a sudden kidney stone colic. Dr. Arvind Swamy performed laser RIRS surgery without any external incision. Hospital billing was transparent and cashless approval with Star Health took less than 45 minutes.',
    treatmentReceived: 'Laser Kidney Stone Surgery',
    doctorTreated: 'Dr. Arvind Swamy',
    date: '1 month ago'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Modern Hospital Facade',
    category: 'building',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=80',
    caption: 'State-of-the-art 300-bed multispeciality hospital building with 24/7 emergency ramp entrance.'
  },
  {
    id: 'g-2',
    title: 'Main Executive Reception Lobby',
    category: 'reception',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Spacious, air-conditioned reception desk with dedicated patient relationship helpdesk.'
  },
  {
    id: 'g-3',
    title: 'Multi-Disciplinary Intensive Care Unit (ICU)',
    category: 'icu',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    caption: 'Advanced ICU equipped with central monitoring, invasive ventilators, and 1:1 nursing ratios.'
  },
  {
    id: 'g-4',
    title: 'Laminar Airflow Operation Theatre',
    category: 'ot',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80',
    caption: 'Ultra-clean modular surgical suite with 4K endoscopy towers and LED surgical lights.'
  },
  {
    id: 'g-5',
    title: 'Digital Cath Lab Suite',
    category: 'building',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1000&q=80',
    caption: 'High-definition flat panel cardiac catheterization lab for round-the-clock emergency angioplasties.'
  },
  {
    id: 'g-6',
    title: 'Automated Pathology Laboratory',
    category: 'lab',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    caption: 'NABL accredited automated biochemistry analyzers ensuring zero-error rapid test results.'
  },
  {
    id: 'g-7',
    title: 'Cardiac Intensive Care Unit Ambulance',
    category: 'ambulance',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=80',
    caption: 'Mobile ICU ambulance equipped with transport ventilator, monitor, and emergency defibrillator.'
  },
  {
    id: 'g-8',
    title: 'Senior Medical Specialist Team',
    category: 'doctors',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Our multidisciplinary team of board-certified consultants reviewing complex medical cases.'
  },
  {
    id: 'g-9',
    title: 'Deluxe Private Patient Suite',
    category: 'patients',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Comfortable inpatient private suite designed for rapid recovery and family attendant comfort.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: '10 Crucial Warning Signs of Heart Attack You Should Never Ignore',
    excerpt: 'Chest discomfort is not the only sign. Learn how to recognize atypical symptoms like jaw pain, sweating, and shortness of breath.',
    content: `Heart disease remains one of the leading health concerns worldwide. While sudden chest pressure is the classic sign of a heart attack (Myocardial Infarction), many patients — especially women and diabetic individuals — experience atypical symptoms.

1. **Chest Pressure or Fullness**: A feeling of uncomfortable squeezing, heaviness, or burning sensation in the center of the chest lasting more than a few minutes.
2. **Pain Radiating to Jaw or Left Arm**: Discomfort that travels to the left shoulder, arm, back, neck, or jaw.
3. **Unexplained Cold Sweats**: Breaking out in a cold sweat suddenly without physical exertion.
4. **Shortness of Breath**: Difficulty catching your breath while resting or doing minor activities.
5. **Nausea & Lightheadedness**: Sudden dizziness or feeling faint accompanied by abdominal discomfort.

If you or anyone around you exhibits these symptoms, call UG Hospital Emergency at +91 98765 00000 immediately. Golden hour medical attention saves heart muscle and lives.`,
    author: 'Dr. Ananya Sharma',
    authorRole: 'Chief Interventional Cardiologist',
    date: 'July 18, 2026',
    readTime: '4 min read',
    category: 'Preventive Care',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-2',
    title: 'Monsoon Seasonal Health Guide: Preventing Dengue, Malaria & Typhoid',
    excerpt: 'Essential precautions to protect your family from vector-borne diseases, water contamination, and viral fevers during rains.',
    content: `Monsoons bring relief from summer heat, but also create breeding grounds for mosquitoes and waterborne bacteria. Here is how you can safeguard your household:

- **Eliminate Stagnant Water**: Check flower pots, air cooler trays, and roof gutters every 3 days to prevent Aedes mosquito breeding.
- **Drink Purified/Boiled Water**: Avoid street beverages and raw cut fruits outside to prevent Typhoid and Gastroenteritis.
- **Use Insect Repellent**: Apply mosquito repellents containing DEET or Icaridin during dawn and dusk.
- **Monitor High Fever**: If you develop high fever accompanied by joint pain, skin rash, or eye pain, get a Dengue NS1 antigen and complete blood count done promptly.`,
    author: 'Dr. Rajesh Kumar',
    authorRole: 'Chief Consultant - Internal Medicine',
    date: 'July 12, 2026',
    readTime: '5 min read',
    category: 'Seasonal Diseases',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-3',
    title: 'Robotic & Computer-Navigated Joint Replacement: What You Need to Know',
    excerpt: 'Discover how modern surgical navigation delivers sub-millimeter precision, faster walking recovery, and 25+ years implant longevity.',
    content: `Severe osteoarthritis can cause crippling joint pain and limit mobility. Traditional joint replacement techniques relied heavily on manual alignment jigs. Today, computer-assisted navigation and robotic guidance have revolutionized orthopedic surgery.

**Key Advantages:**
- **Customized Surgical Alignment**: Adapts to the patient's exact bone anatomy.
- **Minimal Tissue Damage**: Preserves healthy collateral ligaments and muscles.
- **Reduced Post-Op Pain**: Requires smaller incisions and yields minimal blood loss.
- **Faster Rehabilitation**: Patients begin standing and walking within 24 to 48 hours.`,
    author: 'Dr. Ramesh Sundaram',
    authorRole: 'Chief Orthopedic Surgeon',
    date: 'July 05, 2026',
    readTime: '6 min read',
    category: 'Medical News',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-4',
    title: 'Why Annual Executive Health Screening is Essential After Age 30',
    excerpt: 'Silent killers like hypertension, fatty liver, and pre-diabetes show zero symptoms early on. Learn why routine checkups matter.',
    content: `In today’s fast-paced corporate routine, chronic stress, sedentary hours, irregular sleep, and processed dietary habits take a silent toll on metabolic health. 

Lifestyle disorders like fatty liver, elevated uric acid, pre-hypertension, and dyslipidemia typically cause no pain or obvious discomfort in their initial stages. A comprehensive annual health checkup provides a baseline assessment of your vital organs and allows lifestyle intervention before permanent organ damage occurs.`,
    author: 'Dr. Deepa Nair',
    authorRole: 'Head of Preventive Health',
    date: 'June 28, 2026',
    readTime: '3 min read',
    category: 'Health Tips',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Appointments',
    question: 'How do I book an appointment with a doctor at UG Multispeciality Hospital?',
    answer: 'You can book an appointment through our website using the "Book Appointment" form, by calling our helpline at +91 98765 43210, or via WhatsApp at +91 98765 43210. Walk-in appointments are also welcomed at our OPD registration counter.'
  },
  {
    id: 'faq-2',
    category: 'Emergency',
    question: 'What emergency facilities are available 24/7?',
    answer: 'Our 24/7 Emergency Department features level-1 trauma resuscitation, cardiac care, stroke triage, emergency CT/MRI diagnostics, ICU beds, emergency surgery OTs, digital lab, blood bank, and cardiac ambulance service.'
  },
  {
    id: 'faq-3',
    category: 'Insurance',
    question: 'Do you offer cashless hospitalization for health insurance policies?',
    answer: 'Yes! We have tie-ups with 40+ major health insurance companies and TPA networks (including Star Health, ICICI Lombard, HDFC ERGO, Care Health, Max Bupa, Bajaj Allianz, Religare, and PSU insurers) for instant cashless hospitalization.'
  },
  {
    id: 'faq-4',
    category: 'Visiting Hours',
    question: 'What are the hospital visiting hours for patient relatives?',
    answer: 'General Ward & Private Room visiting hours: Morning 11:00 AM to 01:00 PM and Evening 05:00 PM to 07:00 PM. ICU visiting hours are strictly restricted to 04:00 PM - 05:00 PM (1 attendant per patient) to maintain sterile infection control.'
  },
  {
    id: 'faq-5',
    category: 'Services',
    question: 'How can I download my blood test or radiology reports online?',
    answer: 'Once your lab test or diagnostic scan is verified, a secure report download link with a PDF attachment is sent directly to your registered mobile number via SMS and WhatsApp. You can also view reports in our patient portal.'
  },
  {
    id: 'faq-6',
    category: 'Appointments',
    question: 'Can I reschedule or cancel my booked appointment?',
    answer: 'Yes, you can reschedule or cancel your appointment up to 2 hours prior to your slot time by calling our customer care executive at +91 98765 43210 or replying to your booking WhatsApp confirmation.'
  },
  {
    id: 'faq-7',
    category: 'Services',
    question: 'Is fasting required for health checkup packages?',
    answer: 'Yes, most health checkup packages require 10 to 12 hours of overnight fasting (you may consume water) to ensure accurate fasting blood sugar and lipid profile readings.'
  },
  {
    id: 'faq-8',
    category: 'Insurance',
    question: 'What documents are required for cashless admission?',
    answer: 'Please bring the patient’s Health Insurance E-card/Policy Copy, Government Photo ID Proof (Aadhaar / PAN / Driving License), and physician’s admission advice note to our Insurance TPA desk on the ground floor.'
  },
  {
    id: 'faq-9',
    category: 'Services',
    question: 'Do you offer home sample collection for lab tests?',
    answer: 'Yes, we provide home blood sample collection services across the city. You can schedule a phlebotomist visit at your preferred morning time slot by calling our diagnostics desk.'
  },
  {
    id: 'faq-10',
    category: 'Emergency',
    question: 'How do I call a cardiac ambulance in an emergency?',
    answer: 'Call our dedicated 24/7 Ambulance Hotline directly at +91 98765 11111. Our cardiac ambulance equipped with an emergency doctor/paramedic will be dispatched immediately with real-time GPS tracking.'
  }
];

export const INSURANCE_PARTNERS: InsurancePartner[] = [
  { id: 'ip-1', name: 'Star Health Insurance', logo: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=300&q=80', type: 'Insurance' },
  { id: 'ip-2', name: 'ICICI Lombard', logo: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=300&q=80', type: 'Insurance' },
  { id: 'ip-3', name: 'HDFC ERGO', logo: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=300&q=80', type: 'Insurance' },
  { id: 'ip-4', name: 'Care Health Insurance', logo: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=300&q=80', type: 'Insurance' },
  { id: 'ip-5', name: 'Max Bupa / Niva Bupa', logo: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=300&q=80', type: 'Insurance' },
  { id: 'ip-6', name: 'Bajaj Allianz', logo: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=300&q=80', type: 'Insurance' },
  { id: 'ip-7', name: 'Vidal Health TPA', logo: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=300&q=80', type: 'TPA' },
  { id: 'ip-8', name: 'Medi Assist TPA', logo: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=300&q=80', type: 'TPA' }
];
