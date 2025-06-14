import React from "react";

function SkillsSection({ theme, skills }) {
  return (
    <div id="skills" className="w-full px-6 md:px-24 mt-20 font-sans">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12 mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="p-6 bg-white dark:bg-[#0e182c] rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#1a2d4e]">
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">{skill.title}</h4>
            <p className="leading-7 mt-2 text-base font-light text-gray-700 dark:text-gray-300">{skill.description}</p>
            <img className="w-48 mt-4" src={skill.image + theme} alt={skill.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
