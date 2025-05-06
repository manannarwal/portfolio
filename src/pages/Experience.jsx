import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import Exp1 from '../assets/Exp1.jpeg';

const Experience = () => {
  // Sample experience data
  const experiences = [
    {
      companyLogo: Exp1, // Can add company logo image path here
      position: "Software Testing Intern",
      company: "Banao Technologies",
      duration: "June 2023 - Nov 2023",
      description: "Enhanced user experiences on Neurobit PSG & Holter Portal by resolving bugs & reduced load time by 40%. Built Neurobit Analytics portal using React Js with seamless interaction of REST APIs using Axios, Redux and React Query. Refactored previous code to TypeScript, updated with new dependency and integrated with Vite with Jest for Unit Testing.",
      skills: ["Black Box Testing","Regression Testing", "Adhoc Testing", "Functional Testing", "Compatibility Testing", "Manual Testing"]
    }
  ];

  return (
    <div>
      <div className="mx-8 font-['Poppins'] tracking-wider">
        <div className="mt-10 flex items-center">
          <p className="text-2xl text-[#a6bbcc] font-extrabold">experience</p>
          <div className="ml-4 h-0.5 flex-grow bg-[#a6bbcc]"></div>
        </div>

        {/* Timeline Container */}
        <div className="mt-10 -ml-2">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              companyLogo={exp.companyLogo}
              position={exp.position}
              company={exp.company}
              duration={exp.duration}
              description={exp.description}
              skills={exp.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;