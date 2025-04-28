import React from "react";
import "@fontsource/plus-jakarta-sans";
import { FaReact, FaHtml5, FaJs, FaNodeJs, FaGit, FaGithub, FaFigma   } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiShadcnui, SiMaterialformkdocs, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import { GoCodespaces } from "react-icons/go";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNetlify, SiPostman, SiKalilinux  } from "react-icons/si";
import SkillsContainer from "../components/SkillsContainer";

const Skills = () => {

  const frontendSkills = [
    { name: "React Js", icon: <FaReact />, iconColor: "text-[#61DAFB]" },
    { name: "Next Js", icon: <RiNextjsFill />, iconColor: "" },
    { name: "HTML", icon: <FaHtml5 />, iconColor: "text-[#E34F26]" },
    { name: "CSS", icon: <IoLogoCss3 />, iconColor: "text-[#1572B6]" },
    { name: "JavaScript", icon: <FaJs />, iconColor: "text-[#F7DF1E]" },
    { name: "Tailwind", icon: <RiTailwindCssFill />, iconColor: "text-[#7952B3]" },
    { name: "Shadcn", icon: <SiShadcnui />, iconColor: "text-[#764ABC]" },
    { name: "Material UI", icon: <SiMaterialformkdocs />, iconColor: "text-[#7952B3]" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, iconColor: "text-[#68A063]" },
    { name: "Express", icon: <SiExpress />, iconColor: "text-gray-200" },
    { name: "MongoDB", icon: <SiMongodb />, iconColor: "text-[#4DB33D]" },
    { name: "MySQL", icon: <GrMysql />, iconColor: "text-[#336791]" },
    { name: "PostgreSQL", icon: <BiLogoPostgresql />, iconColor: "text-[#336791]" },
    { name: "Firebase", icon: <SiFirebase />, iconColor: "text-[#FFCA28]" },
    { name: "REST API", icon: <TbApi />, iconColor: "text-gray-200" },
  ];

  const otherSkills = [
    { name: "Git", icon: <FaGit />, iconColor: "text-[#68A063]" },
    { name: "GitHub", icon: <FaGithub />, iconColor: "text-gray-200" },
    { name: "Netlify", icon: <SiNetlify />, iconColor: "text-[#4DB33D]" },
    { name: "Vercel", icon: <RiVercelFill />, iconColor: "text-[#336791]" },
    { name: "Postman", icon: <SiPostman />, iconColor: "text-[#336791]" },
    { name: "Figma", icon: <FaFigma />, iconColor: "text-gray-200" },
    { name: "Codespaces", icon: <GoCodespaces />, iconColor: "text-[#FFCA28]" },
    { name: "Kali", icon: <SiKalilinux />, iconColor: "text-[#FFCA28]" },
  ];

  return (
    <div>
      

      {/* ABOUT */}


      {/* Skills Section */}
      <div className="mx-8 mt-10 font-['Poppins'] tracking-wider">
        <div className="flex items-center">
          <p className="text-2xl text-[#a6bbcc] font-extrabold">skills</p>
          <div className="ml-4 h-0.5 flex-grow bg-[#a6bbcc]"></div>
        </div>

        <SkillsContainer title="Frontend" skills={frontendSkills} />
        
        <SkillsContainer title="Backend" skills={backendSkills} />

        <SkillsContainer title="Other" skills={otherSkills} />
      </div>
    </div>
  );
};

export default Skills;
