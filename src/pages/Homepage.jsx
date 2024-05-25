import React from "react";
import { useContext } from "react";
import Project from "../components/Project";
import ExperienceCard from "../components/ExperienceCard";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import user_info from "../data/user_info.js";
import ToggleTheme from "../components/ToggleTheme.jsx";
import { AppContext } from "../App.jsx";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);

  return (
    <div className="bg-gray-50 dark:bg-[#101e38]">
      <div className="lg:w-[1200px] md:mx-auto h-full border-x border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0e182c]">
        <ToggleTheme switchTheme={switchTheme} />

        <Landing />

        <div id="experience" className="px-6 md:px-24 mt-20">
          <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Experience</h4>
          <hr className="border-b-2 border-black-600 mb-6"/>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 gap-8 md:gap-12">
            {user_info.experience.map((job, index) => (
              <ExperienceCard 
                key={index} 
                image={job.image} 
                role={job.role} 
                company={job.company} 
                year={job.year} 
                location={job.location}
                description={job.description} 
                technologies={job.technologies} 
                technologyUsed={job.technologyUsed} 
              />
            ))}
          </div>
        </div>

        {/* Download Button for Resume */}
        <div className="flex justify-start mt-12 px-6 md:px-24">
          <a 
            href="public/StanleyKimResume.pdf" 
            download="Stanley_Kim_Resume.pdf" 
            className="px-6 py-3 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-blue-600 hover:text-gray-100 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        <div id="projects" className="px-6 md:px-24 mt-20">
          <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Projects</h4>
          <hr className="border-b-2 border-black-600 mb-6"/>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {user_info.projects.map((project, index) => (
              <Project 
                key={index} 
                theme={theme} 
                title={project.title} 
                description={project.description} 
                technologies={project.technologies} 
                github={project.github} 
                link={project.link} 
                technologyUsed={project.technologyUsed}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-start mt-12 px-6 md:px-24">
          <a 
            href="https://github.com/StanleyTK" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-blue-600 hover:text-gray-100 transition-all duration-300"
          >
            View All Projects
          </a>
        </div>

        <SkillsSection theme={theme}  skills={[
          {
            title: "Programming Languages",
            description: user_info.skills.languages.description,
            image: user_info.skills.languages.image
          },
          {
            title: "Frameworks & Libraries",
            description: user_info.skills.frameworks.description,
            image: user_info.skills.frameworks.image
          },
          {
            title: "Tools & Platforms",
            description: user_info.skills.tools.description,
            image: user_info.skills.tools.image
          }
        ]} />

        <ContactSection />

        <hr className="mt-12 border border-gray-300 dark:border-gray-700" />

        <Footer />
      </div>
    </div>
  )
}

export default Homepage;
