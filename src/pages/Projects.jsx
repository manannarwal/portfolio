import React from 'react';
import ProjectCard from '../components/ProjectCard';
// Import images directly with require for better compatibility
const project1Image = new URL('../assets/Project1.png', import.meta.url).href;
const project2Image = new URL('../assets/Project2.png', import.meta.url).href;

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      title: "MovFlix",
      description: "Movies/Series Streaming Website",
      technologies: ["React JS", "JS", "Tailwind", "HTML", "CSS"],
      liveLink: "https://watchmojo.netlify.app",
      codeLink: "https://github.com/manannarwal/movflix",
      imageUrl: project1Image  // Changed to imageUrl for clarity
    },
    {
      title: "MuseMate",
      description: "Chatbot based ticketing website for museums",
      technologies: ["React JS", "Express", "Particle JS", "Node.js", "GSAP", "Python", "PHP"],
      liveLink: "https://manannarwal.me/SIH24/",
      codeLink: "https://github.com/manannarwal/SIH24",
      imageUrl: project2Image  // Changed to imageUrl for clarity
    }
  ];

  return (
    <div>
      <div className="mx-8 font-['Poppins'] tracking-wider">
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-2xl text-[#a6bbcc] font-extrabold">#projects</p>
            <div className="ml-4 h-0.5 w-40 bg-[#a6bbcc]"></div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
              background={project.background}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;