import React from "react";
import { CiLink } from "react-icons/ci";

function Project({ theme, title, description, technologies, link, github, technologyUsed }) {
  // Split technologyUsed into an array
  const technologyUsedList = technologyUsed.split(',');

  return (
    <div className="hover:bg-gray-50 hover:dark:bg-[#101e38] transition-all duration-300 p-6 md:rounded-xl shadow-md hover:shadow-lg">
      <img className="w-60" src={technologies + theme} alt="Technologies" />
      <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300 mt-4">{title}</h3>
      <p className="leading-7 text-gray-500 dark:text-gray-300 font-light text-base mt-4">{description}</p>
      <div className="flex gap-6 text-gray-500 dark:text-gray-300 font-medium">
        <a href={link} className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Project</span>
        </a>
        <a href={github} className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Github</span>
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologyUsedList.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Project;
