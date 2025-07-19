// Experience data from Nikhila's resume

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  type?: "internship" | "part-time" | "full-time";
}

export const experienceData: Experience[] = [
  {
    id: "tech-mahindra",
    company: "Tech Mahindra Limited",
    role: "Cloud Computing Intern",
    duration: "Feb 2024 - Jul 2024",
    location: "Hyderabad, India",
    description: "Worked on optimizing cloud infrastructure and implementing automation strategies across multi-cloud environments.",
    achievements: [
      "Accomplished 30% performance boost in deployment pipelines, as measured by CI/CD job execution time, by optimizing cloud infrastructure across Azure and AWS",
      "Improved resource allocation by 25%, as verified by monitoring dashboards, by implementing infrastructure-as-code strategies and cost-optimization techniques",
      "Automated task workflows across multi-cloud environments, reducing manual intervention by 40%, by scripting repeatable deployments using Azure CLI and AWS SDK"
    ],
    technologies: ["AWS", "Azure", "CI/CD", "Infrastructure as Code", "Azure CLI", "AWS SDK", "Cloud Computing", "DevOps"],
    logo: "/images/logos/tech-mahindra.png",
    type: "internship"
  },
  {
    id: "srm-ml-intern",
    company: "SRM University, AP",
    role: "ML Research Intern - Distributed Systems",
    duration: "Jan 2024 - Jun 2024",
    location: "Andhra Pradesh, India",
    description: "Designed AI-powered caching system using machine learning models to optimize data retrieval in distributed systems.",
    achievements: [
      "Designed AI-powered caching system using CNN & MLP models, reducing data retrieval latency by 23%",
      "Applied association rule mining and sequence mining techniques, accelerating query response time by 25%",
      "Developed pattern recognition algorithms with Keras/TensorFlow, increasing cache hit rate by 35%"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "MLP", "Machine Learning", "Distributed Systems", "Data Mining", "Pattern Recognition"],
    logo: "/images/logos/srm-university.png",
    type: "internship"
  },
  {
    id: "research-intern-prediction",
    company: "Associate Dean Professor T Ragunathan",
    role: "Research Intern | Higher Education Prediction Algorithm",
    duration: "Jul 2022 - Sep 2022",
    location: "Guntur, Andhra Pradesh, India",
    description: "Built ML classification model for higher education admission prediction, processing large-scale student data to identify key admission factors.",
    achievements: [
      "Built ML classification model using Naive Bayes & KNN algorithms, achieving 78% prediction accuracy",
      "Processed 10,000+ student records, identifying key admission factors: CGPA, GRE, TOEFL scores",
      "Reduced data preprocessing time by 40% through automated cleaning and feature engineering",
      "Delivered predictive insights helping 200+ students optimize college application strategies"
    ],
    technologies: ["Classification", "MATLAB", "Machine Learning", "Naive Bayes", "KNN", "Data Preprocessing", "Feature Engineering", "Statistical Analysis"],
    logo: "/images/logos/research.png",
    type: "part-time"
  }
];