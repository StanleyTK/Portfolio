import React from "react";

function ExperienceCard({ image, role, company, year, description, location, technologies, technologyUsed }) {
  const descriptionPoints = description.split('\n');
  const technologyUsedList = technologyUsed.split(',');

  return (
    <div className="bg-white dark:bg-[#0e182c] hover:bg-gray-100 dark:hover:bg-[#1a2d4e] transition-all duration-300 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 font-sans">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <img src={image} alt={company} className="h-16 w-16 rounded-full border border-gray-300 dark:border-gray-700" />
          <div>
            <h5 className="text-lg font-bold text-gray-900 dark:text-gray-100">{role}</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{year}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{location}</p>
          </div>
        </div>
        <div className="mt-4">
          <img src={technologies} alt="Technologies" className="h-12 w-auto" />
        </div>
      </div>
      <ul className="mt-4 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
        {descriptionPoints.map((point, index) => (
          <li key={index} className="flex">
            <span className="flex-shrink-0">•</span>
            <span className="flex-grow pl-2">{point.trim()}</span>
          </li>
        ))}
      </ul>
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

export default ExperienceCard;
