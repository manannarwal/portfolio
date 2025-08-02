
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
    id: "banao",
    company: "Banao Technologies",
    role: "Software Testing Intern",
    duration: "Jun 2023 - Nov 2023",
    location: "New Delhi, India",
    description: "Enhanced user experiences on iOS & Android apps by identifying bugs and validating performance fixes, contributing to a 40% reduction in load time. Executed manual and regression testing across multiple builds, ensuring seamless API integration and UI functionality. Reported critical issues and verified fixes using tools like Postman, Chrome DevTools, and Figma.",
    achievements: [

    ],
    technologies: ["Figma", "Postman", "Regression Testing", "Adhoc Testing", "Compatibility Testing"],
    type: "internship"
  },
  {
    id: "scientificatt",
    company: "Scientificatt",
    role: "Sales and Business Development Executive",
    duration: "Aug 2022 - Nov 2022",
    location: "New Delhi, India",
    description: "Validated CRM workflows and tested outreach processes across 10+ client accounts, ensuring accurate lead tracking and reporting. Reviewed campaign performance data and identified issues affecting engagement, contributing to a 15% improvement in outreach quality. Conducted quality checks on cold email templates, improving consistency and compliance with targeting criteria.",
    achievements: [
      
    ],
    technologies: ["CRM", "LinkedIn Sales Navigator", "Email Marketing", "Lead Generation", "Data Analysis"],
    type: "internship"
  }
];