
export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
  icon: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "sih-runner-up",
    title: "Runner Up - Smart India Hackathon",
    organization: "Government of India",
    description: "Secured first place in the college round of Smart India Hackathon, developing innovative technology solutions for real-world problems.",
    impact: [
      "Competed against 100+ teams from various colleges",
      "Developed a comprehensive solution addressing social challenges",
      "Demonstrated strong problem-solving and teamwork skills",
      "Gained recognition for technical innovation and presentation"
    ],
    icon: "🏆"
  },
  {
    id: "smart-dust-collector",
    title: "Smart Dust Collector",
    organization: "Summer Internship Project",
    description: "Designed and developed an intelligent dust collection system during summer internship, integrating IoT sensors and automated controls.",
    impact: [
      "Built end-to-end IoT solution with sensor integration",
      "Implemented automated dust detection algorithms",
      "Designed user-friendly interface for monitoring",
      "Applied theoretical knowledge to solve practical problems"
    ],
    icon: "🗂️"
  }
];

// Education data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  logo?: string;
}

export const educationData: Education[] = [
  {
    id: "uscit",
    institution: "University School of Computer and Information Technology (USCIT), GGSIPU",
    degree: "Master's in Computer Applications",
    duration: "Oct 2025 - July 2027",
    location: "New Delhi, India",
    gpa: "NA",
  },
  {
    id: "iitm",
    institution: "Institute of Information Technology and Management (IITM)",
    degree: "Bachelor's in Computer Applications",
    duration: "Oct 2022 - July 2025",
    location: "New Delhi, India",
    gpa: "8.4",
  }
];