import React from "react";

function EducationSection({ education }) {
  return (
    <div id="education" className="px-6 md:px-24 mt-20 font-sans">
      <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Education</h4>
      <hr className="border-b-2 border-black-600 mb-6" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        {education.map((edu, index) => (
          <div key={index} className="p-6 bg-white dark:bg-[#0e182c] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#1a2d4e]">
            <div className="flex items-center mb-4">
              <img src={edu.image} alt={edu.institution} className="h-12 w-12 rounded-full mr-4" />
              <div>
                <h5 className="text-lg font-medium text-gray-900 dark:text-gray-100">{edu.degree}</h5>
                <p className="text-base text-gray-700 dark:text-gray-300">{edu.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">{edu.year}</p>
              </div>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300">{edu.description}</p>
            {edu.activities && (
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2"><strong>Activities: </strong>{edu.activities}</p>
            )}
            {edu.awards && (
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2"><strong>Awards: </strong>{edu.awards}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;
