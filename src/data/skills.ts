// Skills data categorized from Nikhila's resume

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 88 },
      { name: "Java", level: 85 },
      { name: "C++", level: 80 },
      { name: "Dart", level: 75 },
      { name: "Kotlin", level: 75 },
      { name: "Solidity", level: 70 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Three.js", level: 75 },
      { name: "Android SDK", level: 80 }
    ]
  },
  {
    title: "Backend & Databases",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Flask", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 90 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Azure", level: 80 },
      { name: "GCP", level: 78 },
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 75 },
      { name: "Jenkins", level: 70 }
    ]
  },  {
    title: "ML & Data Science",
    icon: "🤖",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 78 },
      { name: "Keras", level: 82 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "OpenCV", level: 75 }
    ]
  },
  {
    title: "Blockchain & Web3",
    icon: "🔗",
    skills: [
      { name: "Web3.js", level: 78 },
      { name: "Ethers.js", level: 75 },
      { name: "IPFS", level: 70 },
      { name: "Ethereum", level: 75 },
      { name: "Polygon", level: 72 },
      { name: "Aptos", level: 68 },
      { name: "Move", level: 65 }
    ]
  }
];