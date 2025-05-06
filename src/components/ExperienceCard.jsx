import React from 'react';

const ExperienceCard = ({ 
  companyLogo, 
  position, 
  company, 
  duration, 
  description,
  skills = []
}) => {
  return (
    <div className="flex mb-12 relative">
      {/* Timeline line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#354155] -z-10"></div>
      
      {/* Company logo circle */}
      <div className="relative">
        <div className="bg-[#0D1117] border-2 border-[#354155] rounded-full w-10 h-10 flex items-center justify-center z-10">
          {companyLogo ? (
            <img src={companyLogo} alt={company} className="w-7 h-7 rounded-full" />
          ) : (
            <div className="w-7 h-7 rounded-full bg-[#a6bbcc] flex items-center justify-center">
              {company.charAt(0)}
            </div>
          )}
        </div>
      </div>
      
      {/* Experience content */}
      <div className="ml-8  border border-[#354155] rounded-xl p-5 w-full max-w-xl">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">{position}</h3>
            <p className="text-[#a6bbcc] text-sm">{company}</p>
          </div>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>
        
        <p className="mt-4 text-sm text-gray-300">{description}</p>
        
        {skills.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-medium text-white mb-2">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="inline-block text-xs px-2 py-1 rounded-md bg-[#1D2736] text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <p className="mt-4 text-sm text-gray-400">{duration}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;