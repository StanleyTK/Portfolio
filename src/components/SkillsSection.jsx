import React from "react";

function SkillsSection({ theme = "", skills = [] }) {
  return (
    <section id="skills" className="w-full px-6 md:px-24 mt-10 font-sans">
      {/* three cards per row on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skills.map(({ title, logos }, idx) => (
          <article
            key={idx}
            className="p-6 bg-white dark:bg-[#0e182c] rounded-lg shadow-md
                       hover:shadow-lg transform hover:scale-105 transition-all
                       duration-300 hover:bg-gray-100 dark:hover:bg-[#1a2d4e]"
          >
            <h3 className="text-lg font-medium text-center text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-x-8 gap-y-6 justify-items-center">
              {logos.map(({ name, src }) => (
                <div key={name} className="flex flex-col items-center">
                  <img
                    src={src + theme}
                    alt={name}
                    className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                  />
                  <span className="mt-2 text-sm text-gray-900 dark:text-gray-100">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;