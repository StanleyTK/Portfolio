import React from "react";

function EducationSection({ education }) {
  return (
    <section id="education" className="px-6 md:px-24 mt-10 font-sans">
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        {education.map((edu, index) => (
          <article
            key={index}
            className="p-6 bg-white dark:bg-[#0e182c] rounded-lg shadow-md transition-all duration-300 transform hover:shadow-lg hover:scale-105 dark:hover:bg-[#1a2d4e]"
          >
            <div className="flex items-center mb-4">
              <img
                src={edu.image}
                alt={`${edu.institution} logo`}
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {edu.degree}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  {edu.school}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {edu.year}
                </p>
              </div>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {edu.description}
            </p>
            {edu.activities && (
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                <strong>Activities: </strong>{edu.activities}
              </p>
            )}
            {edu.awards && (
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                <strong>Awards: </strong>{edu.awards}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
