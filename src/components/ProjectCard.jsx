import React from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  liveLink, 
  codeLink,
  background,
  imageUrl 
}) => {
  return (
    <div className={`rounded-xl border border-gray-700 overflow-hidden transition-transform hover:scale-[1.02] duration-300 flex flex-col h-full ${!imageUrl ? background || 'bg-gray-900' : ''}`}>
      {/* Project image at the top */}
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Project title & description */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-5">{description}</p>
        </div>
        
        {/* Tech stack badges */}
        <div className="mb-5 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs rounded px-2 py-1 bg-gray-800 bg-opacity-80 text-gray-200">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="mt-auto flex gap-3">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs border border-gray-500 px-3 py-1 rounded-full inline-flex items-center gap-1 hover:bg-gray-800 transition-colors"
            >
              <span>Live</span>
            </a>
          )}
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs border border-gray-500 px-3 py-1 rounded-full inline-flex items-center hover:bg-gray-800 transition-colors"
            >
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;