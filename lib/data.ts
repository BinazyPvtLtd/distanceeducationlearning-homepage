export type Course = {
  t: string;
  tag: string;
  c: string;
  d: string;
  r: string;
  n: string;
  dur: string;
  lvl: string;
  img: string;
};

export const COURSES: Course[] = [
  { t: "Digital Marketing", tag: "Certification", c: "marketing", d: "Master digital marketing strategies and grow your online presence.", r: "4.8", n: "1100", dur: "6 Months", lvl: "Beginner", img: "digital-marketing" },
  { t: "Data Science Essentials", tag: "Certification", c: "it", d: "Learn data analysis and build powerful insights for real-world decisions.", r: "4.7", n: "980", dur: "3 Months", lvl: "Intermediate", img: "data-science" },
  { t: "Master in Business Administration", tag: "Degree", c: "management", d: "Advance your leadership skills and become a business expert.", r: "4.8", n: "1200", dur: "2 Years", lvl: "All Levels", img: "mba" },
  { t: "Cyber Security Basics", tag: "Certification", c: "it", d: "Understand cyber threats and protect digital assets effectively.", r: "4.6", n: "850", dur: "6 Months", lvl: "Beginner", img: "cyber-security" },
  { t: "Project Management Professional", tag: "Certification", c: "management", d: "Learn project planning and management with global best practices.", r: "4.5", n: "700", dur: "6 Months", lvl: "All Levels", img: "project-management" },
  { t: "Financial Accounting", tag: "Certification", c: "finance", d: "Master financial accounting principles and real-world applications.", r: "4.7", n: "950", dur: "6 Months", lvl: "Beginner", img: "financial-accounting" },
  { t: "Human Resource Management", tag: "Certification", c: "management", d: "Develop HR skills for effective people management and growth.", r: "4.6", n: "650", dur: "6 Months", lvl: "Beginner", img: "hr-management" },
  { t: "Cloud Computing Fundamentals", tag: "Certification", c: "it", d: "Learn cloud technologies and build a strong foundation for IT careers.", r: "4.8", n: "900", dur: "6 Months", lvl: "Intermediate", img: "cloud-computing" },
  { t: "Stock Market Analysis", tag: "Certification", c: "finance", d: "Analyse markets and make informed investment decisions.", r: "4.8", n: "900", dur: "6 Months", lvl: "Beginner", img: "stock-market" },
  { t: "Artificial Intelligence Basics", tag: "Certification", c: "it", d: "Explore AI concepts and prepare for future-ready opportunities.", r: "4.7", n: "650", dur: "6 Months", lvl: "Intermediate", img: "ai-basics" },
  { t: "Web Development Full Stack", tag: "Certification", c: "it", d: "Build full stack web applications from scratch.", r: "4.5", n: "800", dur: "6 Months", lvl: "Intermediate", img: "web-development" },
  { t: "Business Analytics", tag: "Certification", c: "more", d: "Use data to drive business decisions and strategic growth.", r: "4.5", n: "750", dur: "6 Months", lvl: "Intermediate", img: "business-analytics" },
  { t: "Master of Computer Applications", tag: "Degree", c: "it", d: "Build advanced software and systems skills over a two-year online degree.", r: "4.6", n: "540", dur: "2 Years", lvl: "All Levels", img: "mca" },
  { t: "Bachelor of Business Administration", tag: "Degree", c: "management", d: "Start your management career with a recognised undergraduate degree.", r: "4.7", n: "880", dur: "3 Years", lvl: "Beginner", img: "bba" },
  { t: "Master of Commerce", tag: "Degree", c: "finance", d: "Deepen your accounting and finance expertise with a postgraduate degree.", r: "4.5", n: "430", dur: "2 Years", lvl: "All Levels", img: "mcom" },
  { t: "Supply Chain Management", tag: "Certification", c: "more", d: "Plan sourcing, logistics and inventory for modern supply networks.", r: "4.4", n: "380", dur: "6 Months", lvl: "Intermediate", img: "supply-chain" },
];

export type LeadCourse = { id: number; code: string; label: string };

// Sourced from GET https://api.distanceeducationlearning.com/api/v1/courses
// (id + short_name are what the leads API expects back as course_id/course).
export const LEAD_COURSES: LeadCourse[] = [
  { id: 18, code: "MSC", label: "Online MSC" },
  { id: 17, code: "MCOM", label: "Online MCOM" },
  { id: 16, code: "MCA", label: "Online MCA" },
  { id: 15, code: "MBA", label: "Online MBA" },
  { id: 14, code: "MA", label: "Online MA" },
  { id: 13, code: "BCOM", label: "Online BCOM" },
  { id: 12, code: "BBA", label: "Online BBA" },
  { id: 11, code: "BA", label: "Online BA" },
  { id: 10, code: "MLIS", label: "Distance MLIS" },
  { id: 9, code: "MCOM", label: "Distance M.Com" },
  { id: 8, code: "MA", label: "Distance MA" },
  { id: 7, code: "BMS", label: "Distance BMS" },
  { id: 6, code: "BLIS", label: "Distance BLIS" },
  { id: 5, code: "BCOM", label: "Distance B.Com" },
  { id: 4, code: "MBA", label: "Distance MBA" },
  { id: 3, code: "BA", label: "Distance BA" },
  { id: 1, code: "BBA", label: "Distance BBA" },
];

export const INDIAN_STATES: string[] = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

export type University = {
  n: string;
  s: string;
  loc: string;
  type: string;
  tags: string[];
  fee: string;
  programmes: string;
  mode: string;
  ex: string;
};

export const UNIVERSITIES: University[] = [
  { n: "Amity University Online", s: "AU", loc: "Noida, Uttar Pradesh", type: "private", tags: ["UGC-DEB approved", "NAAC A+"], fee: "₹1.7L – ₹2.6L", programmes: "MBA, MCA, BBA, BCA, MA", mode: "Fully online", ex: "Largest online learner base in India" },
  { n: "Manipal University Jaipur", s: "MUJ", loc: "Jaipur, Rajasthan", type: "private", tags: ["UGC-DEB approved", "NAAC A+"], fee: "₹1.4L – ₹1.8L", programmes: "MBA, MCA, BBA, BCA, M.Com", mode: "Fully online", ex: "Strong recorded lecture library" },
  { n: "NMIMS Centre for Distance and Online Education", s: "NM", loc: "Mumbai, Maharashtra", type: "private", tags: ["UGC-DEB approved", "NAAC A+"], fee: "₹1.7L – ₹2.4L", programmes: "MBA (WX), BBA, B.Com", mode: "Online", ex: "Well known for working-professional MBA" },
  { n: "Delhi University SOL", s: "SOL", loc: "New Delhi", type: "government", tags: ["UGC-DEB approved", "Central university"], fee: "₹8K – ₹25K", programmes: "BA, B.Com, BBA FIA, MA, M.Com", mode: "Distance", ex: "Most affordable route to a DU degree" },
  { n: "Shoolini University Online", s: "SU", loc: "Solan, Himachal Pradesh", type: "private", tags: ["UGC-DEB approved", "NAAC A"], fee: "₹1.2L – ₹1.6L", programmes: "MBA, BBA, MCA", mode: "Fully online", ex: "Research-led teaching, small cohorts" },
  { n: "Lovely Professional University Online", s: "LPU", loc: "Phagwara, Punjab", type: "private", tags: ["UGC-DEB approved", "NAAC A++"], fee: "₹1.1L – ₹1.8L", programmes: "MBA, MCA, BBA, BCA, MA", mode: "Fully online", ex: "Wide specialisation choice" },
  { n: "Galgotias University Online", s: "GU", loc: "Greater Noida, Uttar Pradesh", type: "private", tags: ["UGC-DEB approved", "NAAC A+"], fee: "₹1.1L – ₹1.5L", programmes: "MBA, MCA, BBA, BCA", mode: "Fully online", ex: "Industry-linked capstone projects" },
  { n: "ICFAI University", s: "IU", loc: "Hyderabad, Telangana", type: "private", tags: ["UGC-DEB approved", "NAAC A+"], fee: "₹1.0L – ₹1.9L", programmes: "MBA, BBA, B.Com", mode: "Online and distance", ex: "Case-method business teaching" },
  { n: "University of London", s: "UoL", loc: "London, United Kingdom", type: "international", tags: ["Global degree", "Academic direction: LSE"], fee: "£5K – £13K", programmes: "BSc Business, BSc Computer Science, MSc", mode: "Fully online", ex: "UK degree studied from India" },
  { n: "Swiss School of Business and Management", s: "SSBM", loc: "Geneva, Switzerland", type: "international", tags: ["Global degree", "ASIC accredited"], fee: "€8K – €18K", programmes: "Global MBA, DBA", mode: "Fully online", ex: "Doctorate route for senior managers" },
  { n: "ESGCI Paris", s: "ESG", loc: "Paris, France", type: "international", tags: ["Global degree", "EU recognised"], fee: "€6K – €12K", programmes: "MBA, MSc Management", mode: "Online", ex: "European management curriculum" },
  { n: "Rushford Business School", s: "RBS", loc: "Geneva, Switzerland", type: "international", tags: ["Global degree", "Featured partner"], fee: "€7K – €15K", programmes: "MBA, DBA, Executive certificates", mode: "Fully online", ex: "Executive-focused, cohort learning" },
];
