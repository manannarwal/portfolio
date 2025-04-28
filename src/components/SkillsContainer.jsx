import React from "react";

const SkillsContainer = ({ title, skills }) => {
  return (
    <div className="mt-6 rounded-lg border border-gray-700 p-3 sm:p-5">
      <div className="mb-4 sm:mb-6 text-xl font-semibold text-[#a6bbcc] text-center">{title}</div>
      
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base"
          >
            <span className={skill.iconColor}>{skill.icon}</span>
            <span className="text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;