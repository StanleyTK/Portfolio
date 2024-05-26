import React from "react";
import { CiLink } from "react-icons/ci";

function Project({ theme, title, description, technologies, link, github, technologyUsed }) {
  const technologyUsedList = technologyUsed.split(',');

  return (
    <div className="bg-white dark:bg-[#0e182c] hover:bg-gray-100 dark:hover:bg-[#1a2d4e] transition-all duration-300 p-6 rounded-lg shadow-md hover:shadow-lg font-sans">
      <img className="w-60" src={technologies + theme} alt="Technologies" />
      <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mt-4">{title}</h3>
      <p className="leading-7 text-gray-700 dark:text-gray-300 font-light text-base mt-4">{description}</p>
      <div className="flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
        <a href={link} className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
          <span className="text-sm self-center">View Project</span>
        </a>
        <a href={github} className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
          <span className="text-sm self-center">View Github</span>
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologyUsedList.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-blue-600 hover:text-white">
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Project;
