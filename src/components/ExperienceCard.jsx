import React from "react";

function ExperienceCard({ image, role, company, year, description, location, technologies, technologyUsed }) {
  // Split the description into bullet points based on the newline character
  const descriptionPoints = description.split('\n');
  // Split technologyUsed into an array
  const technologyUsedList = technologyUsed.split(',');

  return (
    <div className="hover:bg-gray-50 hover:dark:bg-[#101e38] transition-all duration-300 p-6 md:rounded-xl shadow-md hover:shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={image} alt={company} className="h-16 w-16 rounded-full" />
          <div>
            <h5 className="text-lg font-bold text-gray-800 dark:text-gray-200">{role}</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{year}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{location}</p>
          </div>
        </div>
        <div className="mt-4">
          <img src={technologies} alt="Technologies" className="h-12 w-auto" />
        </div>
      </div>
      <ul className="mt-4 text-gray-600 dark:text-gray-300 list-disc list-inside">
        {descriptionPoints.map((point, index) => (
          <li key={index} className="mb-2 flex">
            <span className="flex-shrink-0">•</span>
            <span className="flex-grow pl-2">{point.trim()}</span>
          </li>
        ))}
      </ul>
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

export default ExperienceCard;
