// Projects data from Nikhila's portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "billrewards",
    title: "BillRewards | Universal Loyalty Platform",
    description: "Blockchain-powered universal loyalty solution converting receipts into crypto rewards",
    longDescription: "Built at LiveAI at Harvard. A blockchain-powered universal loyalty solution that converts receipts into crypto rewards. Features OCR receipt verification, smart contract integration, gamified token redemption system, and cross-merchant reward accumulation. Solves fragmented loyalty programs through unified blockchain rewards.",
    technologies: ["OCR (Tesseract.js)", "React.js", "Node.js", "Express.js", "Blockchain Development", "Tesseract", "Cryptocurrency Integration", "Receipt Verification", "Gamification", "JavaScript", "RESTful APIs", "Image Processing"],
    features: [      "OCR receipt verification for automatic reward calculation",
      "Smart contract integration for secure token distribution",
      "Gamified token redemption system increasing user engagement",
      "Cross-merchant reward accumulation for universal loyalty",
      "Real-time blockchain transaction processing",
      "User-friendly dashboard for tracking rewards and redemptions"
    ],
    image: "/images/projects/billrewards/billrewards.jpg",
    githubUrl: "https://github.com/Achyut21/billrewards",
    category: "blockchain"
  },
  {
    id: "cryptovault-ipfs",
    title: "CryptoVault IPFS | Decentralized Backup Storage & Recovery System",
    description: "Decentralized backup and recovery system leveraging IPFS for secure file storage",
    longDescription: "A decentralized backup and recovery system leveraging IPFS for secure file storage. Combines AES-256-CBC encryption with RSA digital signatures for tamper-proof file storage. Features two-step recovery process, metadata verification, and complete user control over data privacy without reliance on centralized cloud providers.",
    technologies: ["IPFS", "Decentralized Storage", "React.js", "Node.js", "Express.js", "Helia", "AES-256-CBC Encryption", "RSA Digital Signatures", "Cryptography", "File Encryption", "web3.js", "JavaScript", "Security Implementation"],
    features: [
      "AES-256-CBC encryption for secure file storage",
      "RSA digital signatures for metadata integrity verification",
      "Two-step recovery process for seamless file retrieval",
      "Complete privacy control without centralized dependencies",
      "Tamper-proof storage using IPFS content addressing",
      "User-friendly interface for file encryption and decryption"
    ],
    image: "/images/projects/cryptovault-ipfs/cryptovault-ipfs.webp",    githubUrl: "https://github.com/Achyut21/CVIPFS",
    category: "blockchain"
  },
  {
    id: "lightning-time",
    title: "Lightning Time | Bitcoin Lightning Payments",
    description: "Decentralized time tracking web app with automatic Bitcoin payments",
    longDescription: "Built during MIT BITCOIN EXPO 2025 Hackathon. A decentralized time tracking web application that automatically pays users in Bitcoin Satoshis through the Lightning Network for each hour worked. Features real-time payment processing, admin dashboard with analytics, and planned Soulbound Token (SBT) authentication for secure admin access.",
    technologies: ["RESTful APIs", "Cryptocurrency Payment Processing", "React.js", "Node.js", "Express.js", "Bitcoin Lightning Network", "Vite", "LNbits", "JavaScript", "Real-time Payments", "Cryptocurrency Integration", "Tailwind CSS", "Soulbound Tokens (SBTs)"],
    features: [
      "Real-time time tracking with automatic Bitcoin payments",
      "Lightning Network integration for instant micropayments",
      "Admin dashboard with comprehensive analytics",
      "Payment history and work pattern visualization",
      "Planned SBT authentication for secure admin access",
      "Responsive design for all devices"
    ],
    image: "/images/projects/lightning-time/lightning-time.jpg",
    githubUrl: "https://github.com/Achyut21/MIT-LIGHTING-APP",
    demoUrl: "https://devpost.com/software/lightning-time",
    category: "blockchain"
  },
  {
    id: "neunotes",
    title: "NeuNotes | Academic Notes Sharing Platform",    description: "Comprehensive academic notes sharing platform with advanced database programming",
    longDescription: "A comprehensive academic notes sharing platform with advanced database programming features. Implements role-based access control (Admin/Faculty/Student), course enrollment system, file upload/preview, rating system, and social features. Built with 12-table normalized database using stored procedures, functions, and triggers for data integrity.",
    technologies: ["MySQL", "Stored Procedures", "React.js", "Node.js", "Express.js", "Database Programming", "Database Triggers", "Functions", "Raw SQL", "Session Authentication", "File Upload (Multer)", "Multer", "Role-Based Access Control (RBAC)", "React Router", "Zustand", "Database Normalization"],
    features: [
      "Role-based access control for Admin, Faculty, and Students",
      "12-table normalized database with stored procedures and triggers",
      "Course enrollment system with prerequisites",
      "File upload/preview with rating and comment system",
      "Advanced search and filtering capabilities",
      "Analytics dashboard for usage statistics"
    ],
    image: "/images/projects/neunotes/neunotes.webp",
    githubUrl: "https://github.com/achyut21/neunotes",
    category: "web"
  },
  {
    id: "noteit",
    title: "NoteIT | Mobile Study Notes Sharing App",
    description: "Android mobile app for students to share and access educational resources",
    longDescription: "Android mobile application enabling students to share and access educational resources with gamification elements. Built with 9 activities and 4 fragments, featuring secure Firebase authentication, PDF upload/download system, and badge rewards for user engagement.",
    technologies: ["UI/UX Design", "Android Studio", "Java", "Firebase", "Google Material Design", "XML", "Mobile Development", "User Authentication", "File Management"],    features: [
      "9 activities and 4 fragments for comprehensive functionality",
      "Secure Firebase authentication and data storage",
      "PDF upload/download system for educational resources",
      "Badge rewards system for user engagement",
      "Material Design UI for intuitive navigation",
      "Real-time synchronization across devices"
    ],
    image: "/images/projects/noteit/noteit.jpg",
    githubUrl: "https://github.com/Achyut21/Note_IT-Note-sharing-APP-",
    category: "mobile"
  },
  {
    id: "skillbridge-ai",
    title: "SkillBridge AI | AI-Powered Career Development Platform",
    description: "Co-founded AI platform bridging gap between job seekers and career opportunities",
    longDescription: "Co-founded SkillBridge AI, an innovative platform that leverages artificial intelligence to bridge the gap between job seekers and career opportunities. Features personalized skill assessment, AI-driven career recommendations, automated resume optimization, and intelligent job matching. The platform uses machine learning algorithms to analyze user profiles and provide tailored career development paths.",
    technologies: ["Artificial Intelligence", "Machine Learning", "Python", "TensorFlow", "Natural Language Processing", "React.js", "Node.js", "MongoDB", "Express.js", "OpenAI API", "Data Analytics", "RESTful APIs"],
    features: [
      "AI-powered skill assessment and gap analysis",
      "Personalized career path recommendations",
      "Automated resume optimization using NLP",
      "Intelligent job matching algorithm",
      "Real-time industry trends and skill demand analysis",
      "Interactive career development roadmaps"
    ],
    image: "/images/projects/skillbridge-ai/skillbridge-ai.svg",
    githubUrl: "https://github.com/Achyut21/SkillBridge-ai",
    category: "ai"
  }
];