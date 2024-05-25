import React from "react";

function ExperienceCard({ image, role, company, year, description }) {
  return (
    <div className="hover:bg-gray-50 hover:dark:bg-[#101e38] transition-all duration-300 p-6 md:rounded-xl shadow-md hover:shadow-lg">
        <div className="flex items-center gap-4">
            <img src={image} alt={company} className="h-16 w-16 rounded-full" />
            <div>
                <h5 className="text-lg font-bold text-gray-800 dark:text-gray-200">{role}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">{year}</p>
            </div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

export default ExperienceCard;
