// Leadership and achievements data from Nikhila's resume

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
    id: "board-member",
    title: "Board Member",
    organization: "App Design and Development Club",
    description: "Led technical initiatives and mentored junior developers to improve their programming skills.",
    impact: [
      "Mentored 15+ junior developers",
      "Improved core programming skills by 60%",
      "Conducted tailored workshops and code reviews",
      "Implemented project-based training programs"
    ],
    icon: "👥"
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
    id: "northeastern",
    institution: "Northeastern University",
    degree: "Master's in Computer Science",
    duration: "Jan 2025 - May 2027",
    location: "Portland, Maine, USA",
    gpa: "3.83 / 4.00",
    logo: "/images/logos/northeastern.png"
  },
  {
    id: "srm",
    institution: "SRM University - AP",
    degree: "Bachelor of Science in Computer Science",
    duration: "Oct 2020 - May 2024",
    location: "Vijayawada, India",
    gpa: "7.71 / 10.00",
    logo: "/images/logos/srm.png"
  }
];